import { ProductCategory } from '../types';

interface CategoryFilterProps {
  selectedCategory: ProductCategory;
  onSelectCategory: (category: ProductCategory) => void;
  selectedPetType: 'all' | 'cat' | 'dog';
  onSelectPetType: (petType: 'all' | 'cat' | 'dog') => void;
}

const categories: { id: ProductCategory; label: string; icon: string }[] = [
  { id: 'all', label: 'Todos os Achados', icon: '✨' },
  { id: 'higiene', label: 'Higiene & Areia', icon: '🛁' },
  { id: 'alimentacao', label: 'Alimentação & Bebedouros', icon: '🥣' },
  { id: 'conforto', label: 'Camas & Conforto', icon: '☁️' },
  { id: 'brinquedos', label: 'Brinquedos', icon: '🤖' },
  { id: 'passeio', label: 'Passeio', icon: '🦮' },
];

export function CategoryFilter({
  selectedCategory,
  onSelectCategory,
  selectedPetType,
  onSelectPetType,
}: CategoryFilterProps) {
  return (
    <div className="w-full mb-4 space-y-3">
      {/* Pet Audience Switch (Mobile & Desktop) */}
      <div className="flex items-center justify-center p-1 bg-[#E8D5C4]/40 rounded-2xl border border-[#E8D5C4] max-w-md mx-auto sm:max-w-none">
        <button
          id="tab-pet-all"
          onClick={() => onSelectPetType('all')}
          className={`flex-1 py-2 px-3 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 ${
            selectedPetType === 'all'
              ? 'bg-white text-[#2D2D2D] shadow-xs'
              : 'text-[#2D2D2D]/60 hover:text-[#2D2D2D]'
          }`}
        >
          🐾 Todos os Pets
        </button>
        <button
          id="tab-pet-dog"
          onClick={() => onSelectPetType('dog')}
          className={`flex-1 py-2 px-3 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 ${
            selectedPetType === 'dog'
              ? 'bg-white text-[#2D2D2D] shadow-xs'
              : 'text-[#2D2D2D]/60 hover:text-[#2D2D2D]'
          }`}
        >
          🐶 Cães
        </button>
        <button
          id="tab-pet-cat"
          onClick={() => onSelectPetType('cat')}
          className={`flex-1 py-2 px-3 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 ${
            selectedPetType === 'cat'
              ? 'bg-white text-[#2D2D2D] shadow-xs'
              : 'text-[#2D2D2D]/60 hover:text-[#2D2D2D]'
          }`}
        >
          🐱 Gatos
        </button>
      </div>

      {/* Pill Category Filters: Horizontal Scroll on Mobile, Flex Wrap on Desktop */}
      <div className="flex items-center sm:flex-wrap gap-2 overflow-x-auto pb-1 sm:pb-0 scrollbar-none no-scrollbar">
        {categories.map((cat) => {
          const isActive = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              id={`cat-btn-${cat.id}`}
              onClick={() => onSelectCategory(cat.id)}
              className={`whitespace-nowrap flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 border ${
                isActive
                  ? 'bg-[#2D2D2D] text-white border-[#2D2D2D] shadow-sm'
                  : 'bg-white text-[#2D2D2D]/75 border-[#E8D5C4] hover:bg-[#FAF7F2] hover:border-[#FF8C61]/50'
              }`}
            >
              <span>{cat.icon}</span>
              <span>{cat.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}


