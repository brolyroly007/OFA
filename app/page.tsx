'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';

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
      title3: 'en ingresos reales.',
      subtitle: 'Más de 5 años de experiencia llevando modelos desde cero hasta facturar 6 cifras mensuales. Gestión profesional, estrategia personalizada y resultados reales.',
      cta: 'Comienza Ahora',
      cta2: 'Ver Resultados',
    },
    stats: {
      models: 'Modelos Activas',
      revenue: 'Generado Total',
      growth: 'Crecimiento Promedio',
      satisfaction: 'Satisfacción',
    },
    whyUs: {
      overline: 'POR QUÉ ELEGIRNOS',
      title: 'La diferencia está en los resultados.',
      us: 'Silver Agency',
      others: 'Otras Agencias',
      items: [
        { us: 'Protección DMCA y cumplimiento legal completo', others: 'Sin cobertura legal' },
        { us: 'Dirección creativa personalizada 1 a 1', others: 'Sin dirección de contenido' },
        { us: 'Escalamos hasta $100K+ mensuales', others: 'Resultados limitados' },
        { us: 'Sin contratos abusivos ni permanencia', others: 'Penalizaciones ocultas' },
        { us: 'Managers dedicados que entienden tu realidad', others: 'Falta de conexión personal' },
        { us: 'Chatters 24/7 en múltiples idiomas', others: 'Respuestas lentas y genéricas' },
      ],
    },
    services: {
      overline: 'SERVICIOS PREMIUM',
      title: 'Todo lo que necesitas para triunfar.',
      items: [
        { name: 'Privacidad Total', desc: 'Bloqueo geográfico avanzado y protección completa de tu identidad. Tu tranquilidad es nuestra prioridad.', icon: '🛡️' },
        { name: 'Gestión 360°', desc: 'Optimizamos tu perfil existente o creamos todo desde cero. Tú solo enfócate en crear contenido.', icon: '⚡' },
        { name: 'Community Manager', desc: 'Respondemos todos los mensajes con personalidad, manteniendo a tus fans enganchados y satisfechos.', icon: '💬' },
        { name: 'Marketing Viral', desc: 'Estrategias probadas en redes sociales con resultados visibles en menos de 30 días.', icon: '🚀' },
        { name: 'Chatters Elite', desc: 'Equipo profesional en múltiples idiomas para maximizar tus ventas PPV y tips.', icon: '💎' },
        { name: 'Branding Personal', desc: 'Desarrollamos tu marca personal única que te diferencia y atrae seguidores fieles.', icon: '✨' },
      ],
    },
    calculator: {
      overline: 'CALCULADORA DE INGRESOS',
      title: 'Descubre tu potencial real',
      label: 'Tu ingreso mensual actual (USD)',
      placeholder: '2000',
      result: 'Tu potencial con Silver',
      month: '/mes',
      note: '*Proyección basada en el incremento promedio de nuestras modelos (200%)',
      cta: 'Quiero estos resultados',
    },
    process: {
      overline: 'PROCESO',
      title: 'Tres pasos hacia tu éxito.',
      steps: [
        { num: '01', title: 'Contacto Inicial', desc: 'Completa el formulario con tus datos. Te contactamos en menos de 24 horas para conocer tus metas y expectativas.' },
        { num: '02', title: 'Plan Personalizado', desc: 'Analizamos tu perfil, audiencia y potencial. Diseñamos una estrategia única adaptada a ti.' },
        { num: '03', title: 'Crecimiento Real', desc: 'Manager personal dedicado, estrategia basada en datos y resultados medibles desde el primer mes.' },
      ],
    },
    team: {
      overline: 'NUESTRO EQUIPO',
      title: 'Expertos dedicados a tu éxito.',
      roles: [
        { name: 'Content Manager', desc: 'Estrategia de contenido' },
        { name: 'Video Editor', desc: 'Producción profesional' },
        { name: 'Community', desc: 'Gestión de comunidad' },
        { name: 'Chatters', desc: 'Ventas y engagement' },
        { name: 'Marketing', desc: 'Crecimiento orgánico' },
        { name: 'Diseño', desc: 'Branding visual' },
        { name: 'AI Tech', desc: 'Automatización' },
        { name: 'Analytics', desc: 'Datos y métricas' },
      ],
    },
    testimonials: {
      overline: 'CASOS DE ÉXITO',
      title: 'Resultados que hablan por sí solos.',
      items: [
        { name: 'Valentina', amount: '€32,000', before: 'Ex recepcionista', quote: 'En 3 meses pasé de no saber nada a generar más de 30K. El equipo es increíble y siempre están ahí para apoyarte.', months: '3 meses' },
        { name: 'Isabella', amount: '€28,000', before: 'Ex estudiante', quote: 'Nunca imaginé que podría tener esta independencia económica. Silver cambió mi vida completamente.', months: '4 meses' },
        { name: 'Camila', amount: '€45,000', before: 'Ex camarera', quote: 'De trabajar turnos de 12 horas a facturar 45K desde casa. La mejor decisión que he tomado.', months: '6 meses' },
      ],
    },
    benefits: {
      overline: 'BENEFICIOS EXCLUSIVOS',
      title: 'Más que una agencia, somos tu equipo.',
      items: [
        { title: 'Sin inversión inicial', desc: 'Empezamos a trabajar sin que pongas un solo euro. Solo ganamos cuando tú ganas.' },
        { title: 'Contrato transparente', desc: 'Sin letra pequeña, sin sorpresas, sin permanencia obligatoria.' },
        { title: 'Bonus y regalos', desc: 'Viajes, tecnología, ropa de marca y sorpresas para nuestras top performers.' },
        { title: 'Soporte 24/7', desc: 'Equipo disponible cualquier día, a cualquier hora. Nunca estarás sola.' },
      ],
    },
    faq: {
      overline: 'PREGUNTAS FRECUENTES',
      title: 'Resolvemos tus dudas.',
      items: [
        { q: '¿Tengo que pagar algo para empezar?', a: 'Absolutamente no. Solo cobramos un porcentaje de lo que generas. Si tú no ganas, nosotros tampoco. Así de simple.' },
        { q: '¿Qué tengo que hacer exactamente?', a: 'Tu único trabajo es crear contenido. Nosotros nos encargamos de TODO lo demás: gestión, marketing, chatters, redes sociales, estrategia.' },
        { q: '¿Cuánto puedo llegar a ganar?', a: 'Nuestras modelos experimentan un incremento promedio del 200%. Varias de ellas superan los €50,000 mensuales. Tu límite lo pones tú.' },
        { q: '¿Y si no funciona?', a: 'Si no ves crecimiento en los primeros 30 días, puedes irte sin ningún compromiso ni penalización. Confiamos en nuestro trabajo.' },
        { q: '¿Cuáles son los requisitos?', a: 'Ser mayor de 18 años, tener motivación y compromiso. No necesitas experiencia previa, nosotros te guiamos en todo.' },
        { q: '¿Manejan mis redes sociales?', a: 'Sí, gestionamos Instagram, TikTok, Twitter, Reddit, Telegram y más. Creamos contenido viral que atrae tráfico cualificado.' },
        { q: '¿Cómo protegen mi privacidad?', a: 'Bloqueo geográfico por país, protección DMCA activa 24/7, cumplimiento total de GDPR. Tu identidad está 100% protegida.' },
        { q: '¿Trabajan con modelos internacionales?', a: 'Sí, trabajamos con modelos de todo el mundo. Nuestro equipo de chatters domina múltiples idiomas.' },
      ],
    },
    apply: {
      overline: 'ÚNETE AL ÉXITO',
      title: '¿Lista para cambiar tu vida?',
      subtitle: 'Solo aceptamos el 5% de las solicitudes. Buscamos modelos comprometidas que quieran resultados reales.',
      guarantee: 'Garantía: Si no creces en 30 días, te vas sin compromiso.',
      form: {
        name: 'Tu nombre',
        handle: 'Tu @usuario',
        platform: 'Plataforma principal',
        followers: 'Seguidores actuales',
        contact: 'Telegram o Email',
        submit: 'Enviar Solicitud',
        success: '¡Solicitud Enviada!',
        successMsg: 'Te contactamos en menos de 24h',
      },
    },
    footer: {
      tagline: 'Gestión premium de creadoras de contenido',
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
      title1: 'Transform your',
      title2: 'potential',
      title3: 'into real income.',
      subtitle: 'Over 5 years of experience taking models from zero to six-figure monthly earnings. Professional management, personalized strategy and real results.',
      cta: 'Start Now',
      cta2: 'See Results',
    },
    stats: {
      models: 'Active Models',
      revenue: 'Total Generated',
      growth: 'Average Growth',
      satisfaction: 'Satisfaction',
    },
    whyUs: {
      overline: 'WHY CHOOSE US',
      title: 'The difference is in the results.',
      us: 'Silver Agency',
      others: 'Other Agencies',
      items: [
        { us: 'Full DMCA protection and legal compliance', others: 'No legal coverage' },
        { us: 'Personalized 1-on-1 creative direction', others: 'No content direction' },
        { us: 'Scale up to $100K+ monthly', others: 'Limited results' },
        { us: 'No abusive contracts or lock-ins', others: 'Hidden penalties' },
        { us: 'Dedicated managers who understand you', others: 'Lack of personal connection' },
        { us: '24/7 multilingual chatters', others: 'Slow, generic responses' },
      ],
    },
    services: {
      overline: 'PREMIUM SERVICES',
      title: 'Everything you need to succeed.',
      items: [
        { name: 'Total Privacy', desc: 'Advanced geo-blocking and complete identity protection. Your peace of mind is our priority.', icon: '🛡️' },
        { name: '360° Management', desc: 'We optimize your existing profile or create everything from scratch. Just focus on creating content.', icon: '⚡' },
        { name: 'Community Manager', desc: 'We respond to all messages with personality, keeping your fans engaged and satisfied.', icon: '💬' },
        { name: 'Viral Marketing', desc: 'Proven social media strategies with visible results in less than 30 days.', icon: '🚀' },
        { name: 'Elite Chatters', desc: 'Professional multilingual team to maximize your PPV sales and tips.', icon: '💎' },
        { name: 'Personal Branding', desc: 'We develop your unique personal brand that differentiates you and attracts loyal followers.', icon: '✨' },
      ],
    },
    calculator: {
      overline: 'INCOME CALCULATOR',
      title: 'Discover your real potential',
      label: 'Your current monthly income (USD)',
      placeholder: '2000',
      result: 'Your potential with Silver',
      month: '/mo',
      note: '*Projection based on our models average increase (200%)',
      cta: 'I want these results',
    },
    process: {
      overline: 'PROCESS',
      title: 'Three steps to your success.',
      steps: [
        { num: '01', title: 'Initial Contact', desc: 'Fill out the form with your details. We contact you in less than 24 hours to understand your goals.' },
        { num: '02', title: 'Custom Plan', desc: 'We analyze your profile, audience and potential. We design a unique strategy tailored to you.' },
        { num: '03', title: 'Real Growth', desc: 'Dedicated personal manager, data-driven strategy and measurable results from the first month.' },
      ],
    },
    team: {
      overline: 'OUR TEAM',
      title: 'Experts dedicated to your success.',
      roles: [
        { name: 'Content Manager', desc: 'Content strategy' },
        { name: 'Video Editor', desc: 'Pro production' },
        { name: 'Community', desc: 'Community management' },
        { name: 'Chatters', desc: 'Sales & engagement' },
        { name: 'Marketing', desc: 'Organic growth' },
        { name: 'Design', desc: 'Visual branding' },
        { name: 'AI Tech', desc: 'Automation' },
        { name: 'Analytics', desc: 'Data & metrics' },
      ],
    },
    testimonials: {
      overline: 'SUCCESS STORIES',
      title: 'Results that speak for themselves.',
      items: [
        { name: 'Valentina', amount: '€32,000', before: 'Former receptionist', quote: 'In 3 months I went from knowing nothing to generating over 30K. The team is incredible and always there to support you.', months: '3 months' },
        { name: 'Isabella', amount: '€28,000', before: 'Former student', quote: 'I never imagined I could have this financial independence. Silver completely changed my life.', months: '4 months' },
        { name: 'Camila', amount: '€45,000', before: 'Former waitress', quote: 'From working 12-hour shifts to billing 45K from home. The best decision I ever made.', months: '6 months' },
      ],
    },
    benefits: {
      overline: 'EXCLUSIVE BENEFITS',
      title: 'More than an agency, we are your team.',
      items: [
        { title: 'No upfront investment', desc: 'We start working without you putting a single euro. We only earn when you earn.' },
        { title: 'Transparent contract', desc: 'No fine print, no surprises, no mandatory permanence.' },
        { title: 'Bonuses and gifts', desc: 'Trips, tech, designer clothes and surprises for our top performers.' },
        { title: '24/7 Support', desc: 'Team available any day, any time. You will never be alone.' },
      ],
    },
    faq: {
      overline: 'FAQ',
      title: 'We answer your questions.',
      items: [
        { q: 'Do I have to pay anything to start?', a: 'Absolutely not. We only charge a percentage of what you generate. If you don\'t earn, we don\'t earn. Simple as that.' },
        { q: 'What exactly do I have to do?', a: 'Your only job is to create content. We handle EVERYTHING else: management, marketing, chatters, social media, strategy.' },
        { q: 'How much can I earn?', a: 'Our models experience an average increase of 200%. Several of them exceed €50,000 monthly. Your limit is up to you.' },
        { q: 'What if it doesn\'t work?', a: 'If you don\'t see growth in the first 30 days, you can leave with no commitment or penalty. We trust our work.' },
        { q: 'What are the requirements?', a: 'Be over 18, have motivation and commitment. No prior experience needed, we guide you through everything.' },
        { q: 'Do you manage my social media?', a: 'Yes, we manage Instagram, TikTok, Twitter, Reddit, Telegram and more. We create viral content that attracts qualified traffic.' },
        { q: 'How do you protect my privacy?', a: 'Geo-blocking by country, active 24/7 DMCA protection, full GDPR compliance. Your identity is 100% protected.' },
        { q: 'Do you work with international models?', a: 'Yes, we work with models from all over the world. Our chatter team masters multiple languages.' },
      ],
    },
    apply: {
      overline: 'JOIN SUCCESS',
      title: 'Ready to change your life?',
      subtitle: 'We only accept 5% of applications. We look for committed models who want real results.',
      guarantee: 'Guarantee: If you don\'t grow in 30 days, you leave with no strings attached.',
      form: {
        name: 'Your name',
        handle: 'Your @username',
        platform: 'Main platform',
        followers: 'Current followers',
        contact: 'Telegram or Email',
        submit: 'Submit Application',
        success: 'Application Sent!',
        successMsg: 'We\'ll contact you in less than 24h',
      },
    },
    footer: {
      tagline: 'Premium content creator management',
    },
  },
};

// Particle component for background
const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Array<{
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
      pulse: number;
    }> = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticles = () => {
      particles = [];
      const numParticles = Math.floor((canvas.width * canvas.height) / 15000);
      for (let i = 0; i < numParticles; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 0.5,
          speedX: (Math.random() - 0.5) * 0.3,
          speedY: (Math.random() - 0.5) * 0.3,
          opacity: Math.random() * 0.5 + 0.2,
          pulse: Math.random() * Math.PI * 2,
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;
        p.pulse += 0.02;

        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        const pulseOpacity = p.opacity * (0.7 + Math.sin(p.pulse) * 0.3);
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(200, 164, 180, ${pulseOpacity})`;
        ctx.fill();
      });

      // Draw connections
      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach((p2) => {
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(200, 164, 180, ${0.1 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    resize();
    createParticles();
    animate();

    window.addEventListener('resize', () => {
      resize();
      createParticles();
    });

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
      }}
    />
  );
};

// Counter animation hook
const useCounter = (end: number, duration: number = 2000, start: number = 0) => {
  const [count, setCount] = useState(start);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(start + (end - start) * easeOut));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [isVisible, end, duration, start]);

  return { count, ref };
};

// Scroll reveal hook
const useScrollReveal = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return { ref, isVisible };
};

// Mouse glow component
const MouseGlow = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', handleMouseMove);
    document.body.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      style={{
        position: 'fixed',
        left: position.x - 200,
        top: position.y - 200,
        width: 400,
        height: 400,
        background: 'radial-gradient(circle, rgba(200,164,180,0.15) 0%, transparent 70%)',
        borderRadius: '50%',
        pointerEvents: 'none',
        zIndex: 1,
        transition: 'left 0.1s ease-out, top 0.1s ease-out',
      }}
    />
  );
};

// Scroll progress bar
const ScrollProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress((scrollTop / docHeight) * 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        height: '3px',
        width: `${progress}%`,
        background: 'linear-gradient(90deg, #c8a4b4 0%, #d4b8c4 100%)',
        zIndex: 1000,
        transition: 'width 0.1s ease-out',
      }}
    />
  );
};

export default function SilverAgency() {
  const [scrollY, setScrollY] = useState(0);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({ name: '', handle: '', platform: '', followers: '', contact: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [lang, setLang] = useState<'es' | 'en'>('es');
  const [calcValue, setCalcValue] = useState('');
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [hoveredService, setHoveredService] = useState<number | null>(null);
  const [hoveredImage, setHoveredImage] = useState<number | null>(null);

  const t = translations[lang];

  const c = {
    bg: '#08080a',
    bgAlt: '#0c0c0e',
    bgCard: 'rgba(18,18,22,0.85)',
    text: '#f5f5f7',
    textMuted: '#9898a0',
    textDim: '#58585f',
    accent: '#c8a4b4',
    accentLight: '#dcc4cf',
    accentDark: '#a68494',
    border: 'rgba(255,255,255,0.06)',
    borderHover: 'rgba(200,164,180,0.3)',
    glow: 'rgba(200,164,180,0.2)',
  };

  const images = {
    hero: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=900&q=85',
    hero2: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=600&q=80',
    model1: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=500&q=85',
    model2: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=500&q=85',
    model3: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=500&q=85',
    model4: 'https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=500&q=85',
    lifestyle1: 'https://images.unsplash.com/photo-1560087637-bf797bc7a164?w=700&q=80',
    lifestyle2: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=700&q=80',
    testimonial1: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=250&q=80',
    testimonial2: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=250&q=80',
    testimonial3: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=250&q=80',
  };

  // Stats with counter animation
  const stat1 = useCounter(50, 2000);
  const stat2 = useCounter(10, 2500);
  const stat3 = useCounter(200, 2000);
  const stat4 = useCounter(98, 2000);

  // Scroll reveal for sections
  const heroReveal = useScrollReveal();
  const whyUsReveal = useScrollReveal();
  const servicesReveal = useScrollReveal();
  const galleryReveal = useScrollReveal();
  const calculatorReveal = useScrollReveal();
  const processReveal = useScrollReveal();
  const teamReveal = useScrollReveal();
  const testimonialsReveal = useScrollReveal();
  const benefitsReveal = useScrollReveal();
  const faqReveal = useScrollReveal();
  const applyReveal = useScrollReveal();

  useEffect(() => {
    const browserLang = navigator.language.toLowerCase();
    setLang(browserLang.startsWith('es') ? 'es' : 'en');

    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);

    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % 3);
    }, 6000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', checkMobile);
      clearInterval(interval);
    };
  }, []);

  // Typing effect
  useEffect(() => {
    const text = t.hero.title2;
    let i = 0;
    setTypedText('');
    const typeInterval = setInterval(() => {
      if (i < text.length) {
        setTypedText(text.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typeInterval);
      }
    }, 100);
    return () => clearInterval(typeInterval);
  }, [lang, t.hero.title2]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.handle && formData.contact) {
      setFormSubmitted(true);
      setTimeout(() => {
        setFormSubmitted(false);
        setFormData({ name: '', handle: '', platform: '', followers: '', contact: '' });
      }, 4000);
    }
  };

  const revealStyle = (isVisible: boolean, delay: number = 0) => ({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
    transition: `opacity 0.8s ease ${delay}s, transform 0.8s ease ${delay}s`,
  });

  return (
    <div style={{
      minHeight: '100vh',
      background: c.bg,
      color: c.text,
      fontFamily: '"Inter", system-ui, -apple-system, sans-serif',
      position: 'relative',
      overflowX: 'hidden',
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        ::selection { background: ${c.accent}50; }
        input::placeholder { color: ${c.textDim}; }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(2deg); }
        }
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px ${c.glow}; }
          50% { box-shadow: 0 0 40px ${c.glow}, 0 0 60px ${c.glow}; }
        }
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes typing-cursor {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        @keyframes scale-in {
          0% { transform: scale(0.9); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }
        @keyframes slide-up {
          0% { transform: translateY(30px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }

        .image-hover {
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .image-hover:hover {
          transform: scale(1.05) translateY(-10px);
          box-shadow: 0 25px 50px rgba(0,0,0,0.4);
        }

        .card-hover {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .card-hover:hover {
          transform: translateY(-8px);
          border-color: ${c.borderHover};
          box-shadow: 0 20px 40px rgba(0,0,0,0.3), 0 0 30px ${c.glow};
        }

        .btn-hover {
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        .btn-hover::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          transition: left 0.5s;
        }
        .btn-hover:hover::before {
          left: 100%;
        }
        .btn-hover:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 30px rgba(200,164,180,0.4);
        }
      `}</style>

      <ParticleBackground />
      <MouseGlow />
      <ScrollProgress />

      {/* Gradient overlays */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: `
          radial-gradient(ellipse 80% 50% at 50% -20%, ${c.accent}15 0%, transparent 50%),
          radial-gradient(ellipse 60% 40% at 100% 50%, ${c.accentDark}10 0%, transparent 50%),
          radial-gradient(ellipse 60% 40% at 0% 80%, ${c.accent}08 0%, transparent 50%)
        `,
        pointerEvents: 'none',
        zIndex: 0,
      }} />

      {/* Nav */}
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        padding: isMobile ? '1rem 1.5rem' : '1rem 4rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        zIndex: 100,
        background: scrollY > 50 ? `${c.bg}f5` : 'transparent',
        backdropFilter: scrollY > 50 ? 'blur(20px) saturate(180%)' : 'none',
        borderBottom: scrollY > 50 ? `1px solid ${c.border}` : 'none',
        transition: 'all 0.4s ease',
      }}>
        <a href="#" style={{
          fontSize: isMobile ? '1.3rem' : '1.5rem',
          fontWeight: 600,
          letterSpacing: '0.25em',
          color: c.text,
          textDecoration: 'none',
          background: `linear-gradient(135deg, ${c.text} 0%, ${c.accent} 100%)`,
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}>
          SILVER
        </a>

        {!isMobile && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '2.5rem' }}>
            <div style={{ display: 'flex', gap: '0.3rem', background: c.bgCard, borderRadius: '8px', padding: '0.3rem' }}>
              {['es', 'en'].map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l as 'es' | 'en')}
                  style={{
                    background: lang === l ? `linear-gradient(135deg, ${c.accent} 0%, ${c.accentLight} 100%)` : 'transparent',
                    border: 'none',
                    color: lang === l ? c.bg : c.textMuted,
                    padding: '0.5rem 1rem',
                    borderRadius: '6px',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
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
                    fontSize: '0.95rem',
                    fontWeight: 500,
                    transition: 'all 0.3s ease',
                    position: 'relative',
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.color = c.text;
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.color = c.textMuted;
                  }}
                >
                  {t.nav[key as keyof typeof t.nav]}
                </a>
              ))}
            </div>
            <a
              href="#apply"
              className="btn-hover"
              style={{
                background: `linear-gradient(135deg, ${c.accent} 0%, ${c.accentLight} 100%)`,
                color: c.bg,
                padding: '0.75rem 1.75rem',
                borderRadius: '8px',
                textDecoration: 'none',
                fontSize: '0.95rem',
                fontWeight: 600,
              }}
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
              fontSize: '1.5rem',
              cursor: 'pointer',
              padding: '0.5rem',
            }}
          >
            {menuOpen ? '✕' : '☰'}
          </button>
        )}
      </nav>

      {/* Mobile Menu */}
      {isMobile && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: c.bg,
          zIndex: 99,
          padding: '6rem 2rem 2rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          transform: menuOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        }}>
          {['services', 'process', 'testimonials', 'faq'].map((key, i) => (
            <a
              key={key}
              href={`#${key}`}
              onClick={() => setMenuOpen(false)}
              style={{
                color: c.text,
                textDecoration: 'none',
                fontSize: '1.5rem',
                fontWeight: 500,
                padding: '1rem 0',
                borderBottom: `1px solid ${c.border}`,
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? 'translateX(0)' : 'translateX(50px)',
                transition: `all 0.4s ease ${i * 0.1}s`,
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
                  padding: '1rem 2rem',
                  borderRadius: '8px',
                  fontSize: '1rem',
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
            onClick={() => setMenuOpen(false)}
            style={{
              background: `linear-gradient(135deg, ${c.accent} 0%, ${c.accentLight} 100%)`,
              color: c.bg,
              padding: '1.2rem',
              borderRadius: '10px',
              textDecoration: 'none',
              fontSize: '1.1rem',
              fontWeight: 600,
              textAlign: 'center',
              marginTop: 'auto',
            }}
          >
            {t.nav.apply}
          </a>
        </div>
      )}

      {/* Hero */}
      <section
        ref={heroReveal.ref}
        style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: isMobile ? '7rem 1.5rem 4rem' : '0 4rem',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
          gap: isMobile ? '3rem' : '5rem',
          maxWidth: '1300px',
          width: '100%',
          alignItems: 'center',
        }}>
          <div style={{
            textAlign: isMobile ? 'center' : 'left',
            ...revealStyle(heroReveal.isVisible, 0),
          }}>
            <div style={{
              display: 'inline-block',
              fontSize: isMobile ? '0.75rem' : '0.85rem',
              fontWeight: 600,
              letterSpacing: '0.3em',
              color: c.accent,
              marginBottom: '1.5rem',
              padding: '0.5rem 1rem',
              background: `${c.accent}15`,
              borderRadius: '30px',
              border: `1px solid ${c.accent}30`,
            }}>
              {t.hero.overline}
            </div>

            <h1 style={{
              fontSize: isMobile ? '2.5rem' : '4rem',
              fontWeight: 700,
              lineHeight: 1.1,
              marginBottom: '1.5rem',
            }}>
              <span style={{ display: 'block', color: c.text }}>{t.hero.title1}</span>
              <span style={{
                display: 'inline-block',
                background: `linear-gradient(135deg, ${c.accent} 0%, ${c.accentLight} 50%, ${c.accent} 100%)`,
                backgroundSize: '200% auto',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                animation: 'gradient-shift 3s ease infinite',
                minWidth: '200px',
              }}>
                {typedText}
                <span style={{
                  animation: 'typing-cursor 1s infinite',
                  borderRight: `3px solid ${c.accent}`,
                  marginLeft: '2px',
                }}></span>
              </span>
              <span style={{ display: 'block', color: c.text }}>{t.hero.title3}</span>
            </h1>

            <p style={{
              fontSize: isMobile ? '1rem' : '1.15rem',
              lineHeight: 1.8,
              color: c.textMuted,
              maxWidth: '520px',
              margin: isMobile ? '0 auto 2rem' : '0 0 2rem',
            }}>
              {t.hero.subtitle}
            </p>

            <div style={{
              display: 'flex',
              flexDirection: isMobile ? 'column' : 'row',
              gap: '1rem',
              justifyContent: isMobile ? 'center' : 'flex-start',
              marginBottom: '3rem',
            }}>
              <a href="#apply" className="btn-hover" style={{
                background: `linear-gradient(135deg, ${c.accent} 0%, ${c.accentLight} 100%)`,
                color: c.bg,
                padding: '1rem 2.5rem',
                borderRadius: '10px',
                textDecoration: 'none',
                fontSize: '1rem',
                fontWeight: 600,
                textAlign: 'center',
              }}>
                {t.hero.cta}
              </a>
              <a href="#testimonials" style={{
                background: 'transparent',
                color: c.text,
                padding: '1rem 2.5rem',
                borderRadius: '10px',
                textDecoration: 'none',
                fontSize: '1rem',
                fontWeight: 500,
                border: `1px solid ${c.border}`,
                backdropFilter: 'blur(10px)',
                textAlign: 'center',
                transition: 'all 0.3s ease',
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.borderColor = c.accent;
                e.currentTarget.style.background = `${c.accent}10`;
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.borderColor = c.border;
                e.currentTarget.style.background = 'transparent';
              }}
              >
                {t.hero.cta2}
              </a>
            </div>

            {/* Stats */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: isMobile ? '1rem' : '2rem',
            }}>
              {[
                { ref: stat1.ref, count: stat1.count, suffix: '+', label: t.stats.models },
                { ref: stat2.ref, count: stat2.count, prefix: '$', suffix: 'M+', label: t.stats.revenue },
                { ref: stat3.ref, count: stat3.count, suffix: '%', label: t.stats.growth },
                { ref: stat4.ref, count: stat4.count, suffix: '%', label: t.stats.satisfaction },
              ].map((s, i) => (
                <div key={i} ref={s.ref} style={{
                  textAlign: 'center',
                  padding: '1rem 0.5rem',
                  background: c.bgCard,
                  borderRadius: '12px',
                  border: `1px solid ${c.border}`,
                }}>
                  <div style={{
                    fontSize: isMobile ? '1.5rem' : '2rem',
                    fontWeight: 700,
                    background: `linear-gradient(135deg, ${c.text} 0%, ${c.accent} 100%)`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}>
                    {s.prefix || ''}{s.count}{s.suffix || ''}
                  </div>
                  <div style={{
                    fontSize: isMobile ? '0.65rem' : '0.75rem',
                    color: c.textDim,
                    marginTop: '0.3rem',
                    fontWeight: 500,
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                  }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Images */}
          {!isMobile && (
            <div style={{
              position: 'relative',
              height: '650px',
              ...revealStyle(heroReveal.isVisible, 0.2),
            }}>
              {/* Main image */}
              <div style={{
                position: 'absolute',
                top: '5%',
                right: 0,
                width: '75%',
                height: '80%',
                borderRadius: '24px',
                overflow: 'hidden',
                border: `1px solid ${c.border}`,
                boxShadow: `0 30px 60px rgba(0,0,0,0.4)`,
              }}>
                <Image
                  src={images.hero}
                  alt="Model"
                  fill
                  style={{ objectFit: 'cover' }}
                  priority
                />
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: `linear-gradient(to top, ${c.bg} 0%, transparent 30%)`,
                }} />
              </div>

              {/* Secondary floating image */}
              <div style={{
                position: 'absolute',
                bottom: '10%',
                left: 0,
                width: '45%',
                height: '40%',
                borderRadius: '20px',
                overflow: 'hidden',
                border: `1px solid ${c.border}`,
                boxShadow: `0 20px 40px rgba(0,0,0,0.3)`,
                animation: 'float 6s ease-in-out infinite',
              }}>
                <Image
                  src={images.hero2}
                  alt="Model 2"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>

              {/* Floating stats card */}
              <div style={{
                position: 'absolute',
                top: '15%',
                left: '-5%',
                background: c.bgCard,
                backdropFilter: 'blur(20px)',
                borderRadius: '16px',
                padding: '1.5rem',
                border: `1px solid ${c.border}`,
                animation: 'float 8s ease-in-out infinite',
                animationDelay: '-2s',
              }}>
                <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🚀</div>
                <div style={{ fontSize: '1.5rem', fontWeight: 700, color: c.accent }}>+200%</div>
                <div style={{ fontSize: '0.8rem', color: c.textMuted }}>Avg. Growth</div>
              </div>

              {/* Decorative glow */}
              <div style={{
                position: 'absolute',
                bottom: '20%',
                right: '10%',
                width: '250px',
                height: '250px',
                background: `radial-gradient(circle, ${c.accent}25 0%, transparent 70%)`,
                borderRadius: '50%',
                filter: 'blur(60px)',
                animation: 'pulse-glow 4s ease-in-out infinite',
              }} />
            </div>
          )}
        </div>
      </section>

      {/* Why Us */}
      <section
        id="whyus"
        ref={whyUsReveal.ref}
        style={{
          padding: isMobile ? '5rem 1.5rem' : '8rem 4rem',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{
            textAlign: 'center',
            marginBottom: '4rem',
            ...revealStyle(whyUsReveal.isVisible, 0),
          }}>
            <div style={{
              display: 'inline-block',
              fontSize: '0.85rem',
              fontWeight: 600,
              letterSpacing: '0.25em',
              color: c.accent,
              marginBottom: '1rem',
              padding: '0.5rem 1rem',
              background: `${c.accent}15`,
              borderRadius: '30px',
            }}>
              {t.whyUs.overline}
            </div>
            <h2 style={{ fontSize: isMobile ? '2rem' : '3rem', fontWeight: 700 }}>{t.whyUs.title}</h2>
          </div>

          <div style={{
            background: c.bgCard,
            borderRadius: '24px',
            border: `1px solid ${c.border}`,
            overflow: 'hidden',
            backdropFilter: 'blur(20px)',
            ...revealStyle(whyUsReveal.isVisible, 0.2),
          }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              borderBottom: `1px solid ${c.border}`,
            }}>
              <div style={{
                padding: '1.5rem',
                background: `linear-gradient(135deg, ${c.accent}20 0%, transparent 100%)`,
                fontWeight: 700,
                fontSize: isMobile ? '0.9rem' : '1.1rem',
                color: c.accent,
                textAlign: 'center',
                borderRight: `1px solid ${c.border}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
              }}>
                <span style={{ fontSize: '1.2rem' }}>✓</span> {t.whyUs.us}
              </div>
              <div style={{
                padding: '1.5rem',
                fontWeight: 600,
                fontSize: isMobile ? '0.9rem' : '1.1rem',
                color: c.textDim,
                textAlign: 'center',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
              }}>
                <span style={{ fontSize: '1.2rem' }}>✗</span> {t.whyUs.others}
              </div>
            </div>
            {t.whyUs.items.map((item, i) => (
              <div key={i} style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                borderBottom: i < t.whyUs.items.length - 1 ? `1px solid ${c.border}` : 'none',
                transition: 'background 0.3s ease',
              }}
              onMouseOver={(e) => e.currentTarget.style.background = `${c.accent}05`}
              onMouseOut={(e) => e.currentTarget.style.background = 'transparent'}
              >
                <div style={{
                  padding: isMobile ? '1.2rem' : '1.5rem 2rem',
                  fontSize: isMobile ? '0.9rem' : '1rem',
                  color: c.text,
                  borderRight: `1px solid ${c.border}`,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                }}>
                  <span style={{
                    color: c.accent,
                    width: '24px',
                    height: '24px',
                    background: `${c.accent}20`,
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.8rem',
                    flexShrink: 0,
                  }}>✓</span>
                  {item.us}
                </div>
                <div style={{
                  padding: isMobile ? '1.2rem' : '1.5rem 2rem',
                  fontSize: isMobile ? '0.9rem' : '1rem',
                  color: c.textDim,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                }}>
                  <span style={{
                    color: '#ef4444',
                    width: '24px',
                    height: '24px',
                    background: 'rgba(239,68,68,0.15)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.8rem',
                    flexShrink: 0,
                  }}>✗</span>
                  {item.others}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section
        id="services"
        ref={servicesReveal.ref}
        style={{
          padding: isMobile ? '5rem 1.5rem' : '8rem 4rem',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{
            textAlign: 'center',
            marginBottom: '4rem',
            ...revealStyle(servicesReveal.isVisible, 0),
          }}>
            <div style={{
              display: 'inline-block',
              fontSize: '0.85rem',
              fontWeight: 600,
              letterSpacing: '0.25em',
              color: c.accent,
              marginBottom: '1rem',
              padding: '0.5rem 1rem',
              background: `${c.accent}15`,
              borderRadius: '30px',
            }}>
              {t.services.overline}
            </div>
            <h2 style={{ fontSize: isMobile ? '2rem' : '3rem', fontWeight: 700 }}>{t.services.title}</h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
            gap: '1.5rem',
          }}>
            {t.services.items.map((s, i) => (
              <div
                key={i}
                className="card-hover"
                style={{
                  background: hoveredService === i ? `linear-gradient(135deg, ${c.bgCard} 0%, ${c.accent}10 100%)` : c.bgCard,
                  borderRadius: '20px',
                  border: `1px solid ${hoveredService === i ? c.borderHover : c.border}`,
                  padding: isMobile ? '2rem' : '2.5rem',
                  backdropFilter: 'blur(20px)',
                  position: 'relative',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  ...revealStyle(servicesReveal.isVisible, 0.1 * i),
                }}
                onMouseEnter={() => setHoveredService(i)}
                onMouseLeave={() => setHoveredService(null)}
              >
                <div style={{
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  width: '150px',
                  height: '150px',
                  background: `radial-gradient(circle, ${c.accent}15 0%, transparent 70%)`,
                  pointerEvents: 'none',
                  transition: 'opacity 0.3s ease',
                  opacity: hoveredService === i ? 1 : 0,
                }} />
                <div style={{
                  fontSize: '3rem',
                  marginBottom: '1.5rem',
                  filter: hoveredService === i ? 'drop-shadow(0 0 20px rgba(200,164,180,0.5))' : 'none',
                  transition: 'filter 0.3s ease',
                }}>
                  {s.icon}
                </div>
                <h3 style={{
                  fontSize: '1.3rem',
                  fontWeight: 600,
                  marginBottom: '1rem',
                  color: c.text,
                }}>{s.name}</h3>
                <p style={{
                  fontSize: '0.95rem',
                  lineHeight: 1.7,
                  color: c.textMuted,
                }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section
        ref={galleryReveal.ref}
        style={{
          padding: isMobile ? '3rem 1.5rem' : '4rem 4rem',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr 1fr' : 'repeat(4, 1fr)',
          gap: isMobile ? '1rem' : '1.5rem',
        }}>
          {[images.model1, images.model2, images.model3, images.model4].map((img, i) => (
            <div
              key={i}
              className="image-hover"
              style={{
                position: 'relative',
                height: isMobile ? '200px' : '350px',
                borderRadius: '16px',
                overflow: 'hidden',
                border: `1px solid ${hoveredImage === i ? c.borderHover : c.border}`,
                cursor: 'pointer',
                ...revealStyle(galleryReveal.isVisible, 0.1 * i),
              }}
              onMouseEnter={() => setHoveredImage(i)}
              onMouseLeave={() => setHoveredImage(null)}
            >
              <Image
                src={img}
                alt={`Model ${i + 1}`}
                fill
                style={{
                  objectFit: 'cover',
                  transition: 'transform 0.5s ease',
                  transform: hoveredImage === i ? 'scale(1.1)' : 'scale(1)',
                }}
              />
              <div style={{
                position: 'absolute',
                inset: 0,
                background: hoveredImage === i
                  ? `linear-gradient(to top, ${c.accent}40 0%, transparent 60%)`
                  : `linear-gradient(to top, ${c.bg}80 0%, transparent 50%)`,
                transition: 'background 0.3s ease',
              }} />
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                padding: '1.5rem',
                transform: hoveredImage === i ? 'translateY(0)' : 'translateY(100%)',
                opacity: hoveredImage === i ? 1 : 0,
                transition: 'all 0.3s ease',
              }}>
                <div style={{
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  color: c.text,
                }}>Top Performer</div>
                <div style={{
                  fontSize: '0.8rem',
                  color: c.textMuted,
                }}>+300% growth</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Calculator */}
      <section
        id="calculator"
        ref={calculatorReveal.ref}
        style={{
          padding: isMobile ? '5rem 1.5rem' : '8rem 4rem',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <div style={{
          maxWidth: '600px',
          margin: '0 auto',
          textAlign: 'center',
          ...revealStyle(calculatorReveal.isVisible, 0),
        }}>
          <div style={{
            display: 'inline-block',
            fontSize: '0.85rem',
            fontWeight: 600,
            letterSpacing: '0.25em',
            color: c.accent,
            marginBottom: '1rem',
            padding: '0.5rem 1rem',
            background: `${c.accent}15`,
            borderRadius: '30px',
          }}>
            {t.calculator.overline}
          </div>
          <h2 style={{ fontSize: isMobile ? '2rem' : '3rem', fontWeight: 700, marginBottom: '2.5rem' }}>{t.calculator.title}</h2>

          <div style={{
            background: c.bgCard,
            borderRadius: '24px',
            border: `1px solid ${c.border}`,
            padding: isMobile ? '2rem' : '3rem',
            backdropFilter: 'blur(20px)',
          }}>
            <label style={{
              display: 'block',
              fontSize: '1rem',
              fontWeight: 500,
              color: c.textMuted,
              marginBottom: '1rem',
              textAlign: 'left',
            }}>
              {t.calculator.label}
            </label>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              marginBottom: '2rem',
              background: c.bg,
              borderRadius: '12px',
              border: `1px solid ${c.border}`,
              padding: '0.5rem 1rem',
              transition: 'border-color 0.3s ease',
            }}>
              <span style={{ color: c.accent, fontSize: '1.5rem', fontWeight: 600 }}>$</span>
              <input
                type="number"
                value={calcValue}
                onChange={(e) => setCalcValue(e.target.value)}
                placeholder={t.calculator.placeholder}
                style={{
                  flex: 1,
                  background: 'transparent',
                  border: 'none',
                  padding: '1rem 0',
                  fontSize: '1.5rem',
                  fontWeight: 600,
                  color: c.text,
                  outline: 'none',
                }}
              />
            </div>

            {calcValue && parseInt(calcValue) > 0 && (
              <div style={{
                background: `linear-gradient(135deg, ${c.accent}20 0%, ${c.accentDark}10 100%)`,
                borderRadius: '16px',
                padding: '2rem',
                marginBottom: '2rem',
                border: `1px solid ${c.accent}30`,
                animation: 'scale-in 0.3s ease',
              }}>
                <div style={{ fontSize: '1rem', color: c.textMuted, marginBottom: '0.5rem' }}>{t.calculator.result}</div>
                <div style={{
                  fontSize: isMobile ? '2.5rem' : '3.5rem',
                  fontWeight: 700,
                  background: `linear-gradient(135deg, ${c.accent} 0%, ${c.accentLight} 100%)`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}>
                  ${(parseInt(calcValue) * 3).toLocaleString()}
                  <span style={{
                    fontSize: '1.2rem',
                    fontWeight: 500,
                    WebkitTextFillColor: c.textMuted,
                    color: c.textMuted,
                  }}>{t.calculator.month}</span>
                </div>
              </div>
            )}

            <p style={{ fontSize: '0.85rem', color: c.textDim, marginBottom: '2rem' }}>{t.calculator.note}</p>

            <a href="#apply" className="btn-hover" style={{
              display: 'inline-block',
              background: `linear-gradient(135deg, ${c.accent} 0%, ${c.accentLight} 100%)`,
              color: c.bg,
              padding: '1rem 2.5rem',
              borderRadius: '10px',
              textDecoration: 'none',
              fontSize: '1rem',
              fontWeight: 600,
            }}>
              {t.calculator.cta}
            </a>
          </div>
        </div>
      </section>

      {/* Process */}
      <section
        id="process"
        ref={processReveal.ref}
        style={{
          padding: isMobile ? '5rem 1.5rem' : '8rem 4rem',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{
            textAlign: 'center',
            marginBottom: '4rem',
            ...revealStyle(processReveal.isVisible, 0),
          }}>
            <div style={{
              display: 'inline-block',
              fontSize: '0.85rem',
              fontWeight: 600,
              letterSpacing: '0.25em',
              color: c.accent,
              marginBottom: '1rem',
              padding: '0.5rem 1rem',
              background: `${c.accent}15`,
              borderRadius: '30px',
            }}>
              {t.process.overline}
            </div>
            <h2 style={{ fontSize: isMobile ? '2rem' : '3rem', fontWeight: 700 }}>{t.process.title}</h2>
          </div>

          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem',
            position: 'relative',
          }}>
            {/* Connection line */}
            {!isMobile && (
              <div style={{
                position: 'absolute',
                left: '45px',
                top: '80px',
                bottom: '80px',
                width: '2px',
                background: `linear-gradient(to bottom, ${c.accent}, ${c.accentDark})`,
                zIndex: 0,
              }} />
            )}

            {t.process.steps.map((step, i) => (
              <div
                key={i}
                className="card-hover"
                style={{
                  display: 'flex',
                  gap: isMobile ? '1.5rem' : '2.5rem',
                  alignItems: 'flex-start',
                  padding: isMobile ? '2rem' : '2.5rem',
                  background: c.bgCard,
                  borderRadius: '20px',
                  border: `1px solid ${c.border}`,
                  backdropFilter: 'blur(20px)',
                  position: 'relative',
                  zIndex: 1,
                  ...revealStyle(processReveal.isVisible, 0.15 * i),
                }}
              >
                <div style={{
                  width: '70px',
                  height: '70px',
                  borderRadius: '50%',
                  background: `linear-gradient(135deg, ${c.accent} 0%, ${c.accentLight} 100%)`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.3rem',
                  fontWeight: 700,
                  color: c.bg,
                  flexShrink: 0,
                  boxShadow: `0 10px 30px ${c.glow}`,
                }}>
                  {step.num}
                </div>
                <div>
                  <h3 style={{ fontSize: '1.4rem', fontWeight: 600, marginBottom: '0.8rem', color: c.text }}>{step.title}</h3>
                  <p style={{ fontSize: '1.05rem', lineHeight: 1.7, color: c.textMuted }}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section
        id="team"
        ref={teamReveal.ref}
        style={{
          padding: isMobile ? '5rem 1.5rem' : '8rem 4rem',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{
            textAlign: 'center',
            marginBottom: '3rem',
            ...revealStyle(teamReveal.isVisible, 0),
          }}>
            <div style={{
              display: 'inline-block',
              fontSize: '0.85rem',
              fontWeight: 600,
              letterSpacing: '0.25em',
              color: c.accent,
              marginBottom: '1rem',
              padding: '0.5rem 1rem',
              background: `${c.accent}15`,
              borderRadius: '30px',
            }}>
              {t.team.overline}
            </div>
            <h2 style={{ fontSize: isMobile ? '2rem' : '3rem', fontWeight: 700 }}>{t.team.title}</h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
            gap: '1rem',
          }}>
            {t.team.roles.map((role, i) => (
              <div
                key={i}
                className="card-hover"
                style={{
                  background: c.bgCard,
                  borderRadius: '16px',
                  border: `1px solid ${c.border}`,
                  padding: '1.5rem',
                  textAlign: 'center',
                  backdropFilter: 'blur(20px)',
                  ...revealStyle(teamReveal.isVisible, 0.05 * i),
                }}
              >
                <div style={{
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  color: c.text,
                  marginBottom: '0.3rem',
                }}>{role.name}</div>
                <div style={{
                  fontSize: '0.85rem',
                  color: c.textDim,
                }}>{role.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section
        id="testimonials"
        ref={testimonialsReveal.ref}
        style={{
          padding: isMobile ? '5rem 1.5rem' : '8rem 4rem',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{
            textAlign: 'center',
            marginBottom: '4rem',
            ...revealStyle(testimonialsReveal.isVisible, 0),
          }}>
            <div style={{
              display: 'inline-block',
              fontSize: '0.85rem',
              fontWeight: 600,
              letterSpacing: '0.25em',
              color: c.accent,
              marginBottom: '1rem',
              padding: '0.5rem 1rem',
              background: `${c.accent}15`,
              borderRadius: '30px',
            }}>
              {t.testimonials.overline}
            </div>
            <h2 style={{ fontSize: isMobile ? '2rem' : '3rem', fontWeight: 700 }}>{t.testimonials.title}</h2>
          </div>

          <div style={{
            position: 'relative',
            minHeight: '480px',
            ...revealStyle(testimonialsReveal.isVisible, 0.2),
          }}>
            {t.testimonials.items.map((item, i) => (
              <div key={i} style={{
                position: i === 0 ? 'relative' : 'absolute',
                top: 0,
                left: 0,
                right: 0,
                opacity: activeTestimonial === i ? 1 : 0,
                transform: activeTestimonial === i ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.98)',
                transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                pointerEvents: activeTestimonial === i ? 'auto' : 'none',
              }}>
                <div style={{
                  background: c.bgCard,
                  borderRadius: '24px',
                  border: `1px solid ${c.border}`,
                  padding: isMobile ? '2.5rem' : '3.5rem',
                  textAlign: 'center',
                  backdropFilter: 'blur(20px)',
                  position: 'relative',
                  overflow: 'hidden',
                }}>
                  {/* Background decoration */}
                  <div style={{
                    position: 'absolute',
                    top: '-50%',
                    left: '-50%',
                    width: '200%',
                    height: '200%',
                    background: `radial-gradient(circle at 50% 50%, ${c.accent}08 0%, transparent 50%)`,
                    pointerEvents: 'none',
                  }} />

                  {/* Avatar */}
                  <div style={{
                    width: '100px',
                    height: '100px',
                    borderRadius: '50%',
                    margin: '0 auto 1.5rem',
                    overflow: 'hidden',
                    border: `3px solid ${c.accent}`,
                    position: 'relative',
                    boxShadow: `0 0 30px ${c.glow}`,
                  }}>
                    <Image
                      src={[images.testimonial1, images.testimonial2, images.testimonial3][i]}
                      alt={item.name}
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>

                  {/* Earnings badge */}
                  <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    background: `linear-gradient(135deg, ${c.accent}25 0%, ${c.accentDark}15 100%)`,
                    borderRadius: '40px',
                    padding: '1rem 2rem',
                    marginBottom: '2rem',
                    border: `1px solid ${c.accent}30`,
                  }}>
                    <span style={{
                      fontSize: isMobile ? '2rem' : '2.5rem',
                      fontWeight: 700,
                      background: `linear-gradient(135deg, ${c.accent} 0%, ${c.accentLight} 100%)`,
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}>{item.amount}</span>
                    <span style={{ fontSize: '1rem', color: c.textMuted, fontWeight: 500 }}>/mes</span>
                  </div>

                  {/* Time badge */}
                  <div style={{
                    display: 'inline-block',
                    background: c.bg,
                    borderRadius: '20px',
                    padding: '0.5rem 1rem',
                    marginBottom: '1.5rem',
                    marginLeft: '1rem',
                    fontSize: '0.85rem',
                    color: c.accent,
                    fontWeight: 600,
                  }}>
                    {item.months}
                  </div>

                  <p style={{
                    fontSize: isMobile ? '1.1rem' : '1.3rem',
                    lineHeight: 1.8,
                    color: c.text,
                    fontStyle: 'italic',
                    marginBottom: '2rem',
                    maxWidth: '600px',
                    margin: '0 auto 2rem',
                  }}>
                    &ldquo;{item.quote}&rdquo;
                  </p>

                  <div>
                    <div style={{ fontSize: '1.2rem', fontWeight: 600, color: c.text }}>{item.name}</div>
                    <div style={{ fontSize: '0.95rem', color: c.textDim, marginTop: '0.3rem' }}>{item.before}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dots */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.8rem', marginTop: '2rem' }}>
            {t.testimonials.items.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveTestimonial(i)}
                style={{
                  width: activeTestimonial === i ? 40 : 12,
                  height: 12,
                  borderRadius: 6,
                  background: activeTestimonial === i
                    ? `linear-gradient(135deg, ${c.accent} 0%, ${c.accentLight} 100%)`
                    : c.border,
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.4s ease',
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section
        id="benefits"
        ref={benefitsReveal.ref}
        style={{
          padding: isMobile ? '5rem 1.5rem' : '8rem 4rem',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{
            textAlign: 'center',
            marginBottom: '3rem',
            ...revealStyle(benefitsReveal.isVisible, 0),
          }}>
            <div style={{
              display: 'inline-block',
              fontSize: '0.85rem',
              fontWeight: 600,
              letterSpacing: '0.25em',
              color: c.accent,
              marginBottom: '1rem',
              padding: '0.5rem 1rem',
              background: `${c.accent}15`,
              borderRadius: '30px',
            }}>
              {t.benefits.overline}
            </div>
            <h2 style={{ fontSize: isMobile ? '2rem' : '3rem', fontWeight: 700 }}>{t.benefits.title}</h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
            gap: '1.5rem',
          }}>
            {t.benefits.items.map((b, i) => (
              <div
                key={i}
                className="card-hover"
                style={{
                  display: 'flex',
                  gap: '1.5rem',
                  padding: '2rem',
                  background: c.bgCard,
                  borderRadius: '20px',
                  border: `1px solid ${c.border}`,
                  backdropFilter: 'blur(20px)',
                  ...revealStyle(benefitsReveal.isVisible, 0.1 * i),
                }}
              >
                <span style={{
                  color: c.bg,
                  fontSize: '1.2rem',
                  width: '50px',
                  height: '50px',
                  background: `linear-gradient(135deg, ${c.accent} 0%, ${c.accentLight} 100%)`,
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  boxShadow: `0 5px 20px ${c.glow}`,
                }}>✓</span>
                <div>
                  <h4 style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: '0.5rem', color: c.text }}>{b.title}</h4>
                  <p style={{ fontSize: '1rem', color: c.textMuted, lineHeight: 1.6 }}>{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section
        id="faq"
        ref={faqReveal.ref}
        style={{
          padding: isMobile ? '5rem 1.5rem' : '8rem 4rem',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{
            textAlign: 'center',
            marginBottom: '3rem',
            ...revealStyle(faqReveal.isVisible, 0),
          }}>
            <div style={{
              display: 'inline-block',
              fontSize: '0.85rem',
              fontWeight: 600,
              letterSpacing: '0.25em',
              color: c.accent,
              marginBottom: '1rem',
              padding: '0.5rem 1rem',
              background: `${c.accent}15`,
              borderRadius: '30px',
            }}>
              {t.faq.overline}
            </div>
            <h2 style={{ fontSize: isMobile ? '2rem' : '3rem', fontWeight: 700 }}>{t.faq.title}</h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {t.faq.items.map((faq, i) => (
              <div
                key={i}
                style={{
                  background: c.bgCard,
                  borderRadius: '16px',
                  border: `1px solid ${activeFaq === i ? c.accent : c.border}`,
                  overflow: 'hidden',
                  transition: 'all 0.3s ease',
                  backdropFilter: 'blur(20px)',
                  boxShadow: activeFaq === i ? `0 10px 30px ${c.glow}` : 'none',
                  ...revealStyle(faqReveal.isVisible, 0.05 * i),
                }}
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  style={{
                    width: '100%',
                    padding: '1.5rem 2rem',
                    background: 'none',
                    border: 'none',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    cursor: 'pointer',
                    textAlign: 'left',
                  }}
                >
                  <span style={{ fontSize: '1.05rem', fontWeight: 600, color: c.text, paddingRight: '1rem' }}>{faq.q}</span>
                  <span style={{
                    color: c.accent,
                    fontSize: '1.5rem',
                    transform: activeFaq === i ? 'rotate(45deg)' : 'rotate(0)',
                    transition: 'transform 0.3s ease',
                    flexShrink: 0,
                  }}>+</span>
                </button>
                <div style={{
                  maxHeight: activeFaq === i ? '300px' : 0,
                  overflow: 'hidden',
                  transition: 'max-height 0.4s ease',
                }}>
                  <p style={{
                    padding: '0 2rem 1.5rem',
                    fontSize: '1rem',
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
      <section
        id="apply"
        ref={applyReveal.ref}
        style={{
          padding: isMobile ? '5rem 1.5rem' : '8rem 4rem',
          position: 'relative',
          zIndex: 1,
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
          <div style={{
            textAlign: isMobile ? 'center' : 'left',
            ...revealStyle(applyReveal.isVisible, 0),
          }}>
            <div style={{
              display: 'inline-block',
              fontSize: '0.85rem',
              fontWeight: 600,
              letterSpacing: '0.25em',
              color: c.accent,
              marginBottom: '1rem',
              padding: '0.5rem 1rem',
              background: `${c.accent}15`,
              borderRadius: '30px',
            }}>
              {t.apply.overline}
            </div>
            <h2 style={{ fontSize: isMobile ? '2.2rem' : '3.5rem', fontWeight: 700, marginBottom: '1.5rem', lineHeight: 1.1 }}>
              {t.apply.title}
            </h2>
            <p style={{ fontSize: '1.15rem', lineHeight: 1.8, color: c.textMuted, marginBottom: '2rem' }}>
              {t.apply.subtitle}
            </p>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.8rem',
              padding: '1rem 1.5rem',
              background: `linear-gradient(135deg, ${c.accent}20 0%, transparent 100%)`,
              borderRadius: '12px',
              border: `1px solid ${c.accent}30`,
            }}>
              <span style={{
                color: c.bg,
                fontSize: '1rem',
                width: '30px',
                height: '30px',
                background: `linear-gradient(135deg, ${c.accent} 0%, ${c.accentLight} 100%)`,
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>✓</span>
              <span style={{ fontSize: '1rem', color: c.accent, fontWeight: 500 }}>{t.apply.guarantee}</span>
            </div>

            {/* Lifestyle images */}
            {!isMobile && (
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '1rem',
                marginTop: '2rem',
              }}>
                {[images.lifestyle1, images.lifestyle2].map((img, i) => (
                  <div key={i} style={{
                    position: 'relative',
                    height: '150px',
                    borderRadius: '16px',
                    overflow: 'hidden',
                    border: `1px solid ${c.border}`,
                  }}>
                    <Image
                      src={img}
                      alt="Lifestyle"
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                    <div style={{
                      position: 'absolute',
                      inset: 0,
                      background: `linear-gradient(135deg, ${c.bg}60 0%, transparent 100%)`,
                    }} />
                  </div>
                ))}
              </div>
            )}
          </div>

          <div style={{
            background: c.bgCard,
            borderRadius: '24px',
            border: `1px solid ${c.border}`,
            padding: isMobile ? '2rem' : '3rem',
            position: 'relative',
            backdropFilter: 'blur(20px)',
            boxShadow: `0 30px 60px rgba(0,0,0,0.3)`,
            ...revealStyle(applyReveal.isVisible, 0.2),
          }}>
            {/* Success state */}
            {formSubmitted && (
              <div style={{
                position: 'absolute',
                inset: 0,
                background: c.bgCard,
                borderRadius: '24px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '1.5rem',
                zIndex: 10,
                backdropFilter: 'blur(20px)',
                animation: 'scale-in 0.4s ease',
              }}>
                <div style={{
                  width: 80,
                  height: 80,
                  borderRadius: '50%',
                  background: `linear-gradient(135deg, ${c.accent} 0%, ${c.accentLight} 100%)`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '2.5rem',
                  color: c.bg,
                  boxShadow: `0 10px 40px ${c.glow}`,
                }}>✓</div>
                <div style={{ fontSize: '1.5rem', fontWeight: 700, color: c.text }}>{t.apply.form.success}</div>
                <div style={{ fontSize: '1.1rem', color: c.textMuted }}>{t.apply.form.successMsg}</div>
              </div>
            )}

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
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
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    color: c.textMuted,
                    marginBottom: '0.6rem',
                  }}>{field.label}</label>
                  <input
                    type="text"
                    value={formData[field.key]}
                    onChange={(e) => setFormData({ ...formData, [field.key]: e.target.value })}
                    style={{
                      width: '100%',
                      background: c.bg,
                      border: `1px solid ${c.border}`,
                      borderRadius: '10px',
                      padding: '1rem 1.2rem',
                      fontSize: '1rem',
                      color: c.text,
                      outline: 'none',
                      transition: 'all 0.3s ease',
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = c.accent;
                      e.currentTarget.style.boxShadow = `0 0 20px ${c.glow}`;
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = c.border;
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  />
                </div>
              ))}

              <button type="submit" className="btn-hover" style={{
                marginTop: '0.5rem',
                background: `linear-gradient(135deg, ${c.accent} 0%, ${c.accentLight} 100%)`,
                color: c.bg,
                border: 'none',
                borderRadius: '10px',
                padding: '1.2rem',
                fontSize: '1.1rem',
                fontWeight: 700,
                cursor: 'pointer',
              }}>
                {t.apply.form.submit}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        padding: isMobile ? '3rem 1.5rem' : '4rem 4rem',
        borderTop: `1px solid ${c.border}`,
        position: 'relative',
        zIndex: 1,
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
              fontSize: '1.5rem',
              fontWeight: 700,
              letterSpacing: '0.25em',
              marginBottom: '0.5rem',
              background: `linear-gradient(135deg, ${c.text} 0%, ${c.accent} 100%)`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>SILVER</div>
            <div style={{ fontSize: '0.9rem', color: c.textDim }}>{t.footer.tagline}</div>
          </div>

          <div style={{ display: 'flex', gap: '2rem' }}>
            {['Telegram', 'Twitter', 'Instagram'].map((link) => (
              <a key={link} href="#" style={{
                fontSize: '0.95rem',
                color: c.textDim,
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                fontWeight: 500,
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.color = c.accent;
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.color = c.textDim;
              }}
              >{link}</a>
            ))}
          </div>

          <div style={{ fontSize: '0.9rem', color: c.textDim }}>
            © 2025 Silver Agency · 18+
          </div>
        </div>
      </footer>

      {/* Floating CTA Button */}
      <a href="#apply" className="btn-hover" style={{
        position: 'fixed',
        bottom: isMobile ? '1.5rem' : '2rem',
        right: isMobile ? '1.5rem' : '2rem',
        width: isMobile ? 56 : 64,
        height: isMobile ? 56 : 64,
        borderRadius: '50%',
        background: `linear-gradient(135deg, ${c.accent} 0%, ${c.accentLight} 100%)`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textDecoration: 'none',
        boxShadow: `0 8px 30px ${c.accent}60`,
        zIndex: 90,
        animation: 'pulse-glow 3s ease-in-out infinite',
      }}>
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke={c.bg} strokeWidth="2.5">
          <path d="M22 2L11 13M22 2L15 22L11 13L2 9L22 2Z" />
        </svg>
      </a>
    </div>
  );
}
