interface ProductCardProps {
  product: any
  onAddToCart: (item: any) => void
}

export default function ProductCard({ product, onAddToCart }: ProductCardProps) {
  return (
    <div className="product-card">
      <div className="emoji">{product.emoji}</div>
      <h3>{product.name}</h3>
      <p>{product.description}</p>

      <div className="price-list">
        {product.prices.map((price: any, idx: number) => (
          <div key={idx}>
            <div className="price-item">
              <span>
                <strong>{price.amount}</strong> {price.emoji}
              </span>
              <span className="price">{price.price}€</span>
            </div>
            <button
              onClick={() =>
                onAddToCart({
                  name: product.name,
                  amount: price.amount,
                  price: price.price,
                })
              }
              style={{
                width: '100%',
                marginTop: '10px',
                marginBottom: '10px',
              }}
            >
              Ajouter au panier
            </button>
          </div>
        ))}
      </div>

      <div className="reseller-note">
        💪🏽 Pour le revendeur on arrange fort 💪🏽
      </div>
    </div>
  )
}
