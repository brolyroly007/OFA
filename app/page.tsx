'use client';

import React, { useState, useEffect } from 'react';

const translations = {
  es: {
    nav: {
      services: 'Servicios',
      process: 'Proceso',
      team: 'Equipo',
      testimonials: 'Resultados',
      faq: 'FAQ',
      apply: 'Aplica',
    },
    hero: {
      overline: 'AGENCIA DE GESTIÓN ONLYFANS',
      title1: 'Tu éxito,',
      title2: 'nuestra misión.',
      subtitle: 'Más de 5 años de experiencia llevando modelos desde cero hasta facturar 6 cifras mensuales. Gestión profesional, estrategia personalizada y resultados reales.',
      cta: 'Comienza Ahora',
      cta2: 'Conoce Más',
    },
    stats: {
      models: 'Modelos',
      revenue: 'Generado',
      growth: 'Crecimiento',
    },
    whyUs: {
      overline: 'POR QUÉ ELEGIRNOS',
      title: 'La diferencia está en los detalles.',
      us: 'Silver Agency',
      others: 'Otras Agencias',
      items: [
        { us: 'Protección DMCA y cumplimiento legal', others: 'Sin cobertura legal' },
        { us: 'Dirección creativa personalizada', others: 'Sin dirección de contenido' },
        { us: 'Escalamos hasta $100K+ mensuales', others: 'Resultados limitados' },
        { us: 'Sin contratos abusivos', others: 'Penalizaciones ocultas' },
        { us: 'Managers que entienden tu realidad', others: 'Falta de conexión' },
        { us: 'Chatters 24/7 multiidioma', others: 'Respuestas lentas' },
      ],
    },
    services: {
      overline: 'SERVICIOS',
      title: 'Todo lo que necesitas.',
      items: [
        { name: 'Privacidad', desc: 'Bloqueo geográfico y protección total de tu identidad. Tu comodidad es prioridad.' },
        { name: 'Gestión Completa', desc: 'Optimizamos tu perfil existente o creamos todo desde cero. Tú solo creas contenido.' },
        { name: 'Community Manager', desc: 'Respondemos todos los mensajes manteniendo a tus fans satisfechos.' },
        { name: 'Marketing', desc: 'Estrategias personalizadas con resultados en menos de un mes.' },
        { name: 'Chatters Pro', desc: 'Equipo en múltiples idiomas para atención inmediata y personalizada.' },
        { name: 'Redes Sociales', desc: 'Instagram, TikTok, Twitter, Reddit. Tráfico cualificado a tu perfil.' },
      ],
    },
    calculator: {
      overline: 'CALCULADORA',
      title: '¿Cuánto puedes ganar?',
      label: 'Ingreso mensual actual (USD)',
      placeholder: '2000',
      result: 'Potencial con Silver',
      month: '/mes',
      note: '*Basado en incremento promedio del 200%',
      cta: 'Quiero empezar',
    },
    process: {
      overline: 'PROCESO',
      title: 'Simple y transparente.',
      steps: [
        { num: '01', title: 'Contacto', desc: 'Completa el formulario. Te contactamos en 24h para entender tus metas.' },
        { num: '02', title: 'Propuesta', desc: 'Analizamos tu caso y presentamos un plan personalizado.' },
        { num: '03', title: 'Crecimiento', desc: 'Manager personal, estrategia basada en datos, resultados reales.' },
      ],
    },
    team: {
      overline: 'EQUIPO',
      title: 'Profesionales dedicados.',
      roles: ['Content Manager', 'Video', 'Community', 'Chatters', 'Marketing', 'Diseño', 'AI Tech', 'Imagen'],
    },
    testimonials: {
      overline: 'RESULTADOS',
      title: 'Historias reales.',
      items: [
        { name: 'Marta', amount: '22.000€', before: 'Ex asistente administrativa', quote: 'Pasé de sentirme estancada a generar más de 22K al mes haciendo lo que me apasiona.' },
        { name: 'Laura', amount: '18.000€', before: 'Ex estilista', quote: 'Mis ingresos se dispararon. Nunca pensé tener esta estabilidad económica.' },
        { name: 'Karina', amount: '34.000€', before: 'Ex dependienta', quote: 'De apenas cubrir gastos a 34K mensuales. Su gestión es impecable.' },
      ],
    },
    benefits: {
      overline: 'BENEFICIOS',
      items: [
        { title: 'Sin costos iniciales', desc: 'Solo ganamos cuando tú ganas.' },
        { title: 'Contrato claro', desc: 'Sin letra pequeña ni sorpresas.' },
        { title: 'Regalos', desc: 'Viajes, ropa y sorpresas para ti.' },
        { title: 'Soporte 24/7', desc: 'Siempre disponibles.' },
      ],
    },
    faq: {
      overline: 'FAQ',
      title: 'Preguntas frecuentes.',
      items: [
        { q: '¿Tengo que pagar algo?', a: 'No. Solo cobramos un porcentaje de lo que generas. Tu éxito es nuestro éxito.' },
        { q: '¿Qué tengo que hacer yo?', a: 'Crear contenido. Nosotros nos encargamos de todo lo demás: gestión, marketing, chatters, redes.' },
        { q: '¿Cuánto puedo ganar?', a: 'Nuestras modelos ven un incremento promedio del 200%. Algunas superan los 50.000€ mensuales.' },
        { q: '¿Garantizan resultados?', a: 'Si no creces en 30 días, puedes irte sin compromiso.' },
        { q: '¿Requisitos?', a: 'Mayor de 18 años, motivación y compromiso. No necesitas experiencia.' },
        { q: '¿Manejan redes sociales?', a: 'Sí. Instagram, TikTok, Twitter, Reddit, Telegram y más.' },
        { q: '¿Protegen mi privacidad?', a: 'Bloqueo por país, protección DMCA, cumplimiento GDPR.' },
        { q: '¿En qué países trabajan?', a: 'Todo el mundo. Chatters en múltiples idiomas.' },
      ],
    },
    apply: {
      overline: 'ÚNETE',
      title: '¿Lista para empezar?',
      subtitle: 'Aceptamos menos del 5% de aplicantes. Si buscas resultados reales, hablemos.',
      guarantee: 'Si no creces en 30 días, eres libre de irte.',
      form: {
        name: 'Nombre',
        handle: 'Usuario/Handle',
        platform: 'Plataforma',
        followers: 'Seguidores',
        contact: 'Telegram o Email',
        submit: 'Enviar',
        success: 'Enviado',
        successMsg: 'Te contactamos en 24h',
      },
    },
    footer: {
      tagline: 'Gestión profesional de creadoras de contenido',
    },
  },
  en: {
    nav: {
      services: 'Services',
      process: 'Process',
      team: 'Team',
      testimonials: 'Results',
      faq: 'FAQ',
      apply: 'Apply',
    },
    hero: {
      overline: 'ONLYFANS MANAGEMENT AGENCY',
      title1: 'Your success,',
      title2: 'our mission.',
      subtitle: 'Over 5 years of experience taking models from zero to six-figure monthly earnings. Professional management, personalized strategy and real results.',
      cta: 'Start Now',
      cta2: 'Learn More',
    },
    stats: {
      models: 'Models',
      revenue: 'Generated',
      growth: 'Growth',
    },
    whyUs: {
      overline: 'WHY US',
      title: 'The difference is in the details.',
      us: 'Silver Agency',
      others: 'Other Agencies',
      items: [
        { us: 'DMCA protection and legal compliance', others: 'No legal coverage' },
        { us: 'Personalized creative direction', others: 'No content direction' },
        { us: 'Scale up to $100K+ monthly', others: 'Limited results' },
        { us: 'No abusive contracts', others: 'Hidden penalties' },
        { us: 'Managers who understand you', others: 'Lack of connection' },
        { us: '24/7 multilingual chatters', others: 'Slow responses' },
      ],
    },
    services: {
      overline: 'SERVICES',
      title: 'Everything you need.',
      items: [
        { name: 'Privacy', desc: 'Geographic blocking and total identity protection. Your comfort is priority.' },
        { name: 'Full Management', desc: 'We optimize your existing profile or create everything from scratch. You just create content.' },
        { name: 'Community Manager', desc: 'We respond to all messages keeping your fans satisfied.' },
        { name: 'Marketing', desc: 'Personalized strategies with results in less than a month.' },
        { name: 'Pro Chatters', desc: 'Team in multiple languages for immediate, personalized attention.' },
        { name: 'Social Media', desc: 'Instagram, TikTok, Twitter, Reddit. Qualified traffic to your profile.' },
      ],
    },
    calculator: {
      overline: 'CALCULATOR',
      title: 'How much can you earn?',
      label: 'Current monthly income (USD)',
      placeholder: '2000',
      result: 'Potential with Silver',
      month: '/mo',
      note: '*Based on average 200% increase',
      cta: 'I want to start',
    },
    process: {
      overline: 'PROCESS',
      title: 'Simple and transparent.',
      steps: [
        { num: '01', title: 'Contact', desc: 'Complete the form. We contact you in 24h to understand your goals.' },
        { num: '02', title: 'Proposal', desc: 'We analyze your case and present a personalized plan.' },
        { num: '03', title: 'Growth', desc: 'Personal manager, data-driven strategy, real results.' },
      ],
    },
    team: {
      overline: 'TEAM',
      title: 'Dedicated professionals.',
      roles: ['Content Manager', 'Video', 'Community', 'Chatters', 'Marketing', 'Design', 'AI Tech', 'Image'],
    },
    testimonials: {
      overline: 'RESULTS',
      title: 'Real stories.',
      items: [
        { name: 'Marta', amount: '€22,000', before: 'Former admin assistant', quote: 'I went from feeling stuck to generating over 22K a month doing what I love.' },
        { name: 'Laura', amount: '€18,000', before: 'Former stylist', quote: 'My income skyrocketed. I never thought I could have this financial stability.' },
        { name: 'Karina', amount: '€34,000', before: 'Former shop assistant', quote: 'From barely covering expenses to 34K monthly. Their management is impeccable.' },
      ],
    },
    benefits: {
      overline: 'BENEFITS',
      items: [
        { title: 'No upfront costs', desc: 'We only earn when you earn.' },
        { title: 'Clear contract', desc: 'No fine print or surprises.' },
        { title: 'Gifts', desc: 'Trips, clothes and surprises for you.' },
        { title: '24/7 Support', desc: 'Always available.' },
      ],
    },
    faq: {
      overline: 'FAQ',
      title: 'Frequently asked questions.',
      items: [
        { q: 'Do I have to pay anything?', a: 'No. We only charge a percentage of what you generate. Your success is our success.' },
        { q: 'What do I have to do?', a: 'Create content. We handle everything else: management, marketing, chatters, social media.' },
        { q: 'How much can I earn?', a: 'Our models see an average increase of 200%. Some exceed €50,000 monthly.' },
        { q: 'Do you guarantee results?', a: 'If you don\'t grow in 30 days, you can leave with no commitment.' },
        { q: 'Requirements?', a: 'Over 18, motivation and commitment. No experience needed.' },
        { q: 'Do you manage social media?', a: 'Yes. Instagram, TikTok, Twitter, Reddit, Telegram and more.' },
        { q: 'How do you protect my privacy?', a: 'Country blocking, DMCA protection, GDPR compliance.' },
        { q: 'What countries do you work in?', a: 'Worldwide. Chatters in multiple languages.' },
      ],
    },
    apply: {
      overline: 'JOIN',
      title: 'Ready to start?',
      subtitle: 'We accept less than 5% of applicants. If you want real results, let\'s talk.',
      guarantee: 'If you don\'t grow in 30 days, you\'re free to leave.',
      form: {
        name: 'Name',
        handle: 'Handle/Username',
        platform: 'Platform',
        followers: 'Followers',
        contact: 'Telegram or Email',
        submit: 'Submit',
        success: 'Sent',
        successMsg: 'We\'ll contact you in 24h',
      },
    },
    footer: {
      tagline: 'Professional content creator management',
    },
  },
};

function useScrollAnimation() {
  const [visible, setVisible] = useState<Set<string>>(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible((prev) => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    document.querySelectorAll('[data-animate]').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return visible;
}

export default function SilverAgency() {
  const [scrollY, setScrollY] = useState(0);
  const [showContent, setShowContent] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({ name: '', handle: '', platform: '', followers: '', contact: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [lang, setLang] = useState<'es' | 'en'>('es');
  const [calcValue, setCalcValue] = useState('');
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const visible = useScrollAnimation();
  const t = translations[lang];

  // Colors - subtle, elegant with hint of sensuality
  const c = {
    bg: '#0a0a0b',
    bgAlt: '#111113',
    bgCard: '#161619',
    text: '#e8e8ea',
    textMuted: '#888890',
    textDim: '#55555a',
    accent: '#c8a4b4', // subtle rose/mauve for sensuality
    accentMuted: '#9a7a88',
    border: '#252528',
    borderLight: '#333338',
  };

  useEffect(() => {
    const browserLang = navigator.language.toLowerCase();
    setLang(browserLang.startsWith('es') ? 'es' : 'en');

    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);

    setTimeout(() => setShowContent(true), 800);

    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);

    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % 3);
    }, 5000);

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
      setTimeout(() => setFormData({ name: '', handle: '', platform: '', followers: '', contact: '' }), 3000);
    }
  };

  const fadeIn = (isVisible: boolean): React.CSSProperties => ({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
    transition: 'all 0.7s ease',
  });

  // Loading
  if (!showContent) {
    return (
      <div style={{
        position: 'fixed',
        inset: 0,
        background: c.bg,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        gap: '1.5rem',
      }}>
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap');
          @keyframes fade { 0%,100%{opacity:.3} 50%{opacity:1} }
        `}</style>
        <div style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '1.8rem',
          fontWeight: 300,
          letterSpacing: '0.3em',
          color: c.text,
        }}>
          SILVER
        </div>
        <div style={{
          width: 100,
          height: 1,
          background: c.accent,
          animation: 'fade 1.5s ease infinite',
        }} />
      </div>
    );
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: c.bg,
      color: c.text,
      fontFamily: 'Inter, sans-serif',
      overflowX: 'hidden',
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        ::selection { background: ${c.accent}40; }
        input::placeholder { color: ${c.textDim}; }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: ${c.bg}; }
        ::-webkit-scrollbar-thumb { background: ${c.border}; border-radius: 3px; }
        @keyframes fadeUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        .fadeUp { animation: fadeUp 0.6s ease forwards; }
        .fadeUp-1 { animation-delay: 0.1s; opacity: 0; }
        .fadeUp-2 { animation-delay: 0.2s; opacity: 0; }
        .fadeUp-3 { animation-delay: 0.3s; opacity: 0; }
        .fadeUp-4 { animation-delay: 0.4s; opacity: 0; }
      `}</style>

      {/* Nav */}
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        padding: isMobile ? '1rem 1.5rem' : '1.2rem 4rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        zIndex: 100,
        background: scrollY > 50 ? `${c.bg}f0` : 'transparent',
        backdropFilter: scrollY > 50 ? 'blur(10px)' : 'none',
        borderBottom: scrollY > 50 ? `1px solid ${c.border}` : 'none',
        transition: 'all 0.3s ease',
      }}>
        <a href="#" style={{
          fontSize: '1.2rem',
          fontWeight: 300,
          letterSpacing: '0.25em',
          color: c.text,
          textDecoration: 'none',
        }}>
          SILVER
        </a>

        {!isMobile && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '2.5rem' }}>
            <div style={{ display: 'flex', gap: '0.3rem' }}>
              {['es', 'en'].map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l as 'es' | 'en')}
                  style={{
                    background: lang === l ? c.accent : 'transparent',
                    border: 'none',
                    color: lang === l ? c.bg : c.textMuted,
                    padding: '0.4rem 0.7rem',
                    borderRadius: '3px',
                    fontSize: '0.65rem',
                    fontWeight: 500,
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                  }}
                >
                  {l.toUpperCase()}
                </button>
              ))}
            </div>
            <div style={{ display: 'flex', gap: '2rem' }}>
              {['services', 'process', 'testimonials', 'faq'].map((key) => (
                <a
                  key={key}
                  href={`#${key}`}
                  style={{
                    color: c.textMuted,
                    textDecoration: 'none',
                    fontSize: '0.8rem',
                    fontWeight: 400,
                    transition: 'color 0.2s ease',
                  }}
                  onMouseOver={(e) => e.currentTarget.style.color = c.text}
                  onMouseOut={(e) => e.currentTarget.style.color = c.textMuted}
                >
                  {t.nav[key as keyof typeof t.nav]}
                </a>
              ))}
            </div>
            <a
              href="#apply"
              style={{
                background: c.accent,
                color: c.bg,
                padding: '0.6rem 1.5rem',
                borderRadius: '4px',
                textDecoration: 'none',
                fontSize: '0.75rem',
                fontWeight: 500,
                transition: 'opacity 0.2s ease',
              }}
              onMouseOver={(e) => e.currentTarget.style.opacity = '0.85'}
              onMouseOut={(e) => e.currentTarget.style.opacity = '1'}
            >
              {t.nav.apply}
            </a>
          </div>
        )}

        {isMobile && (
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              background: 'none',
              border: 'none',
              color: c.text,
              fontSize: '1.3rem',
              cursor: 'pointer',
            }}
          >
            {menuOpen ? '✕' : '☰'}
          </button>
        )}
      </nav>

      {/* Mobile Menu */}
      {isMobile && menuOpen && (
        <div style={{
          position: 'fixed',
          top: '60px',
          left: 0,
          right: 0,
          bottom: 0,
          background: c.bg,
          zIndex: 99,
          padding: '2rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem',
        }}>
          {['services', 'process', 'testimonials', 'faq'].map((key) => (
            <a
              key={key}
              href={`#${key}`}
              onClick={() => setMenuOpen(false)}
              style={{
                color: c.text,
                textDecoration: 'none',
                fontSize: '1.1rem',
                padding: '0.8rem 0',
                borderBottom: `1px solid ${c.border}`,
              }}
            >
              {t.nav[key as keyof typeof t.nav]}
            </a>
          ))}
          <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
            {['es', 'en'].map((l) => (
              <button
                key={l}
                onClick={() => setLang(l as 'es' | 'en')}
                style={{
                  background: lang === l ? c.accent : 'transparent',
                  border: `1px solid ${c.border}`,
                  color: lang === l ? c.bg : c.text,
                  padding: '0.7rem 1.5rem',
                  borderRadius: '4px',
                  fontSize: '0.85rem',
                  cursor: 'pointer',
                }}
              >
                {l.toUpperCase()}
              </button>
            ))}
          </div>
          <a
            href="#apply"
            onClick={() => setMenuOpen(false)}
            style={{
              background: c.accent,
              color: c.bg,
              padding: '1rem',
              borderRadius: '6px',
              textDecoration: 'none',
              fontSize: '1rem',
              fontWeight: 500,
              textAlign: 'center',
              marginTop: '1rem',
            }}
          >
            {t.nav.apply}
          </a>
        </div>
      )}

      {/* Hero */}
      <section id="hero" style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: isMobile ? '8rem 1.5rem 4rem' : '0 4rem',
        position: 'relative',
      }}>
        <div style={{ maxWidth: '750px', textAlign: 'center' }}>
          <div className="fadeUp fadeUp-1" style={{
            fontSize: '0.7rem',
            fontWeight: 500,
            letterSpacing: '0.25em',
            color: c.accent,
            marginBottom: '2rem',
          }}>
            {t.hero.overline}
          </div>

          <h1 className="fadeUp fadeUp-2" style={{
            fontSize: isMobile ? '2.5rem' : '3.8rem',
            fontWeight: 300,
            lineHeight: 1.15,
            marginBottom: '2rem',
          }}>
            <span style={{ display: 'block' }}>{t.hero.title1}</span>
            <span style={{ color: c.accent }}>{t.hero.title2}</span>
          </h1>

          <p className="fadeUp fadeUp-3" style={{
            fontSize: isMobile ? '1rem' : '1.1rem',
            lineHeight: 1.8,
            color: c.textMuted,
            maxWidth: '550px',
            margin: '0 auto 2.5rem',
          }}>
            {t.hero.subtitle}
          </p>

          <div className="fadeUp fadeUp-4" style={{
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            gap: '1rem',
            justifyContent: 'center',
          }}>
            <a href="#apply" style={{
              background: c.accent,
              color: c.bg,
              padding: '1rem 2.5rem',
              borderRadius: '5px',
              textDecoration: 'none',
              fontSize: '0.85rem',
              fontWeight: 500,
              transition: 'opacity 0.2s ease',
            }}>
              {t.hero.cta}
            </a>
            <a href="#services" style={{
              background: 'transparent',
              color: c.text,
              padding: '1rem 2.5rem',
              borderRadius: '5px',
              textDecoration: 'none',
              fontSize: '0.85rem',
              fontWeight: 400,
              border: `1px solid ${c.border}`,
              transition: 'border-color 0.2s ease',
            }}>
              {t.hero.cta2}
            </a>
          </div>
        </div>

        {/* Stats */}
        <div style={{
          position: 'absolute',
          bottom: isMobile ? '2rem' : '4rem',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          gap: isMobile ? '2rem' : '4rem',
        }}>
          {[
            { val: '50+', label: t.stats.models },
            { val: '$10M+', label: t.stats.revenue },
            { val: '200%', label: t.stats.growth },
          ].map((s, i) => (
            <div key={i} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: isMobile ? '1.5rem' : '2rem', fontWeight: 300, color: c.text }}>{s.val}</div>
              <div style={{ fontSize: '0.65rem', color: c.textDim, letterSpacing: '0.1em', marginTop: '0.3rem' }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Us */}
      <section id="whyus" data-animate style={{
        padding: isMobile ? '5rem 1.5rem' : '7rem 4rem',
        background: c.bgAlt,
        ...fadeIn(visible.has('whyus')),
      }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div style={{ fontSize: '0.65rem', fontWeight: 500, letterSpacing: '0.2em', color: c.accent, marginBottom: '0.8rem' }}>
              {t.whyUs.overline}
            </div>
            <h2 style={{ fontSize: isMobile ? '1.8rem' : '2.2rem', fontWeight: 300 }}>{t.whyUs.title}</h2>
          </div>

          <div style={{
            background: c.bgCard,
            borderRadius: '8px',
            border: `1px solid ${c.border}`,
            overflow: 'hidden',
          }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              borderBottom: `1px solid ${c.border}`,
            }}>
              <div style={{
                padding: '1rem',
                background: `${c.accent}15`,
                fontWeight: 500,
                fontSize: '0.8rem',
                color: c.accent,
                textAlign: 'center',
                borderRight: `1px solid ${c.border}`,
              }}>
                ✓ {t.whyUs.us}
              </div>
              <div style={{
                padding: '1rem',
                fontWeight: 500,
                fontSize: '0.8rem',
                color: c.textDim,
                textAlign: 'center',
              }}>
                ✗ {t.whyUs.others}
              </div>
            </div>
            {t.whyUs.items.map((item, i) => (
              <div key={i} style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                borderBottom: i < t.whyUs.items.length - 1 ? `1px solid ${c.border}` : 'none',
              }}>
                <div style={{
                  padding: isMobile ? '0.9rem' : '1.1rem 1.5rem',
                  fontSize: isMobile ? '0.8rem' : '0.9rem',
                  color: c.text,
                  borderRight: `1px solid ${c.border}`,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                }}>
                  <span style={{ color: c.accent }}>✓</span> {item.us}
                </div>
                <div style={{
                  padding: isMobile ? '0.9rem' : '1.1rem 1.5rem',
                  fontSize: isMobile ? '0.8rem' : '0.9rem',
                  color: c.textDim,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                }}>
                  <span style={{ color: '#e55' }}>✗</span> {item.others}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" data-animate style={{
        padding: isMobile ? '5rem 1.5rem' : '7rem 4rem',
        ...fadeIn(visible.has('services')),
      }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div style={{ fontSize: '0.65rem', fontWeight: 500, letterSpacing: '0.2em', color: c.accent, marginBottom: '0.8rem' }}>
              {t.services.overline}
            </div>
            <h2 style={{ fontSize: isMobile ? '1.8rem' : '2.2rem', fontWeight: 300 }}>{t.services.title}</h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
            gap: '1rem',
          }}>
            {t.services.items.map((s, i) => (
              <div key={i} style={{
                background: c.bgCard,
                borderRadius: '6px',
                border: `1px solid ${c.border}`,
                padding: isMobile ? '1.5rem' : '2rem',
                transition: 'border-color 0.2s ease',
              }}
              onMouseOver={(e) => e.currentTarget.style.borderColor = c.accent + '50'}
              onMouseOut={(e) => e.currentTarget.style.borderColor = c.border}
              >
                <h3 style={{ fontSize: '1rem', fontWeight: 500, marginBottom: '0.8rem', color: c.text }}>{s.name}</h3>
                <p style={{ fontSize: '0.85rem', lineHeight: 1.7, color: c.textMuted }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Calculator */}
      <section id="calculator" data-animate style={{
        padding: isMobile ? '5rem 1.5rem' : '7rem 4rem',
        background: c.bgAlt,
        ...fadeIn(visible.has('calculator')),
      }}>
        <div style={{ maxWidth: '500px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ fontSize: '0.65rem', fontWeight: 500, letterSpacing: '0.2em', color: c.accent, marginBottom: '0.8rem' }}>
            {t.calculator.overline}
          </div>
          <h2 style={{ fontSize: isMobile ? '1.8rem' : '2.2rem', fontWeight: 300, marginBottom: '2rem' }}>{t.calculator.title}</h2>

          <div style={{
            background: c.bgCard,
            borderRadius: '8px',
            border: `1px solid ${c.border}`,
            padding: isMobile ? '2rem' : '2.5rem',
          }}>
            <label style={{
              display: 'block',
              fontSize: '0.75rem',
              color: c.textMuted,
              marginBottom: '0.8rem',
              textAlign: 'left',
            }}>
              {t.calculator.label}
            </label>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1.5rem' }}>
              <span style={{ color: c.textMuted }}>$</span>
              <input
                type="number"
                value={calcValue}
                onChange={(e) => setCalcValue(e.target.value)}
                placeholder={t.calculator.placeholder}
                style={{
                  flex: 1,
                  background: c.bg,
                  border: `1px solid ${c.border}`,
                  borderRadius: '4px',
                  padding: '0.9rem 1rem',
                  fontSize: '1.2rem',
                  color: c.text,
                  outline: 'none',
                }}
              />
            </div>

            {calcValue && parseInt(calcValue) > 0 && (
              <div style={{
                background: `${c.accent}10`,
                borderRadius: '6px',
                padding: '1.5rem',
                marginBottom: '1.5rem',
              }}>
                <div style={{ fontSize: '0.75rem', color: c.textMuted, marginBottom: '0.3rem' }}>{t.calculator.result}</div>
                <div style={{ fontSize: '2.5rem', fontWeight: 300, color: c.accent }}>
                  ${(parseInt(calcValue) * 3).toLocaleString()}
                  <span style={{ fontSize: '1rem', color: c.textMuted }}>{t.calculator.month}</span>
                </div>
              </div>
            )}

            <p style={{ fontSize: '0.7rem', color: c.textDim, marginBottom: '1.5rem' }}>{t.calculator.note}</p>

            <a href="#apply" style={{
              display: 'inline-block',
              background: c.accent,
              color: c.bg,
              padding: '0.9rem 2rem',
              borderRadius: '4px',
              textDecoration: 'none',
              fontSize: '0.85rem',
              fontWeight: 500,
            }}>
              {t.calculator.cta}
            </a>
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" data-animate style={{
        padding: isMobile ? '5rem 1.5rem' : '7rem 4rem',
        ...fadeIn(visible.has('process')),
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div style={{ fontSize: '0.65rem', fontWeight: 500, letterSpacing: '0.2em', color: c.accent, marginBottom: '0.8rem' }}>
              {t.process.overline}
            </div>
            <h2 style={{ fontSize: isMobile ? '1.8rem' : '2.2rem', fontWeight: 300 }}>{t.process.title}</h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {t.process.steps.map((step, i) => (
              <div key={i} style={{
                display: 'flex',
                gap: isMobile ? '1.2rem' : '2rem',
                alignItems: 'flex-start',
                padding: isMobile ? '1.5rem' : '2rem',
                background: c.bgCard,
                borderRadius: '6px',
                border: `1px solid ${c.border}`,
              }}>
                <div style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  background: `${c.accent}20`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1rem',
                  fontWeight: 500,
                  color: c.accent,
                  flexShrink: 0,
                }}>
                  {step.num}
                </div>
                <div>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 500, marginBottom: '0.5rem' }}>{step.title}</h3>
                  <p style={{ fontSize: '0.9rem', lineHeight: 1.7, color: c.textMuted }}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" data-animate style={{
        padding: isMobile ? '5rem 1.5rem' : '7rem 4rem',
        background: c.bgAlt,
        ...fadeIn(visible.has('team')),
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <div style={{ fontSize: '0.65rem', fontWeight: 500, letterSpacing: '0.2em', color: c.accent, marginBottom: '0.8rem' }}>
              {t.team.overline}
            </div>
            <h2 style={{ fontSize: isMobile ? '1.8rem' : '2.2rem', fontWeight: 300 }}>{t.team.title}</h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
            gap: '0.8rem',
          }}>
            {t.team.roles.map((role, i) => (
              <div key={i} style={{
                background: c.bgCard,
                borderRadius: '4px',
                border: `1px solid ${c.border}`,
                padding: '1.2rem',
                textAlign: 'center',
                fontSize: '0.85rem',
                color: c.textMuted,
              }}>
                {role}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" data-animate style={{
        padding: isMobile ? '5rem 1.5rem' : '7rem 4rem',
        ...fadeIn(visible.has('testimonials')),
      }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div style={{ fontSize: '0.65rem', fontWeight: 500, letterSpacing: '0.2em', color: c.accent, marginBottom: '0.8rem' }}>
              {t.testimonials.overline}
            </div>
            <h2 style={{ fontSize: isMobile ? '1.8rem' : '2.2rem', fontWeight: 300 }}>{t.testimonials.title}</h2>
          </div>

          <div style={{ position: 'relative', minHeight: '320px' }}>
            {t.testimonials.items.map((item, i) => (
              <div key={i} style={{
                position: i === 0 ? 'relative' : 'absolute',
                top: 0,
                left: 0,
                right: 0,
                opacity: activeTestimonial === i ? 1 : 0,
                transform: activeTestimonial === i ? 'translateY(0)' : 'translateY(10px)',
                transition: 'all 0.5s ease',
                pointerEvents: activeTestimonial === i ? 'auto' : 'none',
              }}>
                <div style={{
                  background: c.bgCard,
                  borderRadius: '8px',
                  border: `1px solid ${c.border}`,
                  padding: isMobile ? '2rem' : '2.5rem',
                  textAlign: 'center',
                }}>
                  <div style={{
                    display: 'inline-block',
                    background: `${c.accent}20`,
                    borderRadius: '20px',
                    padding: '0.5rem 1.5rem',
                    marginBottom: '1.5rem',
                  }}>
                    <span style={{ fontSize: '1.5rem', fontWeight: 500, color: c.accent }}>{item.amount}</span>
                    <span style={{ fontSize: '0.85rem', color: c.textMuted }}>/mes</span>
                  </div>

                  <p style={{
                    fontSize: isMobile ? '1rem' : '1.15rem',
                    lineHeight: 1.8,
                    color: c.text,
                    fontStyle: 'italic',
                    marginBottom: '1.5rem',
                  }}>
                    "{item.quote}"
                  </p>

                  <div>
                    <div style={{ fontWeight: 500, color: c.text }}>{item.name}</div>
                    <div style={{ fontSize: '0.8rem', color: c.textDim }}>{item.before}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginTop: '1.5rem' }}>
            {t.testimonials.items.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveTestimonial(i)}
                style={{
                  width: activeTestimonial === i ? 24 : 8,
                  height: 8,
                  borderRadius: 4,
                  background: activeTestimonial === i ? c.accent : c.border,
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section id="benefits" data-animate style={{
        padding: isMobile ? '5rem 1.5rem' : '7rem 4rem',
        background: c.bgAlt,
        ...fadeIn(visible.has('benefits')),
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <div style={{ fontSize: '0.65rem', fontWeight: 500, letterSpacing: '0.2em', color: c.accent, marginBottom: '0.8rem' }}>
              {t.benefits.overline}
            </div>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
            gap: '1rem',
          }}>
            {t.benefits.items.map((b, i) => (
              <div key={i} style={{
                display: 'flex',
                gap: '1rem',
                padding: '1.5rem',
                background: c.bgCard,
                borderRadius: '6px',
                border: `1px solid ${c.border}`,
              }}>
                <span style={{ color: c.accent, fontSize: '1rem' }}>✓</span>
                <div>
                  <h4 style={{ fontSize: '0.95rem', fontWeight: 500, marginBottom: '0.3rem' }}>{b.title}</h4>
                  <p style={{ fontSize: '0.85rem', color: c.textMuted }}>{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" data-animate style={{
        padding: isMobile ? '5rem 1.5rem' : '7rem 4rem',
        ...fadeIn(visible.has('faq')),
      }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <div style={{ fontSize: '0.65rem', fontWeight: 500, letterSpacing: '0.2em', color: c.accent, marginBottom: '0.8rem' }}>
              {t.faq.overline}
            </div>
            <h2 style={{ fontSize: isMobile ? '1.8rem' : '2.2rem', fontWeight: 300 }}>{t.faq.title}</h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
            {t.faq.items.map((faq, i) => (
              <div key={i} style={{
                background: c.bgCard,
                borderRadius: '6px',
                border: `1px solid ${activeFaq === i ? c.accent + '50' : c.border}`,
                overflow: 'hidden',
                transition: 'border-color 0.2s ease',
              }}>
                <button
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  style={{
                    width: '100%',
                    padding: '1.2rem 1.5rem',
                    background: 'none',
                    border: 'none',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    cursor: 'pointer',
                    textAlign: 'left',
                  }}
                >
                  <span style={{ fontSize: '0.95rem', fontWeight: 500, color: c.text }}>{faq.q}</span>
                  <span style={{
                    color: c.accent,
                    fontSize: '1.2rem',
                    transform: activeFaq === i ? 'rotate(45deg)' : 'rotate(0)',
                    transition: 'transform 0.2s ease',
                  }}>+</span>
                </button>
                <div style={{
                  maxHeight: activeFaq === i ? '200px' : 0,
                  overflow: 'hidden',
                  transition: 'max-height 0.3s ease',
                }}>
                  <p style={{
                    padding: '0 1.5rem 1.2rem',
                    fontSize: '0.9rem',
                    lineHeight: 1.7,
                    color: c.textMuted,
                  }}>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Apply */}
      <section id="apply" data-animate style={{
        padding: isMobile ? '5rem 1.5rem' : '7rem 4rem',
        background: c.bgAlt,
        ...fadeIn(visible.has('apply')),
      }}>
        <div style={{
          maxWidth: '900px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
          gap: isMobile ? '2.5rem' : '4rem',
          alignItems: 'center',
        }}>
          <div style={{ textAlign: isMobile ? 'center' : 'left' }}>
            <div style={{ fontSize: '0.65rem', fontWeight: 500, letterSpacing: '0.2em', color: c.accent, marginBottom: '0.8rem' }}>
              {t.apply.overline}
            </div>
            <h2 style={{ fontSize: isMobile ? '2rem' : '2.5rem', fontWeight: 300, marginBottom: '1rem' }}>
              {t.apply.title}
            </h2>
            <p style={{ fontSize: '1rem', lineHeight: 1.8, color: c.textMuted, marginBottom: '1.5rem' }}>
              {t.apply.subtitle}
            </p>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.6rem',
              padding: '0.8rem 1.2rem',
              background: `${c.accent}10`,
              borderRadius: '4px',
            }}>
              <span style={{ color: c.accent }}>✓</span>
              <span style={{ fontSize: '0.85rem', color: c.accent }}>{t.apply.guarantee}</span>
            </div>
          </div>

          <div style={{
            background: c.bgCard,
            borderRadius: '8px',
            border: `1px solid ${c.border}`,
            padding: isMobile ? '2rem' : '2.5rem',
            position: 'relative',
          }}>
            {formSubmitted && (
              <div style={{
                position: 'absolute',
                inset: 0,
                background: c.bgCard,
                borderRadius: '8px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '1rem',
                zIndex: 10,
              }}>
                <div style={{
                  width: 60,
                  height: 60,
                  borderRadius: '50%',
                  background: c.accent,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.5rem',
                  color: c.bg,
                }}>✓</div>
                <div style={{ fontSize: '1.1rem', fontWeight: 500 }}>{t.apply.form.success}</div>
                <div style={{ fontSize: '0.85rem', color: c.textMuted }}>{t.apply.form.successMsg}</div>
              </div>
            )}

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
              {[
                { key: 'name' as const, label: t.apply.form.name },
                { key: 'handle' as const, label: t.apply.form.handle },
                { key: 'platform' as const, label: t.apply.form.platform },
                { key: 'followers' as const, label: t.apply.form.followers },
                { key: 'contact' as const, label: t.apply.form.contact },
              ].map((field) => (
                <div key={field.key}>
                  <label style={{
                    display: 'block',
                    fontSize: '0.7rem',
                    fontWeight: 500,
                    color: c.textMuted,
                    marginBottom: '0.5rem',
                    letterSpacing: '0.1em',
                  }}>{field.label}</label>
                  <input
                    type="text"
                    value={formData[field.key]}
                    onChange={(e) => setFormData({ ...formData, [field.key]: e.target.value })}
                    style={{
                      width: '100%',
                      background: c.bg,
                      border: `1px solid ${c.border}`,
                      borderRadius: '4px',
                      padding: '0.9rem 1rem',
                      fontSize: '0.95rem',
                      color: c.text,
                      outline: 'none',
                      transition: 'border-color 0.2s ease',
                    }}
                    onFocus={(e) => e.currentTarget.style.borderColor = c.accent}
                    onBlur={(e) => e.currentTarget.style.borderColor = c.border}
                  />
                </div>
              ))}

              <button type="submit" style={{
                marginTop: '0.5rem',
                background: c.accent,
                color: c.bg,
                border: 'none',
                borderRadius: '4px',
                padding: '1rem',
                fontSize: '0.9rem',
                fontWeight: 500,
                cursor: 'pointer',
                transition: 'opacity 0.2s ease',
              }}>
                {t.apply.form.submit}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        padding: isMobile ? '2.5rem 1.5rem' : '3rem 4rem',
        borderTop: `1px solid ${c.border}`,
      }}>
        <div style={{
          maxWidth: '900px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '1.5rem',
        }}>
          <div style={{ textAlign: isMobile ? 'center' : 'left' }}>
            <div style={{ fontSize: '1.1rem', fontWeight: 300, letterSpacing: '0.2em', marginBottom: '0.3rem' }}>SILVER</div>
            <div style={{ fontSize: '0.75rem', color: c.textDim }}>{t.footer.tagline}</div>
          </div>

          <div style={{ display: 'flex', gap: '2rem' }}>
            {['Telegram', 'Twitter', 'Instagram'].map((link) => (
              <a key={link} href="#" style={{
                fontSize: '0.8rem',
                color: c.textDim,
                textDecoration: 'none',
                transition: 'color 0.2s ease',
              }}
              onMouseOver={(e) => e.currentTarget.style.color = c.text}
              onMouseOut={(e) => e.currentTarget.style.color = c.textDim}
              >{link}</a>
            ))}
          </div>

          <div style={{ fontSize: '0.7rem', color: c.textDim }}>
            © 2025 · 18+
          </div>
        </div>
      </footer>

      {/* Floating Button */}
      <a href="#apply" style={{
        position: 'fixed',
        bottom: isMobile ? '1.5rem' : '2rem',
        right: isMobile ? '1.5rem' : '2rem',
        width: 50,
        height: 50,
        borderRadius: '50%',
        background: c.accent,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textDecoration: 'none',
        boxShadow: `0 4px 20px ${c.accent}40`,
        zIndex: 90,
        transition: 'transform 0.2s ease',
      }}
      onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
      onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={c.bg} strokeWidth="2.5">
          <path d="M22 2L11 13M22 2L15 22L11 13L2 9L22 2Z" />
        </svg>
      </a>
    </div>
  );
}
