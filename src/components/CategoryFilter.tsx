import { ProductCategory } from '../types';

interface CategoryFilterProps {
  selectedCategory: ProductCategory;
  onSelectCategory: (category: ProductCategory) => void;
  selectedPetType: 'all' | 'cat' | 'dog';
  onSelectPetType: (petType: 'all' | 'cat' | 'dog') => void;
}

const categories: { id: ProductCategory; label: string; icon: string }[] = [
  { id: 'all', label: 'Todos', icon: '✨' },
  { id: 'higiene', label: 'Higiene', icon: '🛁' },
  { id: 'alimentacao', label: 'Alimentação', icon: '🥣' },
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
    <div className="w-full px-4 mb-3 space-y-2.5">
      {/* Pet Audience Switch */}
      <div className="flex items-center justify-center p-1 bg-[#E8D5C4]/40 rounded-2xl border border-[#E8D5C4]">
        <button
          id="tab-pet-all"
          onClick={() => onSelectPetType('all')}
          className={`flex-1 py-1.5 px-2 rounded-xl text-xs font-bold transition-all duration-200 ${
            selectedPetType === 'all'
              ? 'bg-white text-[#2D2D2D] shadow-xs'
              : 'text-[#2D2D2D]/60 hover:text-[#2D2D2D]'
          }`}
        >
          🐾 Todos
        </button>
        <button
          id="tab-pet-dog"
          onClick={() => onSelectPetType('dog')}
          className={`flex-1 py-1.5 px-2 rounded-xl text-xs font-bold transition-all duration-200 ${
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
          className={`flex-1 py-1.5 px-2 rounded-xl text-xs font-bold transition-all duration-200 ${
            selectedPetType === 'cat'
              ? 'bg-white text-[#2D2D2D] shadow-xs'
              : 'text-[#2D2D2D]/60 hover:text-[#2D2D2D]'
          }`}
        >
          🐱 Gatos
        </button>
      </div>

      {/* Horizontal Pill Category Filters */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none no-scrollbar -mx-4 px-4">
        {categories.map((cat) => {
          const isActive = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              id={`cat-btn-${cat.id}`}
              onClick={() => onSelectCategory(cat.id)}
              className={`whitespace-nowrap flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-[11px] font-bold transition-all duration-200 border ${
                isActive
                  ? 'bg-[#2D2D2D] text-white border-[#2D2D2D] shadow-xs'
                  : 'bg-white text-[#2D2D2D]/75 border-[#E8D5C4] hover:bg-[#FAF7F2]'
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

