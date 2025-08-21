import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Maya",
      role: "Student",
      content: "Best teacher ever! If you're like me and struggle with apps and books, Ragnar is your guy. His way of teaching is so intuitive and cuts through all the traditional methods and gets the concepts into your body through speaking and repetition. After 3 years of struggling, I'm hopeful I'll be fluent in a years time! Thank you Ragnar!",
      rating: 5,
      image: "👩‍💼",
      date: "June 25, 2025"
    },
    {
      name: "Matteo",
      role: "Language Learner",
      content: "Ragnar is a great teacher! I would recommend him to anyone looking to learn Swedish, independently of your starting level.",
      rating: 5,
      image: "👨‍💼",
      date: "October 30, 2024"
    },
    {
      name: "Theres",
      role: "Polyglot",
      content: "I am really enjoying my classes with Ragnar. He is very authentic and creates a joyful lesson. I'm a beginner, but learned a few languages before and he alters the tempo i need. I can recommend Ragnar's lessons, it was def. a good choice for me.",
      rating: 5,
      image: "👩‍🎓",
      date: "September 5, 2024"
    },
    {
      name: "Olga",
      role: "Student",
      content: "Ragnar is a really good teacher! His lessons are fun that helps to learn language easier. He is positive and you should not be afraid to do mistakes during his lessons. Good choice to make great progress in language learning!",
      rating: 5,
      image: "👩‍💻",
      date: "January 24, 2024"
    },
    {
      name: "Sofia",
      role: "Swedish Learner",
      content: "Ragnar is a great teacher, happy that I started to learn Swedish with him.",
      rating: 5,
      image: "👩‍🎨",
      date: "April 2, 2024"
    },
    {
      name: "gkberk",
      role: "Student",
      content: "His lessons are always fun and interesting. He is passionate about his job. I recommend him if you want to improve your Swedish language skills.",
      rating: 5,
      image: "👨‍🎓",
      date: "December 22, 2024"
    },
    {
      name: "Malu",
      role: "Student", 
      content: "Ragnar is great! Really recommend.",
      rating: 5,
      image: "🎯",
      date: "February 15, 2025"
    },
    {
      name: "Sarah",
      role: "Student",
      content: "A very good teacher",
      rating: 5,
      image: "⭐",
      date: "February 6, 2025"
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