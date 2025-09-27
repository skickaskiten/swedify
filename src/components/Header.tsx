import { useState } from "react";
import { Menu, X, BookOpen, MessageSquare, Calendar, Youtube, Languages } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border/50 shadow-soft">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <BookOpen className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold text-gradient">Swedify</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#hem" className="text-foreground hover:text-primary transition-colors duration-200">
              {t('nav.home')}
            </a>
            <a href="#om-mig" className="text-foreground hover:text-primary transition-colors duration-200">
              {t('nav.about')}
            </a>
            <a href="#metod" className="text-foreground hover:text-primary transition-colors duration-200">
              {t('nav.method')}
            </a>
            <a href="#kurser" className="text-foreground hover:text-primary transition-colors duration-200">
              {t('nav.courses')}
            </a>
            <button
              onClick={toggleLanguage}
              className="text-foreground hover:text-primary transition-colors duration-200 flex items-center space-x-1"
              title={language === 'sv' ? 'Switch to English' : 'Byt till svenska'}
            >
              <Languages className="h-4 w-4" />
              <span className="text-sm font-medium">{language === 'sv' ? 'EN' : 'SV'}</span>
            </button>
            <a href="#kontakt" className="btn-primary inline-flex items-center space-x-2">
              <Calendar className="h-4 w-4" />
              <span>{t('nav.book')}</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-foreground hover:text-primary transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border/50">
            <div className="flex flex-col space-y-4">
              <a
                href="#hem"
                className="text-foreground hover:text-primary transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.home')}
              </a>
              <a
                href="#om-mig"
                className="text-foreground hover:text-primary transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.about')}
              </a>
              <a
                href="#metod"
                className="text-foreground hover:text-primary transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.method')}
              </a>
              <a
                href="#kurser"
                className="text-foreground hover:text-primary transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.courses')}
              </a>
              <button
                onClick={() => {
                  toggleLanguage();
                  setIsMenuOpen(false);
                }}
                className="text-foreground hover:text-primary transition-colors duration-200 flex items-center space-x-2 justify-center py-2"
              >
                <Languages className="h-4 w-4" />
                <span>{language === 'sv' ? 'English' : 'Svenska'}</span>
              </button>
              <a
                href="#kontakt"
                className="btn-primary inline-flex items-center space-x-2 justify-center"
                onClick={() => setIsMenuOpen(false)}
              >
                <Calendar className="h-4 w-4" />
                <span>{t('nav.book')}</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;