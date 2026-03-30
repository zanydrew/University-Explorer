import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import UniversitiesPage from './pages/UniversitiesPage';
import MatchPage     from "./pages/MatchPage";
import ScholarshipPage from "./pages/ScholarshipPage";
import WishlistPage from "./pages/WishlistPage";
import ScholarshipCard from "./components/ScholarshipCard.jsx";
import "./styles/style.css";


function App() {

  return (
      <>
          <ScholarshipCard />
      </>
      // <div className="min-h-screen bg-black">
      //   <Navbar />
      //   <HomePage />
      //   <UniversitiesPage />
      //   <MatchPage />
      //   <ScholarshipPage />
      //   <WishlistPage />
      //   <Footer />
      // </div>
  )
}

export default App
