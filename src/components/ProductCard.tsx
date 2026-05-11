type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
};

type ProductCardProps = {
  product: Product;
  addToCart: (product: Product) => void;
};

const ProductCard = ({
  product,
  addToCart,
}: ProductCardProps) => {

  return (
    <div className="card">

      <img
        src={product.image}
        alt={product.name}
      />

      <h3>{product.name}</h3>

      <p>₹ {product.price}</p>

      <button
        onClick={() => addToCart(product)}
      >
        Add To Cart
      </button>

    </div>
  );
};

export default ProductCard;