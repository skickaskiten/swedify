import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Anna Lindberg",
      role: "Expat från Tyskland",
      content: "Ragnar gör lektioner superroliga! Hans kreativa metoder med memes och kultur hjälpte mig att prata svenska flyt på bara 6 månader.",
      rating: 5,
      image: "👩‍💼"
    },
    {
      name: "Marcus Johnson",
      role: "Student vid KTH",
      content: "Bästa språkläraren någonsin! Ragnars passion för svenska språket är smittsam. Nu känner jag mig trygg att prata svenska på universitetet.",
      rating: 5,
      image: "👨‍🎓"
    },
    {
      name: "Sofia Chen",
      role: "Programmerare",
      content: "Som dataingenjör älskar jag Ragnars strukturerade approach. Han gör grammatiken logisk och lätt att förstå. Rekommenderar starkt!",
      rating: 5,
      image: "👩‍💻"
    },
    {
      name: "Erik Andersson",
      role: "Företagare",
      content: "Ragnar hjälpte mig med affärssvenska. Nu kan jag hålla presentationer och möten på svenska med självförtroende. Fantastisk lärare!",
      rating: 5,
      image: "👨‍💼"
    },
    {
      name: "Isabella Rodriguez",
      role: "Konstnär",
      content: "Ragnars kreativa sätt att lära ut svenska passar perfekt för mig som konstnär. Vi använder konst och kultur i lektionerna - så inspirerande!",
      rating: 5,
      image: "👩‍🎨"
    }
  ];

  return (
    <section id="recensioner" className="py-20 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Vad säger mina <span className="text-gradient">elever</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Över 500 nöjda elever har förbättrat sin svenska med Swedify-metoden. 
            Här är vad några av dem säger:
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="card-elegant fade-in group hover:scale-105 transition-transform duration-300"
              style={{animationDelay: `${index * 200}ms`}}
            >
              <div className="relative">
                <Quote className="absolute top-0 left-0 h-8 w-8 text-primary/20 -translate-x-2 -translate-y-2" />
                
                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-muted-foreground leading-relaxed mb-6 italic">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-2xl">
                    {testimonial.image}
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Overall Rating */}
        <div className="mt-16 text-center fade-in">
          <div className="inline-flex items-center gap-4 bg-white rounded-full px-8 py-4 shadow-soft">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 fill-accent text-accent" />
              ))}
            </div>
            <span className="text-2xl font-bold text-foreground">4.9</span>
            <span className="text-muted-foreground">av 5 stjärnor</span>
            <span className="text-sm text-muted-foreground">(500+ recensioner)</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;