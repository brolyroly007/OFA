'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';

const ThreeBackground = dynamic(() => import('./components/ThreeBackground'), {
  ssr: false,
});

const translations = {
  es: {
    nav: {
      services: 'Servicios',
      process: 'Proceso',
      testimonials: 'Resultados',
      faq: 'FAQ',
      apply: 'Aplica',
    },
    hero: {
      overline: 'AGENCIA DE GESTIÓN PREMIUM',
      title1: 'Transforma tu',
      title2: 'potencial',
      title3: 'en $$$',
      subtitle: 'Más de 5 años llevando modelos desde cero hasta 6 cifras mensuales. Gestión profesional, estrategia personalizada y resultados reales.',
      cta: '💰 Comienza Ahora',
      cta2: 'Ver Resultados',
    },
    stats: {
      models: 'Modelos',
      revenue: 'Generado',
      growth: 'Crecimiento',
      satisfaction: 'Satisfacción',
    },
    whyUs: {
      overline: 'POR QUÉ ELEGIRNOS',
      title: 'La diferencia está en los resultados.',
      us: 'Silver Agency',
      others: 'Otras Agencias',
      items: [
        { us: 'Protección DMCA y cumplimiento legal', others: 'Sin cobertura legal' },
        { us: 'Dirección creativa 1 a 1', others: 'Sin dirección' },
        { us: 'Escalamos hasta $100K+', others: 'Resultados limitados' },
        { us: 'Sin contratos abusivos', others: 'Penalizaciones ocultas' },
        { us: 'Managers dedicados', others: 'Falta de conexión' },
        { us: 'Chatters 24/7', others: 'Respuestas lentas' },
      ],
    },
    services: {
      overline: 'SERVICIOS',
      title: 'Todo para triunfar 💅',
      items: [
        { name: 'Privacidad', desc: 'Bloqueo geográfico y protección de identidad.', icon: '🔒' },
        { name: 'Gestión 360°', desc: 'Optimizamos o creamos tu perfil desde cero.', icon: '⚡' },
        { name: 'Community', desc: 'Mantenemos a tus fans enganchados.', icon: '💬' },
        { name: 'Marketing', desc: 'Estrategias virales con resultados en 30 días.', icon: '🚀' },
        { name: 'Chatters', desc: 'Equipo multiidioma para maximizar ventas.', icon: '💎' },
        { name: 'Branding', desc: 'Tu marca personal única.', icon: '✨' },
      ],
    },
    calculator: {
      overline: 'CALCULADORA 💸',
      title: '¿Cuánto puedes ganar?',
      label: 'Tu ingreso actual (USD)',
      placeholder: '2000',
      result: 'Tu potencial con Silver',
      month: '/mes',
      note: '*Basado en incremento promedio 200%',
      cta: '¡Quiero esto!',
    },
    process: {
      overline: 'PROCESO',
      title: '3 pasos al éxito 🚀',
      steps: [
        { num: '01', title: 'Contacto', desc: 'Completa el form. Te contactamos en 24h.' },
        { num: '02', title: 'Plan', desc: 'Analizamos tu perfil y creamos estrategia.' },
        { num: '03', title: 'Profit', desc: 'Manager personal y resultados desde el mes 1.' },
      ],
    },
    team: {
      overline: 'EQUIPO',
      title: 'Expertos dedicados 💪',
      roles: ['Content', 'Video', 'Community', 'Chatters', 'Marketing', 'Diseño', 'AI Tech', 'Analytics'],
    },
    testimonials: {
      overline: 'RESULTADOS REALES',
      title: 'Ellas ya lo lograron 👑',
      items: [
        { name: 'Valentina', amount: '€32K', before: 'Ex recepcionista', quote: 'En 3 meses pasé de 0 a 30K+. El equipo es increíble.', months: '3 meses' },
        { name: 'Isabella', amount: '€28K', before: 'Ex estudiante', quote: 'Silver cambió mi vida completamente.', months: '4 meses' },
        { name: 'Camila', amount: '€45K', before: 'Ex camarera', quote: 'De turnos de 12h a 45K desde casa.', months: '6 meses' },
      ],
    },
    benefits: {
      overline: 'BENEFICIOS',
      items: [
        { title: 'Sin inversión', desc: 'Solo ganamos si tú ganas.' },
        { title: 'Sin letra pequeña', desc: 'Contrato 100% transparente.' },
        { title: 'Regalos', desc: 'Viajes, tech y sorpresas.' },
        { title: '24/7', desc: 'Siempre disponibles.' },
      ],
    },
    faq: {
      overline: 'FAQ',
      title: 'Preguntas frecuentes',
      items: [
        { q: '¿Tengo que pagar?', a: 'No. Solo cobramos % de lo que generas.' },
        { q: '¿Qué hago yo?', a: 'Crear contenido. Nosotros hacemos el resto.' },
        { q: '¿Cuánto puedo ganar?', a: 'Incremento promedio 200%. Algunas superan €50K/mes.' },
        { q: '¿Y si no funciona?', a: '30 días de prueba sin compromiso.' },
        { q: '¿Requisitos?', a: '+18 y motivación. No necesitas experiencia.' },
        { q: '¿Protegen mi privacidad?', a: 'Bloqueo geográfico + DMCA + GDPR.' },
      ],
    },
    apply: {
      overline: 'ÚNETE',
      title: '¿Lista para el bag? 💰',
      subtitle: 'Solo aceptamos el 5%. Si quieres resultados reales, hablemos.',
      guarantee: '30 días de prueba sin compromiso',
      form: {
        name: 'Nombre',
        handle: '@usuario',
        platform: 'Plataforma',
        followers: 'Seguidores',
        contact: 'Telegram/Email',
        submit: 'ENVIAR 🚀',
        success: '¡Enviado!',
        successMsg: 'Te contactamos en 24h',
      },
    },
    footer: {
      tagline: 'Gestión premium de creadoras',
    },
  },
  en: {
    nav: {
      services: 'Services',
      process: 'Process',
      testimonials: 'Results',
      faq: 'FAQ',
      apply: 'Apply',
    },
    hero: {
      overline: 'PREMIUM MANAGEMENT AGENCY',
      title1: 'Turn your',
      title2: 'potential',
      title3: 'into $$$',
      subtitle: 'Over 5 years taking models from zero to six-figure monthly earnings. Professional management and real results.',
      cta: '💰 Start Now',
      cta2: 'See Results',
    },
    stats: {
      models: 'Models',
      revenue: 'Generated',
      growth: 'Growth',
      satisfaction: 'Satisfaction',
    },
    whyUs: {
      overline: 'WHY US',
      title: 'The difference is in results.',
      us: 'Silver Agency',
      others: 'Other Agencies',
      items: [
        { us: 'DMCA protection & legal compliance', others: 'No coverage' },
        { us: '1-on-1 creative direction', others: 'No direction' },
        { us: 'Scale to $100K+', others: 'Limited results' },
        { us: 'No abusive contracts', others: 'Hidden penalties' },
        { us: 'Dedicated managers', others: 'No connection' },
        { us: '24/7 chatters', others: 'Slow responses' },
      ],
    },
    services: {
      overline: 'SERVICES',
      title: 'Everything to succeed 💅',
      items: [
        { name: 'Privacy', desc: 'Geo-blocking and identity protection.', icon: '🔒' },
        { name: '360° Mgmt', desc: 'We optimize or create your profile.', icon: '⚡' },
        { name: 'Community', desc: 'Keep your fans engaged.', icon: '💬' },
        { name: 'Marketing', desc: 'Viral strategies, results in 30 days.', icon: '🚀' },
        { name: 'Chatters', desc: 'Multilingual team for max sales.', icon: '💎' },
        { name: 'Branding', desc: 'Your unique personal brand.', icon: '✨' },
      ],
    },
    calculator: {
      overline: 'CALCULATOR 💸',
      title: 'How much can you earn?',
      label: 'Your current income (USD)',
      placeholder: '2000',
      result: 'Your potential with Silver',
      month: '/mo',
      note: '*Based on 200% average increase',
      cta: 'I want this!',
    },
    process: {
      overline: 'PROCESS',
      title: '3 steps to success 🚀',
      steps: [
        { num: '01', title: 'Contact', desc: 'Fill the form. We reach out in 24h.' },
        { num: '02', title: 'Plan', desc: 'We analyze your profile and create strategy.' },
        { num: '03', title: 'Profit', desc: 'Personal manager and results from month 1.' },
      ],
    },
    team: {
      overline: 'TEAM',
      title: 'Dedicated experts 💪',
      roles: ['Content', 'Video', 'Community', 'Chatters', 'Marketing', 'Design', 'AI Tech', 'Analytics'],
    },
    testimonials: {
      overline: 'REAL RESULTS',
      title: 'They already made it 👑',
      items: [
        { name: 'Valentina', amount: '€32K', before: 'Ex receptionist', quote: 'In 3 months I went from 0 to 30K+. Amazing team.', months: '3 months' },
        { name: 'Isabella', amount: '€28K', before: 'Ex student', quote: 'Silver completely changed my life.', months: '4 months' },
        { name: 'Camila', amount: '€45K', before: 'Ex waitress', quote: 'From 12h shifts to 45K from home.', months: '6 months' },
      ],
    },
    benefits: {
      overline: 'BENEFITS',
      items: [
        { title: 'No investment', desc: 'We only earn if you earn.' },
        { title: 'No fine print', desc: '100% transparent contract.' },
        { title: 'Gifts', desc: 'Trips, tech and surprises.' },
        { title: '24/7', desc: 'Always available.' },
      ],
    },
    faq: {
      overline: 'FAQ',
      title: 'Common questions',
      items: [
        { q: 'Do I pay anything?', a: 'No. We only charge % of what you make.' },
        { q: 'What do I do?', a: 'Create content. We do everything else.' },
        { q: 'How much can I earn?', a: 'Average 200% increase. Some exceed €50K/mo.' },
        { q: 'What if it fails?', a: '30 days trial, no strings attached.' },
        { q: 'Requirements?', a: '18+ and motivation. No experience needed.' },
        { q: 'Privacy protection?', a: 'Geo-blocking + DMCA + GDPR.' },
      ],
    },
    apply: {
      overline: 'JOIN US',
      title: 'Ready for the bag? 💰',
      subtitle: 'We only accept 5%. If you want real results, let\'s talk.',
      guarantee: '30 days trial, no commitment',
      form: {
        name: 'Name',
        handle: '@username',
        platform: 'Platform',
        followers: 'Followers',
        contact: 'Telegram/Email',
        submit: 'SEND 🚀',
        success: 'Sent!',
        successMsg: 'We\'ll contact you in 24h',
      },
    },
    footer: {
      tagline: 'Premium creator management',
    },
  },
};

// Counter hook
const useCounter = (end: number, duration: number = 2000) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    let start = 0;
    const step = end / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) { setCount(end); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [isVisible, end, duration]);

  return { count, ref };
};

export default function SilverAgency() {
  const [scrollY, setScrollY] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({ name: '', handle: '', platform: '', followers: '', contact: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [lang, setLang] = useState<'es' | 'en'>('es');
  const [calcValue, setCalcValue] = useState('');
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const t = translations[lang];

  // New vibrant color palette matching the GIFs
  const c = {
    bg: '#0f0f13',
    bgAlt: '#16161d',
    bgCard: 'rgba(25,25,35,0.9)',
    text: '#ffffff',
    textMuted: '#b0b0c0',
    textDim: '#6a6a80',
    // Pink/Purple/Magenta vibes from Doge GIF
    primary: '#e91e8c',
    primaryLight: '#ff4da6',
    secondary: '#9b4dff',
    secondaryLight: '#b06aff',
    accent: '#00d4aa',
    gradient1: 'linear-gradient(135deg, #e91e8c 0%, #9b4dff 50%, #00d4aa 100%)',
    gradient2: 'linear-gradient(135deg, #ff4da6 0%, #b06aff 100%)',
    border: 'rgba(255,255,255,0.1)',
    glow: 'rgba(233,30,140,0.3)',
  };

  const images = {
    hero: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&q=80',
    model1: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&q=80',
    model2: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&q=80',
    model3: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&q=80',
    testimonial1: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80',
    testimonial2: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80',
    testimonial3: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=200&q=80',
  };

  const stat1 = useCounter(50, 2000);
  const stat2 = useCounter(10, 2500);
  const stat3 = useCounter(200, 2000);
  const stat4 = useCounter(98, 2000);

  useEffect(() => {
    const browserLang = navigator.language.toLowerCase();
    setLang(browserLang.startsWith('es') ? 'es' : 'en');
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    const handleScroll = () => {
      setScrollY(window.scrollY);
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docHeight > 0 ? (window.scrollY / docHeight) * 100 : 0);
    };
    window.addEventListener('scroll', handleScroll);
    const interval = setInterval(() => setActiveTestimonial((p) => (p + 1) % 3), 5000);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', checkMobile);
      clearInterval(interval);
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.handle && formData.contact) {
      setFormSubmitted(true);
      setTimeout(() => { setFormSubmitted(false); setFormData({ name: '', handle: '', platform: '', followers: '', contact: '' }); }, 4000);
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: c.bg,
      color: c.text,
      fontFamily: '"Inter", system-ui, sans-serif',
      position: 'relative',
      overflowX: 'hidden',
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        ::selection { background: ${c.primary}50; }
        input::placeholder { color: ${c.textDim}; }

        @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-15px); } }
        @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.7; } }
        @keyframes gradient { 0% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } 100% { background-position: 0% 50%; } }
        @keyframes shake { 0%, 100% { transform: rotate(-3deg); } 50% { transform: rotate(3deg); } }
        @keyframes money { 0% { transform: translateY(0) rotate(0deg); } 100% { transform: translateY(-20px) rotate(10deg); } }

        .gradient-text {
          background: ${c.gradient1};
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gradient 3s ease infinite;
        }

        .glow-btn {
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
        }
        .glow-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 40px ${c.glow};
        }
        .glow-btn::before {
          content: '';
          position: absolute;
          top: 0; left: -100%;
          width: 100%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
          transition: 0.5s;
        }
        .glow-btn:hover::before { left: 100%; }

        .card-hover {
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        .card-hover:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 20px 40px rgba(0,0,0,0.4), 0 0 30px ${c.glow};
        }
      `}</style>

      {/* Three.js 3D Background */}
      <ThreeBackground text="SILVER" />

      {/* Animated GIF background with blur */}
      <div style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
        overflow: 'hidden',
      }}>
        <Image
          src="/images/bg-waves.gif"
          alt=""
          fill
          style={{
            objectFit: 'cover',
            opacity: 0.3,
            filter: 'blur(3px)',
            transform: 'scale(1.05)',
          }}
          unoptimized
          priority
        />
        {/* Overlay gradient */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: `linear-gradient(180deg, ${c.bg}95 0%, ${c.bg}40 20%, transparent 40%, transparent 60%, ${c.bg}40 80%, ${c.bg} 100%)`,
        }} />
      </div>

      {/* Scroll progress */}
      <div style={{
        position: 'fixed',
        top: 0, left: 0,
        height: '3px',
        width: `${scrollProgress}%`,
        background: c.gradient2,
        zIndex: 1000,
      }} />

      {/* Nav */}
      <nav style={{
        position: 'fixed',
        top: 0, left: 0, right: 0,
        padding: isMobile ? '1rem' : '1rem 3rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        zIndex: 100,
        background: scrollY > 50 ? `${c.bg}f0` : 'transparent',
        backdropFilter: scrollY > 50 ? 'blur(20px)' : 'none',
        transition: 'all 0.3s',
      }}>
        <a href="#" style={{
          fontSize: '1.5rem',
          fontWeight: 800,
          textDecoration: 'none',
        }}>
          <span className="gradient-text">SILVER</span>
        </a>

        {!isMobile && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
            <div style={{ display: 'flex', gap: '0.3rem', background: c.bgCard, borderRadius: '8px', padding: '0.3rem' }}>
              {['es', 'en'].map((l) => (
                <button key={l} onClick={() => setLang(l as 'es' | 'en')} style={{
                  background: lang === l ? c.gradient2 : 'transparent',
                  border: 'none', color: c.text,
                  padding: '0.4rem 0.8rem', borderRadius: '6px',
                  fontSize: '0.8rem', fontWeight: 600, cursor: 'pointer',
                }}>{l.toUpperCase()}</button>
              ))}
            </div>
            {['services', 'process', 'testimonials', 'faq'].map((key) => (
              <a key={key} href={`#${key}`} style={{
                color: c.textMuted, textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500,
                transition: 'color 0.2s',
              }} onMouseOver={(e) => e.currentTarget.style.color = c.text}
                 onMouseOut={(e) => e.currentTarget.style.color = c.textMuted}>
                {t.nav[key as keyof typeof t.nav]}
              </a>
            ))}
            <a href="#apply" className="glow-btn" style={{
              background: c.gradient2, color: c.text,
              padding: '0.7rem 1.5rem', borderRadius: '8px',
              textDecoration: 'none', fontSize: '0.9rem', fontWeight: 600,
            }}>{t.nav.apply}</a>
          </div>
        )}

        {isMobile && (
          <button onClick={() => setMenuOpen(!menuOpen)} style={{
            background: 'none', border: 'none', color: c.text, fontSize: '1.5rem', cursor: 'pointer',
          }}>{menuOpen ? '✕' : '☰'}</button>
        )}
      </nav>

      {/* Mobile Menu */}
      {isMobile && menuOpen && (
        <div style={{
          position: 'fixed', inset: 0, background: c.bg, zIndex: 99,
          padding: '5rem 2rem 2rem',
          display: 'flex', flexDirection: 'column', gap: '1.5rem',
        }}>
          {['services', 'process', 'testimonials', 'faq'].map((key) => (
            <a key={key} href={`#${key}`} onClick={() => setMenuOpen(false)} style={{
              color: c.text, textDecoration: 'none', fontSize: '1.5rem', fontWeight: 600,
              padding: '1rem 0', borderBottom: `1px solid ${c.border}`,
            }}>{t.nav[key as keyof typeof t.nav]}</a>
          ))}
          <a href="#apply" onClick={() => setMenuOpen(false)} style={{
            background: c.gradient2, color: c.text, padding: '1rem', borderRadius: '10px',
            textDecoration: 'none', fontSize: '1.1rem', fontWeight: 600, textAlign: 'center', marginTop: 'auto',
          }}>{t.nav.apply}</a>
        </div>
      )}

      {/* Hero */}
      <section style={{
        minHeight: '100vh',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: isMobile ? '6rem 1.5rem 3rem' : '0 3rem',
        position: 'relative', zIndex: 1,
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
          gap: '3rem',
          maxWidth: '1200px', width: '100%',
          alignItems: 'center',
        }}>
          <div style={{ textAlign: isMobile ? 'center' : 'left' }}>
            <div style={{
              display: 'inline-block',
              fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.2em',
              color: c.primary, marginBottom: '1rem',
              padding: '0.5rem 1rem',
              background: `${c.primary}20`, borderRadius: '30px',
              border: `1px solid ${c.primary}40`,
            }}>{t.hero.overline}</div>

            <h1 style={{
              fontSize: isMobile ? '2.5rem' : '4rem',
              fontWeight: 900, lineHeight: 1.1, marginBottom: '1.5rem',
            }}>
              {t.hero.title1}<br />
              <span className="gradient-text">{t.hero.title2}</span><br />
              {t.hero.title3}
            </h1>

            <p style={{
              fontSize: '1.1rem', lineHeight: 1.7, color: c.textMuted,
              maxWidth: '450px', margin: isMobile ? '0 auto 2rem' : '0 0 2rem',
            }}>{t.hero.subtitle}</p>

            <div style={{
              display: 'flex', gap: '1rem',
              flexDirection: isMobile ? 'column' : 'row',
              justifyContent: isMobile ? 'center' : 'flex-start',
            }}>
              <a href="#apply" className="glow-btn" style={{
                background: c.gradient2, color: c.text,
                padding: '1rem 2rem', borderRadius: '10px',
                textDecoration: 'none', fontSize: '1.1rem', fontWeight: 700,
                textAlign: 'center',
              }}>{t.hero.cta}</a>
              <a href="#testimonials" style={{
                background: 'transparent', color: c.text,
                padding: '1rem 2rem', borderRadius: '10px',
                textDecoration: 'none', fontSize: '1rem', fontWeight: 500,
                border: `2px solid ${c.border}`, textAlign: 'center',
                transition: 'all 0.3s',
              }} onMouseOver={(e) => { e.currentTarget.style.borderColor = c.primary; e.currentTarget.style.background = `${c.primary}10`; }}
                 onMouseOut={(e) => { e.currentTarget.style.borderColor = c.border; e.currentTarget.style.background = 'transparent'; }}>
                {t.hero.cta2}
              </a>
            </div>

            {/* Stats */}
            <div style={{
              display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem',
              marginTop: '3rem',
            }}>
              {[
                { ref: stat1.ref, count: stat1.count, suffix: '+', label: t.stats.models },
                { ref: stat2.ref, count: stat2.count, prefix: '$', suffix: 'M', label: t.stats.revenue },
                { ref: stat3.ref, count: stat3.count, suffix: '%', label: t.stats.growth },
                { ref: stat4.ref, count: stat4.count, suffix: '%', label: t.stats.satisfaction },
              ].map((s, i) => (
                <div key={i} ref={s.ref} style={{
                  textAlign: 'center', padding: '1rem 0.5rem',
                  background: c.bgCard, borderRadius: '12px', border: `1px solid ${c.border}`,
                }}>
                  <div style={{ fontSize: isMobile ? '1.4rem' : '1.8rem', fontWeight: 800 }} className="gradient-text">
                    {s.prefix || ''}{s.count}{s.suffix}
                  </div>
                  <div style={{ fontSize: '0.7rem', color: c.textDim, marginTop: '0.2rem', fontWeight: 500, textTransform: 'uppercase' }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Hero GIF/Images */}
          <div style={{
            position: 'relative',
            height: isMobile ? '300px' : '550px',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            {/* Doge GIF */}
            <div style={{
              position: 'relative',
              width: isMobile ? '280px' : '400px',
              height: isMobile ? '280px' : '400px',
              borderRadius: '30px',
              overflow: 'hidden',
              boxShadow: `0 30px 60px rgba(0,0,0,0.5), 0 0 50px ${c.glow}`,
              animation: 'float 4s ease-in-out infinite',
            }}>
              <Image
                src="/images/doge-bg.gif"
                alt="Doge OnlyFans"
                fill
                style={{ objectFit: 'cover' }}
                unoptimized
                priority
              />
            </div>

            {/* Floating money emoji */}
            <div style={{
              position: 'absolute',
              top: '10%', left: isMobile ? '5%' : '0',
              fontSize: '3rem',
              animation: 'money 2s ease-in-out infinite alternate',
            }}>💰</div>
            <div style={{
              position: 'absolute',
              bottom: '20%', right: isMobile ? '5%' : '5%',
              fontSize: '2.5rem',
              animation: 'money 2.5s ease-in-out infinite alternate-reverse',
            }}>💸</div>
            <div style={{
              position: 'absolute',
              top: '30%', right: isMobile ? '0' : '-5%',
              fontSize: '2rem',
              animation: 'shake 1s ease-in-out infinite',
            }}>👑</div>
          </div>
        </div>
      </section>

      {/* Why Us - with distinct background */}
      <section id="whyus" style={{
        padding: isMobile ? '5rem 1.5rem 4rem' : '7rem 3rem 6rem',
        position: 'relative', zIndex: 1,
        background: `linear-gradient(135deg, ${c.primary}15 0%, ${c.secondary}10 50%, ${c.accent}10 100%)`,
        borderTop: `1px solid ${c.primary}30`,
        borderBottom: `1px solid ${c.primary}30`,
      }}>
        {/* Section background pattern */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `radial-gradient(${c.primary}20 1px, transparent 1px)`,
          backgroundSize: '30px 30px',
          opacity: 0.5,
          pointerEvents: 'none',
        }} />

        <div style={{ maxWidth: '1000px', margin: '0 auto', position: 'relative' }}>
          {/* Pink peeker character - holding onto section from top */}
          <div style={{
            position: 'absolute',
            top: isMobile ? '-155px' : '-195px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: isMobile ? '280px' : '400px',
            height: isMobile ? '130px' : '160px',
            zIndex: 20,
            pointerEvents: 'none',
          }}>
            <Image
              src="/images/peeker-pink.gif"
              alt="Peeker"
              fill
              style={{ objectFit: 'contain', objectPosition: 'bottom' }}
              unoptimized
            />
          </div>

          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div style={{
              display: 'inline-block', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.2em',
              color: c.primary, marginBottom: '0.8rem', padding: '0.4rem 1rem',
              background: `${c.primary}30`, borderRadius: '30px',
              border: `1px solid ${c.primary}50`,
            }}>{t.whyUs.overline}</div>
            <h2 style={{ fontSize: isMobile ? '1.8rem' : '2.5rem', fontWeight: 800 }}>{t.whyUs.title}</h2>
          </div>

          {/* Comparison table */}
          <div style={{ position: 'relative' }}>
            <div style={{
              background: `${c.bg}ee`, borderRadius: '20px', border: `1px solid ${c.primary}40`,
              overflow: 'hidden', backdropFilter: 'blur(20px)',
              boxShadow: `0 20px 60px ${c.primary}20`,
            }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', borderBottom: `1px solid ${c.border}` }}>
              <div style={{
                padding: '1.2rem', background: `${c.primary}20`, fontWeight: 700,
                fontSize: isMobile ? '0.85rem' : '1rem', color: c.primary, textAlign: 'center',
                borderRight: `1px solid ${c.border}`,
              }}>✓ {t.whyUs.us}</div>
              <div style={{
                padding: '1.2rem', fontWeight: 600, fontSize: isMobile ? '0.85rem' : '1rem',
                color: c.textDim, textAlign: 'center',
              }}>✗ {t.whyUs.others}</div>
            </div>
            {t.whyUs.items.map((item, i) => (
              <div key={i} style={{
                display: 'grid', gridTemplateColumns: '1fr 1fr',
                borderBottom: i < t.whyUs.items.length - 1 ? `1px solid ${c.border}` : 'none',
              }}>
                <div style={{
                  padding: isMobile ? '1rem' : '1.2rem 1.5rem',
                  fontSize: isMobile ? '0.85rem' : '0.95rem', color: c.text,
                  borderRight: `1px solid ${c.border}`,
                  display: 'flex', alignItems: 'center', gap: '0.6rem',
                }}>
                  <span style={{ color: c.accent }}>✓</span> {item.us}
                </div>
                <div style={{
                  padding: isMobile ? '1rem' : '1.2rem 1.5rem',
                  fontSize: isMobile ? '0.85rem' : '0.95rem', color: c.textDim,
                  display: 'flex', alignItems: 'center', gap: '0.6rem',
                }}>
                  <span style={{ color: '#ff4444' }}>✗</span> {item.others}
                </div>
              </div>
            ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" style={{
        padding: isMobile ? '4rem 1.5rem' : '6rem 3rem',
        position: 'relative', zIndex: 1,
      }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div style={{
              display: 'inline-block', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.2em',
              color: c.secondary, marginBottom: '0.8rem', padding: '0.4rem 1rem',
              background: `${c.secondary}20`, borderRadius: '30px',
            }}>{t.services.overline}</div>
            <h2 style={{ fontSize: isMobile ? '1.8rem' : '2.5rem', fontWeight: 800 }}>{t.services.title}</h2>
          </div>

          <div style={{
            display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: '1.2rem',
          }}>
            {t.services.items.map((s, i) => (
              <div key={i} className="card-hover" style={{
                background: c.bgCard, borderRadius: '16px', border: `1px solid ${c.border}`,
                padding: '1.5rem', backdropFilter: 'blur(20px)',
              }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{s.icon}</div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.5rem' }}>{s.name}</h3>
                <p style={{ fontSize: '0.9rem', color: c.textMuted, lineHeight: 1.6 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Calculator with Money GIF */}
      <section id="calculator" style={{
        padding: isMobile ? '4rem 1.5rem' : '6rem 3rem',
        position: 'relative', zIndex: 1,
      }}>
        <div style={{
          maxWidth: '800px', margin: '0 auto',
          display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '2rem',
          alignItems: 'center',
        }}>
          {/* Money GIF */}
          <div style={{
            position: 'relative',
            height: isMobile ? '250px' : '350px',
            borderRadius: '20px', overflow: 'hidden',
            boxShadow: `0 20px 40px rgba(0,0,0,0.4)`,
            order: isMobile ? 1 : 0,
          }}>
            <Image
              src="/images/money-bg.gif"
              alt="Money"
              fill
              style={{ objectFit: 'cover' }}
              unoptimized
            />
          </div>

          <div style={{ textAlign: isMobile ? 'center' : 'left' }}>
            <div style={{
              display: 'inline-block', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.2em',
              color: c.accent, marginBottom: '0.8rem', padding: '0.4rem 1rem',
              background: `${c.accent}20`, borderRadius: '30px',
            }}>{t.calculator.overline}</div>
            <h2 style={{ fontSize: isMobile ? '1.8rem' : '2.2rem', fontWeight: 800, marginBottom: '1.5rem' }}>
              {t.calculator.title}
            </h2>

            <div style={{
              background: c.bgCard, borderRadius: '16px', border: `1px solid ${c.border}`,
              padding: '1.5rem', backdropFilter: 'blur(20px)',
            }}>
              <div style={{
                display: 'flex', alignItems: 'center', gap: '0.5rem',
                background: c.bg, borderRadius: '10px', padding: '0.5rem 1rem',
                marginBottom: '1rem',
              }}>
                <span style={{ color: c.primary, fontSize: '1.3rem', fontWeight: 700 }}>$</span>
                <input
                  type="number" value={calcValue}
                  onChange={(e) => setCalcValue(e.target.value)}
                  placeholder={t.calculator.placeholder}
                  style={{
                    flex: 1, background: 'transparent', border: 'none',
                    padding: '0.8rem 0', fontSize: '1.3rem', fontWeight: 700,
                    color: c.text, outline: 'none',
                  }}
                />
              </div>

              {calcValue && parseInt(calcValue) > 0 && (
                <div style={{
                  background: `${c.primary}20`, borderRadius: '12px', padding: '1.5rem',
                  marginBottom: '1rem', border: `1px solid ${c.primary}30`, textAlign: 'center',
                }}>
                  <div style={{ fontSize: '0.9rem', color: c.textMuted, marginBottom: '0.3rem' }}>
                    {t.calculator.result}
                  </div>
                  <div style={{ fontSize: '2.5rem', fontWeight: 900 }} className="gradient-text">
                    ${(parseInt(calcValue) * 3).toLocaleString()}{t.calculator.month}
                  </div>
                </div>
              )}

              <p style={{ fontSize: '0.8rem', color: c.textDim, marginBottom: '1rem', textAlign: 'center' }}>
                {t.calculator.note}
              </p>

              <a href="#apply" className="glow-btn" style={{
                display: 'block', background: c.gradient2, color: c.text,
                padding: '1rem', borderRadius: '10px', textDecoration: 'none',
                fontSize: '1rem', fontWeight: 700, textAlign: 'center',
              }}>{t.calculator.cta}</a>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" style={{
        padding: isMobile ? '4rem 1.5rem' : '6rem 3rem',
        position: 'relative', zIndex: 1,
      }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div style={{
              display: 'inline-block', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.2em',
              color: c.primary, marginBottom: '0.8rem', padding: '0.4rem 1rem',
              background: `${c.primary}20`, borderRadius: '30px',
            }}>{t.process.overline}</div>
            <h2 style={{ fontSize: isMobile ? '1.8rem' : '2.5rem', fontWeight: 800 }}>{t.process.title}</h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {t.process.steps.map((step, i) => (
              <div key={i} className="card-hover" style={{
                display: 'flex', gap: '1.5rem', alignItems: 'center',
                padding: '1.5rem', background: c.bgCard, borderRadius: '16px',
                border: `1px solid ${c.border}`, backdropFilter: 'blur(20px)',
              }}>
                <div style={{
                  width: '60px', height: '60px', borderRadius: '50%',
                  background: c.gradient2, display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '1.2rem', fontWeight: 800, color: c.text, flexShrink: 0,
                }}>{step.num}</div>
                <div>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.3rem' }}>{step.title}</h3>
                  <p style={{ fontSize: '0.95rem', color: c.textMuted }}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" style={{
        padding: isMobile ? '4rem 1.5rem' : '6rem 3rem',
        position: 'relative', zIndex: 1,
      }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <div style={{
              display: 'inline-block', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.2em',
              color: c.secondary, marginBottom: '0.8rem', padding: '0.4rem 1rem',
              background: `${c.secondary}20`, borderRadius: '30px',
            }}>{t.team.overline}</div>
            <h2 style={{ fontSize: isMobile ? '1.8rem' : '2.5rem', fontWeight: 800 }}>{t.team.title}</h2>
          </div>

          <div style={{
            display: 'grid', gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)', gap: '0.8rem',
          }}>
            {t.team.roles.map((role, i) => (
              <div key={i} className="card-hover" style={{
                background: c.bgCard, borderRadius: '12px', border: `1px solid ${c.border}`,
                padding: '1rem', textAlign: 'center', fontSize: '0.9rem', fontWeight: 600,
                color: c.textMuted, backdropFilter: 'blur(20px)',
              }}>{role}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" style={{
        padding: isMobile ? '4rem 1.5rem' : '6rem 3rem',
        position: 'relative', zIndex: 1,
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div style={{
              display: 'inline-block', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.2em',
              color: c.accent, marginBottom: '0.8rem', padding: '0.4rem 1rem',
              background: `${c.accent}20`, borderRadius: '30px',
            }}>{t.testimonials.overline}</div>
            <h2 style={{ fontSize: isMobile ? '1.8rem' : '2.5rem', fontWeight: 800 }}>{t.testimonials.title}</h2>
          </div>

          <div style={{ position: 'relative', minHeight: '350px' }}>
            {t.testimonials.items.map((item, i) => (
              <div key={i} style={{
                position: i === 0 ? 'relative' : 'absolute',
                top: 0, left: 0, right: 0,
                opacity: activeTestimonial === i ? 1 : 0,
                transform: activeTestimonial === i ? 'scale(1)' : 'scale(0.95)',
                transition: 'all 0.5s ease',
                pointerEvents: activeTestimonial === i ? 'auto' : 'none',
              }}>
                <div style={{
                  background: c.bgCard, borderRadius: '20px', border: `1px solid ${c.border}`,
                  padding: isMobile ? '2rem' : '2.5rem', textAlign: 'center', backdropFilter: 'blur(20px)',
                }}>
                  <div style={{
                    width: '80px', height: '80px', borderRadius: '50%', margin: '0 auto 1rem',
                    overflow: 'hidden', border: `3px solid ${c.primary}`,
                    position: 'relative',
                  }}>
                    <Image
                      src={[images.testimonial1, images.testimonial2, images.testimonial3][i]}
                      alt={item.name} fill style={{ objectFit: 'cover' }}
                    />
                  </div>

                  <div style={{
                    display: 'inline-flex', alignItems: 'baseline', gap: '0.3rem',
                    background: `${c.primary}20`, borderRadius: '30px', padding: '0.6rem 1.5rem',
                    marginBottom: '1rem', border: `1px solid ${c.primary}30`,
                  }}>
                    <span style={{ fontSize: '2rem', fontWeight: 900 }} className="gradient-text">{item.amount}</span>
                    <span style={{ fontSize: '0.9rem', color: c.textMuted }}>/mes</span>
                  </div>

                  <span style={{
                    display: 'inline-block', background: c.bg, borderRadius: '15px',
                    padding: '0.3rem 0.8rem', marginLeft: '0.5rem', marginBottom: '1rem',
                    fontSize: '0.75rem', color: c.accent, fontWeight: 600,
                  }}>{item.months}</span>

                  <p style={{
                    fontSize: '1.1rem', lineHeight: 1.7, color: c.text, fontStyle: 'italic', marginBottom: '1rem',
                  }}>&ldquo;{item.quote}&rdquo;</p>

                  <div style={{ fontSize: '1rem', fontWeight: 700, color: c.text }}>{item.name}</div>
                  <div style={{ fontSize: '0.85rem', color: c.textDim }}>{item.before}</div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.6rem', marginTop: '1.5rem' }}>
            {t.testimonials.items.map((_, i) => (
              <button key={i} onClick={() => setActiveTestimonial(i)} style={{
                width: activeTestimonial === i ? 30 : 10, height: 10, borderRadius: 5,
                background: activeTestimonial === i ? c.gradient2 : c.border,
                border: 'none', cursor: 'pointer', transition: 'all 0.3s',
              }} />
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section id="benefits" style={{
        padding: isMobile ? '4rem 1.5rem' : '6rem 3rem',
        position: 'relative', zIndex: 1,
      }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <div style={{
              display: 'inline-block', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.2em',
              color: c.primary, marginBottom: '0.8rem', padding: '0.4rem 1rem',
              background: `${c.primary}20`, borderRadius: '30px',
            }}>{t.benefits.overline}</div>
          </div>

          <div style={{
            display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)', gap: '1rem',
          }}>
            {t.benefits.items.map((b, i) => (
              <div key={i} className="card-hover" style={{
                display: 'flex', gap: '1rem', padding: '1.5rem',
                background: c.bgCard, borderRadius: '16px', border: `1px solid ${c.border}`,
                backdropFilter: 'blur(20px)',
              }}>
                <span style={{
                  color: c.bg, fontSize: '1rem', width: '40px', height: '40px',
                  background: c.gradient2, borderRadius: '10px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                }}>✓</span>
                <div>
                  <h4 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '0.3rem' }}>{b.title}</h4>
                  <p style={{ fontSize: '0.9rem', color: c.textMuted }}>{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" style={{
        padding: isMobile ? '4rem 1.5rem' : '6rem 3rem',
        position: 'relative', zIndex: 1,
      }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <div style={{
              display: 'inline-block', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.2em',
              color: c.secondary, marginBottom: '0.8rem', padding: '0.4rem 1rem',
              background: `${c.secondary}20`, borderRadius: '30px',
            }}>{t.faq.overline}</div>
            <h2 style={{ fontSize: isMobile ? '1.8rem' : '2.5rem', fontWeight: 800 }}>{t.faq.title}</h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
            {t.faq.items.map((faq, i) => (
              <div key={i} style={{
                background: c.bgCard, borderRadius: '12px',
                border: `1px solid ${activeFaq === i ? c.primary : c.border}`,
                overflow: 'hidden', transition: 'all 0.3s', backdropFilter: 'blur(20px)',
              }}>
                <button onClick={() => setActiveFaq(activeFaq === i ? null : i)} style={{
                  width: '100%', padding: '1.2rem 1.5rem', background: 'none', border: 'none',
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  cursor: 'pointer', textAlign: 'left',
                }}>
                  <span style={{ fontSize: '1rem', fontWeight: 600, color: c.text }}>{faq.q}</span>
                  <span style={{
                    color: c.primary, fontSize: '1.3rem',
                    transform: activeFaq === i ? 'rotate(45deg)' : 'rotate(0)',
                    transition: 'transform 0.3s',
                  }}>+</span>
                </button>
                <div style={{
                  maxHeight: activeFaq === i ? '150px' : 0,
                  overflow: 'hidden', transition: 'max-height 0.3s',
                }}>
                  <p style={{
                    padding: '0 1.5rem 1.2rem', fontSize: '0.95rem', lineHeight: 1.6, color: c.textMuted,
                  }}>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Apply */}
      <section id="apply" style={{
        padding: isMobile ? '4rem 1.5rem' : '6rem 3rem',
        position: 'relative', zIndex: 1,
      }}>
        <div style={{
          maxWidth: '900px', margin: '0 auto',
          display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '2rem',
          alignItems: 'center',
        }}>
          <div style={{ textAlign: isMobile ? 'center' : 'left' }}>
            <div style={{
              display: 'inline-block', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.2em',
              color: c.accent, marginBottom: '0.8rem', padding: '0.4rem 1rem',
              background: `${c.accent}20`, borderRadius: '30px',
            }}>{t.apply.overline}</div>
            <h2 style={{ fontSize: isMobile ? '2rem' : '2.8rem', fontWeight: 900, marginBottom: '1rem' }}>
              {t.apply.title}
            </h2>
            <p style={{ fontSize: '1.05rem', color: c.textMuted, marginBottom: '1.5rem', lineHeight: 1.7 }}>
              {t.apply.subtitle}
            </p>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.6rem',
              padding: '0.8rem 1.2rem', background: `${c.accent}20`, borderRadius: '10px',
              border: `1px solid ${c.accent}30`,
            }}>
              <span style={{ color: c.accent }}>✓</span>
              <span style={{ fontSize: '0.95rem', color: c.accent, fontWeight: 500 }}>{t.apply.guarantee}</span>
            </div>
          </div>

          <div style={{
            background: c.bgCard, borderRadius: '20px', border: `1px solid ${c.border}`,
            padding: isMobile ? '1.5rem' : '2rem', position: 'relative', backdropFilter: 'blur(20px)',
          }}>
            {/* Peeker character */}
            <div style={{
              position: 'absolute',
              top: isMobile ? '-50px' : '-70px',
              right: isMobile ? '20px' : '30px',
              width: isMobile ? '80px' : '120px',
              height: isMobile ? '80px' : '120px',
              zIndex: 20,
              pointerEvents: 'none',
            }}>
              <Image
                src="/images/peeker.gif"
                alt="Peeker"
                fill
                style={{ objectFit: 'contain' }}
                unoptimized
              />
            </div>
            {formSubmitted && (
              <div style={{
                position: 'absolute', inset: 0, background: c.bgCard, borderRadius: '20px',
                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                gap: '1rem', zIndex: 10,
              }}>
                <div style={{
                  width: 70, height: 70, borderRadius: '50%', background: c.gradient2,
                  display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem',
                }}>✓</div>
                <div style={{ fontSize: '1.3rem', fontWeight: 700 }}>{t.apply.form.success}</div>
                <div style={{ color: c.textMuted }}>{t.apply.form.successMsg}</div>
              </div>
            )}

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                { key: 'name' as const, label: t.apply.form.name },
                { key: 'handle' as const, label: t.apply.form.handle },
                { key: 'platform' as const, label: t.apply.form.platform },
                { key: 'followers' as const, label: t.apply.form.followers },
                { key: 'contact' as const, label: t.apply.form.contact },
              ].map((field) => (
                <div key={field.key}>
                  <label style={{
                    display: 'block', fontSize: '0.8rem', fontWeight: 600,
                    color: c.textMuted, marginBottom: '0.4rem',
                  }}>{field.label}</label>
                  <input
                    type="text" value={formData[field.key]}
                    onChange={(e) => setFormData({ ...formData, [field.key]: e.target.value })}
                    style={{
                      width: '100%', background: c.bg, border: `1px solid ${c.border}`,
                      borderRadius: '10px', padding: '0.9rem 1rem', fontSize: '1rem',
                      color: c.text, outline: 'none', transition: 'border-color 0.2s',
                    }}
                    onFocus={(e) => e.currentTarget.style.borderColor = c.primary}
                    onBlur={(e) => e.currentTarget.style.borderColor = c.border}
                  />
                </div>
              ))}

              <button type="submit" className="glow-btn" style={{
                marginTop: '0.5rem', background: c.gradient2, color: c.text,
                border: 'none', borderRadius: '10px', padding: '1rem',
                fontSize: '1.1rem', fontWeight: 700, cursor: 'pointer',
              }}>{t.apply.form.submit}</button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        padding: isMobile ? '2rem 1.5rem' : '3rem 3rem',
        borderTop: `1px solid ${c.border}`, position: 'relative', zIndex: 1,
      }}>
        <div style={{
          maxWidth: '1000px', margin: '0 auto',
          display: 'flex', flexDirection: isMobile ? 'column' : 'row',
          justifyContent: 'space-between', alignItems: 'center', gap: '1.5rem',
        }}>
          <div style={{ textAlign: isMobile ? 'center' : 'left' }}>
            <div style={{ fontSize: '1.3rem', fontWeight: 800, marginBottom: '0.3rem' }} className="gradient-text">SILVER</div>
            <div style={{ fontSize: '0.85rem', color: c.textDim }}>{t.footer.tagline}</div>
          </div>
          <div style={{ display: 'flex', gap: '2rem' }}>
            {['Telegram', 'Twitter', 'Instagram'].map((link) => (
              <a key={link} href="#" style={{
                fontSize: '0.9rem', color: c.textDim, textDecoration: 'none',
                transition: 'color 0.2s',
              }} onMouseOver={(e) => e.currentTarget.style.color = c.primary}
                 onMouseOut={(e) => e.currentTarget.style.color = c.textDim}>{link}</a>
            ))}
          </div>
          <div style={{ fontSize: '0.85rem', color: c.textDim }}>© 2025 · 18+</div>
        </div>
      </footer>

      {/* Floating CTA */}
      <a href="#apply" className="glow-btn" style={{
        position: 'fixed', bottom: isMobile ? '1.5rem' : '2rem', right: isMobile ? '1.5rem' : '2rem',
        width: 56, height: 56, borderRadius: '50%', background: c.gradient2,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        textDecoration: 'none', boxShadow: `0 5px 25px ${c.glow}`, zIndex: 90,
        fontSize: '1.5rem',
      }}>💰</a>
    </div>
  );
}
