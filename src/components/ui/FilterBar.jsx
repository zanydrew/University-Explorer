import {ALL_LOCATIONS, ALL_MAJORS} from "../../data/universities.js";

export default function FilterBar({ filters, setFilter, hasActiveFilters, clearFilters }){
    return (
        <div className="filter-bar">
            <div className="filter-bar__label">
                <Icon name="filter" size={14} color="var(--color-text-muted)" />
                <span>Filter</span>
            </div>

            <select
                className="form-input filter-bar__select filter-bar__select--major"
                value={filters.location}
                onChange={e => setFilter('location', e.target.value)}
            >
                <option value="">All Locations</option>
                {ALL_LOCATIONS.map(l => <option key={l} value={l}>{l}</option>)}
            </select>

            <select
                className="form-input filter-bar__select filter-bar__select--major"
                value={filters.major}
                onChange={e => setFilter('major', e.target.value)}
            >
                <option value="">All Programs</option>
                {ALL_MAJORS.map(m => <option key={m} value={m}>{m}</option>)}
            </select>

            <div className="filter-bar__budget">
                <Icon name="dollar" size={14} color="var(--color-text-muted)" />
                <span className="filter-bar__budget-label">
          Budget: <strong>${filters.budgetMax.toLocaleString()}</strong>/yr
        </span>
                <input
                    type="range"
                    className="filter-bar__budget-range"
                    min={300} max={10000} step={100}
                    value={filters.budgetMax}
                    onChange={e => setFilter('budgetMax', Number(e.target.value))}
                />
            </div>

            {hasActiveFilters && (
                <button className="filter-bar__clear" onClick={clearFilters}>
                    <Icon name="x" size={12} color="#dc2626" /> Clear
                </button>
            )}
        </div>
    )
}