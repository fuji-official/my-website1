import React, { useState } from 'react';
import { Product } from '../types';
import { Star, ShoppingBag, Eye, Zap, Flame, Snowflake } from 'lucide-react';
import confetti from 'canvas-confetti';

interface ProductCardProps {
  product: Product;
  onSelectProduct: (product: Product) => void;
  onAddToCart: (product: Product, weight: number) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onSelectProduct,
  onAddToCart
}) => {
  const [selectedWeight, setSelectedWeight] = useState<number>(product.defaultWeight);

  // Price adjustment multiplier for different weights
  const getWeightMultiplier = (w: number) => {
    return w / product.defaultWeight;
  };

  const calculatedPrice = Math.round(product.price * getWeightMultiplier(selectedWeight));
  const calculatedOriginalPrice = product.originalPrice 
    ? Math.round(product.originalPrice * getWeightMultiplier(selectedWeight))
    : null;

  const handleAddToCartClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onAddToCart(product, selectedWeight);
    
    // Trigger festive celebratory mini confetti explosion
    try {
      confetti({
        particleCount: 25,
        spread: 40,
        origin: { y: 0.8 },
        colors: ['#38bdf8', '#c084fc', '#f43f5e', '#fbbf24']
      });
    } catch {
      // Ignore if confetti not supported
    }
  };

  return (
    <div
      onClick={() => onSelectProduct(product)}
      className="group relative flex flex-col justify-between rounded-3xl glass-ice-card border border-slate-800 hover:border-cyan-500/40 p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-cyan-500/10 cursor-pointer overflow-hidden"
    >
      {/* Top Badges (Bestseller / New / Discount) */}
      <div className="absolute top-3 right-3 left-3 z-10 flex items-center justify-between pointer-events-none">
        <div className="flex gap-1">
          {product.isBestseller && (
            <span className="px-2.5 py-1 rounded-full bg-amber-500/90 text-slate-950 font-black text-[10px] shadow-sm flex items-center gap-1">
              <Zap className="w-3 h-3" /> پرفروش
            </span>
          )}
          {product.isNew && (
            <span className="px-2.5 py-1 rounded-full bg-cyan-500/90 text-slate-950 font-black text-[10px] shadow-sm">
              ✨ جدید
            </span>
          )}
        </div>

        {/* Crunch Level Pill */}
        <span className="px-2.5 py-1 rounded-full bg-slate-900/90 backdrop-blur-md border border-cyan-500/30 text-cyan-300 text-[10px] font-bold flex items-center gap-1">
          <Snowflake className="w-3 h-3 text-cyan-400" />
          <span>ترُدی: {product.crunchLevel}/۵</span>
        </span>
      </div>

      {/* Jar Image Display */}
      <div className="relative aspect-square rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950/90 p-3 overflow-hidden flex items-center justify-center mb-4">
        <img
          src={product.image}
          alt={product.faName}
          referrerPolicy="no-referrer"
          className="max-h-full max-w-full object-contain group-hover:scale-110 transition-transform duration-500 drop-shadow-[0_15px_15px_rgba(0,0,0,0.6)]"
        />

        {/* Quick View Hover Overlay */}
        <div className="absolute inset-0 bg-slate-950/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <span className="px-4 py-2 rounded-xl bg-cyan-500 text-slate-950 font-black text-xs flex items-center gap-1.5 shadow-lg shadow-cyan-500/30">
            <Eye className="w-4 h-4" /> مشاهده جزئیات و جار
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className="space-y-3 flex-1 flex flex-col justify-between">
        <div>
          {/* Category & Mascot */}
          <div className="flex items-center justify-between text-[11px] text-slate-400 mb-1">
            <span className="text-cyan-400 font-medium">{product.categoryFaName}</span>
            <span className="flex items-center gap-1 font-semibold text-slate-300">
              ⭐ {product.rating} ({product.reviewsCount})
            </span>
          </div>

          {/* Product Name */}
          <h3 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors line-clamp-2">
            {product.faName}
          </h3>
          <p className="text-[11px] text-slate-400 line-clamp-1 mt-0.5">
            {product.name}
          </p>
        </div>

        {/* Weight Selector */}
        <div className="space-y-1.5 pt-1" onClick={(e) => e.stopPropagation()}>
          <div className="flex items-center justify-between text-[10px] text-slate-400 font-semibold">
            <span>انتخاب وزن جار:</span>
            <span className="text-cyan-300">{selectedWeight} گرم</span>
          </div>
          <div className="grid grid-cols-4 gap-1">
            {product.weights.map((w) => (
              <button
                key={w}
                type="button"
                onClick={() => setSelectedWeight(w)}
                className={`py-1 rounded-lg text-[10px] font-bold transition-all ${
                  selectedWeight === w
                    ? 'bg-cyan-500 text-slate-950 border border-cyan-300 shadow-sm'
                    : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'
                }`}
              >
                {w}g
              </button>
            ))}
          </div>
        </div>

        {/* Pricing & Add to Cart Footer */}
        <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between gap-2">
          <div className="text-right">
            {calculatedOriginalPrice && (
              <span className="block text-[10px] text-slate-500 line-through">
                {calculatedOriginalPrice.toLocaleString('fa-IR')} تومان
              </span>
            )}
            <div className="flex items-baseline gap-1">
              <span className="text-base font-extrabold text-white font-['Plus_Jakarta_Sans',sans-serif]">
                {calculatedPrice.toLocaleString('fa-IR')}
              </span>
              <span className="text-[10px] text-cyan-300 font-semibold">تومان</span>
            </div>
          </div>

          {/* Add to Cart CTA */}
          <button
            type="button"
            onClick={handleAddToCartClick}
            className="p-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold transition-all shadow-md shadow-cyan-500/20 hover:scale-105 active:scale-95 flex items-center gap-1 text-xs"
            title="افزودن به سبد خرید"
          >
            <ShoppingBag className="w-4 h-4 text-slate-950" />
            <span className="hidden sm:inline">خرید</span>
          </button>
        </div>
      </div>
    </div>
  );
};
