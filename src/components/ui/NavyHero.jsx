/**
 * components/ui/NavyHero.jsx
 * Reusable dark-navy hero banner.
 */
import './styles/NavyHero.css'
import Icon from './Icon'
import './styles/NavyHero.css'

export default function NavyHero({ eyebrow, title, subtitle, children }) {
    return (
        <div className="navy-hero">
            <div className="navy-hero__blob-1" />
            <div className="navy-hero__blob-2" />

            <div className="navy-hero__content">
                {eyebrow && (
                    <div className="navy-hero__eyebrow">
                        <Icon name="sparkle" size={12} color="var(--color-teal-light)" />
                        <span className="navy-hero__eyebrow-text">{eyebrow}</span>
                    </div>
                )}
                <h2 className="navy-hero__title">{title}</h2>
                {subtitle && <p className="navy-hero__subtitle">{subtitle}</p>}
                {children}
            </div>
        </div>
    )
}
