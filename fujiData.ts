import { Mascot, Product, BlogArticle, FAQItem, DesignTokenSpec } from '../types';
import heroBanner from '../assets/images/fuji_hero_banner_1785706891126.jpg';
import icecreamJar from '../assets/images/fuji_icecream_jar_1785706909089.jpg';
import strawberryJar from '../assets/images/fuji_strawberry_jar_1785706927305.jpg';
import crunchySticksJar from '../assets/images/fuji_crunchy_sticks_1785706943842.jpg';

export { heroBanner, icecreamJar, strawberryJar, crunchySticksJar };

export const MASCOTS: Mascot[] = [
  {
    id: 'glacio-moki',
    name: 'Glacio & Moki',
    faName: 'گلاسیو و موکی',
    title: 'Masters of Sub-Zero Frost',
    faTitle: 'استادان انجماد و کریستال یخ',
    role: 'Guardians of Freeze-Dried Ice Cream',
    faRole: 'نگهبانان بستنی خشک و انجماد -۴۰ درجه',
    personality: 'Playful, hyper-energetic, ice-skating wizards',
    faPersonality: 'پرانرژی، عاشق اسکیت روی یخ، خنک و بشاش',
    favoriteSnack: 'Freeze-Dried Mixed Ice Cream Jars',
    faFavoriteSnack: 'جار بستنی خشک میکس با مارشمالوی ترد',
    icePower: 'Instant Flash Freeze (-40°C) & Crystal Sparkles',
    faIcePower: 'انجماد آنی در ۴۰- درجه سانتی‌گراد و ایجاد کریستال‌های ترد',
    voiceQuote: 'Stay Cool, Stay Crunchy! ❄️✨',
    faVoiceQuote: 'خنک بمون، ترد زندگی کن! ❄️✨',
    badgeColor: 'bg-cyan-500/20 text-cyan-300 border-cyan-400/30',
    glowColor: 'shadow-cyan-500/40',
    avatarIcon: '❄️',
    bgGradient: 'from-cyan-950/80 via-slate-900/90 to-blue-950/90',
    image: heroBanner
  },
  {
    id: 'strawby',
    name: 'Strawby',
    faName: 'استرابی',
    title: 'The Berry Red Firecracker',
    faTitle: 'توت‌فرنگی سرخ و پرانرژی',
    role: 'Chief Vitamin C Officer',
    faRole: 'سفیر ویتامین C و شادابی طبیعی',
    personality: 'Bubbly, passionate, sweet & tangy leader',
    faPersonality: 'شور‌انگیز، مهربان، شیرین و ملس',
    favoriteSnack: 'Whole Freeze-Dried Red Strawberries',
    faFavoriteSnack: 'توت‌فرنگی کامل فریزدرای شده فوجی',
    icePower: 'Sublimation Burst & Fragrance Boom',
    faIcePower: 'انفجار عطر تازه توت‌فرنگی در لحظه ترد شدن',
    voiceQuote: 'Crisp perfection in every single bite! 🍓',
    faVoiceQuote: 'هر گاز، یک انباشتگی از عطر و تردی توت‌فرنگی! 🍓',
    badgeColor: 'bg-rose-500/20 text-rose-300 border-rose-400/30',
    glowColor: 'shadow-rose-500/40',
    avatarIcon: '🍓',
    bgGradient: 'from-rose-950/80 via-slate-900/90 to-pink-950/90',
    image: strawberryJar
  },
  {
    id: 'berryboo',
    name: 'BerryBoo',
    faName: 'بری‌بو',
    title: 'The Elegant Violet Sorceress',
    faTitle: 'تمشک شیک و مدرن بنفش',
    role: 'Antioxidant Queen & Gourmet Connoisseur',
    faRole: 'ملکه آنتی‌اکسیدان و طعم‌های لاکچری',
    personality: 'Sophisticated, stylish, mysterious & cool',
    faPersonality: 'باوقار، خوش‌تیپ، بااستایل و دوست‌داشتنی',
    favoriteSnack: 'Freeze-Dried Crisp Blackberries & Dragonfruit',
    faFavoriteSnack: 'تمشک خنک و دراگون‌فروت کرانچی',
    icePower: 'Violet Frost Aura & Tangy Explosion',
    faIcePower: 'هاله بنفش یخی و ترشی ملایم بی‌نظیر',
    voiceQuote: 'Luxury snacks, zero guilt. 💜✨',
    faVoiceQuote: 'تنقلات لوکس بدون حتی ۱ گرم شکر افزوده! 💜✨',
    badgeColor: 'bg-purple-500/20 text-purple-300 border-purple-400/30',
    glowColor: 'shadow-purple-500/40',
    avatarIcon: '🍇',
    bgGradient: 'from-purple-950/80 via-slate-900/90 to-fuchsia-950/90',
    image: heroBanner
  },
  {
    id: 'banni',
    name: 'Banni',
    faName: 'بانی',
    title: 'The Chill Creamy Banana',
    faTitle: 'موز ریلکس و بامزه',
    role: 'Potassium Master & Chill Vibe Creator',
    faRole: 'خالق انرژی پایدار و لایف‌استایل ریلکس',
    personality: 'Relaxed, humorous, smooth & satisfying',
    faPersonality: 'ریلکس، خوش‌مشرب، کرمی و سیرکننده',
    favoriteSnack: 'Freeze-Dried Banana Crunchy Blocks',
    faFavoriteSnack: 'بلوک‌های کرانچی موز فریزدرای فوجی',
    icePower: 'Crispy Melt Transformation',
    faIcePower: 'تبدیل بافت نرم موز به صخره‌های ترد و آب‌شونده',
    voiceQuote: 'Go bananas, stay crunching! 🍌💛',
    faVoiceQuote: 'ارام باش و با صدای کرانچی موز حال کن! 🍌💛',
    badgeColor: 'bg-amber-500/20 text-amber-300 border-amber-400/30',
    glowColor: 'shadow-amber-500/40',
    avatarIcon: '🍌',
    bgGradient: 'from-amber-950/80 via-slate-900/90 to-yellow-950/90',
    image: crunchySticksJar
  },
  {
    id: 'mangopoff',
    name: 'MangoPoff',
    faName: 'منگوپاف',
    title: 'Golden Tropical Sunshine Cube',
    faTitle: 'مکعب انبه طلایی و شاداب',
    role: 'Exotic Flavor Ambassador',
    faRole: 'سفیر طعم‌های استوایی و تابستانی',
    personality: 'Joyful, bright, adventurous, tropical lover',
    faPersonality: 'شاداب، ماجراجو، درخشان و پر از انرژی استوایی',
    favoriteSnack: 'Freeze-Dried Golden Mango Sticks',
    faFavoriteSnack: 'استیک‌های انبه طلایی پریمیوم',
    icePower: 'Solar Sublimation Flash',
    faIcePower: 'تثبیت طعم انبه تازه استوایی در خلأ',
    voiceQuote: 'Tropical sunshine in a crystal jar! 🥭☀️',
    faVoiceQuote: 'آفتاب استوایی در جار کریستالی فوجی! 🥭☀️',
    badgeColor: 'bg-orange-500/20 text-orange-300 border-orange-400/30',
    glowColor: 'shadow-orange-500/40',
    avatarIcon: '🥭',
    bgGradient: 'from-orange-950/80 via-slate-900/90 to-amber-950/90',
    image: crunchySticksJar
  }
];

export const PRODUCTS: Product[] = [
  {
    id: 'fuji-icecream-mix',
    name: 'FUJI Freeze-Dried Mixed Ice Cream',
    faName: 'بستنی خشک میکس پریمیوم فوجی',
    category: 'ice-cream',
    categoryFaName: 'بستنی خشک پریمیوم',
    mascotId: 'glacio-moki',
    price: 245000,
    originalPrice: 285000,
    weights: [75, 120, 180, 250],
    defaultWeight: 120,
    rating: 4.9,
    reviewsCount: 342,
    crunchLevel: 5,
    description: 'A magical blend of strawberry, vanilla, and chocolate freeze-dried ice cream cubes with mini crisp marshmallows. Melts smoothly in your mouth after an intense initial crunch!',
    faDescription: 'ترکیب جادویی بستنی‌های فریزدرای شده وانیلی، شکلاتی و توت‌فرنگی همراه با مارشمالوهای ترد یخی! حس اولیه کرانچی فوق‌العاده که بلافاصله روی زبان آب می‌شود.',
    sublimationTemp: '-45°C Cryo-Sublimation',
    nutrition: {
      calories: 380,
      protein: 6.5,
      carbs: 64,
      fiber: 2.1,
      sugar: 45,
      sodium: 90,
      vitaminC: 40,
      calcium: 18
    },
    tags: ['پرفروش‌ترین', 'بدون نیاز به یخچال', 'ترد و کرانچی', 'میکس ۳ طعم'],
    image: icecreamJar,
    secondaryImages: [heroBanner, strawberryJar],
    isBestseller: true,
    isNew: false,
    ingredients: ['Fresh Cow Milk', 'Freeze-Dried Strawberries', 'Pure Cocoa', 'Natural Vanilla Bean', 'Crisp Marshmallow'],
    faIngredients: ['شیر تازه گاو', 'توت‌فرنگی فریزدرای شده', 'کاکائو خالص', 'وانیل طبیعی', 'مارشمالوی ترد'],
    shelfLife: '۱۸ ماه در دمای محیط (در جار وکیوم پلمپ شده)'
  },
  {
    id: 'fuji-strawberry-whole',
    name: 'FUJI Freeze-Dried Whole Strawberries',
    faName: 'توت‌فرنگی کامل فریزدرای شده فوجی',
    category: 'fruits',
    categoryFaName: 'میوه‌های فریزدرای شده',
    mascotId: 'strawby',
    price: 220000,
    originalPrice: 250000,
    weights: [50, 100, 150, 200],
    defaultWeight: 100,
    rating: 5.0,
    reviewsCount: 512,
    crunchLevel: 5,
    description: '100% natural hand-picked whole red strawberries freezed-dried to retain 98% of vitamins and structural sweetness. Ultra light and intense flavor explosion.',
    faDescription: '۱۰۰٪ توت‌فرنگی سرخ دست‌چین شده که طی فرآیند تصعید خلأ، ۹۸٪ ویتامین‌ها، عطر و رنگ طبیعی آن حفظ شده است. بدون شکر افزودنی و ماده نگهدارنده.',
    sublimationTemp: '-40°C Vacuum Sublimation',
    nutrition: {
      calories: 325,
      protein: 7.2,
      carbs: 70,
      fiber: 14.5,
      sugar: 48,
      sodium: 12,
      vitaminC: 220,
      calcium: 15
    },
    tags: ['۱۰۰٪ طبیعی', 'بدون شکر افزوده', 'منبع ویتامین C', 'ارگانیک'],
    image: strawberryJar,
    secondaryImages: [heroBanner, icecreamJar],
    isBestseller: true,
    isNew: false,
    ingredients: ['100% Whole Freeze-Dried Strawberries'],
    faIngredients: ['۱۰۰٪ توت‌فرنگی کامل فریزدرای شده'],
    shelfLife: '۲۴ ماه در جار وکیوم ضد رطوبت'
  },
  {
    id: 'fuji-mango-sticks',
    name: 'FUJI Golden Mango Crunchy Sticks',
    faName: 'استیک انبه طلایی فریزدرای شده فوجی',
    category: 'fruits',
    categoryFaName: 'میوه‌های فریزدرای شده',
    mascotId: 'mangopoff',
    price: 260000,
    originalPrice: 295000,
    weights: [60, 120, 180, 240],
    defaultWeight: 120,
    rating: 4.8,
    reviewsCount: 198,
    crunchLevel: 4,
    description: 'Exotic golden ripe mangos sliced into crispy sticks. Pure tropical sweetness with an addictive snappy crunch.',
    faDescription: 'خلال‌های انبه شیرین و معطر استوایی که به شکل استیک‌های ترد طلایی فریزدرای شده‌اند. طعم واقعی انبه تازه با صدایی کرانچی و جذاب.',
    sublimationTemp: '-42°C Tropical Lock',
    nutrition: {
      calories: 340,
      protein: 4.8,
      carbs: 78,
      fiber: 8.5,
      sugar: 62,
      sodium: 8,
      vitaminC: 180,
      calcium: 12
    },
    tags: ['طعمی استوایی', 'سرشار از ویتامین A و C', 'بدون افزودنی', 'شکل استیک'],
    image: crunchySticksJar,
    secondaryImages: [heroBanner, icecreamJar],
    isBestseller: true,
    isNew: true,
    ingredients: ['100% Fresh Alphonso Mango'],
    faIngredients: ['۱۰۰٪ انبه تازه آلفونسو'],
    shelfLife: '۲۴ ماه'
  },
  {
    id: 'fuji-blackberry-pop',
    name: 'FUJI Freeze-Dried Crisp Blackberries',
    faName: 'شاه‌توت و تمشک خنک فریزدرای فوجی',
    category: 'fruits',
    categoryFaName: 'میوه‌های فریزدرای شده',
    mascotId: 'berryboo',
    price: 235000,
    originalPrice: 270000,
    weights: [50, 100, 150],
    defaultWeight: 100,
    rating: 4.9,
    reviewsCount: 145,
    crunchLevel: 5,
    description: 'Deep purple blackberries frozen at peak freshness. Tangy, rich in antioxidants, and perfectly crispy.',
    faDescription: 'شاه‌توت‌های بنفش تیره و تمشک‌های خوش‌عطر که ترشی ملایم و آنتی‌اکسیدان فراوان را در بافتی شکننده و ترد به شما هدیه می‌دهند.',
    sublimationTemp: '-40°C Antioxidant Freeze',
    nutrition: {
      calories: 310,
      protein: 8.5,
      carbs: 62,
      fiber: 21.0,
      sugar: 38,
      sodium: 5,
      vitaminC: 150,
      calcium: 22
    },
    tags: ['آنتی‌اکسیدان بالا', 'فیبر فراوان', 'مژده برای ورزشکاران', 'مترادف لاکچری'],
    image: strawberryJar,
    secondaryImages: [heroBanner],
    isBestseller: false,
    isNew: true,
    ingredients: ['100% Freeze-Dried Blackberries & Raspberries'],
    faIngredients: ['۱۰۰٪ شاه‌توت و تمشک فریزدرای شده'],
    shelfLife: '۲۴ ماه'
  },
  {
    id: 'fuji-banana-blocks',
    name: 'FUJI Freeze-Dried Banana Crunchy Blocks',
    faName: 'مکعب‌های موز کرانچی فریزدرای فوجی',
    category: 'snacks',
    categoryFaName: 'تنقلات ترد',
    mascotId: 'banni',
    price: 195000,
    originalPrice: 225000,
    weights: [80, 150, 220],
    defaultWeight: 150,
    rating: 4.7,
    reviewsCount: 289,
    crunchLevel: 4,
    description: 'Creamy sweet Cavendish bananas converted into light crunchy wafers. Great energy booster for kids and athletes.',
    faDescription: 'موزهای کاراملی و شیرین که به قطعات ترد و سبک تبدیل شده‌اند. میان‌وعده‌ای مقوی، حاوی پتاسیم و انرژی‌بخش برای کودکان و ورزشکاران.',
    sublimationTemp: '-38°C Potassium Lock',
    nutrition: {
      calories: 360,
      protein: 5.2,
      carbs: 82,
      fiber: 9.8,
      sugar: 52,
      sodium: 15,
      vitaminC: 45,
      calcium: 10
    },
    tags: ['سرشار از پتاسیم', 'انرژی‌بخش', 'مناسب کودکان', 'میان‌وعده سلامت'],
    image: crunchySticksJar,
    secondaryImages: [heroBanner],
    isBestseller: false,
    isNew: false,
    ingredients: ['100% Cavendish Bananas'],
    faIngredients: ['۱۰۰٪ موز درجه یک'],
    shelfLife: '۱۸ ماه'
  },
  {
    id: 'fuji-yogurt-drops',
    name: 'FUJI Freeze-Dried Berry Yogurt Drops',
    faName: 'قطره‌های ماست میوه‌ای فریزدرای فوجی',
    category: 'snacks',
    categoryFaName: 'تنقلات ترد',
    mascotId: 'glacio-moki',
    price: 210000,
    originalPrice: 240000,
    weights: [60, 110, 160],
    defaultWeight: 110,
    rating: 4.9,
    reviewsCount: 178,
    crunchLevel: 4,
    description: 'Probiotic Greek yogurt drops blended with strawberry puree and freeze-dried into crunchy bite-sized buttons.',
    faDescription: 'قطره‌های ماست یونانی پروبیوتیک با پوره توت‌فرنگی که به صورت تکه‌های کوچک و ترد فریزدرای شده‌اند. بسیار محبوب در میان کودکان.',
    sublimationTemp: '-40°C Probiotic Cryo',
    nutrition: {
      calories: 375,
      protein: 12.0,
      carbs: 58,
      fiber: 3.5,
      sugar: 42,
      sodium: 85,
      vitaminC: 60,
      calcium: 35
    },
    tags: ['حاوی پروبیوتیک', 'پروتئین بالا', 'مخصوص کودکان', 'ذوب‌شونده روی زبان'],
    image: icecreamJar,
    secondaryImages: [strawberryJar],
    isBestseller: false,
    isNew: true,
    ingredients: ['Greek Yogurt', 'Strawberry Puree', 'Probiotic Cultures', 'Natural Stevia Juice'],
    faIngredients: ['ماست یونانی', 'پوره توت‌فرنگی', 'کشت پروبیوتیک فعال', 'عصاره استویا'],
    shelfLife: '۱۸ ماه'
  },
  {
    id: 'fuji-superberry-powder',
    name: 'FUJI 100% Pure Superberry Powder',
    faName: 'پودر سوپربری ۱۰۰٪ طبیعی فریزدرای فوجی',
    category: 'powders',
    categoryFaName: 'پودرهای طبیعی',
    mascotId: 'strawby',
    price: 280000,
    originalPrice: 320000,
    weights: [100, 200, 300],
    defaultWeight: 100,
    rating: 5.0,
    reviewsCount: 94,
    crunchLevel: 1,
    description: 'Fine concentrated freeze-dried strawberry & blackberry powder for smoothies, baking, bowl decoration, and ice creams.',
    faDescription: 'پودر غلیظ و خالص توت‌فرنگی و تمشک فریزدرای شده بدون مالتودکسترین یا افزودنی. عالی برای اسموتی‌ها، کیک‌پزی، اوتمیل و تزئین نوشیدنی.',
    sublimationTemp: '-45°C Micro-Pulverized',
    nutrition: {
      calories: 320,
      protein: 7.8,
      carbs: 68,
      fiber: 18.0,
      sugar: 44,
      sodium: 10,
      vitaminC: 280,
      calcium: 20
    },
    tags: ['۱۰۰٪ خالص', 'ویژه آشپزی و قنادی', 'بدون رنگ مصنوعی', 'غنی از عصاره میوه'],
    image: strawberryJar,
    secondaryImages: [icecreamJar],
    isBestseller: false,
    isNew: true,
    ingredients: ['100% Freeze-Dried Strawberries & Raspberries Powder'],
    faIngredients: ['۱۰۰٪ پودر فریزدرای توت‌فرنگی و شاه‌توت'],
    shelfLife: '۲۴ ماه در بسته زیپ‌کیپ وکیوم'
  }
];

export const TECH_STEPS = [
  {
    step: '۰۱',
    title: 'انجماد فوق‌سریع (-40°C Flash Freeze)',
    description: 'میوه‌های تازه و بستنی‌ها در کمتر از 몇 دقیقه تا دمای منفی ۴۰ درجه سانتی‌گراد منجمد می‌شوند تا ساختار سلولی و کریستال‌های طعم بدون آسیب حفظ گردند.'
  },
  {
    step: '۰۲',
    title: 'تصعید در اتاقک خلأ (Vacuum Sublimation)',
    description: 'در فشار بسیار پایین خلأ، یخ موجود در محصول بدون تبدیل شدن به مایع، مستقیماً به بخار تبدیل شده و از محصول خارج می‌شود.'
  },
  {
    step: '۰۳',
    title: 'حفظ ۹۸٪ ارزش غذایی و عطر (98% Nutrient Lock)',
    description: 'برعکس خشک‌کردن حرارتی که ویتامین‌ها را نابود می‌کند، در روش فریزدرای تمامی ویتامین C، رنگ، آنتی‌اکسیدان‌ها و عطر طبیعی میوه کاملاً دست‌نخورده باقی می‌ماند.'
  },
  {
    step: '۰۴',
    title: 'بسته‌بندی کریستالی وکیوم (Nitrogen Sealed Jar)',
    description: 'محصول نهایی در جار‌های شفاف و مقاوم ضد رطوبت با گاز نیتروژن پلمپ شده تا ماندگاری بدون نیاز به یخچال تا ۲ سال تضمین شود.'
  }
];

export const TECH_COMPARISON = [
  {
    feature: 'حفظ ویتامین‌ها و آنتی‌اکسیدان‌ها',
    fuji: '۹۸٪ (بسیار بالا)',
    sunDried: '۳۰٪ تا ۴۰٪',
    dehydrated: '۴۵٪ تا ۵۰٪',
    fresh: '۱۰۰٪ (در صورت مصرف سریع)'
  },
  {
    feature: 'بافت و حس در دهان',
    fuji: 'فوق‌العاده ترد، سبُک و آب‌شونده',
    sunDried: 'سخت و لاستیکی',
    dehydrated: 'خشک و سفت',
    fresh: 'آبدار و نرم'
  },
  {
    feature: 'مواد نگهدارنده و مواد شیمیایی',
    fuji: 'صفر درصد (۱۰۰٪ طبیعی)',
    sunDried: 'دارای سولفیت و مواد ضدکپک',
    dehydrated: 'دارای شکر افزودنی و محافظ',
    fresh: 'بدون افزودنی'
  },
  {
    feature: 'ماندگاری در دمای محیط',
    fuji: 'تا ۲۴ ماه (بدون یخچال)',
    sunDried: '۳ تا ۶ ماه',
    dehydrated: '۶ تا ۱۲ ماه',
    fresh: '۳ تا ۷ روز'
  },
  {
    feature: 'وزن و سهولت حمل',
    fuji: 'فوق‌العاده سبک (۱۰٪ وزن اولیه)',
    sunDried: 'متوسط',
    dehydrated: 'متوسط',
    fresh: 'سنگین و آسیب‌پذیر'
  }
];

export const BLOG_ARTICLES: BlogArticle[] = [
  {
    id: 'science-of-freeze-drying',
    title: 'تکنولوژی فریزدرای چگونه طعم بستنی و میوه را ۱۰ برابر غلیظ‌تر می‌کند؟',
    excerpt: 'چرا وقتی یک تکه بستنی یا توت‌فرنگی فریزدرای شده فوجی را می‌چشید، طعم آن بسیار قوی‌تر از میوه تازه احساس می‌شود؟ راز علمی فرآیند Sublimation را بخوانید.',
    category: 'تکنولوژی و دانش',
    readTime: '۴ دقیقه',
    date: '۱۰ مرداد ۱۴۰۵',
    author: 'تیم R&D فوجی',
    image: heroBanner,
    content: [
      'هنگامی که آب موجود در میوه یا بستنی خروج پیدا می‌کند، تمام قندهای طبیعی، اسیدهای معطر و مولکول‌های طعم‌دهنده در یک ساختار اسفنجی و ترد فشرده می‌شوند.',
      'با اولین تماس رطوبت دهان با کریستال‌های فریزدرای شده فوجی، این ساختار فوراً بازسازی شده و انفجاری از طعم خالص را ایجاد می‌کند.',
      'این تکنولوژی که در ابتدا برای فضانوردان ناسا توسعه یافته بود، امروزه به لطف برند FUJI در دسترس همه عاشقان تنقلات سالم قرار گرفته است.'
    ]
  },
  {
    id: 'healthy-kids-snacks',
    title: 'جایگزین سالم و بدون شکر برای تنقلات مضر کودکان',
    excerpt: 'چگونه بچه‌ها را شیفته میوه و چیپس‌های طبیعی کنیم؟ ماسکوت‌های فوجی همراه با بافت کرانچی، اشتیاق تغذیه سالم را در فرزندان شما بیدار می‌کنند.',
    category: 'تغذیه و سلامت',
    readTime: '۵ دقیقه',
    date: '۵ مرداد ۱۴۰۵',
    author: 'دکتر مریم راد (متخصص تغذیه کودک)',
    image: strawberryJar,
    content: [
      'کودکان عاشق صدای "کرانچ" و رنگ‌های جذاب تنقلات هستند. متأسفانه اکثر چیپس‌ها و پفک‌های صنعتی حاوی روغن‌های ترانس و رنگ‌های مصنوعی هستند.',
      'محصولات فریزدرای شده فوجی با حفظ ظاهر و رنگ جذاب میوه‌های طبیعی و ایجاد بافت شکننده مانند پفک، همان حس هیجان‌انگیز خوردن چیپس را بدون هیچ‌گونه شکر افزوده یا چربی نا‌سالم فراهم می‌کنند.'
    ]
  },
  {
    id: 'culinary-uses-fuji',
    title: '۵ ایده خلاقانه برای سرو بستنی خشک و میوه فریزدرای فوجی در مهمانی‌ها',
    excerpt: 'از تزیین کیک‌های مدرن لاکچری تا ساخت اسموتی‌بۆل‌های اینستاگرامی با جارها و پودرهای رنگارنگ فوجی.',
    category: 'دستورالعمل و سبک زندگی',
    readTime: '۳ دقیقه',
    date: '۲۸ تیر ۱۴۰۵',
    author: 'شف آرش شفایی',
    image: crunchySticksJar,
    content: [
      '۱. افزودن مکعب‌های بستنی خشک فوجی روی قهوه اسپرسو داغ (Afogato Crunch)',
      '۲. خرد کردن استیک‌های انبه فوجی روی کیک خامه و دسر پنکیک',
      '۳. مخلوط کردن توت‌فرنگی کامل فریزدرای شده با شکلات آب‌شده تلخ',
      '۴. ساخت شیک‌های پروتئینی بنفش با پودر سوپربری فوجی'
    ]
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'فریزدرای (Freeze-Dried) دقیقا یعنی چه و چه فرقی با خشک‌کردن معمولی دارد؟',
    answer: 'در فریزدرای، محصول ابتدا در دمای منفی ۴۰ درجه سانتی‌گراد منجمد شده و سپس در خلأ آب آن تبخیر (تصعید) می‌شود. این کار باعث می‌شود شکل، رنگ، حجم و ۹۸٪ ویتامین‌های میوه حفظ شده و بافتی بسیار ترد و کرانچی پیدا کند؛ در حالی که در خشک‌کردن سنتی با حرارت، میوه چروکیده، سیاه و کم‌ویتامین می‌شود.',
    category: 'tech'
  },
  {
    id: 'faq-2',
    question: 'آیا بستنی خشک فوجی نیاز به نگهداری در یخچال دارد؟',
    answer: 'خیر! یکی از شگفت‌انگیزترین ویژگی‌های بستنی خشک فوجی، عدم نیاز به یخچال و فریزر است. تا زمانی که درب جار را محکم بسته‌اید، می‌توانید آن را در کیف، ماشین، پیکنیک یا کمد اتاق تا ۱۸ ماه نگه دارید.',
    category: 'product'
  },
  {
    id: 'faq-3',
    question: 'آیا به میوه‌ها و بستنی‌های فوجی شکر یا ماده نگهدارنده اضافه می‌شود؟',
    answer: 'به میوه‌های فریزدرای شده فوجی هیچ‌گونه شکر، اسانس، رنگ یا ماده نگهدارنده اضافه نمی‌شود. قند موجود در آن‌ها ۱۰۰٪ قند طبیعی خود میوه است. در بستنی خشک نیز از شیر تازه و کاکائو و وانیل اعلی استفاده شده است.',
    category: 'product'
  },
  {
    id: 'faq-4',
    question: 'شرایط اخذ نمایندگی فروش و سفارش عمده B2B به چه صورت است؟',
    answer: 'شرکت‌ها، هایپرمارکت‌ها، کافه‌ها و توزیع‌کنندگان محترم می‌توانند با تکمیل فرم اخذ نمایندگی در بخش B2B یا تماس با واحد فروش عمده فوجی، از کاتالوگ قیمت‌های همکاری، استندهای اختصاصی و شرایط پرداخت اقساطی بهره‌مند شوند.',
    category: 'b2b'
  },
  {
    id: 'faq-5',
    question: 'نحوه ارسال سفارشات فروشگاهی و تحویل چقدر طول می‌کشد؟',
    answer: 'سفرشات تک‌فروشی در تهران ظرف کمتر از ۲۴ ساعت کاری با پیک ویژه ضدضربه و در سایر استان‌ها ظرف ۲ الی ۳ روز کاری از طریق پست پیشتاز در بسته‌بندی ایمن ارسال می‌گردد.',
    category: 'ordering'
  }
];

export const DESIGN_TOKENS: DesignTokenSpec = {
  brandName: 'FUJI Freeze-Dried Universe (فوجی)',
  primaryDarkHex: '#0b1329',
  iceCyanHex: '#38bdf8',
  neonPurpleHex: '#c084fc',
  strawberryRedHex: '#f43f5e',
  mangoAmberHex: '#fbbf24',
  typographyFa: 'Vazirmatn (فارسی - اوزان ۳۰۰ تا ۹۰۰)',
  typographyEn: 'Plus Jakarta Sans (Numbers & EN Labels)',
  glassBlurPx: '16px Backdrop-blur with 1px Cyan-white border overlay',
  sublimationTemp: '-40°C Cryo Sublimation (-40 degrees Celsius)'
};
