import React, { useEffect, useMemo, useRef, useState } from 'react';
import { gsap, usePrefersReducedMotion } from '../lib/gsap';

const FAQS = [
  {
    q: '¿Ustedes son una agencia o un broker?',
    a: 'Actuamos como agentes comerciales independientes. Intermediamos y coordinamos soluciones con actores del mercado, manteniendo trazabilidad y control operativo.',
  },
  {
    q: '¿Trabajan con una sola industria?',
    a: 'No. Trabajamos con procesos B2B donde hay fricción, múltiples partes y necesidad de coordinación. Si el objetivo es claro, podemos operar.',
  },
  {
    q: '¿Cómo cobran?',
    a: 'Operamos por comisión según acuerdo. Cuando aplica, la comisión puede estar asociada al cierre, a la gestión o a la intermediación con proveedores.',
  },
  {
    q: '¿Qué necesito para empezar?',
    a: 'Nombre, empresa/rubro, objetivo y plazo. Con eso levantamos el brief y definimos el primer match con condiciones mínimas comparables.',
  },
] as const;

type PanelRefs = Record<number, HTMLDivElement | null>;

export default function FAQ() {
  const reducedMotion = usePrefersReducedMotion();
  const [open, setOpen] = useState<number | null>(0);
  const panels = useRef<PanelRefs>({});
  const items = useMemo(() => FAQS, []);

  useEffect(() => {
    if (reducedMotion) return;
    items.forEach((_, i) => {
      const el = panels.current[i];
      if (!el) return;
      if (open === i) gsap.set(el, { height: 'auto', opacity: 1 });
      else gsap.set(el, { height: 0, opacity: 0 });
    });
  }, [items, open, reducedMotion]);

  const toggle = (i: number) => {
    setOpen((cur) => (cur === i ? null : i));
    if (reducedMotion) return;
    const el = panels.current[i];
    if (!el) return;
    const isOpening = open !== i;
    gsap.to(el, {
      height: isOpening ? 'auto' : 0,
      opacity: isOpening ? 1 : 0,
      duration: 0.35,
      ease: 'power2.out',
    });
  };

  return (
    <section id="faq" className="relative mt-20 scroll-mt-24 py-8">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-4">
            <h2 className="text-2xl font-bold tracking-[-0.01em] sm:text-3xl">
              <span className="text-gradient">FAQ</span>
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-300">
              Respuestas directas para tomar decisión rápido.
            </p>

            {/* Professional image */}
            <div className="mt-8 hidden overflow-hidden rounded-xl lg:block">
              <img
                src="/consultant.png"
                alt="Professional consultant"
                className="w-full object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="glass-card overflow-hidden">
              {items.map((f, i) => {
                const isOpen = open === i;
                return (
                  <div key={f.q} className="border-b border-white/10 last:border-b-0">
                    <button
                      type="button"
                      onClick={() => toggle(i)}
                      aria-expanded={isOpen}
                      className="flex w-full items-center justify-between gap-6 px-8 py-6 text-left transition-colors hover:bg-white/5"
                    >
                      <span className="text-sm font-bold text-slate-100 sm:text-base">
                        {f.q}
                      </span>
                      <span
                        aria-hidden="true"
                        className={[
                          'shrink-0 text-xs font-bold tracking-[0.18em] transition-colors',
                          isOpen ? 'text-cyan-400' : 'text-slate-500',
                        ].join(' ')}
                      >
                        {isOpen ? '−' : '+'}
                      </span>
                    </button>

                    <div
                      ref={(el) => {
                        panels.current[i] = el;
                      }}
                      className={[
                        'overflow-hidden px-8 pb-6',
                        reducedMotion ? '' : 'h-0 opacity-0',
                        isOpen && reducedMotion ? 'block' : '',
                      ].join(' ')}
                    >
                      <p className="text-sm leading-relaxed text-slate-200">
                        {f.a}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
