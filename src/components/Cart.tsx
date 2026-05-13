type CartItem = {
  id: number;
  name: string;
  price: number;
  image: string;
  qty: number;
};

type CartProps = {
  cartOpen: boolean;
  setCartOpen: React.Dispatch<React.SetStateAction<boolean>>;
  cartItems: CartItem[];

 
  removeItem: (id: number) => void;
};

const Cart = ({
  cartOpen,
  setCartOpen,
  cartItems,
  removeItem,
}: CartProps) => {

  const totalPrice = cartItems.reduce((total, item) => {
    return total + item.price * item.qty;
  }, 0);

  const totalQty = cartItems.reduce((total, item) => {
    return total + item.qty;
  }, 0);

  return (
    <>
      {cartOpen && (

        <div className="cart-overlay">

          <div className="cart-sidebar">

            <div className="cart-header">

              <h2>Cart Items</h2>

              <button
                onClick={() => setCartOpen(false)}
              >
                ✕
              </button>

            </div>

            <div className="cart-summary">

              <h3>Total: ₹{totalPrice}</h3>

              <p>
                {totalQty} {totalQty === 1 ? "Item" : "Items"}
              </p>

            </div>

            {cartItems.length === 0 ? (

              <div className="empty-cart">
                <h3>Your cart is empty</h3>
              </div>

            ) : (

              cartItems.map((item) => {

                return (
                  <div
                    className="cart-item"
                    key={item.id}
                  >

                    <img
                      src={item.image}
                      alt={item.name}
                    />

                    <div className="cart-item-details">

                      <h4>{item.name}</h4>

                      <p>₹{item.price}</p>
<p>
  Quantity: {item.qty}
</p>

                    </div>

                    <button
                      className="remove-btn"
                      onClick={() => removeItem(item.id)}
                    >
                      🗑
                    </button>

                  </div>
                );
              })

            )}

          </div>

        </div>

      )}
    </>
  );
};

export default Cart;