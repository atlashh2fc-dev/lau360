import React from 'react';

const MATRIX = [
  {
    sector: 'Pymes',
    foco: 'Decisión rápida con condiciones comparables.',
    ejemplos: 'Financiamiento, factoring, líneas de crédito; seguros corporativos; servicios de soporte.',
  },
  {
    sector: 'Inmobiliario',
    foco: 'Coordinación de partes y plazos sin quiebres.',
    ejemplos: 'Estructuración comercial; seguros/avales; documentación y seguimiento.',
  },
  {
    sector: 'Seguros',
    foco: 'Coberturas claras y renovaciones ordenadas.',
    ejemplos: 'Matriz comparativa; validación de condiciones; gestión operativa de siniestros.',
  },
  {
    sector: 'Legal',
    foco: 'Especialistas coordinados como un solo equipo.',
    ejemplos: 'Entregables y tiempos; control de hitos; documentación centralizada.',
  },
  {
    sector: 'Servicios operativos',
    foco: 'Proveedores con SLA y trazabilidad real.',
    ejemplos: 'Tercerización; control de avances; integración con canales existentes.',
  },
] as const;

export default function Industries() {
  return (
    <section id="industrias" className="relative scroll-mt-24 bg-white text-slate-950">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-12">
          <div className="hidden lg:col-span-1 lg:block">
            <div className="[writing-mode:vertical-rl] text-[11px] font-semibold tracking-[0.26em] text-slate-500">
              INDUSTRIAS / USOS
            </div>
          </div>

          <div className="lg:col-span-11">
            <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
              <header className="lg:col-span-5">
                <h2 className="text-3xl font-semibold tracking-[-0.02em] text-slate-950 sm:text-4xl">
                  Dónde operamos
                </h2>
                <p className="mt-5 text-sm leading-relaxed text-slate-700 sm:text-base">
                  El rubro cambia. La lógica no: múltiples actores, condiciones variables y necesidad
                  de trazabilidad en decisiones B2B.
                </p>
              </header>

              <div className="lg:col-span-7">
                <div className="border border-slate-900/15">
                  <div className="grid grid-cols-12 gap-4 border-b border-slate-900/15 px-5 py-4 text-[11px] font-semibold tracking-[0.22em] text-slate-600">
                    <div className="col-span-4">SECTOR</div>
                    <div className="col-span-4">FOCO</div>
                    <div className="col-span-4">EJEMPLOS</div>
                  </div>
                  <div className="divide-y divide-slate-900/15">
                    {MATRIX.map((row) => (
                      <div key={row.sector} className="grid grid-cols-12 gap-4 px-5 py-6">
                        <div className="col-span-12 sm:col-span-4">
                          <p className="text-sm font-semibold text-slate-950">{row.sector}</p>
                        </div>
                        <div className="col-span-12 sm:col-span-4">
                          <p className="text-sm leading-relaxed text-slate-800">{row.foco}</p>
                        </div>
                        <div className="col-span-12 sm:col-span-4">
                          <p className="text-sm leading-relaxed text-slate-700">{row.ejemplos}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <p className="mt-6 text-xs leading-relaxed text-slate-600">
                  No limitamos por rubro; limitamos por seriedad del proceso y claridad del objetivo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
