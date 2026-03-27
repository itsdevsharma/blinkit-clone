const products = [
  // Dairy, Bread
  { id: 1, name: "Amul Taaza Toned Fresh Milk", price: 27, category: "Dairy, Bread", image: "https://picsum.photos/seed/milk/200/200", unit: "500 ml", time: "8 mins" },
  { id: 2, name: "Amul Gold Full Cream Milk", price: 35, category: "Dairy, Bread", image: "https://picsum.photos/seed/goldmilk/200/200", unit: "500 ml", time: "8 mins" },
  { id: 3, name: "Britannia White Bread", price: 40, category: "Dairy, Bread", image: "https://picsum.photos/seed/bread/200/200", unit: "400 g", time: "10 mins" },
  { id: 4, name: "Amul Butter", price: 56, category: "Dairy, Bread", image: "https://picsum.photos/seed/butter/200/200", unit: "100 g", time: "8 mins" },
  { id: 5, name: "Mother Dairy Dahi", price: 30, category: "Dairy, Bread", image: "https://picsum.photos/seed/dahi/200/200", unit: "400 g", time: "8 mins" },
  { id: 6, name: "Cheese Slices", price: 99, category: "Dairy, Bread", image: "https://picsum.photos/seed/cheese/200/200", unit: "200 g", time: "10 mins" },

  // Fruits & Veg
  { id: 7, name: "Fresh Bananas", price: 45, category: "Fruits & Veg", image: "https://picsum.photos/seed/banana/200/200", unit: "1 dozen", time: "12 mins" },
  { id: 8, name: "Onion", price: 35, category: "Fruits & Veg", image: "https://picsum.photos/seed/onion/200/200", unit: "1 kg", time: "12 mins" },
  { id: 9, name: "Tomato (Hybrid)", price: 30, category: "Fruits & Veg", image: "https://picsum.photos/seed/tomato/200/200", unit: "500 g", time: "12 mins" },
  { id: 10, name: "Potato", price: 32, category: "Fruits & Veg", image: "https://picsum.photos/seed/potato/200/200", unit: "1 kg", time: "12 mins" },
  { id: 11, name: "Green Apple", price: 160, category: "Fruits & Veg", image: "https://picsum.photos/seed/greenapple/200/200", unit: "4 pcs", time: "15 mins" },
  { id: 12, name: "Fresh Coriander", price: 15, category: "Fruits & Veg", image: "https://picsum.photos/seed/coriander/200/200", unit: "100 g", time: "12 mins" },

  // Cold Drinks
  { id: 13, name: "Coca-Cola", price: 40, category: "Cold Drinks", image: "https://picsum.photos/seed/cola/200/200", unit: "750 ml", time: "10 mins" },
  { id: 14, name: "Sprite", price: 40, category: "Cold Drinks", image: "https://picsum.photos/seed/sprite/200/200", unit: "750 ml", time: "10 mins" },
  { id: 15, name: "Maaza Mango Drink", price: 25, category: "Cold Drinks", image: "https://picsum.photos/seed/maaza/200/200", unit: "250 ml", time: "10 mins" },
  { id: 16, name: "Paper Boat Aamras", price: 30, category: "Cold Drinks", image: "https://picsum.photos/seed/paperboat/200/200", unit: "200 ml", time: "10 mins" },
  { id: 17, name: "Red Bull Energy Drink", price: 115, category: "Cold Drinks", image: "https://picsum.photos/seed/redbull/200/200", unit: "250 ml", time: "10 mins" },
  { id: 18, name: "Bisleri Water", price: 20, category: "Cold Drinks", image: "https://picsum.photos/seed/water/200/200", unit: "1 L", time: "8 mins" },

  // Snacks & Munchies
  { id: 19, name: "Lay's Classic Salted", price: 20, category: "Snacks & Munchies", image: "https://picsum.photos/seed/lays/200/200", unit: "52 g", time: "10 mins" },
  { id: 20, name: "Kurkure Masala Munch", price: 20, category: "Snacks & Munchies", image: "https://picsum.photos/seed/kurkure/200/200", unit: "90 g", time: "10 mins" },
  { id: 21, name: "Haldiram's Aloo Bhujia", price: 55, category: "Snacks & Munchies", image: "https://picsum.photos/seed/bhujia/200/200", unit: "200 g", time: "10 mins" },
  { id: 22, name: "Doritos Sweet Chilli", price: 30, category: "Snacks & Munchies", image: "https://picsum.photos/seed/doritos/200/200", unit: "44 g", time: "10 mins" },
  { id: 23, name: "Act II Popcorn", price: 40, category: "Snacks & Munchies", image: "https://picsum.photos/seed/popcorn/200/200", unit: "70 g", time: "10 mins" },
  { id: 24, name: "Pringles Original", price: 99, category: "Snacks & Munchies", image: "https://picsum.photos/seed/pringles/200/200", unit: "107 g", time: "10 mins" },

  // Breakfast & Instant
  { id: 25, name: "Maggi 2-Minute Noodles", price: 14, category: "Breakfast & Instant", image: "https://picsum.photos/seed/maggi/200/200", unit: "70 g", time: "8 mins" },
  { id: 26, name: "Kellogg's Corn Flakes", price: 175, category: "Breakfast & Instant", image: "https://picsum.photos/seed/cornflakes/200/200", unit: "475 g", time: "10 mins" },
  { id: 27, name: "Quaker Oats", price: 99, category: "Breakfast & Instant", image: "https://picsum.photos/seed/oats/200/200", unit: "400 g", time: "10 mins" },
  { id: 28, name: "Saffola Masala Oats", price: 45, category: "Breakfast & Instant", image: "https://picsum.photos/seed/masalaoats/200/200", unit: "39 g", time: "10 mins" },
  { id: 29, name: "Poha", price: 40, category: "Breakfast & Instant", image: "https://picsum.photos/seed/poha/200/200", unit: "500 g", time: "10 mins" },
  { id: 30, name: "MTR Upma Mix", price: 55, category: "Breakfast & Instant", image: "https://picsum.photos/seed/upma/200/200", unit: "170 g", time: "10 mins" },

  // Sweet Tooth
  { id: 31, name: "Cadbury Dairy Milk", price: 40, category: "Sweet Tooth", image: "https://picsum.photos/seed/dairymilk/200/200", unit: "50 g", time: "8 mins" },
  { id: 32, name: "Gulab Jamun", price: 65, category: "Sweet Tooth", image: "https://picsum.photos/seed/gulabjamun/200/200", unit: "500 g", time: "12 mins" },
  { id: 33, name: "Rasgulla", price: 80, category: "Sweet Tooth", image: "https://picsum.photos/seed/rasgulla/200/200", unit: "500 g", time: "12 mins" },
  { id: 34, name: "KitKat", price: 35, category: "Sweet Tooth", image: "https://picsum.photos/seed/kitkat/200/200", unit: "37.3 g", time: "8 mins" },
  { id: 35, name: "5 Star", price: 20, category: "Sweet Tooth", image: "https://picsum.photos/seed/5star/200/200", unit: "40 g", time: "8 mins" },
  { id: 36, name: "Soan Papdi", price: 90, category: "Sweet Tooth", image: "https://picsum.photos/seed/soanpapdi/200/200", unit: "250 g", time: "10 mins" },

  // Bakery & Biscuits
  { id: 37, name: "Parle-G Biscuits", price: 10, category: "Bakery & Biscuits", image: "https://picsum.photos/seed/parleg/200/200", unit: "80 g", time: "8 mins" },
  { id: 38, name: "Britannia Good Day", price: 30, category: "Bakery & Biscuits", image: "https://picsum.photos/seed/goodday/200/200", unit: "200 g", time: "8 mins" },
  { id: 39, name: "Hide & Seek", price: 35, category: "Bakery & Biscuits", image: "https://picsum.photos/seed/hideseek/200/200", unit: "120 g", time: "8 mins" },
  { id: 40, name: "Oreo Chocolate", price: 30, category: "Bakery & Biscuits", image: "https://picsum.photos/seed/oreo/200/200", unit: "120 g", time: "8 mins" },
  { id: 41, name: "Monaco Biscuits", price: 25, category: "Bakery & Biscuits", image: "https://picsum.photos/seed/monaco/200/200", unit: "200 g", time: "8 mins" },
  { id: 42, name: "Fresh Pav", price: 30, category: "Bakery & Biscuits", image: "https://picsum.photos/seed/pav/200/200", unit: "6 pcs", time: "15 mins" },

  // Tea, Coffee & Health
  { id: 43, name: "Tata Tea Gold", price: 135, category: "Tea, Coffee & Health", image: "https://picsum.photos/seed/tatatea/200/200", unit: "250 g", time: "10 mins" },
  { id: 44, name: "Nescafe Classic", price: 175, category: "Tea, Coffee & Health", image: "https://picsum.photos/seed/nescafe/200/200", unit: "100 g", time: "10 mins" },
  { id: 45, name: "Bru Instant Coffee", price: 85, category: "Tea, Coffee & Health", image: "https://picsum.photos/seed/bru/200/200", unit: "50 g", time: "10 mins" },
  { id: 46, name: "Green Tea Honey", price: 180, category: "Tea, Coffee & Health", image: "https://picsum.photos/seed/greentea/200/200", unit: "25 bags", time: "10 mins" },
  { id: 47, name: "Bournvita", price: 210, category: "Tea, Coffee & Health", image: "https://picsum.photos/seed/bournvita/200/200", unit: "500 g", time: "10 mins" },
  { id: 48, name: "Horlicks", price: 230, category: "Tea, Coffee & Health", image: "https://picsum.photos/seed/horlicks/200/200", unit: "500 g", time: "10 mins" },

  // Atta, Rice & Dal
  { id: 49, name: "Aashirvaad Atta", price: 280, category: "Atta, Rice & Dal", image: "https://picsum.photos/seed/atta/200/200", unit: "5 kg", time: "15 mins" },
  { id: 50, name: "India Gate Basmati Rice", price: 350, category: "Atta, Rice & Dal", image: "https://picsum.photos/seed/basmati/200/200", unit: "5 kg", time: "15 mins" },
  { id: 51, name: "Toor Dal", price: 140, category: "Atta, Rice & Dal", image: "https://picsum.photos/seed/toordal/200/200", unit: "1 kg", time: "12 mins" },
  { id: 52, name: "Moong Dal", price: 120, category: "Atta, Rice & Dal", image: "https://picsum.photos/seed/moongdal/200/200", unit: "1 kg", time: "12 mins" },
  { id: 53, name: "Sugar", price: 45, category: "Atta, Rice & Dal", image: "https://picsum.photos/seed/sugar/200/200", unit: "1 kg", time: "10 mins" },
  { id: 54, name: "Salt", price: 22, category: "Atta, Rice & Dal", image: "https://picsum.photos/seed/salt/200/200", unit: "1 kg", time: "10 mins" },

  // Paan
  { id: 55, name: "Pulse Candy", price: 10, category: "Paan", image: "https://picsum.photos/seed/pulse/200/200", unit: "50 g", time: "8 mins" },
  { id: 56, name: "Rajnigandha Pan Masala", price: 40, category: "Paan", image: "https://picsum.photos/seed/rajni/200/200", unit: "1 pouch", time: "8 mins" },
  { id: 57, name: "Happydent White", price: 10, category: "Paan", image: "https://picsum.photos/seed/happydent/200/200", unit: "6 pcs", time: "8 mins" },
  { id: 58, name: "Center Fresh", price: 10, category: "Paan", image: "https://picsum.photos/seed/centerfresh/200/200", unit: "6 pcs", time: "8 mins" },
  { id: 59, name: "Pass Pass", price: 5, category: "Paan", image: "https://picsum.photos/seed/passpass/200/200", unit: "1 pc", time: "8 mins" },
  { id: 60, name: "Mentos", price: 10, category: "Paan", image: "https://picsum.photos/seed/mentos/200/200", unit: "5 pcs", time: "8 mins" },
];

async function seedProducts(db) {
  const collection = db.collection("products");
  const count = await collection.countDocuments();
  if (count === 0) {
    await collection.insertMany(products);
    console.log(`Seeded ${products.length} products`);
  } else {
    console.log(`Products already seeded (${count} found)`);
  }
}

module.exports = { seedProducts };
