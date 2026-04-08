/**
 * components/ui/SectionHeader.jsx
 * Section title + optional "View all" button.
 */
import './styles/SectionHeader.css'
import Icon from './Icon'

export default function SectionHeader({ title, icon, sub, onMore }) {
    return (
        <div className="section-header">
            <h2 className="section-header__title">
                {icon && <span className="section-header__icon">{icon}</span>}
                {title}
            </h2>
            <div>
                <h2 className="section-header__title">
                    {icon && <span className="section-header__icon">{icon}</span>}
                    {title}
                </h2>
                {sub && <p className="section-header__sub">{sub}</p>}
            </div>
            {onMore && (
                <button className="btn-primary" onClick={onMore}>
                    View all <Icon name="chevronRight" size={13} />
                </button>
            )}
        </div>
    )
}
