import ProductCard from "./ProductCard";

function BillingScreen() {
  const products = [
    { id: 1, name: "Milk", price: 1 },
    { id: 2, name: "Bread", price: 0.5 },
    { id: 3, name: "Rice", price: 2 }
  ];

  return (
    <div>
      <h2>Billing</h2>
      {products.map(p => (
        <ProductCard key={p.id} name={p.name} price={p.price} />
      ))}
    </div>
  );
}

export default BillingScreen;
