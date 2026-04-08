/* Homepage contains:
- Hero
- Stat
- Popular/Trending Uni
- Find Best Match
- Scholarships
- Footer
* */

import './styles/HomePage.css'
import {ALL_MAJORS, TOTAL_STUDENTS, UNIVERSITIES} from "../data/universities.js";
import {SCHOLARSHIPS} from "../data/scholarships.js";
import UniCard from "../components/ui/UniCard.jsx";
import SectionHeader from "../components/ui/SectionHeader.jsx";
import ScholarshipCard from "../components/ui/ScholarshipCard.jsx";
import Icon from "../components/ui/Icon.jsx";
import { TrendingUp, Medal } from 'lucide-react'

const TRENDING     = UNIVERSITIES.slice(0, 3)

const QUICK_MAJORS = ['Computer Science', 'Business Administration', 'Architecture', 'Environmental Engineering']

const STATS = [
    { icon: 'building', value: UNIVERSITIES.length, label: 'Universities'   },
    { icon: 'book',     value: ALL_MAJORS.length,   label: 'Programs Available' },
    { icon: 'users',    value: TOTAL_STUDENTS,              label: 'Total Students'},
    { icon: 'award',    value: SCHOLARSHIPS.length, label: 'Scholarships'},
]

export default function HomePage({
                                     searchQuery, setSearchQuery, setPage,
                                     setFilterMajor, wishlist, toggleWishlist,
                                     onSelectUni, onSelectScholarship,
                                 }) {
    return (
        <div className="animate-fade-in">
            {/* ── Hero ── */}
            <div className="home-hero">
                <div className="home-hero__blob-1" />
                <div className="home-hero__blob-2" />
                <div className="home-hero__inner">
                    <div className="home-hero__eyebrow">
                        <span className="home-hero__eyebrow-dot" />
                        <span className="home-hero__eyebrow-text">
                            Cambodia's #1 University Discovery Platform
                        </span>
                    </div>
                    <h1 className="home-hero__heading">
                        Find Your Perfect<br />
                        <span className="home-hero__heading-accent">University</span> in Cambodia
                    </h1>
                    <p className="home-hero__subtext">
                        Browse {UNIVERSITIES.length} universities, compare programs, discover scholarships,
                        and find the best match for your future.
                    </p>
                    <div className="home-hero__search">
                        <Icon name="search" size={17} color="rgba(255,255,255,0.35)" />
                        <input
                            className="home-hero__search-input"
                            value={searchQuery}
                            onChange={e => setSearchQuery(e.target.value)}
                            onKeyDown={e => e.key === 'Enter' && setPage('universities')}
                            placeholder="Search by university, major, or location…"
                        />
                        <button className="btn-primary" onClick={() => setPage('universities')}>
                            Search
                        </button>
                    </div>
                    <div className="home-hero__chips">
                        {QUICK_MAJORS.map(m => (
                            <button
                                key={m}
                                className="home-hero__chip"
                                onClick={() => { setFilterMajor(m); setPage('universities') }}
                            >
                                {m}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* ── Stats ── */}
            <div className="home-stats">
                {STATS.map(({ icon, value, label }) => (
                    <div key={label} className="home-stats__card">
                        <div className={`home-stats__icon-wrap home-stats__icon-wrap`}>
                            <Icon name={icon} size={19} color={`var(--accent-blue-dot)`} />
                        </div>
                        <div>
                            <div className="home-stats__value">{value}</div>
                            <div className="home-stats__label">{label}</div>
                        </div>
                    </div>
                ))}
            </div>

            {/* ── Trending ── */}
            <SectionHeader
                icon={<TrendingUp size={20} />}
                title="Popular Universities"
                sub="The most popular universities for Cambodian students"
                onMore={() => setPage('universities')}
            />
            <div className="home-grid-3">
                {TRENDING.map(u => (
                    <UniCard
                        key={u.id}
                        uni={u}
                        onSelect={onSelectUni}
                        isWishlisted={wishlist.includes(u.id)}
                        onToggleWishlist={toggleWishlist}
                    />
                ))}
            </div>

            {/* ── Best Match CTA ── */}
            <div className="home-match-cta">
                <div className="home-match-cta__blob" />
                <div>
                    <div className="home-match-cta__eyebrow">
                        <Icon name="sparkle" size={12} color="var(--color-teal-light)" />
                        <span className="home-match-cta__eyebrow-text">SMART MATCH</span>
                    </div>
                    <h2 className="home-match-cta__title">Find Your Best Match</h2>
                    <p className="home-match-cta__text">
                        Tell us your preferred major, location, and budget — we'll recommend
                        the universities most suited to your goals.
                    </p>
                </div>
                <button className="home-match-cta__btn" onClick={() => setPage('match')}>
                    ✨ Get Matched
                </button>
            </div>

            {/* ── Scholarships preview ── */}
            <SectionHeader
                title="🏅 Available Scholarships"
                sub="Funding opportunities for Cambodian students"
                onMore={() => setPage('scholarships')}
            />
            <div className="home-scholarships-grid">
                {SCHOLARSHIPS.slice(0, 3).map(s => (
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