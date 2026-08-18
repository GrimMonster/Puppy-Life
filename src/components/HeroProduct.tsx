import React from 'react';
import { motion } from 'motion/react';
import { ShoppingBag, Star, ExternalLink } from 'lucide-react';
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
      className="w-full px-4 mb-5"
    >
      <div 
        id={`hero-card-${product.id}`}
        className="bg-[#E8D5C4] rounded-3xl p-4 sm:p-5 flex gap-4 items-center shadow-sm border border-[#DDC9B7] transition-all duration-300 hover:shadow-md relative overflow-hidden"
      >
        {/* Product Image Thumbnail */}
        <div className="w-28 h-28 sm:w-32 sm:h-32 bg-[#FDFBF7] rounded-2xl flex items-center justify-center shrink-0 overflow-hidden relative shadow-xs border border-white/60 group">
          <img
            src={product.imageUrl}
            alt={product.title}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
            referrerPolicy="no-referrer"
            loading="eager"
          />
          {product.discountPercentage && (
            <div className="absolute top-1.5 right-1.5 bg-[#FF8C61] text-white font-extrabold text-[9px] px-1.5 py-0.5 rounded-full shadow-xs">
              -{product.discountPercentage}%
            </div>
          )}
        </div>

        {/* Product Details & Direct CTA */}
        <div className="flex flex-col justify-between flex-1 min-w-0">
          <div>
            <div className="flex items-center justify-between gap-1 mb-0.5">
              <span className="text-[10px] font-bold text-[#FF8C61] uppercase tracking-widest">
                Best Seller 🔥
              </span>
              <div className="flex items-center gap-0.5 text-[10px] font-bold text-[#2D2D2D]/80">
                <Star className="w-3 h-3 fill-[#FFB800] text-[#FFB800]" />
                <span>{product.rating.toFixed(1)}</span>
              </div>
            </div>

            <h2 className="font-heading text-base sm:text-lg font-bold text-[#2D2D2D] leading-snug line-clamp-1">
              {product.title}
            </h2>
            <p className="text-xs text-[#2D2D2D]/75 line-clamp-2 mt-0.5 leading-tight">
              {product.subtitle}
            </p>
          </div>

          <div className="flex items-center justify-between mt-3 gap-2">
            <div className="flex flex-col">
              {product.originalPrice && (
                <span className="text-[10px] text-[#2D2D2D]/50 line-through leading-none">
                  R$ {product.originalPrice}
                </span>
              )}
              <span className="font-heading text-lg sm:text-xl font-black text-[#2D2D2D] leading-tight">
                R$ {product.price}
              </span>
            </div>

            <a
              id="hero-cta-button"
              href={product.affiliateUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#FF8C61] hover:bg-[#FF7A4A] text-white text-xs font-bold px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-xl shadow-lg shadow-[#FF8C61]/30 inline-flex items-center gap-1.5 transition-all duration-200 active:scale-95 whitespace-nowrap"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>VER PRODUTO</span>
              <ExternalLink className="w-3 h-3 opacity-80" />
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

