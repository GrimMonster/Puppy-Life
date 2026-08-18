import { useState } from 'react';
import { motion } from 'motion/react';
import { Share2, Sparkles, Heart } from 'lucide-react';

interface HeaderProps {
  onShareClick: () => void;
}

export function Header({ onShareClick }: HeaderProps) {
  const [isFollowing, setIsFollowing] = useState(false);

  return (
    <header className="relative w-full p-6 pb-3 text-center bg-white/80 backdrop-blur-md sticky top-0 z-20 border-b border-[#E8D5C4]/40">
      {/* Avatar Container with Vibrant Palette gradient ring */}
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4, type: 'spring', stiffness: 220 }}
        className="relative w-20 h-20 mx-auto mb-3 group"
      >
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#FF8C61] to-[#E8D5C4] p-[2px] shadow-sm">
          <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden p-[2px]">
            <img 
              src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?q=80&w=400&auto=format&fit=crop" 
              alt="Puppy Life Avatar" 
              className="w-full h-full object-cover rounded-full"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
        
        {/* Floating Premium Badge from Vibrant Palette */}
        <div 
          className="absolute bottom-0 right-0 bg-[#FF8C61] text-white text-[10px] px-2 py-0.5 rounded-full font-bold border-2 border-white uppercase tracking-tighter shadow-xs"
        >
          PREMIUM
        </div>
      </motion.div>

      {/* Profile Name & Subtitle */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="space-y-0.5"
      >
        <h1 className="font-heading text-2xl font-bold text-[#2D2D2D] tracking-tight flex items-center justify-center gap-1.5">
          <span>Puppy Life</span>
          <Sparkles className="w-4 h-4 text-[#FF8C61] fill-[#FF8C61]" />
        </h1>
        <p className="text-[#2D2D2D]/70 text-sm font-medium">
          🐾 Achados que seu pet vai amar ❤️
        </p>
      </motion.div>

      {/* Quick Action Badges */}
      <motion.div 
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="mt-3 flex items-center justify-center gap-2"
      >
        <button
          id="btn-follow-toggle"
          onClick={() => setIsFollowing(!isFollowing)}
          className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all duration-200 flex items-center gap-1.5 shadow-xs active:scale-95 ${
            isFollowing 
              ? 'bg-[#E8D5C4] text-[#4A3D34]' 
              : 'bg-[#2D2D2D] text-white hover:bg-black'
          }`}
        >
          <Heart className={`w-3.5 h-3.5 ${isFollowing ? 'fill-[#FF8C61] text-[#FF8C61]' : ''}`} />
          <span>{isFollowing ? 'Seguindo' : 'Seguir'}</span>
        </button>

        <button
          id="btn-share-profile"
          onClick={onShareClick}
          className="px-3.5 py-1.5 rounded-full bg-white border border-[#E8D5C4] text-xs font-semibold text-[#2D2D2D]/80 hover:bg-[#FAF7F2] transition-colors flex items-center gap-1.5 shadow-xs active:scale-95"
          title="Compartilhar Hub"
        >
          <Share2 className="w-3.5 h-3.5 text-[#FF8C61]" />
          <span>Compartilhar</span>
        </button>
      </motion.div>
    </header>
  );
}

