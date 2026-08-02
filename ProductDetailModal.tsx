import React, { useState } from 'react';
import { Product } from '../types';
import { MASCOTS } from '../data/fujiData';
import { X, Star, ShoppingBag, Snowflake, ShieldCheck, Flame, Zap, CheckCircle2, Award, Heart } from 'lucide-react';
import confetti from 'canvas-confetti';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, weight: number, quantity: number) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onAddToCart
}) => {
  if (!product) return null;

  const [selectedWeight, setSelectedWeight] = useState<number>(product.defaultWeight);
  const [quantity, setQuantity] = useState<number>(1);
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);
  const [activeTab, setActiveTab] = useState<'overview' | 'nutrition' | 'ingredients' | 'reviews'>('overview');

  const mascot = MASCOTS.find((m) => m.id === product.mascotId) || MASCOTS[0];

  const getWeightMultiplier = (w: number) => w / product.defaultWeight;
  const calculatedPrice = Math.round(product.price * getWeightMultiplier(selectedWeight));
  const calculatedOriginalPrice = product.originalPrice 
    ? Math.round(product.originalPrice * getWeightMultiplier(selectedWeight))
    : null;

  const galleryImages = [product.image, ...(product.secondaryImages || [])];

  const handleAddToCart = () => {
    onAddToCart(product, selectedWeight, quantity);
    try {
      confetti({
        particleCount: 40,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#38bdf8', '#c084fc', '#f43f5e', '#fbbf24']
      });
    } catch {
      // ignore
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-xl animate-in fade-in duration-200 overflow-y-auto">
      
      {/* Modal Container */}
      <div className="relative w-full max-w-4xl bg-[#0d162e] border border-cyan-500/30 rounded-3xl shadow-2xl overflow-hidden text-right my-8 max-h-[90vh] flex flex-col">
        
        {/* Modal Top Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-900/60 sticky top-0 z-20 backdrop-blur-md">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping"></span>
            <span className="text-xs font-bold text-cyan-300">صفحه اختصاصی محصول (PDP) • {product.categoryFaName}</span>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body Scroll Area */}
        <div className="p-6 overflow-y-auto space-y-8 flex-1">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            
            {/* Left/Main Column: Product Jar Gallery */}
            <div className="md:col-span-5 space-y-4">
              <div className="relative aspect-square rounded-3xl bg-gradient-to-b from-slate-900 via-[#0b1329] to-slate-950 border border-slate-800 p-6 flex items-center justify-center overflow-hidden group shadow-inner">
                <img
                  src={galleryImages[activeImageIndex] || product.image}
                  alt={product.faName}
                  referrerPolicy="no-referrer"
                  className="max-h-full max-w-full object-contain drop-shadow-[0_20px_25px_rgba(0,0,0,0.8)] transition-all duration-500 group-hover:scale-105"
                />

                {/* Sublimation Badge Overlay */}
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-cyan-950/90 border border-cyan-400/40 text-[10px] font-bold text-cyan-300 flex items-center gap-1.5 shadow-lg">
                  <Snowflake className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{product.sublimationTemp}</span>
                </div>
              </div>

              {/* Gallery Thumbnails */}
              {galleryImages.length > 1 && (
                <div className="flex gap-2 justify-center">
                  {galleryImages.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImageIndex(idx)}
                      className={`w-14 h-14 rounded-xl border p-1 bg-slate-900 overflow-hidden transition-all ${
                        activeImageIndex === idx
                          ? 'border-cyan-400 ring-2 ring-cyan-400/30'
                          : 'border-slate-800 opacity-60 hover:opacity-100'
                      }`}
                    >
                      <img src={img} alt="thumb" className="w-full h-full object-contain" referrerPolicy="no-referrer" />
                    </button>
                  ))}
                </div>
              )}

              {/* Associated Mascot Box */}
              <div className={`p-4 rounded-2xl bg-gradient-to-r ${mascot.bgGradient} border border-slate-700/80 flex items-center gap-3.5 shadow-lg`}>
                <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-slate-700 flex items-center justify-center text-2xl shadow-sm shrink-0">
                  {mascot.avatarIcon}
                </div>
                <div className="space-y-0.5">
                  <span className="text-[10px] text-cyan-300 font-bold block">ماسکوت همراه این محصول:</span>
                  <h4 className="text-xs font-extrabold text-white">{mascot.faName} ({mascot.name})</h4>
                  <p className="text-[11px] text-slate-300 italic">"{mascot.faVoiceQuote}"</p>
                </div>
              </div>
            </div>

            {/* Right Column: PDP Title, Specs, Options */}
            <div className="md:col-span-7 space-y-6">
              
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 text-[11px] font-bold border border-cyan-500/30">
                    {product.categoryFaName}
                  </span>
                  <span className="flex items-center gap-1 text-xs font-bold text-amber-400 bg-amber-500/10 px-2.5 py-0.5 rounded-full border border-amber-500/30">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" /> {product.rating} ({product.reviewsCount} نظر مشتریان)
                  </span>
                </div>

                <h1 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                  {product.faName}
                </h1>
                <p className="text-xs text-slate-400 mt-1 font-['Plus_Jakarta_Sans',sans-serif]">
                  {product.name}
                </p>
              </div>

              {/* Description Paragraph */}
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed bg-slate-900/50 p-4 rounded-2xl border border-slate-800">
                {product.faDescription}
              </p>

              {/* Tags Cloud */}
              <div className="flex flex-wrap gap-1.5">
                {product.tags.map((t) => (
                  <span key={t} className="px-2.5 py-1 rounded-xl bg-slate-900 border border-slate-800 text-[11px] text-slate-300 font-semibold">
                    ✓ {t}
                  </span>
                ))}
              </div>

              {/* Weight Selector */}
              <div className="space-y-2 pt-2">
                <label className="text-xs font-bold text-slate-200 block">انتخاب وزن بسته (جار پلمپ نیتروژن):</label>
                <div className="grid grid-cols-4 gap-2">
                  {product.weights.map((w) => (
                    <button
                      key={w}
                      type="button"
                      onClick={() => setSelectedWeight(w)}
                      className={`py-2.5 rounded-xl text-xs font-bold transition-all ${
                        selectedWeight === w
                          ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 border border-cyan-300 shadow-md shadow-cyan-500/20 scale-[1.02]'
                          : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'
                      }`}
                    >
                      {w} گرم
                    </button>
                  ))}
                </div>
              </div>

              {/* Pricing & Quantity Selector */}
              <div className="p-4 rounded-2xl bg-slate-900/90 border border-cyan-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
                
                {/* Price Display */}
                <div>
                  <span className="text-[11px] text-slate-400 block font-semibold">قیمت با جار {selectedWeight} گرمی:</span>
                  <div className="flex items-baseline gap-1.5">
                    {calculatedOriginalPrice && (
                      <span className="text-xs text-slate-500 line-through">
                        {calculatedOriginalPrice.toLocaleString('fa-IR')}
                      </span>
                    )}
                    <span className="text-2xl font-black text-white font-['Plus_Jakarta_Sans',sans-serif]">
                      {(calculatedPrice * quantity).toLocaleString('fa-IR')}
                    </span>
                    <span className="text-xs text-cyan-300 font-bold">تومان</span>
                  </div>
                </div>

                {/* Quantity Controls */}
                <div className="flex items-center gap-3">
                  <div className="flex items-center bg-slate-950 border border-slate-700 rounded-xl p-1">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="w-8 h-8 rounded-lg bg-slate-800 text-slate-200 hover:bg-slate-700 font-black flex items-center justify-center text-sm"
                    >
                      -
                    </button>
                    <span className="w-10 text-center text-sm font-bold text-white">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="w-8 h-8 rounded-lg bg-slate-800 text-slate-200 hover:bg-slate-700 font-black flex items-center justify-center text-sm"
                    >
                      +
                    </button>
                  </div>

                  {/* Add to Cart Button */}
                  <button
                    onClick={handleAddToCart}
                    className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-black text-xs shadow-lg shadow-cyan-500/30 flex items-center gap-2 hover:scale-105 transition-all"
                  >
                    <ShoppingBag className="w-4 h-4 text-slate-950" />
                    <span>افزودن به سبد خرید</span>
                  </button>
                </div>

              </div>

            </div>

          </div>

          {/* Bottom Tabs: Nutrition, Ingredients, Science */}
          <div className="pt-6 border-t border-slate-800">
            <div className="flex gap-2 border-b border-slate-800 pb-3 mb-4 overflow-x-auto">
              <button
                onClick={() => setActiveTab('overview')}
                className={`px-4 py-2 rounded-xl text-xs font-bold ${
                  activeTab === 'overview' ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40' : 'text-slate-400 hover:text-white'
                }`}
              >
                خلاصه مشخصات
              </button>
              <button
                onClick={() => setActiveTab('nutrition')}
                className={`px-4 py-2 rounded-xl text-xs font-bold ${
                  activeTab === 'nutrition' ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40' : 'text-slate-400 hover:text-white'
                }`}
              >
                جدول ارزش غذایی (در ۱۰۰ گرم)
              </button>
              <button
                onClick={() => setActiveTab('ingredients')}
                className={`px-4 py-2 rounded-xl text-xs font-bold ${
                  activeTab === 'ingredients' ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40' : 'text-slate-400 hover:text-white'
                }`}
              >
                ترکیبات و ماندگاری
              </button>
            </div>

            {/* Tab: Overview */}
            {activeTab === 'overview' && (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-1">
                  <span className="text-cyan-400 font-bold block">تکنولوژی انجماد:</span>
                  <p className="text-slate-300">{product.sublimationTemp}</p>
                </div>
                <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-1">
                  <span className="text-cyan-400 font-bold block">ماندگاری در کمد:</span>
                  <p className="text-slate-300">{product.shelfLife}</p>
                </div>
                <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-1">
                  <span className="text-cyan-400 font-bold block">شاخص ترُدی (Crunch):</span>
                  <p className="text-slate-300">{product.crunchLevel} از ۵ (خیلی ترد)</p>
                </div>
              </div>
            )}

            {/* Tab: Nutrition */}
            {activeTab === 'nutrition' && (
              <div className="bg-slate-900/80 rounded-2xl p-4 border border-slate-800 overflow-x-auto">
                <table className="w-full text-xs text-right text-slate-300">
                  <thead className="bg-slate-950 text-cyan-300 font-bold border-b border-slate-800">
                    <tr>
                      <th className="p-2.5">ماده مغذی</th>
                      <th className="p-2.5">مقدار در ۱۰۰ گرم</th>
                      <th className="p-2.5">درصد ارزش روزانه (DV)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800">
                    <tr>
                      <td className="p-2.5 font-bold">انرژی (کالری)</td>
                      <td className="p-2.5 font-['Plus_Jakarta_Sans',sans-serif]">{product.nutrition.calories} kcal</td>
                      <td className="p-2.5">۱۹٪</td>
                    </tr>
                    <tr>
                      <td className="p-2.5 font-bold">پروتئین</td>
                      <td className="p-2.5 font-['Plus_Jakarta_Sans',sans-serif]">{product.nutrition.protein} g</td>
                      <td className="p-2.5">۱۳٪</td>
                    </tr>
                    <tr>
                      <td className="p-2.5 font-bold">کربوهیدرات</td>
                      <td className="p-2.5 font-['Plus_Jakarta_Sans',sans-serif]">{product.nutrition.carbs} g</td>
                      <td className="p-2.5">۲۲٪</td>
                    </tr>
                    <tr>
                      <td className="p-2.5 font-bold">فیبر رژیمی طبیعی</td>
                      <td className="p-2.5 font-['Plus_Jakarta_Sans',sans-serif]">{product.nutrition.fiber} g</td>
                      <td className="p-2.5">۵۰٪ (عالی)</td>
                    </tr>
                    <tr>
                      <td className="p-2.5 font-bold">قند طبیعی میوه (افزوده = ۰)</td>
                      <td className="p-2.5 font-['Plus_Jakarta_Sans',sans-serif]">{product.nutrition.sugar} g</td>
                      <td className="p-2.5">طبیعی</td>
                    </tr>
                    <tr>
                      <td className="p-2.5 font-bold">ویتامین C حفظ‌شده</td>
                      <td className="p-2.5 font-['Plus_Jakarta_Sans',sans-serif]">{product.nutrition.vitaminC}% DV</td>
                      <td className="p-2.5 font-bold text-cyan-300">{product.nutrition.vitaminC}%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}

            {/* Tab: Ingredients */}
            {activeTab === 'ingredients' && (
              <div className="space-y-4 text-xs text-slate-300 bg-slate-900/60 p-4 rounded-2xl border border-slate-800">
                <div>
                  <h4 className="font-bold text-cyan-300 mb-1">ترکیبات تشکیل‌دهنده:</h4>
                  <ul className="list-disc list-inside space-y-1">
                    {product.faIngredients.map((ing, i) => (
                      <li key={i}>{ing}</li>
                    ))}
                  </ul>
                </div>
                <div className="pt-2 border-t border-slate-800">
                  <h4 className="font-bold text-cyan-300 mb-1">شرایط نگهداری:</h4>
                  <p>در جای خشک و خنک، دور از تابش مستقیم نور آفتاب نگهداری شود. پس از هر بار مصرف، درب جار را محکم ببندید تا رطوبت هوا جذب نشود.</p>
                </div>
              </div>
            )}
          </div>

        </div>

      </div>

    </div>
  );
};
