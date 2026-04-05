/**
 * components/ui/Badge.jsx
 * Status pill. Variants: default | public | private | hot | urgent
 */
import './styles/Badge.css'

export default function Badge({ children, variant = 'default' }) {
    return (
        <span className={`badge badge--${variant}`}>
      {children}
    </span>
    )
}