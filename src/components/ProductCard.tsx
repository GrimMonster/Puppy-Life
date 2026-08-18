import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingBag, Star, ExternalLink, ShieldCheck, ChevronLeft, ChevronRight, Maximize2, X } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  index: number;
  key?: string | number;
}

export function ProductCard({ product, index }: ProductCardProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const images = product.images && product.images.length > 0 ? product.images : [product.imageUrl];

  const handlePrevImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNextImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handleSelectThumbnail = (e: React.MouseEvent, idx: number) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImageIndex(idx);
  };

  const handleOpenLightbox = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsLightboxOpen(true);
  };

  return (
    <>
      <motion.article
        id={`product-card-${product.id}`}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.35, 
          delay: 0.04 * index,
          ease: 'easeOut'
        }}
        whileTap={{ scale: 0.99 }}
        className="group bg-white border border-[#E8D5C4] rounded-2xl sm:rounded-3xl p-3 sm:p-4 flex flex-col items-center text-center shadow-xs hover:shadow-lg hover:border-[#FF8C61]/50 hover:-translate-y-1 transition-all duration-300 justify-between h-full relative"
      >
        <div className="w-full flex flex-col items-center">
          {/* Main Image Container */}
          <div className="w-full aspect-square bg-[#FDFBF7] rounded-xl sm:rounded-2xl mb-2 flex items-center justify-center relative overflow-hidden border border-[#E8D5C4]/30 group/img">
            <a
              href={product.affiliateUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full h-full block"
              title={`Ver ${product.title}`}
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentImageIndex}
                  src={images[currentImageIndex]}
                  alt={`${product.title} - Foto ${currentImageIndex + 1}`}
                  initial={{ opacity: 0.7 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0.7 }}
                  transition={{ duration: 0.2 }}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
              </AnimatePresence>
            </a>

            {/* Quick Zoom / View Full Gallery Button */}
            {images.length > 1 && (
              <button
                type="button"
                onClick={handleOpenLightbox}
                title="Ampliar galeria de fotos"
                className="absolute top-2 left-2 z-10 bg-white/90 hover:bg-white text-[#2D2D2D] p-1.5 rounded-lg shadow-xs border border-[#E8D5C4] text-[10px] font-bold flex items-center gap-1 opacity-90 sm:opacity-0 group-hover/img:opacity-100 transition-opacity"
              >
                <Maximize2 className="w-3 h-3 text-[#FF8C61]" />
                <span className="hidden sm:inline">{images.length} fotos</span>
              </button>
            )}

            {/* Gallery Arrows (shown on hover if > 1 image) */}
            {images.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={handlePrevImage}
                  aria-label="Imagem anterior"
                  className="absolute left-1.5 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-white/90 hover:bg-white text-[#2D2D2D] shadow-xs flex items-center justify-center transition-all opacity-80 sm:opacity-0 group-hover/img:opacity-100 active:scale-90 z-10"
                >
                  <ChevronLeft className="w-3.5 h-3.5" />
                </button>
                <button
                  type="button"
                  onClick={handleNextImage}
                  aria-label="Próxima imagem"
                  className="absolute right-1.5 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-white/90 hover:bg-white text-[#2D2D2D] shadow-xs flex items-center justify-center transition-all opacity-80 sm:opacity-0 group-hover/img:opacity-100 active:scale-90 z-10"
                >
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </>
            )}

            {/* Discount Badge */}
            {product.discountPercentage && (
              <div className="absolute top-2 right-2 bg-[#FF8C61] text-white font-extrabold text-[9px] sm:text-[10px] px-2 py-0.5 rounded-full shadow-xs pointer-events-none z-10">
                -{product.discountPercentage}%
              </div>
            )}
          </div>

          {/* VISIBLE THUMBNAILS ROW (Always visible for multi-image products) */}
          {images.length > 1 && (
            <div className="w-full grid grid-cols-5 gap-1.5 mb-2.5 px-0.5">
              {images.map((imgUrl, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={(e) => handleSelectThumbnail(e, idx)}
                  onMouseEnter={() => setCurrentImageIndex(idx)}
                  className={`aspect-square rounded-lg overflow-hidden border transition-all duration-200 relative bg-[#FDFBF7] ${
                    idx === currentImageIndex
                      ? 'border-[#FF8C61] ring-2 ring-[#FF8C61]/40 scale-105 shadow-xs'
                      : 'border-[#E8D5C4]/70 opacity-70 hover:opacity-100 hover:border-[#FF8C61]/50'
                  }`}
                  title={`Foto ${idx + 1} de ${images.length}`}
                >
                  <img
                    src={imgUrl}
                    alt={`Miniatura ${idx + 1}`}
                    className="w-full h-full object-cover object-center"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                </button>
              ))}
            </div>
          )}

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

      {/* FULLSCREEN LIGHTBOX MODAL */}
      <AnimatePresence>
        {isLightboxOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-xs p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-3xl p-4 sm:p-6 max-w-lg w-full shadow-2xl relative flex flex-col items-center max-h-[90vh] overflow-y-auto"
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setIsLightboxOpen(false)}
                className="absolute top-4 right-4 p-2 rounded-full bg-[#F1ECE3] hover:bg-[#E8D5C4] text-[#2D2D2D] transition-colors"
                aria-label="Fechar"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="text-center mb-3 pr-8">
                <span className="text-[11px] font-bold text-[#FF8C61] uppercase tracking-wider">
                  Foto {currentImageIndex + 1} de {images.length}
                </span>
                <h4 className="text-base sm:text-lg font-bold text-[#2D2D2D]">{product.title}</h4>
              </div>

              {/* Large Image Preview with Navigation */}
              <div className="w-full aspect-square bg-[#FDFBF7] rounded-2xl overflow-hidden relative border border-[#E8D5C4] mb-4 flex items-center justify-center">
                <img
                  src={images[currentImageIndex]}
                  alt={`${product.title} grande`}
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />

                <button
                  type="button"
                  onClick={handlePrevImage}
                  className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/90 hover:bg-white text-[#2D2D2D] shadow-md flex items-center justify-center"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  onClick={handleNextImage}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/90 hover:bg-white text-[#2D2D2D] shadow-md flex items-center justify-center"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Lightbox Thumbnails */}
              <div className="grid grid-cols-5 gap-2 w-full mb-4">
                {images.map((imgUrl, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={(e) => handleSelectThumbnail(e, idx)}
                    className={`aspect-square rounded-xl overflow-hidden border-2 transition-all ${
                      idx === currentImageIndex
                        ? 'border-[#FF8C61] ring-2 ring-[#FF8C61]/30 scale-105'
                        : 'border-[#E8D5C4] opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={imgUrl}
                      alt={`Miniatura ${idx + 1}`}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </button>
                ))}
              </div>

              {/* Direct CTA */}
              <a
                href={product.affiliateUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#FF8C61] hover:bg-[#FF7A4A] text-white py-3 px-4 rounded-xl font-bold text-sm shadow-md flex items-center justify-center gap-2 transition-all"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>COMPRAR NO MERCADO LIVRE (R$ {product.price})</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}


