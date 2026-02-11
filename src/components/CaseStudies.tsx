import React from 'react';

const CASES = [
  {
    title: 'Pyme de servicios operativos',
    meta: 'Proceso B2B multi-actor · urgencia por plazos',
    context: 'Necesidad de ordenar proveedores y acelerar cierres en un entorno con múltiples interlocutores.',
    pain: 'Caos de interlocutores. El proceso se dilata y se pierde control.',
    action: 'Brief operativo, responsables por hito, consolidación documental y seguimiento en un solo hilo.',
    result: 'Un solo hilo conductor. Cierre acelerado y trazabilidad total.',
  },
  {
    title: 'Renovación de seguros corporativos',
    meta: 'Comparabilidad de cobertura · control de condiciones',
    context: 'Evaluación y renovación con necesidad de claridad total en cobertura, exclusiones y responsabilidades.',
    pain: 'Opacidad en condiciones. Riesgo de letra chica y sobrecostos.',
    action: 'Estructura comparativa, validación de condiciones y documentación centralizada para aprobación.',
    result: 'Transparencia absoluta. Comparativa nivelada y decisión segura.',
  },
] as const;

export default function CaseStudies() {
  return (
    <section id="casos" className="relative mt-20 scroll-mt-24 overflow-hidden py-8">
      {/* Gradient background */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 opacity-15 [background-image:radial-gradient(700px_circle_at_50%_50%,rgba(59,130,246,0.2),transparent_70%)]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-4">
            <h2 className="text-2xl font-bold tracking-[-0.01em] sm:text-3xl">
              <span className="text-gradient">Casos</span>{' '}
              <span className="text-slate-50">(impacto real)</span>
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-300">
              Evidencia de control. Transformamos fricción operativa en resultados medibles.
            </p>

            {/* Professional image */}
            <div className="mt-8 hidden overflow-hidden rounded-xl lg:block">
              <img
                src="/handshake.png"
                alt="Professional partnership"
                className="w-full object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="space-y-10">
              {CASES.map((c, idx) => (
                <article key={c.title} className="glass-card glass-card-hover p-8">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-baseline sm:justify-between">
                    <div>
                      <p className="text-[11px] font-bold tracking-[0.26em] text-cyan-400/80">
                        CASO {(idx + 1).toString().padStart(2, '0')}
                      </p>
                      <h3 className="mt-3 text-xl font-bold tracking-[-0.01em] text-slate-100 sm:text-2xl">
                        {c.title}
                      </h3>
                    </div>
                    <p className="text-xs leading-relaxed text-slate-400">{c.meta}</p>
                  </div>

                  <div className="mt-8 grid gap-8 sm:grid-cols-12 sm:gap-8">
                    <div className="sm:col-span-5">
                      <p className="text-[11px] font-bold tracking-[0.22em] text-cyan-400/80">
                        CONTEXTO
                      </p>
                      <p className="mt-3 text-sm leading-relaxed text-slate-200">
                        {c.context}
                      </p>
                      <div className="mt-6 h-px bg-gradient-electric" />
                      <p className="mt-6 text-[11px] font-bold tracking-[0.22em] text-red-400/80">
                        DOLOR
                      </p>
                      <p className="mt-3 text-sm leading-relaxed text-slate-200">
                        {c.pain}
                      </p>
                    </div>

                    <div className="sm:col-span-7 sm:border-l sm:border-white/10 sm:pl-8">
                      <p className="text-[11px] font-bold tracking-[0.22em] text-violet-400/80">
                        ACCIÓN
                      </p>
                      <p className="mt-3 text-sm leading-relaxed text-slate-200">
                        {c.action}
                      </p>
                      <div className="mt-6 h-px bg-gradient-electric" />
                      <p className="mt-6 text-[11px] font-bold tracking-[0.22em] text-emerald-400/80">
                        RESULTADO
                      </p>
                      <p className="mt-3 text-sm leading-relaxed text-slate-200">
                        {c.result}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
