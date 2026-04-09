import './styles/ScholarshipCard.css'
import { Heart, MapPin, DollarSign, BookOpen, Clock } from 'lucide-react'

export default function ScholarshipCard({scholarship, onSelect, isWishlisted, onToggleWishlist }) {

    // to handle add/remove from wishlist
    const handleSave = (e) => {
        e.stopPropagation()
        // first check if onToggleWishlist exists (toggleWishlist function from useWishlist)
        // // Then toggle this scholarship(that known by its scholarship.id) in wishlist (if function exists)
        // if (onToggleWishlist) {
        //     onToggleWishlist(scholarship.id)
        // }
        // above is the full logic, below is the existed function to use
        onToggleWishlist?.(scholarship.id)

    }

    return (
        <div className="sc-card" onClick={() => onSelect?.(scholarship)}>
            {/* Banner */}
            <div className="sc-banner">
                <img src={scholarship.image} alt={scholarship.org} className="sc-banner-img" />
                <div className="sc-banner-overlay" />

                {/* Type badge */}
                <span className="sc-type-badge">{scholarship.type}</span>

                {/* Deadline badge */}
                <span className="sc-deadline-badge">
                    <Clock size={9} /> {scholarship.deadline}
                </span>

                {/* Heart */}
                <button
                    className={`sc-heart-btn${isWishlisted ? ' saved' : ''}`}
                    onClick={handleSave}
                    aria-label="Wishlist"
                >
                    <Heart size={14} fill={isWishlisted ? 'currentColor' : 'none'} />
                </button>

                {/* Logo + title */}
                <div className="sc-banner-bottom">
                    <div className="sc-logo-wrap">
                        {scholarship.logo
                            ? <img src={scholarship.logo} alt={scholarship.org} />
                            : <div className="sc-logo-placeholder">{scholarship.org}</div>
                        }
                    </div>
                    <span className="sc-banner-title">{scholarship.title}</span>
                </div>
            </div>

            {/* Content */}
            <div className="sc-content">
                <div className="sc-stats-grid">
                    <div className="sc-stat">
                        <div className="sc-stat-icon"><MapPin size={13} /></div>
                        <div>
                            <div className="sc-stat-label">Country</div>
                            <div className="sc-stat-value">{scholarship.country}</div>
                        </div>
                    </div>
                    <div className="sc-stat">
                        <div className="sc-stat-icon"><DollarSign size={13} /></div>
                        <div>
                            <div className="sc-stat-label">Type</div>
                            <div className="sc-stat-value">{scholarship.type}</div>
                        </div>
                    </div>
                    <div className="sc-stat">
                        <div className="sc-stat-icon"><BookOpen size={13} /></div>
                        <div>
                            <div className="sc-stat-label">Degree</div>
                            <div className="sc-stat-value">{scholarship.degree}</div>
                        </div>
                    </div>
                    <div className="sc-stat">
                        <div className="sc-stat-icon"><Clock size={13} /></div>
                        <div>
                            <div className="sc-stat-label">Deadline</div>
                            <div className="sc-stat-value">{scholarship.deadline}</div>
                        </div>
                    </div>
                </div>

                <div className="sc-divider" />
                <div className="sc-actions">
                    <button
                        className="sc-view-btn"
                        onClick={(e) => { e.stopPropagation(); onSelect?.(scholarship) }}
                    >
                        View Details
                    </button>
                </div>
            </div>
        </div>
    )
}