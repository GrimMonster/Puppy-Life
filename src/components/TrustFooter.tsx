import React from 'react';
import { ShieldCheck, Truck, RefreshCw, Heart, ArrowUp } from 'lucide-react';

export function TrustFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full mt-6 pb-10 flex flex-col items-center text-center">
      {/* Trust Highlights Container */}
      <div className="w-full bg-[#E8D5C4]/30 rounded-3xl p-5 sm:p-6 border border-[#E8D5C4] mb-6 space-y-4">
        <h4 className="font-heading font-bold text-sm sm:text-base text-[#2D2D2D] flex items-center justify-center gap-2">
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
          <span>Curadoria Oficial Puppy Life</span>
        </h4>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-left">
          <div className="bg-white p-3.5 sm:p-4 rounded-2xl border border-[#E8D5C4]/60 flex flex-col items-center text-center shadow-2xs hover:shadow-sm transition-shadow">
            <ShieldCheck className="w-5 h-5 text-[#FF8C61] mb-1.5" />
            <span className="font-heading text-xs sm:text-sm font-bold text-[#2D2D2D] leading-tight">Lojas Oficiais</span>
            <span className="text-[11px] text-[#2D2D2D]/65 mt-1">Mercado Livre, Amazon & Shopee</span>
          </div>

          <div className="bg-white p-3.5 sm:p-4 rounded-2xl border border-[#E8D5C4]/60 flex flex-col items-center text-center shadow-2xs hover:shadow-sm transition-shadow">
            <Truck className="w-5 h-5 text-[#FF8C61] mb-1.5" />
            <span className="font-heading text-xs sm:text-sm font-bold text-[#2D2D2D] leading-tight">Frete Rápido</span>
            <span className="text-[11px] text-[#2D2D2D]/65 mt-1">Opções Full & Prime com Desconto</span>
          </div>

          <div className="bg-white p-3.5 sm:p-4 rounded-2xl border border-[#E8D5C4]/60 flex flex-col items-center text-center shadow-2xs hover:shadow-sm transition-shadow">
            <RefreshCw className="w-5 h-5 text-[#FF8C61] mb-1.5" />
            <span className="font-heading text-xs sm:text-sm font-bold text-[#2D2D2D] leading-tight">Testados & Aprovados</span>
            <span className="text-[11px] text-[#2D2D2D]/65 mt-1">Avaliações 4.8+ e recomendados</span>
          </div>
        </div>

        {/* Affiliate disclosure */}
        <p className="text-[11px] text-[#2D2D2D]/65 leading-relaxed max-w-xl mx-auto pt-1">
          🔒 <strong>Transparência:</strong> Comprando pelos nossos links oficiais você garante descontos exclusivos e apoia nosso canal sem pagar nenhum centavo a mais! ❤️
        </p>
      </div>

      {/* Back to top button */}
      <button
        id="btn-scroll-top"
        onClick={scrollToTop}
        className="mb-4 inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white border border-[#E8D5C4] text-xs font-semibold text-[#2D2D2D]/75 hover:bg-[#FAF7F2] hover:border-[#FF8C61]/40 transition-colors shadow-2xs active:scale-95"
      >
        <ArrowUp className="w-3.5 h-3.5 text-[#FF8C61]" />
        <span>Voltar ao topo</span>
      </button>

      {/* Footer Signature */}
      <div className="space-y-1 text-xs text-[#2D2D2D]/55">
        <p className="flex items-center justify-center gap-1 font-medium">
          Feito com <Heart className="w-3.5 h-3.5 text-[#FF8C61] fill-[#FF8C61]" /> para apaixonados por pets
        </p>
        <p className="text-[11px] text-[#2D2D2D]/40">
          Puppy Life Hub © {new Date().getFullYear()} • Edição Responsiva Oficial
        </p>
      </div>
    </footer>
  );
}


