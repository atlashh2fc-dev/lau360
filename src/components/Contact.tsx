import React, { useMemo, useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'sent'>('idle');
  const id = useMemo(() => ({ form: 'contact-form' }), []);

  return (
    <section id="contacto" className="relative mt-20 scroll-mt-24 overflow-hidden pb-20">
      {/* Gradient background */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(800px_circle_at_30%_50%,rgba(6,182,212,0.25),transparent_70%),radial-gradient(700px_circle_at_80%_50%,rgba(59,130,246,0.20),transparent_65%)]" />
        <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(6,182,212,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.3)_1px,transparent_1px)] [background-size:64px_64px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <h2 className="text-3xl font-bold tracking-[-0.01em] sm:text-4xl">
              <span className="text-gradient">Contacto</span>
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-slate-200">
              Cuéntanos objetivo y plazo. Respondemos con una ruta clara de avance.
            </p>
            <p className="mt-8 text-xs leading-relaxed text-slate-400">
              Actuamos como agentes comerciales independientes. Operamos por comisión según acuerdo.
            </p>
          </div>

          <div className="lg:col-span-8">
            <form
              id={id.form}
              className="glass-card p-8 sm:p-10"
              onSubmit={(e) => {
                e.preventDefault();
                setStatus('sent');
              }}
            >
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="sm:col-span-1">
                  <label htmlFor="name" className="text-xs font-bold tracking-[0.18em] text-cyan-400/80">
                    NOMBRE
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    className="mt-3 w-full border-b border-white/20 bg-transparent pb-3 text-sm text-slate-100 placeholder:text-slate-500 transition-colors focus:border-cyan-400 focus:outline-none"
                    placeholder="Tu nombre"
                  />
                </div>

                <div className="sm:col-span-1">
                  <label htmlFor="email" className="text-xs font-bold tracking-[0.18em] text-cyan-400/80">
                    EMAIL
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="mt-3 w-full border-b border-white/20 bg-transparent pb-3 text-sm text-slate-100 placeholder:text-slate-500 transition-colors focus:border-cyan-400 focus:outline-none"
                    placeholder="nombre@empresa.com"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="company" className="text-xs font-bold tracking-[0.18em] text-cyan-400/80">
                    EMPRESA / RUBRO
                  </label>
                  <input
                    id="company"
                    name="company"
                    className="mt-3 w-full border-b border-white/20 bg-transparent pb-3 text-sm text-slate-100 placeholder:text-slate-500 transition-colors focus:border-cyan-400 focus:outline-none"
                    placeholder="Ej: Servicios operativos · Inmobiliario · Seguros"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="need" className="text-xs font-bold tracking-[0.18em] text-cyan-400/80">
                    QUÉ NECESITAS
                  </label>
                  <textarea
                    id="need"
                    name="need"
                    required
                    rows={5}
                    className="mt-3 w-full resize-y border-b border-white/20 bg-transparent pb-3 text-sm text-slate-100 placeholder:text-slate-500 transition-colors focus:border-cyan-400 focus:outline-none"
                    placeholder="Objetivo, contexto, plazo, restricciones, qué ya intentaste…"
                  />
                </div>
              </div>

              <div className="mt-8 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
                <button
                  type="submit"
                  className="group relative overflow-hidden rounded-lg bg-gradient-electric px-8 py-3.5 text-[13px] font-bold tracking-[0.10em] text-white shadow-glow transition-all duration-300 hover:scale-105 hover:shadow-glow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
                >
                  <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                  <span className="relative">Enviar</span>
                </button>
                {status === 'sent' ? (
                  <p role="status" className="text-sm font-medium text-emerald-400">
                    ✓ Recibido. Te contactamos con una propuesta de avance.
                  </p>
                ) : (
                  <p className="text-xs text-slate-400">
                    Respuesta estimada: 24–48h hábiles.
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
