'use client';

import React, { useState, useEffect } from 'react';

export default function LuxorAgencyPremium() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [activeService, setActiveService] = useState<string | null>(null);
  const [scrollY, setScrollY] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [activePlan, setActivePlan] = useState<number | null>(null);
  const [focusedInput, setFocusedInput] = useState<string | null>(null);
  const [cursorVariant, setCursorVariant] = useState('default');

  useEffect(() => {
    setLoaded(true);
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  const services = [
    { id: '01', name: 'Brand Architecture', desc: 'We craft your digital identity into an irresistible empire. Strategic positioning that commands attention and converts admirers into devoted fans.' },
    { id: '02', name: 'Revenue Alchemy', desc: 'Transform engagement into wealth. Our proven systems multiply your earnings through psychology-driven monetization and premium pricing strategies.' },
    { id: '03', name: 'Content Direction', desc: 'Cinematic quality meets strategic intent. We direct content that stops scrolls, sparks desire, and builds lasting parasocial connections.' },
    { id: '04', name: 'Growth Engineering', desc: 'Algorithmic mastery meets human psychology. We engineer viral moments and sustainable growth across every platform that matters.' },
  ];

  const hexToRgba = (hex: string, alpha: number) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  };

  // Premium color palette
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

  return (
    <div
      onMouseMove={handleMouseMove}
      style={{
        minHeight: '100vh',
        background: c.black,
        color: c.cream,
        fontFamily: '"EB Garamond", Garamond, serif',
        cursor: 'none',
        overflowX: 'hidden',
        position: 'relative',
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Bebas+Neue&family=Space+Mono:wght@400;700&display=swap');

        * {
          cursor: none !important;
        }

        html {
          scroll-behavior: smooth;
        }

        ::selection {
          background: rgba(198, 163, 85, 0.4);
          color: #faf8f3;
        }

        input::placeholder {
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

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }

        @keyframes lineGrow {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
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
      `}</style>

      {/* Custom Cursor */}
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
        transition: 'transform 0.1s ease',
      }} />

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
      <div style={{
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

      {/* Floating Geometric Elements */}
      <div style={{
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
      <div style={{
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
        padding: '2rem 4rem',
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
          className={loaded ? 'animate-in stagger-1' : ''}
          style={{
            fontFamily: '"Bebas Neue", sans-serif',
            fontSize: '1.8rem',
            letterSpacing: '0.3em',
            color: c.gold,
          }}
        >
          LUXOR
        </div>
        <div style={{
          display: 'flex',
          gap: '4rem',
          fontFamily: '"Space Mono", monospace',
          fontSize: '0.65rem',
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
        }}>
          {['Services', 'Investment', 'Apply'].map((item, i) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onMouseEnter={() => setCursorVariant('hover')}
              onMouseLeave={() => setCursorVariant('default')}
              className={loaded ? `animate-in stagger-${i + 2}` : ''}
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
      <section style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        padding: '0 4rem',
        position: 'relative',
      }}>
        <div style={{
          maxWidth: '900px',
          position: 'relative',
          zIndex: 2,
        }}>
          {/* Overline */}
          <div
            className={loaded ? 'animate-in stagger-1' : ''}
            style={{
              fontFamily: '"Space Mono", monospace',
              fontSize: '0.6rem',
              letterSpacing: '0.5em',
              color: c.gold,
              marginBottom: '3rem',
              display: 'flex',
              alignItems: 'center',
              gap: '1.5rem',
            }}
          >
            <span style={{
              width: 60,
              height: 1,
              background: `linear-gradient(90deg, ${c.gold}, transparent)`,
              display: 'block',
            }} />
            ELITE CREATOR MANAGEMENT
          </div>

          {/* Main Headline */}
          <h1 style={{
            fontSize: 'clamp(4rem, 12vw, 10rem)',
            fontWeight: 400,
            lineHeight: 0.85,
            margin: 0,
            fontFamily: '"EB Garamond", serif',
          }}>
            <span
              className={loaded ? 'animate-in stagger-2' : ''}
              style={{
                display: 'block',
                fontStyle: 'italic',
                color: hexToRgba(c.cream, 0.9),
              }}
            >Where</span>
            <span
              className={loaded ? 'animate-in stagger-3' : ''}
              style={{
                display: 'block',
                marginLeft: '15%',
                fontWeight: 500,
                background: `linear-gradient(135deg, ${c.goldLight} 0%, ${c.gold} 40%, ${c.bronze} 100%)`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >legends</span>
            <span
              className={loaded ? 'animate-in stagger-4' : ''}
              style={{
                display: 'block',
                marginLeft: '8%',
                fontStyle: 'italic',
                color: hexToRgba(c.cream, 0.7),
              }}
            >are made.</span>
          </h1>

          {/* Subtext */}
          <p
            className={loaded ? 'animate-in stagger-5' : ''}
            style={{
              marginTop: '5rem',
              maxWidth: '420px',
              fontSize: '1.15rem',
              lineHeight: 2,
              color: hexToRgba(c.cream, 0.5),
              fontWeight: 400,
            }}
          >
            We don&apos;t manage creators. We architect empires. For the ambitious few ready to dominate, not just participate.
          </p>

          {/* CTA */}
          <div
            className={loaded ? 'animate-in stagger-6' : ''}
            style={{
              marginTop: '4rem',
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
                padding: '1.5rem 3.5rem',
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
                transition: 'color 0.4s ease, background 0.4s ease',
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = c.gold;
                e.currentTarget.style.color = c.black;
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.color = c.gold;
              }}
            >
              Begin Your Ascent
            </a>
            <span style={{
              fontFamily: '"Space Mono", monospace',
              fontSize: '0.55rem',
              color: hexToRgba(c.cream, 0.25),
              letterSpacing: '0.1em',
            }}>
              Only 3 spots remaining
            </span>
          </div>
        </div>

        {/* Hero Visual - Large ornate circle */}
        <div style={{
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
            </defs>
            {/* Outer ring */}
            <circle cx="200" cy="200" r="180" fill="none" stroke={c.gold} strokeWidth="0.3" strokeOpacity="0.2" />
            <circle cx="200" cy="200" r="170" fill="none" stroke={c.gold} strokeWidth="0.5" strokeOpacity="0.1" />
            {/* Inner decorative rings */}
            <circle cx="200" cy="200" r="140" fill="none" stroke={c.gold} strokeWidth="0.3" strokeOpacity="0.15" strokeDasharray="4 8" />
            <circle cx="200" cy="200" r="100" fill="url(#goldGrad)" />
            <circle cx="200" cy="200" r="100" fill="none" stroke={c.gold} strokeWidth="0.5" strokeOpacity="0.3" />
            {/* Pyramid in center */}
            <polygon points="200,120 260,230 140,230" fill="none" stroke={c.gold} strokeWidth="0.5" strokeOpacity="0.4" />
            <polygon points="200,140 240,210 160,210" fill={hexToRgba(c.gold, 0.05)} stroke={c.gold} strokeWidth="0.3" strokeOpacity="0.2" />
            {/* Eye */}
            <ellipse cx="200" cy="175" rx="25" ry="12" fill="none" stroke={c.gold} strokeWidth="0.5" strokeOpacity="0.5" />
            <circle cx="200" cy="175" r="6" fill={c.gold} fillOpacity="0.3" />
            {/* Decorative lines */}
            {[0, 45, 90, 135, 180, 225, 270, 315].map(angle => (
              <line
                key={angle}
                x1="200" y1="20" x2="200" y2="40"
                stroke={c.gold} strokeWidth="0.5" strokeOpacity="0.3"
                transform={`rotate(${angle} 200 200)`}
              />
            ))}
            {/* Corner accents */}
            {[0, 90, 180, 270].map(angle => (
              <g key={angle} transform={`rotate(${angle} 200 200)`}>
                <path d="M200,25 L210,35 L200,45 L190,35 Z" fill="none" stroke={c.gold} strokeWidth="0.3" strokeOpacity="0.4" />
              </g>
            ))}
          </svg>

          {/* Inner glow */}
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
        <div style={{
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
        <div style={{
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
          }}>Generated in 2024</div>
        </div>
      </section>

      {/* Marquee Section */}
      <section style={{
        padding: '6rem 0',
        borderTop: `1px solid ${hexToRgba(c.gold, 0.1)}`,
        borderBottom: `1px solid ${hexToRgba(c.gold, 0.1)}`,
        overflow: 'hidden',
        position: 'relative',
      }}>
        <div style={{
          display: 'flex',
          gap: '6rem',
          animation: 'marquee 30s linear infinite',
          whiteSpace: 'nowrap',
        }}>
          {[...Array(3)].map((_, i) => (
            <div key={i} style={{ display: 'flex', gap: '6rem' }}>
              {['Strategy', '\u25C6', 'Growth', '\u25C6', 'Revenue', '\u25C6', 'Excellence', '\u25C6', 'Legacy', '\u25C6'].map((text, j) => (
                <span
                  key={j}
                  style={{
                    fontFamily: text === '\u25C6' ? 'serif' : '"Bebas Neue", sans-serif',
                    fontSize: text === '\u25C6' ? '1rem' : '3rem',
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
        <style>{`
          @keyframes marquee {
            from { transform: translateX(0); }
            to { transform: translateX(-33.33%); }
          }
        `}</style>
      </section>

      {/* Services Section */}
      <section id="services" style={{
        padding: '12rem 4rem',
        position: 'relative',
      }}>
        {/* Section header */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          marginBottom: '8rem',
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
              WHAT WE DO
            </div>
            <h2 style={{
              fontSize: 'clamp(3rem, 8vw, 6rem)',
              fontWeight: 400,
              fontStyle: 'italic',
              margin: 0,
              lineHeight: 1,
            }}>
              Our craft.
            </h2>
          </div>
          <p style={{
            maxWidth: 350,
            fontSize: '0.95rem',
            lineHeight: 2,
            color: hexToRgba(c.cream, 0.4),
            textAlign: 'right',
            paddingTop: '3rem',
          }}>
            Four pillars of excellence.<br />
            One relentless pursuit of greatness.
          </p>
        </div>

        {/* Services Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
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
                padding: '4rem',
                minHeight: 350,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative',
                overflow: 'hidden',
                transition: 'background 0.6s ease',
              }}
            >
              {/* Hover background */}
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

              <div style={{ position: 'relative', zIndex: 1 }}>
                <span style={{
                  fontFamily: '"Space Mono", monospace',
                  fontSize: '0.6rem',
                  color: c.gold,
                  opacity: 0.5,
                }}>{service.id}</span>
              </div>

              <div style={{ position: 'relative', zIndex: 1 }}>
                <h3 style={{
                  fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
                  fontWeight: 400,
                  margin: '0 0 1.5rem 0',
                  fontStyle: 'italic',
                  transition: 'color 0.4s ease',
                  color: activeService === service.id ? c.gold : c.cream,
                }}>{service.name}</h3>
                <p style={{
                  fontSize: '0.9rem',
                  lineHeight: 1.9,
                  color: hexToRgba(c.cream, 0.45),
                  maxWidth: 400,
                  transition: 'opacity 0.6s ease, transform 0.6s ease',
                  opacity: activeService === service.id ? 1 : 0.6,
                  transform: activeService === service.id ? 'translateY(0)' : 'translateY(10px)',
                }}>{service.desc}</p>
              </div>

              {/* Corner accent */}
              <div style={{
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
      <section id="investment" style={{
        padding: '12rem 4rem',
        background: `linear-gradient(180deg, transparent 0%, ${hexToRgba(c.gold, 0.02)} 50%, transparent 100%)`,
        position: 'relative',
      }}>
        {/* Large decorative text */}
        <div style={{
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
          gridTemplateColumns: '1fr 1.2fr',
          gap: '8rem',
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
              PARTNERSHIP MODEL
            </div>
            <h2 style={{
              fontSize: 'clamp(3rem, 7vw, 5rem)',
              fontWeight: 400,
              margin: 0,
              lineHeight: 1.1,
            }}>
              <span style={{ display: 'block', fontStyle: 'italic', color: hexToRgba(c.cream, 0.6) }}>
                We prosper
              </span>
              <span style={{
                display: 'block',
                background: `linear-gradient(90deg, ${c.goldLight}, ${c.gold})`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                together.
              </span>
            </h2>
            <p style={{
              marginTop: '3rem',
              fontSize: '1rem',
              lineHeight: 2.2,
              color: hexToRgba(c.cream, 0.4),
              maxWidth: 380,
            }}>
              Zero upfront costs. Zero hidden fees. Our success is directly tied to yours — the ultimate alignment of interests.
            </p>
          </div>

          {/* Pricing cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
            {[
              { name: 'Ascendant', rate: '35%', desc: 'Full-service management for rising stars', features: ['24/7 chat management', 'Content strategy', 'Social growth'] },
              { name: 'Sovereign', rate: '30%', desc: 'For established creators ($15k+/mo)', features: ['Priority support', 'Advanced analytics', 'Brand partnerships'] },
              { name: 'Dynasty', rate: '25%', desc: 'Elite tier for top performers ($50k+)', features: ['Dedicated team', 'Custom strategies', 'VIP experiences'] },
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
                  padding: '3rem',
                  background: activePlan === i
                    ? `linear-gradient(135deg, ${hexToRgba(c.gold, 0.12)} 0%, ${hexToRgba(c.bronze, 0.05)} 100%)`
                    : hexToRgba(c.charcoal, 0.5),
                  border: `1px solid ${hexToRgba(c.gold, activePlan === i ? 0.3 : 0.08)}`,
                  display: 'grid',
                  gridTemplateColumns: '1fr auto',
                  alignItems: 'center',
                  gap: '2rem',
                  transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
                  transform: activePlan === i ? 'translateX(20px)' : 'translateX(0)',
                }}
              >
                <div>
                  <div style={{
                    fontFamily: '"Bebas Neue", sans-serif',
                    fontSize: '1.4rem',
                    letterSpacing: '0.15em',
                    color: activePlan === i ? c.gold : c.cream,
                    transition: 'color 0.4s ease',
                  }}>{plan.name}</div>
                  <div style={{
                    fontFamily: '"Space Mono", monospace',
                    fontSize: '0.55rem',
                    color: hexToRgba(c.cream, 0.35),
                    marginTop: '0.5rem',
                    letterSpacing: '0.05em',
                  }}>{plan.desc}</div>
                </div>
                <div style={{
                  fontFamily: '"EB Garamond", serif',
                  fontSize: '3.5rem',
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

      {/* Testimonial / Social Proof */}
      <section style={{
        padding: '10rem 4rem',
        textAlign: 'center',
        position: 'relative',
      }}>
        <div style={{
          maxWidth: 800,
          margin: '0 auto',
        }}>
          <div style={{
            fontFamily: '"EB Garamond", serif',
            fontSize: '5rem',
            color: hexToRgba(c.gold, 0.2),
            marginBottom: '2rem',
          }}>&ldquo;</div>
          <blockquote style={{
            fontFamily: '"EB Garamond", serif',
            fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
            fontStyle: 'italic',
            lineHeight: 1.7,
            color: hexToRgba(c.cream, 0.8),
            margin: 0,
          }}>
            They didn&apos;t just grow my account. They transformed my entire life. From $3k to $89k monthly in under 6 months.
          </blockquote>
          <div style={{
            marginTop: '3rem',
            fontFamily: '"Space Mono", monospace',
            fontSize: '0.6rem',
            letterSpacing: '0.3em',
            color: c.gold,
          }}>
            — TOP 0.1% CREATOR
          </div>
        </div>
      </section>

      {/* Apply Section */}
      <section id="apply" style={{
        padding: '12rem 4rem',
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
      }}>
        {/* Background accent */}
        <div style={{
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
          gridTemplateColumns: '1fr 1fr',
          gap: '8rem',
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
              BEGIN YOUR ASCENT
            </div>
            <h2 style={{
              fontSize: 'clamp(3rem, 8vw, 5.5rem)',
              fontWeight: 400,
              margin: 0,
              lineHeight: 1,
            }}>
              <span style={{ display: 'block', fontStyle: 'italic' }}>Ready to</span>
              <span style={{
                display: 'block',
                background: `linear-gradient(90deg, ${c.goldLight}, ${c.gold}, ${c.bronze})`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>transcend?</span>
            </h2>
            <p style={{
              marginTop: '3rem',
              fontSize: '1rem',
              lineHeight: 2.2,
              color: hexToRgba(c.cream, 0.4),
              maxWidth: 400,
            }}>
              We accept fewer than 5% of applicants. If you&apos;re serious about building a legacy, not just an income, we should talk.
            </p>

            {/* Stats row */}
            <div style={{
              display: 'flex',
              gap: '4rem',
              marginTop: '4rem',
              paddingTop: '3rem',
              borderTop: `1px solid ${hexToRgba(c.gold, 0.1)}`,
            }}>
              {[
                { value: '200+', label: 'Active creators' },
                { value: '98%', label: 'Retention rate' },
                { value: '3.2x', label: 'Avg growth' },
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
            padding: '4rem',
          }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
              {[
                { label: 'Social handle', placeholder: '@yourhandle', key: 'handle' },
                { label: 'Platform', placeholder: 'Instagram, TikTok, etc.', key: 'platform' },
                { label: 'Current following', placeholder: 'e.g. 50k', key: 'following' },
                { label: 'Contact', placeholder: 'Telegram or email', key: 'contact' },
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
                onMouseEnter={() => setCursorVariant('hover')}
                onMouseLeave={() => setCursorVariant('default')}
                style={{
                  marginTop: '2rem',
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
                Submit Application
              </button>

              <p style={{
                fontFamily: '"Space Mono", monospace',
                fontSize: '0.5rem',
                color: hexToRgba(c.cream, 0.25),
                letterSpacing: '0.15em',
                textAlign: 'center',
                marginTop: '1rem',
              }}>
                {'\u25C6'} 100% confidential {'\u25C6'} Response within 24h {'\u25C6'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        padding: '6rem 4rem',
        borderTop: `1px solid ${hexToRgba(c.gold, 0.1)}`,
        display: 'grid',
        gridTemplateColumns: '1fr auto auto',
        gap: '4rem',
        alignItems: 'end',
      }}>
        <div>
          <div style={{
            fontFamily: '"Bebas Neue", sans-serif',
            fontSize: '3rem',
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
            &copy; 2025 — Where legends are made
          </div>
        </div>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          alignItems: 'flex-end',
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
    </div>
  );
}
