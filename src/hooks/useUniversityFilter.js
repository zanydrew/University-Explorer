import { useState, useMemo } from 'react'
import { UNIVERSITIES } from '../data/universities'

const DEFAULT_FILTERS = {
    location:  '',
    major:     '',
    budgetMax: 10000,
}
export function useUniversityFilter() {
    const [searchQuery, setSearchQuery] = useState('')
    const [filters, setFilters]         = useState(DEFAULT_FILTERS)

    // imprtant: we use useMemo because we only need to use this filterUniversity when we need to
    // ,not every time the component rerender
    //, and since this filter logics need alot of operation, so it will be a bit slow
    // , that's why we only want it to do (rerender component) when user search or click on filter
    const filteredUniversities = useMemo(() => {
        const q = searchQuery.toLowerCase().trim()
        return UNIVERSITIES.filter(u => {
            const matchesSearch =
                !q ||
                u.name.toLowerCase().includes(q) ||
                u.location.toLowerCase().includes(q) ||
                (u.shortName?.toLowerCase().includes(q)) ||
                u.majors.some(m => m.toLowerCase().includes(q))

            const matchesLocation = !filters.location || u.location === filters.location
            const matchesMajor    = !filters.major    || u.majors.includes(filters.major)
            // new data uses priceMin instead of tuitionMin
            const matchesBudget   = (u.priceMin ?? u.priceMin ?? 0) <= filters.budgetMax

            return matchesSearch && matchesLocation && matchesMajor && matchesBudget
        })
    }, [searchQuery, filters])

    const hasActiveFilters =
        !!filters.location || !!filters.major || filters.budgetMax < 10000 || !!searchQuery

    const clearFilters = () => {
        setFilters(DEFAULT_FILTERS)
        setSearchQuery('')
    }

    const setFilter = (key, value) =>
        setFilters(prev => ({ ...prev, [key]: value }))

    return {
        searchQuery, setSearchQuery,
        filters, setFilter,
        filteredUniversities,
        hasActiveFilters, clearFilters,
    }

}