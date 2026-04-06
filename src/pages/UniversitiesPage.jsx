import FilterBar from "../components/ui/FilterBar.jsx";
import UniCard from "../components/ui/UniCard.jsx";

export default function UniversitiesPage({
                                             filteredUniversities,
                                             filters,
                                             setFilter,
                                             hasActiveFilters,
                                             clearFilters,
                                             onSelectUni,
                                             wishlist,
                                             toggleWishlist,
                                         }){
    return (
        <div className="animate-fade-in">
            <div className="universities-page__heading">
                <h2 className="universities-page__title">All Universities</h2>
                <p className="universities-page__count">{filteredUniversities.length} universities in Cambodia</p>
            </div>

            <FilterBar
                filters={filters}
                setFilter={setFilter}
                hasActiveFilters={hasActiveFilters}
                clearFilters={clearFilters}
            />

            {filteredUniversities.length === 0 ? (
                <div className="universities-empty">
                    <div className="universities-empty__icon">🔍</div>
                    <div className="universities-empty__title">No universities found</div>
                    <p className="universities-empty__sub">Try adjusting your filters or search terms</p>
                </div>
            ) : (
                <div className="universities-page__grid">
                    {filteredUniversities.map(u => (
                        <UniCard
                            key={u.id}
                            uni={u}
                            onSelect={onSelectUni}
                            isWishlisted={wishlist.includes(u => u.id)}
                            onToggleWishlist={toggleWishlist}
                        />
                    ))}
                </div>
            )}
        </div>
    )
}