import { Calendar, Play, BookOpen, Clock, Users, CheckCircle } from "lucide-react";

const Courses = () => {
  const privateLessons = {
    title: "Privatlektioner",
    price: "500 kr/timme",
    description: "Personlig undervisning anpassad efter dina behov och mål.",
    features: [
      "1-on-1 undervisning",
      "Flexibla tider",
      "Anpassat material",
      "Kontinuerlig feedback",
      "Online eller fysiskt"
    ]
  };

  const videoCourses = [
    {
      title: "Svenska för Nybörjare",
      description: "Komplett kurs från grunden - perfekt för dig som aldrig lärt svenska tidigare.",
      duration: "12 timmar",
      students: "200+",
      price: "899 kr",
      features: [
        "Grundläggande grammatik",
        "Vardagskonversation",
        "Uttal och intonation",
        "Kulturella tips",
        "Livstids åtkomst"
      ]
    },
    {
      title: "Svensk Konversation",
      description: "Förbättra ditt talande svenska genom praktiska konversationsövningar.",
      duration: "8 timmar",
      students: "150+",
      price: "699 kr",
      features: [
        "Vardagssituationer",
        "Jobbintervjuer",
        "Sociala sammanhang",
        "Uttalstips",
        "Bonusmaterial"
      ]
    },
    {
      title: "Affärssvenska",
      description: "Lär dig professionell svenska för arbetslivet och affärer.",
      duration: "10 timmar",
      students: "100+",
      price: "1299 kr",
      features: [
        "Formell kommunikation",
        "Presentationsteknik",
        "Möteskultur",
        "E-post och brev",
        "Certifikat"
      ]
    }
  ];

  return (
    <section id="kurser" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Kurser & <span className="text-gradient">Lektioner</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Välj mellan personliga lektioner för maximal flexibilitet eller 
            strukturerade videokurser du kan ta i din egen takt.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Private Lessons */}
          <div className="card-elegant fade-in">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <Calendar className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-foreground mb-4">
                {privateLessons.title}
              </h3>
              <div className="text-4xl font-bold text-primary mb-4">
                {privateLessons.price}
              </div>
              <p className="text-muted-foreground mb-6">
                {privateLessons.description}
              </p>
            </div>

            <div className="space-y-4 mb-8">
              {privateLessons.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>

            <a 
              href="#kontakt" 
              className="btn-primary w-full text-center inline-flex items-center justify-center space-x-2"
            >
              <Calendar className="h-5 w-5" />
              <span>Boka första lektionen</span>
            </a>
          </div>

          {/* YouTube Section */}
          <div className="card-elegant fade-in">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                <Play className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-foreground mb-4">
                YouTube Kanal
              </h3>
              <p className="text-muted-foreground mb-6">
                Gratis svenska lektioner och tips på min YouTube-kanal. 
                Ny video varje vecka!
              </p>
            </div>

            <div className="bg-gray-100 rounded-xl p-4 mb-6">
              <div className="aspect-video bg-gradient-primary rounded-lg flex items-center justify-center">
                <Play className="h-16 w-16 text-white" />
              </div>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Prenumeranter:</span>
                <span className="font-semibold">10,000+</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Videos:</span>
                <span className="font-semibold">100+</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Nya videos:</span>
                <span className="font-semibold">Varje vecka</span>
              </div>
            </div>

            <a 
              href="https://youtube.com/@swedify" 
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary w-full text-center inline-flex items-center justify-center space-x-2"
            >
              <Play className="h-5 w-5" />
              <span>Besök YouTube-kanalen</span>
            </a>
          </div>
        </div>

        {/* Video Courses */}
        <div className="fade-in">
          <h3 className="text-3xl font-bold text-center text-foreground mb-12">
            Videokurser
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videoCourses.map((course, index) => (
              <div key={index} className="card-feature">
                <div className="mb-6">
                  <BookOpen className="h-12 w-12 text-primary mb-4" />
                  <h4 className="text-xl font-bold text-foreground mb-3">
                    {course.title}
                  </h4>
                  <p className="text-muted-foreground mb-4">
                    {course.description}
                  </p>
                  
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {course.duration}
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      {course.students} elever
                    </div>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  {course.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-auto">
                  <div className="text-2xl font-bold text-primary mb-4">
                    {course.price}
                  </div>
                  <button className="btn-accent w-full">
                    Köp kurs
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-6">
              Alla videokurser kommer med livstids åtkomst och 30 dagars pengarna-tillbaka-garanti.
            </p>
            <a 
              href="https://kurser.swedify.se" 
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center space-x-2"
            >
              <BookOpen className="h-5 w-5" />
              <span>Se alla kurser</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;