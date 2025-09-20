import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingCart, ArrowRight, Compass, Ship, Shield, Headphones, Anchor } from 'lucide-react';
import { products, categories } from '../data/products';
import { useCart } from '../context/CartContext';

const HomePage: React.FC = () => {
  const { addToCart } = useCart();
  const featuredProducts = products.filter(product => product.featured);

  const handleAddToCart = (product: any) => {
    addToCart(product);
  };

  return (
    <div className="animate-fade-in pirate-bg min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-pirate-dark-black via-pirate-red to-pirate-dark-black text-pirate-cream py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-pirate-pattern opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                <span className="pirate-title block text-6xl md:text-8xl animate-treasure-glow">Ahoy Matey!</span>
                <span className="block text-pirate-gold text-3xl md:text-5xl">Welcome to the</span>
                <span className="block text-pirate-cream">Greatest Treasure Trove</span>
              </h1>
              <p className="text-xl text-pirate-cream/90 mb-8 leading-relaxed">
                🏴‍☠️ Avast ye landlubbers! Discover the finest collection of pirate treasures, 
                weapons, and mystical artifacts from across the seven seas. Every scallywag 
                deserves the best loot! ⚔️
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="btn-treasure flex items-center justify-center">
                  🏴‍☠️ Start Plunderin'!
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
                <button className="btn-secondary flex items-center justify-center">
                  📜 Read Our Tales
                </button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&q=80" 
                alt="Pirate Treasure"
                className="rounded-2xl shadow-2xl border-4 border-pirate-gold"
              />
              <div className="absolute -bottom-6 -left-6 card-treasure p-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-pirate-gold rounded-full flex items-center justify-center skull-icon">
                    <span className="text-pirate-black text-2xl">💰</span>
                  </div>
                  <div>
                    <p className="font-bold text-pirate-gold text-lg">100% Authentic</p>
                    <p className="text-sm text-pirate-cream">Cursed Guarantee!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-pirate-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-pirate-gold to-pirate-dark-gold rounded-full flex items-center justify-center mx-auto mb-4 group-hover:animate-treasure-glow transition-all duration-300">
                <Ship className="w-8 h-8 text-pirate-black" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-pirate-gold">Free Ship Delivery</h3>
              <p className="text-pirate-cream">Free delivery by pirate ship to all ports over 100 doubloons!</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-pirate-gold to-pirate-dark-gold rounded-full flex items-center justify-center mx-auto mb-4 group-hover:animate-treasure-glow transition-all duration-300">
                <Shield className="w-8 h-8 text-pirate-black" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-pirate-gold">Cursed Protection</h3>
              <p className="text-pirate-cream">All payments protected by ancient pirate curses and modern encryption!</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-pirate-gold to-pirate-dark-gold rounded-full flex items-center justify-center mx-auto mb-4 group-hover:animate-treasure-glow transition-all duration-300">
                <Headphones className="w-8 h-8 text-pirate-black" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-pirate-gold">Crew Support</h3>
              <p className="text-pirate-cream">Our pirate crew be available 24/7 to help ye find the perfect treasure!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-gradient-to-br from-pirate-dark-brown to-pirate-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold pirate-title mb-4">🏴‍☠️ Treasure Categories 🏴‍☠️</h2>
            <p className="text-xl text-pirate-cream">Discover yer perfect plunder from our vast collection!</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="card-treasure p-6 text-center hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-pirate-gold to-pirate-dark-gold rounded-full flex items-center justify-center mx-auto mb-4 group-hover:animate-treasure-glow transition-all duration-300">
                    <Compass className="w-8 h-8 text-pirate-black" />
                  </div>
                  <h3 className="font-bold text-pirate-gold mb-1">{category.name}</h3>
                  <p className="text-sm text-pirate-cream">{category.count} treasures</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-pirate-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-4xl font-bold pirate-title mb-4">⚡ Featured Treasures ⚡</h2>
              <p className="text-xl text-pirate-cream">Hand-picked by Captain Blackbeard himself!</p>
            </div>
            <button className="treasure-text font-bold flex items-center hover:text-pirate-cream transition-colors duration-200">
              View All Loot
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <div key={product.id} className="card-treasure group animate-slide-up">
                <div className="relative overflow-hidden">
                  <img 
                    src={product.images[0]} 
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {product.originalPrice && (
                    <div className="absolute top-4 left-4 bg-pirate-red text-pirate-cream px-3 py-1 rounded-md text-sm font-bold animate-treasure-glow">
                      🔥 PLUNDER SALE! 🔥
                    </div>
                  )}
                  <button 
                    onClick={() => handleAddToCart(product)}
                    className="absolute bottom-4 right-4 bg-pirate-gold text-pirate-black p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-pirate-dark-gold hover:scale-110 font-bold"
                  >
                    <ShoppingCart className="w-5 h-5" />
                  </button>
                </div>
                
                <div className="p-6 bg-gradient-to-br from-pirate-brown to-pirate-dark-brown">
                  <div className="flex items-center mb-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-pirate-gold fill-current' : 'text-pirate-cream/30'}`} 
                        />
                      ))}
                    </div>
                    <span className="text-sm text-pirate-cream/80 ml-2">({product.reviews} reviews)</span>
                  </div>
                  
                  <Link to={`/product/${product.id}`}>
                    <h3 className="font-bold text-pirate-gold mb-2 hover:text-pirate-cream transition-colors duration-200 text-lg">
                      {product.name}
                    </h3>
                  </Link>
                  
                  <p className="text-pirate-cream/80 text-sm mb-4 line-clamp-2">
                    {product.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold text-pirate-gold">
                        ${product.price}
                      </span>
                      {product.originalPrice && (
                        <span className="text-lg text-pirate-cream/60 line-through">
                          ${product.originalPrice}
                        </span>
                      )}
                    </div>
                    <span className={`text-sm px-3 py-1 rounded-full font-bold ${product.inStock ? 'text-pirate-black bg-pirate-gold' : 'text-pirate-cream bg-pirate-red'}`}>
                      {product.inStock ? '⚡ In Stock!' : '💀 Plundered!'}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gradient-to-r from-pirate-red to-pirate-dark-red text-pirate-cream relative overflow-hidden">
        <div className="absolute inset-0 bg-pirate-pattern opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h2 className="text-4xl font-bold pirate-title mb-4">🏴‍☠️ Join Our Pirate Crew! 🏴‍☠️</h2>
            <p className="text-xl text-pirate-cream/90 mb-8">
              Subscribe to our treasure map for exclusive deals, new loot arrivals, and secret pirate codes!
            </p>
            <div className="max-w-md mx-auto flex">
              <input 
                type="email" 
                placeholder="Enter yer email, matey..."
                className="flex-1 px-6 py-3 rounded-l-lg text-pirate-black bg-pirate-cream focus:outline-none focus:ring-2 focus:ring-pirate-gold font-medium"
              />
              <button className="bg-pirate-gold px-8 py-3 rounded-r-lg font-bold text-pirate-black hover:bg-pirate-dark-gold transition-colors duration-200">
                🏴‍☠️ Join Crew!
              </button>
            </div>
            <p className="text-sm text-pirate-cream/80 mt-4">
              * No spam, just treasure! Unsubscribe anytime, ye scallywag! 
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;