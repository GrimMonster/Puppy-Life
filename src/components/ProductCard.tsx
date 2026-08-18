import React from 'react';
import { motion } from 'motion/react';
import { ShoppingBag, Star, ExternalLink } from 'lucide-react';
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
        delay: 0.05 * index,
        ease: 'easeOut'
      }}
      whileTap={{ scale: 0.98 }}
      className="group bg-white border border-[#E8D5C4] rounded-[24px] p-3 flex flex-col items-center text-center shadow-xs hover:shadow-md hover:border-[#FF8C61]/50 transition-all duration-300 justify-between h-full"
    >
      <div className="w-full flex flex-col items-center">
        {/* Image Container with Soft Background */}
        <div className="w-full aspect-square bg-[#FDFBF7] rounded-2xl mb-2 flex items-center justify-center relative overflow-hidden border border-[#E8D5C4]/30">
          <img
            src={product.imageUrl}
            alt={product.title}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
            referrerPolicy="no-referrer"
            loading="lazy"
          />

          {/* Discount Badge */}
          {product.discountPercentage && (
            <div className="absolute top-2 right-2 bg-[#FF8C61] text-white font-extrabold text-[9px] px-1.5 py-0.5 rounded-full shadow-xs">
              -{product.discountPercentage}%
            </div>
          )}

          {/* Viral Tag */}
          {product.badge && (
            <div className="absolute bottom-2 left-2 bg-white/90 backdrop-blur-xs text-[9px] font-bold text-[#6E4F3A] px-2 py-0.5 rounded-md border border-[#E8D5C4]/60">
              {product.badge.split(' ')[0]}
            </div>
          )}
        </div>

        {/* Rating and Title */}
        <div className="flex items-center gap-1 text-[10px] text-[#8C847B] font-semibold mb-0.5">
          <Star className="w-3 h-3 fill-[#FFB800] text-[#FFB800]" />
          <span>{product.rating.toFixed(1)}</span>
          <span>({product.reviewCount})</span>
        </div>

        <h3 className="text-[11px] sm:text-xs font-bold text-[#2D2D2D] line-clamp-1 leading-snug w-full px-0.5 group-hover:text-[#FF8C61] transition-colors">
          {product.title}
        </h3>

        <p className="text-[10px] text-[#2D2D2D]/60 line-clamp-1 mt-0.5 w-full">
          {product.subtitle}
        </p>

        {/* Price */}
        <div className="flex items-baseline gap-1 mt-1">
          <span className="text-sm sm:text-base font-bold text-[#FF8C61]">
            R$ {product.price}
          </span>
          {product.originalPrice && (
            <span className="text-[10px] text-[#9E968D] line-through">
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
        className="mt-2.5 w-full bg-[#2D2D2D] hover:bg-black text-white text-[10px] sm:text-[11px] py-2 px-2 rounded-xl font-bold transition-all shadow-xs flex items-center justify-center gap-1 active:scale-95"
      >
        <ShoppingBag className="w-3 h-3" />
        <span>VER ITEM</span>
        <ExternalLink className="w-2.5 h-2.5 opacity-70" />
      </a>
    </motion.article>
  );
}

