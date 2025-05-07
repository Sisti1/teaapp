// src/controllers/cartController.js
// controllers/cartController.js
import { fetchCartItems, updateCart, placeOrder } from '../services/cart_services';

export const getCartItems = async () => {
  const data = await fetchCartItems();

  return (
    data?.cart?.products?.filter(Boolean).map(p => {
      const product = p.product;
      if (!product) return null;

      return {
        product_id: product._id,
        product_name: product.name,       // ✅ Add name
        image_url: product.image_url,     // ✅ Add image
        price: product.price,             // ✅ Add price
        quantity: p.quantity || 1,
        total: p.total || product.price * (p.quantity || 1),
      };
    }).filter(Boolean) || []
  );
};


export const updateCartItems = async (cartItems) => {
  try {
    console.log("🛒 Raw cart items:", cartItems);

    const formattedItems = cartItems.map(item => {
      // Extract product ID reliably
      const productId =
        item.product_id || // From DB
        item.productId ||  // Optional frontend key
        item._id ||        // Mongoose _id
        (item.product && item.product._id); // Sometimes nested

      if (!productId) {
        console.warn("⚠️ Missing product ID in item:", item);
      }

      const formatted = {
        product: productId,
        quantity: item.quantity,
        total: item.quantity * (item.price || 0),
      };

      console.log("📦 Formatted item for backend:", formatted);
      return formatted;
    });

    const response = await updateCart(formattedItems);
    console.log("✅ Cart update successful:", response);
    return response;
  } catch (error) {
    console.error("❌ Error in updateCartItems:", error.message);
    throw new Error(error.message || "Failed to update cart");
  }
};
export const submitOrder = async () => {
  return await placeOrder(); // no cartItems or totalAmount needed
};

