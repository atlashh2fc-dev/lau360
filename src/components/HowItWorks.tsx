import React, { useRef } from 'react';
import { gsap, useGsapContext, useInViewOnce, usePrefersReducedMotion } from '../lib/gsap';

const STEPS = [
  {
    title: 'Levantamiento',
    body: 'Definimos objetivo, restricciones, plazos y criterios. Salimos con un brief "operable", no con una conversación suelta.',
  },
  {
    title: 'Match',
    body: 'Seleccionamos alternativas y validamos viabilidad. Te mostramos opciones comparables, con condiciones claras.',
  },
  {
    title: 'Propuesta',
    body: 'Estructuramos la propuesta y el plan de avance. Documentación mínima necesaria, sin inflar el proceso.',
  },
  {
    title: 'Ejecución',
    body: 'Coordinamos a los actores y resolvemos fricción. Una sola línea de seguimiento, un responsable por hito.',
  },
  {
    title: 'Seguimiento',
    body: 'Medimos, iteramos y cerramos. Si hay renovaciones o ajustes, el historial ya está ordenado.',
  },
] as const;

export default function HowItWorks() {
  const scope = useRef<HTMLDivElement>(null);
  const rail = useRef<HTMLDivElement>(null);
  const inView = useInViewOnce(scope, { rootMargin: '-20% 0px -20% 0px' });
  const reducedMotion = usePrefersReducedMotion();

  useGsapContext({
    scope,
    deps: [inView],
    enabled: inView && !reducedMotion,
    setup: () => {
      gsap.set('[data-step]', { opacity: 0, y: 12 });
      if (rail.current) {
        gsap.set(rail.current, { scaleX: 0, transformOrigin: '0% 50%' });
        gsap.to(rail.current, { scaleX: 1, duration: 1.0, ease: 'power3.out' });
      }
      gsap.to('[data-step]', {
        opacity: 1,
        y: 0,
        duration: 0.75,
        ease: 'power2.out',
        stagger: 0.08,
        delay: 0.06,
      });
    },
  });

  return (
    <section id="como-funciona" className="relative scroll-mt-24 overflow-hidden py-24">
      {/* Gradient background */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0e27] via-[#1a1438] to-[#0a0e27]" />
        <div className="absolute inset-0 opacity-25 [background-image:radial-gradient(900px_circle_at_20%_40%,rgba(139,92,246,0.3),transparent_70%),radial-gradient(800px_circle_at_70%_60%,rgba(59,130,246,0.25),transparent_65%)]" />
        <div className="absolute inset-0 opacity-[0.12] [background-image:linear-gradient(rgba(139,92,246,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.2)_1px,transparent_1px)] [background-size:120px_120px]" />
      </div>

      <div ref={scope} className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-10">
          <header className="max-w-3xl">
            <p className="text-[11px] font-bold tracking-[0.28em] text-violet-400/80">
              PROCESO OPERATIVO
            </p>
            <h2 className="mt-6 text-3xl font-bold tracking-[-0.02em] sm:text-4xl">
              <span className="text-gradient">Cómo</span>{' '}
              <span className="text-slate-50">opera</span>
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-slate-200 sm:text-base">
              Un flujo de control: cada etapa produce claridad, reduce incertidumbre y define el siguiente responsable.
            </p>
          </header>

          <div className="hidden lg:block">
            <div className="relative">
              <div className="h-px bg-white/10" />
              <div ref={rail} aria-hidden="true" className="absolute inset-y-0 left-0 h-px w-full bg-gradient-electric shadow-glow" />
            </div>

            <ol className="mt-12 grid grid-cols-5 gap-10">
              {STEPS.map((step, idx) => (
                <li key={step.title} data-step className="group relative min-w-0">
                  {/* Number with glow effect */}
                  <div className="relative inline-flex">
                    <div className="absolute inset-0 animate-glow rounded-full bg-gradient-electric opacity-0 blur-xl transition-opacity group-hover:opacity-40" />
                    <div className="relative flex h-16 w-16 items-center justify-center rounded-full border border-white/20 bg-gradient-electric/10 backdrop-blur-sm">
                      <p className="text-3xl font-bold text-gradient tracking-tight">
                        {idx + 1}
                      </p>
                    </div>
                  </div>

                  <h3 className="mt-5 text-sm font-bold tracking-[0.10em] text-cyan-400">
                    {step.title.toUpperCase()}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-slate-300">
                    {step.body}
                  </p>
                </li>
              ))}
            </ol>
          </div>

          <div className="lg:hidden">
            <div className="border-t border-white/10" />
            <ol className="divide-y divide-white/10">
              {STEPS.map((step, idx) => (
                <li key={step.title} data-step className="py-8">
                  <div className="flex items-baseline justify-between gap-6">
                    <h3 className="text-sm font-bold tracking-[0.12em] text-cyan-400">
                      {step.title.toUpperCase()}
                    </h3>
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border border-white/20 bg-gradient-electric/10">
                      <p className="text-xl font-bold text-gradient">
                        {idx + 1}
                      </p>
                    </div>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-slate-300">
                    {step.body}
                  </p>
                </li>
              ))}
            </ol>
            <div className="border-t border-white/10" />
          </div>
        </div>
      </div>
    </section>
  );
}
