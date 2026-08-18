import { useState } from 'react';
import { motion } from 'motion/react';
import { Share2, Sparkles, Heart, CheckCircle2 } from 'lucide-react';

interface HeaderProps {
  onShareClick: () => void;
}

export function Header({ onShareClick }: HeaderProps) {
  const [isFollowing, setIsFollowing] = useState(false);

  return (
    <header className="relative w-full bg-white/90 backdrop-blur-md rounded-3xl border border-[#E8D5C4] shadow-sm p-4 sm:p-6 mb-4 sm:mb-6">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        
        {/* Profile Details (Avatar + Info) */}
        <div className="flex flex-col sm:flex-row items-center text-center sm:text-left gap-3.5 sm:gap-4">
          {/* Avatar Container with Gradient Ring */}
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, type: 'spring', stiffness: 220 }}
            className="relative w-18 h-18 sm:w-20 sm:h-20 shrink-0 group"
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#FF8C61] via-[#E8D5C4] to-[#FF8C61] p-[2px] shadow-sm">
              <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden p-[2px]">
                <img 
                  src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?q=80&w=400&auto=format&fit=crop" 
                  alt="Puppy Life Avatar" 
                  className="w-full h-full object-cover rounded-full"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            
            {/* Premium Badge */}
            <div 
              className="absolute -bottom-1 right-0 bg-[#FF8C61] text-white text-[9px] px-1.5 py-0.5 rounded-full font-bold border-2 border-white uppercase tracking-tighter shadow-xs"
            >
              PREMIUM
            </div>
          </motion.div>

          {/* Profile Name, Verified & Bio */}
          <div className="space-y-1">
            <div className="flex items-center justify-center sm:justify-start gap-1.5">
              <h1 className="font-heading text-xl sm:text-2xl font-bold text-[#2D2D2D] tracking-tight">
                Puppy Life
              </h1>
              <CheckCircle2 className="w-4 h-4 text-[#FF8C61] fill-[#FF8C61]/20" />
              <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-semibold text-[#6E4F3A] bg-[#E8D5C4]/40 px-2.5 py-0.5 rounded-full border border-[#E8D5C4]">
                <Sparkles className="w-3 h-3 text-[#FF8C61]" />
                Curadoria Oficial
              </span>
            </div>

            <p className="text-[#2D2D2D]/75 text-xs sm:text-sm font-medium">
              🐾 Achados testados e aprovados que seu pet vai amar ❤️
            </p>

            <div className="flex items-center justify-center sm:justify-start gap-2 text-[11px] text-[#7A746E] font-medium pt-0.5">
              <span className="text-[#FF8C61] font-bold">+145k no TikTok</span>
              <span>•</span>
              <span>⭐ 4.9 Avaliações</span>
              <span>•</span>
              <span className="text-emerald-700 font-semibold">100% Links Oficiais</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            id="btn-follow-toggle"
            onClick={() => setIsFollowing(!isFollowing)}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 flex items-center gap-1.5 shadow-xs active:scale-95 ${
              isFollowing 
                ? 'bg-[#E8D5C4] text-[#4A3D34]' 
                : 'bg-[#2D2D2D] text-white hover:bg-black'
            }`}
          >
            <Heart className={`w-3.5 h-3.5 ${isFollowing ? 'fill-[#FF8C61] text-[#FF8C61]' : ''}`} />
            <span>{isFollowing ? 'Seguindo' : 'Seguir Perfil'}</span>
          </button>

          <button
            id="btn-share-profile"
            onClick={onShareClick}
            className="px-4 py-2 rounded-xl bg-white border border-[#E8D5C4] text-xs font-semibold text-[#2D2D2D]/80 hover:bg-[#FAF7F2] hover:border-[#FF8C61]/50 transition-colors flex items-center gap-1.5 shadow-xs active:scale-95"
            title="Compartilhar Hub"
          >
            <Share2 className="w-3.5 h-3.5 text-[#FF8C61]" />
            <span>Compartilhar</span>
          </button>
        </div>
      </div>
    </header>
  );
}


