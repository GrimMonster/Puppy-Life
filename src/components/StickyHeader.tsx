import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Share2, Sparkles } from 'lucide-react';

interface StickyHeaderProps {
  onShareClick: () => void;
}

export function StickyHeader({ onShareClick }: StickyHeaderProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 140) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: -60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -60, opacity: 0 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 py-2 pointer-events-none"
        >
          <div className="w-full max-w-5xl bg-white/95 backdrop-blur-md px-4 sm:px-6 py-2.5 rounded-full border border-[#E8D5C4] shadow-md shadow-[#2D2D2D]/5 flex items-center justify-between pointer-events-auto">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full p-[1.5px] bg-gradient-to-tr from-[#FF8C61] to-[#E8D5C4] shrink-0">
                <img
                  src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?q=80&w=200&auto=format&fit=crop"
                  alt="Avatar"
                  className="w-full h-full object-cover rounded-full"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <h3 className="font-heading text-sm sm:text-base font-bold text-[#2D2D2D] leading-none flex items-center gap-1.5">
                  <span>Puppy Life</span>
                  <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#FF8C61] fill-[#FF8C61]" />
                </h3>
                <p className="text-[10px] sm:text-xs text-[#7A746E]">Achados com Descontos Exclusivos</p>
              </div>
            </div>

            <button
              id="btn-sticky-share"
              onClick={onShareClick}
              className="px-3.5 py-1.5 rounded-full bg-[#FF8C61] hover:bg-[#FF7A4A] text-white text-xs font-bold transition-all shadow-sm flex items-center gap-1.5 active:scale-95"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>Compartilhar</span>
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

