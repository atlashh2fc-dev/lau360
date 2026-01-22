import React from 'react';

export default function WhatWeDo() {
  return (
    <section
      id="soluciones"
      className="relative scroll-mt-24 overflow-hidden py-24"
    >
      {/* Vibrant gradient background */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0e27] via-[#161932] to-[#0a0e27]" />
        <div className="absolute inset-0 opacity-30 [background-image:radial-gradient(900px_circle_at_80%_30%,rgba(139,92,246,0.25),transparent_70%),radial-gradient(700px_circle_at_20%_70%,rgba(59,130,246,0.20),transparent_65%)]" />
        <div className="absolute inset-0 opacity-[0.12] [background-image:linear-gradient(rgba(59,130,246,0.25)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.25)_1px,transparent_1px)] [background-size:96px_96px]" />
        <div className="absolute inset-0 opacity-[0.08] [background-image:radial-gradient(circle,rgba(6,182,212,0.4)_1px,transparent_1px)] [background-size:32px_32px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <header className="border-b border-white/10 pb-10">
          <p className="text-[11px] font-bold tracking-[0.28em] text-cyan-400/80">
            DEFINICIÓN DE CAPA EJECUTIVA
          </p>
          <h2 className="mt-6 text-balance text-4xl font-bold leading-[1.05] tracking-[-0.03em] sm:text-5xl">
            <span className="text-gradient">Qué hace</span>{' '}
            <span className="text-slate-50">Nexo</span>
          </h2>
          <p className="mt-6 max-w-3xl text-pretty text-base leading-relaxed text-slate-200 sm:text-lg">
            Convierte un proceso B2B fragmentado en una operación con responsables, criterios y
            trazabilidad. Menos conversación suelta. Más avance verificable.
          </p>
        </header>

        <div className="mt-14 grid gap-8 lg:grid-cols-3 lg:gap-10">
          {/* Card 1: Intermediación */}
          <div className="glass-card glass-card-hover group relative overflow-hidden p-8">
            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-electric opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-20" />

            <div className="relative">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-white/10 bg-gradient-electric/10">
                <svg className="h-7 w-7 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>

              <p className="mt-6 text-[11px] font-bold tracking-[0.26em] text-cyan-400/80">
                INTERMEDIACIÓN
              </p>
              <p className="mt-4 text-sm leading-relaxed text-slate-200">
                Conecta tu necesidad con alternativas reales del mercado, comparables entre sí.
                Filtra ruido y reduce incertidumbre.
              </p>
            </div>
          </div>

          {/* Card 2: Criterio */}
          <div className="glass-card glass-card-hover group relative overflow-hidden p-8">
            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br from-violet-500 to-purple-500 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-20" />

            <div className="relative">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-white/10 bg-violet-500/10">
                <svg className="h-7 w-7 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>

              <p className="mt-6 text-[11px] font-bold tracking-[0.26em] text-violet-400/80">
                CRITERIO
              </p>
              <p className="mt-4 text-sm leading-relaxed text-slate-200">
                Define el brief con precisión: alcance, plazos, restricciones y condiciones mínimas.
                Deja registro de decisiones.
              </p>
            </div>
          </div>

          {/* Card 3: Coordinación */}
          <div className="glass-card glass-card-hover group relative overflow-hidden p-8">
            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-neon opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-20" />

            <div className="relative">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-white/10 bg-blue-500/10">
                <svg className="h-7 w-7 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>

              <p className="mt-6 text-[11px] font-bold tracking-[0.26em] text-blue-400/80">
                COORDINACIÓN
              </p>
              <p className="mt-4 text-sm leading-relaxed text-slate-200">
                Orquesta interlocutores, documentación y seguimiento por hitos. Un solo hilo operativo
                hasta cierre.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-12">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-7">
              <p className="text-[11px] font-bold tracking-[0.26em] text-cyan-400/80">
                ENTREGABLES TÍPICOS
              </p>
              <div className="mt-7 grid gap-5 sm:grid-cols-2">
                {[
                  'Brief operativo (objetivo, restricciones, criterios).',
                  'Alternativas comparables (condiciones, plazos, riesgos).',
                  'Propuesta estructurada (decisión, próximos pasos, responsables).',
                  'Seguimiento por hitos (registro, documentación, cierre).',
                ].map((item, idx) => (
                  <div key={idx} className="group flex gap-3">
                    <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-md border border-electric-500/30 bg-electric-500/10 text-xs font-bold text-electric-400 transition-colors group-hover:border-electric-500/50 group-hover:bg-electric-500/20">
                      {idx + 1}
                    </div>
                    <p className="text-sm leading-relaxed text-slate-200">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-5 lg:border-l lg:border-white/10 lg:pl-10">
              <p className="text-[11px] font-bold tracking-[0.26em] text-violet-400/80">
                CUÁNDO APLICA
              </p>
              <p className="mt-7 text-sm leading-relaxed text-slate-200">
                Cuando hay múltiples proveedores, condiciones variables o riesgo reputacional/operativo
                por falta de control del proceso.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
