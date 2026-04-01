import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import UniversitiesPage from './pages/UniversitiesPage';
import MatchPage     from "./pages/MatchPage";
import ScholarshipPage from "./pages/ScholarshipPage";
import WishlistPage from "./pages/WishlistPage";
import ScholarshipCard from "./components/ScholarshipCard.jsx";
import "./styles/style.css";
import {SCHOLARSHIPS} from "./data/scholarships.js";
import {UNIVERSITIES} from "./data/universities.js";
import UniCard from "./components/UniCard.jsx";


function App() {

    const handleView = (data) => {
        console.log("View details for:", data.title);
    };

  return (
      <>
          {UNIVERSITIES.map(s => (
              <UniCard key={s.id} data={s} onView={handleView} />
          ))}
      </>
  )
}

export default App
