import React from 'react';
import { motion } from 'motion/react';
import { ShoppingBag, Star, ExternalLink, ShieldCheck } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  index: number;
  key?: string | number;
}

export function ProductCard({ product, index }: ProductCardProps) {
  return (
    <motion.article
      id={`product-card-${product.id}`}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.35, 
        delay: 0.04 * index,
        ease: 'easeOut'
      }}
      whileTap={{ scale: 0.98 }}
      className="group bg-white border border-[#E8D5C4] rounded-2xl sm:rounded-3xl p-3 sm:p-4 flex flex-col items-center text-center shadow-xs hover:shadow-lg hover:border-[#FF8C61]/50 hover:-translate-y-1 transition-all duration-300 justify-between h-full relative"
    >
      <div className="w-full flex flex-col items-center">
        {/* Image Container with Link */}
        <a
          href={product.affiliateUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full aspect-square bg-[#FDFBF7] rounded-xl sm:rounded-2xl mb-2.5 flex items-center justify-center relative overflow-hidden border border-[#E8D5C4]/30 block group-hover:border-[#FF8C61]/40 transition-colors"
          title={`Ver ${product.title}`}
        >
          <img
            src={product.imageUrl}
            alt={product.title}
            className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-500"
            referrerPolicy="no-referrer"
            loading="lazy"
          />

          {/* Discount Badge */}
          {product.discountPercentage && (
            <div className="absolute top-2 right-2 bg-[#FF8C61] text-white font-extrabold text-[9px] sm:text-[10px] px-2 py-0.5 rounded-full shadow-xs">
              -{product.discountPercentage}%
            </div>
          )}

          {/* Viral Tag */}
          {product.badge && (
            <div className="absolute bottom-2 left-2 bg-white/90 backdrop-blur-xs text-[9px] sm:text-[10px] font-bold text-[#6E4F3A] px-2 py-0.5 rounded-md border border-[#E8D5C4]/60 shadow-2xs">
              {product.badge.split(' ')[0]}
            </div>
          )}
        </a>

        {/* Rating and Official Tag */}
        <div className="flex items-center justify-between w-full px-1 text-[10px] sm:text-xs text-[#8C847B] font-semibold mb-1">
          <div className="flex items-center gap-1">
            <Star className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-[#FFB800] text-[#FFB800]" />
            <span>{product.rating.toFixed(1)}</span>
            <span className="text-[#A0988F]">({product.reviewCount})</span>
          </div>

          <span className="hidden sm:flex items-center gap-0.5 text-[10px] text-emerald-700 font-bold bg-emerald-50 px-1.5 py-0.5 rounded-md border border-emerald-200/60">
            <ShieldCheck className="w-2.5 h-2.5 text-emerald-600" />
            Oficial
          </span>
        </div>

        <h3 className="text-xs sm:text-sm font-bold text-[#2D2D2D] line-clamp-1 leading-snug w-full px-0.5 group-hover:text-[#FF8C61] transition-colors">
          {product.title}
        </h3>

        <p className="text-[10px] sm:text-xs text-[#2D2D2D]/60 line-clamp-1 sm:line-clamp-2 mt-0.5 w-full leading-relaxed">
          {product.subtitle}
        </p>

        {/* Price */}
        <div className="flex items-baseline gap-1.5 mt-2">
          <span className="text-sm sm:text-lg font-extrabold text-[#FF8C61]">
            R$ {product.price}
          </span>
          {product.originalPrice && (
            <span className="text-[10px] sm:text-xs text-[#9E968D] line-through">
              R$ {product.originalPrice}
            </span>
          )}
        </div>
      </div>

      {/* Action Button */}
      <a
        id={`btn-cta-${product.id}`}
        href={product.affiliateUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-3 w-full bg-[#2D2D2D] hover:bg-[#FF8C61] text-white text-[10px] sm:text-xs py-2 sm:py-2.5 px-3 rounded-xl font-bold transition-all shadow-xs flex items-center justify-center gap-1.5 active:scale-95 group/btn"
      >
        <ShoppingBag className="w-3 h-3 sm:w-3.5 sm:h-3.5 group-hover/btn:scale-110 transition-transform" />
        <span>VER ITEM</span>
        <ExternalLink className="w-2.5 h-2.5 sm:w-3 sm:h-3 opacity-70" />
      </a>
    </motion.article>
  );
}


