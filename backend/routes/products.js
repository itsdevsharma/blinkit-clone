const express = require("express");
const router = express.Router();

// GET /api/products - Get all products
router.get("/", async (req, res, next) => {
  try {
    const { category, search } = req.query;
    const filter = {};

    if (category) {
      filter.category = category;
    }
    if (search) {
      filter.$or = [
        { name: { $regex: search, $options: "i" } },
        { category: { $regex: search, $options: "i" } },
      ];
    }

    const products = await req.db.collection("products").find(filter).toArray();
    res.json(products);
  } catch (err) {
    next(err);
  }
});

// GET /api/products/:id - Get single product
router.get("/:id", async (req, res, next) => {
  try {
    const id = parseInt(req.params.id);
    const product = await req.db.collection("products").findOne({ id });

    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }
    res.json(product);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
