export default function ScholarshipCard({data}) {
    return (
        <div>
            <img src={data.image} alt={data.title} className="img-fluid" />
        </div>
    )
}