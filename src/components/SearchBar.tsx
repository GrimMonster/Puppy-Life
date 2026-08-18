import React from 'react';
import { Search, X } from 'lucide-react';

interface SearchBarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export function SearchBar({ searchQuery, onSearchChange }: SearchBarProps) {
  return (
    <div className="w-full mb-3">
      <div className="relative flex items-center">
        <Search className="absolute left-3.5 w-4 h-4 text-[#9C948B] pointer-events-none" />
        <input
          id="search-input"
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Buscar achados (ex: areia kadi, pazinha inox, ração quatree, fórmula natural)..."
          className="w-full bg-white pl-10 pr-10 py-3 rounded-2xl border border-[#E8D5C4] text-xs sm:text-sm text-[#2D2D2D] placeholder-[#9C948B] shadow-xs focus:outline-none focus:border-[#FF8C61] focus:ring-2 focus:ring-[#FF8C61]/20 transition-all"
        />
        {searchQuery && (
          <button
            id="btn-clear-search"
            onClick={() => onSearchChange('')}
            className="absolute right-3 p-1 rounded-full text-[#9C948B] hover:text-[#2D2D2D] hover:bg-[#F1ECE3] transition-colors"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        )}
      </div>
    </div>
  );
}

