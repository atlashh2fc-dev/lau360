import React, { useEffect, useRef } from 'react';
import { gsap, useGsapContext, usePrefersReducedMotion } from '../lib/gsap';

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const headerOffset = 76;
  const top = el.getBoundingClientRect().top + window.scrollY - headerOffset;
  window.scrollTo({ top, behavior: 'smooth' });
}

export default function Hero() {
  const scope = useRef<HTMLDivElement>(null);
  const parallax = useRef<HTMLDivElement>(null);
  const overlay = useRef<HTMLDivElement>(null);
  const reducedMotion = usePrefersReducedMotion();

  useGsapContext({
    scope,
    setup: () => {
      gsap.set('[data-hero="k"]', { opacity: 0, y: 14 });
      gsap.set('[data-hero="rule"]', { scaleX: 0, transformOrigin: '0% 50%' });
      gsap.set('[data-hero="overlay"]', { opacity: 0 });
      gsap.set('[data-hero="svg-line"]', { strokeDashoffset: 140 });

      gsap
        .timeline({ defaults: { ease: 'power2.out' } })
        .to('[data-hero="k"]', {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.10,
          delay: 0.12,
        })
        .to(
          '[data-hero="rule"]',
          { scaleX: 1, duration: 1.2, ease: 'power3.out' },
          0.35
        )
        .to(
          '[data-hero="overlay"]',
          { opacity: 1, duration: 1.0 },
          0.20
        )
        .to(
          '[data-hero="svg-line"]',
          { strokeDashoffset: 0, duration: 1.4, ease: 'power3.out', stagger: 0.06 },
          0.15
        );
    },
  });

  useEffect(() => {
    if (reducedMotion) return;
    const parallaxEl = parallax.current;
    const overlayEl = overlay.current;
    if (!parallaxEl || !overlayEl) return;

    const state = { targetY: 0, currentY: 0 };
    const tick = () => {
      state.currentY = gsap.utils.interpolate(state.currentY, state.targetY, 0.08);
      gsap.set(parallaxEl, { y: state.currentY });
    };

    const onScroll = () => {
      state.targetY = Math.min(28, window.scrollY * 0.03);
    };

    const moveX = gsap.quickTo(overlayEl, 'x', { duration: 0.9, ease: 'power3' });
    const moveY = gsap.quickTo(overlayEl, 'y', { duration: 1.0, ease: 'power3' });
    const onMove = (e: PointerEvent) => {
      const w = window.innerWidth || 1;
      const h = window.innerHeight || 1;
      const dx = (e.clientX - w / 2) / w;
      const dy = (e.clientY - h / 2) / h;
      moveX(dx * 12);
      moveY(dy * 10);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('pointermove', onMove, { passive: true });
    gsap.ticker.add(tick);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('pointermove', onMove);
      gsap.ticker.remove(tick);
    };
  }, [reducedMotion]);

  return (
    <section className="relative min-h-[92vh] overflow-hidden pt-[88px] text-slate-100">
      {/* Animated gradient background */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0e27] via-[#1a1f3e] to-[#0f1535]" />

        {/* Floating orbs */}
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />

        {/* Radial gradients overlay */}
        <div className="absolute inset-0 opacity-40 [background-image:radial-gradient(1000px_circle_at_20%_15%,rgba(59,130,246,0.25),transparent_60%),radial-gradient(900px_circle_at_80%_40%,rgba(139,92,246,0.20),transparent_65%),radial-gradient(800px_circle_at_40%_80%,rgba(6,182,212,0.15),transparent_60%)]" />

        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.15] [background-image:linear-gradient(rgba(59,130,246,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.2)_1px,transparent_1px)] [background-size:80px_80px] [mask-image:radial-gradient(900px_circle_at_50%_30%,black,transparent)]" />

        {/* Noise texture */}
        <div
          className="absolute inset-0 opacity-[0.08] mix-blend-overlay"
          style={{
            backgroundImage:
              "url(data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='180' height='180' filter='url(%23n)' opacity='.55'/%3E%3C/svg%3E)",
          }}
        />
      </div>

      <div ref={scope} className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid min-h-[calc(92vh-88px)] items-end gap-12 pb-14 lg:grid-cols-12 lg:items-center lg:pb-20">
          <div className="lg:col-span-8">
            <p
              data-hero="k"
              className="text-[11px] font-bold tracking-[0.28em] text-cyan-400/80"
            >
              NEXO ASESORES · TU CANAL DE CONEXIÓN ESTRATÉGICA B2B
            </p>

            <h1
              data-hero="k"
              className="mt-7 text-balance text-5xl font-bold leading-[1.05] tracking-[-0.03em] sm:text-6xl lg:text-7xl"
            >
              <span className="gradient-text">
                Conexión estratégica
              </span>{' '}
              <span className="text-slate-50">
                para cerrar negocios sin fricción.
              </span>
            </h1>

            <div className="mt-8 grid gap-10 lg:grid-cols-12 lg:gap-12">
              <div className="lg:col-span-7">
                <p
                  data-hero="k"
                  className="text-pretty text-base leading-relaxed text-slate-200 sm:text-lg"
                >
                  Actuamos como tu brazo derecho comercial. Tú tienes una necesidad; nosotros activamos
                  la solución exacta en nuestra red. Sin costos ocultos para ti.
                </p>
              </div>
              <div className="lg:col-span-5">
                <div data-hero="k" className="space-y-5">
                  <div className="h-px bg-gradient-electric" data-hero="rule" />
                  <p className="text-sm leading-relaxed text-slate-300">
                    Ordenamos interlocutores, condiciones, documentación y seguimiento en un solo
                    hilo operativo.
                  </p>
                  <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center">
                    <button
                      type="button"
                      data-hero="k"
                      onClick={() => scrollToSection('contacto')}
                      className="group relative overflow-hidden rounded-lg bg-gradient-electric px-6 py-3.5 text-[13px] font-bold tracking-[0.10em] text-white shadow-glow transition-all duration-300 hover:scale-105 hover:shadow-glow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
                    >
                      <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                      <span className="relative">QUIERO UNA PROPUESTA</span>
                    </button>
                    <button
                      type="button"
                      data-hero="k"
                      onClick={() => scrollToSection('como-funciona')}
                      className="group relative inline-flex items-center justify-center text-[13px] font-semibold tracking-[0.10em] text-slate-300 transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
                    >
                      VER CÓMO OPERA
                      <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4">
            <div className="glass-card glass-card-hover relative h-[280px] w-full overflow-hidden sm:h-[340px] lg:h-[460px]">
              {/* Professional buildings image */}
              <div className="absolute inset-0">
                <img
                  src="/hero-buildings.png"
                  alt="Modern corporate office buildings"
                  className="h-full w-full object-cover"
                />
                {/* Gradient overlay for blending */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e27]/90 via-[#0a0e27]/30 to-transparent" />
              </div>

              <div
                ref={parallax}
                aria-hidden="true"
                className="absolute inset-0"
              >
                {/* Animated gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-electric-500/20 via-violet-500/15 to-cyan-500/20" />
                <div className="absolute inset-0 opacity-[0.18] [background-image:linear-gradient(rgba(59,130,246,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.3)_1px,transparent_1px)] [background-size:64px_64px]" />
              </div>

              <div
                ref={overlay}
                data-hero="overlay"
                aria-hidden="true"
                className="absolute inset-0"
              >
                <svg
                  className="absolute inset-0 h-full w-full"
                  viewBox="0 0 800 600"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    data-hero="svg-line"
                    d="M40 140 H410 C520 140 600 220 600 330 V520"
                    stroke="url(#gradient1)"
                    strokeWidth="2"
                    strokeDasharray="140"
                  />
                  <path
                    data-hero="svg-line"
                    d="M120 520 H520 C650 520 720 450 720 320 V80"
                    stroke="url(#gradient2)"
                    strokeWidth="2"
                    strokeDasharray="140"
                  />
                  <path
                    data-hero="svg-line"
                    d="M80 80 H260 C310 80 350 120 350 170 V250"
                    stroke="url(#gradient3)"
                    strokeWidth="2"
                    strokeDasharray="140"
                  />
                  <path
                    data-hero="svg-line"
                    d="M520 300 H740"
                    stroke="rgba(6,182,212,0.4)"
                    strokeWidth="2"
                    strokeDasharray="140"
                  />

                  <defs>
                    <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.6" />
                      <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.4" />
                    </linearGradient>
                    <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.5" />
                      <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.6" />
                    </linearGradient>
                    <linearGradient id="gradient3" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.5" />
                      <stop offset="100%" stopColor="#ec4899" stopOpacity="0.4" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              <div className="absolute inset-x-0 bottom-0 border-t border-white/10 bg-black/40 backdrop-blur-sm px-5 py-4">
                <p className="text-[11px] font-bold tracking-[0.22em] text-cyan-400/90">
                  CONTROL · ORDEN · TRAZABILIDAD
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
