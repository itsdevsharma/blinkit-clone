const express = require("express");
const cors = require("cors");
const { MongoClient, ObjectId } = require("mongodb");

const productRoutes = require("./routes/products");
const cartRoutes = require("./routes/cart");
const authRoutes = require("./routes/auth");
const { seedProducts } = require("./seed");

const app = express();
const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017";
const DB_NAME = process.env.DB_NAME || "blinkit";

app.use(cors());
app.use(express.json());

async function start() {
  const client = new MongoClient(MONGO_URI);
  await client.connect();
  console.log("Connected to MongoDB");

  const db = client.db(DB_NAME);

  // Seed products if collection is empty
  await seedProducts(db);

  // Make db available to routes
  app.use((req, res, next) => {
    req.db = db;
    next();
  });

  app.use("/api/products", productRoutes);
  app.use("/api/cart", cartRoutes);
  app.use("/api/auth", authRoutes);

  // Health check
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  // Global error handler
  app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: "Internal server error" });
  });

  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

start().catch((err) => {
  console.error("Failed to start server:", err);
  process.exit(1);
});
