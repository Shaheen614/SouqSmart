function ProductCard({ name, price }) {
  return (
    <div style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
      <h3>{name}</h3>
      <p>{price} BHD</p>
      <button>Add to Cart</button>
    </div>
  );
}

export default ProductCard;
