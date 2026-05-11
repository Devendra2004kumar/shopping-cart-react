type CartItem = {
  id: number;
  qty: number;
};

type NavbarProps = {
  setCartOpen: React.Dispatch<React.SetStateAction<boolean>>;
  cartItems: CartItem[];
};

const Navbar = ({
  setCartOpen,
  cartItems,
}: NavbarProps) => {

  const totalItems = cartItems.reduce((total, item) => {
    return total + item.qty;
  }, 0);

  return (
    <nav className="navbar">

      <h1>Shopping Cart</h1>

      <div
        className="cart-icon"
        onClick={() => setCartOpen(true)}
      >
        Cart ({totalItems})
      </div>

    </nav>
  );
};

export default Navbar;