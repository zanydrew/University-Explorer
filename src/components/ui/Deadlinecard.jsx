import { CalendarDays } from 'lucide-react'
export default function DeadlineCard({ date, note, label = 'Application Deadline' }) {
    return (
        <div className="deadline-card">
            <div className="deadline-card__label">
                <CalendarDays size={13} />
                {label}
            </div>
            <div className="deadline-card__date">{date}</div>
            {note && <div className="deadline-card__note">{note}</div>}
        </div>
    )
}