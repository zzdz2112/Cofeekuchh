export default function Footer() {
  return (
    <footer>
      <h3>📍 Nous Contacter</h3>

      <div className="contact-info">
        <a
          href="https://www.snapchat.com/add/haziimenton06"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link snapchat"
        >
          👻 Snapchat: haziimenton06
        </a>

        <a
          href="https://t.me/+ZCUE4TTwBrUxNDdk"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link telegram"
        >
          📱 Telegram
        </a>
      </div>

      <div className="location-info">
        <strong>Zone de livraison:</strong>
        <p>Île-de-France et régions limitrophes</p>
        <p>Livraison rapide et discrète 🚚</p>
      </div>

      <div className="reseller-note" style={{ marginTop: '20px' }}>
        💪🏽 Revendeurs: Tarifs avantageux sur demande 💪🏽
      </div>

      <div className="copyright">
        © 2024 Cofeekuchh - Premium CBD Products
      </div>
    </footer>
  )
}
