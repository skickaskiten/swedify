import { BookOpen, Mail, Youtube, Instagram, Heart } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <BookOpen className="h-8 w-8 text-accent" />
              <span className="text-2xl font-bold">Swedify</span>
            </div>
            <p className="text-background/80 leading-relaxed">
              {t('footer.brand.description')}
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://youtube.com/@swedify" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-primary/80 transition-colors"
              >
                <Youtube className="h-5 w-5 text-white" />
              </a>
              <a 
                href="https://instagram.com/swedify" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center hover:bg-secondary/80 transition-colors"
              >
                <Instagram className="h-5 w-5 text-white" />
              </a>
              <a 
                href="mailto:ragnar@swedify.se"
                className="w-10 h-10 bg-accent rounded-full flex items-center justify-center hover:bg-accent/80 transition-colors"
              >
                <Mail className="h-5 w-5 text-foreground" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-xl font-semibold text-background">{t('footer.quickLinks')}</h4>
            <nav className="flex flex-col space-y-3">
              <a href="#hem" className="text-background/80 hover:text-accent transition-colors">
                {t('nav.home')}
              </a>
              <a href="#om-mig" className="text-background/80 hover:text-accent transition-colors">
                {t('nav.about')}
              </a>
              <a href="#metod" className="text-background/80 hover:text-accent transition-colors">
                {t('nav.method')}
              </a>
              <a href="#kurser" className="text-background/80 hover:text-accent transition-colors">
                {t('nav.courses')}
              </a>
              <a href="#kontakt" className="text-background/80 hover:text-accent transition-colors">
                {t('nav.contact')}
              </a>
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-xl font-semibold text-background">Tjänster</h4>
            <nav className="flex flex-col space-y-3">
              <a href="#kontakt" className="text-background/80 hover:text-accent transition-colors">
                Privatlektioner
              </a>
              <a href="#kurser" className="text-background/80 hover:text-accent transition-colors">
                Videokurser
              </a>
              <a 
                href="https://youtube.com/@swedify" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-background/80 hover:text-accent transition-colors"
              >
                YouTube Kanal
              </a>
              <a href="#kontakt" className="text-background/80 hover:text-accent transition-colors">
                Affärssvenska
              </a>
            </nav>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h4 className="text-xl font-semibold text-background">Nyhetsbrev</h4>
            <p className="text-background/80 text-sm">
              Få veckovisa tips och gratis svenska lektioner direkt i din inbox.
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Din e-postadress"
                className="w-full px-4 py-3 rounded-lg bg-background/10 border border-background/20 text-background placeholder:text-background/60 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
              />
              <button
                type="submit"
                className="w-full bg-accent text-foreground px-4 py-3 rounded-lg font-semibold hover:bg-accent/90 transition-colors"
              >
                Prenumerera
              </button>
            </form>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-background/80 text-sm">
              © {currentYear} Swedify. Alla rättigheter förbehållna.
            </div>
            
            <div className="flex items-center space-x-1 text-sm">
              <span className="text-background/80">Gjord med</span>
              <Heart className="h-4 w-4 text-red-500 fill-current" />
              <span className="text-background/80">av Ragnar</span>
            </div>
            
            <div className="flex space-x-6 text-sm">
              <a href="/privacy" className="text-background/80 hover:text-accent transition-colors">
                Integritetspolicy
              </a>
              <a href="/terms" className="text-background/80 hover:text-accent transition-colors">
                Användarvillkor
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;