import { useState, useMemo } from 'react'
import { UNIVERSITIES } from '../data/universities'

const DEFAULT_FILTERS = {
    location:  '',
    major:     '',
    budgetMax: 5000,
}
export function useUniversityFilter() {
    const [searchQuery, setSearchQuery] = useState('')
    const [filters, setFilters]         = useState(DEFAULT_FILTERS)

    const filteredUniversities
}