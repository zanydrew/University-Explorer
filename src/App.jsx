import ScholarshipCard from "./components/ui/ScholarshipCard.jsx";
// import "./styles/style.css";
import {SCHOLARSHIPS} from "./data/scholarships.js";
import {UNIVERSITIES} from "./data/universities.js";
import UniCard from "./components/ui/UniCard.jsx";
import ScholarshipDetailPage from "./pages/ScholarshipDetailPage.jsx";
import {useState} from "react";
import { useWishlist }          from './hooks/useWishlist'
import DetailPage from "./pages/DetailPage.jsx";


function App() {

    const [selectedItem, setSelectedItem] = useState(null)   // university OR scholarship

    const { wishlist, toggleWishlist } = useWishlist()

    const navigate = (target, item = null) => {
        setSelectedItem(item ?? null)
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    // Which page to go back to from detail
    const detailBackPage = selectedItem?.title ? 'scholarships' : 'universities'


  return (
      <>
          <DetailPage
              data={selectedItem}
              onBack={() => navigate(detailBackPage)}
              isWishlisted={
                  wishlist.includes(`s-${selectedItem.id}`)
              }
              onToggleWishlist={
                  (id) => toggleWishlist(`s-${id}`)
              }
          />
      </>
  )
}

export default App
