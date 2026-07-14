interface HeaderProps {
  cartCount: number
  onCartClick: () => void
}

export default function Header({ cartCount, onCartClick }: HeaderProps) {
  return (
    <header>
      <div className="container">
        <h1>🔥 COFEEKUCHH 🔥</h1>
        <div className="cart-icon" onClick={onCartClick}>
          🛒
          {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
        </div>
      </div>
    </header>
  )
}
