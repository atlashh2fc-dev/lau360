import React, { useEffect, useMemo, useState } from 'react';

const NAV = [
  { id: 'soluciones', label: 'Soluciones' },
  { id: 'como-funciona', label: 'Cómo funciona' },
  { id: 'industrias', label: 'Industrias' },
  { id: 'casos', label: 'Casos' },
  { id: 'faq', label: 'FAQ' },
  { id: 'contacto', label: 'Contacto' },
] as const;

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const headerOffset = 76;
  const top = el.getBoundingClientRect().top + window.scrollY - headerOffset;
  window.scrollTo({ top, behavior: 'smooth' });
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const links = useMemo(() => NAV, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 6);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={[
          'backdrop-blur-2xl transition-all duration-300',
          scrolled
            ? 'glass-card border-white/10 bg-white/[0.08] shadow-lg shadow-black/20'
            : 'border-b border-white/5 bg-white/[0.02]',
        ].join(' ')}
      >
        <nav aria-label="Navegación principal" className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-[68px] items-center justify-between gap-4">
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="group relative inline-flex items-baseline gap-3 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-400"
              aria-label="Ir al inicio"
            >
              {/* Glow effect on hover */}
              <div className="absolute -inset-2 rounded-lg bg-gradient-electric opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-30" />

              <span className="relative text-base font-bold tracking-[0.12em] text-gradient">
                Nexo Asesores
              </span>
              <span className="relative hidden text-[10px] tracking-[0.18em] text-slate-400 transition-colors group-hover:text-slate-300 sm:inline">
                CAPA EJECUTIVA · B2B
              </span>
            </button>

            <div className="hidden items-center gap-8 md:flex">
              {links.map((l) => (
                <button
                  key={l.id}
                  type="button"
                  onClick={() => scrollToSection(l.id)}
                  className="group relative text-[13px] font-medium tracking-[0.08em] text-slate-300 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-400"
                >
                  {l.label}
                  {/* Animated underline */}
                  <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-gradient-electric transition-all duration-300 group-hover:w-full" />
                </button>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                aria-expanded={open}
                className="md:hidden text-[13px] font-semibold tracking-[0.12em] text-slate-300 transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-400"
              >
                {open ? '✕' : '☰'} MENÚ
              </button>
              <button
                type="button"
                onClick={() => scrollToSection('contacto')}
                className="group relative overflow-hidden rounded-lg bg-gradient-electric px-5 py-2.5 text-[13px] font-bold tracking-[0.08em] text-white shadow-lg shadow-electric-500/25 transition-all duration-300 hover:scale-105 hover:shadow-glow focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-400"
              >
                {/* Shimmer effect */}
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                <span className="relative">Hablar con un asesor</span>
              </button>
            </div>
          </div>

          {open && (
            <div className="animate-slideDown border-t border-white/10 py-4 md:hidden">
              <div className="grid gap-2">
                {links.map((l) => (
                  <button
                    key={l.id}
                    type="button"
                    onClick={() => {
                      setOpen(false);
                      scrollToSection(l.id);
                    }}
                    className="group relative py-3 text-left text-[13px] font-medium tracking-[0.10em] text-slate-300 transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-400"
                  >
                    <span className="absolute left-0 top-1/2 h-0.5 w-0 -translate-y-1/2 bg-gradient-electric transition-all duration-300 group-hover:w-8" />
                    <span className="ml-10">{l.label}</span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}
