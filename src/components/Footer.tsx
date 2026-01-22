import React from 'react';

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold tracking-[0.12em] text-slate-100">Nexo Asesores</p>
            <p className="mt-2 max-w-xl text-xs leading-relaxed text-slate-500">
              Actuamos como agentes comerciales independientes. Operamos por comisión según acuerdo.
              La información de este sitio es referencial y no constituye asesoría legal/financiera por sí misma.
            </p>
          </div>
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} Nexo Asesores. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
