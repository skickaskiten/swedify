import { Heart, Book, Users, Star } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const About = () => {
  const { t } = useLanguage();
  return (
    <section id="om-mig" className="py-20 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="fade-in">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                {t('about.title')} <span className="text-gradient">Ragnar</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                {t('about.description')}
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t('about.philosophy')}
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 fade-in">
               <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <div className="text-2xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">{t('about.students')}</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Book className="h-8 w-8 text-secondary" />
                </div>
                <div className="text-2xl font-bold text-secondary">5</div>
                <div className="text-sm text-muted-foreground">{t('about.experience')}</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Heart className="h-8 w-8 text-accent" />
                </div>
                <div className="text-2xl font-bold text-accent">100%</div>
                <div className="text-sm text-muted-foreground">{t('about.passion')}</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Star className="h-8 w-8 text-primary" />
                </div>
                <div className="text-2xl font-bold text-primary">4.9</div>
                <div className="text-sm text-muted-foreground">{t('about.rating')}</div>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="card-elegant fade-in">
              <div className="text-center p-8">
                <div className="w-24 h-24 bg-gradient-hero rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Book className="h-12 w-12 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Min filosofi
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t('about.quote')}
                </p>
                <div className="mt-6 text-primary font-semibold">- Ragnar</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;