import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Waves, Trophy, Mail, Phone, MapPin } from "lucide-react";
import surfLesson1 from "@/assets/surf-lesson-1.jpg";
import surfLesson2 from "@/assets/surf-lesson-2.jpg";
import surfLesson3 from "@/assets/surf-lesson-3.jpg";
import golfLesson1 from "@/assets/golf-lesson-1.jpg";
import golfLesson2 from "@/assets/golf-lesson-2.jpg";
import golfLesson3 from "@/assets/golf-lesson-3.jpg";
import logo from "@/assets/ride-and-swing-logo.png";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-primary/95 backdrop-blur-sm z-50 border-b border-primary-foreground/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <img src={logo} alt="Ride & Swing - Surf and Golf Lessons" className="h-12" />
            <div className="flex gap-6">
              <a href="#about" className="text-primary-foreground hover:text-accent transition-colors">About</a>
              <a href="#services" className="text-primary-foreground hover:text-accent transition-colors">Services</a>
              <a href="#gallery" className="text-primary-foreground hover:text-accent transition-colors">Gallery</a>
              <a href="#contact" className="text-primary-foreground hover:text-accent transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-primary via-primary to-secondary">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-6">
            Master the Waves & Greens
          </h2>
          <p className="text-xl text-accent mb-8 max-w-2xl mx-auto">
            Professional surf and golf instruction with personalized coaching to help you reach your goals
          </p>
          <Button size="lg" variant="secondary" className="text-lg">
            Book a Lesson
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-muted">
        <div className="container mx-auto max-w-4xl">
          <h3 className="text-4xl font-bold text-center mb-12 text-foreground">About Julian</h3>
          <div className="text-lg text-foreground space-y-4 leading-relaxed">
            <p>
              With over 15 years of experience in both surfing and golf, I've dedicated my life to helping 
              others discover the joy and challenge of these incredible sports.
            </p>
            <p>
              Whether you're catching your first wave or perfecting your golf swing, I provide personalized 
              instruction tailored to your skill level and goals. My teaching philosophy emphasizes technique, 
              safety, and most importantly—having fun while learning.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4">
        <div className="container mx-auto">
          <h3 className="text-4xl font-bold text-center mb-12 text-foreground">Services</h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Surf Lessons */}
            <Card className="border-2 border-secondary hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-secondary rounded-full">
                    <Waves className="w-12 h-12 text-secondary-foreground" />
                  </div>
                </div>
                <h4 className="text-2xl font-bold text-center mb-4 text-card-foreground">Surf Lessons</h4>
                <ul className="space-y-3 text-card-foreground">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Beginner to advanced instruction</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Ocean safety and wave reading</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Equipment provided</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Private and group sessions available</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Video analysis for technique improvement</span>
                  </li>
                </ul>
                <div className="mt-6 text-center">
                  <Button variant="default" className="w-full">Book Surf Lesson</Button>
                </div>
              </CardContent>
            </Card>

            {/* Golf Lessons */}
            <Card className="border-2 border-accent hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-accent rounded-full">
                    <Trophy className="w-12 h-12 text-accent-foreground" />
                  </div>
                </div>
                <h4 className="text-2xl font-bold text-center mb-4 text-card-foreground">Golf Lessons</h4>
                <ul className="space-y-3 text-card-foreground">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Full swing and short game coaching</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Course management strategies</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Mental game development</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Club fitting and equipment advice</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Playing lessons on the course</span>
                  </li>
                </ul>
                <div className="mt-6 text-center">
                  <Button variant="default" className="w-full">Book Golf Lesson</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 px-4 bg-muted">
        <div className="container mx-auto">
          <h3 className="text-4xl font-bold text-center mb-4 text-foreground">Gallery</h3>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            See our students in action as they master the waves and perfect their golf game
          </p>
          
          {/* Surf Lessons Gallery */}
          <div className="mb-16">
            <h4 className="text-2xl font-bold mb-6 text-foreground flex items-center justify-center gap-2">
              <Waves className="w-6 h-6 text-secondary" />
              Surf Lessons
            </h4>
            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              <div className="overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow border-2 border-secondary/30">
                <img 
                  src={surfLesson1} 
                  alt="Surf instructor teaching beginner student on surfboard in ocean waves" 
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow border-2 border-secondary/30">
                <img 
                  src={surfLesson2} 
                  alt="Student successfully riding wave while instructor watches" 
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow border-2 border-secondary/30">
                <img 
                  src={surfLesson3} 
                  alt="Group surf lesson with students and instructor on beach with surfboards" 
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>

          {/* Golf Lessons Gallery */}
          <div>
            <h4 className="text-2xl font-bold mb-6 text-foreground flex items-center justify-center gap-2">
              <Trophy className="w-6 h-6 text-accent" />
              Golf Lessons
            </h4>
            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              <div className="overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow border-2 border-accent/30">
                <img 
                  src={golfLesson1} 
                  alt="Golf instructor teaching proper swing technique to student on golf course" 
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow border-2 border-accent/30">
                <img 
                  src={golfLesson2} 
                  alt="Golf student making perfect putt while instructor observes on green" 
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow border-2 border-accent/30">
                <img 
                  src={golfLesson3} 
                  alt="Golf instructor demonstrating club grip technique to student on driving range" 
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-primary">
        <div className="container mx-auto max-w-2xl text-center">
          <h3 className="text-4xl font-bold mb-12 text-primary-foreground">Get in Touch</h3>
          <div className="space-y-6 text-primary-foreground">
            <div className="flex items-center justify-center gap-3">
              <Mail className="w-6 h-6" />
              <a href="mailto:julian@lessons.com" className="text-lg hover:text-accent transition-colors">
                julian@lessons.com
              </a>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Phone className="w-6 h-6" />
              <a href="tel:+1234567890" className="text-lg hover:text-accent transition-colors">
                (123) 456-7890
              </a>
            </div>
            <div className="flex items-center justify-center gap-3">
              <MapPin className="w-6 h-6" />
              <span className="text-lg">San Diego, California</span>
            </div>
          </div>
          <div className="mt-12">
            <Button size="lg" variant="secondary">
              Schedule a Lesson Today
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-primary border-t border-primary-foreground/10">
        <div className="container mx-auto text-center text-primary-foreground/80">
          <p>&copy; 2024 Julian's Lessons. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
