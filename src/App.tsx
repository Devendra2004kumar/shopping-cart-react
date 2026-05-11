import { useState } from "react";

import "./App.css";

import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Footer from "./components/Footer";
import Cart from "./components/Cart";

type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
};

type CartItem = {
  id: number;
  name: string;
  price: number;
  image: string;
  qty: number;
};

function App() {

  const [cartOpen, setCartOpen] = useState(false);

  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (product: Product) => {

    const existingItem = cartItems.find((item) => {
      return item.id === product.id;
    });

    if (existingItem) {

      const updatedCart = cartItems.map((item) => {

        if (item.id === product.id) {
          return {
            ...item,
            qty: item.qty + 1,
          };
        }

        return item;
      });

      setCartItems(updatedCart);

    } else {

      const newItem: CartItem = {
        ...product,
        qty: 1,
      };

      setCartItems([
        ...cartItems,
        newItem,
      ]);
    }
  };

  const increaseQty = (id: number) => {

    const updatedCart = cartItems.map((item) => {

      if (item.id === id) {
        return {
          ...item,
          qty: item.qty + 1,
        };
      }

      return item;
    });

    setCartItems(updatedCart);
  };

  const decreaseQty = (id: number) => {

    const updatedCart = cartItems
      .map((item) => {

        if (item.id === id) {
          return {
            ...item,
            qty: item.qty - 1,
          };
        }

        return item;
      })
      .filter((item) => item.qty > 0);

    setCartItems(updatedCart);
  };

  const removeItem = (id: number) => {

    const updatedCart = cartItems.filter((item) => {
      return item.id !== id;
    });

    setCartItems(updatedCart);
  };

  return (
    <>

      <Navbar
        setCartOpen={setCartOpen}
        cartItems={cartItems}
      />

      <Cart
        cartOpen={cartOpen}
        setCartOpen={setCartOpen}
        cartItems={cartItems}
        increaseQty={increaseQty}
        decreaseQty={decreaseQty}
        removeItem={removeItem}
      />

      <ProductList addToCart={addToCart} />

      <Footer />

    </>
  );
}

export default App;