import {useState, useEffect} from "react";
import { useWishlist }          from './hooks/useWishlist'
import DetailPage from "./pages/DetailPage.jsx";
import {useUniversityFilter} from "./hooks/useUniversityFilter.js";
import {useBestMatch} from "./hooks/useBestMatch.js";
import Navbar from "./components/layout/Navbar.jsx";
import Footer from "./components/layout/Footer.jsx";
import WishlistPage from "./pages/WishlistPage.jsx";
import BestMatchPage from "./pages/BestMatchPage.jsx";
import ScholarshipsPage from "./pages/ScholarshipPage.jsx";
import UniversitiesPage from "./pages/UniversitiesPage.jsx";
import HomePage from "./pages/HomePage.jsx";


function App() {

    useEffect(() => {
        document.title = "UniSearch";
    }, []);

    const [page,        setPageState]   = useState('home')
    const [selectedItem, setSelectedItem] = useState(null)   // university OR scholarship

    const { wishlist, toggleWishlist } = useWishlist()

    const {
        searchQuery, setSearchQuery,
        filters, setFilter,
        filteredUniversities,
        hasActiveFilters, clearFilters,
    } = useUniversityFilter()

    const { matchForm, setMatchField, matchResults, runMatch } = useBestMatch()

    const navigate = (target, item = null) => {
        setPageState(target)
        setSelectedItem(item ?? null)
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    const handleSelectItem = (item) => {
        setSelectedItem(item)
        setPageState('detail')
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    // Which page to go back to from detail
    const detailBackPage = selectedItem?.title ? 'scholarships' : 'universities'

    const isScholarship = (item) => !!item?.title

  return (
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <Navbar
              page={page}
              setPage={navigate}
              wishlistCount={wishlist.length}
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
          />

          <main style={{ flex: 1, maxWidth: 1180, width: '100%', margin: '0 auto', padding: '32px 24px 64px' }}>
              {page === 'home' && (
                  <HomePage
                      searchQuery={searchQuery}
                      setSearchQuery={setSearchQuery}
                      setPage={navigate}
                      setFilterMajor={v => setFilter('major', v)}
                      wishlist={wishlist}
                      toggleWishlist={toggleWishlist}
                      onSelectUni={handleSelectItem}
                      onSelectScholarship={handleSelectItem}
                  />
              )}

              {page === 'universities' && (
                  <UniversitiesPage
                      filteredUniversities={filteredUniversities}
                      filters={filters}
                      setFilter={setFilter}
                      hasActiveFilters={hasActiveFilters}
                      clearFilters={clearFilters}
                      onSelectUni={handleSelectItem}
                      wishlist={wishlist}
                      toggleWishlist={toggleWishlist}
                  />
              )}

              {page === 'detail' && selectedItem && (
                  <DetailPage
                      data={selectedItem}
                      onBack={() => navigate(detailBackPage)}
                      isWishlisted={
                          isScholarship(selectedItem)
                              ? wishlist.includes(`s-${selectedItem.id}`)
                              : wishlist.includes(selectedItem.id)
                      }
                      onToggleWishlist={
                          isScholarship(selectedItem)
                              ? (id) => toggleWishlist(`s-${id}`)
                              : toggleWishlist
                      }
                  />
              )}

              {page === 'scholarships' && (
                  <ScholarshipsPage
                      onSelectScholarship={handleSelectItem}
                      wishlist={wishlist}
                      toggleWishlist={toggleWishlist}
                  />
              )}

              {page === 'match' && (
                  <BestMatchPage
                      matchForm={matchForm}
                      setMatchField={setMatchField}
                      matchResults={matchResults}
                      runMatch={runMatch}
                      onSelectUni={handleSelectItem}
                      wishlist={wishlist}
                      toggleWishlist={toggleWishlist}
                  />
              )}

              {page === 'wishlist' && (
                  <WishlistPage
                      wishlist={wishlist}
                      toggleWishlist={toggleWishlist}
                      onSelectUni={handleSelectItem}
                      setPage={navigate}
                  />
              )}
          </main>

          <Footer />
      </div>
  )
}

export default App
