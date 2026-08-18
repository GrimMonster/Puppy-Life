import React from 'react';
import { motion } from 'motion/react';
import { ShoppingBag, Star, ExternalLink, Flame, ShieldCheck } from 'lucide-react';
import { Product } from '../types';

interface HeroProductProps {
  product: Product;
  onQuickView?: (product: Product) => void;
}

export function HeroProduct({ product }: HeroProductProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="w-full mb-6"
    >
      <div 
        id={`hero-card-${product.id}`}
        className="bg-gradient-to-br from-[#E8D5C4] via-[#EFE5DA] to-[#E8D5C4] rounded-3xl p-4 sm:p-6 lg:p-7 shadow-sm border border-[#DDC9B7] transition-all duration-300 hover:shadow-md relative overflow-hidden"
      >
        {/* Top Highlight Badge */}
        <div className="flex items-center justify-between mb-3.5 sm:mb-4">
          <div className="inline-flex items-center gap-1.5 bg-[#FF8C61] text-white text-[11px] font-extrabold px-3 py-1 rounded-full shadow-xs uppercase tracking-wider">
            <Flame className="w-3.5 h-3.5 fill-white animate-bounce" />
            <span>Top #1 Escolha no TikTok</span>
          </div>

          <div className="flex items-center gap-1.5 text-xs font-bold text-[#6E4F3A] bg-white/70 backdrop-blur-xs px-2.5 py-1 rounded-full border border-white/60">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>Link Oficial Verificado</span>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-5 lg:gap-8">
          {/* Product Image Thumbnail */}
          <a
            href={product.affiliateUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-56 lg:w-72 aspect-video md:aspect-square bg-[#FDFBF7] rounded-2xl flex items-center justify-center shrink-0 overflow-hidden relative shadow-sm border border-white/70 group block"
            title={`Ver ${product.title}`}
          >
            <img
              src={product.imageUrl}
              alt={product.title}
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              referrerPolicy="no-referrer"
              loading="eager"
            />
            {product.discountPercentage && (
              <div className="absolute top-2.5 right-2.5 bg-[#FF8C61] text-white font-extrabold text-xs px-2 py-0.5 rounded-full shadow-sm">
                -{product.discountPercentage}% OFF
              </div>
            )}
            <div className="absolute bottom-2.5 left-2.5 bg-white/90 backdrop-blur-md px-2 py-0.5 rounded-md text-[11px] font-bold text-[#2D2D2D] flex items-center gap-1 shadow-2xs">
              <Star className="w-3.5 h-3.5 fill-[#FFB800] text-[#FFB800]" />
              <span>{product.rating.toFixed(1)}</span>
              <span className="text-[#888] font-normal">({product.reviewCount})</span>
            </div>
          </a>

          {/* Product Details & Direct CTA */}
          <div className="flex flex-col justify-between flex-1 w-full space-y-3">
            <div>
              <span className="text-xs font-bold text-[#FF8C61] uppercase tracking-wider block mb-1">
                {product.subtitle}
              </span>

              <h2 className="font-heading text-xl sm:text-2xl lg:text-3xl font-bold text-[#2D2D2D] leading-tight">
                {product.title}
              </h2>

              {product.description && (
                <p className="text-xs sm:text-sm text-[#2D2D2D]/80 mt-1.5 leading-relaxed">
                  {product.description}
                </p>
              )}

              {/* Features Chips */}
              {product.features && (
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {product.features.map((feat, idx) => (
                    <span 
                      key={idx}
                      className="text-[11px] font-medium bg-white/80 text-[#5C4D42] px-2.5 py-1 rounded-lg border border-white/60 shadow-2xs"
                    >
                      ✓ {feat}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Price & CTA Row */}
            <div className="pt-3 border-t border-[#DDC9B7]/70 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <div className="flex items-baseline gap-2">
                  {product.originalPrice && (
                    <span className="text-xs text-[#2D2D2D]/50 line-through">
                      R$ {product.originalPrice}
                    </span>
                  )}
                  <span className="font-heading text-2xl sm:text-3xl font-black text-[#2D2D2D]">
                    <span className="text-sm font-semibold text-[#FF8C61] mr-1">R$</span>
                    {product.price}
                  </span>
                </div>
                <p className="text-[11px] text-emerald-800 font-medium">
                  ⚡ Menor preço garantido no {product.platform || 'Mercado Livre'}
                </p>
              </div>

              <a
                id="hero-cta-button"
                href={product.affiliateUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#FF8C61] hover:bg-[#FF7A4A] text-white text-sm sm:text-base font-heading font-extrabold px-6 py-3 rounded-2xl shadow-lg shadow-[#FF8C61]/30 inline-flex items-center justify-center gap-2 transition-all duration-200 active:scale-95 whitespace-nowrap"
              >
                <ShoppingBag className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5]" />
                <span>🛒 VER PRODUTO</span>
                <ExternalLink className="w-4 h-4 opacity-80" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}


