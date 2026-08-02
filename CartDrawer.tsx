import React, { useState } from 'react';
import { CartItem } from '../types';
import { ShoppingBag, X, Trash2, Plus, Minus, ArrowRight, ShieldCheck, Sparkles, Tag } from 'lucide-react';
import confetti from 'canvas-confetti';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (productId: string, weight: number, delta: number) => void;
  onRemoveItem: (productId: string, weight: number) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart
}) => {
  if (!isOpen) return null;

  const [couponCode, setCouponCode] = useState<string>('');
  const [discountPercent, setDiscountPercent] = useState<number>(0);
  const [couponApplied, setCouponApplied] = useState<boolean>(false);
  const [orderPlaced, setOrderPlaced] = useState<boolean>(false);

  const subtotal = cartItems.reduce((acc, item) => acc + item.pricePerUnit * item.quantity, 0);
  const discountAmount = Math.round((subtotal * discountPercent) / 100);
  const freeShippingThreshold = 600000;
  const shippingFee = subtotal >= freeShippingThreshold || subtotal === 0 ? 0 : 45000;
  const totalAmount = subtotal - discountAmount + shippingFee;

  const handleApplyCoupon = () => {
    if (couponCode.toUpperCase() === 'FUJI2026' || couponCode.toUpperCase() === 'CRUNCH') {
      setDiscountPercent(15);
      setCouponApplied(true);
      try {
        confetti({ particleCount: 30, spread: 50 });
      } catch {}
    } else {
      alert('کد تخفیف معتبر نیست! کد پیشنهادی: FUJI2026');
    }
  };

  const handleCheckout = () => {
    setOrderPlaced(true);
    try {
      confetti({
        particleCount: 100,
        spread: 100,
        origin: { y: 0.5 },
        colors: ['#38bdf8', '#c084fc', '#f43f5e', '#fbbf24']
      });
    } catch {}
    setTimeout(() => {
      onClearCart();
    }, 4000);
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      
      {/* Drawer Body */}
      <div className="w-full max-w-md bg-[#0d162e] border-r border-cyan-500/30 h-full flex flex-col justify-between text-right p-6 shadow-2xl relative">
        
        {/* Drawer Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-cyan-400" />
            <h3 className="text-base font-black text-white">سبد خرید کریستالی فوجی</h3>
            <span className="text-xs bg-cyan-950 text-cyan-300 px-2 py-0.5 rounded-full border border-cyan-500/30 font-bold">
              {cartItems.length} آیتم
            </span>
          </div>
          <button onClick={onClose} className="p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Free Shipping Progress Bar */}
        {subtotal > 0 && (
          <div className="my-4 p-3 rounded-2xl bg-slate-900 border border-slate-800 space-y-2 text-xs">
            <div className="flex justify-between items-center text-[11px]">
              {subtotal >= freeShippingThreshold ? (
                <span className="text-cyan-400 font-bold flex items-center gap-1">
                  ✨ تبریک! ارسال شما کاملاً رایگان شد.
                </span>
              ) : (
                <span className="text-slate-300">
                  فقط <strong className="text-cyan-300 font-['Plus_Jakarta_Sans',sans-serif]">{(freeShippingThreshold - subtotal).toLocaleString('fa-IR')}</strong> تومان دیگر تا ارسال رایگان!
                </span>
              )}
            </div>
            <div className="w-full h-2 rounded-full bg-slate-950 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-300"
                style={{ width: `${Math.min(100, (subtotal / freeShippingThreshold) * 100)}%` }}
              ></div>
            </div>
          </div>
        )}

        {/* Cart Items List */}
        <div className="flex-1 overflow-y-auto space-y-4 my-2 pr-1">
          {orderPlaced ? (
            <div className="text-center py-16 space-y-4">
              <div className="w-16 h-16 rounded-full bg-cyan-500/20 text-cyan-400 border border-cyan-400 flex items-center justify-center text-3xl mx-auto">
                🎉
              </div>
              <h4 className="text-xl font-black text-white">سفارش شما با موفقیت ثبت شد!</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                بسته‌های فریزدرای فوجی در جار پلمپ نیتروژن آماده ارسال شدند. کد پیگیری پیامک شد.
              </p>
            </div>
          ) : cartItems.length > 0 ? (
            cartItems.map((item) => (
              <div
                key={`${item.product.id}-${item.selectedWeight}`}
                className="p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-center gap-3.5 relative group"
              >
                <img
                  src={item.product.image}
                  alt={item.product.faName}
                  referrerPolicy="no-referrer"
                  className="w-16 h-16 object-contain rounded-xl bg-slate-950 p-1 border border-slate-800"
                />

                <div className="flex-1 space-y-1">
                  <h4 className="text-xs font-bold text-white line-clamp-1">{item.product.faName}</h4>
                  <div className="flex items-center gap-2 text-[11px] text-slate-400">
                    <span>وزن: {item.selectedWeight}g</span>
                    <span>•</span>
                    <span className="text-cyan-400 font-bold font-['Plus_Jakarta_Sans',sans-serif]">
                      {(item.pricePerUnit * item.quantity).toLocaleString('fa-IR')} تومان
                    </span>
                  </div>

                  {/* Quantity adjustment */}
                  <div className="flex items-center gap-2 pt-1">
                    <div className="flex items-center bg-slate-950 border border-slate-800 rounded-lg p-0.5">
                      <button
                        onClick={() => onUpdateQuantity(item.product.id, item.selectedWeight, -1)}
                        className="w-6 h-6 rounded bg-slate-800 text-slate-300 hover:bg-slate-700 font-bold flex items-center justify-center text-xs"
                      >
                        -
                      </button>
                      <span className="w-7 text-center text-xs font-bold text-white">{item.quantity}</span>
                      <button
                        onClick={() => onUpdateQuantity(item.product.id, item.selectedWeight, 1)}
                        className="w-6 h-6 rounded bg-slate-800 text-slate-300 hover:bg-slate-700 font-bold flex items-center justify-center text-xs"
                      >
                        +
                      </button>
                    </div>

                    <button
                      onClick={() => onRemoveItem(item.product.id, item.selectedWeight)}
                      className="p-1 rounded text-rose-400 hover:bg-rose-500/20"
                      title="حذف آیتم"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-20 space-y-3 text-slate-400">
              <ShoppingBag className="w-12 h-12 mx-auto text-slate-600" />
              <p className="text-xs">سبد خرید شما در حال حاضر خالی است!</p>
            </div>
          )}
        </div>

        {/* Footer Checkout Summary */}
        {cartItems.length > 0 && !orderPlaced && (
          <div className="pt-4 border-t border-slate-800 space-y-4">
            
            {/* Coupon Code Input */}
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="کد تخفیف (مثلا: FUJI2026)"
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
                disabled={couponApplied}
                className="flex-1 bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-500 uppercase"
              />
              <button
                onClick={handleApplyCoupon}
                disabled={couponApplied}
                className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-cyan-300 text-xs font-bold rounded-xl border border-slate-700"
              >
                {couponApplied ? 'اعمال شد ✓' : 'اعمال'}
              </button>
            </div>

            {/* Price Calculations */}
            <div className="space-y-1.5 text-xs text-slate-300 border-t border-slate-800/80 pt-3">
              <div className="flex justify-between">
                <span>جمع کل خریدهای شما:</span>
                <span className="font-bold font-['Plus_Jakarta_Sans',sans-serif]">{subtotal.toLocaleString('fa-IR')} تومان</span>
              </div>
              {discountAmount > 0 && (
                <div className="flex justify-between text-rose-400">
                  <span>تخفیف ویژه جشنواره (۱۵٪):</span>
                  <span className="font-bold font-['Plus_Jakarta_Sans',sans-serif]">- {discountAmount.toLocaleString('fa-IR')} تومان</span>
                </div>
              )}
              <div className="flex justify-between text-slate-400">
                <span>هزینه پست ویژه و وکیوم ایمن:</span>
                <span className="font-bold">
                  {shippingFee === 0 ? <strong className="text-cyan-400">رایگان ✨</strong> : `${shippingFee.toLocaleString('fa-IR')} تومان`}
                </span>
              </div>
              <div className="flex justify-between text-sm font-black text-white pt-2 border-t border-slate-800">
                <span>مبلغ قابل پرداخت:</span>
                <span className="text-cyan-400 font-['Plus_Jakarta_Sans',sans-serif]">{totalAmount.toLocaleString('fa-IR')} تومان</span>
              </div>
            </div>

            {/* Final Checkout Button */}
            <button
              onClick={handleCheckout}
              className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-black text-xs shadow-xl shadow-cyan-500/30 flex items-center justify-center gap-2 hover:scale-[1.01] transition-all"
            >
              <ShieldCheck className="w-4 h-4 text-slate-950" />
              <span>تکمیل ثبت سفارش و پرداخت</span>
            </button>
          </div>
        )}

      </div>

    </div>
  );
};
