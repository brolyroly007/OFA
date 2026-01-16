'use client';

import React, { useState, useEffect } from 'react';

// Translations
const translations = {
  es: {
    nav: {
      services: 'Servicios',
      investment: 'Inversión',
      apply: 'Aplicar',
    },
    hero: {
      overline: 'GESTIÓN ELITE DE CREADORAS',
      title1: 'Donde',
      title2: 'las leyendas',
      title3: 'se crean.',
      subtitle: 'No gestionamos creadoras. Arquitectamos imperios. Para las pocas ambiciosas listas para dominar, no solo participar.',
      cta: 'Comienza Tu Ascenso',
      spots: 'Solo 3 lugares disponibles',
      generated: 'Generados en 2024',
    },
    stats: {
      generated: 'Generados',
      creators: 'Creadoras',
      retention: 'Retención',
    },
    services: {
      overline: 'LO QUE HACEMOS',
      title: 'Nuestro arte.',
      subtitle: 'Cuatro pilares de excelencia. Una búsqueda implacable de grandeza.',
      items: [
        { id: '01', name: 'Arquitectura de Marca', desc: 'Construimos tu identidad digital en un imperio irresistible. Posicionamiento estratégico que captura atención y convierte admiradores en fans devotos.' },
        { id: '02', name: 'Alquimia de Ingresos', desc: 'Transformamos engagement en riqueza. Nuestros sistemas probados multiplican tus ingresos a través de monetización y estrategias de pricing premium.' },
        { id: '03', name: 'Dirección de Contenido', desc: 'Calidad cinematográfica con intención estratégica. Dirigimos contenido que detiene scrolls, despierta deseo y construye conexiones duraderas.' },
        { id: '04', name: 'Ingeniería de Crecimiento', desc: 'Dominio algorítmico y psicología humana. Diseñamos momentos virales y crecimiento sostenible en cada plataforma que importa.' },
      ],
    },
    investment: {
      overline: 'MODELO DE PARTNERSHIP',
      title1: 'Prosperamos',
      title2: 'juntas.',
      subtitle: 'Cero costos iniciales. Cero tarifas ocultas. Nuestro éxito está directamente ligado al tuyo — la máxima alineación de intereses.',
      plans: [
        { name: 'Ascendant', rate: '35%', desc: 'Gestión completa para estrellas en ascenso' },
        { name: 'Sovereign', rate: '30%', desc: 'Para creadoras establecidas ($15k+/mes)' },
        { name: 'Dynasty', rate: '25%', desc: 'Tier elite para top performers ($50k+)' },
      ],
    },
    testimonials: {
      overline: 'HISTORIAS DE ÉXITO',
      items: [
        { quote: "No solo hicieron crecer mi cuenta. Transformaron mi vida entera. De $3k a $89k mensuales en menos de 6 meses.", author: "TOP 0.1% CREADORA" },
        { quote: "El equipo de Luxor entiende exactamente lo que funciona. Mi engagement se triplicó en el primer mes.", author: "INFLUENCER VERIFICADA" },
        { quote: "Finalmente encontré un equipo que ve el potencial que yo veía. Los resultados hablan por sí solos.", author: "CONTENT CREATOR" },
      ],
    },
    faq: {
      overline: 'PREGUNTAS FRECUENTES',
      title: 'Todo lo que necesitas saber.',
      items: [
        { q: "¿Cuánto tiempo toma ver resultados?", a: "La mayoría de nuestras creadoras ven mejoras significativas en las primeras 2-4 semanas. Resultados transformadores típicamente ocurren entre el mes 2 y 3." },
        { q: "¿Qué plataformas manejan?", a: "Nos especializamos en todas las plataformas principales: OnlyFans, Fansly, Instagram, TikTok, Twitter/X, y más. Creamos estrategias cross-platform personalizadas." },
        { q: "¿Cómo funciona el modelo de comisión?", a: "Sin costos iniciales. Solo ganamos cuando tú ganas. Nuestras comisiones van del 25% al 35% dependiendo del tier de servicio que elijas." },
        { q: "¿Qué hace diferente a Luxor?", a: "No somos otra agencia genérica. Somos arquitectos de imperios. Cada estrategia es personalizada, cada decisión está basada en datos, y tu éxito es nuestra obsesión." },
      ],
    },
    apply: {
      overline: 'COMIENZA TU ASCENSO',
      title1: '¿Lista para',
      title2: 'trascender?',
      subtitle: 'Aceptamos menos del 5% de aplicantes. Si estás seria sobre construir un legado, no solo un ingreso, deberíamos hablar.',
      stats: [
        { value: '200+', label: 'Creadoras activas' },
        { value: '98%', label: 'Tasa de retención' },
        { value: '3.2x', label: 'Crecimiento prom.' },
      ],
      form: {
        handle: 'Tu handle',
        handlePlaceholder: '@tuhandle',
        platform: 'Plataforma',
        platformPlaceholder: 'Instagram, TikTok, etc.',
        following: 'Seguidores actuales',
        followingPlaceholder: 'ej. 50k',
        contact: 'Contacto',
        contactPlaceholder: 'Telegram o email',
        submit: 'Enviar Aplicación',
        success: 'APLICACIÓN ENVIADA',
        successMsg: 'Te contactaremos en las próximas 24 horas',
        confidential: '100% confidencial',
        response: 'Respuesta en 24h',
      },
    },
    footer: {
      tagline: 'Donde las leyendas son creadas',
    },
  },
  en: {
    nav: {
      services: 'Services',
      investment: 'Investment',
      apply: 'Apply',
    },
    hero: {
      overline: 'ELITE CREATOR MANAGEMENT',
      title1: 'Where',
      title2: 'legends',
      title3: 'are made.',
      subtitle: "We don't manage creators. We architect empires. For the ambitious few ready to dominate, not just participate.",
      cta: 'Begin Your Ascent',
      spots: 'Only 3 spots remaining',
      generated: 'Generated in 2024',
    },
    stats: {
      generated: 'Generated',
      creators: 'Creators',
      retention: 'Retention',
    },
    services: {
      overline: 'WHAT WE DO',
      title: 'Our craft.',
      subtitle: 'Four pillars of excellence. One relentless pursuit of greatness.',
      items: [
        { id: '01', name: 'Brand Architecture', desc: 'We craft your digital identity into an irresistible empire. Strategic positioning that commands attention and converts admirers into devoted fans.' },
        { id: '02', name: 'Revenue Alchemy', desc: 'Transform engagement into wealth. Our proven systems multiply your earnings through psychology-driven monetization and premium pricing strategies.' },
        { id: '03', name: 'Content Direction', desc: 'Cinematic quality meets strategic intent. We direct content that stops scrolls, sparks desire, and builds lasting connections.' },
        { id: '04', name: 'Growth Engineering', desc: 'Algorithmic mastery meets human psychology. We engineer viral moments and sustainable growth across every platform that matters.' },
      ],
    },
    investment: {
      overline: 'PARTNERSHIP MODEL',
      title1: 'We prosper',
      title2: 'together.',
      subtitle: 'Zero upfront costs. Zero hidden fees. Our success is directly tied to yours — the ultimate alignment of interests.',
      plans: [
        { name: 'Ascendant', rate: '35%', desc: 'Full-service management for rising stars' },
        { name: 'Sovereign', rate: '30%', desc: 'For established creators ($15k+/mo)' },
        { name: 'Dynasty', rate: '25%', desc: 'Elite tier for top performers ($50k+)' },
      ],
    },
    testimonials: {
      overline: 'SUCCESS STORIES',
      items: [
        { quote: "They didn't just grow my account. They transformed my entire life. From $3k to $89k monthly in under 6 months.", author: "TOP 0.1% CREATOR" },
        { quote: "The Luxor team understands exactly what works. My engagement tripled in the first month.", author: "VERIFIED INFLUENCER" },
        { quote: "Finally found a team that sees the potential I saw. The results speak for themselves.", author: "CONTENT CREATOR" },
      ],
    },
    faq: {
      overline: 'FREQUENTLY ASKED QUESTIONS',
      title: 'Everything you need to know.',
      items: [
        { q: "How long does it take to see results?", a: "Most of our creators see significant improvements in the first 2-4 weeks. Transformative results typically occur between month 2 and 3." },
        { q: "What platforms do you manage?", a: "We specialize in all major platforms: OnlyFans, Fansly, Instagram, TikTok, Twitter/X, and more. We create personalized cross-platform strategies." },
        { q: "How does the commission model work?", a: "No upfront costs. We only earn when you earn. Our commissions range from 25% to 35% depending on the service tier you choose." },
        { q: "What makes Luxor different?", a: "We're not another generic agency. We're empire architects. Every strategy is personalized, every decision is data-driven, and your success is our obsession." },
      ],
    },
    apply: {
      overline: 'BEGIN YOUR ASCENT',
      title1: 'Ready to',
      title2: 'transcend?',
      subtitle: "We accept fewer than 5% of applicants. If you're serious about building a legacy, not just an income, we should talk.",
      stats: [
        { value: '200+', label: 'Active creators' },
        { value: '98%', label: 'Retention rate' },
        { value: '3.2x', label: 'Avg growth' },
      ],
      form: {
        handle: 'Social handle',
        handlePlaceholder: '@yourhandle',
        platform: 'Platform',
        platformPlaceholder: 'Instagram, TikTok, etc.',
        following: 'Current following',
        followingPlaceholder: 'e.g. 50k',
        contact: 'Contact',
        contactPlaceholder: 'Telegram or email',
        submit: 'Submit Application',
        success: 'APPLICATION SENT',
        successMsg: "We'll contact you within 24 hours",
        confidential: '100% confidential',
        response: 'Response in 24h',
      },
    },
    footer: {
      tagline: 'Where legends are made',
    },
  },
};

export default function LuxorAgencyPremium() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [activeService, setActiveService] = useState<string | null>(null);
  const [scrollY, setScrollY] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [activePlan, setActivePlan] = useState<number | null>(null);
  const [focusedInput, setFocusedInput] = useState<string | null>(null);
  const [cursorVariant, setCursorVariant] = useState('default');
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({ handle: '', platform: '', following: '', contact: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  const [isMobile, setIsMobile] = useState(false);
  const [lang, setLang] = useState<'es' | 'en'>('es');

  const t = translations[lang];

  useEffect(() => {
    // Detect language from browser
    const browserLang = navigator.language.toLowerCase();
    if (browserLang.startsWith('es')) {
      setLang('es');
    } else {
      setLang('en');
    }

    // Check mobile
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);

    // Loading sequence
    const timer1 = setTimeout(() => setLoaded(true), 500);
    const timer2 = setTimeout(() => setShowContent(true), 1500);

    // Scroll handler
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);

    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.1, rootMargin: '-50px' }
    );

    setTimeout(() => {
      document.querySelectorAll('section[id]').forEach((section) => {
        observer.observe(section);
      });
    }, 100);

    const testimonialInterval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % 3);
    }, 5000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', checkMobile);
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearInterval(testimonialInterval);
      observer.disconnect();
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isMobile) {
      setMousePos({ x: e.clientX, y: e.clientY });
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.handle && formData.platform && formData.contact) {
      setFormSubmitted(true);
      setTimeout(() => {
        setFormData({ handle: '', platform: '', following: '', contact: '' });
      }, 3000);
    }
  };

  const serviceIcons = ['◇', '◈', '◆', '◊'];

  const hexToRgba = (hex: string, alpha: number) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  };

  // NEW SENSUAL COLOR PALETTE - Rose Gold, Burgundy, Warm tones
  const c = {
    // Backgrounds
    dark: '#1a1216',        // Warm dark burgundy-black
    darker: '#120c0f',      // Deeper background
    darkAlt: '#241a1e',     // Card backgrounds

    // Primary accent - Rose Gold
    rose: '#e8b4b8',        // Light rose
    roseGold: '#c9a0a0',    // Rose gold
    roseDark: '#a67c7c',    // Darker rose

    // Secondary - Burgundy/Wine
    burgundy: '#8b3a4c',    // Rich burgundy
    wine: '#722f3e',        // Deep wine

    // Text
    cream: '#faf5f5',       // Warm cream
    creamSoft: '#e8dede',   // Softer cream

    // Accent
    gold: '#d4a574',        // Warm gold
    coral: '#e89b8c',       // Coral accent
  };

  const cursorSize = cursorVariant === 'hover' ? 100 : cursorVariant === 'text' ? 150 : 20;

  // Removed scroll animations - sections are always visible now
  const sectionStyle = (_id: string): React.CSSProperties => ({
    opacity: 1,
    transform: 'translateY(0)',
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
          @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500&family=Montserrat:wght@300;400;500;600&display=swap');

          @keyframes logoReveal {
            0% { opacity: 0; transform: translateY(30px); }
            50% { opacity: 1; transform: translateY(0); }
            100% { opacity: 1; transform: translateY(0); }
          }

          @keyframes lineExpand {
            0% { transform: scaleX(0); }
            50% { transform: scaleX(1); }
            100% { transform: scaleX(1); }
          }

          @keyframes pulse {
            0%, 100% { opacity: 0.3; }
            50% { opacity: 1; }
          }

          @keyframes shimmer {
            0% { background-position: -200% center; }
            100% { background-position: 200% center; }
          }
        `}</style>

        <div style={{
          fontFamily: '"Cormorant Garamond", serif',
          fontSize: 'clamp(3rem, 10vw, 6rem)',
          fontWeight: 300,
          letterSpacing: '0.4em',
          background: `linear-gradient(135deg, ${c.rose} 0%, ${c.roseGold} 50%, ${c.coral} 100%)`,
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          animation: loaded ? 'logoReveal 1s ease forwards' : 'none',
          opacity: 0,
        }}>
          LUXOR
        </div>

        <div style={{
          width: 200,
          height: 1,
          background: `linear-gradient(90deg, transparent, ${c.rose}, transparent)`,
          animation: loaded ? 'lineExpand 1s ease 0.3s forwards' : 'none',
          transform: 'scaleX(0)',
        }} />

        <div style={{
          fontFamily: '"Montserrat", sans-serif',
          fontSize: '0.6rem',
          fontWeight: 400,
          letterSpacing: '0.4em',
          color: hexToRgba(c.rose, 0.6),
          animation: 'pulse 1.5s ease infinite',
        }}>
          {lang === 'es' ? 'CARGANDO EXCELENCIA' : 'LOADING EXCELLENCE'}
        </div>
      </div>
    );
  }

  return (
    <div
      onMouseMove={handleMouseMove}
      style={{
        minHeight: '100vh',
        background: `linear-gradient(180deg, ${c.darker} 0%, ${c.dark} 50%, ${c.darker} 100%)`,
        color: c.cream,
        fontFamily: '"Cormorant Garamond", serif',
        cursor: isMobile ? 'auto' : 'none',
        overflowX: 'hidden',
        position: 'relative',
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500&family=Montserrat:wght@300;400;500;600&display=swap');

        * {
          cursor: ${isMobile ? 'auto' : 'none'} !important;
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        ::selection {
          background: ${hexToRgba(c.rose, 0.4)};
          color: ${c.cream};
        }

        input::placeholder, textarea::placeholder {
          color: ${hexToRgba(c.rose, 0.4)};
          font-style: italic;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(2deg); }
        }

        @keyframes pulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }

        @keyframes slideUp {
          from { opacity: 0; transform: translateY(60px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-33.33%); }
        }

        @keyframes borderGlow {
          0%, 100% { box-shadow: 0 0 20px ${hexToRgba(c.rose, 0.2)}; }
          50% { box-shadow: 0 0 40px ${hexToRgba(c.rose, 0.4)}; }
        }

        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .animate-in {
          animation: slideUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .stagger-1 { animation-delay: 0.1s; opacity: 0; }
        .stagger-2 { animation-delay: 0.2s; opacity: 0; }
        .stagger-3 { animation-delay: 0.3s; opacity: 0; }
        .stagger-4 { animation-delay: 0.4s; opacity: 0; }
        .stagger-5 { animation-delay: 0.5s; opacity: 0; }
        .stagger-6 { animation-delay: 0.6s; opacity: 0; }

        @media (max-width: 768px) {
          .hide-mobile { display: none !important; }
          .mobile-stack { flex-direction: column !important; }
        }

        ::-webkit-scrollbar {
          width: 8px;
        }
        ::-webkit-scrollbar-track {
          background: ${c.darker};
        }
        ::-webkit-scrollbar-thumb {
          background: ${hexToRgba(c.rose, 0.3)};
          border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: ${hexToRgba(c.rose, 0.5)};
        }
      `}</style>

      {/* Custom Cursor */}
      {!isMobile && (
        <>
          <div style={{
            position: 'fixed',
            left: mousePos.x,
            top: mousePos.y,
            width: cursorSize,
            height: cursorSize,
            borderRadius: '50%',
            border: `1px solid ${hexToRgba(c.rose, cursorVariant === 'default' ? 0.6 : 0.3)}`,
            background: cursorVariant !== 'default'
              ? `radial-gradient(circle, ${hexToRgba(c.rose, 0.15)} 0%, transparent 70%)`
              : 'transparent',
            pointerEvents: 'none',
            zIndex: 9999,
            transition: 'width 0.4s cubic-bezier(0.16, 1, 0.3, 1), height 0.4s cubic-bezier(0.16, 1, 0.3, 1), background 0.3s ease',
            transform: 'translate(-50%, -50%)',
            mixBlendMode: cursorVariant === 'text' ? 'difference' : 'normal',
          }} />
          <div style={{
            position: 'fixed',
            left: mousePos.x,
            top: mousePos.y,
            width: 6,
            height: 6,
            borderRadius: '50%',
            background: c.rose,
            pointerEvents: 'none',
            zIndex: 10000,
            transform: 'translate(-50%, -50%)',
          }} />
        </>
      )}

      {/* Ambient Background with warm gradients */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: `
          radial-gradient(ellipse 80% 50% at 20% 20%, ${hexToRgba(c.burgundy, 0.15)} 0%, transparent 50%),
          radial-gradient(ellipse 60% 40% at 80% 80%, ${hexToRgba(c.rose, 0.08)} 0%, transparent 50%),
          radial-gradient(ellipse 100% 100% at 50% 0%, ${hexToRgba(c.wine, 0.1)} 0%, transparent 40%)
        `,
        pointerEvents: 'none',
      }} />

      {/* Decorative Grid */}
      <div className="hide-mobile" style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: `
          linear-gradient(${hexToRgba(c.rose, 0.03)} 1px, transparent 1px),
          linear-gradient(90deg, ${hexToRgba(c.rose, 0.03)} 1px, transparent 1px)
        `,
        backgroundSize: '100px 100px',
        pointerEvents: 'none',
        opacity: 0.5,
      }} />

      {/* Floating Geometric Elements */}
      <div className="hide-mobile" style={{
        position: 'fixed',
        top: '15%',
        right: '10%',
        width: 300,
        height: 300,
        border: `1px solid ${hexToRgba(c.rose, 0.1)}`,
        transform: `rotate(45deg) translateY(${scrollY * 0.05}px)`,
        pointerEvents: 'none',
        animation: 'float 20s ease-in-out infinite',
      }} />
      <div className="hide-mobile" style={{
        position: 'fixed',
        bottom: '20%',
        left: '5%',
        width: 200,
        height: 200,
        border: `1px solid ${hexToRgba(c.rose, 0.08)}`,
        borderRadius: '50%',
        transform: `translateY(${scrollY * -0.03}px)`,
        pointerEvents: 'none',
        animation: 'float 15s ease-in-out infinite reverse',
      }} />

      {/* Navigation - IMPROVED VISIBILITY */}
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        padding: isMobile ? '1.5rem' : '2rem 4rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        zIndex: 100,
        background: `linear-gradient(180deg, ${c.darker} 0%, ${hexToRgba(c.darker, 0.95)} 50%, ${hexToRgba(c.darker, 0.8)} 80%, transparent 100%)`,
        backdropFilter: 'blur(20px)',
      }}>
        <div
          onMouseEnter={() => setCursorVariant('hover')}
          onMouseLeave={() => setCursorVariant('default')}
          className="animate-in stagger-1"
          style={{
            fontFamily: '"Cormorant Garamond", serif',
            fontSize: isMobile ? '1.6rem' : '2rem',
            fontWeight: 300,
            letterSpacing: '0.3em',
            background: `linear-gradient(135deg, ${c.rose} 0%, ${c.coral} 100%)`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          LUXOR
        </div>

        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: isMobile ? '1rem' : '3rem',
        }}>
          {/* Language Selector */}
          <div style={{
            display: 'flex',
            gap: '0.5rem',
            fontFamily: '"Montserrat", sans-serif',
            fontSize: '0.6rem',
          }}>
            <button
              onClick={() => setLang('es')}
              onMouseEnter={() => setCursorVariant('hover')}
              onMouseLeave={() => setCursorVariant('default')}
              style={{
                background: lang === 'es' ? hexToRgba(c.rose, 0.2) : 'transparent',
                border: `1px solid ${hexToRgba(c.rose, lang === 'es' ? 0.5 : 0.2)}`,
                color: lang === 'es' ? c.rose : hexToRgba(c.cream, 0.5),
                padding: '0.4rem 0.6rem',
                borderRadius: '2px',
                transition: 'all 0.3s ease',
                fontWeight: 500,
              }}
            >
              ES
            </button>
            <button
              onClick={() => setLang('en')}
              onMouseEnter={() => setCursorVariant('hover')}
              onMouseLeave={() => setCursorVariant('default')}
              style={{
                background: lang === 'en' ? hexToRgba(c.rose, 0.2) : 'transparent',
                border: `1px solid ${hexToRgba(c.rose, lang === 'en' ? 0.5 : 0.2)}`,
                color: lang === 'en' ? c.rose : hexToRgba(c.cream, 0.5),
                padding: '0.4rem 0.6rem',
                borderRadius: '2px',
                transition: 'all 0.3s ease',
                fontWeight: 500,
              }}
            >
              EN
            </button>
          </div>

          {/* Nav Links */}
          <div style={{
            display: 'flex',
            gap: isMobile ? '1.5rem' : '3rem',
            fontFamily: '"Montserrat", sans-serif',
            fontSize: isMobile ? '0.6rem' : '0.7rem',
            fontWeight: 500,
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
          }}>
            {[
              { key: 'services', label: t.nav.services },
              { key: 'investment', label: t.nav.investment },
              { key: 'apply', label: t.nav.apply },
            ].map((item, i) => (
              <a
                key={item.key}
                href={`#${item.key}`}
                onMouseEnter={() => setCursorVariant('hover')}
                onMouseLeave={() => setCursorVariant('default')}
                className={`animate-in stagger-${i + 2}`}
                style={{
                  color: c.cream,
                  textDecoration: 'none',
                  transition: 'all 0.4s ease',
                  position: 'relative',
                  padding: '0.5rem 0',
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.color = c.rose;
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.color = c.cream;
                }}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        padding: isMobile ? '7rem 1.5rem 4rem' : '0 4rem',
        position: 'relative',
      }}>
        <div style={{
          maxWidth: '900px',
          position: 'relative',
          zIndex: 2,
          width: '100%',
        }}>
          <div
            className="animate-in stagger-1"
            style={{
              fontFamily: '"Montserrat", sans-serif',
              fontSize: isMobile ? '0.5rem' : '0.6rem',
              fontWeight: 500,
              letterSpacing: '0.5em',
              color: c.rose,
              marginBottom: isMobile ? '2rem' : '3rem',
              display: 'flex',
              alignItems: 'center',
              gap: '1.5rem',
            }}
          >
            <span style={{
              width: isMobile ? 40 : 60,
              height: 1,
              background: `linear-gradient(90deg, ${c.rose}, transparent)`,
              display: 'block',
            }} />
            {t.hero.overline}
          </div>

          <h1 style={{
            fontSize: isMobile ? 'clamp(3rem, 15vw, 5rem)' : 'clamp(4rem, 12vw, 9rem)',
            fontWeight: 300,
            lineHeight: 0.9,
            margin: 0,
          }}>
            <span
              className="animate-in stagger-2"
              style={{
                display: 'block',
                fontStyle: 'italic',
                color: c.cream,
              }}
            >{t.hero.title1}</span>
            <span
              className="animate-in stagger-3"
              style={{
                display: 'block',
                marginLeft: isMobile ? '10%' : '15%',
                fontWeight: 400,
                background: `linear-gradient(135deg, ${c.rose} 0%, ${c.coral} 50%, ${c.gold} 100%)`,
                backgroundSize: '200% 200%',
                animation: 'gradientMove 5s ease infinite',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >{t.hero.title2}</span>
            <span
              className="animate-in stagger-4"
              style={{
                display: 'block',
                marginLeft: isMobile ? '5%' : '8%',
                fontStyle: 'italic',
                color: hexToRgba(c.cream, 0.7),
              }}
            >{t.hero.title3}</span>
          </h1>

          <p
            className="animate-in stagger-5"
            style={{
              marginTop: isMobile ? '3rem' : '5rem',
              maxWidth: '450px',
              fontSize: isMobile ? '1rem' : '1.2rem',
              lineHeight: 2,
              color: hexToRgba(c.creamSoft, 0.7),
              fontWeight: 300,
            }}
          >
            {t.hero.subtitle}
          </p>

          <div
            className="animate-in stagger-6 mobile-stack"
            style={{
              marginTop: isMobile ? '2.5rem' : '4rem',
              display: 'flex',
              alignItems: 'center',
              gap: '2rem',
            }}
          >
            <a
              href="#apply"
              onMouseEnter={() => setCursorVariant('hover')}
              onMouseLeave={() => setCursorVariant('default')}
              style={{
                padding: isMobile ? '1.2rem 2.5rem' : '1.5rem 3.5rem',
                background: `linear-gradient(135deg, ${c.rose} 0%, ${c.roseDark} 100%)`,
                color: c.darker,
                textDecoration: 'none',
                fontSize: '0.7rem',
                fontFamily: '"Montserrat", sans-serif',
                fontWeight: 600,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                border: 'none',
                position: 'relative',
                overflow: 'hidden',
                transition: 'all 0.4s ease',
                display: 'inline-block',
                boxShadow: `0 10px 40px ${hexToRgba(c.rose, 0.3)}`,
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = `0 20px 60px ${hexToRgba(c.rose, 0.4)}`;
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = `0 10px 40px ${hexToRgba(c.rose, 0.3)}`;
              }}
            >
              {t.hero.cta}
            </a>
            <span style={{
              fontFamily: '"Montserrat", sans-serif',
              fontSize: '0.55rem',
              color: hexToRgba(c.rose, 0.6),
              letterSpacing: '0.1em',
            }}>
              {t.hero.spots}
            </span>
          </div>
        </div>

        {/* Hero Visual */}
        <div className="hide-mobile" style={{
          position: 'absolute',
          right: '-5%',
          top: '50%',
          transform: `translateY(-50%) rotate(${scrollY * 0.02}deg)`,
          width: '55vw',
          height: '55vw',
          maxWidth: 700,
          maxHeight: 700,
        }}>
          <svg viewBox="0 0 400 400" style={{ width: '100%', height: '100%' }}>
            <defs>
              <linearGradient id="roseGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor={c.rose} stopOpacity="0.3" />
                <stop offset="50%" stopColor={c.roseGold} stopOpacity="0.15" />
                <stop offset="100%" stopColor={c.burgundy} stopOpacity="0.05" />
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            <circle cx="200" cy="200" r="180" fill="none" stroke={c.rose} strokeWidth="0.3" strokeOpacity="0.2" />
            <circle cx="200" cy="200" r="170" fill="none" stroke={c.rose} strokeWidth="0.5" strokeOpacity="0.1" />
            <circle cx="200" cy="200" r="140" fill="none" stroke={c.rose} strokeWidth="0.3" strokeOpacity="0.15" strokeDasharray="4 8" />
            <circle cx="200" cy="200" r="100" fill="url(#roseGrad)" />
            <circle cx="200" cy="200" r="100" fill="none" stroke={c.rose} strokeWidth="0.5" strokeOpacity="0.3" />
            <polygon points="200,120 260,230 140,230" fill="none" stroke={c.rose} strokeWidth="0.5" strokeOpacity="0.4" />
            <polygon points="200,140 240,210 160,210" fill={hexToRgba(c.rose, 0.05)} stroke={c.rose} strokeWidth="0.3" strokeOpacity="0.2" />
            <ellipse cx="200" cy="175" rx="25" ry="12" fill="none" stroke={c.rose} strokeWidth="0.5" strokeOpacity="0.5" filter="url(#glow)" />
            <circle cx="200" cy="175" r="6" fill={c.rose} fillOpacity="0.3" />
            {[0, 45, 90, 135, 180, 225, 270, 315].map(angle => (
              <line
                key={angle}
                x1="200" y1="20" x2="200" y2="40"
                stroke={c.rose} strokeWidth="0.5" strokeOpacity="0.3"
                transform={`rotate(${angle} 200 200)`}
              />
            ))}
          </svg>

          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '30%',
            height: '30%',
            background: `radial-gradient(circle, ${hexToRgba(c.rose, 0.2)} 0%, transparent 70%)`,
            filter: 'blur(40px)',
            animation: 'pulse 4s ease-in-out infinite',
          }} />
        </div>

        {/* Stats floating */}
        <div className="hide-mobile" style={{
          position: 'absolute',
          bottom: '15%',
          right: '8%',
          textAlign: 'right',
        }}>
          <div style={{
            fontFamily: '"Cormorant Garamond", serif',
            fontSize: '5rem',
            fontWeight: 300,
            fontStyle: 'italic',
            lineHeight: 1,
            background: `linear-gradient(135deg, ${c.cream} 0%, ${c.rose} 100%)`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>$47M</div>
          <div style={{
            fontFamily: '"Montserrat", sans-serif',
            fontSize: '0.5rem',
            fontWeight: 500,
            letterSpacing: '0.3em',
            color: hexToRgba(c.rose, 0.7),
            textTransform: 'uppercase',
            marginTop: '0.5rem',
          }}>{t.hero.generated}</div>
        </div>

        {/* Scroll indicator */}
        <div className="hide-mobile" style={{
          position: 'absolute',
          bottom: '4rem',
          left: '4rem',
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
        }}>
          <div style={{
            width: 1,
            height: 60,
            background: `linear-gradient(180deg, ${c.rose}, transparent)`,
          }} />
          <span style={{
            fontFamily: '"Montserrat", sans-serif',
            fontSize: '0.5rem',
            fontWeight: 500,
            letterSpacing: '0.3em',
            color: hexToRgba(c.rose, 0.5),
            textTransform: 'uppercase',
            writingMode: 'vertical-rl',
          }}>Scroll</span>
        </div>
      </section>

      {/* Stats Bar - Mobile */}
      {isMobile && (
        <section style={{
          padding: '3rem 1.5rem',
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1rem',
          borderTop: `1px solid ${hexToRgba(c.rose, 0.15)}`,
          borderBottom: `1px solid ${hexToRgba(c.rose, 0.15)}`,
          background: hexToRgba(c.darkAlt, 0.5),
        }}>
          {[
            { value: '$47M', label: t.stats.generated },
            { value: '200+', label: t.stats.creators },
            { value: '98%', label: t.stats.retention },
          ].map((stat, i) => (
            <div key={i} style={{ textAlign: 'center' }}>
              <div style={{
                fontFamily: '"Cormorant Garamond", serif',
                fontSize: '1.8rem',
                fontWeight: 300,
                fontStyle: 'italic',
                color: c.rose,
              }}>{stat.value}</div>
              <div style={{
                fontFamily: '"Montserrat", sans-serif',
                fontSize: '0.45rem',
                fontWeight: 500,
                color: hexToRgba(c.cream, 0.5),
                letterSpacing: '0.1em',
                marginTop: '0.3rem',
              }}>{stat.label}</div>
            </div>
          ))}
        </section>
      )}

      {/* Marquee Section */}
      <section style={{
        padding: isMobile ? '4rem 0' : '6rem 0',
        borderTop: `1px solid ${hexToRgba(c.rose, 0.1)}`,
        borderBottom: `1px solid ${hexToRgba(c.rose, 0.1)}`,
        overflow: 'hidden',
        position: 'relative',
        background: hexToRgba(c.darkAlt, 0.3),
      }}>
        <div style={{
          display: 'flex',
          gap: isMobile ? '3rem' : '6rem',
          animation: 'marquee 30s linear infinite',
          whiteSpace: 'nowrap',
        }}>
          {[...Array(3)].map((_, i) => (
            <div key={i} style={{ display: 'flex', gap: isMobile ? '3rem' : '6rem' }}>
              {['Strategy', '\u2726', 'Growth', '\u2726', 'Revenue', '\u2726', 'Excellence', '\u2726', 'Legacy', '\u2726'].map((text, j) => (
                <span
                  key={j}
                  style={{
                    fontFamily: '"Cormorant Garamond", serif',
                    fontSize: text === '\u2726' ? '1.5rem' : (isMobile ? '2rem' : '3.5rem'),
                    fontWeight: 300,
                    letterSpacing: text === '\u2726' ? 0 : '0.15em',
                    color: text === '\u2726' ? c.rose : hexToRgba(c.cream, 0.15),
                  }}
                >
                  {text}
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        style={{
          padding: isMobile ? '6rem 1.5rem' : '12rem 4rem',
          position: 'relative',
          ...sectionStyle('services'),
        }}
      >
        <div style={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          justifyContent: 'space-between',
          alignItems: isMobile ? 'flex-start' : 'flex-start',
          marginBottom: isMobile ? '4rem' : '8rem',
          gap: isMobile ? '2rem' : '0',
        }}>
          <div>
            <div style={{
              fontFamily: '"Montserrat", sans-serif',
              fontSize: '0.55rem',
              fontWeight: 500,
              letterSpacing: '0.4em',
              color: c.rose,
              marginBottom: '2rem',
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
            }}>
              <span style={{ width: 40, height: 1, background: c.rose }} />
              {t.services.overline}
            </div>
            <h2 style={{
              fontSize: isMobile ? 'clamp(2.5rem, 10vw, 4rem)' : 'clamp(3rem, 8vw, 6rem)',
              fontWeight: 300,
              fontStyle: 'italic',
              margin: 0,
              lineHeight: 1,
              color: c.cream,
            }}>
              {t.services.title}
            </h2>
          </div>
          <p className="hide-mobile" style={{
            maxWidth: 350,
            fontSize: '1rem',
            lineHeight: 2,
            color: hexToRgba(c.creamSoft, 0.5),
            textAlign: 'right',
            paddingTop: '3rem',
            fontWeight: 300,
          }}>
            {t.services.subtitle.split('.')[0]}.<br />
            {t.services.subtitle.split('.')[1]}.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
          gap: '1px',
          background: hexToRgba(c.rose, 0.15),
        }}>
          {t.services.items.map((service, i) => (
            <div
              key={service.id}
              onMouseEnter={() => {
                setActiveService(service.id);
                setCursorVariant('text');
              }}
              onMouseLeave={() => {
                setActiveService(null);
                setCursorVariant('default');
              }}
              style={{
                background: c.dark,
                padding: isMobile ? '2.5rem' : '4rem',
                minHeight: isMobile ? 250 : 350,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative',
                overflow: 'hidden',
                transition: 'background 0.6s ease',
              }}
            >
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: `radial-gradient(circle at ${i % 2 === 0 ? '0% 100%' : '100% 100%'}, ${hexToRgba(c.rose, 0.1)} 0%, transparent 60%)`,
                opacity: activeService === service.id ? 1 : 0,
                transition: 'opacity 0.6s ease',
              }} />

              <div style={{ position: 'relative', zIndex: 1, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <span style={{
                  fontFamily: '"Montserrat", sans-serif',
                  fontSize: '0.6rem',
                  fontWeight: 500,
                  color: c.rose,
                  opacity: 0.5,
                }}>{service.id}</span>
                <span style={{
                  fontSize: '1.5rem',
                  color: activeService === service.id ? c.rose : hexToRgba(c.rose, 0.3),
                  transition: 'color 0.4s ease',
                }}>{serviceIcons[i]}</span>
              </div>

              <div style={{ position: 'relative', zIndex: 1 }}>
                <h3 style={{
                  fontSize: isMobile ? '1.5rem' : 'clamp(1.8rem, 4vw, 2.5rem)',
                  fontWeight: 400,
                  margin: '0 0 1.5rem 0',
                  fontStyle: 'italic',
                  transition: 'color 0.4s ease',
                  color: activeService === service.id ? c.rose : c.cream,
                }}>{service.name}</h3>
                <p style={{
                  fontSize: isMobile ? '0.9rem' : '1rem',
                  lineHeight: 1.9,
                  color: hexToRgba(c.creamSoft, 0.5),
                  maxWidth: 400,
                  fontWeight: 300,
                  transition: 'opacity 0.6s ease, transform 0.6s ease',
                  opacity: activeService === service.id || isMobile ? 1 : 0.7,
                  transform: activeService === service.id ? 'translateY(0)' : 'translateY(10px)',
                }}>{service.desc}</p>
              </div>

              <div className="hide-mobile" style={{
                position: 'absolute',
                top: '2rem',
                right: '2rem',
                width: 40,
                height: 40,
                border: `1px solid ${hexToRgba(c.rose, activeService === service.id ? 0.4 : 0.1)}`,
                transition: 'border-color 0.4s ease, transform 0.4s ease',
                transform: activeService === service.id ? 'rotate(45deg) scale(1.1)' : 'rotate(45deg)',
              }} />
            </div>
          ))}
        </div>
      </section>

      {/* Investment Section */}
      <section
        id="investment"
        style={{
          padding: isMobile ? '6rem 1.5rem' : '12rem 4rem',
          background: `linear-gradient(180deg, transparent 0%, ${hexToRgba(c.burgundy, 0.05)} 50%, transparent 100%)`,
          position: 'relative',
          ...sectionStyle('investment'),
        }}
      >
        <div className="hide-mobile" style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          fontFamily: '"Cormorant Garamond", serif',
          fontSize: 'clamp(15rem, 40vw, 35rem)',
          fontWeight: 300,
          color: hexToRgba(c.rose, 0.03),
          letterSpacing: '0.1em',
          pointerEvents: 'none',
          whiteSpace: 'nowrap',
        }}>
          INVEST
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : '1fr 1.2fr',
          gap: isMobile ? '3rem' : '8rem',
          alignItems: 'center',
          position: 'relative',
          zIndex: 1,
        }}>
          <div>
            <div style={{
              fontFamily: '"Montserrat", sans-serif',
              fontSize: '0.55rem',
              fontWeight: 500,
              letterSpacing: '0.4em',
              color: c.rose,
              marginBottom: '2rem',
            }}>
              {t.investment.overline}
            </div>
            <h2 style={{
              fontSize: isMobile ? 'clamp(2.5rem, 10vw, 4rem)' : 'clamp(3rem, 7vw, 5rem)',
              fontWeight: 300,
              margin: 0,
              lineHeight: 1.1,
            }}>
              <span style={{ display: 'block', fontStyle: 'italic', color: hexToRgba(c.cream, 0.7) }}>
                {t.investment.title1}
              </span>
              <span style={{
                display: 'block',
                background: `linear-gradient(90deg, ${c.rose}, ${c.coral})`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                {t.investment.title2}
              </span>
            </h2>
            <p style={{
              marginTop: '2rem',
              fontSize: isMobile ? '0.95rem' : '1.1rem',
              lineHeight: 2.2,
              color: hexToRgba(c.creamSoft, 0.5),
              maxWidth: 380,
              fontWeight: 300,
            }}>
              {t.investment.subtitle}
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
            {t.investment.plans.map((plan, i) => (
              <div
                key={i}
                onMouseEnter={() => {
                  setActivePlan(i);
                  setCursorVariant('hover');
                }}
                onMouseLeave={() => {
                  setActivePlan(null);
                  setCursorVariant('default');
                }}
                style={{
                  padding: isMobile ? '2rem' : '3rem',
                  background: activePlan === i
                    ? `linear-gradient(135deg, ${hexToRgba(c.rose, 0.15)} 0%, ${hexToRgba(c.burgundy, 0.08)} 100%)`
                    : hexToRgba(c.darkAlt, 0.5),
                  border: `1px solid ${hexToRgba(c.rose, activePlan === i ? 0.35 : 0.1)}`,
                  display: 'grid',
                  gridTemplateColumns: '1fr auto',
                  alignItems: 'center',
                  gap: '1rem',
                  transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
                  transform: activePlan === i && !isMobile ? 'translateX(20px)' : 'translateX(0)',
                }}
              >
                <div>
                  <div style={{
                    fontFamily: '"Cormorant Garamond", serif',
                    fontSize: isMobile ? '1.4rem' : '1.6rem',
                    fontWeight: 400,
                    letterSpacing: '0.1em',
                    color: activePlan === i ? c.rose : c.cream,
                    transition: 'color 0.4s ease',
                  }}>{plan.name}</div>
                  <div style={{
                    fontFamily: '"Montserrat", sans-serif',
                    fontSize: '0.55rem',
                    fontWeight: 400,
                    color: hexToRgba(c.creamSoft, 0.4),
                    marginTop: '0.5rem',
                    letterSpacing: '0.05em',
                  }}>{plan.desc}</div>
                </div>
                <div style={{
                  fontFamily: '"Cormorant Garamond", serif',
                  fontSize: isMobile ? '2.5rem' : '3.5rem',
                  fontWeight: 300,
                  fontStyle: 'italic',
                  background: `linear-gradient(135deg, ${c.rose}, ${c.coral})`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}>{plan.rate}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        id="testimonials"
        style={{
          padding: isMobile ? '6rem 1.5rem' : '10rem 4rem',
          textAlign: 'center',
          position: 'relative',
          background: hexToRgba(c.darkAlt, 0.3),
          ...sectionStyle('testimonials'),
        }}
      >
        <div style={{
          fontFamily: '"Montserrat", sans-serif',
          fontSize: '0.55rem',
          fontWeight: 500,
          letterSpacing: '0.4em',
          color: c.rose,
          marginBottom: '3rem',
        }}>
          {t.testimonials.overline}
        </div>

        <div style={{
          maxWidth: 800,
          margin: '0 auto',
          position: 'relative',
          minHeight: 280,
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
                transform: activeTestimonial === i ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.95)',
                transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
                pointerEvents: activeTestimonial === i ? 'auto' : 'none',
              }}
            >
              <div style={{
                width: 70,
                height: 70,
                borderRadius: '50%',
                background: `linear-gradient(135deg, ${c.rose}, ${c.burgundy})`,
                margin: '0 auto 2rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: '"Cormorant Garamond", serif',
                fontSize: '1.8rem',
                fontWeight: 300,
                color: c.cream,
              }}>
                {['S', 'M', 'A'][i]}
              </div>

              <div style={{
                fontFamily: '"Cormorant Garamond", serif',
                fontSize: '4rem',
                color: hexToRgba(c.rose, 0.25),
                marginBottom: '-1rem',
              }}>&ldquo;</div>

              <blockquote style={{
                fontFamily: '"Cormorant Garamond", serif',
                fontSize: isMobile ? 'clamp(1.2rem, 5vw, 1.8rem)' : 'clamp(1.5rem, 4vw, 2.2rem)',
                fontStyle: 'italic',
                fontWeight: 300,
                lineHeight: 1.8,
                color: hexToRgba(c.cream, 0.85),
                margin: 0,
              }}>
                {testimonial.quote}
              </blockquote>

              <div style={{
                marginTop: '2rem',
                fontFamily: '"Montserrat", sans-serif',
                fontSize: '0.6rem',
                fontWeight: 500,
                letterSpacing: '0.3em',
                color: c.rose,
              }}>
                — {testimonial.author}
              </div>
            </div>
          ))}
        </div>

        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '1rem',
          marginTop: '3rem',
        }}>
          {t.testimonials.items.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveTestimonial(i)}
              onMouseEnter={() => setCursorVariant('hover')}
              onMouseLeave={() => setCursorVariant('default')}
              style={{
                width: activeTestimonial === i ? 40 : 12,
                height: 12,
                borderRadius: 6,
                background: activeTestimonial === i ? c.rose : hexToRgba(c.rose, 0.25),
                border: 'none',
                transition: 'all 0.4s ease',
                padding: 0,
              }}
            />
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section
        id="faq"
        style={{
          padding: isMobile ? '6rem 1.5rem' : '10rem 4rem',
          position: 'relative',
          ...sectionStyle('faq'),
        }}
      >
        <div style={{
          maxWidth: 800,
          margin: '0 auto',
        }}>
          <div style={{
            textAlign: 'center',
            marginBottom: '4rem',
          }}>
            <div style={{
              fontFamily: '"Montserrat", sans-serif',
              fontSize: '0.55rem',
              fontWeight: 500,
              letterSpacing: '0.4em',
              color: c.rose,
              marginBottom: '2rem',
            }}>
              {t.faq.overline}
            </div>
            <h2 style={{
              fontSize: isMobile ? 'clamp(2rem, 8vw, 3rem)' : 'clamp(2.5rem, 6vw, 4rem)',
              fontWeight: 300,
              fontStyle: 'italic',
              margin: 0,
              color: c.cream,
            }}>
              {t.faq.title}
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', background: hexToRgba(c.rose, 0.1) }}>
            {t.faq.items.map((faq, i) => (
              <div
                key={i}
                style={{
                  background: c.dark,
                  overflow: 'hidden',
                }}
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  onMouseEnter={() => setCursorVariant('hover')}
                  onMouseLeave={() => setCursorVariant('default')}
                  style={{
                    width: '100%',
                    padding: isMobile ? '1.5rem' : '2rem',
                    background: 'transparent',
                    border: 'none',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '1rem',
                    textAlign: 'left',
                  }}
                >
                  <span style={{
                    fontFamily: '"Cormorant Garamond", serif',
                    fontSize: isMobile ? '1.1rem' : '1.3rem',
                    fontWeight: 400,
                    color: activeFaq === i ? c.rose : c.cream,
                    transition: 'color 0.3s ease',
                  }}>
                    {faq.q}
                  </span>
                  <span style={{
                    fontSize: '1.5rem',
                    color: c.rose,
                    transform: activeFaq === i ? 'rotate(45deg)' : 'rotate(0)',
                    transition: 'transform 0.4s ease',
                    flexShrink: 0,
                  }}>
                    +
                  </span>
                </button>
                <div style={{
                  maxHeight: activeFaq === i ? 200 : 0,
                  overflow: 'hidden',
                  transition: 'max-height 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
                }}>
                  <p style={{
                    padding: isMobile ? '0 1.5rem 1.5rem' : '0 2rem 2rem',
                    margin: 0,
                    fontSize: isMobile ? '0.95rem' : '1.05rem',
                    lineHeight: 1.9,
                    color: hexToRgba(c.creamSoft, 0.6),
                    fontWeight: 300,
                  }}>
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Apply Section */}
      <section
        id="apply"
        style={{
          padding: isMobile ? '6rem 1.5rem' : '12rem 4rem',
          position: 'relative',
          minHeight: isMobile ? 'auto' : '100vh',
          display: 'flex',
          alignItems: 'center',
          background: `linear-gradient(180deg, transparent 0%, ${hexToRgba(c.burgundy, 0.08)} 100%)`,
          ...sectionStyle('apply'),
        }}
      >
        <div className="hide-mobile" style={{
          position: 'absolute',
          top: '50%',
          right: 0,
          transform: 'translateY(-50%)',
          width: '50%',
          height: '80%',
          background: `radial-gradient(ellipse at right, ${hexToRgba(c.rose, 0.08)} 0%, transparent 60%)`,
          pointerEvents: 'none',
        }} />

        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
          gap: isMobile ? '3rem' : '8rem',
          width: '100%',
          position: 'relative',
          zIndex: 1,
        }}>
          <div>
            <div style={{
              fontFamily: '"Montserrat", sans-serif',
              fontSize: '0.55rem',
              fontWeight: 500,
              letterSpacing: '0.4em',
              color: c.rose,
              marginBottom: '2rem',
            }}>
              {t.apply.overline}
            </div>
            <h2 style={{
              fontSize: isMobile ? 'clamp(2.5rem, 10vw, 4rem)' : 'clamp(3rem, 8vw, 5.5rem)',
              fontWeight: 300,
              margin: 0,
              lineHeight: 1,
            }}>
              <span style={{ display: 'block', fontStyle: 'italic', color: c.cream }}>{t.apply.title1}</span>
              <span style={{
                display: 'block',
                background: `linear-gradient(90deg, ${c.rose}, ${c.coral}, ${c.gold})`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>{t.apply.title2}</span>
            </h2>
            <p style={{
              marginTop: '2rem',
              fontSize: isMobile ? '0.95rem' : '1.1rem',
              lineHeight: 2.2,
              color: hexToRgba(c.creamSoft, 0.5),
              maxWidth: 400,
              fontWeight: 300,
            }}>
              {t.apply.subtitle}
            </p>

            <div className="hide-mobile" style={{
              display: 'flex',
              gap: '4rem',
              marginTop: '4rem',
              paddingTop: '3rem',
              borderTop: `1px solid ${hexToRgba(c.rose, 0.15)}`,
            }}>
              {t.apply.stats.map((stat, i) => (
                <div key={i}>
                  <div style={{
                    fontFamily: '"Cormorant Garamond", serif',
                    fontSize: '2.2rem',
                    fontWeight: 300,
                    fontStyle: 'italic',
                    color: c.rose,
                  }}>{stat.value}</div>
                  <div style={{
                    fontFamily: '"Montserrat", sans-serif',
                    fontSize: '0.5rem',
                    fontWeight: 500,
                    color: hexToRgba(c.creamSoft, 0.4),
                    letterSpacing: '0.1em',
                    marginTop: '0.5rem',
                  }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div style={{
            background: hexToRgba(c.darkAlt, 0.6),
            border: `1px solid ${hexToRgba(c.rose, 0.15)}`,
            padding: isMobile ? '2.5rem' : '4rem',
            position: 'relative',
            overflow: 'hidden',
          }}>
            {/* Success overlay */}
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
            }}>
              <div style={{
                width: 80,
                height: 80,
                borderRadius: '50%',
                background: `linear-gradient(135deg, ${c.rose}, ${c.burgundy})`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '2rem',
                color: c.cream,
              }}>
                ✓
              </div>
              <div style={{
                fontFamily: '"Cormorant Garamond", serif',
                fontSize: '1.5rem',
                fontWeight: 400,
                letterSpacing: '0.2em',
                color: c.rose,
              }}>
                {t.apply.form.success}
              </div>
              <p style={{
                fontFamily: '"Montserrat", sans-serif',
                fontSize: '0.7rem',
                fontWeight: 400,
                color: hexToRgba(c.creamSoft, 0.6),
                textAlign: 'center',
              }}>
                {t.apply.form.successMsg}
              </p>
            </div>

            <form onSubmit={handleFormSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {[
                { label: t.apply.form.handle, placeholder: t.apply.form.handlePlaceholder, key: 'handle' as const },
                { label: t.apply.form.platform, placeholder: t.apply.form.platformPlaceholder, key: 'platform' as const },
                { label: t.apply.form.following, placeholder: t.apply.form.followingPlaceholder, key: 'following' as const },
                { label: t.apply.form.contact, placeholder: t.apply.form.contactPlaceholder, key: 'contact' as const },
              ].map((field) => (
                <div key={field.key}>
                  <label style={{
                    display: 'block',
                    fontFamily: '"Montserrat", sans-serif',
                    fontSize: '0.5rem',
                    fontWeight: 500,
                    letterSpacing: '0.25em',
                    textTransform: 'uppercase',
                    color: c.rose,
                    marginBottom: '1rem',
                    opacity: 0.8,
                  }}>{field.label}</label>
                  <input
                    type="text"
                    placeholder={field.placeholder}
                    value={formData[field.key]}
                    onChange={(e) => setFormData({ ...formData, [field.key]: e.target.value })}
                    onFocus={() => {
                      setFocusedInput(field.key);
                      setCursorVariant('text');
                    }}
                    onBlur={() => {
                      setFocusedInput(null);
                      setCursorVariant('default');
                    }}
                    style={{
                      width: '100%',
                      padding: '1.2rem 0',
                      background: 'transparent',
                      border: 'none',
                      borderBottom: `1px solid ${focusedInput === field.key ? c.rose : hexToRgba(c.rose, 0.25)}`,
                      color: c.cream,
                      fontSize: '1.1rem',
                      fontFamily: '"Cormorant Garamond", serif',
                      fontStyle: 'italic',
                      fontWeight: 300,
                      outline: 'none',
                      transition: 'border-color 0.4s ease',
                      boxSizing: 'border-box',
                    }}
                  />
                </div>
              ))}

              <button
                type="submit"
                onMouseEnter={() => setCursorVariant('hover')}
                onMouseLeave={() => setCursorVariant('default')}
                style={{
                  marginTop: '1rem',
                  padding: '1.5rem 3rem',
                  background: `linear-gradient(135deg, ${c.rose} 0%, ${c.roseDark} 100%)`,
                  color: c.darker,
                  border: 'none',
                  fontSize: '0.65rem',
                  fontFamily: '"Montserrat", sans-serif',
                  fontWeight: 600,
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  transition: 'transform 0.4s ease, box-shadow 0.4s ease',
                  boxShadow: `0 20px 60px ${hexToRgba(c.rose, 0.3)}`,
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.boxShadow = `0 30px 80px ${hexToRgba(c.rose, 0.4)}`;
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = `0 20px 60px ${hexToRgba(c.rose, 0.3)}`;
                }}
              >
                {t.apply.form.submit}
              </button>

              <p style={{
                fontFamily: '"Montserrat", sans-serif',
                fontSize: '0.5rem',
                fontWeight: 400,
                color: hexToRgba(c.creamSoft, 0.35),
                letterSpacing: '0.15em',
                textAlign: 'center',
              }}>
                {'\u2726'} {t.apply.form.confidential} {'\u2726'} {t.apply.form.response} {'\u2726'}
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        padding: isMobile ? '4rem 1.5rem' : '6rem 4rem',
        borderTop: `1px solid ${hexToRgba(c.rose, 0.1)}`,
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : '1fr auto auto',
        gap: isMobile ? '2rem' : '4rem',
        alignItems: isMobile ? 'center' : 'end',
        textAlign: isMobile ? 'center' : 'left',
        background: hexToRgba(c.darker, 0.5),
      }}>
        <div>
          <div style={{
            fontFamily: '"Cormorant Garamond", serif',
            fontSize: isMobile ? '2rem' : '3rem',
            fontWeight: 300,
            letterSpacing: '0.2em',
            background: `linear-gradient(135deg, ${c.rose}, ${c.coral})`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            marginBottom: '1.5rem',
          }}>LUXOR</div>
          <div style={{
            fontFamily: '"Montserrat", sans-serif',
            fontSize: '0.5rem',
            fontWeight: 400,
            letterSpacing: '0.2em',
            color: hexToRgba(c.creamSoft, 0.35),
          }}>
            &copy; 2025 — {t.footer.tagline}
          </div>
        </div>

        <div style={{
          display: 'flex',
          flexDirection: isMobile ? 'row' : 'column',
          gap: '1rem',
          alignItems: isMobile ? 'center' : 'flex-end',
          justifyContent: 'center',
        }}>
          {['Telegram', 'Twitter', 'Email'].map(link => (
            <a
              key={link}
              href="#"
              onMouseEnter={() => setCursorVariant('hover')}
              onMouseLeave={() => setCursorVariant('default')}
              style={{
                fontFamily: '"Montserrat", sans-serif',
                fontSize: '0.55rem',
                fontWeight: 500,
                letterSpacing: '0.2em',
                color: hexToRgba(c.creamSoft, 0.4),
                textDecoration: 'none',
                textTransform: 'uppercase',
                transition: 'color 0.3s ease',
              }}
              onMouseOver={(e) => e.currentTarget.style.color = c.rose}
              onMouseOut={(e) => e.currentTarget.style.color = hexToRgba(c.creamSoft, 0.4)}
            >
              {link}
            </a>
          ))}
        </div>

        <div style={{
          fontFamily: '"Montserrat", sans-serif',
          fontSize: '0.5rem',
          fontWeight: 500,
          color: hexToRgba(c.rose, 0.5),
          letterSpacing: '0.15em',
        }}>
          18+ ONLY
        </div>
      </footer>

      {/* Floating Contact Button */}
      <a
        href="#apply"
        onMouseEnter={() => setCursorVariant('hover')}
        onMouseLeave={() => setCursorVariant('default')}
        style={{
          position: 'fixed',
          bottom: isMobile ? '1.5rem' : '2rem',
          right: isMobile ? '1.5rem' : '2rem',
          width: isMobile ? 50 : 60,
          height: isMobile ? 50 : 60,
          borderRadius: '50%',
          background: `linear-gradient(135deg, ${c.rose}, ${c.burgundy})`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textDecoration: 'none',
          boxShadow: `0 10px 40px ${hexToRgba(c.rose, 0.4)}`,
          zIndex: 90,
          transition: 'transform 0.4s ease, box-shadow 0.4s ease',
          animation: 'borderGlow 3s ease-in-out infinite',
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.transform = 'scale(1.1)';
          e.currentTarget.style.boxShadow = `0 15px 50px ${hexToRgba(c.rose, 0.5)}`;
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.boxShadow = `0 10px 40px ${hexToRgba(c.rose, 0.4)}`;
        }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={c.cream} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 2L11 13" />
          <path d="M22 2L15 22L11 13L2 9L22 2Z" />
        </svg>
      </a>
    </div>
  );
}
