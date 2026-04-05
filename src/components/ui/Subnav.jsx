import { ArrowLeft, Heart } from 'lucide-react'
import './styles/Subnav.css'

export default function SubNav({ backLabel = 'Back', onBack, currentName, saved, onSave, links }) {
    return (
        <div className="subnav">
            {/* Breadcrumb */}
            <div className="subnav__breadcrumb">
                <button className="subnav__back-btn" onClick={onBack}>
                    <ArrowLeft size={14} />
                    {backLabel}
                </button>
                <span className="subnav__sep">/</span>
                <span className="subnav__current">{currentName}</span>
            </div>

            {/* Optional centre links slot */}
            {links && <div className="subnav__links">{links}</div>}

            {/* Actions */}
            <div className="subnav__actions">
                <button
                    className={`subnav__save-btn${saved ? ' saved' : ''}`}
                    onClick={onSave}
                >
                    <Heart size={13} fill={saved ? 'currentColor' : 'none'} />
                    {saved ? 'Saved' : 'Save'}
                </button>
            </div>
        </div>
    )
}