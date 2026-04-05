/**
 * components/layout/Footer.jsx
 */
import './styles/Footer.css'

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer__logo">
                🎓 Uni<span className="footer__logo-accent">Search</span>
            </div>
            <div className="footer__tagline">Cambodia's University Discovery Platform</div>
            <div className="footer__copy">© 2025 UniSearch · Helping Cambodian students find their future</div>
        </footer>
    )
}