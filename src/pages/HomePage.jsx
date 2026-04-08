/* Homepage contains:
- Hero
- Stat
- Popular/Trending Uni
- Find Best Match
- Scholarships
- Footer
* */

import {ALL_MAJORS, UNIVERSITIES} from "../data/universities.js";
import {SCHOLARSHIPS} from "../data/scholarships.js";

const TRENDING     = UNIVERSITIES.slice(0, 3)

const QUICK_MAJORS = ['Computer Science', 'Business Administration', 'Architecture', 'Environmental Engineering']

const STATS = [
    { icon: 'building', value: UNIVERSITIES.length, label: 'Universities'   },
    { icon: 'book',     value: ALL_MAJORS.length,   label: 'Programs Available' },
    { icon: 'users',    value: '85K+',              label: 'Total Students'},
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
        </div>
    )
}