import { Smile, Zap, Target, Users, BookOpen, Lightbulb } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Method = () => {
  const { t } = useLanguage();
  
  const methods = [
    {
      icon: <Smile className="h-8 w-8" />,
      title: t('method.conversational.title'),
      description: t('method.conversational.description'),
      color: "primary"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: t('method.interactive.title'),
      description: t('method.interactive.description'),
      color: "secondary"
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: t('method.personalized.title'),
      description: t('method.personalized.description'),
      color: "accent"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: t('method.cultural.title'),
      description: t('method.cultural.description'),
      color: "primary"
    },
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: t('method.perfectFor.title'),
      description: t('method.expat.description'),
      color: "secondary"
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: t('method.student.title'),
      description: t('method.lover.description'),
      color: "accent"
    }
  ];

  return (
    <section id="metod" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            {t('method.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t('method.subtitle')}
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
              {t('method.perfectFor.title')}
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h4 className="text-xl font-semibold text-foreground">{t('method.expat.title')}</h4>
                <p className="text-muted-foreground">
                  {t('method.expat.description')}
                </p>
              </div>
              <div className="space-y-4">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto">
                  <BookOpen className="h-8 w-8 text-secondary" />
                </div>
                <h4 className="text-xl font-semibold text-foreground">{t('method.student.title')}</h4>
                <p className="text-muted-foreground">
                  {t('method.student.description')}
                </p>
              </div>
              <div className="space-y-4">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                  <Lightbulb className="h-8 w-8 text-accent" />
                </div>
                <h4 className="text-xl font-semibold text-foreground">{t('method.lover.title')}</h4>
                <p className="text-muted-foreground">
                  {t('method.lover.description')}
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