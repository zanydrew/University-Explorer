/**
 * pages/ScholarshipsPage.jsx
 */
import './styles/ScholarshipsPage.css'
import ScholarshipCard from '../components/ui/ScholarshipCard'
import { SCHOLARSHIPS } from '../data/scholarships'

export default function ScholarshipsPage({ onSelectScholarship, wishlist, toggleWishlist }) {
    return (
        <div className="animate-fade-in">
            <div className="scholarships-page__heading">
                <h2 className="scholarships-page__title">🏅 Scholarships</h2>
                <p className="scholarships-page__sub">
                    Explore funding opportunities for your education in Cambodia
                </p>
            </div>
            <div className="scholarships-page__grid">
                {SCHOLARSHIPS.map(s => (
                    <ScholarshipCard
                        key={s.id}
                        scholarship={s}
                        onSelect={onSelectScholarship}
                        isWishlisted={wishlist?.includes(`s-${s.id}`)}
                        onToggleWishlist={(id) => toggleWishlist(`s-${id}`)}
                    />
                ))}
            </div>
        </div>
    )
}