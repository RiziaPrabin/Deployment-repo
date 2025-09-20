import { Product } from '../types';

export const products: Product[] = [
  {
    id: 1,
    name: "Golden Skull Treasure Chest",
    price: 999.99,
    originalPrice: 1299.99,
    description: "Arrr! This magnificent treasure chest be filled with golden doubloons, precious gems, and cursed artifacts from the seven seas. Perfect for any pirate's quarters or secret hideout.",
    category: "Treasure & Gold",
    images: [
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&q=80",
      "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500&q=80",
      "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=500&q=80"
    ],
    rating: 4.9,
    reviews: 847,
    inStock: true,
    featured: true
  },
  {
    id: 2,
    name: "Captain's Cutlass - Damascus Steel",
    price: 599.99,
    originalPrice: 799.99,
    description: "A fearsome blade forged in the fires of Port Royal! This Damascus steel cutlass has seen many battles and be ready for many more. Sharp enough to cut through enemy sails!",
    category: "Weapons & Arms",
    images: [
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&q=80",
      "https://images.unsplash.com/photo-1578761499019-d2d9c0b9caf8?w=500&q=80",
      "https://images.unsplash.com/photo-1594736797933-d0e3c2c8b6b7?w=500&q=80"
    ],
    rating: 4.8,
    reviews: 432,
    inStock: true,
    featured: true
  },
  {
    id: 3,
    name: "Pirate Captain's Tricorn Hat",
    price: 149.99,
    description: "Ye can't be a proper pirate without a proper hat! This authentic tricorn be made from the finest leather and adorned with golden trim. Feather included, matey!",
    category: "Pirate Attire",
    images: [
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&q=80",
      "https://images.unsplash.com/photo-1578761499019-d2d9c0b9caf8?w=500&q=80",
      "https://images.unsplash.com/photo-1594736797933-d0e3c2c8b6b7?w=500&q=80"
    ],
    rating: 4.7,
    reviews: 256,
    inStock: true,
    featured: true
  },
  {
    id: 4,
    name: "Brass Pirate Compass",
    price: 299.99,
    description: "Navigate the treacherous waters with this enchanted compass! Always points to what ye heart desires most - usually treasure! Crafted from solid brass by the finest artisans.",
    category: "Navigation & Tools",
    images: [
      "https://images.unsplash.com/photo-1578761499019-d2d9c0b9caf8?w=500&q=80",
      "https://images.unsplash.com/photo-1594736797933-d0e3c2c8b6b7?w=500&q=80",
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&q=80"
    ],
    rating: 4.9,
    reviews: 189,
    inStock: true,
    featured: false
  },
  {
    id: 5,
    name: "Pirate's Rum Collection",
    price: 449.99,
    originalPrice: 599.99,
    description: "The finest collection of Caribbean rum this side of Tortuga! Includes aged spiced rum, dark rum, and the legendary Captain Morgan's personal reserve. Drink responsibly, ye scallywag!",
    category: "Grog & Provisions",
    images: [
      "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=500&q=80",
      "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500&q=80",
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&q=80"
    ],
    rating: 4.8,
    reviews: 678,
    inStock: true,
    featured: false
  },
  {
    id: 6,
    name: "Cursed Pirate's Lantern",
    price: 199.99,
    description: "This mystical lantern be said to guide lost souls through the darkest nights. Perfect for midnight raids and treasure hunts! Burns with an eerie blue flame that never dies.",
    category: "Mystical Items",
    images: [
      "https://images.unsplash.com/photo-1578761499019-d2d9c0b9caf8?w=500&q=80",
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&q=80",
      "https://images.unsplash.com/photo-1594736797933-d0e3c2c8b6b7?w=500&q=80"
    ],
    rating: 4.6,
    reviews: 334,
    inStock: true,
    featured: true
  },
  {
    id: 7,
    name: "Parrot Companion - Polly",
    price: 799.99,
    originalPrice: 999.99,
    description: "Every pirate needs a loyal parrot! Polly here knows over 100 pirate phrases and can spot treasure from a league away. Comes with perch and pirate training manual.",
    category: "Companions & Pets",
    images: [
      "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500&q=80",
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&q=80",
      "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=500&q=80"
    ],
    rating: 4.9,
    reviews: 512,
    inStock: true,
    featured: false
  },
  {
    id: 8,
    name: "Pirate's Eye Patch Collection",
    price: 79.99,
    description: "Look the part with this collection of authentic eye patches! Includes leather, silk, and the legendary cursed patch of Captain Redbeard. Warning: May cause temporary pirate accent.",
    category: "Pirate Attire",
    images: [
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&q=80",
      "https://images.unsplash.com/photo-1578761499019-d2d9c0b9caf8?w=500&q=80",
      "https://images.unsplash.com/photo-1594736797933-d0e3c2c8b6b7?w=500&q=80"
    ],
    rating: 4.5,
    reviews: 423,
    inStock: true,
    featured: false
  }
];

export const categories = [
  { name: "Treasure & Gold", count: 156 },
  { name: "Weapons & Arms", count: 89 },
  { name: "Pirate Attire", count: 234 },
  { name: "Navigation & Tools", count: 167 },
  { name: "Grog & Provisions", count: 98 },
  { name: "Mystical Items", count: 45 },
  { name: "Companions & Pets", count: 23 }
];