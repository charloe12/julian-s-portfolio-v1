import { useEffect, useRef } from 'react';

interface GolfAnimationProps {
  className?: string;
}

export const GolfAnimation = ({ className = '' }: GolfAnimationProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const setCanvasSize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    interface GolfBall {
      x: number;
      y: number;
      vx: number;
      vy: number;
      startX: number;
      startY: number;
      progress: number;
      speed: number;
      size: number;
      opacity: number;
    }

    const balls: GolfBall[] = [];
    const numBalls = 8;

    // Initialize golf balls
    for (let i = 0; i < numBalls; i++) {
      balls.push({
        x: Math.random() * canvas.width,
        y: canvas.height + Math.random() * 200,
        vx: 1 + Math.random() * 2,
        vy: -3 - Math.random() * 2,
        startX: 0,
        startY: 0,
        progress: Math.random(),
        speed: 0.003 + Math.random() * 0.002,
        size: 4 + Math.random() * 4,
        opacity: 0.3 + Math.random() * 0.3,
      });
      balls[i].startX = balls[i].x;
      balls[i].startY = balls[i].y;
    }

    const drawGolfBall = (ball: GolfBall) => {
      ctx.save();
      ctx.globalAlpha = ball.opacity;
      
      // Draw golf ball
      ctx.fillStyle = '#ffffff';
      ctx.beginPath();
      ctx.arc(ball.x, ball.y, ball.size, 0, Math.PI * 2);
      ctx.fill();
      
      // Add dimple pattern
      ctx.fillStyle = 'rgba(200, 200, 200, 0.3)';
      for (let i = 0; i < 3; i++) {
        const angle = (i * Math.PI * 2) / 3;
        const dx = Math.cos(angle) * ball.size * 0.4;
        const dy = Math.sin(angle) * ball.size * 0.4;
        ctx.beginPath();
        ctx.arc(ball.x + dx, ball.y + dy, ball.size * 0.2, 0, Math.PI * 2);
        ctx.fill();
      }
      
      // Draw trailing arc
      ctx.strokeStyle = `rgba(255, 255, 255, ${ball.opacity * 0.3})`;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(ball.x, ball.y);
      ctx.quadraticCurveTo(
        ball.x - ball.vx * 10,
        ball.y - ball.vy * 5,
        ball.x - ball.vx * 20,
        ball.y
      );
      ctx.stroke();
      
      ctx.restore();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      balls.forEach((ball) => {
        // Update position with arc trajectory
        ball.x += ball.vx;
        ball.y += ball.vy;
        
        // Apply gravity
        ball.vy += 0.08;
        
        // Reset when ball goes off screen
        if (ball.y > canvas.height + 50 || ball.x > canvas.width + 50 || ball.x < -50) {
          ball.x = -20 - Math.random() * 50;
          ball.y = canvas.height * (0.3 + Math.random() * 0.5);
          ball.vx = 1.5 + Math.random() * 2.5;
          ball.vy = -3 - Math.random() * 3;
          ball.startX = ball.x;
          ball.startY = ball.y;
        }

        drawGolfBall(ball);
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', setCanvasSize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
      style={{ opacity: 0.6 }}
    />
  );
};
