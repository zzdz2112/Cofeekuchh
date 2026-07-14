'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import ProductCard from '@/components/ProductCard'
import Cart from '@/components/Cart'
import Footer from '@/components/Footer'

export default function Home() {
  const [showCart, setShowCart] = useState(false)
  const [cartItems, setCartItems] = useState<any[]>([])

  const product = {
    name: 'Jaune Lemon Haze',
    emoji: '🍋',
    description: 'Premium CBD - Variété exclusive avec goût citron intense',
    prices: [
      { amount: '4g', price: 20, emoji: '🎾' },
      { amount: '9g', price: 50, emoji: '🎾' },
      { amount: '25g', price: 120, emoji: '🎾' },
      { amount: '50g', price: 190, emoji: '🎾' },
      { amount: '100g', price: 290, emoji: '🎾' },
    ]
  }

  const addToCart = (item: any) => {
    const existingItem = cartItems.find(
      (i) => i.amount === item.amount
    )
    if (existingItem) {
      setCartItems(
        cartItems.map((i) =>
          i.amount === item.amount
            ? { ...i, quantity: i.quantity + 1 }
            : i
        )
      )
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }])
    }
  }

  const removeFromCart = (amount: string) => {
    setCartItems(cartItems.filter((i) => i.amount !== amount))
  }

  const updateQuantity = (amount: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(amount)
    } else {
      setCartItems(
        cartItems.map((i) =>
          i.amount === amount ? { ...i, quantity } : i
        )
      )
    }
  }

  return (
    <>
      <Header
        cartCount={cartItems.reduce((acc, item) => acc + item.quantity, 0)}
        onCartClick={() => setShowCart(!showCart)}
      />
      <main className="container" style={{ paddingTop: '20px' }}>
        <Hero />
        <div className="product-section">
          <ProductCard
            product={product}
            onAddToCart={addToCart}
          />
        </div>
      </main>
      <Cart
        isOpen={showCart}
        items={cartItems}
        onClose={() => setShowCart(false)}
        onUpdateQuantity={updateQuantity}
        onRemove={removeFromCart}
      />
      <Footer />
    </>
  )
}
