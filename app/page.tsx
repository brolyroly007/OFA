'use client';

import React, { useState, useEffect, useRef } from 'react';

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

  // Refs for scroll animations
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  useEffect(() => {
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

    // Observe all sections
    setTimeout(() => {
      document.querySelectorAll('section[id]').forEach((section) => {
        observer.observe(section);
      });
    }, 100);

    // Auto-rotate testimonials
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
      // Reset after animation
      setTimeout(() => {
        setFormData({ handle: '', platform: '', following: '', contact: '' });
      }, 3000);
    }
  };

  const services = [
    { id: '01', name: 'Brand Architecture', desc: 'Construimos tu identidad digital en un imperio irresistible. Posicionamiento estratégico que captura atención y convierte admiradores en fans devotos.', icon: '◇' },
    { id: '02', name: 'Revenue Alchemy', desc: 'Transformamos engagement en riqueza. Nuestros sistemas probados multiplican tus ingresos a través de monetización y estrategias de pricing premium.', icon: '◈' },
    { id: '03', name: 'Content Direction', desc: 'Calidad cinematográfica con intención estratégica. Dirigimos contenido que detiene scrolls, despierta deseo y construye conexiones duraderas.', icon: '◆' },
    { id: '04', name: 'Growth Engineering', desc: 'Dominio algorítmico y psicología humana. Diseñamos momentos virales y crecimiento sostenible en cada plataforma que importa.', icon: '◊' },
  ];

  const testimonials = [
    { quote: "No solo hicieron crecer mi cuenta. Transformaron mi vida entera. De $3k a $89k mensuales en menos de 6 meses.", author: "TOP 0.1% CREATOR", avatar: "S" },
    { quote: "El equipo de Luxor entiende exactamente lo que funciona. Mi engagement se triplicó en el primer mes.", author: "INFLUENCER VERIFICADA", avatar: "M" },
    { quote: "Finalmente encontré un equipo que ve el potencial que yo veía. Los resultados hablan por sí solos.", author: "CONTENT CREATOR", avatar: "A" },
  ];

  const faqs = [
    { q: "¿Cuánto tiempo toma ver resultados?", a: "La mayoría de nuestros creadores ven mejoras significativas en las primeras 2-4 semanas. Resultados transformadores típicamente ocurren entre el mes 2 y 3." },
    { q: "¿Qué plataformas manejan?", a: "Nos especializamos en todas las plataformas principales: OnlyFans, Fansly, Instagram, TikTok, Twitter/X, y más. Creamos estrategias cross-platform personalizadas." },
    { q: "¿Cómo funciona el modelo de comisión?", a: "Sin costos iniciales. Solo ganamos cuando tú ganas. Nuestras comisiones van del 25% al 35% dependiendo del tier de servicio que elijas." },
    { q: "¿Qué hace diferente a Luxor?", a: "No somos otra agencia genérica. Somos arquitectos de imperios. Cada estrategia es personalizada, cada decisión está basada en datos, y tu éxito es nuestra obsesión." },
  ];

  const hexToRgba = (hex: string, alpha: number) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  };

  const c = {
    black: '#050505',
    blackWarm: '#0a0908',
    gold: '#c6a355',
    goldLight: '#e4c780',
    goldPale: '#f5ecd7',
    cream: '#faf8f3',
    sand: '#d4c5a9',
    bronze: '#8b7355',
    charcoal: '#1a1918',
  };

  const cursorSize = cursorVariant === 'hover' ? 100 : cursorVariant === 'text' ? 150 : 20;

  const sectionStyle = (id: string): React.CSSProperties => ({
    opacity: visibleSections.has(id) ? 1 : 0,
    transform: visibleSections.has(id) ? 'translateY(0)' : 'translateY(60px)',
    transition: 'opacity 1s cubic-bezier(0.16, 1, 0.3, 1), transform 1s cubic-bezier(0.16, 1, 0.3, 1)',
  });

  // Loading Screen
  if (!showContent) {
    return (
      <div style={{
        position: 'fixed',
        inset: 0,
        background: c.black,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        gap: '2rem',
        zIndex: 10000,
      }}>
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Bebas+Neue&family=Space+Mono:wght@400;700&display=swap');

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

          @keyframes fadeOut {
            0% { opacity: 1; }
            100% { opacity: 0; }
          }

          @keyframes pulse {
            0%, 100% { opacity: 0.3; }
            50% { opacity: 1; }
          }
        `}</style>

        <div style={{
          fontFamily: '"Bebas Neue", sans-serif',
          fontSize: 'clamp(3rem, 10vw, 6rem)',
          letterSpacing: '0.4em',
          color: c.gold,
          animation: loaded ? 'logoReveal 1s ease forwards' : 'none',
          opacity: 0,
        }}>
          LUXOR
        </div>

        <div style={{
          width: 200,
          height: 1,
          background: `linear-gradient(90deg, transparent, ${c.gold}, transparent)`,
          animation: loaded ? 'lineExpand 1s ease 0.3s forwards' : 'none',
          transform: 'scaleX(0)',
        }} />

        <div style={{
          fontFamily: '"Space Mono", monospace',
          fontSize: '0.6rem',
          letterSpacing: '0.4em',
          color: hexToRgba(c.cream, 0.4),
          animation: 'pulse 1.5s ease infinite',
        }}>
          LOADING EXCELLENCE
        </div>
      </div>
    );
  }

  return (
    <div
      onMouseMove={handleMouseMove}
      style={{
        minHeight: '100vh',
        background: c.black,
        color: c.cream,
        fontFamily: '"EB Garamond", Garamond, serif',
        cursor: isMobile ? 'auto' : 'none',
        overflowX: 'hidden',
        position: 'relative',
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Bebas+Neue&family=Space+Mono:wght@400;700&display=swap');

        * {
          cursor: ${isMobile ? 'auto' : 'none'} !important;
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        ::selection {
          background: rgba(198, 163, 85, 0.4);
          color: #faf8f3;
        }

        input::placeholder, textarea::placeholder {
          color: rgba(198, 163, 85, 0.3);
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

        @keyframes slideIn {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }

        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }

        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-33.33%); }
        }

        @keyframes borderGlow {
          0%, 100% { box-shadow: 0 0 20px rgba(198, 163, 85, 0.1); }
          50% { box-shadow: 0 0 40px rgba(198, 163, 85, 0.3); }
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
          .mobile-full { width: 100% !important; max-width: 100% !important; }
          .mobile-padding { padding: 1.5rem !important; }
          .mobile-text-center { text-align: center !important; }
          .mobile-gap { gap: 2rem !important; }
        }

        /* Scrollbar styling */
        ::-webkit-scrollbar {
          width: 8px;
        }
        ::-webkit-scrollbar-track {
          background: ${c.black};
        }
        ::-webkit-scrollbar-thumb {
          background: ${hexToRgba(c.gold, 0.3)};
          border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: ${hexToRgba(c.gold, 0.5)};
        }
      `}</style>

      {/* Custom Cursor - Desktop only */}
      {!isMobile && (
        <>
          <div style={{
            position: 'fixed',
            left: mousePos.x,
            top: mousePos.y,
            width: cursorSize,
            height: cursorSize,
            borderRadius: '50%',
            border: `1px solid ${hexToRgba(c.gold, cursorVariant === 'default' ? 0.6 : 0.3)}`,
            background: cursorVariant !== 'default'
              ? `radial-gradient(circle, ${hexToRgba(c.gold, 0.1)} 0%, transparent 70%)`
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
            background: c.gold,
            pointerEvents: 'none',
            zIndex: 10000,
            transform: 'translate(-50%, -50%)',
          }} />
        </>
      )}

      {/* Ambient Background */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: `
          radial-gradient(ellipse 80% 50% at 20% 20%, ${hexToRgba(c.gold, 0.04)} 0%, transparent 50%),
          radial-gradient(ellipse 60% 40% at 80% 80%, ${hexToRgba(c.bronze, 0.03)} 0%, transparent 50%),
          radial-gradient(ellipse 100% 100% at 50% 0%, ${hexToRgba(c.gold, 0.02)} 0%, transparent 40%)
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
          linear-gradient(${hexToRgba(c.gold, 0.02)} 1px, transparent 1px),
          linear-gradient(90deg, ${hexToRgba(c.gold, 0.02)} 1px, transparent 1px)
        `,
        backgroundSize: '100px 100px',
        pointerEvents: 'none',
        opacity: 0.5,
      }} />

      {/* Floating Geometric Elements - Desktop only */}
      <div className="hide-mobile" style={{
        position: 'fixed',
        top: '15%',
        right: '10%',
        width: 300,
        height: 300,
        border: `1px solid ${hexToRgba(c.gold, 0.08)}`,
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
        border: `1px solid ${hexToRgba(c.gold, 0.06)}`,
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
        padding: isMobile ? '1.5rem' : '2rem 4rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        zIndex: 100,
        background: `linear-gradient(180deg, ${c.black} 0%, ${hexToRgba(c.black, 0.8)} 50%, transparent 100%)`,
        backdropFilter: 'blur(20px)',
      }}>
        <div
          onMouseEnter={() => setCursorVariant('hover')}
          onMouseLeave={() => setCursorVariant('default')}
          className="animate-in stagger-1"
          style={{
            fontFamily: '"Bebas Neue", sans-serif',
            fontSize: isMobile ? '1.4rem' : '1.8rem',
            letterSpacing: '0.3em',
            color: c.gold,
          }}
        >
          LUXOR
        </div>
        <div style={{
          display: 'flex',
          gap: isMobile ? '1.5rem' : '4rem',
          fontFamily: '"Space Mono", monospace',
          fontSize: isMobile ? '0.55rem' : '0.65rem',
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
        }}>
          {['Services', 'Investment', 'Apply'].map((item, i) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onMouseEnter={() => setCursorVariant('hover')}
              onMouseLeave={() => setCursorVariant('default')}
              className={`animate-in stagger-${i + 2}`}
              style={{
                color: hexToRgba(c.cream, 0.5),
                textDecoration: 'none',
                transition: 'color 0.4s ease',
                position: 'relative',
              }}
              onMouseOver={(e) => e.currentTarget.style.color = c.gold}
              onMouseOut={(e) => e.currentTarget.style.color = hexToRgba(c.cream, 0.5)}
            >
              {item}
            </a>
          ))}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        padding: isMobile ? '6rem 1.5rem 4rem' : '0 4rem',
        position: 'relative',
      }}>
        <div style={{
          maxWidth: '900px',
          position: 'relative',
          zIndex: 2,
          width: '100%',
        }}>
          {/* Overline */}
          <div
            className="animate-in stagger-1"
            style={{
              fontFamily: '"Space Mono", monospace',
              fontSize: isMobile ? '0.5rem' : '0.6rem',
              letterSpacing: '0.5em',
              color: c.gold,
              marginBottom: isMobile ? '2rem' : '3rem',
              display: 'flex',
              alignItems: 'center',
              gap: '1.5rem',
            }}
          >
            <span style={{
              width: isMobile ? 40 : 60,
              height: 1,
              background: `linear-gradient(90deg, ${c.gold}, transparent)`,
              display: 'block',
            }} />
            ELITE CREATOR MANAGEMENT
          </div>

          {/* Main Headline */}
          <h1 style={{
            fontSize: isMobile ? 'clamp(3rem, 15vw, 5rem)' : 'clamp(4rem, 12vw, 10rem)',
            fontWeight: 400,
            lineHeight: 0.85,
            margin: 0,
            fontFamily: '"EB Garamond", serif',
          }}>
            <span
              className="animate-in stagger-2"
              style={{
                display: 'block',
                fontStyle: 'italic',
                color: hexToRgba(c.cream, 0.9),
              }}
            >Where</span>
            <span
              className="animate-in stagger-3"
              style={{
                display: 'block',
                marginLeft: isMobile ? '10%' : '15%',
                fontWeight: 500,
                background: `linear-gradient(135deg, ${c.goldLight} 0%, ${c.gold} 40%, ${c.bronze} 100%)`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >legends</span>
            <span
              className="animate-in stagger-4"
              style={{
                display: 'block',
                marginLeft: isMobile ? '5%' : '8%',
                fontStyle: 'italic',
                color: hexToRgba(c.cream, 0.7),
              }}
            >are made.</span>
          </h1>

          {/* Subtext */}
          <p
            className="animate-in stagger-5"
            style={{
              marginTop: isMobile ? '3rem' : '5rem',
              maxWidth: '420px',
              fontSize: isMobile ? '1rem' : '1.15rem',
              lineHeight: 2,
              color: hexToRgba(c.cream, 0.5),
              fontWeight: 400,
            }}
          >
            No gestionamos creadores. Arquitectamos imperios. Para los pocos ambiciosos listos para dominar, no solo participar.
          </p>

          {/* CTA */}
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
                background: 'transparent',
                color: c.gold,
                textDecoration: 'none',
                fontSize: '0.7rem',
                fontFamily: '"Space Mono", monospace',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                border: `1px solid ${c.gold}`,
                position: 'relative',
                overflow: 'hidden',
                transition: 'color 0.4s ease, background 0.4s ease, transform 0.3s ease',
                display: 'inline-block',
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = c.gold;
                e.currentTarget.style.color = c.black;
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.color = c.gold;
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              Comienza Tu Ascenso
            </a>
            <span style={{
              fontFamily: '"Space Mono", monospace',
              fontSize: '0.55rem',
              color: hexToRgba(c.cream, 0.25),
              letterSpacing: '0.1em',
            }}>
              Solo 3 lugares disponibles
            </span>
          </div>
        </div>

        {/* Hero Visual - Large ornate circle - Desktop only */}
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
              <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor={c.goldLight} stopOpacity="0.3" />
                <stop offset="50%" stopColor={c.gold} stopOpacity="0.15" />
                <stop offset="100%" stopColor={c.bronze} stopOpacity="0.05" />
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            <circle cx="200" cy="200" r="180" fill="none" stroke={c.gold} strokeWidth="0.3" strokeOpacity="0.2" />
            <circle cx="200" cy="200" r="170" fill="none" stroke={c.gold} strokeWidth="0.5" strokeOpacity="0.1" />
            <circle cx="200" cy="200" r="140" fill="none" stroke={c.gold} strokeWidth="0.3" strokeOpacity="0.15" strokeDasharray="4 8" />
            <circle cx="200" cy="200" r="100" fill="url(#goldGrad)" />
            <circle cx="200" cy="200" r="100" fill="none" stroke={c.gold} strokeWidth="0.5" strokeOpacity="0.3" />
            <polygon points="200,120 260,230 140,230" fill="none" stroke={c.gold} strokeWidth="0.5" strokeOpacity="0.4" />
            <polygon points="200,140 240,210 160,210" fill={hexToRgba(c.gold, 0.05)} stroke={c.gold} strokeWidth="0.3" strokeOpacity="0.2" />
            <ellipse cx="200" cy="175" rx="25" ry="12" fill="none" stroke={c.gold} strokeWidth="0.5" strokeOpacity="0.5" filter="url(#glow)" />
            <circle cx="200" cy="175" r="6" fill={c.gold} fillOpacity="0.3" />
            {[0, 45, 90, 135, 180, 225, 270, 315].map(angle => (
              <line
                key={angle}
                x1="200" y1="20" x2="200" y2="40"
                stroke={c.gold} strokeWidth="0.5" strokeOpacity="0.3"
                transform={`rotate(${angle} 200 200)`}
              />
            ))}
            {[0, 90, 180, 270].map(angle => (
              <g key={angle} transform={`rotate(${angle} 200 200)`}>
                <path d="M200,25 L210,35 L200,45 L190,35 Z" fill="none" stroke={c.gold} strokeWidth="0.3" strokeOpacity="0.4" />
              </g>
            ))}
          </svg>

          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '30%',
            height: '30%',
            background: `radial-gradient(circle, ${hexToRgba(c.gold, 0.15)} 0%, transparent 70%)`,
            filter: 'blur(40px)',
            animation: 'pulse 4s ease-in-out infinite',
          }} />
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
            background: `linear-gradient(180deg, ${c.gold}, transparent)`,
          }} />
          <span style={{
            fontFamily: '"Space Mono", monospace',
            fontSize: '0.5rem',
            letterSpacing: '0.3em',
            color: hexToRgba(c.cream, 0.3),
            textTransform: 'uppercase',
            writingMode: 'vertical-rl',
          }}>Scroll</span>
        </div>

        {/* Stats floating */}
        <div className="hide-mobile" style={{
          position: 'absolute',
          bottom: '15%',
          right: '8%',
          textAlign: 'right',
        }}>
          <div style={{
            fontFamily: '"EB Garamond", serif',
            fontSize: '5rem',
            fontWeight: 400,
            fontStyle: 'italic',
            lineHeight: 1,
            background: `linear-gradient(135deg, ${c.cream} 0%, ${c.gold} 100%)`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>$47M</div>
          <div style={{
            fontFamily: '"Space Mono", monospace',
            fontSize: '0.5rem',
            letterSpacing: '0.3em',
            color: hexToRgba(c.gold, 0.6),
            textTransform: 'uppercase',
            marginTop: '0.5rem',
          }}>Generados en 2024</div>
        </div>
      </section>

      {/* Stats Bar - Mobile */}
      {isMobile && (
        <section style={{
          padding: '3rem 1.5rem',
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1rem',
          borderTop: `1px solid ${hexToRgba(c.gold, 0.1)}`,
          borderBottom: `1px solid ${hexToRgba(c.gold, 0.1)}`,
        }}>
          {[
            { value: '$47M', label: 'Generados' },
            { value: '200+', label: 'Creadores' },
            { value: '98%', label: 'Retención' },
          ].map((stat, i) => (
            <div key={i} style={{ textAlign: 'center' }}>
              <div style={{
                fontFamily: '"EB Garamond", serif',
                fontSize: '1.8rem',
                fontStyle: 'italic',
                color: c.gold,
              }}>{stat.value}</div>
              <div style={{
                fontFamily: '"Space Mono", monospace',
                fontSize: '0.45rem',
                color: hexToRgba(c.cream, 0.4),
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
        borderTop: `1px solid ${hexToRgba(c.gold, 0.1)}`,
        borderBottom: `1px solid ${hexToRgba(c.gold, 0.1)}`,
        overflow: 'hidden',
        position: 'relative',
      }}>
        <div style={{
          display: 'flex',
          gap: isMobile ? '3rem' : '6rem',
          animation: 'marquee 30s linear infinite',
          whiteSpace: 'nowrap',
        }}>
          {[...Array(3)].map((_, i) => (
            <div key={i} style={{ display: 'flex', gap: isMobile ? '3rem' : '6rem' }}>
              {['Strategy', '\u25C6', 'Growth', '\u25C6', 'Revenue', '\u25C6', 'Excellence', '\u25C6', 'Legacy', '\u25C6'].map((text, j) => (
                <span
                  key={j}
                  style={{
                    fontFamily: text === '\u25C6' ? 'serif' : '"Bebas Neue", sans-serif',
                    fontSize: text === '\u25C6' ? '1rem' : (isMobile ? '2rem' : '3rem'),
                    letterSpacing: text === '\u25C6' ? 0 : '0.2em',
                    color: text === '\u25C6' ? c.gold : hexToRgba(c.cream, 0.15),
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
              fontFamily: '"Space Mono", monospace',
              fontSize: '0.55rem',
              letterSpacing: '0.4em',
              color: c.gold,
              marginBottom: '2rem',
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
            }}>
              <span style={{ width: 40, height: 1, background: c.gold }} />
              LO QUE HACEMOS
            </div>
            <h2 style={{
              fontSize: isMobile ? 'clamp(2.5rem, 10vw, 4rem)' : 'clamp(3rem, 8vw, 6rem)',
              fontWeight: 400,
              fontStyle: 'italic',
              margin: 0,
              lineHeight: 1,
            }}>
              Nuestro arte.
            </h2>
          </div>
          <p className="hide-mobile" style={{
            maxWidth: 350,
            fontSize: '0.95rem',
            lineHeight: 2,
            color: hexToRgba(c.cream, 0.4),
            textAlign: 'right',
            paddingTop: '3rem',
          }}>
            Cuatro pilares de excelencia.<br />
            Una búsqueda implacable de grandeza.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
          gap: '1px',
          background: hexToRgba(c.gold, 0.1),
        }}>
          {services.map((service, i) => (
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
                background: c.black,
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
                background: `radial-gradient(circle at ${i % 2 === 0 ? '0% 100%' : '100% 100%'}, ${hexToRgba(c.gold, 0.08)} 0%, transparent 60%)`,
                opacity: activeService === service.id ? 1 : 0,
                transition: 'opacity 0.6s ease',
              }} />

              <div style={{ position: 'relative', zIndex: 1, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <span style={{
                  fontFamily: '"Space Mono", monospace',
                  fontSize: '0.6rem',
                  color: c.gold,
                  opacity: 0.5,
                }}>{service.id}</span>
                <span style={{
                  fontSize: '1.5rem',
                  color: activeService === service.id ? c.gold : hexToRgba(c.gold, 0.3),
                  transition: 'color 0.4s ease',
                }}>{service.icon}</span>
              </div>

              <div style={{ position: 'relative', zIndex: 1 }}>
                <h3 style={{
                  fontSize: isMobile ? '1.5rem' : 'clamp(1.8rem, 4vw, 2.5rem)',
                  fontWeight: 400,
                  margin: '0 0 1.5rem 0',
                  fontStyle: 'italic',
                  transition: 'color 0.4s ease',
                  color: activeService === service.id ? c.gold : c.cream,
                }}>{service.name}</h3>
                <p style={{
                  fontSize: isMobile ? '0.85rem' : '0.9rem',
                  lineHeight: 1.9,
                  color: hexToRgba(c.cream, 0.45),
                  maxWidth: 400,
                  transition: 'opacity 0.6s ease, transform 0.6s ease',
                  opacity: activeService === service.id || isMobile ? 1 : 0.6,
                  transform: activeService === service.id ? 'translateY(0)' : 'translateY(10px)',
                }}>{service.desc}</p>
              </div>

              <div className="hide-mobile" style={{
                position: 'absolute',
                top: '2rem',
                right: '2rem',
                width: 40,
                height: 40,
                border: `1px solid ${hexToRgba(c.gold, activeService === service.id ? 0.4 : 0.1)}`,
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
          background: `linear-gradient(180deg, transparent 0%, ${hexToRgba(c.gold, 0.02)} 50%, transparent 100%)`,
          position: 'relative',
          ...sectionStyle('investment'),
        }}
      >
        <div className="hide-mobile" style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          fontFamily: '"Bebas Neue", sans-serif',
          fontSize: 'clamp(15rem, 40vw, 35rem)',
          color: hexToRgba(c.gold, 0.03),
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
              fontFamily: '"Space Mono", monospace',
              fontSize: '0.55rem',
              letterSpacing: '0.4em',
              color: c.gold,
              marginBottom: '2rem',
            }}>
              MODELO DE PARTNERSHIP
            </div>
            <h2 style={{
              fontSize: isMobile ? 'clamp(2.5rem, 10vw, 4rem)' : 'clamp(3rem, 7vw, 5rem)',
              fontWeight: 400,
              margin: 0,
              lineHeight: 1.1,
            }}>
              <span style={{ display: 'block', fontStyle: 'italic', color: hexToRgba(c.cream, 0.6) }}>
                Prosperamos
              </span>
              <span style={{
                display: 'block',
                background: `linear-gradient(90deg, ${c.goldLight}, ${c.gold})`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                juntos.
              </span>
            </h2>
            <p style={{
              marginTop: '2rem',
              fontSize: isMobile ? '0.9rem' : '1rem',
              lineHeight: 2.2,
              color: hexToRgba(c.cream, 0.4),
              maxWidth: 380,
            }}>
              Cero costos iniciales. Cero tarifas ocultas. Nuestro éxito está directamente ligado al tuyo — la máxima alineación de intereses.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
            {[
              { name: 'Ascendant', rate: '35%', desc: 'Gestión completa para estrellas en ascenso', features: ['Chat 24/7', 'Estrategia de contenido', 'Crecimiento social'] },
              { name: 'Sovereign', rate: '30%', desc: 'Para creadores establecidos ($15k+/mes)', features: ['Soporte prioritario', 'Analytics avanzados', 'Brand partnerships'] },
              { name: 'Dynasty', rate: '25%', desc: 'Tier elite para top performers ($50k+)', features: ['Equipo dedicado', 'Estrategias custom', 'Experiencias VIP'] },
            ].map((plan, i) => (
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
                    ? `linear-gradient(135deg, ${hexToRgba(c.gold, 0.12)} 0%, ${hexToRgba(c.bronze, 0.05)} 100%)`
                    : hexToRgba(c.charcoal, 0.5),
                  border: `1px solid ${hexToRgba(c.gold, activePlan === i ? 0.3 : 0.08)}`,
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
                    fontFamily: '"Bebas Neue", sans-serif',
                    fontSize: isMobile ? '1.2rem' : '1.4rem',
                    letterSpacing: '0.15em',
                    color: activePlan === i ? c.gold : c.cream,
                    transition: 'color 0.4s ease',
                  }}>{plan.name}</div>
                  <div style={{
                    fontFamily: '"Space Mono", monospace',
                    fontSize: '0.5rem',
                    color: hexToRgba(c.cream, 0.35),
                    marginTop: '0.5rem',
                    letterSpacing: '0.05em',
                  }}>{plan.desc}</div>
                </div>
                <div style={{
                  fontFamily: '"EB Garamond", serif',
                  fontSize: isMobile ? '2.5rem' : '3.5rem',
                  fontStyle: 'italic',
                  background: `linear-gradient(135deg, ${c.goldLight}, ${c.gold})`,
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
          ...sectionStyle('testimonials'),
        }}
      >
        <div style={{
          fontFamily: '"Space Mono", monospace',
          fontSize: '0.55rem',
          letterSpacing: '0.4em',
          color: c.gold,
          marginBottom: '3rem',
        }}>
          HISTORIAS DE ÉXITO
        </div>

        <div style={{
          maxWidth: 800,
          margin: '0 auto',
          position: 'relative',
          minHeight: 250,
        }}>
          {testimonials.map((testimonial, i) => (
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
                width: 60,
                height: 60,
                borderRadius: '50%',
                background: `linear-gradient(135deg, ${c.gold}, ${c.bronze})`,
                margin: '0 auto 2rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: '"Bebas Neue", sans-serif',
                fontSize: '1.5rem',
                color: c.black,
              }}>
                {testimonial.avatar}
              </div>

              <div style={{
                fontFamily: '"EB Garamond", serif',
                fontSize: '4rem',
                color: hexToRgba(c.gold, 0.2),
                marginBottom: '-1rem',
              }}>&ldquo;</div>

              <blockquote style={{
                fontFamily: '"EB Garamond", serif',
                fontSize: isMobile ? 'clamp(1.2rem, 5vw, 1.8rem)' : 'clamp(1.5rem, 4vw, 2.5rem)',
                fontStyle: 'italic',
                lineHeight: 1.7,
                color: hexToRgba(c.cream, 0.8),
                margin: 0,
              }}>
                {testimonial.quote}
              </blockquote>

              <div style={{
                marginTop: '2rem',
                fontFamily: '"Space Mono", monospace',
                fontSize: '0.6rem',
                letterSpacing: '0.3em',
                color: c.gold,
              }}>
                — {testimonial.author}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonial indicators */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '1rem',
          marginTop: '3rem',
        }}>
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveTestimonial(i)}
              onMouseEnter={() => setCursorVariant('hover')}
              onMouseLeave={() => setCursorVariant('default')}
              style={{
                width: activeTestimonial === i ? 40 : 12,
                height: 12,
                borderRadius: 6,
                background: activeTestimonial === i ? c.gold : hexToRgba(c.gold, 0.2),
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
              fontFamily: '"Space Mono", monospace',
              fontSize: '0.55rem',
              letterSpacing: '0.4em',
              color: c.gold,
              marginBottom: '2rem',
            }}>
              PREGUNTAS FRECUENTES
            </div>
            <h2 style={{
              fontSize: isMobile ? 'clamp(2rem, 8vw, 3rem)' : 'clamp(2.5rem, 6vw, 4rem)',
              fontWeight: 400,
              fontStyle: 'italic',
              margin: 0,
            }}>
              Todo lo que necesitas saber.
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', background: hexToRgba(c.gold, 0.1) }}>
            {faqs.map((faq, i) => (
              <div
                key={i}
                style={{
                  background: c.black,
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
                    fontFamily: '"EB Garamond", serif',
                    fontSize: isMobile ? '1rem' : '1.2rem',
                    color: activeFaq === i ? c.gold : c.cream,
                    transition: 'color 0.3s ease',
                  }}>
                    {faq.q}
                  </span>
                  <span style={{
                    fontSize: '1.5rem',
                    color: c.gold,
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
                    fontSize: isMobile ? '0.9rem' : '1rem',
                    lineHeight: 1.9,
                    color: hexToRgba(c.cream, 0.5),
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
          background: `radial-gradient(ellipse at right, ${hexToRgba(c.gold, 0.05)} 0%, transparent 60%)`,
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
              fontFamily: '"Space Mono", monospace',
              fontSize: '0.55rem',
              letterSpacing: '0.4em',
              color: c.gold,
              marginBottom: '2rem',
            }}>
              COMIENZA TU ASCENSO
            </div>
            <h2 style={{
              fontSize: isMobile ? 'clamp(2.5rem, 10vw, 4rem)' : 'clamp(3rem, 8vw, 5.5rem)',
              fontWeight: 400,
              margin: 0,
              lineHeight: 1,
            }}>
              <span style={{ display: 'block', fontStyle: 'italic' }}>¿Lista para</span>
              <span style={{
                display: 'block',
                background: `linear-gradient(90deg, ${c.goldLight}, ${c.gold}, ${c.bronze})`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>trascender?</span>
            </h2>
            <p style={{
              marginTop: '2rem',
              fontSize: isMobile ? '0.9rem' : '1rem',
              lineHeight: 2.2,
              color: hexToRgba(c.cream, 0.4),
              maxWidth: 400,
            }}>
              Aceptamos menos del 5% de aplicantes. Si estás seria sobre construir un legado, no solo un ingreso, deberíamos hablar.
            </p>

            <div className="hide-mobile" style={{
              display: 'flex',
              gap: '4rem',
              marginTop: '4rem',
              paddingTop: '3rem',
              borderTop: `1px solid ${hexToRgba(c.gold, 0.1)}`,
            }}>
              {[
                { value: '200+', label: 'Creadores activos' },
                { value: '98%', label: 'Tasa de retención' },
                { value: '3.2x', label: 'Crecimiento prom.' },
              ].map((stat, i) => (
                <div key={i}>
                  <div style={{
                    fontFamily: '"EB Garamond", serif',
                    fontSize: '2rem',
                    fontStyle: 'italic',
                    color: c.gold,
                  }}>{stat.value}</div>
                  <div style={{
                    fontFamily: '"Space Mono", monospace',
                    fontSize: '0.5rem',
                    color: hexToRgba(c.cream, 0.3),
                    letterSpacing: '0.1em',
                    marginTop: '0.5rem',
                  }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div style={{
            background: hexToRgba(c.charcoal, 0.3),
            border: `1px solid ${hexToRgba(c.gold, 0.1)}`,
            padding: isMobile ? '2.5rem' : '4rem',
            position: 'relative',
            overflow: 'hidden',
          }}>
            {/* Success overlay */}
            <div style={{
              position: 'absolute',
              inset: 0,
              background: c.black,
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
                background: `linear-gradient(135deg, ${c.gold}, ${c.bronze})`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '2rem',
              }}>
                ✓
              </div>
              <div style={{
                fontFamily: '"Bebas Neue", sans-serif',
                fontSize: '1.5rem',
                letterSpacing: '0.2em',
                color: c.gold,
              }}>
                APLICACIÓN ENVIADA
              </div>
              <p style={{
                fontFamily: '"Space Mono", monospace',
                fontSize: '0.6rem',
                color: hexToRgba(c.cream, 0.5),
                textAlign: 'center',
              }}>
                Te contactaremos en las próximas 24 horas
              </p>
            </div>

            <form onSubmit={handleFormSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {[
                { label: 'Social handle', placeholder: '@tuhandle', key: 'handle' as const },
                { label: 'Plataforma', placeholder: 'Instagram, TikTok, etc.', key: 'platform' as const },
                { label: 'Seguidores actuales', placeholder: 'ej. 50k', key: 'following' as const },
                { label: 'Contacto', placeholder: 'Telegram o email', key: 'contact' as const },
              ].map((field) => (
                <div key={field.key}>
                  <label style={{
                    display: 'block',
                    fontFamily: '"Space Mono", monospace',
                    fontSize: '0.5rem',
                    letterSpacing: '0.25em',
                    textTransform: 'uppercase',
                    color: c.gold,
                    marginBottom: '1rem',
                    opacity: 0.7,
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
                      borderBottom: `1px solid ${focusedInput === field.key ? c.gold : hexToRgba(c.gold, 0.2)}`,
                      color: c.cream,
                      fontSize: '1.1rem',
                      fontFamily: '"EB Garamond", serif',
                      fontStyle: 'italic',
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
                  background: c.gold,
                  color: c.black,
                  border: 'none',
                  fontSize: '0.65rem',
                  fontFamily: '"Space Mono", monospace',
                  fontWeight: 700,
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  transition: 'transform 0.4s ease, box-shadow 0.4s ease',
                  boxShadow: `0 20px 60px ${hexToRgba(c.gold, 0.3)}`,
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.boxShadow = `0 30px 80px ${hexToRgba(c.gold, 0.4)}`;
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = `0 20px 60px ${hexToRgba(c.gold, 0.3)}`;
                }}
              >
                Enviar Aplicación
              </button>

              <p style={{
                fontFamily: '"Space Mono", monospace',
                fontSize: '0.5rem',
                color: hexToRgba(c.cream, 0.25),
                letterSpacing: '0.15em',
                textAlign: 'center',
              }}>
                {'\u25C6'} 100% confidencial {'\u25C6'} Respuesta en 24h {'\u25C6'}
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        padding: isMobile ? '4rem 1.5rem' : '6rem 4rem',
        borderTop: `1px solid ${hexToRgba(c.gold, 0.1)}`,
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : '1fr auto auto',
        gap: isMobile ? '2rem' : '4rem',
        alignItems: isMobile ? 'center' : 'end',
        textAlign: isMobile ? 'center' : 'left',
      }}>
        <div>
          <div style={{
            fontFamily: '"Bebas Neue", sans-serif',
            fontSize: isMobile ? '2rem' : '3rem',
            letterSpacing: '0.2em',
            color: c.gold,
            marginBottom: '1.5rem',
          }}>LUXOR</div>
          <div style={{
            fontFamily: '"Space Mono", monospace',
            fontSize: '0.5rem',
            letterSpacing: '0.2em',
            color: hexToRgba(c.cream, 0.25),
          }}>
            &copy; 2025 — Donde las leyendas son creadas
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
                fontFamily: '"Space Mono", monospace',
                fontSize: '0.55rem',
                letterSpacing: '0.2em',
                color: hexToRgba(c.cream, 0.35),
                textDecoration: 'none',
                textTransform: 'uppercase',
                transition: 'color 0.3s ease',
              }}
              onMouseOver={(e) => e.currentTarget.style.color = c.gold}
              onMouseOut={(e) =>  e.currentTarget.style.color = hexToRgba(c.cream, 0.35)}
            >
              {link}
            </a>
          ))}
        </div>

        <div style={{
          fontFamily: '"Space Mono", monospace',
          fontSize: '0.5rem',
          color: hexToRgba(c.gold, 0.4),
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
          background: `linear-gradient(135deg, ${c.gold}, ${c.bronze})`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textDecoration: 'none',
          boxShadow: `0 10px 40px ${hexToRgba(c.gold, 0.4)}`,
          zIndex: 90,
          transition: 'transform 0.4s ease, box-shadow 0.4s ease',
          animation: 'borderGlow 3s ease-in-out infinite',
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.transform = 'scale(1.1)';
          e.currentTarget.style.boxShadow = `0 15px 50px ${hexToRgba(c.gold, 0.5)}`;
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.boxShadow = `0 10px 40px ${hexToRgba(c.gold, 0.4)}`;
        }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={c.black} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 2L11 13" />
          <path d="M22 2L15 22L11 13L2 9L22 2Z" />
        </svg>
      </a>
    </div>
  );
}
