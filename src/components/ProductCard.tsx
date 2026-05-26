import { useState } from "react";

import "./ProductCard.css";
import { Link } from "react-router-dom";

type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  category: string;
};

type ProductCardProps = {
  product: Product;

  addToCart: (
    product: Product,
    quantity: number
  ) => void;
};

const ProductCard = ({
  product,
  addToCart,
}: ProductCardProps) => {

  const [quantity, setQuantity] =
    useState(1);

  const decreaseQty = (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {

    e.preventDefault();

    if (quantity > 1) {
      setQuantity(quantity - 1);
    }

  };

  const increaseQty = (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {

    e.preventDefault();

    setQuantity(quantity + 1);

  };

  const handleAddToCart = (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {

    e.preventDefault();

    addToCart(product, quantity);

  };

  return (

    <Link
      to={`/detail/${product.id}`}
      className="card-link"
    >

      <div className="card">

        <div className="card-image">
          <img
            src={product.image}
            alt={product.name}
          />

        </div>

        <div className="card-content">

          <span className="category">
            {product.category.toUpperCase()}
          </span>

          <h3>{product.name}</h3>

          <p className="description">
            {product.description}
          </p>

          <p className="price">
            ₹ {product.price}
          </p>

        </div>

        <div className="card-footer">

          <div className="qty-box">

  <button onClick={decreaseQty}>
              -
            </button>

            <span>{quantity}</span>

            <button onClick={increaseQty}>
              +
            </button>

          </div>

          <button
            className="add-btn"
            onClick={handleAddToCart}
          >
            ADD TO CART
          </button>

        </div>

      </div>

    </Link>

  );
};

export default ProductCard;