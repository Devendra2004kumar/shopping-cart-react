import { useState } from "react";

import "./App.css";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import ProductDetails from "./components/ProductDetails";

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

  const [searchTerm, setSearchTerm] = useState("");

  const [selectedCategory, setSelectedCategory] =
    useState("all");

  const addToCart = (
    product: Product,
    quantity: number
  ) => {
    const existingItem = cartItems.find(
      (item) => item.id === product.id
    );

    if (existingItem) {
      const updatedCart = cartItems.map(
        (item) => {
          if (item.id === product.id) {
            return {
              ...item,
              qty: item.qty + quantity,
            };
          }

          return item;
        }
      );

      setCartItems(updatedCart);
    } else {
      setCartItems([
        ...cartItems,
        {
          ...product,
          qty: quantity,
        },
      ]);
    }
  };

  const removeItem = (id: number) => {
    setCartItems(
      cartItems.filter(
        (item) => item.id !== id
      )
    );
  };

  return (
    <BrowserRouter>
      <Navbar
        setCartOpen={setCartOpen}
        cartItems={cartItems}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectedCategory={selectedCategory}
        setSelectedCategory={
          setSelectedCategory
        }
      />

      <Cart
        cartOpen={cartOpen}
        setCartOpen={setCartOpen}
        cartItems={cartItems}
        removeItem={removeItem}
      />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <ProductList
                addToCart={addToCart}
                searchTerm={searchTerm}
                selectedCategory={
                  selectedCategory
                }
              />
              <Footer />
            </>
          }
        />

        <Route
          path="/detail/:id"
          element={<ProductDetails />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;