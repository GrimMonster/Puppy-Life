import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Copy, Check, Share2, Send, MessageCircle } from 'lucide-react';

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ShareModal({ isOpen, onClose }: ShareModalProps) {
  const [copied, setCopied] = useState(false);
  const currentUrl = typeof window !== 'undefined' ? window.location.href : 'https://puppylife.com.br';

  const handleCopy = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(currentUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent(`🐾 Olha esses achados incríveis para pet na Puppy Life: ${currentUrl}`);
    window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 backdrop-blur-xs"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 15 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 15 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-sm bg-white rounded-3xl p-6 border border-[#E8D5C4] shadow-xl z-10 space-y-4"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-2xl bg-[#FF8C61]/15 text-[#FF8C61]">
                  <Share2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-base text-[#2D2D2D]">
                    Compartilhar Hub
                  </h3>
                  <p className="text-xs text-[#7A746E]">Envie os achados para amigos tutores</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-1.5 rounded-full text-[#8C847B] hover:bg-[#F1ECE3] hover:text-[#2D2D2D] transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Quick Share Buttons */}
            <div className="grid grid-cols-2 gap-2.5 pt-1">
              <button
                onClick={handleWhatsApp}
                className="flex items-center justify-center gap-2 p-3 rounded-2xl bg-[#25D366]/10 text-[#128C7E] font-bold text-xs hover:bg-[#25D366]/20 transition-all border border-[#25D366]/20 active:scale-95"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </button>

              <button
                onClick={handleCopy}
                className="flex items-center justify-center gap-2 p-3 rounded-2xl bg-[#FF8C61]/10 text-[#FF8C61] font-bold text-xs hover:bg-[#FF8C61]/20 transition-all border border-[#FF8C61]/20 active:scale-95"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? 'Copiado!' : 'Copiar Link'}</span>
              </button>
            </div>

            {/* URL Box */}
            <div className="flex items-center gap-2 p-2.5 bg-[#FAF7F2] rounded-2xl border border-[#E8D5C4]/70">
              <input
                type="text"
                readOnly
                value={currentUrl}
                className="w-full bg-transparent text-xs text-[#5A544D] truncate outline-none select-all"
              />
              <button
                onClick={handleCopy}
                className="px-3 py-1.5 rounded-xl bg-[#2D2D2D] text-white text-[11px] font-bold shrink-0 hover:bg-black transition-colors"
              >
                {copied ? 'Pronto' : 'Copiar'}
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
