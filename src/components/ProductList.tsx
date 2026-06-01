import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
  description: string;
  category: string;
};

type ProductListProps = {
  addToCart: (
    product: {
      id: number;
      name: string;
      price: number;
      image: string;
    },
    quantity: number
  ) => void;

  searchTerm: string;

  selectedCategory: string;
};

const ProductList = ({
  addToCart,
  searchTerm,
  selectedCategory,
}: ProductListProps) => {
  const [products, setProducts] =
    useState<Product[]>([]);

  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch(
        "https://fakestoreapi.com/products"
      );

      const data =
        await response.json();

      setProducts(data);
    };

    getProducts();
  }, []);

  const filteredProducts =
    products.filter((product) => {
      const matchesSearch =
        product.title
          .toLowerCase()
          .includes(
            searchTerm.toLowerCase()
          );

      const matchesCategory =
        selectedCategory === "all" ||
        product.category ===
          selectedCategory;

      return (
        matchesSearch &&
        matchesCategory
      );
    });

  return (
    <div className="products-container">
      {filteredProducts.map(
        (product) => (
          <ProductCard
            key={product.id}
            product={{
              id: product.id,
              name: product.title,
              price: product.price,
              image: product.image,
              description:
                product.description,
              category:
                product.category,
            }}
            addToCart={addToCart}
          />
        )
      )}
    </div>
  );
};

export default ProductList;