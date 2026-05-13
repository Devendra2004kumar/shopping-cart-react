import { useState } from "react";

type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
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

    <img
      src={product.image}
      alt={product.name}
    />

    <h3>{product.name}</h3>

    <p>₹ {product.price}</p>

    <div className="card-bottom">

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
        onClick={() => addToCart(product, quantity)}
      >
        Add To Cart
      </button>

    </div>

  </div>
);
};

export default ProductCard;