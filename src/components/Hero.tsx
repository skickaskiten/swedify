import { Calendar, Play, BookOpen } from "lucide-react";
import ragnarHero from "@/assets/ragnar-hero.jpg";

const Hero = () => {
  return (
    <section id="hem" className="hero-section">
      <div className="hero-content">
        <div className="max-w-5xl mx-auto">
          {/* Logo & Title */}
          <div className="mb-8 animate-fade-in">
            <h1 className="hero-title">
              Lär dig svenska
              <br />
              <span className="text-accent">kul och effektivt</span>
            </h1>
            <p className="hero-subtitle">
              Hej! Jag är Ragnar, din svenska språknörd som gör lärandet roligt och enkelt. 
              Från grundläggande konversation till avancerad grammatik - vi gör det tillsammans!
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-slide-up">
            <a href="#kontakt" className="btn-hero inline-flex items-center space-x-2 justify-center">
              <Calendar className="h-5 w-5" />
              <span>Boka första lektionen</span>
            </a>
            <a href="#kurser" className="btn-hero inline-flex items-center space-x-2 justify-center">
              <BookOpen className="h-5 w-5" />
              <span>Se videokurser</span>
            </a>
          </div>

          {/* Hero Image */}
          <div className="relative max-w-3xl mx-auto animate-scale-in">
            <div className="relative overflow-hidden rounded-3xl shadow-strong">
              <img
                src={ragnarHero}
                alt="Ragnar - Din svenska språklärare"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </div>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-20 h-20 bg-white rounded-full animate-pulse" />
        <div className="absolute top-40 right-20 w-16 h-16 bg-white rounded-full animate-pulse delay-300" />
        <div className="absolute bottom-40 left-20 w-24 h-24 bg-white rounded-full animate-pulse delay-700" />
      </div>
    </section>
  );
};

export default Hero;