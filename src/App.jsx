import ScholarshipCard from "./components/ui/ScholarshipCard.jsx";
// import "./styles/style.css";
import {SCHOLARSHIPS} from "./data/scholarships.js";
import {UNIVERSITIES} from "./data/universities.js";
import UniCard from "./components/ui/UniCard.jsx";
import ScholarshipDetailPage from "./pages/ScholarshipDetailPage.jsx";
import {useState} from "react";


function App() {

    const [activePage, setActivePage] = useState("list"); // "list" | "detail"
    const [selected, setSelected] = useState(null);

    const handleView = (data) => {
        setSelected(data);
        setActivePage("detail");
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const handleBack = () => {
        setActivePage("list");
        setSelected(null);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
    // const handleView = (data) => {
    //     console.log("View details for:", data.title);
    // };

  return (
      <>
          {activePage === "list" && (
              <div className="cards-grid">
                  {SCHOLARSHIPS.map(s => (
                      <ScholarshipCard key={s.id} data={s} onView={handleView} />
                  ))}
              </div>
          )}

          {activePage === "detail" && selected && (
              <ScholarshipDetailPage data={selected} onBack={handleBack} />
          )}
      </>
  )
}

export default App
