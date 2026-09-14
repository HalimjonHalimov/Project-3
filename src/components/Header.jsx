import { useProduct } from "../context/product/useProduct";
import { useTheme } from "../context/theme/useTheme";

function Header() {
  const { state: theme, dispatch: themeDispatch } = useTheme();
  const { state } = useProduct();

  return (
    <header className="navbar">
      <a className="brand" href="#top" aria-label="Shop App home page">
        <span className="brand-mark">S</span>
        <span>Shop App</span>
      </a>

      <div className="header-actions">
        <button
          className="theme-button"
          type="button"
          onClick={() => themeDispatch({ type: "TOGGLE_THEME" })}
        >
          <span aria-hidden="true">{theme.theme === "light" ? "☾" : "☀"}</span>
          {theme.theme === "light" ? "dark" : "light"} mode
        </button>
        {/* Light theme button: <button className="theme-button" type="button">☀ Light mode</button> */}
        <div className="cart-summary" aria-label="Cart status">
          <span className="cart-icon" aria-hidden="true">
            🛍
          </span>
          <span>
            <b>Cart</b>
            {state.cart.length === 0 ? (
              <small>Your cart is empty</small>
            ) : (
              <small>{state.cart.length} products in your cart</small>
            )}
          </span>
          <strong>${state.totalPrice.toFixed(2)}</strong>
        </div>
      </div>
    </header>
  );
}

export default Header;
