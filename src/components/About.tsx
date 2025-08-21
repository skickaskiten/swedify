import { Heart, Book, Users, Star } from "lucide-react";

const About = () => {
  return (
    <section id="om-mig" className="py-20 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="fade-in">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Hej, jag är <span className="text-gradient">Ragnar</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Som språknörd och passionerad lärare har jag hjälpt hundratals studenter 
                att bemästra svenska på ett roligt och effektivt sätt. Jag tror på att 
                lärandet ska vara kul - därför använder jag svenska memes, kulturella 
                referenser och interaktiva metoder.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Oavsett om du är ny i Sverige, student eller bara älskar språk och kultur, 
                så hjälper jag dig att nå dina mål med svenska språket.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 fade-in">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <div className="text-2xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Nöjda elever</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Book className="h-8 w-8 text-secondary" />
                </div>
                <div className="text-2xl font-bold text-secondary">5</div>
                <div className="text-sm text-muted-foreground">År erfarenhet</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Heart className="h-8 w-8 text-accent" />
                </div>
                <div className="text-2xl font-bold text-accent">100%</div>
                <div className="text-sm text-muted-foreground">Passion</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Star className="h-8 w-8 text-primary" />
                </div>
                <div className="text-2xl font-bold text-primary">4.9</div>
                <div className="text-sm text-muted-foreground">Betyg</div>
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
                  "Språk är nyckeln till kulturen. När du lär dig svenska, 
                  öppnar du dörren till ett helt nytt sätt att se världen på."
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