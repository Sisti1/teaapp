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
  const items = cartItems.map(item => ({
    product: item._id,
    quantity: item.quantity,
  }));
  return await updateCart(items);
};

export const submitOrder = async () => {
  return await placeOrder(); // no cartItems or totalAmount needed
};

