/**
 * components/ui/Tag.jsx
 * Coloured pill tag. Usage: <Tag hue="blue">Computer Science</Tag>
 */
import './styles/Tag.css'

export default function Tag({ children, hue = 'blue', small = false }) {
    return (
        <span className={`tag tag--${small ? 'small' : 'default'} tag--${hue}`}>
      {children}
    </span>
    )
}