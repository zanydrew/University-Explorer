import { Globe, GraduationCap, Heart, Send } from 'lucide-react'

export default function SidebarCard({ logo, badge, name, meta, stats = [], website, saved, onSave }) {
    const href = website || '#'

    return (
        <div className="sidebar-card">
            {/* ── Gradient header ── */}
            <div className="sidebar-card__top">
                <div className="sidebar-card__logo">{logo}</div>

                <div className="sidebar-card__badge">
                    <GraduationCap size={10} /> {badge}
                </div>

                <div className="sidebar-card__name">{name}</div>
                <div className="sidebar-card__meta">{meta}</div>
            </div>

            {/* ── Stats ── */}
            <div className="sidebar-card__stats">
                {stats.map(([label, value]) => (
                    <div key={label} className="sidebar-card__stat-row">
                        <span className="sidebar-card__stat-label">{label}</span>
                        <span className="sidebar-card__stat-value">{value}</span>
                    </div>
                ))}
            </div>

            {/* ── Actions ── */}
            <div className="sidebar-card__actions">
                <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="sidebar-card__apply"
                >
                    <Send size={15} /> Apply Now
                </a>

                <div className="sidebar-card__secondary">
                    <button
                        className={`sidebar-card__outline${saved ? ' saved' : ''}`}
                        onClick={onSave}
                    >
                        <Heart size={13} fill={saved ? 'currentColor' : 'none'} />
                        {saved ? 'Saved' : 'Save'}
                    </button>

                    <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="sidebar-card__outline"
                    >
                        <Globe size={13} /> Website
                    </a>
                </div>
            </div>
        </div>
    )
}