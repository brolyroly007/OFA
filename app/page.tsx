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
      title2: 'las reinas',
      title3: 'reinan.',
      subtitle: 'No gestionamos creadoras. Arquitectamos imperios. Para las pocas ambiciosas listas para dominar, no solo participar.',
      cta: 'Comienza Tu Reinado',
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
        { quote: "No solo hicieron crecer mi cuenta. Transformaron mi vida entera. De $3k a $89k mensuales en menos de 6 meses.", author: "TOP 0.1% CREADORA", initial: "S" },
        { quote: "El equipo de Silver Reign entiende exactamente lo que funciona. Mi engagement se triplicó en el primer mes.", author: "INFLUENCER VERIFICADA", initial: "V" },
        { quote: "Finalmente encontré un equipo que ve el potencial que yo veía. Los resultados hablan por sí solos.", author: "CONTENT CREATOR", initial: "A" },
      ],
    },
    faq: {
      overline: 'PREGUNTAS FRECUENTES',
      title: 'Todo lo que necesitas saber.',
      items: [
        { q: "¿Cuánto tiempo toma ver resultados?", a: "La mayoría de nuestras creadoras ven mejoras significativas en las primeras 2-4 semanas. Resultados transformadores típicamente ocurren entre el mes 2 y 3." },
        { q: "¿Qué plataformas manejan?", a: "Nos especializamos en todas las plataformas principales: OnlyFans, Fansly, Instagram, TikTok, Twitter/X, y más. Creamos estrategias cross-platform personalizadas." },
        { q: "¿Cómo funciona el modelo de comisión?", a: "Sin costos iniciales. Solo ganamos cuando tú ganas. Nuestras comisiones van del 25% al 35% dependiendo del tier de servicio que elijas." },
        { q: "¿Qué hace diferente a Silver Reign?", a: "No somos otra agencia genérica. Somos arquitectos de imperios. Cada estrategia es personalizada, cada decisión está basada en datos, y tu éxito es nuestra obsesión." },
      ],
    },
    apply: {
      overline: 'COMIENZA TU REINADO',
      title1: '¿Lista para',
      title2: 'reinar?',
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
      tagline: 'Donde las reinas reinan',
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
      title2: 'queens',
      title3: 'reign.',
      subtitle: "We don't manage creators. We architect empires. For the ambitious few ready to dominate, not just participate.",
      cta: 'Begin Your Reign',
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
        { quote: "They didn't just grow my account. They transformed my entire life. From $3k to $89k monthly in under 6 months.", author: "TOP 0.1% CREATOR", initial: "S" },
        { quote: "The Silver Reign team understands exactly what works. My engagement tripled in the first month.", author: "VERIFIED INFLUENCER", initial: "V" },
        { quote: "Finally found a team that sees the potential I saw. The results speak for themselves.", author: "CONTENT CREATOR", initial: "A" },
      ],
    },
    faq: {
      overline: 'FREQUENTLY ASKED QUESTIONS',
      title: 'Everything you need to know.',
      items: [
        { q: "How long does it take to see results?", a: "Most of our creators see significant improvements in the first 2-4 weeks. Transformative results typically occur between month 2 and 3." },
        { q: "What platforms do you manage?", a: "We specialize in all major platforms: OnlyFans, Fansly, Instagram, TikTok, Twitter/X, and more. We create personalized cross-platform strategies." },
        { q: "How does the commission model work?", a: "No upfront costs. We only earn when you earn. Our commissions range from 25% to 35% depending on the service tier you choose." },
        { q: "What makes Silver Reign different?", a: "We're not another generic agency. We're empire architects. Every strategy is personalized, every decision is data-driven, and your success is our obsession." },
      ],
    },
    apply: {
      overline: 'BEGIN YOUR REIGN',
      title1: 'Ready to',
      title2: 'reign?',
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
      tagline: 'Where queens reign',
    },
  },
};

// Unsplash images
const images = {
  hero: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1920&q=80', // Abstract silver/luxury
  testimonial1: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80', // Elegant woman
  testimonial2: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&q=80', // Professional woman
  testimonial3: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&q=80', // Stylish woman
  apply: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&q=80', // Luxury lifestyle
  service1: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&q=80', // Branding
  service2: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&q=80', // Revenue
  service3: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=600&q=80', // Content
  service4: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80', // Growth
};

export default function SilverReignAgency() {
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
  const [isMobile, setIsMobile] = useState(false);
  const [lang, setLang] = useState<'es' | 'en'>('es');

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

    const timer1 = setTimeout(() => setLoaded(true), 500);
    const timer2 = setTimeout(() => setShowContent(true), 1500);

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
  const serviceImages = [images.service1, images.service2, images.service3, images.service4];
  const testimonialImages = [images.testimonial1, images.testimonial2, images.testimonial3];

  const hexToRgba = (hex: string, alpha: number) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  };

  // SILVER REIGN COLOR PALETTE
  const c = {
    // Backgrounds
    dark: '#0a0a0c',           // Deep black
    darker: '#050507',         // Deepest black
    darkAlt: '#12121a',        // Card backgrounds

    // Silver tones
    silver: '#c0c0c8',         // Primary silver
    silverLight: '#e8e8ec',    // Light silver
    silverDark: '#4a4a52',     // Dark silver

    // Accent - Lavender/Purple for sensuality
    accent: '#a89ec9',         // Soft lavender
    accentLight: '#c4b8e8',    // Light lavender
    accentDark: '#7b6fa0',     // Dark lavender

    // Text
    pearl: '#f5f5f7',          // Pearl white
    pearlSoft: '#d8d8dc',      // Softer pearl
  };

  const cursorSize = cursorVariant === 'hover' ? 100 : cursorVariant === 'text' ? 150 : 20;

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
          @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Raleway:wght@300;400;500;600&display=swap');

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

          @keyframes shimmer {
            0% { background-position: -200% center; }
            100% { background-position: 200% center; }
          }

          @keyframes pulse {
            0%, 100% { opacity: 0.4; }
            50% { opacity: 1; }
          }
        `}</style>

        <div style={{
          fontFamily: '"Playfair Display", serif',
          fontSize: 'clamp(2rem, 8vw, 4rem)',
          fontWeight: 500,
          letterSpacing: '0.3em',
          background: `linear-gradient(135deg, ${c.silverLight} 0%, ${c.silver} 50%, ${c.accent} 100%)`,
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          animation: loaded ? 'logoReveal 1s ease forwards' : 'none',
          opacity: 0,
          textAlign: 'center',
        }}>
          SILVER REIGN
        </div>

        <div style={{
          width: 200,
          height: 2,
          background: `linear-gradient(90deg, transparent, ${c.silver}, ${c.accent}, transparent)`,
          animation: loaded ? 'lineExpand 1s ease 0.3s forwards' : 'none',
          transform: 'scaleX(0)',
        }} />

        <div style={{
          fontFamily: '"Raleway", sans-serif',
          fontSize: '0.7rem',
          fontWeight: 500,
          letterSpacing: '0.4em',
          color: c.accent,
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
        background: c.darker,
        color: c.pearl,
        fontFamily: '"Playfair Display", serif',
        cursor: isMobile ? 'auto' : 'none',
        overflowX: 'hidden',
        position: 'relative',
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Raleway:wght@300;400;500;600&display=swap');

        * {
          cursor: ${isMobile ? 'auto' : 'none'} !important;
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        ::selection {
          background: ${hexToRgba(c.accent, 0.4)};
          color: ${c.pearl};
        }

        input::placeholder, textarea::placeholder {
          color: ${hexToRgba(c.silver, 0.5)};
          font-style: italic;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(2deg); }
        }

        @keyframes pulse {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.8; }
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
          0%, 100% { box-shadow: 0 0 30px ${hexToRgba(c.accent, 0.4)}; }
          50% { box-shadow: 0 0 50px ${hexToRgba(c.accent, 0.6)}; }
        }

        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
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
          width: 6px;
        }
        ::-webkit-scrollbar-track {
          background: ${c.darker};
        }
        ::-webkit-scrollbar-thumb {
          background: ${c.silverDark};
          border-radius: 3px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: ${c.silver};
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
            border: `2px solid ${hexToRgba(c.silver, cursorVariant === 'default' ? 0.8 : 0.4)}`,
            background: cursorVariant !== 'default'
              ? `radial-gradient(circle, ${hexToRgba(c.accent, 0.2)} 0%, transparent 70%)`
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
            width: 8,
            height: 8,
            borderRadius: '50%',
            background: `linear-gradient(135deg, ${c.silver}, ${c.accent})`,
            pointerEvents: 'none',
            zIndex: 10000,
            transform: 'translate(-50%, -50%)',
          }} />
        </>
      )}

      {/* Hero Background Image */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: `url(${images.hero})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        opacity: 0.08,
        pointerEvents: 'none',
      }} />

      {/* Ambient Background */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: `
          radial-gradient(ellipse 80% 60% at 20% 20%, ${hexToRgba(c.accent, 0.15)} 0%, transparent 50%),
          radial-gradient(ellipse 60% 50% at 80% 70%, ${hexToRgba(c.silverDark, 0.12)} 0%, transparent 50%),
          radial-gradient(ellipse 100% 100% at 50% 0%, ${hexToRgba(c.accentDark, 0.1)} 0%, transparent 40%)
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
          linear-gradient(${hexToRgba(c.silver, 0.03)} 1px, transparent 1px),
          linear-gradient(90deg, ${hexToRgba(c.silver, 0.03)} 1px, transparent 1px)
        `,
        backgroundSize: '80px 80px',
        pointerEvents: 'none',
        opacity: 0.6,
      }} />

      {/* Floating Geometric Elements */}
      <div className="hide-mobile" style={{
        position: 'fixed',
        top: '15%',
        right: '10%',
        width: 280,
        height: 280,
        border: `1px solid ${hexToRgba(c.silver, 0.1)}`,
        transform: `rotate(45deg) translateY(${scrollY * 0.05}px)`,
        pointerEvents: 'none',
        animation: 'float 20s ease-in-out infinite',
      }} />
      <div className="hide-mobile" style={{
        position: 'fixed',
        bottom: '20%',
        left: '5%',
        width: 180,
        height: 180,
        border: `1px solid ${hexToRgba(c.accent, 0.08)}`,
        borderRadius: '50%',
        transform: `translateY(${scrollY * -0.03}px)`,
        pointerEvents: 'none',
        animation: 'float 15s ease-in-out infinite reverse',
      }} />

      {/* Navigation */}
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        padding: isMobile ? '1.5rem' : '2rem 5rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        zIndex: 100,
        background: `linear-gradient(180deg, ${c.darker} 0%, ${hexToRgba(c.darker, 0.98)} 60%, ${hexToRgba(c.darker, 0.9)} 80%, transparent 100%)`,
        backdropFilter: 'blur(20px)',
      }}>
        <div
          onMouseEnter={() => setCursorVariant('hover')}
          onMouseLeave={() => setCursorVariant('default')}
          className="animate-in stagger-1"
          style={{
            fontFamily: '"Playfair Display", serif',
            fontSize: isMobile ? '1.2rem' : '1.5rem',
            fontWeight: 500,
            letterSpacing: '0.2em',
            background: `linear-gradient(135deg, ${c.silverLight} 0%, ${c.silver} 50%, ${c.accent} 100%)`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          SILVER REIGN
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
            fontFamily: '"Raleway", sans-serif',
            fontSize: '0.65rem',
          }}>
            <button
              onClick={() => setLang('es')}
              onMouseEnter={() => setCursorVariant('hover')}
              onMouseLeave={() => setCursorVariant('default')}
              style={{
                background: lang === 'es' ? `linear-gradient(135deg, ${c.silver}, ${c.accent})` : 'transparent',
                border: `1px solid ${lang === 'es' ? 'transparent' : hexToRgba(c.silver, 0.4)}`,
                color: lang === 'es' ? c.darker : c.silver,
                padding: '0.5rem 0.8rem',
                borderRadius: '4px',
                transition: 'all 0.3s ease',
                fontWeight: 600,
              }}
            >
              ES
            </button>
            <button
              onClick={() => setLang('en')}
              onMouseEnter={() => setCursorVariant('hover')}
              onMouseLeave={() => setCursorVariant('default')}
              style={{
                background: lang === 'en' ? `linear-gradient(135deg, ${c.silver}, ${c.accent})` : 'transparent',
                border: `1px solid ${lang === 'en' ? 'transparent' : hexToRgba(c.silver, 0.4)}`,
                color: lang === 'en' ? c.darker : c.silver,
                padding: '0.5rem 0.8rem',
                borderRadius: '4px',
                transition: 'all 0.3s ease',
                fontWeight: 600,
              }}
            >
              EN
            </button>
          </div>

          {/* Nav Links */}
          <div style={{
            display: 'flex',
            gap: isMobile ? '1.5rem' : '2.5rem',
            fontFamily: '"Raleway", sans-serif',
            fontSize: isMobile ? '0.65rem' : '0.75rem',
            fontWeight: 600,
            letterSpacing: '0.12em',
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
                  color: c.pearl,
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                  position: 'relative',
                  padding: '0.5rem 0',
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.color = c.accent;
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.color = c.pearl;
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
        justifyContent: 'center',
        padding: isMobile ? '8rem 1.5rem 4rem' : '0 5rem',
        position: 'relative',
      }}>
        <div style={{
          maxWidth: '1000px',
          position: 'relative',
          zIndex: 2,
          width: '100%',
          textAlign: 'center',
        }}>
          <div
            className="animate-in stagger-1"
            style={{
              fontFamily: '"Raleway", sans-serif',
              fontSize: isMobile ? '0.6rem' : '0.75rem',
              fontWeight: 600,
              letterSpacing: '0.4em',
              color: c.accent,
              marginBottom: isMobile ? '2rem' : '3rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '1.5rem',
            }}
          >
            <span style={{
              width: isMobile ? 40 : 60,
              height: 1,
              background: `linear-gradient(90deg, transparent, ${c.accent})`,
              display: 'block',
            }} />
            {t.hero.overline}
            <span style={{
              width: isMobile ? 40 : 60,
              height: 1,
              background: `linear-gradient(90deg, ${c.accent}, transparent)`,
              display: 'block',
            }} />
          </div>

          <h1 style={{
            fontSize: isMobile ? 'clamp(2.8rem, 14vw, 4.5rem)' : 'clamp(4rem, 10vw, 8rem)',
            fontWeight: 400,
            lineHeight: 1,
            margin: 0,
          }}>
            <span
              className="animate-in stagger-2"
              style={{
                display: 'block',
                fontStyle: 'italic',
                color: c.pearl,
              }}
            >{t.hero.title1}</span>
            <span
              className="animate-in stagger-3"
              style={{
                display: 'block',
                fontWeight: 500,
                background: `linear-gradient(135deg, ${c.silverLight} 0%, ${c.silver} 40%, ${c.accentLight} 100%)`,
                backgroundSize: '200% 200%',
                animation: 'gradientMove 4s ease infinite',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                padding: '0.2rem 0',
              }}
            >{t.hero.title2}</span>
            <span
              className="animate-in stagger-4"
              style={{
                display: 'block',
                fontStyle: 'italic',
                color: hexToRgba(c.pearl, 0.8),
              }}
            >{t.hero.title3}</span>
          </h1>

          <p
            className="animate-in stagger-5"
            style={{
              marginTop: isMobile ? '2.5rem' : '4rem',
              maxWidth: '550px',
              margin: isMobile ? '2.5rem auto 0' : '4rem auto 0',
              fontSize: isMobile ? '1rem' : '1.2rem',
              lineHeight: 2,
              color: hexToRgba(c.pearlSoft, 0.75),
              fontFamily: '"Raleway", sans-serif',
              fontWeight: 400,
            }}
          >
            {t.hero.subtitle}
          </p>

          <div
            className="animate-in stagger-6"
            style={{
              marginTop: isMobile ? '2.5rem' : '3.5rem',
              display: 'flex',
              flexDirection: isMobile ? 'column' : 'row',
              alignItems: 'center',
              justifyContent: 'center',
              gap: isMobile ? '1.5rem' : '2rem',
            }}
          >
            <a
              href="#apply"
              onMouseEnter={() => setCursorVariant('hover')}
              onMouseLeave={() => setCursorVariant('default')}
              style={{
                padding: isMobile ? '1.2rem 3rem' : '1.4rem 4rem',
                background: `linear-gradient(135deg, ${c.silver} 0%, ${c.accent} 100%)`,
                color: c.darker,
                textDecoration: 'none',
                fontSize: '0.75rem',
                fontFamily: '"Raleway", sans-serif',
                fontWeight: 700,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                border: 'none',
                borderRadius: '4px',
                position: 'relative',
                overflow: 'hidden',
                transition: 'all 0.4s ease',
                display: 'inline-block',
                boxShadow: `0 15px 50px ${hexToRgba(c.accent, 0.3)}`,
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = `0 25px 70px ${hexToRgba(c.accent, 0.4)}`;
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = `0 15px 50px ${hexToRgba(c.accent, 0.3)}`;
              }}
            >
              {t.hero.cta}
            </a>
            <span style={{
              fontFamily: '"Raleway", sans-serif',
              fontSize: '0.7rem',
              color: c.silver,
              letterSpacing: '0.1em',
              fontWeight: 500,
            }}>
              ✦ {t.hero.spots}
            </span>
          </div>
        </div>

        {/* Hero Stats Side */}
        <div className="hide-mobile" style={{
          position: 'absolute',
          bottom: '12%',
          right: '8%',
          textAlign: 'right',
        }}>
          <div style={{
            fontFamily: '"Playfair Display", serif',
            fontSize: '4.5rem',
            fontWeight: 400,
            fontStyle: 'italic',
            lineHeight: 1,
            background: `linear-gradient(135deg, ${c.pearl} 0%, ${c.silver} 100%)`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>$47M</div>
          <div style={{
            fontFamily: '"Raleway", sans-serif',
            fontSize: '0.6rem',
            fontWeight: 600,
            letterSpacing: '0.3em',
            color: c.accent,
            textTransform: 'uppercase',
            marginTop: '0.8rem',
          }}>{t.hero.generated}</div>
        </div>

        {/* Scroll indicator */}
        <div className="hide-mobile" style={{
          position: 'absolute',
          bottom: '4rem',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1rem',
        }}>
          <div style={{
            width: 1,
            height: 50,
            background: `linear-gradient(180deg, ${c.accent}, transparent)`,
          }} />
          <span style={{
            fontFamily: '"Raleway", sans-serif',
            fontSize: '0.55rem',
            fontWeight: 600,
            letterSpacing: '0.25em',
            color: c.silver,
            textTransform: 'uppercase',
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
          borderTop: `1px solid ${hexToRgba(c.silver, 0.15)}`,
          borderBottom: `1px solid ${hexToRgba(c.silver, 0.15)}`,
          background: hexToRgba(c.darkAlt, 0.6),
        }}>
          {[
            { value: '$47M', label: t.stats.generated },
            { value: '200+', label: t.stats.creators },
            { value: '98%', label: t.stats.retention },
          ].map((stat, i) => (
            <div key={i} style={{ textAlign: 'center' }}>
              <div style={{
                fontFamily: '"Playfair Display", serif',
                fontSize: '1.8rem',
                fontWeight: 500,
                fontStyle: 'italic',
                background: `linear-gradient(135deg, ${c.silver}, ${c.accent})`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>{stat.value}</div>
              <div style={{
                fontFamily: '"Raleway", sans-serif',
                fontSize: '0.5rem',
                fontWeight: 600,
                color: hexToRgba(c.pearl, 0.6),
                letterSpacing: '0.1em',
                marginTop: '0.4rem',
              }}>{stat.label}</div>
            </div>
          ))}
        </section>
      )}

      {/* Marquee Section */}
      <section style={{
        padding: isMobile ? '4rem 0' : '5rem 0',
        borderTop: `1px solid ${hexToRgba(c.silver, 0.1)}`,
        borderBottom: `1px solid ${hexToRgba(c.silver, 0.1)}`,
        overflow: 'hidden',
        position: 'relative',
        background: hexToRgba(c.darkAlt, 0.4),
      }}>
        <div style={{
          display: 'flex',
          gap: isMobile ? '3rem' : '5rem',
          animation: 'marquee 25s linear infinite',
          whiteSpace: 'nowrap',
        }}>
          {[...Array(3)].map((_, i) => (
            <div key={i} style={{ display: 'flex', gap: isMobile ? '3rem' : '5rem' }}>
              {['Strategy', '✦', 'Growth', '✦', 'Revenue', '✦', 'Excellence', '✦', 'Legacy', '✦'].map((text, j) => (
                <span
                  key={j}
                  style={{
                    fontFamily: '"Playfair Display", serif',
                    fontSize: text === '✦' ? '1.2rem' : (isMobile ? '2rem' : '3rem'),
                    fontWeight: text === '✦' ? 400 : 500,
                    letterSpacing: text === '✦' ? 0 : '0.1em',
                    color: text === '✦' ? c.accent : hexToRgba(c.silver, 0.2),
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
          padding: isMobile ? '5rem 1.5rem' : '10rem 5rem',
          position: 'relative',
        }}
      >
        {/* Section Header */}
        <div style={{
          textAlign: 'center',
          maxWidth: '700px',
          margin: `0 auto ${isMobile ? '4rem' : '6rem'}`,
        }}>
          <div style={{
            fontFamily: '"Raleway", sans-serif',
            fontSize: '0.7rem',
            fontWeight: 600,
            letterSpacing: '0.35em',
            color: c.accent,
            marginBottom: '1.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1rem',
          }}>
            <span style={{ width: 30, height: 1, background: c.accent }} />
            {t.services.overline}
            <span style={{ width: 30, height: 1, background: c.accent }} />
          </div>
          <h2 style={{
            fontSize: isMobile ? 'clamp(2.5rem, 10vw, 3.5rem)' : 'clamp(3rem, 7vw, 5rem)',
            fontWeight: 400,
            fontStyle: 'italic',
            margin: 0,
            lineHeight: 1.1,
            color: c.pearl,
          }}>
            {t.services.title}
          </h2>
          <p style={{
            marginTop: '1.5rem',
            fontSize: '1rem',
            lineHeight: 1.8,
            color: hexToRgba(c.pearlSoft, 0.6),
            fontFamily: '"Raleway", sans-serif',
            fontWeight: 400,
          }}>
            {t.services.subtitle}
          </p>
        </div>

        {/* Services Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
          gap: isMobile ? '1.5rem' : '2rem',
          maxWidth: '1200px',
          margin: '0 auto',
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
                background: hexToRgba(c.darkAlt, 0.6),
                borderRadius: '8px',
                border: `1px solid ${hexToRgba(c.silver, activeService === service.id ? 0.3 : 0.08)}`,
                overflow: 'hidden',
                transition: 'all 0.5s ease',
                position: 'relative',
              }}
            >
              {/* Service Image */}
              <div style={{
                height: isMobile ? 150 : 180,
                backgroundImage: `url(${serviceImages[i]})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                position: 'relative',
              }}>
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: `linear-gradient(180deg, transparent 0%, ${c.darkAlt} 100%)`,
                }} />
                <div style={{
                  position: 'absolute',
                  top: '1rem',
                  left: '1rem',
                  fontFamily: '"Raleway", sans-serif',
                  fontSize: '0.7rem',
                  fontWeight: 700,
                  color: c.accent,
                  letterSpacing: '0.1em',
                  background: hexToRgba(c.darker, 0.8),
                  padding: '0.5rem 1rem',
                  borderRadius: '4px',
                }}>{service.id}</div>
              </div>

              {/* Service Content */}
              <div style={{ padding: isMobile ? '1.5rem' : '2rem' }}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '1rem',
                }}>
                  <h3 style={{
                    fontSize: isMobile ? '1.4rem' : '1.6rem',
                    fontWeight: 500,
                    margin: 0,
                    fontStyle: 'italic',
                    transition: 'color 0.4s ease',
                    color: activeService === service.id ? c.accentLight : c.pearl,
                  }}>{service.name}</h3>
                  <span style={{
                    fontSize: '1.5rem',
                    color: activeService === service.id ? c.accent : hexToRgba(c.silver, 0.4),
                    transition: 'color 0.4s ease',
                  }}>{serviceIcons[i]}</span>
                </div>
                <p style={{
                  fontSize: isMobile ? '0.95rem' : '1rem',
                  lineHeight: 1.8,
                  color: hexToRgba(c.pearlSoft, 0.65),
                  fontFamily: '"Raleway", sans-serif',
                  fontWeight: 400,
                  margin: 0,
                }}>{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Investment Section */}
      <section
        id="investment"
        style={{
          padding: isMobile ? '5rem 1.5rem' : '10rem 5rem',
          background: `linear-gradient(180deg, transparent 0%, ${hexToRgba(c.accentDark, 0.08)} 50%, transparent 100%)`,
          position: 'relative',
        }}
      >
        <div className="hide-mobile" style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          fontFamily: '"Playfair Display", serif',
          fontSize: 'clamp(12rem, 35vw, 28rem)',
          fontWeight: 400,
          color: hexToRgba(c.silver, 0.03),
          letterSpacing: '0.08em',
          pointerEvents: 'none',
          whiteSpace: 'nowrap',
        }}>
          INVEST
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : '1fr 1.1fr',
          gap: isMobile ? '3rem' : '6rem',
          alignItems: 'center',
          position: 'relative',
          zIndex: 1,
          maxWidth: '1200px',
          margin: '0 auto',
        }}>
          <div style={{ textAlign: isMobile ? 'center' : 'left' }}>
            <div style={{
              fontFamily: '"Raleway", sans-serif',
              fontSize: '0.7rem',
              fontWeight: 600,
              letterSpacing: '0.35em',
              color: c.accent,
              marginBottom: '1.5rem',
            }}>
              {t.investment.overline}
            </div>
            <h2 style={{
              fontSize: isMobile ? 'clamp(2.5rem, 10vw, 3.5rem)' : 'clamp(3rem, 6vw, 4.5rem)',
              fontWeight: 400,
              margin: 0,
              lineHeight: 1.15,
            }}>
              <span style={{ display: 'block', fontStyle: 'italic', color: c.pearl }}>
                {t.investment.title1}
              </span>
              <span style={{
                display: 'block',
                background: `linear-gradient(90deg, ${c.silverLight}, ${c.silver}, ${c.accent})`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                {t.investment.title2}
              </span>
            </h2>
            <p style={{
              marginTop: '2rem',
              fontSize: isMobile ? '1rem' : '1.1rem',
              lineHeight: 2,
              color: hexToRgba(c.pearlSoft, 0.6),
              maxWidth: 420,
              fontFamily: '"Raleway", sans-serif',
              fontWeight: 400,
              margin: isMobile ? '2rem auto 0' : '2rem 0 0 0',
            }}>
              {t.investment.subtitle}
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
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
                  padding: isMobile ? '1.8rem' : '2.5rem',
                  background: activePlan === i
                    ? `linear-gradient(135deg, ${hexToRgba(c.accent, 0.15)} 0%, ${hexToRgba(c.accentDark, 0.08)} 100%)`
                    : hexToRgba(c.darkAlt, 0.6),
                  border: `1px solid ${hexToRgba(c.silver, activePlan === i ? 0.4 : 0.1)}`,
                  borderRadius: '8px',
                  display: 'grid',
                  gridTemplateColumns: '1fr auto',
                  alignItems: 'center',
                  gap: '1rem',
                  transition: 'all 0.4s ease',
                  transform: activePlan === i && !isMobile ? 'translateX(10px)' : 'translateX(0)',
                }}
              >
                <div>
                  <div style={{
                    fontFamily: '"Playfair Display", serif',
                    fontSize: isMobile ? '1.3rem' : '1.5rem',
                    fontWeight: 500,
                    letterSpacing: '0.08em',
                    color: activePlan === i ? c.accentLight : c.pearl,
                    transition: 'color 0.4s ease',
                  }}>{plan.name}</div>
                  <div style={{
                    fontFamily: '"Raleway", sans-serif',
                    fontSize: '0.75rem',
                    fontWeight: 400,
                    color: hexToRgba(c.pearlSoft, 0.55),
                    marginTop: '0.5rem',
                    letterSpacing: '0.03em',
                  }}>{plan.desc}</div>
                </div>
                <div style={{
                  fontFamily: '"Playfair Display", serif',
                  fontSize: isMobile ? '2.2rem' : '3rem',
                  fontWeight: 500,
                  fontStyle: 'italic',
                  background: `linear-gradient(135deg, ${c.silverLight}, ${c.accent})`,
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
          padding: isMobile ? '5rem 1.5rem' : '8rem 5rem',
          textAlign: 'center',
          position: 'relative',
          background: hexToRgba(c.darkAlt, 0.4),
        }}
      >
        <div style={{
          fontFamily: '"Raleway", sans-serif',
          fontSize: '0.7rem',
          fontWeight: 600,
          letterSpacing: '0.35em',
          color: c.accent,
          marginBottom: '3rem',
        }}>
          {t.testimonials.overline}
        </div>

        <div style={{
          maxWidth: 850,
          margin: '0 auto',
          position: 'relative',
          minHeight: 350,
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
              {/* Testimonial Image */}
              <div style={{
                width: 100,
                height: 100,
                borderRadius: '50%',
                margin: '0 auto 2rem',
                position: 'relative',
                overflow: 'hidden',
                border: `2px solid ${c.accent}`,
              }}>
                <img
                  src={testimonialImages[i]}
                  alt=""
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    filter: 'grayscale(30%)',
                  }}
                />
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: `linear-gradient(180deg, transparent 50%, ${hexToRgba(c.accent, 0.3)} 100%)`,
                }} />
              </div>

              <div style={{
                fontFamily: '"Playfair Display", serif',
                fontSize: '3.5rem',
                color: hexToRgba(c.accent, 0.35),
                marginBottom: '-0.5rem',
              }}>&ldquo;</div>

              <blockquote style={{
                fontFamily: '"Playfair Display", serif',
                fontSize: isMobile ? 'clamp(1.2rem, 5vw, 1.7rem)' : 'clamp(1.5rem, 3.5vw, 2rem)',
                fontStyle: 'italic',
                fontWeight: 400,
                lineHeight: 1.8,
                color: c.pearl,
                margin: 0,
              }}>
                {testimonial.quote}
              </blockquote>

              <div style={{
                marginTop: '2rem',
                fontFamily: '"Raleway", sans-serif',
                fontSize: '0.7rem',
                fontWeight: 700,
                letterSpacing: '0.25em',
                color: c.accent,
              }}>
                — {testimonial.author}
              </div>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '0.8rem',
          marginTop: '3rem',
        }}>
          {t.testimonials.items.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveTestimonial(i)}
              onMouseEnter={() => setCursorVariant('hover')}
              onMouseLeave={() => setCursorVariant('default')}
              style={{
                width: activeTestimonial === i ? 35 : 12,
                height: 12,
                borderRadius: 6,
                background: activeTestimonial === i
                  ? `linear-gradient(90deg, ${c.silver}, ${c.accent})`
                  : hexToRgba(c.silver, 0.3),
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
          padding: isMobile ? '5rem 1.5rem' : '8rem 5rem',
          position: 'relative',
        }}
      >
        <div style={{
          maxWidth: 850,
          margin: '0 auto',
        }}>
          <div style={{
            textAlign: 'center',
            marginBottom: '4rem',
          }}>
            <div style={{
              fontFamily: '"Raleway", sans-serif',
              fontSize: '0.7rem',
              fontWeight: 600,
              letterSpacing: '0.35em',
              color: c.accent,
              marginBottom: '1.5rem',
            }}>
              {t.faq.overline}
            </div>
            <h2 style={{
              fontSize: isMobile ? 'clamp(2rem, 8vw, 2.8rem)' : 'clamp(2.5rem, 5vw, 3.5rem)',
              fontWeight: 400,
              fontStyle: 'italic',
              margin: 0,
              color: c.pearl,
            }}>
              {t.faq.title}
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
            {t.faq.items.map((faq, i) => (
              <div
                key={i}
                style={{
                  background: hexToRgba(c.darkAlt, 0.6),
                  borderRadius: '8px',
                  border: `1px solid ${hexToRgba(c.silver, activeFaq === i ? 0.3 : 0.08)}`,
                  overflow: 'hidden',
                  transition: 'border-color 0.3s ease',
                }}
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  onMouseEnter={() => setCursorVariant('hover')}
                  onMouseLeave={() => setCursorVariant('default')}
                  style={{
                    width: '100%',
                    padding: isMobile ? '1.5rem' : '1.8rem 2rem',
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
                    fontFamily: '"Playfair Display", serif',
                    fontSize: isMobile ? '1.05rem' : '1.2rem',
                    fontWeight: 500,
                    color: activeFaq === i ? c.accentLight : c.pearl,
                    transition: 'color 0.3s ease',
                  }}>
                    {faq.q}
                  </span>
                  <span style={{
                    fontSize: '1.4rem',
                    color: c.accent,
                    transform: activeFaq === i ? 'rotate(45deg)' : 'rotate(0)',
                    transition: 'transform 0.4s ease',
                    flexShrink: 0,
                    fontWeight: 300,
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
                    lineHeight: 1.85,
                    color: hexToRgba(c.pearlSoft, 0.7),
                    fontFamily: '"Raleway", sans-serif',
                    fontWeight: 400,
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
          padding: isMobile ? '5rem 1.5rem' : '10rem 5rem',
          position: 'relative',
          background: `linear-gradient(180deg, transparent 0%, ${hexToRgba(c.accentDark, 0.1)} 100%)`,
        }}
      >
        {/* Background Image */}
        <div className="hide-mobile" style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '40%',
          height: '100%',
          backgroundImage: `url(${images.apply})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.15,
          maskImage: 'linear-gradient(to left, black 0%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to left, black 0%, transparent 100%)',
        }} />

        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
          gap: isMobile ? '3rem' : '6rem',
          maxWidth: '1200px',
          margin: '0 auto',
          position: 'relative',
          zIndex: 1,
        }}>
          <div style={{ textAlign: isMobile ? 'center' : 'left' }}>
            <div style={{
              fontFamily: '"Raleway", sans-serif',
              fontSize: '0.7rem',
              fontWeight: 600,
              letterSpacing: '0.35em',
              color: c.accent,
              marginBottom: '1.5rem',
            }}>
              {t.apply.overline}
            </div>
            <h2 style={{
              fontSize: isMobile ? 'clamp(2.5rem, 10vw, 3.5rem)' : 'clamp(3rem, 7vw, 5rem)',
              fontWeight: 400,
              margin: 0,
              lineHeight: 1.1,
            }}>
              <span style={{ display: 'block', fontStyle: 'italic', color: c.pearl }}>{t.apply.title1}</span>
              <span style={{
                display: 'block',
                background: `linear-gradient(90deg, ${c.silverLight}, ${c.silver}, ${c.accentLight})`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>{t.apply.title2}</span>
            </h2>
            <p style={{
              marginTop: '2rem',
              fontSize: isMobile ? '1rem' : '1.1rem',
              lineHeight: 2,
              color: hexToRgba(c.pearlSoft, 0.6),
              maxWidth: 420,
              fontFamily: '"Raleway", sans-serif',
              fontWeight: 400,
              margin: isMobile ? '2rem auto 0' : '2rem 0 0 0',
            }}>
              {t.apply.subtitle}
            </p>

            {/* Stats */}
            <div className="hide-mobile" style={{
              display: 'flex',
              gap: '3rem',
              marginTop: '4rem',
              paddingTop: '2.5rem',
              borderTop: `1px solid ${hexToRgba(c.silver, 0.15)}`,
            }}>
              {t.apply.stats.map((stat, i) => (
                <div key={i}>
                  <div style={{
                    fontFamily: '"Playfair Display", serif',
                    fontSize: '2rem',
                    fontWeight: 500,
                    fontStyle: 'italic',
                    background: `linear-gradient(135deg, ${c.silver}, ${c.accent})`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}>{stat.value}</div>
                  <div style={{
                    fontFamily: '"Raleway", sans-serif',
                    fontSize: '0.65rem',
                    fontWeight: 600,
                    color: hexToRgba(c.pearlSoft, 0.5),
                    letterSpacing: '0.08em',
                    marginTop: '0.5rem',
                  }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div style={{
            background: hexToRgba(c.darkAlt, 0.8),
            border: `1px solid ${hexToRgba(c.silver, 0.15)}`,
            borderRadius: '12px',
            padding: isMobile ? '2.5rem' : '3.5rem',
            position: 'relative',
            overflow: 'hidden',
            backdropFilter: 'blur(20px)',
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
              borderRadius: '10px',
            }}>
              <div style={{
                width: 90,
                height: 90,
                borderRadius: '50%',
                background: `linear-gradient(135deg, ${c.silver}, ${c.accent})`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '2.5rem',
                color: c.darker,
              }}>
                ✓
              </div>
              <div style={{
                fontFamily: '"Playfair Display", serif',
                fontSize: '1.4rem',
                fontWeight: 500,
                letterSpacing: '0.15em',
                color: c.accentLight,
              }}>
                {t.apply.form.success}
              </div>
              <p style={{
                fontFamily: '"Raleway", sans-serif',
                fontSize: '0.85rem',
                fontWeight: 400,
                color: hexToRgba(c.pearlSoft, 0.7),
                textAlign: 'center',
              }}>
                {t.apply.form.successMsg}
              </p>
            </div>

            <form onSubmit={handleFormSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.8rem' }}>
              {[
                { label: t.apply.form.handle, placeholder: t.apply.form.handlePlaceholder, key: 'handle' as const },
                { label: t.apply.form.platform, placeholder: t.apply.form.platformPlaceholder, key: 'platform' as const },
                { label: t.apply.form.following, placeholder: t.apply.form.followingPlaceholder, key: 'following' as const },
                { label: t.apply.form.contact, placeholder: t.apply.form.contactPlaceholder, key: 'contact' as const },
              ].map((field) => (
                <div key={field.key}>
                  <label style={{
                    display: 'block',
                    fontFamily: '"Raleway", sans-serif',
                    fontSize: '0.65rem',
                    fontWeight: 700,
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    color: c.accent,
                    marginBottom: '0.8rem',
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
                      padding: '1rem 0',
                      background: 'transparent',
                      border: 'none',
                      borderBottom: `1px solid ${focusedInput === field.key ? c.accent : hexToRgba(c.silver, 0.25)}`,
                      color: c.pearl,
                      fontSize: '1.1rem',
                      fontFamily: '"Playfair Display", serif',
                      fontStyle: 'italic',
                      fontWeight: 400,
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
                  padding: '1.4rem 3rem',
                  background: `linear-gradient(135deg, ${c.silver} 0%, ${c.accent} 100%)`,
                  color: c.darker,
                  border: 'none',
                  borderRadius: '6px',
                  fontSize: '0.75rem',
                  fontFamily: '"Raleway", sans-serif',
                  fontWeight: 700,
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  transition: 'transform 0.4s ease, box-shadow 0.4s ease',
                  boxShadow: `0 20px 60px ${hexToRgba(c.accent, 0.25)}`,
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.boxShadow = `0 30px 80px ${hexToRgba(c.accent, 0.35)}`;
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = `0 20px 60px ${hexToRgba(c.accent, 0.25)}`;
                }}
              >
                {t.apply.form.submit}
              </button>

              <p style={{
                fontFamily: '"Raleway", sans-serif',
                fontSize: '0.6rem',
                fontWeight: 500,
                color: hexToRgba(c.pearlSoft, 0.45),
                letterSpacing: '0.12em',
                textAlign: 'center',
              }}>
                ✦ {t.apply.form.confidential} ✦ {t.apply.form.response} ✦
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        padding: isMobile ? '4rem 1.5rem' : '5rem 5rem',
        borderTop: `1px solid ${hexToRgba(c.silver, 0.1)}`,
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : '1fr auto auto',
        gap: isMobile ? '2rem' : '4rem',
        alignItems: isMobile ? 'center' : 'end',
        textAlign: isMobile ? 'center' : 'left',
        background: hexToRgba(c.darker, 0.6),
      }}>
        <div>
          <div style={{
            fontFamily: '"Playfair Display", serif',
            fontSize: isMobile ? '1.5rem' : '2rem',
            fontWeight: 500,
            letterSpacing: '0.15em',
            background: `linear-gradient(135deg, ${c.silverLight}, ${c.accent})`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            marginBottom: '1rem',
          }}>SILVER REIGN</div>
          <div style={{
            fontFamily: '"Raleway", sans-serif',
            fontSize: '0.6rem',
            fontWeight: 500,
            letterSpacing: '0.18em',
            color: hexToRgba(c.pearlSoft, 0.45),
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
                fontFamily: '"Raleway", sans-serif',
                fontSize: '0.65rem',
                fontWeight: 600,
                letterSpacing: '0.15em',
                color: hexToRgba(c.pearlSoft, 0.5),
                textDecoration: 'none',
                textTransform: 'uppercase',
                transition: 'color 0.3s ease',
              }}
              onMouseOver={(e) => e.currentTarget.style.color = c.accent}
              onMouseOut={(e) => e.currentTarget.style.color = hexToRgba(c.pearlSoft, 0.5)}
            >
              {link}
            </a>
          ))}
        </div>

        <div style={{
          fontFamily: '"Raleway", sans-serif',
          fontSize: '0.6rem',
          fontWeight: 700,
          color: c.accent,
          letterSpacing: '0.12em',
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
          width: isMobile ? 55 : 65,
          height: isMobile ? 55 : 65,
          borderRadius: '50%',
          background: `linear-gradient(135deg, ${c.silver}, ${c.accent})`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textDecoration: 'none',
          boxShadow: `0 15px 50px ${hexToRgba(c.accent, 0.4)}`,
          zIndex: 90,
          transition: 'transform 0.4s ease, box-shadow 0.4s ease',
          animation: 'borderGlow 3s ease-in-out infinite',
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.transform = 'scale(1.1)';
          e.currentTarget.style.boxShadow = `0 20px 60px ${hexToRgba(c.accent, 0.5)}`;
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.boxShadow = `0 15px 50px ${hexToRgba(c.accent, 0.4)}`;
        }}
      >
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke={c.darker} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 2L11 13" />
          <path d="M22 2L15 22L11 13L2 9L22 2Z" />
        </svg>
      </a>
    </div>
  );
}
