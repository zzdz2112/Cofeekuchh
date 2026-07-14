'use client'

import React from 'react'

interface CartItem {
  name: string
  amount: string
  price: number
  quantity: number
}

interface CartProps {
  isOpen: boolean
  items: CartItem[]
  onClose: () => void
  onUpdateQuantity: (amount: string, quantity: number) => void
  onRemove: (amount: string) => void
}

export default function Cart({
  isOpen,
  items,
  onClose,
  onUpdateQuantity,
  onRemove,
}: CartProps) {
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <div className={`modal ${isOpen ? 'open' : ''}`} onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button 
          className="close-btn"
          onClick={onClose}
        >
          ✕
        </button>
        <h2>🛒 Votre Panier</h2>
        
        {items.length === 0 ? (
          <p style={{ textAlign: 'center', padding: '20px', color: '#b0b0b0' }}>
            Votre panier est vide
          </p>
        ) : (
          <>
            <div style={{ marginBottom: '20px' }}>
              {items.map((item) => (
                <div key={item.amount} className="summary-item">
                  <div>
                    <p style={{ fontWeight: 'bold' }}>{item.name}</p>
                    <p style={{ fontSize: '14px', color: '#b0b0b0' }}>{item.amount}</p>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ marginBottom: '10px' }}>
                      <input
                        type="number"
                        min="1"
                        value={item.quantity}
                        onChange={(e) =>
                          onUpdateQuantity(item.amount, parseInt(e.target.value))
                        }
                        style={{
                          width: '50px',
                          padding: '5px',
                          marginRight: '10px',
                        }}
                      />
                      <button
                        onClick={() => onRemove(item.amount)}
                        style={{
                          background: '#FF6B6B',
                          color: 'white',
                          border: 'none',
                          padding: '5px 10px',
                          borderRadius: '5px',
                          cursor: 'pointer',
                        }}
                      >
                        Supprimer
                      </button>
                    </div>
                    <p style={{ color: '#FF6B6B', fontWeight: 'bold' }}>
                      {item.price * item.quantity}€
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="cart-summary">
              <div className="summary-item">
                <span>Total:</span>
                <span style={{ color: '#FFD700', fontSize: '20px' }}>
                  {total}€
                </span>
              </div>
            </div>

            <div className="reseller-note">
              ⚠️ Note: Contacter un revendeur pour les commandes en gros
            </div>

            <button
              onClick={() => alert(`Commande de ${total}€ - Veuillez nous contacter pour finaliser`)}
              style={{ width: '100%', padding: '12px' }}
            >
              Passer la commande
            </button>
          </>
        )}
      </div>
    </div>
  )
}
