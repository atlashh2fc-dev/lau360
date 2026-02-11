import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, Building2, ShieldCheck, Scale, Settings } from 'lucide-react';

const MATRIX = [
  {
    sector: 'Pymes',
    foco: 'Decisión rápida con condiciones comparables.',
    ejemplos: 'Financiamiento, factoring, líneas de crédito; seguros corporativos; servicios de soporte.',
    icon: Briefcase,
    image: '/pymes_card_1770829467960.png',
  },
  {
    sector: 'Inmobiliario',
    foco: 'Coordinación de partes y plazos sin quiebres.',
    ejemplos: 'Estructuración comercial; seguros/avales; documentación y seguimiento.',
    icon: Building2,
    image: '/real_estate_card_1770829532775.png',
  },
  {
    sector: 'Seguros',
    foco: 'Coberturas claras y renovaciones ordenadas.',
    ejemplos: 'Matriz comparativa; validación de condiciones; gestión operativa de siniestros.',
    icon: ShieldCheck,
    image: '/insurance_card_1770829483918.png',
  },
  {
    sector: 'Legal',
    foco: 'Especialistas coordinados como un solo equipo.',
    ejemplos: 'Entregables y tiempos; control de hitos; documentación centralizada.',
    icon: Scale,
    image: '/legal_card_1770829552700.png',
  },
  {
    sector: 'Servicios operativos',
    foco: 'Proveedores con SLA y trazabilidad real.',
    ejemplos: 'Tercerización; control de avances; integración con canales existentes.',
    icon: Settings,
    image: '/ops_card_1770829503103.png',
  },
] as const;

export default function Industries() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="industrias" className="relative scroll-mt-24 overflow-hidden bg-white py-24">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-slate-50 opacity-50 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-slate-50 opacity-50 blur-3xl" />
      </div>

      {/* Dimming overlay for the entire section/site when a card is hovered */}
      <AnimatePresence>
        {hoveredIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-slate-950 pointer-events-none"
          />
        )}
      </AnimatePresence>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-50">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-sm font-bold tracking-widest text-slate-500 uppercase">
              Industrias / Usos
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Dónde operamos
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              El rubro cambia. La lógica no: múltiples actores, condiciones variables y necesidad
              de trazabilidad en decisiones B2B.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {MATRIX.map((item, index) => (
            <motion.div
              key={item.sector}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="group relative flex flex-col rounded-2xl overflow-hidden h-96 shadow-lg transition-all"
              style={{
                zIndex: hoveredIndex === index ? 50 : 10,
              }}
            >
              {/* Background Image */}
              <div aria-hidden="true" className="absolute inset-0">
                <img
                  src={item.image}
                  alt={item.sector}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/50 to-slate-950/20" />
              </div>

              {/* Content */}
              <div className="relative flex h-full flex-col p-6">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-white backdrop-blur-sm border border-white/20 transition-all group-hover:bg-white group-hover:text-slate-950 group-hover:scale-110 duration-300">
                  <item.icon className="h-6 w-6" strokeWidth={1.5} />
                </div>

                <h3 className="mb-2 text-xl font-bold text-white tracking-wide">
                  {item.sector}
                </h3>

                <p className="text-sm font-medium text-slate-200 leading-relaxed opacity-90">
                  {item.foco}
                </p>

                <div className="mt-auto transform translate-y-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <div className="h-px w-full bg-white/20 mb-4" />
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {item.ejemplos}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-slate-500 font-medium">
            No limitamos por rubro; limitamos por seriedad del proceso y claridad del objetivo.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
