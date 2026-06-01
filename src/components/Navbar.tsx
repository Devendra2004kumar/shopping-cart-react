import "./Navbar.css";

type CartItem = {
  id: number;
  name: string;
  price: number;
  image: string;
  qty: number;
};

type NavbarProps = {
  setCartOpen: React.Dispatch<
    React.SetStateAction<boolean>
  >;

  cartItems: CartItem[];

  searchTerm: string;

  setSearchTerm: React.Dispatch<
    React.SetStateAction<string>
  >;

  selectedCategory: string;

  setSelectedCategory: React.Dispatch<
    React.SetStateAction<string>
  >;
};

const Navbar = ({
  setCartOpen,
  cartItems,
  searchTerm,
  setSearchTerm,
  selectedCategory,
  setSelectedCategory,
}: NavbarProps) => {
  const totalItems = cartItems.reduce(
    (total, item) => total + item.qty,
    0
  );

  return (
    <nav className="navbar">
      <h1>Shopping Cart</h1>

      <div className="nav-controls">
        <input
          type="text"
          placeholder="Search Product..."
          value={searchTerm}
          onChange={(e) =>
            setSearchTerm(
              e.target.value
            )
          }
          className="search-box"
        />

        <select
          value={selectedCategory}
          onChange={(e) =>
            setSelectedCategory(
              e.target.value
            )
          }
          className="filter-box"
        >
          <option value="all">
            All Categories
          </option>

          <option value="men's clothing">
            Men's Clothing
          </option>

          <option value="women's clothing">
            Women's Clothing
          </option>

          <option value="electronics">
            Electronics
          </option>

          <option value="jewelery">
            Jewelery
          </option>
        </select>
      </div>

      <div
        className="cart-icon"
        onClick={() =>
          setCartOpen(true)
        }
      >
        Cart ({totalItems})
      </div>
    </nav>
  );
};

export default Navbar;