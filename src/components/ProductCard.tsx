import { useState } from "react";

import "./ProductCard.css";


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

  const [quantity, setQuantity] = useState(1);

  return (

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

          <button
            onClick={() => {

              if (quantity > 1) {
                setQuantity(quantity - 1);
              }

            }}
          >
            -
          </button>

          <span>{quantity}</span>

          <button
            onClick={() => {
              setQuantity(quantity + 1);
            }}
          >
            +
          </button>

        </div>

        <button
          className="add-btn"
          onClick={() => addToCart(product, quantity)}
        >
          ADD TO CART
        </button>

      </div>

    </div>

  );
};

export default ProductCard;