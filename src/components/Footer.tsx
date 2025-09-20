import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin, Anchor } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-pirate-dark-black text-pirate-cream border-t-4 border-pirate-gold">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-pirate-gold to-pirate-dark-gold rounded-full flex items-center justify-center animate-treasure-glow">
                <span className="text-pirate-black font-bold text-lg skull-icon">💀</span>
              </div>
              <div>
                <span className="text-xl font-bold pirate-title">Blackbeard's</span>
                <div className="text-sm text-pirate-gold font-bold">Treasure Emporium</div>
              </div>
            </div>
            <p className="text-pirate-cream/80 mb-4">
              🏴‍☠️ Yer most trusted source for authentic pirate treasures, mystical artifacts, 
              and the finest plunder from across the seven seas! Arrr!
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-pirate-gold hover:text-pirate-cream transition-colors duration-200 hover:animate-treasure-glow">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-pirate-gold hover:text-pirate-cream transition-colors duration-200 hover:animate-treasure-glow">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-pirate-gold hover:text-pirate-cream transition-colors duration-200 hover:animate-treasure-glow">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-pirate-gold hover:text-pirate-cream transition-colors duration-200 hover:animate-treasure-glow">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-pirate-gold">⚓ Quick Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-pirate-cream hover:text-pirate-gold transition-colors duration-200 flex items-center space-x-2">
                  <Anchor className="w-4 h-4" />
                  <span>Port (Home)</span>
                </Link>
              </li>
              <li>
                <a href="#" className="text-pirate-cream hover:text-pirate-gold transition-colors duration-200">
                  📜 About Our Crew
                </a>
              </li>
              <li>
                <a href="#" className="text-pirate-cream hover:text-pirate-gold transition-colors duration-200">
                  💰 All Treasures
                </a>
              </li>
              <li>
                <a href="#" className="text-pirate-cream hover:text-pirate-gold transition-colors duration-200">
                  📞 Contact Captain
                </a>
              </li>
              <li>
                <a href="#" className="text-pirate-cream hover:text-pirate-gold transition-colors duration-200">
                  📰 Pirate Chronicles
                </a>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-pirate-gold">🏴‍☠️ Pirate Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-pirate-cream hover:text-pirate-gold transition-colors duration-200">
                  🆘 Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-pirate-cream hover:text-pirate-gold transition-colors duration-200">
                  🔄 Returns & Exchanges
                </a>
              </li>
              <li>
                <a href="#" className="text-pirate-cream hover:text-pirate-gold transition-colors duration-200">
                  🚢 Shipping Info
                </a>
              </li>
              <li>
                <a href="#" className="text-pirate-cream hover:text-pirate-gold transition-colors duration-200">
                  📏 Treasure Size Guide
                </a>
              </li>
              <li>
                <a href="#" className="text-pirate-cream hover:text-pirate-gold transition-colors duration-200">
                  🗺️ Track Yer Loot
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-pirate-gold">📞 Contact Our Crew</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-pirate-gold" />
                <span className="text-pirate-cream">+1 (555) PIRATE-1</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-pirate-gold" />
                <span className="text-pirate-cream">ahoy@blackbeardstreasure.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-pirate-gold" />
                <span className="text-pirate-cream">Tortuga Bay, Caribbean Sea 🏴‍☠️</span>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-pirate-red/20 rounded-lg border border-pirate-gold">
              <h4 className="font-bold text-pirate-gold mb-2">⚡ Pirate Promise ⚡</h4>
              <p className="text-sm text-pirate-cream">
                All treasures come with a 30-day curse-back guarantee! 
                If ye not satisfied, we'll refund yer doubloons!
              </p>
            </div>
          </div>
        </div>

        <div className="border-t-2 border-pirate-gold mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-pirate-cream/80 text-sm">
              © 2024 Blackbeard's Treasure Emporium. All treasures reserved. ⚔️
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-pirate-cream hover:text-pirate-gold text-sm transition-colors duration-200">
                🔒 Privacy Policy
              </a>
              <a href="#" className="text-pirate-cream hover:text-pirate-gold text-sm transition-colors duration-200">
                📜 Terms of Service
              </a>
              <a href="#" className="text-pirate-cream hover:text-pirate-gold text-sm transition-colors duration-200">
                🍪 Cookie Policy
              </a>
            </div>
          </div>
          
          <div className="text-center mt-6 text-pirate-gold/60 text-sm">
            <p>🏴‍☠️ "Not all treasure is silver and gold, mate." - Captain Jack Sparrow 🏴‍☠️</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;