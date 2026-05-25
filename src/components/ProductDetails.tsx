import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

import "./ProductDetails.css";

type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
  description: string;
  category: string;
};

const ProductDetails = () => {

  const { id } = useParams();

  const [product, setProduct] =
    useState<Product | null>(null);

  useEffect(() => {

    const getProduct = async () => {

      const response = await fetch(
        `https://fakestoreapi.com/products/${id}`
      );

      const data = await response.json();

      setProduct(data);
    };

    getProduct();

  }, [id]);

  if (!product) {
    return <h1>Loading...</h1>;
  }

  return (

    <div className="details-page">

      <Link
        to="/"
        className="back-btn"
      >
        ← GO TO RESULTS
      </Link>

      <div className="details-container">

        <div className="details-image">

          <img
            src={product.image}
            alt={product.title}
          />

        </div>

        <div className="details-content">

          <h1>{product.title}</h1>

          <p className="details-description">
            {product.description}
          </p>

          <span className="details-category">
            {product.category.toUpperCase()}
          </span>

          <div className="details-rating">
            ⭐⭐⭐⭐☆
            <span>(259)</span>
          </div>

          <h2 className="details-price">
            Price: ₹{product.price}
          </h2>

          <button className="details-btn">
            ADD TO CART
          </button>

        </div>

      </div>

    </div>

  );
};

export default ProductDetails;