import { useState } from "react";
import { Mail, Calendar, MessageSquare, Clock, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";

const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    lessonType: "private"
  });
  
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Meddelande skickat!",
      description: "Tack för ditt intresse. Jag återkommer inom 24 timmar.",
    });
    setFormData({ name: "", email: "", message: "", lessonType: "private" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="kontakt" className="py-20 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            {t('contact.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="card-elegant fade-in">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Skicka ett meddelande
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Namn *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="Ditt fullständiga namn"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  E-post *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="din@email.com"
                />
              </div>

              <div>
                <label htmlFor="lessonType" className="block text-sm font-medium text-foreground mb-2">
                  Typ av lektion
                </label>
                <select
                  id="lessonType"
                  name="lessonType"
                  value={formData.lessonType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                >
                  <option value="private">Privatlektion (500 kr/timme)</option>
                  <option value="video">Videokurser</option>
                  <option value="question">Allmän fråga</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Meddelande *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                  placeholder="Berätta om dina mål med svenska, din nuvarande nivå och när du vill börja..."
                />
              </div>

              <button
                type="submit"
                className="btn-primary w-full inline-flex items-center justify-center space-x-2"
              >
                <Send className="h-5 w-5" />
                <span>Skicka meddelande</span>
              </button>
            </form>
          </div>

          {/* Contact Info & Calendar */}
          <div className="space-y-8">
            {/* Contact Information */}
            <div className="card-elegant fade-in">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Kontaktinformation
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">E-post</div>
                    <div className="text-muted-foreground">ragnar@swedify.se</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Svarstid</div>
                    <div className="text-muted-foreground">Inom 24 timmar</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Plats</div>
                    <div className="text-muted-foreground">Online & Stockholm</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Calendar Booking */}
            <div className="card-elegant fade-in">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Boka direkt
              </h3>
              <p className="text-muted-foreground mb-6">
                Vill du boka direkt? Använd min kalender för att hitta en ledig tid som passar dig.
              </p>
              
              <div className="bg-gradient-primary rounded-xl p-8 text-center">
                <Calendar className="h-16 w-16 text-white mx-auto mb-4" />
                <div className="text-white font-semibold mb-2">Calendly Integration</div>
                <div className="text-white/80 text-sm mb-6">
                  Välj tid och datum som passar dig bäst
                </div>
                <button className="bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Öppna kalender
                </button>
              </div>
              
              <div className="mt-6 text-center">
                <div className="text-sm text-muted-foreground">
                  Första lektionen: <span className="font-semibold text-primary">500 kr</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;