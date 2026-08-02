/**
 * FUJI Freeze-Dried Universe - TypeScript Interfaces & Types
 */

export interface Mascot {
  id: string;
  name: string;
  faName: string;
  title: string;
  faTitle: string;
  role: string;
  faRole: string;
  personality: string;
  faPersonality: string;
  favoriteSnack: string;
  faFavoriteSnack: string;
  icePower: string;
  faIcePower: string;
  voiceQuote: string;
  faVoiceQuote: string;
  badgeColor: string;
  glowColor: string;
  avatarIcon: string;
  bgGradient: string;
  image?: string;
}

export interface NutritionInfo {
  calories: number; // per 100g
  protein: number;  // g
  carbs: number;    // g
  fiber: number;    // g
  sugar: number;    // g (natural)
  sodium: number;   // mg
  vitaminC: number; // % DV preserved
  calcium: number;  // % DV
}

export interface Product {
  id: string;
  name: string;
  faName: string;
  category: 'ice-cream' | 'fruits' | 'snacks' | 'powders';
  categoryFaName: string;
  mascotId: string;
  price: number; // Toman per base weight
  originalPrice?: number;
  weights: number[]; // in grams, e.g. [50, 100, 150, 250]
  defaultWeight: number;
  rating: number;
  reviewsCount: number;
  crunchLevel: number; // 1 to 5 (5 is ultra crunchy)
  description: string;
  faDescription: string;
  sublimationTemp: string; // e.g. "-40°C Vacuum"
  nutrition: NutritionInfo;
  tags: string[];
  image: string;
  secondaryImages?: string[];
  isBestseller?: boolean;
  isNew?: boolean;
  ingredients: string[];
  faIngredients: string[];
  shelfLife: string;
}

export interface CartItem {
  product: Product;
  selectedWeight: number;
  quantity: number;
  pricePerUnit: number;
}

export interface B2BApplicationData {
  fullName: string;
  companyName: string;
  city: string;
  phone: string;
  email: string;
  businessType: 'distributor' | 'retail_chain' | 'supermarket' | 'online_store' | 'export';
  estimatedVolume: string; // e.g., "500-1000 jars/month"
  notes?: string;
}

export interface BlogArticle {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  author: string;
  image: string;
  content: string[];
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'tech' | 'product' | 'ordering' | 'b2b';
}

export type ViewTab = 'home' | 'catalog' | 'mascots' | 'technology' | 'b2b' | 'blog' | 'faq' | 'specs';

export interface DesignTokenSpec {
  brandName: string;
  primaryDarkHex: string;
  iceCyanHex: string;
  neonPurpleHex: string;
  strawberryRedHex: string;
  mangoAmberHex: string;
  typographyFa: string;
  typographyEn: string;
  glassBlurPx: string;
  sublimationTemp: string;
}
