import { useProduct } from "../context/product/useProduct";

function ProductCard({ product }) {
  const { state, dispatch } = useProduct();

  const cartProduct = state.cart.find((item) => item.id === product.id);

  return (
    <article className="product-card">
      <div className="product-image">
        <span>{product.product_category.name}</span>
        <div className="product-emoji" aria-hidden="true">
          <img src={product.image} alt="Product" />
        </div>
      </div>

      <div className="product-content">
        <div>
          <p className="category">{product.product_category.name}</p>
          <h3>{product.name}</h3>
        </div>
        <p className="price">${product.price.toLocaleString()}</p>
      </div>
      {cartProduct ? (
        <div className="quantity-control">
          <button
            type="button"
            onClick={() =>
              dispatch({ type: "REMOVE_CART", payload: product.id })
            }
          >
            −
          </button>
          <span>{cartProduct.quantity}</span>
          <button
            type="button"
            onClick={() => dispatch({ type: "ADD_CART", payload: product.id })}
          >
            +
          </button>
        </div>
      ) : (
        <button
          className="add-button"
          type="button"
          onClick={() => dispatch({ type: "ADD_CART", payload: product.id })}
        >
          <span aria-hidden="true">+</span> Add to cart
        </button>
      )}
    </article>
  );
}

export default ProductCard;
