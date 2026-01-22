import React from 'react';

const WITHOUT = [
  'Multiplicidad de interlocutores y mensajes cruzados.',
  'Tiempo perdido "cotizando" sin criterios comparables.',
  'Decisiones a ciegas por falta de condiciones claras.',
  'Seguimiento reactivo: el proceso se enfría o se rompe.',
] as const;

const WITH = [
  'Un hilo operativo: responsables, hitos y documentación.',
  'Opciones filtradas con criterios de riesgo, plazo y viabilidad.',
  'Propuestas estructuradas y comparables para decidir rápido.',
  'Seguimiento disciplinado hasta cierre y post-cierre.',
] as const;

export default function Advantages() {
  return (
    <section className="relative mt-20 overflow-hidden py-12">
      {/* Subtle gradient background */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(600px_circle_at_50%_50%,rgba(139,92,246,0.15),transparent_70%)]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-4">
            <h2 className="text-2xl font-bold tracking-[-0.01em] sm:text-3xl">
              <span className="text-gradient">Ventajas</span>
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-300">
              Comparativa seria: menos fricción operativa, más control y mejores decisiones.
            </p>
          </div>

          <div className="lg:col-span-8">
            <div className="glass-card overflow-hidden p-1">
              <div className="grid gap-1 md:grid-cols-2">
                {/* Sin Nexo - Red/Warning tones */}
                <div className="relative overflow-hidden bg-gradient-to-br from-red-500/5 to-orange-500/5 p-8">
                  <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-red-500/10 blur-3xl" />

                  <div className="relative">
                    <p className="text-[11px] font-bold tracking-[0.26em] text-red-400/80">
                      SIN NEXO
                    </p>
                    <h3 className="mt-4 text-lg font-bold tracking-[-0.01em] text-slate-100">
                      Dispersión operativa
                    </h3>
                    <div className="mt-6 space-y-4">
                      {WITHOUT.map((t, i) => (
                        <div key={t} className="flex gap-3">
                          <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-md border border-red-500/30 bg-red-500/10">
                            <svg className="h-3.5 w-3.5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </div>
                          <p className="text-sm leading-relaxed text-slate-200">{t}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Con Nexo - Green/Success tones */}
                <div className="relative overflow-hidden bg-gradient-to-br from-emerald-500/5 to-cyan-500/5 p-8">
                  <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-emerald-500/10 blur-3xl" />

                  <div className="relative">
                    <p className="text-[11px] font-bold tracking-[0.26em] text-emerald-400/80">
                      CON NEXO
                    </p>
                    <h3 className="mt-4 text-lg font-bold tracking-[-0.01em] text-slate-100">
                      Control y trazabilidad
                    </h3>
                    <div className="mt-6 space-y-4">
                      {WITH.map((t, i) => (
                        <div key={t} className="flex gap-3">
                          <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-md border border-emerald-500/30 bg-emerald-500/10">
                            <svg className="h-3.5 w-3.5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <p className="text-sm leading-relaxed text-slate-200">{t}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <p className="border-t border-white/10 px-8 py-5 text-xs leading-relaxed text-slate-400">
                Enfoque ejecutivo: documentación mínima necesaria, responsables claros y seguimiento hasta cierre.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
