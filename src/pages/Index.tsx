import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Waves, Trophy, Mail, Phone, MapPin, Menu } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { WaveBackground } from "@/components/WaveBackground";
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
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md z-50 border-b border-border shadow-sm">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <img src={logo} alt="Ride & Swing - Surf and Golf Lessons" className="h-16 transition-transform hover:scale-105" />
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon" className="rounded-full hover:scale-110 transition-transform">
                  <Menu className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48 bg-card shadow-lg border-border">
                <DropdownMenuItem asChild>
                  <a href="#about" className="w-full cursor-pointer hover:bg-muted transition-colors">About</a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a href="#services" className="w-full cursor-pointer hover:bg-muted transition-colors">Services</a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a href="#gallery" className="w-full cursor-pointer hover:bg-muted transition-colors">Gallery</a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a href="#contact" className="w-full cursor-pointer hover:bg-muted transition-colors">Contact</a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-24 px-4 bg-gradient-to-br from-primary via-primary to-secondary relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAtMy4zMTQgMi42ODYtNiA2LTZzNiAyLjY4NiA2IDYtMi42ODYgNi02IDYtNi0yLjY4Ni02LTZ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
        <WaveBackground />
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 animate-fade-in leading-tight drop-shadow-lg">
            Master the Waves & Greens
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-10 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
            Professional surf and golf instruction with personalized coaching to help you reach your goals
          </p>
          <Button size="lg" className="text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all bg-accent text-accent-foreground hover:bg-accent/90">
            Book a Lesson Today
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-foreground">About Julian</h2>
          <div className="bg-card p-8 md:p-12 rounded-3xl shadow-lg text-lg text-foreground space-y-6 leading-relaxed">
            <p className="text-muted-foreground">
              With over 15 years of experience in both surfing and golf, I've dedicated my life to helping 
              others discover the joy and challenge of these incredible sports.
            </p>
            <p className="text-muted-foreground">
              Whether you're catching your first wave or perfecting your golf swing, I provide personalized 
              instruction tailored to your skill level and goals. My teaching philosophy emphasizes technique, 
              safety, and most importantly—having fun while learning.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-4 bg-background">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">Services</h2>
          <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {/* Surf Lessons */}
            <Card className="border-2 border-secondary/30 hover:border-secondary hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 rounded-2xl overflow-hidden">
              <CardContent className="pt-8 pb-8">
                <div className="flex justify-center mb-6">
                  <div className="p-5 bg-gradient-to-br from-secondary to-secondary/80 rounded-2xl shadow-lg">
                    <Waves className="w-12 h-12 text-secondary-foreground" />
                  </div>
                </div>
                <h3 className="text-3xl font-bold text-center mb-6 text-card-foreground">Surf Lessons</h3>
                <ul className="space-y-4 text-card-foreground mb-8">
                  <li className="flex items-start">
                    <span className="mr-3 text-secondary font-bold text-xl">•</span>
                    <span>Beginner to advanced instruction</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-secondary font-bold text-xl">•</span>
                    <span>Ocean safety and wave reading</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-secondary font-bold text-xl">•</span>
                    <span>Equipment provided</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-secondary font-bold text-xl">•</span>
                    <span>Private and group sessions available</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-secondary font-bold text-xl">•</span>
                    <span>Video analysis for technique improvement</span>
                  </li>
                </ul>
                <div className="text-center">
                  <Button className="w-full rounded-full py-6 shadow-lg hover:shadow-xl transition-all bg-secondary hover:bg-secondary/90 text-secondary-foreground">Book Surf Lesson</Button>
                </div>
              </CardContent>
            </Card>

            {/* Golf Lessons */}
            <Card className="border-2 border-accent/30 hover:border-accent hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 rounded-2xl overflow-hidden">
              <CardContent className="pt-8 pb-8">
                <div className="flex justify-center mb-6">
                  <div className="p-5 bg-gradient-to-br from-accent to-accent/80 rounded-2xl shadow-lg">
                    <Trophy className="w-12 h-12 text-accent-foreground" />
                  </div>
                </div>
                <h3 className="text-3xl font-bold text-center mb-6 text-card-foreground">Golf Lessons</h3>
                <ul className="space-y-4 text-card-foreground mb-8">
                  <li className="flex items-start">
                    <span className="mr-3 text-accent font-bold text-xl">•</span>
                    <span>Full swing and short game coaching</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-accent font-bold text-xl">•</span>
                    <span>Course management strategies</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-accent font-bold text-xl">•</span>
                    <span>Mental game development</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-accent font-bold text-xl">•</span>
                    <span>Club fitting and equipment advice</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-accent font-bold text-xl">•</span>
                    <span>Playing lessons on the course</span>
                  </li>
                </ul>
                <div className="text-center">
                  <Button className="w-full rounded-full py-6 shadow-lg hover:shadow-xl transition-all bg-accent hover:bg-accent/90 text-accent-foreground">Book Golf Lesson</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-foreground">Gallery</h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto text-lg">
            See our students in action as they master the waves and perfect their golf game
          </p>
          
          {/* Surf Lessons Gallery */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold mb-8 text-foreground flex items-center justify-center gap-3">
              <Waves className="w-8 h-8 text-secondary" />
              Surf Lessons
            </h3>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-secondary/20">
                <img 
                  src={surfLesson1} 
                  alt="Surf instructor teaching beginner student on surfboard in ocean waves" 
                  className="w-full h-72 object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-secondary/20">
                <img 
                  src={surfLesson2} 
                  alt="Student successfully riding wave while instructor watches" 
                  className="w-full h-72 object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-secondary/20">
                <img 
                  src={surfLesson3} 
                  alt="Group surf lesson with students and instructor on beach with surfboards" 
                  className="w-full h-72 object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>
          </div>

          {/* Golf Lessons Gallery */}
          <div>
            <h3 className="text-3xl font-bold mb-8 text-foreground flex items-center justify-center gap-3">
              <Trophy className="w-8 h-8 text-accent" />
              Golf Lessons
            </h3>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-accent/20">
                <img 
                  src={golfLesson1} 
                  alt="Golf instructor teaching proper swing technique to student on golf course" 
                  className="w-full h-72 object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-accent/20">
                <img 
                  src={golfLesson2} 
                  alt="Golf student making perfect putt while instructor observes on green" 
                  className="w-full h-72 object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-accent/20">
                <img 
                  src={golfLesson3} 
                  alt="Golf instructor demonstrating club grip technique to student on driving range" 
                  className="w-full h-72 object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-4 bg-gradient-to-br from-primary via-primary to-secondary relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAtMy4zMTQgMi42ODYtNiA2LTZzNiAyLjY4NiA2IDYtMi42ODYgNi02IDYtNi0yLjY4Ni02LTZ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
        <WaveBackground />
        <div className="container mx-auto max-w-3xl text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-primary-foreground">Get in Touch</h2>
          <div className="bg-card/10 backdrop-blur-sm p-8 md:p-12 rounded-3xl shadow-2xl border border-primary-foreground/10 mb-12">
            <div className="space-y-6 text-primary-foreground">
              <div className="flex items-center justify-center gap-4 p-4 hover:bg-primary-foreground/10 rounded-2xl transition-colors">
                <Mail className="w-7 h-7" />
                <a href="mailto:julian@lessons.com" className="text-lg md:text-xl hover:text-accent transition-colors font-medium">
                  julian@lessons.com
                </a>
              </div>
              <div className="flex items-center justify-center gap-4 p-4 hover:bg-primary-foreground/10 rounded-2xl transition-colors">
                <Phone className="w-7 h-7" />
                <a href="tel:+1234567890" className="text-lg md:text-xl hover:text-accent transition-colors font-medium">
                  (123) 456-7890
                </a>
              </div>
              <div className="flex items-center justify-center gap-4 p-4 hover:bg-primary-foreground/10 rounded-2xl transition-colors">
                <MapPin className="w-7 h-7" />
                <span className="text-lg md:text-xl font-medium">San Diego, California</span>
              </div>
            </div>
          </div>
          <Button size="lg" className="rounded-full px-10 py-6 text-lg shadow-2xl hover:shadow-xl hover:scale-105 transition-all bg-accent text-accent-foreground hover:bg-accent/90">
            Schedule a Lesson Today
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-4 bg-foreground/5 border-t border-border">
        <div className="container mx-auto text-center text-muted-foreground">
          <p className="text-sm">&copy; 2024 Julian's Lessons. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
