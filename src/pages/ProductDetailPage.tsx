import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ShoppingCart, Heart, Share2, Ship, Shield, RotateCcw, ChevronLeft, ChevronRight, Plus, Minus } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { Product } from '../types';

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useCart();
  const [product, setProduct] = useState<Product | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');

  useEffect(() => {
    const foundProduct = products.find(p => p.id === Number(id));
    setProduct(foundProduct || null);
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen pirate-bg flex items-center justify-center">
        <div className="text-center card-treasure p-8">
          <h2 className="text-2xl font-bold pirate-title mb-4">💀 Treasure Not Found! 💀</h2>
          <p className="text-pirate-cream mb-4">This treasure has been plundered already, matey!</p>
          <Link to="/" className="btn-treasure">
            ⚓ Return to Port
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  const nextImage = () => {
    setSelectedImageIndex((prev) => 
      prev === product.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setSelectedImageIndex((prev) => 
      prev === 0 ? product.images.length - 1 : prev - 1
    );
  };

  const relatedProducts = products.filter(p => 
    p.category === product.category && p.id !== product.id
  ).slice(0, 4);

  return (
    <div className="min-h-screen pirate-bg">
      {/* Breadcrumb */}
      <div className="bg-pirate-black border-b-2 border-pirate-gold">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center space-x-2 text-sm">
            <Link to="/" className="text-pirate-cream hover:text-pirate-gold">⚓ Port</Link>
            <span className="text-pirate-gold">/</span>
            <span className="text-pirate-cream">{product.category}</span>
            <span className="text-pirate-gold">/</span>
            <span className="text-pirate-gold font-bold">{product.name}</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="relative card-treasure overflow-hidden">
              <img 
                src={product.images[selectedImageIndex]} 
                alt={product.name}
                className="w-full h-96 lg:h-[500px] object-cover"
              />
              
              {product.images.length > 1 && (
                <>
                  <button 
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-pirate-gold text-pirate-black p-2 rounded-full shadow-lg hover:bg-pirate-dark-gold transition-colors duration-200"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button 
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-pirate-gold text-pirate-black p-2 rounded-full shadow-lg hover:bg-pirate-dark-gold transition-colors duration-200"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}

              {product.originalPrice && (
                <div className="absolute top-4 left-4 bg-pirate-red text-pirate-cream px-3 py-1 rounded-md font-bold animate-treasure-glow">
                  🔥 PLUNDER SALE! 🔥
                </div>
              )}
            </div>

            {/* Thumbnail Images */}
            {product.images.length > 1 && (
              <div className="flex space-x-2 overflow-x-auto">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImageIndex(index)}
                    className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors duration-200 ${
                      selectedImageIndex === index 
                        ? 'border-pirate-gold animate-treasure-glow' 
                        : 'border-pirate-cream hover:border-pirate-gold'
                    }`}
                  >
                    <img 
                      src={image} 
                      alt={`${product.name} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-6 card-treasure p-8">
            <div>
              <h1 className="text-3xl font-bold text-pirate-gold mb-2 pirate-title">{product.name}</h1>
              
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'text-pirate-gold fill-current' : 'text-pirate-cream/30'}`} 
                    />
                  ))}
                  <span className="ml-2 text-pirate-cream">({product.reviews} pirate reviews)</span>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm font-bold ${
                  product.inStock 
                    ? 'text-pirate-black bg-pirate-gold animate-treasure-glow' 
                    : 'text-pirate-cream bg-pirate-red'
                }`}>
                  {product.inStock ? '⚡ Ready to Plunder!' : '💀 Already Plundered!'}
                </span>
              </div>

              <div className="flex items-center space-x-4 mb-6">
                <span className="text-3xl font-bold text-pirate-gold">${product.price}</span>
                {product.originalPrice && (
                  <>
                    <span className="text-2xl text-pirate-cream/60 line-through">${product.originalPrice}</span>
                    <span className="bg-pirate-red text-pirate-cream px-2 py-1 rounded-md text-sm font-bold animate-treasure-glow">
                      🔥 {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF! 🔥
                    </span>
                  </>
                )}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-3 text-pirate-gold">📜 Treasure Description</h3>
              <p className="text-pirate-cream leading-relaxed">{product.description}</p>
            </div>

            {/* Size Selection (for fashion items) */}
            {product.category === 'Pirate Attire' && (
              <div>
                <h3 className="text-lg font-bold mb-3 text-pirate-gold">⚔️ Size</h3>
                <div className="flex space-x-2">
                  {['XS', 'S', 'M', 'L', 'XL'].map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-4 py-2 border-2 rounded-lg font-bold transition-all duration-200 ${
                        selectedSize === size
                          ? 'border-pirate-gold bg-pirate-gold text-pirate-black'
                          : 'border-pirate-cream text-pirate-cream hover:border-pirate-gold hover:text-pirate-gold'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div>
              <h3 className="text-lg font-bold mb-3 text-pirate-gold">💰 Quantity</h3>
              <div className="flex items-center space-x-4">
                <div className="flex items-center border-2 border-pirate-gold rounded-lg bg-pirate-black">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2 hover:bg-pirate-gold hover:text-pirate-black transition-colors duration-200 text-pirate-gold font-bold"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="px-4 py-2 font-bold text-pirate-gold">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-2 hover:bg-pirate-gold hover:text-pirate-black transition-colors duration-200 text-pirate-gold font-bold"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4">
              <button
                onClick={handleAddToCart}
                disabled={!product.inStock}
                className="w-full btn-treasure disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                <ShoppingCart className="w-5 h-5 mr-2" />
                🏴‍☠️ Add to Loot Bag
              </button>
              
              <div className="flex space-x-4">
                <button className="flex-1 btn-secondary flex items-center justify-center">
                  <Heart className="w-5 h-5 mr-2" />
                  💖 Add to Wishlist
                </button>
                <button className="flex-1 btn-secondary flex items-center justify-center">
                  <Share2 className="w-5 h-5 mr-2" />
                  🗣️ Share Treasure
                </button>
              </div>
            </div>

            {/* Features */}
            <div className="border-t-2 border-pirate-gold pt-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Ship className="w-5 h-5 text-pirate-gold" />
                  <span className="text-pirate-cream">🚢 Free ship delivery to all ports over 100 doubloons!</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="w-5 h-5 text-pirate-gold" />
                  <span className="text-pirate-cream">🛡️ 2-year cursed protection included!</span>
                </div>
                <div className="flex items-center space-x-3">
                  <RotateCcw className="w-5 h-5 text-pirate-gold" />
                  <span className="text-pirate-cream">🔄 30-day curse-back guarantee!</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16">
            <h2 className="text-3xl font-bold pirate-title mb-8">🏴‍☠️ Related Treasures 🏴‍☠️</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <Link key={relatedProduct.id} to={`/product/${relatedProduct.id}`}>
                  <div className="card-treasure group">
                    <div className="relative overflow-hidden">
                      <img 
                        src={relatedProduct.images[0]} 
                        alt={relatedProduct.name}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4 bg-gradient-to-br from-pirate-brown to-pirate-dark-brown">
                      <h3 className="font-bold text-pirate-gold mb-2 group-hover:text-pirate-cream transition-colors duration-200">
                        {relatedProduct.name}
                      </h3>
                      <div className="flex items-center justify-between">
                        <span className="text-lg font-bold text-pirate-gold">
                          ${relatedProduct.price}
                        </span>
                        <div className="flex items-center">
                          <Star className="w-4 h-4 text-pirate-gold fill-current" />
                          <span className="text-sm text-pirate-cream ml-1">
                            {relatedProduct.rating}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetailPage;