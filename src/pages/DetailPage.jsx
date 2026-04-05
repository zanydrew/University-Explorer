import ScholarshipDetailPage from './ScholarshipDetailPage.jsx'
import UniversityDetailPage from "./UniversityDetailPage.jsx";

export default function DetailPage({ data, onBack, isWishlisted, onToggleWishlist }) {
    const isScholarship = !!data?.title

    if (isScholarship) {
        return (
            <ScholarshipDetailPage
                data={data}
                onBack={onBack}
                isWishlisted={isWishlisted}
                onToggleWishlist={onToggleWishlist}
            />
        )
    }

    return (
        <UniversityDetailPage
            data={data}
            onBack={onBack}
            isWishlisted={isWishlisted}
            onToggleWishlist={onToggleWishlist}
        />
    )
}
