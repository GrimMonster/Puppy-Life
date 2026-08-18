import React from 'react';
import { ShieldCheck, Truck, RefreshCw, Heart, ArrowUp } from 'lucide-react';

export function TrustFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full mt-4 pb-8 px-4 flex flex-col items-center text-center">
      {/* Trust Highlights Container */}
      <div className="w-full bg-[#E8D5C4]/30 rounded-[28px] p-4 border border-[#E8D5C4] mb-4 space-y-3">
        <h4 className="font-heading font-bold text-xs text-[#2D2D2D] flex items-center justify-center gap-1.5">
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
          <span>Curadoria Oficial Puppy Life</span>
        </h4>

        <div className="grid grid-cols-3 gap-1.5 text-left">
          <div className="bg-white p-2 rounded-2xl border border-[#E8D5C4]/60 flex flex-col items-center text-center shadow-2xs">
            <ShieldCheck className="w-4 h-4 text-[#FF8C61] mb-0.5" />
            <span className="font-heading text-[10px] font-bold text-[#2D2D2D] leading-tight">Lojas Oficiais</span>
            <span className="text-[8px] text-[#2D2D2D]/60 mt-0.5">ML & Amazon</span>
          </div>

          <div className="bg-white p-2 rounded-2xl border border-[#E8D5C4]/60 flex flex-col items-center text-center shadow-2xs">
            <Truck className="w-4 h-4 text-[#FF8C61] mb-0.5" />
            <span className="font-heading text-[10px] font-bold text-[#2D2D2D] leading-tight">Frete Rápido</span>
            <span className="text-[8px] text-[#2D2D2D]/60 mt-0.5">Full & Prime</span>
          </div>

          <div className="bg-white p-2 rounded-2xl border border-[#E8D5C4]/60 flex flex-col items-center text-center shadow-2xs">
            <RefreshCw className="w-4 h-4 text-[#FF8C61] mb-0.5" />
            <span className="font-heading text-[10px] font-bold text-[#2D2D2D] leading-tight">Testados</span>
            <span className="text-[8px] text-[#2D2D2D]/60 mt-0.5">4.8+ Estrelas</span>
          </div>
        </div>

        {/* Affiliate disclosure */}
        <p className="text-[9px] text-[#2D2D2D]/60 leading-relaxed max-w-xs mx-auto">
          🔒 <strong>Transparência:</strong> Comprando pelos nossos links oficiais você garante descontos exclusivos e apoia nosso canal sem pagar nada a mais! ❤️
        </p>
      </div>

      {/* Back to top button */}
      <button
        id="btn-scroll-top"
        onClick={scrollToTop}
        className="mb-3 inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-white border border-[#E8D5C4] text-[11px] font-semibold text-[#2D2D2D]/75 hover:bg-[#FAF7F2] transition-colors shadow-2xs active:scale-95"
      >
        <ArrowUp className="w-3 h-3 text-[#FF8C61]" />
        <span>Voltar ao topo</span>
      </button>

      {/* Footer Signature */}
      <div className="space-y-0.5 text-[11px] text-[#2D2D2D]/50">
        <p className="flex items-center justify-center gap-1 font-medium">
          Feito com <Heart className="w-3 h-3 text-[#FF8C61] fill-[#FF8C61]" /> para apaixonados por pets
        </p>
        <p className="text-[10px] text-[#2D2D2D]/40">
          Puppy Life Hub © {new Date().getFullYear()} • Vibe Studio Edition
        </p>
      </div>
    </footer>
  );
}

