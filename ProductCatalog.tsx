import React, { useState, useMemo } from 'react';
import { Product } from '../types';
import { PRODUCTS, MASCOTS } from '../data/fujiData';
import { ProductCard } from './ProductCard';
import { Filter, Search, Sparkles, RefreshCw, SlidersHorizontal, Grid, Snowflake } from 'lucide-react';

interface ProductCatalogProps {
  onSelectProduct: (product: Product) => void;
  onAddToCart: (product: Product, weight: number) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export const ProductCatalog: React.FC<ProductCatalogProps> = ({
  onSelectProduct,
  onAddToCart,
  searchQuery,
  setSearchQuery
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedMascot, setSelectedMascot] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'bestseller' | 'price-asc' | 'price-desc' | 'rating'>('bestseller');
  const [minCrunchLevel, setMinCrunchLevel] = useState<number>(1);

  const categories = [
    { id: 'all', label: 'همه محصولات' },
    { id: 'ice-cream', label: 'بستنی خشک پریمیوم' },
    { id: 'fruits', label: 'میوه‌های فریزدرای' },
    { id: 'snacks', label: 'تنقلات ترد' },
    { id: 'powders', label: 'پودرهای ارگانیک' }
  ];

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      // Category Filter
      if (selectedCategory !== 'all' && product.category !== selectedCategory) return false;

      // Mascot Filter
      if (selectedMascot !== 'all' && product.mascotId !== selectedMascot) return false;

      // Crunch Level Filter
      if (product.crunchLevel < minCrunchLevel) return false;

      // Search Filter
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        const matchName = product.faName.toLowerCase().includes(query) || product.name.toLowerCase().includes(query);
        const matchDesc = product.faDescription.toLowerCase().includes(query);
        const matchTags = product.tags.some(t => t.toLowerCase().includes(query));
        if (!matchName && !matchDesc && !matchTags) return false;
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      // bestseller default
      return (b.isBestseller ? 1 : 0) - (a.isBestseller ? 1 : 0);
    });
  }, [selectedCategory, selectedMascot, minCrunchLevel, searchQuery, sortBy]);

  const resetFilters = () => {
    setSelectedCategory('all');
    setSelectedMascot('all');
    setMinCrunchLevel(1);
    setSearchQuery('');
    setSortBy('bestseller');
  };

  return (
    <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Catalog Header */}
      <div className="text-center space-y-3 mb-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 text-xs font-bold">
          <Snowflake className="w-4 h-4 text-cyan-400" />
          <span>ویترین کامل محصولات فریزدرای فوجی</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-black text-white">
          کاتالوگ تنقلات <span className="text-cyan-400">ترد و پریمیوم</span>
        </h2>
        <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto">
          انواع بستنی‌های خشک، میوه‌های دست‌چین و پودرهای ارگانیک با ماندگاری ۱۸ ماهه در جار کریستالی وکیوم.
        </p>
      </div>

      {/* Filters Toolbar */}
      <div className="bg-slate-900/80 backdrop-blur-xl border border-slate-800 rounded-3xl p-4 sm:p-6 mb-8 space-y-4 shadow-xl">
        
        {/* Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-2xl text-xs font-bold whitespace-nowrap transition-all ${
                selectedCategory === cat.id
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 shadow-md shadow-cyan-500/20'
                  : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700/80 border border-slate-700/60'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Mascot & Sort Filter Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-2 border-t border-slate-800/80">
          
          {/* Mascot Filter Dropdown */}
          <div className="space-y-1">
            <label className="text-[11px] text-slate-400 font-semibold block">فیلتر ماسکوت برند:</label>
            <select
              value={selectedMascot}
              onChange={(e) => setSelectedMascot(e.target.value)}
              className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-slate-100 focus:outline-none focus:border-cyan-400"
            >
              <option value="all">همه ماسکوت‌ها 🌟</option>
              {MASCOTS.map((m) => (
                <option key={m.id} value={m.id}>
                  {m.avatarIcon} {m.faName} ({m.faTitle})
                </option>
              ))}
            </select>
          </div>

          {/* Sort By Dropdown */}
          <div className="space-y-1">
            <label className="text-[11px] text-slate-400 font-semibold block">مرتب‌سازی بر اساس:</label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-slate-100 focus:outline-none focus:border-cyan-400"
            >
              <option value="bestseller">پرفروش‌ترین‌ها ⭐</option>
              <option value="rating">بالاترین امتیاز رضایت 🌟</option>
              <option value="price-asc">ارزان‌ترین به گران‌ترین 📈</option>
              <option value="price-desc">گران‌ترین به ارزان‌ترین 📉</option>
            </select>
          </div>

          {/* Minimum Crunch Level */}
          <div className="space-y-1">
            <label className="text-[11px] text-slate-400 font-semibold block">حداقل میزان ترُدی (Crunchiness):</label>
            <div className="flex items-center gap-1 bg-slate-950 border border-slate-700 rounded-xl px-3 py-1.5">
              {[1, 2, 3, 4, 5].map((lvl) => (
                <button
                  key={lvl}
                  onClick={() => setMinCrunchLevel(lvl)}
                  className={`flex-1 py-1 rounded-lg text-[10px] font-bold ${
                    minCrunchLevel === lvl
                      ? 'bg-cyan-500 text-slate-950'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {lvl}❄️
                </button>
              ))}
            </div>
          </div>

          {/* Reset Filters CTA */}
          <div className="flex items-end">
            <button
              onClick={resetFilters}
              className="w-full py-2 px-3 bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 transition-all"
            >
              <RefreshCw className="w-3.5 h-3.5 text-cyan-400" />
              <span>بازنشانی فیلترها</span>
            </button>
          </div>
        </div>

      </div>

      {/* Active Search / Filters Feedback Strip */}
      {(searchQuery || selectedCategory !== 'all' || selectedMascot !== 'all' || minCrunchLevel > 1) && (
        <div className="mb-6 flex items-center justify-between bg-cyan-950/40 border border-cyan-500/30 rounded-2xl px-4 py-2.5 text-xs text-cyan-200">
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-cyan-400" />
            <span>
              نمایش {filteredProducts.length} محصول بر اساس فیلترهای فعال
              {searchQuery && ` (عبارت: "${searchQuery}")`}
            </span>
          </div>
          <button onClick={resetFilters} className="text-cyan-400 underline hover:text-cyan-300 font-bold">
            حذف فیلترها
          </button>
        </div>
      )}

      {/* Products Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onSelectProduct={onSelectProduct}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="text-center py-16 bg-slate-900/60 border border-slate-800 rounded-3xl p-8 space-y-4">
          <div className="w-16 h-16 rounded-full bg-slate-800 flex items-center justify-center text-3xl mx-auto text-cyan-400">
            🔍
          </div>
          <h3 className="text-lg font-bold text-white">محصولی با این مشخصات یافت نشد!</h3>
          <p className="text-xs text-slate-400 max-w-sm mx-auto">
            لطفاً عبارت جستجو یا فیلتر دسته‌بندی را تغییر دهید تا محصولات دیگری به شما نمایش داده شوند.
          </p>
          <button
            onClick={resetFilters}
            className="px-5 py-2.5 rounded-xl bg-cyan-500 text-slate-950 font-bold text-xs"
          >
            بازنشانی کامل فیلترها
          </button>
        </div>
      )}

    </section>
  );
};
