import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'sv' | 'en';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  sv: {
    // Header
    'nav.home': 'Hem',
    'nav.about': 'Om mig',
    'nav.method': 'Metod',
    'nav.courses': 'Kurser',
    'nav.contact': 'Kontakt',
    'nav.book': 'Boka lektion',
    
    // Hero
    'hero.title': 'Lär dig svenska',
    'hero.subtitle': 'kul och effektivt',
    'hero.description': 'Upptäck glädjen i att lära dig svenska med personliga lektioner och engagerande videokurser. Från nybörjare till avancerad - vi gör språkinlärning till en rolig resa!',
    'hero.bookLesson': 'Boka första lektionen',
    'hero.videoCourses': 'Se videokurser',
    
    // About
    'about.title': 'Hej, jag är Ragnar!',
    'about.subtitle': 'Din svenska språkguide',
    'about.description': 'Med över 8 års erfarenhet av att undervisa svenska som andraspråk, brinner jag för att göra språkinlärning både effektiv och rolig. Jag tror på att kombinera traditionella metoder med moderna verktyg och kulturell fördjupning.',
    'about.philosophy': 'Min filosofi är enkel: språk är nyckeln till kultur och gemenskap. Varje lektion är skräddarsydd för att hjälpa dig nå dina mål, oavsett om du är expat i Sverige eller bara älskar skandinavisk kultur.',
    'about.students': 'Nöjda studenter',
    'about.experience': 'Års erfarenhet',
    'about.passion': 'Passion för språk',
    'about.rating': 'Betyg',
    'about.quote': 'Språk är inte bara ord - det är nyckeln till en helt ny värld av möjligheter och vänskap.',
    
    // Method
    'method.title': 'Swedifys metod',
    'method.subtitle': 'Så gör vi svenska enkelt och kul',
    'method.conversational.title': 'Konversationsfokus',
    'method.conversational.description': 'Vi börjar prata från dag ett. Grammatik kommer naturligt genom äkta samtal.',
    'method.interactive.title': 'Interaktiva lektioner',
    'method.interactive.description': 'Använder moderna verktyg, spel och riktiga svenska memes för att göra lärandet engagerande.',
    'method.personalized.title': 'Personligt anpassad',
    'method.personalized.description': 'Varje lektion skräddarsys efter dina intressen, mål och inlärningstempo.',
    'method.cultural.title': 'Kulturell fördjupning',
    'method.cultural.description': 'Lär dig inte bara språket - förstå svensk kultur, traditioner och humor.',
    'method.perfectFor.title': 'Perfekt för dig som är:',
    'method.expat.title': 'Expat i Sverige',
    'method.expat.description': 'Behöver svenska för jobb, vänner eller bara för att känna dig hemma.',
    'method.student.title': 'Student',
    'method.student.description': 'Studerar svenska och vill komplettera med rolig, praktisk träning.',
    'method.lover.title': 'Språkälskare',
    'method.lover.description': 'Fascinerad av nordisk kultur och vill upptäcka svenska språkets skönhet.',
    
    // Testimonials
    'testimonials.title': 'Vad säger våra studenter?',
    'testimonials.subtitle': 'Äkta berättelser från verkliga studenter',
    
    // Courses
    'courses.title': 'Välj din svenska-resa',
    'courses.subtitle': 'Privatlektioner eller videokurser - vi har något för alla',
    'courses.private.title': 'Privatlektioner',
    'courses.private.description': 'Personlig undervisning anpassad efter dina behov',
    'courses.private.price': 'från 500 kr/lektion',
    'courses.private.book': 'Boka lektion',
    'courses.video.title': 'Videokurser',
    'courses.video.description': 'Lär dig i din egen takt med strukturerade kurser',
    'courses.video.price': 'från 299 kr/kurs',
    'courses.video.explore': 'Utforska kurser',
    'courses.youtube.title': 'YouTube-kanal',
    'courses.youtube.description': 'Gratis svensklektioner och kulturtips',
    'courses.youtube.price': 'Helt gratis',
    'courses.youtube.watch': 'Se videor',
    
    // Contact
    'contact.title': 'Redo att börja din svenska-resa?',
    'contact.subtitle': 'Boka din första lektion eller ställ en fråga',
    'contact.name': 'Namn',
    'contact.email': 'E-post',
    'contact.message': 'Meddelande',
    'contact.send': 'Skicka meddelande',
    'contact.info.title': 'Kontaktinformation',
    'contact.info.description': 'Tveka inte att höra av dig! Jag svarar vanligtvis inom 24 timmar.',
    'contact.schedule.title': 'Schemalägg direkt',
    'contact.schedule.description': 'Välj en tid som passar dig bäst',
    
    // Footer
    'footer.brand.description': 'Din guide till svenska språket och kulturen. Gör språkinlärning till en rolig och meningsfull upplevelse.',
    'footer.quickLinks': 'Snabblänkar',
    'footer.services': 'Tjänster',
    'footer.services.private': 'Privatlektioner',
    'footer.services.video': 'Videokurser',
    'footer.services.youtube': 'YouTube-kanal',
    'footer.services.business': 'Svenska för företag',
    'footer.newsletter.title': 'Nyhetsbrev',
    'footer.newsletter.description': 'Få tips, tricks och uppdateringar direkt i din inkorg',
    'footer.newsletter.placeholder': 'Din e-post',
    'footer.newsletter.subscribe': 'Prenumerera',
    'footer.copyright': 'Alla rättigheter förbehållna.',
    'footer.madeWith': 'Gjord med',
    'footer.by': 'av Ragnar',
    'footer.privacy': 'Integritetspolicy',
    'footer.terms': 'Villkor'
  },
  en: {
    // Header
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.method': 'Method',
    'nav.courses': 'Courses',
    'nav.contact': 'Contact',
    'nav.book': 'Book lesson',
    
    // Hero
    'hero.title': 'Learn Swedish',
    'hero.subtitle': 'fun and effective',
    'hero.description': 'Discover the joy of learning Swedish with personalized lessons and engaging video courses. From beginner to advanced - we make language learning a fun journey!',
    'hero.bookLesson': 'Book first lesson',
    'hero.videoCourses': 'Watch video courses',
    
    // About
    'about.title': 'Hi, I\'m Ragnar!',
    'about.subtitle': 'Your Swedish language guide',
    'about.description': 'With over 8 years of experience teaching Swedish as a second language, I\'m passionate about making language learning both effective and fun. I believe in combining traditional methods with modern tools and cultural immersion.',
    'about.philosophy': 'My philosophy is simple: language is the key to culture and community. Every lesson is tailored to help you reach your goals, whether you\'re an expat in Sweden or just love Scandinavian culture.',
    'about.students': 'Happy students',
    'about.experience': 'Years experience',
    'about.passion': 'Passion for languages',
    'about.rating': 'Rating',
    'about.quote': 'Language is not just words - it\'s the key to a whole new world of opportunities and friendship.',
    
    // Method
    'method.title': 'Swedify\'s Method',
    'method.subtitle': 'How we make Swedish easy and fun',
    'method.conversational.title': 'Conversation Focus',
    'method.conversational.description': 'We start speaking from day one. Grammar comes naturally through real conversations.',
    'method.interactive.title': 'Interactive Lessons',
    'method.interactive.description': 'Using modern tools, games, and real Swedish memes to make learning engaging.',
    'method.personalized.title': 'Personalized',
    'method.personalized.description': 'Every lesson is tailored to your interests, goals, and learning pace.',
    'method.cultural.title': 'Cultural Immersion',
    'method.cultural.description': 'Don\'t just learn the language - understand Swedish culture, traditions, and humor.',
    'method.perfectFor.title': 'Perfect for you if you\'re:',
    'method.expat.title': 'Expat in Sweden',
    'method.expat.description': 'Need Swedish for work, friends, or just to feel at home.',
    'method.student.title': 'Student',
    'method.student.description': 'Studying Swedish and want to supplement with fun, practical training.',
    'method.lover.title': 'Language Lover',
    'method.lover.description': 'Fascinated by Nordic culture and want to discover the beauty of Swedish.',
    
    // Testimonials
    'testimonials.title': 'What do our students say?',
    'testimonials.subtitle': 'Real stories from real students',
    
    // Courses
    'courses.title': 'Choose your Swedish journey',
    'courses.subtitle': 'Private lessons or video courses - we have something for everyone',
    'courses.private.title': 'Private Lessons',
    'courses.private.description': 'Personal teaching adapted to your needs',
    'courses.private.price': 'from 500 SEK/lesson',
    'courses.private.book': 'Book lesson',
    'courses.video.title': 'Video Courses',
    'courses.video.description': 'Learn at your own pace with structured courses',
    'courses.video.price': 'from 299 SEK/course',
    'courses.video.explore': 'Explore courses',
    'courses.youtube.title': 'YouTube Channel',
    'courses.youtube.description': 'Free Swedish lessons and culture tips',
    'courses.youtube.price': 'Completely free',
    'courses.youtube.watch': 'Watch videos',
    
    // Contact
    'contact.title': 'Ready to start your Swedish journey?',
    'contact.subtitle': 'Book your first lesson or ask a question',
    'contact.name': 'Name',
    'contact.email': 'Email',
    'contact.message': 'Message',
    'contact.send': 'Send message',
    'contact.info.title': 'Contact Information',
    'contact.info.description': 'Don\'t hesitate to reach out! I usually respond within 24 hours.',
    'contact.schedule.title': 'Schedule directly',
    'contact.schedule.description': 'Choose a time that works best for you',
    
    // Footer
    'footer.brand.description': 'Your guide to the Swedish language and culture. Making language learning a fun and meaningful experience.',
    'footer.quickLinks': 'Quick Links',
    'footer.services': 'Services',
    'footer.services.private': 'Private Lessons',
    'footer.services.video': 'Video Courses',
    'footer.services.youtube': 'YouTube Channel',
    'footer.services.business': 'Business Swedish',
    'footer.newsletter.title': 'Newsletter',
    'footer.newsletter.description': 'Get tips, tricks and updates directly in your inbox',
    'footer.newsletter.placeholder': 'Your email',
    'footer.newsletter.subscribe': 'Subscribe',
    'footer.copyright': 'All rights reserved.',
    'footer.madeWith': 'Made with',
    'footer.by': 'by Ragnar',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service'
  }
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('sv');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'sv' ? 'en' : 'sv');
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};