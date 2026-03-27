const express = require("express");
const router = express.Router();

// In-memory session cart (keyed by a simple session id via cookie/header)
// For a production app you'd use user-based carts with auth
const SESSION_ID = "default";

// GET /api/cart - Get cart items
router.get("/", async (req, res, next) => {
  try {
    const cartItems = await req.db
      .collection("cart")
      .find({ sessionId: SESSION_ID })
      .toArray();

    // Join with product data so frontend gets full product info
    const productIds = cartItems.map((item) => item.productId);
    const products = await req.db
      .collection("products")
      .find({ id: { $in: productIds } })
      .toArray();

    const result = cartItems.map((item) => {
      const product = products.find((p) => p.id === item.productId);
      return {
        ...product,
        productId: item.productId,
        quantity: item.quantity,
      };
    });

    res.json(result);
  } catch (err) {
    next(err);
  }
});

// POST /api/cart - Add/update item in cart
router.post("/", async (req, res, next) => {
  try {
    const { productId, quantity } = req.body;

    if (!productId || quantity === undefined) {
      return res.status(400).json({ error: "productId and quantity are required" });
    }

    // Verify product exists
    const product = await req.db.collection("products").findOne({ id: productId });
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    const cart = req.db.collection("cart");
    const existing = await cart.findOne({ sessionId: SESSION_ID, productId });

    if (existing) {
      const newQty = existing.quantity + quantity;
      if (newQty <= 0) {
        await cart.deleteOne({ sessionId: SESSION_ID, productId });
      } else {
        await cart.updateOne(
          { sessionId: SESSION_ID, productId },
          { $set: { quantity: newQty } }
        );
      }
    } else if (quantity > 0) {
      await cart.insertOne({ sessionId: SESSION_ID, productId, quantity });
    }

    // Return updated cart
    const updatedCart = await getFullCart(req.db);
    res.json(updatedCart);
  } catch (err) {
    next(err);
  }
});

// DELETE /api/cart/:productId - Remove item from cart
router.delete("/:productId", async (req, res, next) => {
  try {
    const productId = parseInt(req.params.productId);
    await req.db
      .collection("cart")
      .deleteOne({ sessionId: SESSION_ID, productId });

    const updatedCart = await getFullCart(req.db);
    res.json(updatedCart);
  } catch (err) {
    next(err);
  }
});

// Helper to get full cart with product details
async function getFullCart(db) {
  const cartItems = await db
    .collection("cart")
    .find({ sessionId: SESSION_ID })
    .toArray();

  const productIds = cartItems.map((item) => item.productId);
  if (productIds.length === 0) return [];

  const products = await db
    .collection("products")
    .find({ id: { $in: productIds } })
    .toArray();

  return cartItems.map((item) => {
    const product = products.find((p) => p.id === item.productId);
    return {
      ...product,
      productId: item.productId,
      quantity: item.quantity,
    };
  });
}

module.exports = router;
