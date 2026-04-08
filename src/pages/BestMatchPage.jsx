import {ALL_LOCATIONS, ALL_MAJORS} from "../data/universities.js";
import NavyHero from "../components/ui/NavyHero.jsx";
import Icon from "../components/ui/Icon.jsx";
import UniCard from "../components/ui/UniCard.jsx";
import './styles/BestMatchPage.css'

export default function BestMatchPage({  matchForm,
                                          setMatchField,
                                          matchResults,
                                          runMatch,
                                          onSelectUni,
                                          wishlist,
                                          toggleWishlist,}) {
    return (
        <div className="animate-fade-in">
            <NavyHero
                eyebrow="SMART MATCH"
                title="Best Match For You"
                subtitle="Share your preferences and we'll surface the universities that fit your profile best."
            />

            {/* Preference form */}
            <div className="match-form">
                <h3 className="match-form__title">Your Preferences</h3>

                <div className="match-form__grid">
                    {/* Major */}
                    <div className="match-form__field">
                        <label>Preferred Program</label>
                        <select
                            className="form-input"
                            value={matchForm.major}
                            onChange={e => setMatchField('major', e.target.value)}
                        >
                            <option value="">Any Program</option>
                            {ALL_MAJORS.map(m => <option key={m} value={m}>{m}</option>)}
                        </select>
                    </div>

                    {/* Location */}
                    <div className="match-form__field">
                        <label>Preferred Location</label>
                        <select
                            className="form-input"
                            value={matchForm.location}
                            onChange={e => setMatchField('location', e.target.value)}
                        >
                            <option value="">Any Location</option>
                            {ALL_LOCATIONS.map(l => <option key={l} value={l}>{l}</option>)}
                        </select>
                    </div>

                    {/* Budget */}
                    <div className="match-form__field">
                        <label>
                            Max Budget:{' '}
                            <span className="match-form__budget-accent">
                ${matchForm.budget.toLocaleString()}/yr
              </span>
                        </label>
                        <input
                            type="range"
                            className="match-form__range"
                            min={300} max={5000} step={100}
                            value={matchForm.budget}
                            onChange={e => setMatchField('budget', Number(e.target.value))}
                        />
                        <div className="match-form__range-labels">
                            <span>$300</span><span>$5,000</span>
                        </div>
                    </div>
                </div>

                <button
                    className="btn-primary match-form__submit"

                    onClick={runMatch}
                >
                    <Icon name="wand" size={16} color="#fff" /> Find My Matches
                </button>
            </div>

            {/* Results */}
            {matchResults !== null && (
                <div className="match-results animate-fade-in">
                    <div className="match-results__heading">
                        <h3 className="match-results__title">
                            {matchResults.length > 0
                                ? `🎯 ${matchResults.length} Matches Found`
                                : 'No matches — try broadening your filters'}
                        </h3>
                        {matchResults.length > 0 && (
                            <p className="match-results__sub">Sorted by relevance to your profile</p>
                        )}
                    </div>

                    <div className="match-results__grid">
                        {matchResults.map((u, i) => (
                            <div key={u.id} className="match-results__card-wrapper">
                                {i === 0 && (
                                    <div className="match-results__best-badge">🏆 Best Match</div>
                                )}
                                <UniCard
                                    uni={u}
                                    onSelect={onSelectUni}
                                    isWishlisted={wishlist.includes(u.id)}
                                    onToggleWishlist={toggleWishlist}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}