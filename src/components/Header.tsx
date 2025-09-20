import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, ShoppingCart, User, Heart, Menu, Compass, Anchor } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Header: React.FC = () => {
  const { getTotalItems } = useCart();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = React.useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would implement search functionality
    console.log('Searching for treasure:', searchQuery);
  };

  return (
    <header className="bg-pirate-black shadow-2xl border-b-4 border-pirate-gold sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-pirate-red text-pirate-cream py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-sm font-bold">
            <span>⚡ Free shipping to all seven seas! ⚡</span>
            <div className="flex items-center space-x-4">
              <span>🏴‍☠️ 24/7 Pirate Support</span>
              <span>|</span>
              <span>🗺️ Track Yer Treasure</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 bg-gradient-to-br from-pirate-gold to-pirate-dark-gold rounded-full flex items-center justify-center shadow-lg group-hover:animate-treasure-glow transition-all duration-300">
              <span className="text-pirate-black font-bold text-xl skull-icon">💀</span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold pirate-title">Blackbeard's</span>
              <span className="text-sm text-pirate-gold font-bold">Treasure Emporium</span>
            </div>
          </Link>

          {/* Search bar */}
          <div className="flex-1 max-w-2xl mx-8">
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for treasure, weapons, and mystical artifacts..."
                className="w-full pl-12 pr-4 py-3 bg-pirate-dark-black border-2 border-pirate-gold rounded-full focus:outline-none focus:ring-2 focus:ring-pirate-gold focus:border-pirate-gold text-pirate-cream placeholder-pirate-cream/60"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-pirate-gold w-5 h-5" />
              <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-pirate-gold text-pirate-black px-4 py-1.5 rounded-full hover:bg-pirate-dark-gold transition-colors duration-200 font-bold"
              >
                Hunt!
              </button>
            </form>
          </div>

          {/* Right side icons */}
          <div className="flex items-center space-x-6">
            <button className="p-2 text-pirate-gold hover:text-pirate-cream transition-colors duration-200 relative group">
              <Heart className="w-6 h-6" />
              <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-pirate-black text-pirate-gold text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                Wishlist
              </span>
            </button>
            
            <button className="p-2 text-pirate-gold hover:text-pirate-cream transition-colors duration-200 relative group">
              <User className="w-6 h-6" />
              <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-pirate-black text-pirate-gold text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                Crew
              </span>
            </button>
            
            <Link 
              to="/cart" 
              className="relative p-2 text-pirate-gold hover:text-pirate-cream transition-colors duration-200 group"
            >
              <ShoppingCart className="w-6 h-6" />
              {getTotalItems() > 0 && (
                <span className="absolute -top-1 -right-1 bg-pirate-red text-pirate-cream text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold animate-treasure-glow">
                  {getTotalItems()}
                </span>
              )}
              <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-pirate-black text-pirate-gold text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                Loot Bag
              </span>
            </Link>

            <button className="md:hidden p-2 text-pirate-gold hover:text-pirate-cream transition-colors duration-200">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-pirate-dark-black border-t-2 border-pirate-gold">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center space-x-8 py-4">
            <Link to="/" className="text-pirate-cream hover:text-pirate-gold font-bold transition-colors duration-200 flex items-center space-x-1">
              <Anchor className="w-4 h-4" />
              <span>Port</span>
            </Link>
            <button className="text-pirate-cream hover:text-pirate-gold font-bold transition-colors duration-200">
              ⚔️ Weapons & Arms
            </button>
            <button className="text-pirate-cream hover:text-pirate-gold font-bold transition-colors duration-200">
              👑 Pirate Attire
            </button>
            <button className="text-pirate-cream hover:text-pirate-gold font-bold transition-colors duration-200">
              💰 Treasure & Gold
            </button>
            <button className="text-pirate-cream hover:text-pirate-gold font-bold transition-colors duration-200">
              🧭 Navigation & Tools
            </button>
            <button className="text-pirate-cream hover:text-pirate-gold font-bold transition-colors duration-200">
              🍺 Grog & Provisions
            </button>
            <button className="text-pirate-cream hover:text-pirate-gold font-bold transition-colors duration-200">
              🔮 Mystical Items
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;