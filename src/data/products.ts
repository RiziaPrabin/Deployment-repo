import { Product } from '../types';

export const products: Product[] = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    price: 299.99,
    originalPrice: 399.99,
    description: "Experience crystal-clear audio with our premium wireless headphones featuring active noise cancellation, 30-hour battery life, and premium comfort padding.",
    category: "Electronics",
    images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80",
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=500&q=80",
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=500&q=80"
    ],
    rating: 4.8,
    reviews: 1247,
    inStock: true,
    featured: true
  },
  {
    id: 2,
    name: "Luxury Smart Watch",
    price: 599.99,
    originalPrice: 799.99,
    description: "Stay connected in style with our luxury smart watch featuring health monitoring, GPS tracking, and premium materials.",
    category: "Electronics",
    images: [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80",
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500&q=80",
      "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=500&q=80"
    ],
    rating: 4.9,
    reviews: 892,
    inStock: true,
    featured: true
  },
  {
    id: 3,
    name: "Designer Leather Handbag",
    price: 449.99,
    description: "Crafted from premium Italian leather, this designer handbag combines elegance with functionality for the modern professional.",
    category: "Fashion",
    images: [
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&q=80",
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500&q=80",
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500&q=80"
    ],
    rating: 4.7,
    reviews: 456,
    inStock: true,
    featured: true
  },
  {
    id: 4,
    name: "Professional Camera Lens",
    price: 1299.99,
    description: "Capture stunning photos with this professional-grade camera lens featuring advanced optics and weather sealing.",
    category: "Electronics",
    images: [
      "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=500&q=80",
      "https://images.unsplash.com/photo-1617005082133-548c4dd27f35?w=500&q=80",
      "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=500&q=80"
    ],
    rating: 4.9,
    reviews: 234,
    inStock: true,
    featured: false
  },
  {
    id: 5,
    name: "Minimalist Desk Lamp",
    price: 149.99,
    originalPrice: 199.99,
    description: "Illuminate your workspace with this sleek, minimalist desk lamp featuring adjustable brightness and modern design.",
    category: "Home & Office",
    images: [
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&q=80",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&q=80",
      "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=500&q=80"
    ],
    rating: 4.6,
    reviews: 789,
    inStock: true,
    featured: false
  },
  {
    id: 6,
    name: "Premium Coffee Maker",
    price: 399.99,
    description: "Brew the perfect cup every time with this premium coffee maker featuring precise temperature control and multiple brewing options.",
    category: "Home & Office",
    images: [
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=500&q=80",
      "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=500&q=80",
      "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=500&q=80"
    ],
    rating: 4.8,
    reviews: 567,
    inStock: true,
    featured: true
  },
  {
    id: 7,
    name: "Wireless Charging Pad",
    price: 79.99,
    originalPrice: 99.99,
    description: "Charge your devices effortlessly with this premium wireless charging pad featuring fast charging technology.",
    category: "Electronics",
    images: [
      "https://images.unsplash.com/photo-1609081219090-a6d81d3085bf?w=500&q=80",
      "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=500&q=80",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&q=80"
    ],
    rating: 4.5,
    reviews: 1123,
    inStock: true,
    featured: false
  },
  {
    id: 8,
    name: "Luxury Sunglasses",
    price: 249.99,
    description: "Protect your eyes in style with these luxury sunglasses featuring polarized lenses and premium frames.",
    category: "Fashion",
    images: [
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&q=80",
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500&q=80",
      "https://images.unsplash.com/photo-1577803645773-f96470509666?w=500&q=80"
    ],
    rating: 4.7,
    reviews: 334,
    inStock: true,
    featured: false
  }
];

export const categories = [
  { name: "Electronics", count: 156 },
  { name: "Fashion", count: 89 },
  { name: "Home & Office", count: 234 },
  { name: "Sports & Outdoors", count: 167 },
  { name: "Beauty & Health", count: 98 },
  { name: "Books & Media", count: 45 }
];