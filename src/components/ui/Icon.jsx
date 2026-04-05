/**
 * components/ui/Icon.jsx
 * Inline SVG icon set. Usage: <Icon name="search" size={16} color="#4F63D2" />
 */
import './styles/Icon.css'

const PATHS = {
    search:      <><circle cx="11" cy="11" r="7.5" /><path d="m20 20-3.5-3.5" strokeLinecap="round" /></>,
    map:         <><path d="M20 10c0 7-8 12-8 12S4 17 4 10a8 8 0 0 1 16 0Z" strokeLinejoin="round" /><circle cx="12" cy="10" r="2.5" /></>,
    users:       <><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" /></>,
    dollar:      <><line x1="12" y1="2" x2="12" y2="22" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></>,
    heart:       <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />,
    heartFill:   <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" fill="#ef4444" stroke="#ef4444" />,
    award:       <><circle cx="12" cy="8" r="6" /><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" /></>,
    x:           <><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></>,
    chevronRight:<polyline points="9 18 15 12 9 6" />,
    filter:      <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />,
    sparkle:     <path d="M12 3v1m0 16v1M3 12h1m16 0h1m-2.636-7.364-.707.707M5.343 18.657l-.707.707m0-13.314.707.707M18.657 18.657l.707.707M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z" />,
    phone:       <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.6 19.79 19.79 0 0 1 1.61 5c.07-1.09.98-1.98 2.09-1.98h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 11a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />,
    mail:        <><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></>,
    globe:       <><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></>,
    arrowLeft:   <><line x1="19" y1="12" x2="5" y2="12" /><polyline points="12 19 5 12 12 5" /></>,
    book:        <><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" /></>,
    wand:        <><path d="M15 4V2m0 14v-2M8 9H2m14 0h-2m-6.07 2.93-1.41 1.41M17.5 5.5l-1.41 1.41M7.5 5.5l1.41 1.41M20.07 11.93l-1.41-1.41M18 22l-4-4 6.5-6.5 4 4L18 22z" /></>,
    eye:         <><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" /></>,
    building:    <><rect x="4" y="2" width="16" height="20" rx="2" /><path d="M9 22V12h6v10" /><path d="M8 6h.01M12 6h.01M16 6h.01M8 10h.01M12 10h.01M16 10h.01" /></>,
}

export default function Icon({ name, size = 16, color = 'currentColor' }) {
    return (
        <svg
            className="icon"
            width={size}
            height={size}
            fill="none"
            stroke={color}
            strokeWidth="1.75"
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
        >
            {PATHS[name] ?? null}
        </svg>
    )
}