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

            const name     = (u.name ?? '').toLowerCase()
            const location = (u.location ?? '').toLowerCase()
            const short    = (u.shortName ?? '').toLowerCase()
            const majors   = Array.isArray(u.majors) ? u.majors : []
            const priceMin = u.priceMin ?? 0

            const matchesSearch =
                !q ||
                name.includes(q) ||
                location.includes(q) ||
                short.includes(q) ||
                majors.some(m => (m ?? '').toLowerCase().includes(q))

            const matchesLocation = !filters.location || location === (filters.location ?? '').toLowerCase()
            const matchesMajor = !filters.major || majors.includes(filters.major)

            const matchesBudget   = priceMin <= (filters.budgetMax ?? 10000)

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