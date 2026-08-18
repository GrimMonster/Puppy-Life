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
    <div className="min-h-screen w-full bg-[#FDFBF7] font-sans selection:bg-[#FF8C61]/25 selection:text-[#FF8C61]">
      {/* Top Sticky Floating Header on scroll */}
      <StickyHeader onShareClick={() => setIsShareModalOpen(true)} />

      {/* Main Responsive Canvas Container */}
      <main className="w-full max-w-6xl mx-auto px-3.5 sm:px-6 lg:px-8 py-3 sm:py-6 flex flex-col justify-between min-h-screen">
        <div className="flex-1 flex flex-col">
          
          {/* Main Editorial Header */}
          <Header onShareClick={() => setIsShareModalOpen(true)} />

          {/* Search & Discovery Bar */}
          <div className="w-full">
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
          </div>

          {/* Section Divider / Label */}
          <div className="mb-3 sm:mb-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#FF8C61] fill-[#FF8C61]" />
              <h2 className="font-heading font-bold text-xs sm:text-sm text-[#2D2D2D] uppercase tracking-wider">
                {searchQuery 
                  ? `Busca: "${searchQuery}"` 
                  : selectedCategory !== 'all' 
                  ? 'Produtos Selecionados' 
                  : 'Achados em Destaque do TikTok'}
              </h2>
            </div>
            <span className="text-xs font-bold text-[#FF8C61] bg-[#FF8C61]/10 px-2.5 py-1 rounded-full border border-[#FF8C61]/20">
              {filteredProducts.length + (showHero ? 1 : 0)} itens encontrados
            </span>
          </div>

          {/* Hero Product (Areia Kadi) */}
          {showHero && (
            <HeroProduct product={heroProduct} />
          )}

          {/* Responsive Products Grid (2 cols mobile, 3 cols tablet, 4 cols PC) */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 mb-6">
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
              className="py-16 px-4 text-center flex flex-col items-center justify-center space-y-3 bg-white rounded-3xl border border-[#E8D5C4] my-4"
            >
              <div className="w-14 h-14 rounded-full bg-[#E8D5C4]/30 flex items-center justify-center text-[#8C847B]">
                <SearchX className="w-7 h-7 text-[#FF8C61]" />
              </div>
              <h3 className="font-heading font-bold text-base sm:text-lg text-[#2D2D2D]">
                Nenhum achado encontrado
              </h3>
              <p className="text-xs sm:text-sm text-[#2D2D2D]/60 max-w-sm">
                Tente buscar por outro termo ou limpe os filtros para ver toda a nossa curadoria de achados.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                  setSelectedPetType('all');
                }}
                className="px-5 py-2.5 rounded-xl bg-[#2D2D2D] hover:bg-[#FF8C61] text-white text-xs sm:text-sm font-bold transition-all shadow-sm active:scale-95"
              >
                Limpar Todos os Filtros
              </button>
            </motion.div>
          ) : null}
        </div>

        {/* Trust, Security & Affiliate Footer */}
        <TrustFooter />

        {/* Share Modal */}
        <ShareModal
          isOpen={isShareModalOpen}
          onClose={() => setIsShareModalOpen(false)}
        />
      </main>
    </div>
  );
}


