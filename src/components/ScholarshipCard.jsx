import {useState} from "react";

export default function ScholarshipCard({data, onView}) {
    const [saved, setSaved] = useState(false);
    return (
        <div className="sc-card">
            <div className="sc-banner">
                <img src={data.image} alt={data.title} className="sc-banner-img" />
                <div className="sc-banner-bottom">
                    <div className="sc-logo-wrap">
                        <img src={data.logo} alt={data.title} />
                    </div>
                    <span className="sc-banner-title">{data.org}</span>
                </div>
            </div>

            <div className="sc-content">
                <div className="sc-degree"><GraduationCap size={11} />{data.cardDegree}</div>
                <div className="sc-stats-grid">
                    <div className="sc-stat">
                        <div className="sc-stat-icon"><MapPin size={13} /></div>
                        <div><div className="sc-stat-label">Location</div><div className="sc-stat-value">{data.country.split(",")[0]}</div></div>
                    </div>
                    <div className="sc-stat">
                        <div className="sc-stat-icon"><DollarSign size={13} /></div>
                        <div><div className="sc-stat-label">Type</div><div className="sc-stat-value">${data.type}</div></div>
                    </div>
                    <div className="sc-stat">
                        <div className="sc-stat-icon"><BookOpen size={13} /></div>
                        <div><div className="sc-stat-label">Programs</div><div className="sc-stat-value">{data.programs} programs</div></div>
                    </div>
                    <div className="sc-stat">
                        <div className="sc-stat-icon"><Clock size={13} /></div>
                        <div><div className="sc-stat-label">Deadline</div><div className="sc-stat-value">{data.deadline}</div></div>
                    </div>
                </div>

                <div className="sc-divider" />
                <div className="sc-actions">
                    <button className="sc-view-btn" onClick={(e) => { e.stopPropagation(); onView(data); }}>View Details</button>
                    <button className={`sc-heart-btn ${saved ? "saved" : ""}`}
                            onClick={(e) => { e.stopPropagation(); setSaved(v => !v); }}
                            aria-label="Wishlist">
                        <Heart size={14} fill={saved ? "currentColor" : "none"} />
                    </button>
                </div>
            </div>
        </div>
    )
}