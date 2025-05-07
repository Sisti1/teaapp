// services/cartService.js
import Cookies from 'js-cookie';

const BASE_URL = 'http://localhost:5200';

export const fetchCartItems = async () => {
  const token = Cookies.get('token');
  const response = await fetch(`${BASE_URL}/cart/`, {
    method: 'GET',
    headers: { Authorization: `Bearer ${token}` },
  });
  if (!response.ok) throw new Error('Failed to fetch cart');
  return response.json();
};

export const updateCart = async (items) => {
  const token = Cookies.get('token');

  const response = await fetch(`${BASE_URL}/cart/update`, {
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ items }), // items is now an array of { productId, quantity }
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Failed to update cart');
  }

  return await response.json();
};

// adjust path if needed

export const placeOrder = async () => {
  const token = Cookies.get('token');

  // Step 1: Just trigger the order placement
  const response = await fetch(`${BASE_URL}/api/orders/place`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    const err = await response.json();
    throw new Error(err.message || 'Order failed');
  }

  const orderResult = await response.json();

  // Step 2: Cart is already cleared in backend, so no extra request needed

  return orderResult;
};
export const updateProductQty = async (productId, quantity, token, price) => {
  const total = price * quantity;

  const response = await fetch("http://localhost:5200/cart/update", {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      items: [{
        product: productId,
        quantity,
        total
      }]
    }),
  });

  if (!response.ok) throw new Error("Failed to update quantity");
  return await response.json();
};


// ✅ New: Remove product from cart
export const removeFromCart = async (productId, token) => {
  const response = await fetch("http://localhost:5200/cart/remove", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ productId }),
  });

  if (!response.ok) throw new Error("Failed to remove product");
  return await response.json();
};
// ✅ New: Add product to cart
export const addToCart = async (productId, token) => {
  const response = await fetch("http://localhost:5200/cart/add", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ productId }),
  });

  if (!response.ok) throw new Error("Failed to add product to cart");
  return await response.json();
};