/**
 * pages/WishlistPage.jsx
 */
import './styles/WishlistPage.css'
import UniCard from '../components/ui/UniCard'
import { UNIVERSITIES } from '../data/universities'
import {SCHOLARSHIPS} from "../data/scholarships.js";
import ScholarshipCard from "../components/ui/ScholarshipCard.jsx";

export default function WishlistPage({ wishlist, toggleWishlist, onSelectUni, setPage }) {
    // use .include() to check if in a array (or string) contains a specific value
    const savedUnis = UNIVERSITIES.filter(u => wishlist.includes(u.id))
    const savedScholarships = SCHOLARSHIPS.filter(s => wishlist.includes(`s-${s.id}`))
    const totalSaved = savedUnis.length + savedScholarships.length

    return (
        <div className="animate-fade-in">
            <div className="wishlist-page__heading">
                <h2 className="wishlist-page__title">❤️ My Wishlist</h2>
                <p className="wishlist-page__count">
                    {totalSaved} saved {totalSaved === 1 ? 'item' : 'items'}
                </p>
            </div>

            {totalSaved === 0 ? (
                <div className="wishlist-empty">
                    <div className="wishlist-empty__icon">💔</div>
                    <div className="wishlist-empty__title">Your wishlist is empty</div>
                    <p className="wishlist-empty__sub">
                        Save universities or scholarships by tapping the heart icon on any card
                    </p>
                    <div className="wishlist-empty__btns">
                        <button className="btn-primary" onClick={() => setPage('universities')}>
                            Browse Universities
                        </button>
                        <button className="btn-outline" onClick={() => setPage('scholarships')}>
                            Browse Scholarships
                        </button>
                    </div>
                </div>
            ) : (
                <>
                    {savedUnis.length > 0 && (
                        <div className="wishlist-section">
                            <h3 className="wishlist-section__title">
                                Universities ({savedUnis.length})
                            </h3>
                            <div className="wishlist-page__grid">
                                {savedUnis.map(u => (
                                    <UniCard
                                        key={u.id}
                                        uni={u}
                                        onSelect={onSelectUni}
                                        isWishlisted={wishlist.includes(u.id)}
                                        onToggleWishlist={toggleWishlist}
                                    />
                                ))}
                            </div>
                        </div>
                    )}

                    {savedScholarships.length > 0 && (
                        <div className="wishlist-section">
                            <h3 className="wishlist-section__title">
                                Scholarships ({savedScholarships.length})
                            </h3>
                            <div className="wishlist-page__grid">
                                {savedScholarships.map(s => (
                                    <ScholarshipCard
                                        key={s.id}
                                        scholarship={s}
                                        onSelect={onSelectUni}
                                        isWishlisted={wishlist.includes(`s-${s.id}`)}
                                        onToggleWishlist={(id) => toggleWishlist(`s-${id}`)}
                                    />
                                ))}
                            </div>
                        </div>
                    )}
                </>
            )}
        </div>
    )
}