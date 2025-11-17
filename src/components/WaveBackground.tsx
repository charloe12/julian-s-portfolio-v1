import { useEffect, useRef } from 'react';

interface WaveBackgroundProps {
  className?: string;
}

export const WaveBackground = ({ className = '' }: WaveBackgroundProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Wave configuration
    const waves = [
      {
        amplitude: 40,
        frequency: 0.015,
        speed: 0.02,
        offset: 0,
        color: 'rgba(26, 144, 143, 0.3)', // Teal
        y: canvas.height * 0.3,
      },
      {
        amplitude: 30,
        frequency: 0.02,
        speed: 0.025,
        offset: Math.PI,
        color: 'rgba(45, 183, 139, 0.25)', // Green-teal
        y: canvas.height * 0.4,
      },
      {
        amplitude: 50,
        frequency: 0.012,
        speed: 0.015,
        offset: Math.PI / 2,
        color: 'rgba(23, 162, 184, 0.2)', // Blue
        y: canvas.height * 0.5,
      },
      {
        amplitude: 35,
        frequency: 0.018,
        speed: 0.03,
        offset: Math.PI * 1.5,
        color: 'rgba(72, 187, 120, 0.15)', // Light green
        y: canvas.height * 0.6,
      },
    ];

    let animationFrameId: number;
    let time = 0;

    // Draw wave function
    const drawWave = (wave: typeof waves[0]) => {
      if (!ctx || !canvas) return;

      ctx.beginPath();
      ctx.moveTo(0, canvas.height);

      // Draw wave curve
      for (let x = 0; x <= canvas.width; x += 5) {
        const y =
          wave.y +
          Math.sin(x * wave.frequency + time * wave.speed + wave.offset) * wave.amplitude;
        
        if (x === 0) {
          ctx.lineTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }

      // Complete the shape
      ctx.lineTo(canvas.width, canvas.height);
      ctx.lineTo(0, canvas.height);
      ctx.closePath();

      // Fill with gradient
      const gradient = ctx.createLinearGradient(0, wave.y - wave.amplitude, 0, canvas.height);
      gradient.addColorStop(0, wave.color);
      gradient.addColorStop(1, wave.color.replace(/[\d.]+\)$/, '0.05)'));
      
      ctx.fillStyle = gradient;
      ctx.fill();
    };

    // Animation loop
    const animate = () => {
      if (!ctx || !canvas) return;

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update wave positions based on canvas size
      waves.forEach((wave) => {
        const baseY = canvas.height * (wave === waves[0] ? 0.3 : wave === waves[1] ? 0.4 : wave === waves[2] ? 0.5 : 0.6);
        wave.y = baseY;
      });

      // Draw all waves
      waves.forEach((wave) => drawWave(wave));

      // Increment time
      time += 0.5;

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{ mixBlendMode: 'overlay' }}
    />
  );
};
