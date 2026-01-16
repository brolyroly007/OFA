'use client';

import React, { useState, useEffect, useRef } from 'react';

// Translations
const translations = {
  es: {
    nav: {
      home: 'Inicio',
      services: 'Servicios',
      calculator: 'Calculadora',
      process: 'Proceso',
      team: 'Equipo',
      testimonials: 'Testimonios',
      faq: 'FAQ',
      apply: 'Aplica Ya',
    },
    hero: {
      overline: 'LA MEJOR AGENCIA ONLYFANS DE LATINOAMÉRICA',
      title1: 'Donde tu',
      title2: 'éxito',
      title3: 'comienza.',
      subtitle: 'Con más de 5 años de experiencia, llevamos modelos desde cero hasta facturar más de 6 cifras mensuales. Estrategia, gestión y resultados reales.',
      cta: 'Únete Ahora',
      cta2: 'Ver Servicios',
      spots: 'Solo 5 lugares disponibles este mes',
    },
    stats: {
      models: 'Modelos Activas',
      revenue: 'Facturado Total',
      growth: 'Incremento Promedio',
      retention: 'Tasa de Retención',
    },
    whyUs: {
      overline: 'POR QUÉ ELEGIRNOS',
      title: 'No todas las agencias son iguales.',
      subtitle: 'Descubre lo que nos hace diferentes de las demás.',
      luxor: 'Agencia Luxor',
      others: 'Otras Agencias',
      items: [
        { luxor: 'Protección DMCA y cumplimiento legal completo', others: 'Sin cobertura legal ni soporte' },
        { luxor: 'Directora creativa que te guía personalmente', others: 'Te presionan para crear contenido sin dirección' },
        { luxor: 'Escalamos tu cuenta hasta $100K+ mensuales', others: 'Resultados limitados mes tras mes' },
        { luxor: 'Sin contratos abusivos - cancela cuando quieras', others: 'Contratos con penalizaciones ocultas' },
        { luxor: 'Managers mujeres que entienden tu realidad', others: 'Managers que no conectan contigo' },
        { luxor: 'Chatters 24/7 en múltiples idiomas', others: 'Respuestas lentas o automatizadas' },
      ],
    },
    services: {
      overline: 'NUESTROS SERVICIOS',
      title: 'Todo lo que necesitas.',
      subtitle: 'Gestión completa de tu cuenta para que tú solo te dediques a crear contenido.',
      items: [
        {
          id: '01',
          name: 'Privacidad y Seguridad',
          desc: 'Tu comodidad es fundamental. Sube el contenido que prefieras y bloqueamos acceso desde tu país para garantizar tu privacidad total.',
          icon: '🔒'
        },
        {
          id: '02',
          name: 'Gestión de Cuenta',
          desc: 'Si ya tienes perfil, lo optimizamos. Si no, creamos todo desde cero. Tú solo tienes que posar y crear contenido.',
          icon: '⚙️'
        },
        {
          id: '03',
          name: 'Community Management',
          desc: 'Nos encargamos de responder todos los mensajes de tus fans, manteniéndolos 100% satisfechos mientras tú ahorras tiempo.',
          icon: '💬'
        },
        {
          id: '04',
          name: 'Estrategia de Marketing',
          desc: 'Desarrollamos estrategias personalizadas para optimizar tu actividad. Resultados garantizados en menos de un mes.',
          icon: '📈'
        },
        {
          id: '05',
          name: 'Chatters Profesionales',
          desc: 'Equipo de chatters en distintos países e idiomas para dar respuesta inmediata y personalizada a cada cliente.',
          icon: '💎'
        },
        {
          id: '06',
          name: 'Tráfico y Redes Sociales',
          desc: 'Gestionamos Instagram, TikTok, Twitter, Reddit, Telegram y más. Generamos tráfico altamente cualificado hacia tu perfil.',
          icon: '🚀'
        },
      ],
    },
    calculator: {
      overline: 'CALCULADORA DE INGRESOS',
      title: '¿Cuánto puedes ganar?',
      subtitle: 'Introduce tus datos actuales para calcular tu potencial de ingresos con nosotros.',
      currentLabel: 'Ingresos mensuales actuales',
      placeholder: 'ej. 2000',
      currency: 'USD',
      resultLabel: 'Podrías ganar hasta',
      perMonth: '/mes',
      withLuxor: 'con Agencia Luxor',
      disclaimer: '*Estimación basada en el incremento promedio del 200% de nuestras modelos en los primeros 3 meses.',
      cta: 'Quiero estos resultados',
    },
    process: {
      overline: 'NUESTRO PROCESO',
      title: 'Cómo trabajamos.',
      subtitle: 'Un proceso simple y transparente para llevarte al éxito.',
      steps: [
        {
          step: '01',
          title: 'Primera llamada',
          desc: 'Completa el formulario y te contactamos en menos de 24h. Entendemos tu marca, tus metas y reunimos la info clave para una propuesta a medida.'
        },
        {
          step: '02',
          title: 'Propuesta personalizada',
          desc: 'Analizamos tu caso y te presentamos opciones concretas. Buscamos la alternativa que mejor encaje con tu estilo y objetivos.'
        },
        {
          step: '03',
          title: 'Estrategia a largo plazo',
          desc: 'Tendrás una manager personal que te acompaña en contenido, rendimiento y decisiones basadas en datos para generar ingresos reales.'
        },
      ],
    },
    team: {
      overline: 'NUESTRO EQUIPO',
      title: 'Profesionales a tu servicio.',
      subtitle: 'Un equipo completo de especialistas en cada área para maximizar tu potencial.',
      members: [
        { role: 'Content Manager', desc: 'Planificación y dirección de contenido estratégico' },
        { role: 'Video Maker', desc: 'Producción audiovisual de alta calidad' },
        { role: 'Community Manager', desc: 'Gestión de redes sociales y engagement' },
        { role: 'Chatters', desc: 'Atención 24/7 en múltiples idiomas' },
        { role: 'Marketing', desc: 'Estrategias de crecimiento y promoción' },
        { role: 'Diseño', desc: 'Branding y diseño visual profesional' },
        { role: 'Inteligencia Artificial', desc: 'Tecnología avanzada para optimización' },
        { role: 'Asesor de Imagen', desc: 'Consultoría de estilo y presentación' },
      ],
    },
    testimonials: {
      overline: 'HISTORIAS DE ÉXITO',
      title: 'Lo que dicen nuestras modelos.',
      items: [
        {
          name: 'Marta',
          earnings: '22.000€',
          period: '/mes',
          quote: 'Antes de conocer esta agencia, trabajaba como asistente administrativa y me sentía estancada. Ahora genero más de 22.000€ al mes y me dedico a lo que realmente me apasiona.',
          before: 'Asistente administrativa'
        },
        {
          name: 'Laura',
          earnings: '18.000€',
          period: '/mes',
          quote: 'Era estilista de profesión, pero sentía que mi trabajo no era valorado. Desde que la agencia empezó a llevar mi cuenta, mis ingresos se dispararon. Nunca pensé tener tanta estabilidad económica.',
          before: 'Estilista'
        },
        {
          name: 'Karina',
          earnings: '34.000€',
          period: '/mes',
          quote: 'Trabajaba como dependienta con un salario que apenas cubría mis gastos. Ahora he alcanzado ingresos de hasta 34.000€ al mes. Todo gracias a su gestión impecable.',
          before: 'Dependienta'
        },
      ],
    },
    benefits: {
      overline: 'BENEFICIOS',
      title: 'Lo que obtienes.',
      items: [
        { title: 'Sin costos iniciales', desc: 'No tienes que pagar nada para empezar. Solo ganamos cuando tú ganas.' },
        { title: 'Contrato claro', desc: 'Todo acordado desde el primer día. Sin letra pequeña ni sorpresas.' },
        { title: 'Regalos y sorpresas', desc: 'Viajes, ropa y sorpresas para que disfrutes creando contenido.' },
        { title: 'Soporte 24/7', desc: 'Siempre disponibles para cualquier duda o pregunta que tengas.' },
      ],
    },
    faq: {
      overline: 'PREGUNTAS FRECUENTES',
      title: 'Todo lo que necesitas saber.',
      items: [
        { q: '¿Tengo que pagar para ser modelo?', a: 'No, nunca. No tienes que pagar nada para empezar. Solo cobramos un porcentaje de lo que generas, por lo que nuestro éxito está directamente ligado al tuyo.' },
        { q: '¿Qué tendré que hacer yo?', a: 'Tu única responsabilidad es crear contenido. Nosotros nos encargamos de absolutamente todo lo demás: gestión, marketing, chatters, redes sociales, estrategia y más.' },
        { q: '¿Cuánto puedo ganar al mes?', a: 'Depende de varios factores, pero nuestras modelos experimentan un incremento promedio del 200% en los primeros meses. Algunas han llegado a ganar más de 50.000€ mensuales.' },
        { q: '¿Cómo me pueden asegurar resultados?', a: 'Tenemos más de 5 años de experiencia y un equipo de profesionales especializados. Si no creces en 30 días, eres libre de irte sin ningún compromiso.' },
        { q: '¿Cuáles son los requisitos?', a: 'Debes ser mayor de 18 años, tener motivación para crear contenido y estar comprometida con tu crecimiento. No necesitas experiencia previa.' },
        { q: '¿Os encargáis de las redes sociales?', a: 'Sí, gestionamos todas tus redes: Instagram, TikTok, Twitter, Reddit, Telegram y más. Creamos estrategias específicas para cada plataforma.' },
        { q: '¿En qué países trabajan?', a: 'Trabajamos con modelos de todo el mundo. Tenemos chatters en múltiples idiomas para atender a fans de cualquier país.' },
        { q: '¿Cómo protegen mi privacidad?', a: 'Podemos bloquear el acceso desde tu país, usamos protección DMCA para tu contenido y cumplimos con todas las normativas de privacidad (GDPR, etc.).' },
      ],
    },
    apply: {
      overline: 'ÚNETE A NOSOTROS',
      title1: '¿Lista para',
      title2: 'triunfar?',
      subtitle: 'Aceptamos menos del 5% de aplicantes. Si estás seria sobre construir un negocio real, no solo un ingreso temporal, deberíamos hablar.',
      guarantee: 'Si no creces en 30 días, eres libre de irte.',
      form: {
        name: 'Tu nombre',
        namePlaceholder: 'María García',
        handle: 'Tu handle/usuario',
        handlePlaceholder: '@tuhandle',
        platform: 'Plataforma principal',
        platformPlaceholder: 'Instagram, TikTok, OnlyFans...',
        following: 'Seguidores actuales',
        followingPlaceholder: 'ej. 10k',
        contact: 'Telegram o Email',
        contactPlaceholder: '@telegram o email@ejemplo.com',
        submit: 'Enviar Aplicación',
        success: 'APLICACIÓN ENVIADA',
        successMsg: 'Te contactaremos en las próximas 24 horas',
        confidential: '100% confidencial',
        response: 'Respuesta en 24h',
      },
    },
    footer: {
      tagline: 'La mejor agencia OnlyFans de Latinoamérica',
      rights: 'Todos los derechos reservados',
    },
  },
  en: {
    nav: {
      home: 'Home',
      services: 'Services',
      calculator: 'Calculator',
      process: 'Process',
      team: 'Team',
      testimonials: 'Testimonials',
      faq: 'FAQ',
      apply: 'Apply Now',
    },
    hero: {
      overline: 'THE BEST ONLYFANS AGENCY IN LATIN AMERICA',
      title1: 'Where your',
      title2: 'success',
      title3: 'begins.',
      subtitle: 'With over 5 years of experience, we take models from zero to six-figure monthly earnings. Strategy, management and real results.',
      cta: 'Join Now',
      cta2: 'View Services',
      spots: 'Only 5 spots available this month',
    },
    stats: {
      models: 'Active Models',
      revenue: 'Total Revenue',
      growth: 'Average Growth',
      retention: 'Retention Rate',
    },
    whyUs: {
      overline: 'WHY CHOOSE US',
      title: 'Not all agencies are the same.',
      subtitle: 'Discover what makes us different from the rest.',
      luxor: 'Luxor Agency',
      others: 'Other Agencies',
      items: [
        { luxor: 'DMCA protection and full legal compliance', others: 'No legal coverage or support' },
        { luxor: 'Creative director to guide you personally', others: 'They pressure you to create content without direction' },
        { luxor: 'We scale your account up to $100K+ monthly', others: 'Limited results month after month' },
        { luxor: 'No abusive contracts - cancel anytime', others: 'Contracts with hidden penalties' },
        { luxor: 'Female managers who understand your reality', others: 'Managers who don\'t connect with you' },
        { luxor: '24/7 chatters in multiple languages', others: 'Slow or automated responses' },
      ],
    },
    services: {
      overline: 'OUR SERVICES',
      title: 'Everything you need.',
      subtitle: 'Complete account management so you only focus on creating content.',
      items: [
        {
          id: '01',
          name: 'Privacy & Security',
          desc: 'Your comfort is essential. Upload the content you prefer and we block access from your country to guarantee your total privacy.',
          icon: '🔒'
        },
        {
          id: '02',
          name: 'Account Management',
          desc: 'If you already have a profile, we optimize it. If not, we create everything from scratch. You just have to pose and create content.',
          icon: '⚙️'
        },
        {
          id: '03',
          name: 'Community Management',
          desc: 'We take care of responding to all your fans\' messages, keeping them 100% satisfied while you save time.',
          icon: '💬'
        },
        {
          id: '04',
          name: 'Marketing Strategy',
          desc: 'We develop personalized strategies to optimize your activity. Guaranteed results in less than a month.',
          icon: '📈'
        },
        {
          id: '05',
          name: 'Professional Chatters',
          desc: 'Team of chatters in different countries and languages to give immediate and personalized response to each client.',
          icon: '💎'
        },
        {
          id: '06',
          name: 'Traffic & Social Media',
          desc: 'We manage Instagram, TikTok, Twitter, Reddit, Telegram and more. We generate highly qualified traffic to your profile.',
          icon: '🚀'
        },
      ],
    },
    calculator: {
      overline: 'INCOME CALCULATOR',
      title: 'How much can you earn?',
      subtitle: 'Enter your current data to calculate your income potential with us.',
      currentLabel: 'Current monthly income',
      placeholder: 'e.g. 2000',
      currency: 'USD',
      resultLabel: 'You could earn up to',
      perMonth: '/month',
      withLuxor: 'with Luxor Agency',
      disclaimer: '*Estimate based on the average 200% increase of our models in the first 3 months.',
      cta: 'I want these results',
    },
    process: {
      overline: 'OUR PROCESS',
      title: 'How we work.',
      subtitle: 'A simple and transparent process to take you to success.',
      steps: [
        {
          step: '01',
          title: 'First call',
          desc: 'Complete the form and we\'ll contact you within 24h. We understand your brand, your goals and gather key info for a tailored proposal.'
        },
        {
          step: '02',
          title: 'Personalized proposal',
          desc: 'We analyze your case and present you with concrete options. We look for the alternative that best fits your style and objectives.'
        },
        {
          step: '03',
          title: 'Long-term strategy',
          desc: 'You\'ll have a personal manager who accompanies you in content, performance and data-driven decisions to generate real income.'
        },
      ],
    },
    team: {
      overline: 'OUR TEAM',
      title: 'Professionals at your service.',
      subtitle: 'A complete team of specialists in each area to maximize your potential.',
      members: [
        { role: 'Content Manager', desc: 'Strategic content planning and direction' },
        { role: 'Video Maker', desc: 'High quality audiovisual production' },
        { role: 'Community Manager', desc: 'Social media management and engagement' },
        { role: 'Chatters', desc: '24/7 support in multiple languages' },
        { role: 'Marketing', desc: 'Growth and promotion strategies' },
        { role: 'Design', desc: 'Professional branding and visual design' },
        { role: 'Artificial Intelligence', desc: 'Advanced technology for optimization' },
        { role: 'Image Advisor', desc: 'Style and presentation consulting' },
      ],
    },
    testimonials: {
      overline: 'SUCCESS STORIES',
      title: 'What our models say.',
      items: [
        {
          name: 'Marta',
          earnings: '€22,000',
          period: '/month',
          quote: 'Before finding this agency, I worked as an administrative assistant and felt stuck. Now I generate over €22,000 a month doing what I truly love.',
          before: 'Administrative assistant'
        },
        {
          name: 'Laura',
          earnings: '€18,000',
          period: '/month',
          quote: 'I was a stylist by profession, but I felt my work wasn\'t valued. Since the agency started managing my account, my income skyrocketed. I never thought I could have such economic stability.',
          before: 'Stylist'
        },
        {
          name: 'Karina',
          earnings: '€34,000',
          period: '/month',
          quote: 'I worked as a shop assistant with a salary that barely covered my expenses. Now I\'ve reached earnings of up to €34,000 per month. All thanks to their impeccable management.',
          before: 'Shop assistant'
        },
      ],
    },
    benefits: {
      overline: 'BENEFITS',
      title: 'What you get.',
      items: [
        { title: 'No upfront costs', desc: 'You don\'t have to pay anything to start. We only earn when you earn.' },
        { title: 'Clear contract', desc: 'Everything agreed from day one. No fine print or surprises.' },
        { title: 'Gifts and surprises', desc: 'Trips, clothes and surprises so you enjoy creating content.' },
        { title: '24/7 Support', desc: 'Always available for any questions you may have.' },
      ],
    },
    faq: {
      overline: 'FREQUENTLY ASKED QUESTIONS',
      title: 'Everything you need to know.',
      items: [
        { q: 'Do I have to pay to be a model?', a: 'No, never. You don\'t have to pay anything to start. We only charge a percentage of what you generate, so our success is directly linked to yours.' },
        { q: 'What will I have to do?', a: 'Your only responsibility is to create content. We take care of absolutely everything else: management, marketing, chatters, social media, strategy and more.' },
        { q: 'How much can I earn per month?', a: 'It depends on several factors, but our models experience an average increase of 200% in the first months. Some have reached over €50,000 monthly.' },
        { q: 'How can you guarantee results?', a: 'We have over 5 years of experience and a team of specialized professionals. If you don\'t grow in 30 days, you\'re free to leave with no commitment.' },
        { q: 'What are the requirements?', a: 'You must be over 18 years old, have motivation to create content and be committed to your growth. No previous experience required.' },
        { q: 'Do you manage social media?', a: 'Yes, we manage all your networks: Instagram, TikTok, Twitter, Reddit, Telegram and more. We create specific strategies for each platform.' },
        { q: 'What countries do you work in?', a: 'We work with models from all over the world. We have chatters in multiple languages to serve fans from any country.' },
        { q: 'How do you protect my privacy?', a: 'We can block access from your country, we use DMCA protection for your content and comply with all privacy regulations (GDPR, etc.).' },
      ],
    },
    apply: {
      overline: 'JOIN US',
      title1: 'Ready to',
      title2: 'succeed?',
      subtitle: 'We accept less than 5% of applicants. If you\'re serious about building a real business, not just temporary income, we should talk.',
      guarantee: 'If you don\'t grow in 30 days, you\'re free to leave.',
      form: {
        name: 'Your name',
        namePlaceholder: 'Maria Garcia',
        handle: 'Your handle/username',
        handlePlaceholder: '@yourhandle',
        platform: 'Main platform',
        platformPlaceholder: 'Instagram, TikTok, OnlyFans...',
        following: 'Current followers',
        followingPlaceholder: 'e.g. 10k',
        contact: 'Telegram or Email',
        contactPlaceholder: '@telegram or email@example.com',
        submit: 'Submit Application',
        success: 'APPLICATION SENT',
        successMsg: 'We\'ll contact you within 24 hours',
        confidential: '100% confidential',
        response: 'Response in 24h',
      },
    },
    footer: {
      tagline: 'The best OnlyFans agency in Latin America',
      rights: 'All rights reserved',
    },
  },
};

// Hook for scroll animations
function useScrollAnimation() {
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const sections = document.querySelectorAll('[data-animate]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return visibleSections;
}

export default function LuxorAgency() {
  const [scrollY, setScrollY] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({ name: '', handle: '', platform: '', following: '', contact: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [lang, setLang] = useState<'es' | 'en'>('es');
  const [calculatorValue, setCalculatorValue] = useState('');
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const visibleSections = useScrollAnimation();
  const t = translations[lang];

  useEffect(() => {
    const browserLang = navigator.language.toLowerCase();
    if (browserLang.startsWith('es')) {
      setLang('es');
    } else {
      setLang('en');
    }

    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const timer1 = setTimeout(() => setLoaded(true), 300);
    const timer2 = setTimeout(() => setShowContent(true), 1200);

    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);

    const testimonialInterval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % 3);
    }, 5000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', checkMobile);
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearInterval(testimonialInterval);
    };
  }, []);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.handle && formData.contact) {
      setFormSubmitted(true);
      setTimeout(() => {
        setFormData({ name: '', handle: '', platform: '', following: '', contact: '' });
      }, 3000);
    }
  };

  const calculatePotential = (current: number) => {
    return Math.round(current * 3);
  };

  // LUXOR COLOR PALETTE - Gold & Black Luxury
  const c = {
    dark: '#0c0c0e',
    darker: '#060608',
    darkAlt: '#111114',
    gold: '#d4af37',
    goldLight: '#f4e4a6',
    goldDark: '#8b7020',
    accent: '#e8c547',
    accentLight: '#f5e6a3',
    pearl: '#f8f8f8',
    pearlSoft: '#d0d0d0',
    success: '#4ade80',
    error: '#ef4444',
  };

  const hexToRgba = (hex: string, alpha: number) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  };

  const sectionStyle = (isVisible: boolean): React.CSSProperties => ({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
    transition: 'opacity 0.8s ease, transform 0.8s ease',
  });

  // Loading Screen
  if (!showContent) {
    return (
      <div style={{
        position: 'fixed',
        inset: 0,
        background: `linear-gradient(135deg, ${c.darker} 0%, ${c.dark} 100%)`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        gap: '2rem',
        zIndex: 10000,
      }}>
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Inter:wght@300;400;500;600;700&display=swap');

          @keyframes logoReveal {
            0% { opacity: 0; transform: translateY(30px); }
            100% { opacity: 1; transform: translateY(0); }
          }

          @keyframes lineExpand {
            0% { transform: scaleX(0); }
            100% { transform: scaleX(1); }
          }

          @keyframes pulse {
            0%, 100% { opacity: 0.4; }
            50% { opacity: 1; }
          }

          @keyframes shimmer {
            0% { background-position: -200% center; }
            100% { background-position: 200% center; }
          }
        `}</style>

        <div style={{
          fontFamily: '"Playfair Display", serif',
          fontSize: 'clamp(2rem, 8vw, 4rem)',
          fontWeight: 600,
          letterSpacing: '0.2em',
          background: `linear-gradient(135deg, ${c.goldLight} 0%, ${c.gold} 50%, ${c.goldDark} 100%)`,
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          animation: loaded ? 'logoReveal 0.8s ease forwards' : 'none',
          opacity: 0,
          textAlign: 'center',
        }}>
          AGENCIA LUXOR
        </div>

        <div style={{
          width: 200,
          height: 2,
          background: `linear-gradient(90deg, transparent, ${c.gold}, transparent)`,
          animation: loaded ? 'lineExpand 0.8s ease 0.3s forwards' : 'none',
          transform: 'scaleX(0)',
        }} />

        <div style={{
          fontFamily: '"Inter", sans-serif',
          fontSize: '0.7rem',
          fontWeight: 500,
          letterSpacing: '0.4em',
          color: c.gold,
          animation: 'pulse 1.5s ease infinite',
        }}>
          {lang === 'es' ? 'CARGANDO' : 'LOADING'}
        </div>
      </div>
    );
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: c.darker,
      color: c.pearl,
      fontFamily: '"Inter", sans-serif',
      overflowX: 'hidden',
      position: 'relative',
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Inter:wght@300;400;500;600;700&display=swap');

        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }

        ::selection {
          background: ${hexToRgba(c.gold, 0.4)};
          color: ${c.pearl};
        }

        input::placeholder, textarea::placeholder {
          color: ${hexToRgba(c.pearlSoft, 0.5)};
        }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-40px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(40px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }

        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes borderGlow {
          0%, 100% { box-shadow: 0 0 20px ${hexToRgba(c.gold, 0.3)}; }
          50% { box-shadow: 0 0 40px ${hexToRgba(c.gold, 0.5)}; }
        }

        .section-container {
          position: relative;
          padding: ${isMobile ? '4rem 1.5rem' : '6rem 5rem'};
        }

        .section-dark {
          background: ${c.darker};
        }

        .section-alt {
          background: ${c.dark};
        }

        .section-gradient {
          background: linear-gradient(180deg, ${c.darker} 0%, ${c.dark} 50%, ${c.darker} 100%);
        }

        .section-gold {
          background: linear-gradient(180deg, ${c.darker} 0%, ${hexToRgba(c.goldDark, 0.1)} 50%, ${c.darker} 100%);
        }

        ::-webkit-scrollbar { width: 8px; }
        ::-webkit-scrollbar-track { background: ${c.darker}; }
        ::-webkit-scrollbar-thumb { background: ${c.goldDark}; border-radius: 4px; }
        ::-webkit-scrollbar-thumb:hover { background: ${c.gold}; }

        @media (max-width: 768px) {
          .hide-mobile { display: none !important; }
          .section-container { padding: 4rem 1.5rem; }
        }
      `}</style>

      {/* Background Pattern */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: `
          radial-gradient(circle at 20% 20%, ${hexToRgba(c.gold, 0.05)} 0%, transparent 40%),
          radial-gradient(circle at 80% 80%, ${hexToRgba(c.gold, 0.03)} 0%, transparent 40%)
        `,
        pointerEvents: 'none',
        zIndex: 0,
      }} />

      {/* Navigation */}
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        padding: isMobile ? '1rem 1.5rem' : '1.5rem 5rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        zIndex: 100,
        background: scrollY > 50
          ? hexToRgba(c.darker, 0.95)
          : 'transparent',
        backdropFilter: scrollY > 50 ? 'blur(20px)' : 'none',
        borderBottom: scrollY > 50 ? `1px solid ${hexToRgba(c.gold, 0.1)}` : 'none',
        transition: 'all 0.3s ease',
      }}>
        <a href="#hero" style={{
          fontFamily: '"Playfair Display", serif',
          fontSize: isMobile ? '1.3rem' : '1.6rem',
          fontWeight: 600,
          letterSpacing: '0.15em',
          background: `linear-gradient(135deg, ${c.goldLight} 0%, ${c.gold} 50%, ${c.goldDark} 100%)`,
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          textDecoration: 'none',
        }}>
          LUXOR
        </a>

        {/* Desktop Nav */}
        <div className="hide-mobile" style={{
          display: 'flex',
          alignItems: 'center',
          gap: '2.5rem',
        }}>
          {/* Language Toggle */}
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            {['es', 'en'].map((l) => (
              <button
                key={l}
                onClick={() => setLang(l as 'es' | 'en')}
                style={{
                  background: lang === l ? c.gold : 'transparent',
                  border: `1px solid ${lang === l ? c.gold : hexToRgba(c.gold, 0.3)}`,
                  color: lang === l ? c.darker : c.gold,
                  padding: '0.4rem 0.8rem',
                  borderRadius: '4px',
                  fontSize: '0.65rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                }}
              >
                {l.toUpperCase()}
              </button>
            ))}
          </div>

          {/* Nav Links */}
          <div style={{ display: 'flex', gap: '2rem' }}>
            {[
              { key: 'services', label: t.nav.services },
              { key: 'process', label: t.nav.process },
              { key: 'testimonials', label: t.nav.testimonials },
              { key: 'faq', label: t.nav.faq },
            ].map((item) => (
              <a
                key={item.key}
                href={`#${item.key}`}
                style={{
                  color: c.pearlSoft,
                  textDecoration: 'none',
                  fontSize: '0.8rem',
                  fontWeight: 500,
                  letterSpacing: '0.05em',
                  transition: 'color 0.3s ease',
                }}
                onMouseOver={(e) => e.currentTarget.style.color = c.gold}
                onMouseOut={(e) => e.currentTarget.style.color = c.pearlSoft}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <a
            href="#apply"
            style={{
              background: `linear-gradient(135deg, ${c.gold} 0%, ${c.goldDark} 100%)`,
              color: c.darker,
              padding: '0.8rem 1.8rem',
              borderRadius: '6px',
              textDecoration: 'none',
              fontSize: '0.75rem',
              fontWeight: 700,
              letterSpacing: '0.1em',
              transition: 'all 0.3s ease',
              boxShadow: `0 4px 20px ${hexToRgba(c.gold, 0.3)}`,
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = `0 8px 30px ${hexToRgba(c.gold, 0.4)}`;
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = `0 4px 20px ${hexToRgba(c.gold, 0.3)}`;
            }}
          >
            {t.nav.apply}
          </a>
        </div>

        {/* Mobile Menu Button */}
        {isMobile && (
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              background: 'transparent',
              border: 'none',
              color: c.gold,
              fontSize: '1.5rem',
              cursor: 'pointer',
              padding: '0.5rem',
            }}
          >
            {mobileMenuOpen ? '✕' : '☰'}
          </button>
        )}
      </nav>

      {/* Mobile Menu */}
      {isMobile && mobileMenuOpen && (
        <div style={{
          position: 'fixed',
          top: '60px',
          left: 0,
          right: 0,
          bottom: 0,
          background: hexToRgba(c.darker, 0.98),
          zIndex: 99,
          padding: '2rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem',
        }}>
          {[
            { key: 'services', label: t.nav.services },
            { key: 'calculator', label: t.nav.calculator },
            { key: 'process', label: t.nav.process },
            { key: 'testimonials', label: t.nav.testimonials },
            { key: 'faq', label: t.nav.faq },
          ].map((item) => (
            <a
              key={item.key}
              href={`#${item.key}`}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                color: c.pearl,
                textDecoration: 'none',
                fontSize: '1.2rem',
                fontWeight: 500,
                padding: '1rem 0',
                borderBottom: `1px solid ${hexToRgba(c.gold, 0.1)}`,
              }}
            >
              {item.label}
            </a>
          ))}
          <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
            {['es', 'en'].map((l) => (
              <button
                key={l}
                onClick={() => setLang(l as 'es' | 'en')}
                style={{
                  background: lang === l ? c.gold : 'transparent',
                  border: `1px solid ${c.gold}`,
                  color: lang === l ? c.darker : c.gold,
                  padding: '0.8rem 1.5rem',
                  borderRadius: '6px',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                }}
              >
                {l.toUpperCase()}
              </button>
            ))}
          </div>
          <a
            href="#apply"
            onClick={() => setMobileMenuOpen(false)}
            style={{
              background: c.gold,
              color: c.darker,
              padding: '1rem 2rem',
              borderRadius: '8px',
              textDecoration: 'none',
              fontSize: '1rem',
              fontWeight: 700,
              textAlign: 'center',
              marginTop: '1rem',
            }}
          >
            {t.nav.apply}
          </a>
        </div>
      )}

      {/* HERO SECTION */}
      <section
        id="hero"
        className="section-container"
        style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          paddingTop: isMobile ? '6rem' : '8rem',
          position: 'relative',
        }}
      >
        <div style={{
          maxWidth: '900px',
          textAlign: 'center',
          position: 'relative',
          zIndex: 2,
        }}>
          {/* Overline */}
          <div style={{
            fontFamily: '"Inter", sans-serif',
            fontSize: isMobile ? '0.6rem' : '0.75rem',
            fontWeight: 600,
            letterSpacing: '0.3em',
            color: c.gold,
            marginBottom: '2rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1rem',
            animation: 'fadeInUp 0.8s ease forwards',
          }}>
            <span style={{ width: 40, height: 1, background: c.gold }} />
            {t.hero.overline}
            <span style={{ width: 40, height: 1, background: c.gold }} />
          </div>

          {/* Title */}
          <h1 style={{
            fontSize: isMobile ? 'clamp(2.5rem, 12vw, 4rem)' : 'clamp(3.5rem, 8vw, 6rem)',
            fontFamily: '"Playfair Display", serif',
            fontWeight: 500,
            lineHeight: 1.1,
            margin: 0,
            animation: 'fadeInUp 0.8s ease 0.1s forwards',
            opacity: 0,
            animationFillMode: 'forwards',
          }}>
            <span style={{ display: 'block', color: c.pearl }}>{t.hero.title1}</span>
            <span style={{
              display: 'block',
              background: `linear-gradient(135deg, ${c.goldLight} 0%, ${c.gold} 50%, ${c.accent} 100%)`,
              backgroundSize: '200% 200%',
              animation: 'gradientMove 4s ease infinite',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              fontStyle: 'italic',
            }}>{t.hero.title2}</span>
            <span style={{ display: 'block', color: hexToRgba(c.pearl, 0.9) }}>{t.hero.title3}</span>
          </h1>

          {/* Subtitle */}
          <p style={{
            marginTop: '2.5rem',
            fontSize: isMobile ? '1rem' : '1.2rem',
            lineHeight: 1.8,
            color: hexToRgba(c.pearlSoft, 0.75),
            maxWidth: '600px',
            margin: '2.5rem auto 0',
            animation: 'fadeInUp 0.8s ease 0.2s forwards',
            opacity: 0,
            animationFillMode: 'forwards',
          }}>
            {t.hero.subtitle}
          </p>

          {/* CTAs */}
          <div style={{
            marginTop: '3rem',
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1.5rem',
            animation: 'fadeInUp 0.8s ease 0.3s forwards',
            opacity: 0,
            animationFillMode: 'forwards',
          }}>
            <a
              href="#apply"
              style={{
                padding: '1.2rem 3rem',
                background: `linear-gradient(135deg, ${c.gold} 0%, ${c.goldDark} 100%)`,
                color: c.darker,
                textDecoration: 'none',
                fontSize: '0.85rem',
                fontWeight: 700,
                letterSpacing: '0.12em',
                borderRadius: '8px',
                transition: 'all 0.3s ease',
                boxShadow: `0 10px 40px ${hexToRgba(c.gold, 0.3)}`,
                display: 'inline-block',
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = `0 15px 50px ${hexToRgba(c.gold, 0.4)}`;
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = `0 10px 40px ${hexToRgba(c.gold, 0.3)}`;
              }}
            >
              {t.hero.cta}
            </a>
            <a
              href="#services"
              style={{
                padding: '1.2rem 3rem',
                background: 'transparent',
                color: c.gold,
                textDecoration: 'none',
                fontSize: '0.85rem',
                fontWeight: 600,
                letterSpacing: '0.1em',
                borderRadius: '8px',
                border: `2px solid ${c.gold}`,
                transition: 'all 0.3s ease',
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = hexToRgba(c.gold, 0.1);
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = 'transparent';
              }}
            >
              {t.hero.cta2}
            </a>
          </div>

          {/* Spots Available */}
          <div style={{
            marginTop: '2rem',
            fontSize: '0.75rem',
            color: hexToRgba(c.gold, 0.8),
            letterSpacing: '0.08em',
            animation: 'fadeInUp 0.8s ease 0.4s forwards',
            opacity: 0,
            animationFillMode: 'forwards',
          }}>
            ★ {t.hero.spots}
          </div>
        </div>

        {/* Stats Bar */}
        <div style={{
          position: 'absolute',
          bottom: isMobile ? '2rem' : '4rem',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          gap: isMobile ? '2rem' : '4rem',
          animation: 'fadeInUp 0.8s ease 0.5s forwards',
          opacity: 0,
          animationFillMode: 'forwards',
        }}>
          {[
            { value: '50+', label: t.stats.models },
            { value: '$10M+', label: t.stats.revenue },
            { value: '200%', label: t.stats.growth },
          ].map((stat, i) => (
            <div key={i} style={{ textAlign: 'center' }}>
              <div style={{
                fontFamily: '"Playfair Display", serif',
                fontSize: isMobile ? '1.8rem' : '2.5rem',
                fontWeight: 600,
                color: c.gold,
              }}>{stat.value}</div>
              <div style={{
                fontSize: '0.6rem',
                fontWeight: 500,
                color: hexToRgba(c.pearlSoft, 0.5),
                letterSpacing: '0.1em',
                marginTop: '0.3rem',
              }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* WHY US SECTION */}
      <section
        id="whyus"
        data-animate
        className="section-container section-alt"
        style={sectionStyle(visibleSections.has('whyus'))}
      >
        <div style={{
          maxWidth: '1100px',
          margin: '0 auto',
        }}>
          {/* Section Header */}
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <div style={{
              fontSize: '0.7rem',
              fontWeight: 600,
              letterSpacing: '0.3em',
              color: c.gold,
              marginBottom: '1rem',
            }}>
              {t.whyUs.overline}
            </div>
            <h2 style={{
              fontFamily: '"Playfair Display", serif',
              fontSize: isMobile ? '2rem' : '3rem',
              fontWeight: 500,
              margin: 0,
              color: c.pearl,
            }}>
              {t.whyUs.title}
            </h2>
            <p style={{
              marginTop: '1rem',
              fontSize: '1rem',
              color: hexToRgba(c.pearlSoft, 0.6),
            }}>
              {t.whyUs.subtitle}
            </p>
          </div>

          {/* Comparison Table */}
          <div style={{
            background: hexToRgba(c.darkAlt, 0.8),
            borderRadius: '16px',
            border: `1px solid ${hexToRgba(c.gold, 0.15)}`,
            overflow: 'hidden',
          }}>
            {/* Table Header */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr 1fr' : '1fr 1fr',
              borderBottom: `1px solid ${hexToRgba(c.gold, 0.15)}`,
            }}>
              <div style={{
                padding: isMobile ? '1.2rem' : '1.5rem 2rem',
                background: hexToRgba(c.gold, 0.1),
                fontWeight: 700,
                fontSize: isMobile ? '0.8rem' : '1rem',
                color: c.gold,
                textAlign: 'center',
                borderRight: `1px solid ${hexToRgba(c.gold, 0.15)}`,
              }}>
                ✓ {t.whyUs.luxor}
              </div>
              <div style={{
                padding: isMobile ? '1.2rem' : '1.5rem 2rem',
                fontWeight: 600,
                fontSize: isMobile ? '0.8rem' : '1rem',
                color: hexToRgba(c.pearlSoft, 0.5),
                textAlign: 'center',
              }}>
                ✗ {t.whyUs.others}
              </div>
            </div>

            {/* Table Rows */}
            {t.whyUs.items.map((item, i) => (
              <div
                key={i}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  borderBottom: i < t.whyUs.items.length - 1 ? `1px solid ${hexToRgba(c.gold, 0.08)}` : 'none',
                }}
              >
                <div style={{
                  padding: isMobile ? '1rem' : '1.5rem 2rem',
                  fontSize: isMobile ? '0.8rem' : '0.95rem',
                  color: c.pearl,
                  borderRight: `1px solid ${hexToRgba(c.gold, 0.08)}`,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.8rem',
                }}>
                  <span style={{ color: c.success, fontSize: '1rem' }}>✓</span>
                  {item.luxor}
                </div>
                <div style={{
                  padding: isMobile ? '1rem' : '1.5rem 2rem',
                  fontSize: isMobile ? '0.8rem' : '0.95rem',
                  color: hexToRgba(c.pearlSoft, 0.5),
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.8rem',
                }}>
                  <span style={{ color: c.error, fontSize: '1rem' }}>✗</span>
                  {item.others}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section
        id="services"
        data-animate
        className="section-container section-gradient"
        style={sectionStyle(visibleSections.has('services'))}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          {/* Section Header */}
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <div style={{
              fontSize: '0.7rem',
              fontWeight: 600,
              letterSpacing: '0.3em',
              color: c.gold,
              marginBottom: '1rem',
            }}>
              {t.services.overline}
            </div>
            <h2 style={{
              fontFamily: '"Playfair Display", serif',
              fontSize: isMobile ? '2rem' : '3rem',
              fontWeight: 500,
              fontStyle: 'italic',
              margin: 0,
              color: c.pearl,
            }}>
              {t.services.title}
            </h2>
            <p style={{
              marginTop: '1rem',
              fontSize: '1rem',
              color: hexToRgba(c.pearlSoft, 0.6),
              maxWidth: '500px',
              margin: '1rem auto 0',
            }}>
              {t.services.subtitle}
            </p>
          </div>

          {/* Services Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
            gap: '1.5rem',
          }}>
            {t.services.items.map((service, i) => (
              <div
                key={service.id}
                style={{
                  background: hexToRgba(c.darkAlt, 0.6),
                  borderRadius: '12px',
                  border: `1px solid ${hexToRgba(c.gold, 0.1)}`,
                  padding: isMobile ? '1.8rem' : '2.5rem',
                  transition: 'all 0.4s ease',
                  position: 'relative',
                  overflow: 'hidden',
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.borderColor = hexToRgba(c.gold, 0.3);
                  e.currentTarget.style.transform = 'translateY(-5px)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.borderColor = hexToRgba(c.gold, 0.1);
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                {/* Icon */}
                <div style={{
                  fontSize: '2.5rem',
                  marginBottom: '1.5rem',
                }}>
                  {service.icon}
                </div>

                {/* Number */}
                <div style={{
                  position: 'absolute',
                  top: '1.5rem',
                  right: '1.5rem',
                  fontSize: '0.7rem',
                  fontWeight: 700,
                  color: c.gold,
                  letterSpacing: '0.1em',
                }}>
                  {service.id}
                </div>

                {/* Title */}
                <h3 style={{
                  fontFamily: '"Playfair Display", serif',
                  fontSize: '1.3rem',
                  fontWeight: 500,
                  margin: '0 0 1rem 0',
                  color: c.pearl,
                }}>
                  {service.name}
                </h3>

                {/* Description */}
                <p style={{
                  fontSize: '0.9rem',
                  lineHeight: 1.7,
                  color: hexToRgba(c.pearlSoft, 0.65),
                  margin: 0,
                }}>
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CALCULATOR SECTION */}
      <section
        id="calculator"
        data-animate
        className="section-container section-gold"
        style={sectionStyle(visibleSections.has('calculator'))}
      >
        <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
          {/* Section Header */}
          <div style={{
            fontSize: '0.7rem',
            fontWeight: 600,
            letterSpacing: '0.3em',
            color: c.gold,
            marginBottom: '1rem',
          }}>
            {t.calculator.overline}
          </div>
          <h2 style={{
            fontFamily: '"Playfair Display", serif',
            fontSize: isMobile ? '2rem' : '3rem',
            fontWeight: 500,
            margin: 0,
            color: c.pearl,
          }}>
            {t.calculator.title}
          </h2>
          <p style={{
            marginTop: '1rem',
            fontSize: '1rem',
            color: hexToRgba(c.pearlSoft, 0.6),
          }}>
            {t.calculator.subtitle}
          </p>

          {/* Calculator Box */}
          <div style={{
            marginTop: '3rem',
            background: hexToRgba(c.darkAlt, 0.8),
            borderRadius: '16px',
            border: `1px solid ${hexToRgba(c.gold, 0.2)}`,
            padding: isMobile ? '2rem' : '3rem',
          }}>
            {/* Input */}
            <div style={{ marginBottom: '2rem' }}>
              <label style={{
                display: 'block',
                fontSize: '0.75rem',
                fontWeight: 600,
                color: c.gold,
                letterSpacing: '0.1em',
                marginBottom: '1rem',
                textAlign: 'left',
              }}>
                {t.calculator.currentLabel}
              </label>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
              }}>
                <span style={{
                  fontSize: '1.5rem',
                  fontWeight: 600,
                  color: c.gold,
                }}>$</span>
                <input
                  type="number"
                  value={calculatorValue}
                  onChange={(e) => setCalculatorValue(e.target.value)}
                  placeholder={t.calculator.placeholder}
                  style={{
                    flex: 1,
                    background: hexToRgba(c.dark, 0.5),
                    border: `1px solid ${hexToRgba(c.gold, 0.2)}`,
                    borderRadius: '8px',
                    padding: '1rem 1.5rem',
                    fontSize: '1.5rem',
                    fontWeight: 600,
                    color: c.pearl,
                    outline: 'none',
                    transition: 'border-color 0.3s ease',
                  }}
                  onFocus={(e) => e.currentTarget.style.borderColor = c.gold}
                  onBlur={(e) => e.currentTarget.style.borderColor = hexToRgba(c.gold, 0.2)}
                />
                <span style={{
                  fontSize: '0.9rem',
                  color: hexToRgba(c.pearlSoft, 0.5),
                }}>{t.calculator.currency}</span>
              </div>
            </div>

            {/* Result */}
            {calculatorValue && parseInt(calculatorValue) > 0 && (
              <div style={{
                background: hexToRgba(c.gold, 0.1),
                borderRadius: '12px',
                padding: '2rem',
                marginBottom: '2rem',
                animation: 'scaleIn 0.3s ease',
              }}>
                <div style={{
                  fontSize: '0.8rem',
                  color: hexToRgba(c.pearlSoft, 0.6),
                  marginBottom: '0.5rem',
                }}>
                  {t.calculator.resultLabel}
                </div>
                <div style={{
                  fontFamily: '"Playfair Display", serif',
                  fontSize: isMobile ? '3rem' : '4rem',
                  fontWeight: 600,
                  color: c.gold,
                  lineHeight: 1,
                }}>
                  ${calculatePotential(parseInt(calculatorValue)).toLocaleString()}
                  <span style={{ fontSize: '1.5rem', color: hexToRgba(c.gold, 0.7) }}>{t.calculator.perMonth}</span>
                </div>
                <div style={{
                  fontSize: '0.85rem',
                  color: c.goldLight,
                  marginTop: '0.5rem',
                }}>
                  {t.calculator.withLuxor}
                </div>
              </div>
            )}

            {/* Disclaimer */}
            <p style={{
              fontSize: '0.7rem',
              color: hexToRgba(c.pearlSoft, 0.4),
              margin: '1.5rem 0',
            }}>
              {t.calculator.disclaimer}
            </p>

            {/* CTA */}
            <a
              href="#apply"
              style={{
                display: 'inline-block',
                padding: '1rem 2.5rem',
                background: `linear-gradient(135deg, ${c.gold} 0%, ${c.goldDark} 100%)`,
                color: c.darker,
                textDecoration: 'none',
                fontSize: '0.85rem',
                fontWeight: 700,
                letterSpacing: '0.1em',
                borderRadius: '8px',
                transition: 'all 0.3s ease',
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              {t.calculator.cta}
            </a>
          </div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section
        id="process"
        data-animate
        className="section-container section-alt"
        style={sectionStyle(visibleSections.has('process'))}
      >
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          {/* Section Header */}
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <div style={{
              fontSize: '0.7rem',
              fontWeight: 600,
              letterSpacing: '0.3em',
              color: c.gold,
              marginBottom: '1rem',
            }}>
              {t.process.overline}
            </div>
            <h2 style={{
              fontFamily: '"Playfair Display", serif',
              fontSize: isMobile ? '2rem' : '3rem',
              fontWeight: 500,
              fontStyle: 'italic',
              margin: 0,
              color: c.pearl,
            }}>
              {t.process.title}
            </h2>
            <p style={{
              marginTop: '1rem',
              fontSize: '1rem',
              color: hexToRgba(c.pearlSoft, 0.6),
            }}>
              {t.process.subtitle}
            </p>
          </div>

          {/* Process Steps */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '2rem',
          }}>
            {t.process.steps.map((step, i) => (
              <div
                key={i}
                style={{
                  display: 'grid',
                  gridTemplateColumns: isMobile ? '1fr' : 'auto 1fr',
                  gap: isMobile ? '1.5rem' : '3rem',
                  alignItems: 'start',
                  padding: isMobile ? '2rem' : '2.5rem',
                  background: hexToRgba(c.darkAlt, 0.6),
                  borderRadius: '16px',
                  border: `1px solid ${hexToRgba(c.gold, 0.1)}`,
                  position: 'relative',
                }}
              >
                {/* Step Number */}
                <div style={{
                  width: isMobile ? '60px' : '80px',
                  height: isMobile ? '60px' : '80px',
                  borderRadius: '50%',
                  background: `linear-gradient(135deg, ${c.gold} 0%, ${c.goldDark} 100%)`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: '"Playfair Display", serif',
                  fontSize: isMobile ? '1.5rem' : '2rem',
                  fontWeight: 600,
                  color: c.darker,
                  flexShrink: 0,
                }}>
                  {step.step}
                </div>

                {/* Content */}
                <div>
                  <h3 style={{
                    fontFamily: '"Playfair Display", serif',
                    fontSize: isMobile ? '1.4rem' : '1.8rem',
                    fontWeight: 500,
                    margin: '0 0 1rem 0',
                    color: c.pearl,
                  }}>
                    {step.title}
                  </h3>
                  <p style={{
                    fontSize: '1rem',
                    lineHeight: 1.8,
                    color: hexToRgba(c.pearlSoft, 0.7),
                    margin: 0,
                  }}>
                    {step.desc}
                  </p>
                </div>

                {/* Connector Line */}
                {i < t.process.steps.length - 1 && !isMobile && (
                  <div style={{
                    position: 'absolute',
                    bottom: '-2rem',
                    left: '40px',
                    width: '2px',
                    height: '2rem',
                    background: `linear-gradient(180deg, ${c.gold}, transparent)`,
                  }} />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM SECTION */}
      <section
        id="team"
        data-animate
        className="section-container section-gradient"
        style={sectionStyle(visibleSections.has('team'))}
      >
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          {/* Section Header */}
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <div style={{
              fontSize: '0.7rem',
              fontWeight: 600,
              letterSpacing: '0.3em',
              color: c.gold,
              marginBottom: '1rem',
            }}>
              {t.team.overline}
            </div>
            <h2 style={{
              fontFamily: '"Playfair Display", serif',
              fontSize: isMobile ? '2rem' : '3rem',
              fontWeight: 500,
              fontStyle: 'italic',
              margin: 0,
              color: c.pearl,
            }}>
              {t.team.title}
            </h2>
            <p style={{
              marginTop: '1rem',
              fontSize: '1rem',
              color: hexToRgba(c.pearlSoft, 0.6),
            }}>
              {t.team.subtitle}
            </p>
          </div>

          {/* Team Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
            gap: '1rem',
          }}>
            {t.team.members.map((member, i) => (
              <div
                key={i}
                style={{
                  background: hexToRgba(c.darkAlt, 0.6),
                  borderRadius: '12px',
                  border: `1px solid ${hexToRgba(c.gold, 0.1)}`,
                  padding: isMobile ? '1.5rem' : '2rem',
                  textAlign: 'center',
                  transition: 'all 0.3s ease',
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.borderColor = hexToRgba(c.gold, 0.3);
                  e.currentTarget.style.transform = 'translateY(-3px)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.borderColor = hexToRgba(c.gold, 0.1);
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                {/* Icon placeholder */}
                <div style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  background: hexToRgba(c.gold, 0.15),
                  margin: '0 auto 1rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.5rem',
                  color: c.gold,
                }}>
                  ★
                </div>
                <h4 style={{
                  fontSize: isMobile ? '0.85rem' : '1rem',
                  fontWeight: 600,
                  margin: '0 0 0.5rem 0',
                  color: c.pearl,
                }}>
                  {member.role}
                </h4>
                <p style={{
                  fontSize: '0.75rem',
                  color: hexToRgba(c.pearlSoft, 0.5),
                  margin: 0,
                  lineHeight: 1.5,
                }}>
                  {member.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section
        id="testimonials"
        data-animate
        className="section-container section-gold"
        style={sectionStyle(visibleSections.has('testimonials'))}
      >
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          {/* Section Header */}
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <div style={{
              fontSize: '0.7rem',
              fontWeight: 600,
              letterSpacing: '0.3em',
              color: c.gold,
              marginBottom: '1rem',
            }}>
              {t.testimonials.overline}
            </div>
            <h2 style={{
              fontFamily: '"Playfair Display", serif',
              fontSize: isMobile ? '2rem' : '3rem',
              fontWeight: 500,
              fontStyle: 'italic',
              margin: 0,
              color: c.pearl,
            }}>
              {t.testimonials.title}
            </h2>
          </div>

          {/* Testimonial Carousel */}
          <div style={{
            position: 'relative',
            minHeight: isMobile ? '450px' : '380px',
          }}>
            {t.testimonials.items.map((testimonial, i) => (
              <div
                key={i}
                style={{
                  position: i === 0 ? 'relative' : 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  opacity: activeTestimonial === i ? 1 : 0,
                  transform: activeTestimonial === i ? 'scale(1)' : 'scale(0.95)',
                  transition: 'all 0.6s ease',
                  pointerEvents: activeTestimonial === i ? 'auto' : 'none',
                }}
              >
                <div style={{
                  background: hexToRgba(c.darkAlt, 0.8),
                  borderRadius: '16px',
                  border: `1px solid ${hexToRgba(c.gold, 0.2)}`,
                  padding: isMobile ? '2rem' : '3rem',
                  textAlign: 'center',
                }}>
                  {/* Earnings Badge */}
                  <div style={{
                    display: 'inline-block',
                    background: `linear-gradient(135deg, ${c.gold} 0%, ${c.goldDark} 100%)`,
                    borderRadius: '30px',
                    padding: '0.8rem 2rem',
                    marginBottom: '2rem',
                  }}>
                    <span style={{
                      fontFamily: '"Playfair Display", serif',
                      fontSize: isMobile ? '1.5rem' : '2rem',
                      fontWeight: 600,
                      color: c.darker,
                    }}>
                      {testimonial.earnings}
                    </span>
                    <span style={{
                      fontSize: '0.9rem',
                      color: hexToRgba(c.darker, 0.7),
                    }}>
                      {testimonial.period}
                    </span>
                  </div>

                  {/* Quote */}
                  <div style={{
                    fontSize: '2.5rem',
                    color: hexToRgba(c.gold, 0.3),
                    marginBottom: '-0.5rem',
                  }}>"</div>
                  <blockquote style={{
                    fontFamily: '"Playfair Display", serif',
                    fontSize: isMobile ? '1.1rem' : '1.3rem',
                    fontStyle: 'italic',
                    lineHeight: 1.8,
                    color: c.pearl,
                    margin: '0 0 2rem 0',
                  }}>
                    {testimonial.quote}
                  </blockquote>

                  {/* Author */}
                  <div>
                    <div style={{
                      fontSize: '1.1rem',
                      fontWeight: 600,
                      color: c.gold,
                      marginBottom: '0.3rem',
                    }}>
                      {testimonial.name}
                    </div>
                    <div style={{
                      fontSize: '0.8rem',
                      color: hexToRgba(c.pearlSoft, 0.5),
                    }}>
                      {lang === 'es' ? 'Antes: ' : 'Before: '}{testimonial.before}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dots */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '0.8rem',
            marginTop: '2rem',
          }}>
            {t.testimonials.items.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveTestimonial(i)}
                style={{
                  width: activeTestimonial === i ? 30 : 10,
                  height: 10,
                  borderRadius: 5,
                  background: activeTestimonial === i ? c.gold : hexToRgba(c.gold, 0.3),
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  padding: 0,
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS SECTION */}
      <section
        id="benefits"
        data-animate
        className="section-container section-alt"
        style={sectionStyle(visibleSections.has('benefits'))}
      >
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          {/* Section Header */}
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <div style={{
              fontSize: '0.7rem',
              fontWeight: 600,
              letterSpacing: '0.3em',
              color: c.gold,
              marginBottom: '1rem',
            }}>
              {t.benefits.overline}
            </div>
            <h2 style={{
              fontFamily: '"Playfair Display", serif',
              fontSize: isMobile ? '2rem' : '3rem',
              fontWeight: 500,
              fontStyle: 'italic',
              margin: 0,
              color: c.pearl,
            }}>
              {t.benefits.title}
            </h2>
          </div>

          {/* Benefits Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
            gap: '1.5rem',
          }}>
            {t.benefits.items.map((benefit, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  gap: '1.5rem',
                  padding: '2rem',
                  background: hexToRgba(c.darkAlt, 0.6),
                  borderRadius: '12px',
                  border: `1px solid ${hexToRgba(c.gold, 0.1)}`,
                }}
              >
                <div style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  background: hexToRgba(c.gold, 0.15),
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  <span style={{ color: c.gold, fontSize: '1.3rem' }}>✓</span>
                </div>
                <div>
                  <h4 style={{
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    margin: '0 0 0.5rem 0',
                    color: c.pearl,
                  }}>
                    {benefit.title}
                  </h4>
                  <p style={{
                    fontSize: '0.9rem',
                    color: hexToRgba(c.pearlSoft, 0.6),
                    margin: 0,
                    lineHeight: 1.6,
                  }}>
                    {benefit.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section
        id="faq"
        data-animate
        className="section-container section-gradient"
        style={sectionStyle(visibleSections.has('faq'))}
      >
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          {/* Section Header */}
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <div style={{
              fontSize: '0.7rem',
              fontWeight: 600,
              letterSpacing: '0.3em',
              color: c.gold,
              marginBottom: '1rem',
            }}>
              {t.faq.overline}
            </div>
            <h2 style={{
              fontFamily: '"Playfair Display", serif',
              fontSize: isMobile ? '2rem' : '3rem',
              fontWeight: 500,
              fontStyle: 'italic',
              margin: 0,
              color: c.pearl,
            }}>
              {t.faq.title}
            </h2>
          </div>

          {/* FAQ Accordion */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
            {t.faq.items.map((faq, i) => (
              <div
                key={i}
                style={{
                  background: hexToRgba(c.darkAlt, 0.6),
                  borderRadius: '12px',
                  border: `1px solid ${hexToRgba(c.gold, activeFaq === i ? 0.3 : 0.1)}`,
                  overflow: 'hidden',
                  transition: 'border-color 0.3s ease',
                }}
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  style={{
                    width: '100%',
                    padding: isMobile ? '1.3rem' : '1.5rem 2rem',
                    background: 'transparent',
                    border: 'none',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '1rem',
                    textAlign: 'left',
                    cursor: 'pointer',
                  }}
                >
                  <span style={{
                    fontFamily: '"Inter", sans-serif',
                    fontSize: isMobile ? '0.95rem' : '1.05rem',
                    fontWeight: 500,
                    color: activeFaq === i ? c.gold : c.pearl,
                    transition: 'color 0.3s ease',
                  }}>
                    {faq.q}
                  </span>
                  <span style={{
                    fontSize: '1.5rem',
                    color: c.gold,
                    transform: activeFaq === i ? 'rotate(45deg)' : 'rotate(0)',
                    transition: 'transform 0.3s ease',
                    flexShrink: 0,
                    fontWeight: 300,
                  }}>
                    +
                  </span>
                </button>
                <div style={{
                  maxHeight: activeFaq === i ? '300px' : 0,
                  overflow: 'hidden',
                  transition: 'max-height 0.4s ease',
                }}>
                  <p style={{
                    padding: isMobile ? '0 1.3rem 1.3rem' : '0 2rem 1.5rem',
                    margin: 0,
                    fontSize: '0.95rem',
                    lineHeight: 1.8,
                    color: hexToRgba(c.pearlSoft, 0.7),
                  }}>
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APPLY SECTION */}
      <section
        id="apply"
        data-animate
        className="section-container section-gold"
        style={{
          ...sectionStyle(visibleSections.has('apply')),
          paddingTop: isMobile ? '5rem' : '8rem',
          paddingBottom: isMobile ? '5rem' : '8rem',
        }}
      >
        <div style={{
          maxWidth: '1100px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
          gap: isMobile ? '3rem' : '5rem',
          alignItems: 'center',
        }}>
          {/* Left Content */}
          <div style={{ textAlign: isMobile ? 'center' : 'left' }}>
            <div style={{
              fontSize: '0.7rem',
              fontWeight: 600,
              letterSpacing: '0.3em',
              color: c.gold,
              marginBottom: '1rem',
            }}>
              {t.apply.overline}
            </div>
            <h2 style={{
              fontFamily: '"Playfair Display", serif',
              fontSize: isMobile ? '2.5rem' : '3.5rem',
              fontWeight: 500,
              margin: 0,
              lineHeight: 1.1,
            }}>
              <span style={{ display: 'block', color: c.pearl }}>{t.apply.title1}</span>
              <span style={{
                display: 'block',
                fontStyle: 'italic',
                background: `linear-gradient(135deg, ${c.goldLight}, ${c.gold})`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>{t.apply.title2}</span>
            </h2>
            <p style={{
              marginTop: '1.5rem',
              fontSize: '1.1rem',
              lineHeight: 1.8,
              color: hexToRgba(c.pearlSoft, 0.7),
              maxWidth: isMobile ? '100%' : '400px',
            }}>
              {t.apply.subtitle}
            </p>

            {/* Guarantee */}
            <div style={{
              marginTop: '2rem',
              padding: '1.2rem 1.5rem',
              background: hexToRgba(c.gold, 0.1),
              borderRadius: '8px',
              border: `1px solid ${hexToRgba(c.gold, 0.2)}`,
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.8rem',
            }}>
              <span style={{ fontSize: '1.3rem' }}>✓</span>
              <span style={{
                fontSize: '0.9rem',
                fontWeight: 500,
                color: c.goldLight,
              }}>
                {t.apply.guarantee}
              </span>
            </div>
          </div>

          {/* Form */}
          <div style={{
            background: hexToRgba(c.darkAlt, 0.9),
            borderRadius: '16px',
            border: `1px solid ${hexToRgba(c.gold, 0.2)}`,
            padding: isMobile ? '2rem' : '3rem',
            position: 'relative',
            overflow: 'hidden',
          }}>
            {/* Success Overlay */}
            <div style={{
              position: 'absolute',
              inset: 0,
              background: c.dark,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '1.5rem',
              opacity: formSubmitted ? 1 : 0,
              pointerEvents: formSubmitted ? 'auto' : 'none',
              transition: 'opacity 0.5s ease',
              zIndex: 10,
              borderRadius: '14px',
            }}>
              <div style={{
                width: 80,
                height: 80,
                borderRadius: '50%',
                background: `linear-gradient(135deg, ${c.gold}, ${c.goldDark})`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '2rem',
                color: c.darker,
              }}>
                ✓
              </div>
              <div style={{
                fontFamily: '"Playfair Display", serif',
                fontSize: '1.3rem',
                fontWeight: 600,
                color: c.gold,
              }}>
                {t.apply.form.success}
              </div>
              <p style={{
                fontSize: '0.9rem',
                color: hexToRgba(c.pearlSoft, 0.7),
              }}>
                {t.apply.form.successMsg}
              </p>
            </div>

            <form onSubmit={handleFormSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {[
                { label: t.apply.form.name, placeholder: t.apply.form.namePlaceholder, key: 'name' as const },
                { label: t.apply.form.handle, placeholder: t.apply.form.handlePlaceholder, key: 'handle' as const },
                { label: t.apply.form.platform, placeholder: t.apply.form.platformPlaceholder, key: 'platform' as const },
                { label: t.apply.form.following, placeholder: t.apply.form.followingPlaceholder, key: 'following' as const },
                { label: t.apply.form.contact, placeholder: t.apply.form.contactPlaceholder, key: 'contact' as const },
              ].map((field) => (
                <div key={field.key}>
                  <label style={{
                    display: 'block',
                    fontSize: '0.7rem',
                    fontWeight: 600,
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: c.gold,
                    marginBottom: '0.6rem',
                  }}>{field.label}</label>
                  <input
                    type="text"
                    placeholder={field.placeholder}
                    value={formData[field.key]}
                    onChange={(e) => setFormData({ ...formData, [field.key]: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '1rem',
                      background: hexToRgba(c.dark, 0.5),
                      border: `1px solid ${hexToRgba(c.gold, 0.2)}`,
                      borderRadius: '8px',
                      color: c.pearl,
                      fontSize: '1rem',
                      outline: 'none',
                      transition: 'border-color 0.3s ease',
                      boxSizing: 'border-box',
                    }}
                    onFocus={(e) => e.currentTarget.style.borderColor = c.gold}
                    onBlur={(e) => e.currentTarget.style.borderColor = hexToRgba(c.gold, 0.2)}
                  />
                </div>
              ))}

              <button
                type="submit"
                style={{
                  marginTop: '0.5rem',
                  padding: '1.2rem 2rem',
                  background: `linear-gradient(135deg, ${c.gold} 0%, ${c.goldDark} 100%)`,
                  color: c.darker,
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: '0.9rem',
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: `0 10px 40px ${hexToRgba(c.gold, 0.3)}`,
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = `0 15px 50px ${hexToRgba(c.gold, 0.4)}`;
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = `0 10px 40px ${hexToRgba(c.gold, 0.3)}`;
                }}
              >
                {t.apply.form.submit}
              </button>

              <p style={{
                fontSize: '0.65rem',
                fontWeight: 500,
                color: hexToRgba(c.pearlSoft, 0.45),
                letterSpacing: '0.1em',
                textAlign: 'center',
              }}>
                ★ {t.apply.form.confidential} ★ {t.apply.form.response} ★
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{
        padding: isMobile ? '3rem 1.5rem' : '4rem 5rem',
        borderTop: `1px solid ${hexToRgba(c.gold, 0.1)}`,
        background: c.darker,
      }}>
        <div style={{
          maxWidth: '1100px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '2rem',
        }}>
          <div style={{ textAlign: isMobile ? 'center' : 'left' }}>
            <div style={{
              fontFamily: '"Playfair Display", serif',
              fontSize: '1.8rem',
              fontWeight: 600,
              letterSpacing: '0.15em',
              background: `linear-gradient(135deg, ${c.goldLight}, ${c.gold})`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              marginBottom: '0.5rem',
            }}>
              AGENCIA LUXOR
            </div>
            <div style={{
              fontSize: '0.75rem',
              color: hexToRgba(c.pearlSoft, 0.5),
            }}>
              {t.footer.tagline}
            </div>
          </div>

          <div style={{
            display: 'flex',
            gap: isMobile ? '1.5rem' : '2.5rem',
          }}>
            {['Telegram', 'Twitter', 'Instagram', 'Email'].map(link => (
              <a
                key={link}
                href="#"
                style={{
                  fontSize: '0.75rem',
                  fontWeight: 500,
                  color: hexToRgba(c.pearlSoft, 0.5),
                  textDecoration: 'none',
                  transition: 'color 0.3s ease',
                }}
                onMouseOver={(e) => e.currentTarget.style.color = c.gold}
                onMouseOut={(e) => e.currentTarget.style.color = hexToRgba(c.pearlSoft, 0.5)}
              >
                {link}
              </a>
            ))}
          </div>

          <div style={{
            fontSize: '0.7rem',
            color: hexToRgba(c.pearlSoft, 0.4),
          }}>
            © 2025 Luxor. {t.footer.rights}.
          </div>
        </div>

        <div style={{
          textAlign: 'center',
          marginTop: '2rem',
          paddingTop: '2rem',
          borderTop: `1px solid ${hexToRgba(c.gold, 0.08)}`,
        }}>
          <span style={{
            fontSize: '0.7rem',
            fontWeight: 700,
            color: c.gold,
            letterSpacing: '0.15em',
          }}>
            18+ ONLY
          </span>
        </div>
      </footer>

      {/* Floating CTA Button */}
      <a
        href="#apply"
        style={{
          position: 'fixed',
          bottom: isMobile ? '1.5rem' : '2rem',
          right: isMobile ? '1.5rem' : '2rem',
          width: isMobile ? 55 : 60,
          height: isMobile ? 55 : 60,
          borderRadius: '50%',
          background: `linear-gradient(135deg, ${c.gold}, ${c.goldDark})`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textDecoration: 'none',
          boxShadow: `0 10px 40px ${hexToRgba(c.gold, 0.4)}`,
          zIndex: 90,
          transition: 'all 0.3s ease',
          animation: 'borderGlow 3s ease-in-out infinite',
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.transform = 'scale(1.1)';
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
        }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={c.darker} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 2L11 13" />
          <path d="M22 2L15 22L11 13L2 9L22 2Z" />
        </svg>
      </a>
    </div>
  );
}
