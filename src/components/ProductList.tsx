import products from "../data/products";
import ProductCard from "./ProductCard";

type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
};

type ProductListProps = {
  addToCart: (product: Product) => void;
};

const ProductList = ({
  addToCart,
}: ProductListProps) => {

  return (
    <div className="products-container">

      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          addToCart={addToCart}
        />
      ))}

    </div>
  );
};

export default ProductList;