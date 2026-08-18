import React, { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { Header } from './components/Header';
import { HeroProduct } from './components/HeroProduct';
import { ProductCard } from './components/ProductCard';
import { CategoryFilter } from './components/CategoryFilter';
import { SearchBar } from './components/SearchBar';
import { TrustFooter } from './components/TrustFooter';
import { StickyHeader } from './components/StickyHeader';
import { ShareModal } from './components/ShareModal';
import { heroProduct, products } from './data/products';
import { ProductCategory } from './types';
import { Sparkles, SearchX } from 'lucide-react';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory>('all');
  const [selectedPetType, setSelectedPetType] = useState<'all' | 'cat' | 'dog'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);

  // Filter products based on search query, category, and pet type
  const filteredProducts = useMemo(() => {
    return products.filter((item) => {
      const matchesSearch =
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.description && item.description.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesCategory =
        selectedCategory === 'all' || item.category === selectedCategory;

      const matchesPetType =
        selectedPetType === 'all' ||
        item.petType === 'both' ||
        item.petType === selectedPetType;

      return matchesSearch && matchesCategory && matchesPetType;
    });
  }, [searchQuery, selectedCategory, selectedPetType]);

  // Check if hero product matches current filters
  const showHero = useMemo(() => {
    if (!heroProduct) return false;
    const matchesSearch =
      searchQuery === '' ||
      heroProduct.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      heroProduct.subtitle.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory =
      selectedCategory === 'all' || heroProduct.category === selectedCategory;

    const matchesPetType =
      selectedPetType === 'all' ||
      heroProduct.petType === 'both' ||
      heroProduct.petType === selectedPetType;

    return matchesSearch && matchesCategory && matchesPetType;
  }, [searchQuery, selectedCategory, selectedPetType]);

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#FDFBF7] font-sans selection:bg-[#FF8C61]/25 selection:text-[#FF8C61] relative p-0 sm:py-6">
      {/* Phone Mockup Canvas Wrapper from Vibrant Palette */}
      <main className="w-full max-w-[440px] min-h-screen sm:min-h-[820px] bg-white rounded-none sm:rounded-[40px] shadow-none sm:shadow-2xl sm:border-[8px] border-white overflow-hidden flex flex-col relative justify-between">
        
        {/* Top Sticky Header on scroll */}
        <StickyHeader onShareClick={() => setIsShareModalOpen(true)} />

        <div className="flex-1 flex flex-col">
          {/* Main Editorial Header */}
          <Header onShareClick={() => setIsShareModalOpen(true)} />

          {/* Search Bar */}
          <SearchBar 
            searchQuery={searchQuery} 
            onSearchChange={setSearchQuery} 
          />

          {/* Category & Pet Type Filters */}
          <CategoryFilter
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
            selectedPetType={selectedPetType}
            onSelectPetType={setSelectedPetType}
          />

          {/* Section Divider / Label */}
          <div className="px-4 mb-2.5 flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#FF8C61] fill-[#FF8C61]" />
              <h2 className="font-heading font-bold text-xs text-[#2D2D2D] uppercase tracking-wider">
                {searchQuery 
                  ? `Busca: "${searchQuery}"` 
                  : selectedCategory !== 'all' 
                  ? 'Produtos Selecionados' 
                  : 'Achados do TikTok'}
              </h2>
            </div>
            <span className="text-[11px] font-bold text-[#FF8C61] bg-[#FF8C61]/10 px-2 py-0.5 rounded-full">
              {filteredProducts.length + (showHero ? 1 : 0)} itens
            </span>
          </div>

          {/* Hero Product (Areia Kadi) */}
          {showHero && (
            <HeroProduct product={heroProduct} />
          )}

          {/* Products Grid (2 Columns as in Vibrant Palette) */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-2 gap-2.5 px-4 mb-4">
              {filteredProducts.map((product, index) => (
                <ProductCard 
                  key={product.id} 
                  product={product} 
                  index={index} 
                />
              ))}
            </div>
          ) : !showHero ? (
            /* Empty State */
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-10 px-4 text-center flex flex-col items-center justify-center space-y-2.5"
            >
              <div className="w-12 h-12 rounded-full bg-[#E8D5C4]/30 flex items-center justify-center text-[#8C847B]">
                <SearchX className="w-6 h-6 text-[#FF8C61]" />
              </div>
              <h3 className="font-heading font-bold text-sm text-[#2D2D2D]">
                Nenhum achado encontrado
              </h3>
              <p className="text-xs text-[#2D2D2D]/60 max-w-xs">
                Tente buscar por outro termo ou limpe os filtros para ver tudo.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                  setSelectedPetType('all');
                }}
                className="px-3.5 py-1.5 rounded-xl bg-[#2D2D2D] text-white text-xs font-bold hover:bg-black transition-colors"
              >
                Limpar Filtros
              </button>
            </motion.div>
          ) : null}

          {/* Floating Navigation Pill Indicator from Theme */}
          <div className="mt-auto flex justify-center py-3">
            <div className="bg-[#2D2D2D] px-6 py-2.5 rounded-full flex gap-6 items-center shadow-md">
              <div className="w-2 h-2 rounded-full bg-[#FF8C61] shadow-xs shadow-[#FF8C61]"></div>
              <div className="w-2 h-2 rounded-full bg-white/30"></div>
              <div className="w-2 h-2 rounded-full bg-white/30"></div>
            </div>
          </div>
        </div>

        {/* Trust, Security & Affiliate Footer */}
        <TrustFooter />

        {/* Share Modal */}
        <ShareModal
          isOpen={isShareModalOpen}
          onClose={() => setIsShareModalOpen(false)}
        />
      </main>

      {/* Outer Canvas Branding Watermark */}
      <div className="hidden sm:block absolute bottom-6 right-8 text-[#2D2D2D]/25 font-bold uppercase tracking-[0.3em] text-[10px] pointer-events-none">
        Puppy Life Hub © 2025
      </div>
    </div>
  );
}

