import React, { useState, useEffect } from "react";
import { ShoppingCart, Search, Menu, MapPin, ChevronDown, Plus, Minus, Trash2, Clock } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

// Types
interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
  unit: string;
  time: string;
}

interface CartItem extends Product {
  productId: number;
  quantity: number;
}

const CATEGORIES = [
  { name: "Paan", image: "https://picsum.photos/seed/paan/100/100" },
  { name: "Dairy, Bread", image: "https://picsum.photos/seed/dairy/100/100" },
  { name: "Fruits & Veg", image: "https://picsum.photos/seed/fruits/100/100" },
  { name: "Cold Drinks", image: "https://picsum.photos/seed/drinks/100/100" },
  { name: "Snacks & Munchies", image: "https://picsum.photos/seed/snacks/100/100" },
  { name: "Breakfast & Instant", image: "https://picsum.photos/seed/breakfast/100/100" },
  { name: "Sweet Tooth", image: "https://picsum.photos/seed/sweet/100/100" },
  { name: "Bakery & Biscuits", image: "https://picsum.photos/seed/bakery/100/100" },
  { name: "Tea, Coffee & Health", image: "https://picsum.photos/seed/tea/100/100" },
  { name: "Atta, Rice & Dal", image: "https://picsum.photos/seed/rice/100/100" },
];

export default function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  const fetchProducts = async () => {
    const res = await fetch("/api/products");
    const data = await res.json();
    setProducts(data);
  };

  const fetchCart = async () => {
    const res = await fetch("/api/cart");
    const data = await res.json();
    setCart(data);
  };

  const addToCart = async (productId: number, quantity: number) => {
    const res = await fetch("/api/cart", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ productId, quantity }),
    });
    const data = await res.json();
    setCart(data);
  };

  const removeFromCart = async (productId: number) => {
    const res = await fetch(`/api/cart/${productId}`, {
      method: "DELETE",
    });
    const data = await res.json();
    setCart(data);
  };

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const filteredProducts = products.filter(p => 
    p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const categoriesInProducts = Array.from(new Set(products.map(p => p.category)));

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
        <div className="max-w-[1280px] mx-auto px-4 h-20 flex items-center gap-4">
          {/* Logo */}
          <div className="flex-shrink-0 pr-6 border-r border-gray-100">
            <h1 className="text-3xl font-black text-yellow-400 tracking-tighter italic">blink<span className="text-green-600">it</span></h1>
          </div>

          {/* Location */}
          <div className="flex flex-col cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors">
            <span className="text-sm font-black">Delivery in 18 minutes</span>
            <div className="flex items-center gap-1">
              <span className="text-xs text-gray-600 truncate max-w-[150px]">NH-05, Ludhiana - Chandigarh ...</span>
              <ChevronDown size={14} />
            </div>
          </div>

          {/* Search */}
          <div className="flex-grow relative mx-4">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
              <Search size={18} />
            </div>
            <input 
              type="text" 
              placeholder='Search "egg"'
              className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 pl-12 pr-4 outline-none focus:bg-white focus:ring-1 focus:ring-green-500 transition-all"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Login */}
          <button className="text-lg font-medium px-4 hover:text-green-600 transition-colors">Login</button>

          {/* Cart Button */}
          <button 
            onClick={() => setIsCartOpen(true)}
            className="flex items-center gap-2 bg-green-700 text-white px-4 py-3 rounded-xl font-bold hover:bg-green-800 transition-colors"
          >
            <ShoppingCart size={20} />
            <span className="text-sm">
              {totalItems > 0 ? `${totalItems} items • ₹${totalPrice}` : "My Cart"}
            </span>
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-[1280px] mx-auto px-4 py-6">
        {/* Hero Banner */}
        <div className="relative w-full aspect-[1280/300] rounded-3xl overflow-hidden mb-8">
          <img 
            src="https://picsum.photos/seed/blinkit-hero/1280/300" 
            alt="Hero Banner" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/60 to-transparent flex flex-col justify-center px-12 text-white">
            <h2 className="text-5xl font-black mb-4 leading-tight">Stock up on daily essentials</h2>
            <p className="text-xl mb-6 opacity-90">Get farm-fresh goodness & a range of exotic<br/>fruits, vegetables, eggs & more</p>
            <button className="bg-white text-black px-8 py-3 rounded-xl font-bold w-fit hover:bg-gray-100 transition-colors">Shop Now</button>
          </div>
        </div>

        {/* Secondary Banners */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[
            { title: "Pharmacy at your doorstep!", color: "bg-cyan-500", img: "https://picsum.photos/seed/pharmacy/400/200" },
            { title: "Pet care supplies at your door", color: "bg-yellow-400", img: "https://picsum.photos/seed/petcare/400/200" },
            { title: "No time for a diaper run?", color: "bg-purple-400", img: "https://picsum.photos/seed/baby/400/200" }
          ].map((banner, i) => (
            <div key={i} className={`${banner.color} rounded-3xl p-6 relative overflow-hidden h-48 flex flex-col justify-between group cursor-pointer`}>
              <h3 className="text-2xl font-black text-white z-10 leading-tight w-2/3">{banner.title}</h3>
              <button className="bg-black text-white px-4 py-2 rounded-lg text-xs font-bold w-fit z-10">Order Now</button>
              <img src={banner.img} className="absolute right-0 bottom-0 w-1/2 h-full object-contain group-hover:scale-110 transition-transform" referrerPolicy="no-referrer" />
            </div>
          ))}
        </div>

        {/* Category Icons */}
        <div className="grid grid-cols-5 md:grid-cols-10 gap-4 mb-12">
          {CATEGORIES.map((cat, i) => (
            <div key={i} className="flex flex-col items-center gap-2 cursor-pointer group">
              <div className="w-full aspect-square rounded-2xl bg-gray-50 overflow-hidden group-hover:shadow-md transition-shadow">
                <img src={cat.image} alt={cat.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <span className="text-[11px] font-bold text-center leading-tight text-gray-700">{cat.name}</span>
            </div>
          ))}
        </div>

        {/* Product Sections */}
        {categoriesInProducts.map(category => {
          const categoryProducts = filteredProducts.filter(p => p.category === category);
          if (categoryProducts.length === 0) return null;

          return (
            <section key={category} className="mb-12">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-black tracking-tight">{category}</h2>
                <button className="text-green-600 font-bold hover:underline">see all</button>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {categoryProducts.map(product => {
                  const cartItem = cart.find(item => item.productId === product.id);
                  return (
                    <motion.div 
                      layout
                      key={product.id} 
                      className="bg-white rounded-xl border border-gray-100 p-3 hover:shadow-lg transition-shadow group flex flex-col"
                    >
                      <div className="aspect-square mb-3 overflow-hidden rounded-lg bg-gray-50">
                        <img 
                          src={product.image} 
                          alt={product.name} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div className="flex-grow">
                        <div className="flex items-center gap-1 mb-1 text-[10px] font-bold text-gray-500">
                          <Clock size={10} />
                          <span>{product.time}</span>
                        </div>
                        <h3 className="font-bold text-sm mb-1 line-clamp-2 leading-tight h-9">{product.name}</h3>
                        <p className="text-xs text-gray-400 mb-3">{product.unit}</p>
                      </div>
                      <div className="flex items-center justify-between mt-auto">
                        <span className="font-bold text-sm">₹{product.price}</span>
                        
                        {cartItem ? (
                          <div className="flex items-center bg-green-700 text-white rounded-lg overflow-hidden">
                            <button 
                              onClick={() => addToCart(product.id, -1)}
                              className="p-1.5 hover:bg-green-800 transition-colors"
                            >
                              <Minus size={12} />
                            </button>
                            <span className="px-2 font-bold text-sm">{cartItem.quantity}</span>
                            <button 
                              onClick={() => addToCart(product.id, 1)}
                              className="p-1.5 hover:bg-green-800 transition-colors"
                            >
                              <Plus size={12} />
                            </button>
                          </div>
                        ) : (
                          <button 
                            onClick={() => addToCart(product.id, 1)}
                            className="border border-green-600 text-green-600 px-4 py-1.5 rounded-lg font-bold text-xs hover:bg-green-50 transition-colors"
                          >
                            ADD
                          </button>
                        )}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </section>
          );
        })}
      </main>

      {/* Cart Sidebar */}
      <AnimatePresence>
        {isCartOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsCartOpen(false)}
              className="fixed inset-0 bg-black/40 z-[60] backdrop-blur-sm"
            />
            <motion.div 
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-white z-[70] shadow-2xl flex flex-col"
            >
              <div className="p-6 border-b border-gray-100 flex items-center justify-between">
                <h2 className="text-xl font-black tracking-tight">My Cart</h2>
                <button 
                  onClick={() => setIsCartOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <ChevronDown size={24} className="rotate-270" />
                </button>
              </div>

              <div className="flex-grow overflow-y-auto p-6 space-y-4 bg-gray-50">
                {cart.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-center">
                    <div className="w-48 h-48 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm">
                      <ShoppingCart size={64} className="text-gray-200" />
                    </div>
                    <h3 className="text-lg font-bold mb-2">Your cart is empty</h3>
                    <p className="text-gray-400 text-sm max-w-[200px]">Add items to get started with your order</p>
                  </div>
                ) : (
                  cart.map(item => (
                    <div key={item.productId} className="bg-white p-4 rounded-2xl border border-gray-100 flex gap-4 shadow-sm">
                      <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-lg bg-gray-50" referrerPolicy="no-referrer" />
                      <div className="flex-grow">
                        <h4 className="font-bold text-sm mb-1">{item.name}</h4>
                        <p className="text-xs text-gray-400 mb-2">{item.unit}</p>
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-sm">₹{item.price * item.quantity}</span>
                          <div className="flex items-center bg-green-700 text-white rounded-lg overflow-hidden">
                            <button onClick={() => addToCart(item.productId, -1)} className="p-1 hover:bg-green-800"><Minus size={12} /></button>
                            <span className="px-2 font-bold text-xs">{item.quantity}</span>
                            <button onClick={() => addToCart(item.productId, 1)} className="p-1 hover:bg-green-800"><Plus size={12} /></button>
                          </div>
                        </div>
                      </div>
                      <button 
                        onClick={() => removeFromCart(item.productId)}
                        className="text-gray-300 hover:text-red-500 transition-colors"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  ))
                )}
              </div>

              {cart.length > 0 && (
                <div className="bg-white p-6 border-t border-gray-100 space-y-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Item Total</span>
                    <span className="font-bold">₹{totalPrice}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Delivery Charge</span>
                    <span className="text-green-600 font-bold">FREE</span>
                  </div>
                  <div className="flex items-center justify-between text-lg font-black border-t border-gray-100 pt-4">
                    <span>Grand Total</span>
                    <span>₹{totalPrice}</span>
                  </div>
                  <button className="w-full bg-green-700 text-white py-4 rounded-2xl font-black text-lg hover:bg-green-800 transition-all shadow-lg shadow-green-100">
                    Proceed to Checkout
                  </button>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
