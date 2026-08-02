/**
 * @license
 * FUJI Freeze-Dried Universe - Main App Architecture
 */

import React, { useState } from 'react';
import { ViewTab, Product, CartItem } from './types';
import { PRODUCTS } from './data/fujiData';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HeroSection } from './components/HeroSection';
import { MascotShowcase } from './components/MascotShowcase';
import { ProductCatalog } from './components/ProductCatalog';
import { ProductDetailModal } from './components/ProductDetailModal';
import { TechnologySection } from './components/TechnologySection';
import { B2BAgencySection } from './components/B2BAgencySection';
import { BlogSection } from './components/BlogSection';
import { FaqSection } from './components/FaqSection';
import { CartDrawer } from './components/CartDrawer';
import { SpecDocModal } from './components/SpecDocModal';
import { IceParticles } from './components/IceParticles';
import { MascotChatbot } from './components/MascotChatbot';
import confetti from 'canvas-confetti';

export default function App() {
  const [activeTab, setActiveTab] = useState<ViewTab>('home');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedProductModal, setSelectedProductModal] = useState<Product | null>(null);
  const [cartOpen, setCartOpen] = useState<boolean>(false);
  const [specDocOpen, setSpecDocOpen] = useState<boolean>(false);

  // Initial Cart with 1 item for quick preview
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      product: PRODUCTS[0],
      selectedWeight: PRODUCTS[0].defaultWeight,
      quantity: 1,
      pricePerUnit: PRODUCTS[0].price
    }
  ]);

  const handleAddToCart = (product: Product, weight: number, quantity: number = 1) => {
    const getWeightMultiplier = (w: number) => w / product.defaultWeight;
    const calculatedPrice = Math.round(product.price * getWeightMultiplier(weight));

    setCartItems((prev) => {
      const existingIndex = prev.findIndex(
        (item) => item.product.id === product.id && item.selectedWeight === weight
      );

      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += quantity;
        return updated;
      } else {
        return [
          ...prev,
          {
            product,
            selectedWeight: weight,
            quantity,
            pricePerUnit: calculatedPrice
          }
        ];
      }
    });

    setCartOpen(true);
  };

  const handleUpdateCartQuantity = (productId: string, weight: number, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.product.id === productId && item.selectedWeight === weight) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveCartItem = (productId: string, weight: number) => {
    setCartItems((prev) =>
      prev.filter(
        (item) => !(item.product.id === productId && item.selectedWeight === weight)
      )
    );
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const handleDownloadCatalog = () => {
    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.6 }
      });
    } catch {}

    // Simulated PDF Catalog download trigger
    const link = document.createElement('a');
    link.href = '#';
    link.setAttribute('download', 'FUJI_B2B_Catalog_2026.pdf');
    alert('کاتالوگ جامع محصولات B2B فوجی (نسخه ۲۰۲۶) با موفقیت دریافت شد!');
  };

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen bg-[#0b1329] text-slate-100 font-['Vazirmatn',sans-serif] selection:bg-cyan-500 selection:text-white flex flex-col justify-between relative overflow-x-hidden">
      
      {/* Ambient Ice Flakes Floating Particle Effect */}
      <IceParticles />

      {/* Main Navbar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        cartCount={totalCartCount}
        onOpenCart={() => setCartOpen(true)}
        onOpenSpecs={() => setSpecDocOpen(true)}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      {/* Dynamic Main Body Content */}
      <main className="flex-1 relative z-10">
        
        {activeTab === 'home' && (
          <>
            <HeroSection setActiveTab={setActiveTab} onOpenSpecs={() => setSpecDocOpen(true)} />
            <MascotShowcase onSelectProduct={(p) => setSelectedProductModal(p)} />
            <ProductCatalog
              onSelectProduct={(p) => setSelectedProductModal(p)}
              onAddToCart={(p, w) => handleAddToCart(p, w, 1)}
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
            />
            <TechnologySection />
            <B2BAgencySection onDownloadCatalog={handleDownloadCatalog} />
            <BlogSection />
            <FaqSection />
          </>
        )}

        {activeTab === 'catalog' && (
          <ProductCatalog
            onSelectProduct={(p) => setSelectedProductModal(p)}
            onAddToCart={(p, w) => handleAddToCart(p, w, 1)}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
        )}

        {activeTab === 'mascots' && (
          <MascotShowcase onSelectProduct={(p) => setSelectedProductModal(p)} />
        )}

        {activeTab === 'technology' && (
          <TechnologySection />
        )}

        {activeTab === 'b2b' && (
          <B2BAgencySection onDownloadCatalog={handleDownloadCatalog} />
        )}

        {activeTab === 'blog' && (
          <BlogSection />
        )}

        {activeTab === 'faq' && (
          <FaqSection />
        )}

        {activeTab === 'specs' && (
          <div className="py-12 max-w-7xl mx-auto px-4 text-center">
            <button
              onClick={() => setSpecDocOpen(true)}
              className="px-8 py-4 rounded-2xl bg-purple-600 text-white font-extrabold text-sm shadow-xl hover:bg-purple-500"
            >
              فتح سند کامل معماری UI/UX و سیستم طراحی
            </button>
          </div>
        )}

      </main>

      {/* Footer */}
      <Footer setActiveTab={setActiveTab} onOpenSpecs={() => setSpecDocOpen(true)} />

      {/* Interactive PDP Modal */}
      <ProductDetailModal
        product={selectedProductModal}
        onClose={() => setSelectedProductModal(null)}
        onAddToCart={(p, w, q) => {
          handleAddToCart(p, w, q);
          setSelectedProductModal(null);
        }}
      />

      {/* Shopping Cart Drawer */}
      <CartDrawer
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateCartQuantity}
        onRemoveItem={handleRemoveCartItem}
        onClearCart={handleClearCart}
      />

      {/* UI/UX Architecture & Spec Docs Modal */}
      <SpecDocModal
        isOpen={specDocOpen}
        onClose={() => setSpecDocOpen(false)}
      />

      {/* Glacio Mascot AI Assistant Floating Chatbot Widget */}
      <MascotChatbot setActiveTab={setActiveTab} />

    </div>
  );
}
