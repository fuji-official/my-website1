import React, { useState } from 'react';
import { ViewTab } from '../types';
import { 
  Snowflake, 
  ShoppingBag, 
  Menu, 
  X, 
  Sparkles, 
  Search, 
  FileText, 
  Briefcase, 
  BookOpen, 
  HelpCircle,
  Cpu,
  Smile,
  Grid
} from 'lucide-react';

interface NavbarProps {
  activeTab: ViewTab;
  setActiveTab: (tab: ViewTab) => void;
  cartCount: number;
  onOpenCart: () => void;
  onOpenSpecs: () => void;
  onSearchChange: (query: string) => void;
  searchQuery: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  cartCount,
  onOpenCart,
  onOpenSpecs,
  onSearchChange,
  searchQuery
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: { id: ViewTab; label: string; icon: React.ReactNode }[] = [
    { id: 'home', label: 'صفحه اصلی', icon: <Sparkles className="w-4 h-4" /> },
    { id: 'catalog', label: 'ویترین محصولات', icon: <Grid className="w-4 h-4" /> },
    { id: 'mascots', label: 'ماسکوت‌های فوجی', icon: <Smile className="w-4 h-4" /> },
    { id: 'technology', label: 'تکنولوژی فریزدرای', icon: <Cpu className="w-4 h-4" /> },
    { id: 'b2b', label: 'اخذ نمایندگی (B2B)', icon: <Briefcase className="w-4 h-4" /> },
    { id: 'blog', label: 'مجله علمی', icon: <BookOpen className="w-4 h-4" /> },
    { id: 'faq', label: 'سوالات متداول', icon: <HelpCircle className="w-4 h-4" /> },
  ];

  return (
    <header className="sticky top-0 z-40 w-full glass-ice border-b border-cyan-500/20 shadow-lg transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        
        {/* Brand Logo & Tagline */}
        <div className="flex items-center gap-3 cursor-pointer group" onClick={() => setActiveTab('home')}>
          <div className="relative w-11 h-11 rounded-2xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/30 group-hover:scale-105 transition-transform">
            <Snowflake className="w-6 h-6 text-white animate-spin-slow" />
            <div className="absolute -inset-1 rounded-2xl bg-cyan-400/20 blur-sm -z-10 group-hover:bg-cyan-400/40 transition-all"></div>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="font-extrabold text-2xl tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-white to-sky-200 font-['Plus_Jakarta_Sans',sans-serif]">
                FUJI
              </span>
              <span className="text-sm font-bold text-cyan-400 bg-cyan-950/80 px-2 py-0.5 rounded-full border border-cyan-500/30">
                فوجی
              </span>
            </div>
            <span className="text-[10px] text-cyan-200/80 font-medium tracking-tight">
              Freeze-Dried Universe • -40°C
            </span>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-slate-900/60 p-1.5 rounded-2xl border border-slate-800">
          {navLinks.map((link) => {
            const isActive = activeTab === link.id;
            return (
              <button
                key={link.id}
                onClick={() => setActiveTab(link.id)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all duration-200 ${
                  isActive
                    ? 'bg-gradient-to-r from-cyan-500/20 to-blue-600/20 text-cyan-300 border border-cyan-500/40 shadow-sm shadow-cyan-500/20'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                <span className={isActive ? 'text-cyan-400' : 'text-slate-400'}>{link.icon}</span>
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Search & Actions Bar */}
        <div className="flex items-center gap-3">
          {/* Quick Search Input */}
          <div className="relative hidden md:flex items-center">
            <Search className="absolute right-3 w-4 h-4 text-slate-400 pointer-events-none" />
            <input
              type="text"
              placeholder="جستجوی طعم یا ماسکوت..."
              value={searchQuery}
              onChange={(e) => {
                onSearchChange(e.target.value);
                if (activeTab !== 'catalog') setActiveTab('catalog');
              }}
              className="w-44 lg:w-56 pr-9 pl-3 py-1.5 bg-slate-900/80 border border-slate-700/80 rounded-xl text-xs text-slate-100 placeholder-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
            />
          </div>

          {/* UI/UX Spec Docs Button */}
          <button
            onClick={onOpenSpecs}
            title="مشاهده سند جامع UI/UX و سیستم طراحی"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-purple-500/20 hover:bg-purple-500/30 text-purple-300 border border-purple-500/40 text-xs font-semibold transition-all shadow-sm shadow-purple-500/20"
          >
            <FileText className="w-4 h-4 text-purple-400" />
            <span className="hidden sm:inline">سند UI/UX</span>
          </button>

          {/* Cart Trigger Button */}
          <button
            onClick={onOpenCart}
            className="relative p-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-md shadow-cyan-500/25 transition-all hover:scale-105"
            aria-label="سبد خرید"
          >
            <ShoppingBag className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-rose-500 text-white font-extrabold text-[11px] w-5 h-5 rounded-full flex items-center justify-center border-2 border-[#0b1329] animate-bounce">
                {cartCount}
              </span>
            )}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl bg-slate-800 text-slate-300 hover:text-white border border-slate-700"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-950/95 backdrop-blur-2xl border-b border-slate-800 px-4 py-5 animate-in slide-in-from-top duration-200">
          <div className="relative mb-4">
            <Search className="absolute right-3 top-2.5 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="جستجوی محصول..."
              value={searchQuery}
              onChange={(e) => {
                onSearchChange(e.target.value);
                if (activeTab !== 'catalog') setActiveTab('catalog');
              }}
              className="w-full pr-9 pl-3 py-2 bg-slate-900 border border-slate-700 rounded-xl text-sm text-slate-100 placeholder-slate-400"
            />
          </div>

          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  setActiveTab(link.id);
                  setMobileMenuOpen(false);
                }}
                className={`flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-xs font-semibold text-right ${
                  activeTab === link.id
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                    : 'bg-slate-900/60 text-slate-300 hover:bg-slate-800'
                }`}
              >
                <span>{link.icon}</span>
                {link.label}
              </button>
            ))}
          </div>

          <div className="mt-4 pt-4 border-t border-slate-800 flex justify-between items-center">
            <button
              onClick={() => {
                onOpenSpecs();
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-purple-600/20 text-purple-300 border border-purple-500/30 text-xs font-bold"
            >
              <FileText className="w-4 h-4" />
              مشاهده کامل سند معماری UI/UX و Wireframe
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
