import { Smile, Zap, Target, Users, BookOpen, Lightbulb } from "lucide-react";

const Method = () => {
  const methods = [
    {
      icon: <Smile className="h-8 w-8" />,
      title: "Roligt lärande",
      description: "Svenska memes, kulturella referenser och interaktiva övningar som får dig att skratta medan du lär dig.",
      color: "primary"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Effektiv grammatik",
      description: "Inga tråkiga regler - vi lär grammatik genom praktiska exempel och vardagssituationer.",
      color: "secondary"
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Personlig approach",
      description: "Varje lektion anpassas efter dina mål, intressen och inlärningsstil för bästa resultat.",
      color: "accent"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Svensk kultur",
      description: "Lär dig inte bara språket utan även kulturen, traditioner och det svenska sättet att tänka.",
      color: "primary"
    },
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: "Praktiska färdigheter",
      description: "Fokus på verkliga situationer - jobba, handla, prata med grannar och nya vänner.",
      color: "secondary"
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Kreativa metoder",
      description: "Spel, sånger, berättelser och visuella hjälpmedel som gör lärandet minnesvärt.",
      color: "accent"
    }
  ];

  return (
    <section id="metod" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Swedifys <span className="text-gradient">metod</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Min unika approach kombinerar traditionell språkundervisning med moderna, 
            interaktiva metoder som gör svenska lärandet både effektivt och kul.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {methods.map((method, index) => (
            <div key={index} className="card-feature fade-in group" style={{animationDelay: `${index * 150}ms`}}>
              <div className={`w-16 h-16 bg-${method.color}/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <div className={`text-${method.color}`}>
                  {method.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">
                {method.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {method.description}
              </p>
            </div>
          ))}
        </div>

        {/* Target Audience */}
        <div className="mt-20 fade-in">
          <div className="card-elegant text-center">
            <h3 className="text-3xl font-bold text-foreground mb-8">
              Perfekt för dig som är:
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h4 className="text-xl font-semibold text-foreground">Expat i Sverige</h4>
                <p className="text-muted-foreground">
                  Ny i Sverige och vill integreras snabbt i samhället och kulturen.
                </p>
              </div>
              <div className="space-y-4">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto">
                  <BookOpen className="h-8 w-8 text-secondary" />
                </div>
                <h4 className="text-xl font-semibold text-foreground">Student</h4>
                <p className="text-muted-foreground">
                  Studerar i Sverige och behöver svenska för studier och vardagsliv.
                </p>
              </div>
              <div className="space-y-4">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                  <Lightbulb className="h-8 w-8 text-accent" />
                </div>
                <h4 className="text-xl font-semibold text-foreground">Språkälskare</h4>
                <p className="text-muted-foreground">
                  Fascinerad av svenska kulturen och vill lära dig språket ordentligt.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Method;