import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus, ShoppingBag, CreditCard, Ship, Shield, ArrowLeft } from 'lucide-react';
import { useCart } from '../context/CartContext';

const CartPage: React.FC = () => {
  const { items, updateQuantity, removeFromCart, getTotalPrice, getTotalItems, clearCart } = useCart();
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [showCheckoutForm, setShowCheckoutForm] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    zipCode: '',
    cardNumber: '',
    expiryDate: '',
    cvv: ''
  });

  const handleQuantityChange = (productId: number, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeFromCart(productId);
    } else {
      updateQuantity(productId, newQuantity);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleCheckout = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsCheckingOut(true);
    
    // Simulate API call
    setTimeout(() => {
      alert('🏴‍☠️ Arrr! Yer order be placed successfully! The treasure will be delivered by our finest pirate ship! 🚢');
      clearCart();
      setIsCheckingOut(false);
      setShowCheckoutForm(false);
    }, 2000);
  };

  const subtotal = getTotalPrice();
  const shipping = subtotal > 100 ? 0 : 9.99;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  if (items.length === 0) {
    return (
      <div className="min-h-screen pirate-bg py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center card-treasure p-12">
            <div className="text-6xl mb-6 skull-icon">💀</div>
            <ShoppingBag className="w-24 h-24 text-pirate-gold mx-auto mb-6 animate-treasure-glow" />
            <h2 className="text-3xl font-bold pirate-title mb-4">Yer Loot Bag Be Empty!</h2>
            <p className="text-xl text-pirate-cream mb-8">
              Arrr! Ye haven't plundered any treasures yet, matey! Time to start lootin'!
            </p>
            <Link 
              to="/"
              className="btn-treasure inline-flex items-center"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              ⚓ Return to Port & Start Plunderin'!
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pirate-bg py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold pirate-title mb-2">🏴‍☠️ Yer Loot Bag 🏴‍☠️</h1>
          <p className="text-pirate-gold text-xl">{getTotalItems()} treasures ready for plunderin'!</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <div key={item.product.id} className="card-treasure p-6">
                <div className="flex items-center space-x-4">
                  <Link to={`/product/${item.product.id}`}>
                    <img 
                      src={item.product.images[0]} 
                      alt={item.product.name}
                      className="w-20 h-20 object-cover rounded-lg border-2 border-pirate-gold"
                    />
                  </Link>
                  
                  <div className="flex-1">
                    <Link 
                      to={`/product/${item.product.id}`}
                      className="text-lg font-bold text-pirate-gold hover:text-pirate-cream transition-colors duration-200"
                    >
                      {item.product.name}
                    </Link>
                    <p className="text-pirate-cream/80 text-sm mt-1">⚔️ {item.product.category}</p>
                    <div className="flex items-center space-x-4 mt-3">
                      <div className="flex items-center border-2 border-pirate-gold rounded-lg bg-pirate-black">
                        <button
                          onClick={() => handleQuantityChange(item.product.id, item.quantity - 1)}
                          className="p-1 hover:bg-pirate-gold hover:text-pirate-black transition-colors duration-200 text-pirate-gold"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="px-3 py-1 font-bold text-pirate-gold">{item.quantity}</span>
                        <button
                          onClick={() => handleQuantityChange(item.product.id, item.quantity + 1)}
                          className="p-1 hover:bg-pirate-gold hover:text-pirate-black transition-colors duration-200 text-pirate-gold"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                      
                      <button
                        onClick={() => removeFromCart(item.product.id)}
                        className="text-pirate-red hover:text-pirate-cream transition-colors duration-200 p-1 font-bold"
                        title="Remove from loot bag"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <div className="text-lg font-bold text-pirate-gold">
                      ${(item.product.price * item.quantity).toFixed(2)}
                    </div>
                    <div className="text-sm text-pirate-cream/80">
                      ${item.product.price} each
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="space-y-6">
            <div className="card-treasure p-6">
              <h2 className="text-xl font-bold pirate-title mb-4">💰 Treasure Summary</h2>
              
              <div className="space-y-3">
                <div className="flex justify-between text-pirate-cream">
                  <span>Subtotal ({getTotalItems()} treasures)</span>
                  <span className="font-bold">${subtotal.toFixed(2)}</span>
                </div>
                
                <div className="flex justify-between text-pirate-cream">
                  <span>🚢 Ship Delivery</span>
                  <span className="font-bold">
                    {shipping === 0 ? '⚡ Free!' : `$${shipping.toFixed(2)}`}
                  </span>
                </div>
                
                <div className="flex justify-between text-pirate-cream">
                  <span>⚖️ Pirate Tax</span>
                  <span className="font-bold">${tax.toFixed(2)}</span>
                </div>
                
                <div className="border-t-2 border-pirate-gold pt-3">
                  <div className="flex justify-between">
                    <span className="text-lg font-bold text-pirate-gold">Total Doubloons</span>
                    <span className="text-lg font-bold text-pirate-gold">${total.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => setShowCheckoutForm(true)}
                className="w-full btn-treasure mt-6 flex items-center justify-center"
              >
                <CreditCard className="w-5 h-5 mr-2" />
                🏴‍☠️ Proceed to Checkout
              </button>

              <div className="mt-6 space-y-3">
                <div className="flex items-center text-sm text-pirate-cream">
                  <Ship className="w-4 h-4 mr-2 text-pirate-gold" />
                  {shipping === 0 ? '🚢 Free ship delivery applied!' : '🚢 Free ship delivery on orders over 100 doubloons!'}
                </div>
                <div className="flex items-center text-sm text-pirate-cream">
                  <Shield className="w-4 h-4 mr-2 text-pirate-gold" />
                  🛡️ Secure checkout with cursed encryption
                </div>
              </div>
            </div>

            <Link 
              to="/"
              className="block text-center text-pirate-gold hover:text-pirate-cream font-bold transition-colors duration-200"
            >
              ← Continue Plunderin'
            </Link>
          </div>
        </div>

        {/* Checkout Modal */}
        {showCheckoutForm && (
          <div className="fixed inset-0 bg-pirate-dark-black bg-opacity-90 flex items-center justify-center p-4 z-50">
            <div className="card-treasure max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold pirate-title">🏴‍☠️ Checkout</h2>
                  <button
                    onClick={() => setShowCheckoutForm(false)}
                    className="text-pirate-gold hover:text-pirate-cream text-2xl font-bold"
                  >
                    ✕
                  </button>
                </div>

                <form onSubmit={handleCheckout} className="space-y-6">
                  {/* Contact Information */}
                  <div>
                    <h3 className="text-lg font-bold mb-4 text-pirate-gold">📧 Contact Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <input
                        type="email"
                        name="email"
                        placeholder="Email address"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="input-field"
                      />
                      <div></div>
                      <input
                        type="text"
                        name="firstName"
                        placeholder="First name"
                        required
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="input-field"
                      />
                      <input
                        type="text"
                        name="lastName"
                        placeholder="Last name"
                        required
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="input-field"
                      />
                    </div>
                  </div>

                  {/* Shipping Address */}
                  <div>
                    <h3 className="text-lg font-bold mb-4 text-pirate-gold">🗺️ Treasure Delivery Address</h3>
                    <div className="space-y-4">
                      <input
                        type="text"
                        name="address"
                        placeholder="Street address (or island coordinates)"
                        required
                        value={formData.address}
                        onChange={handleInputChange}
                        className="input-field"
                      />
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input
                          type="text"
                          name="city"
                          placeholder="City (or port)"
                          required
                          value={formData.city}
                          onChange={handleInputChange}
                          className="input-field"
                        />
                        <input
                          type="text"
                          name="zipCode"
                          placeholder="ZIP code"
                          required
                          value={formData.zipCode}
                          onChange={handleInputChange}
                          className="input-field"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Payment Information */}
                  <div>
                    <h3 className="text-lg font-bold mb-4 text-pirate-gold">💳 Payment Information</h3>
                    <div className="space-y-4">
                      <input
                        type="text"
                        name="cardNumber"
                        placeholder="Card number (or treasure map coordinates)"
                        required
                        value={formData.cardNumber}
                        onChange={handleInputChange}
                        className="input-field"
                      />
                      <div className="grid grid-cols-2 gap-4">
                        <input
                          type="text"
                          name="expiryDate"
                          placeholder="MM/YY"
                          required
                          value={formData.expiryDate}
                          onChange={handleInputChange}
                          className="input-field"
                        />
                        <input
                          type="text"
                          name="cvv"
                          placeholder="CVV"
                          required
                          value={formData.cvv}
                          onChange={handleInputChange}
                          className="input-field"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Order Summary */}
                  <div className="treasure-bg rounded-lg p-4 border-2 border-pirate-gold">
                    <h3 className="font-bold mb-3 text-pirate-gold">💰 Final Treasure Count</h3>
                    <div className="space-y-2 text-sm text-pirate-cream">
                      <div className="flex justify-between">
                        <span>Subtotal</span>
                        <span>${subtotal.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Ship Delivery</span>
                        <span>{shipping === 0 ? 'Free!' : `$${shipping.toFixed(2)}`}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Pirate Tax</span>
                        <span>${tax.toFixed(2)}</span>
                      </div>
                      <div className="border-t-2 border-pirate-gold pt-2 flex justify-between font-bold text-pirate-gold">
                        <span>Total Doubloons</span>
                        <span>${total.toFixed(2)}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex space-x-4">
                    <button
                      type="button"
                      onClick={() => setShowCheckoutForm(false)}
                      className="flex-1 btn-secondary"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={isCheckingOut}
                      className="flex-1 btn-treasure disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isCheckingOut ? '🏴‍☠️ Processing...' : `🏴‍☠️ Place Order - $${total.toFixed(2)}`}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;