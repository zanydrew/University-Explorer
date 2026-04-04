import {BookOpen, Clock, DollarSign, Heart, MapPin} from "lucide-react";

export default function UniCard({uni, onSelect, isWishlisted, onToggleWishlist}) {

    const handleSave = (e) => {
        e.stopPropagation()
        onToggleWishlist?.(uni.id)
    }

    return (
        <div className="sc-card" onClick={() => onSelect(uni)}>
            {/* Banner */}
            <div className="sc-banner">
                <img src={uni.image} alt={uni.name} className="sc-banner-img" />
                <div className="sc-banner-overlay" />

                {/* Type badge */}
                <span className="sc-type-badge">{uni.type}</span>

                {/* Heart */}
                <button
                    className={`sc-heart-btn${isWishlisted ? ' saved' : ''}`}
                    onClick={handleSave}
                    aria-label="Wishlist"
                >
                    <Heart size={14} fill={isWishlisted ? 'currentColor' : 'none'} />
                </button>

                {/* Logo + name */}
                <div className="sc-banner-bottom">
                    <div className="sc-logo-wrap">
                        {uni.logo
                            ? <img src={uni.logo} alt={uni.name} />
                            : <div className="sc-logo-placeholder">{uni.shortName}</div>
                        }
                    </div>
                    <span className="sc-banner-title">{uni.name}</span>
                </div>
            </div>

            {/* Content */}
            <div className="sc-content">
                <div className="sc-stats-grid">
                    <div className="sc-stat">
                        <div className="sc-stat-icon"><MapPin size={13} /></div>
                        <div>
                            <div className="sc-stat-label">Location</div>
                            <div className="sc-stat-value">{uni.location}</div>
                        </div>
                    </div>
                    <div className="sc-stat">
                        <div className="sc-stat-icon"><DollarSign size={13} /></div>
                        <div>
                            <div className="sc-stat-label">Tuition/yr</div>
                            <div className="sc-stat-value">${uni.priceMin}–${uni.priceMax}</div>
                        </div>
                    </div>
                    <div className="sc-stat">
                        <div className="sc-stat-icon"><BookOpen size={13} /></div>
                        <div>
                            <div className="sc-stat-label">Programs</div>
                            <div className="sc-stat-value">{uni.programsCount} programs</div>
                        </div>
                    </div>
                    <div className="sc-stat">
                        <div className="sc-stat-icon"><Clock size={13} /></div>
                        <div>
                            <div className="sc-stat-label">Admission</div>
                            <div className="sc-stat-value">{uni.admissionDate}</div>
                        </div>
                    </div>
                </div>

                <div className="sc-divider" />
                <div className="sc-actions">
                    <button
                        className="sc-view-btn"
                        onClick={(e) => { e.stopPropagation(); onSelect(uni) }}
                    >
                        View Details
                    </button>
                </div>
            </div>
        </div>
    )
}