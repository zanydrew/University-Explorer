import {useState} from "react";
import ScholarshipCard from "../components/ScholarshipCard.jsx";
import { SCHOLARSHIPS } from "../data/scholarships";

export default function ScholarshipPage() {
    const [selected, setSelected] = useState(null);

    if (selected) {
        return (
            <ScholarshipDetail />
        )
    }
    return (
        <div className="page-fade">
            <div className="page-heading">
                <h2>🏅 Scholarships</h2>
                <p>Explore funding opportunities for your education in Cambodia</p>
            </div>
            <div className="grid-3">
                {SCHOLARSHIPS.map(s => (
                    <ScholarshipCard key={s.id} data={s} onView={handleView} />
                ))}
            </div>
        </div>
    )
}