import ScholarshipDetailPage from './ScholarshipDetailPage.jsx'

export default function DetailPage({ data, onBack, isWishlisted, onToggleWishlist }){
    return (
        <ScholarshipDetailPage
            data={data}
            onBack={onBack}
            isWishlisted={isWishlisted}
            onToggleWishlist={onToggleWishlist}
        />
    )
}