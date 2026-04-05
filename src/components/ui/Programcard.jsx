import { useState } from 'react'
import './styles/Programcard.css'

const TABS = ['Overview', 'Curriculum', 'Requirements', 'Career Opportunities']

export function ProgramCard({ program: p, selected, onSelect }) {
    return (
        <div
            className={`program-card${selected ? ' active' : ''}`}
            onClick={() => onSelect(p)}
        >
            <div className="program-card__top">
                <span className={`deg-badge deg-badge--${p.degree.toLowerCase()}`}>
                    {p.degree}
                </span>
                <span className="program-card__field">{p.field}</span>
            </div>

            <div className="program-card__name">{p.name}</div>
            <p className="program-card__desc">{p.desc}</p>

            <div className="program-card__stats">
                <div>
                    <div className="program-card__stat-label">Duration</div>
                    <div className="program-card__stat-value">{p.duration}</div>
                </div>
                <div>
                    <div className="program-card__stat-label">Tuition</div>
                    <div className="program-card__stat-value">{p.tuition}</div>
                </div>
            </div>

            <button
                className={`program-card__btn${selected ? ' viewing' : ''}`}
                onClick={e => { e.stopPropagation(); onSelect(p) }}
            >
                {selected ? '✓ Viewing Details' : 'View Details →'}
            </button>
        </div>
    )
}

export function ProgramDetailPanel({ program: p, onClose }) {
    const [tab, setTab] = useState('Overview')

    return (
        <div className="program-panel">
            {/* Header */}
            <div className="program-panel__header">
                <div>
                    <div className="program-panel__header-meta">
                        <span className={`deg-badge deg-badge--${p.degree.toLowerCase()}`}>{p.degree}</span>
                        <span className="program-panel__field">{p.field}</span>
                    </div>
                    <div className="program-panel__name">{p.name}</div>
                    <p className="program-panel__desc">{p.desc}</p>
                </div>
                <button className="program-panel__close" onClick={onClose}>×</button>
            </div>

            {/* Tab bar */}
            <div className="program-panel__tabs">
                {TABS.map(t => (
                    <button
                        key={t}
                        className={`program-panel__tab${tab === t ? ' active' : ''}`}
                        onClick={() => setTab(t)}
                    >
                        {t}
                    </button>
                ))}
            </div>

            {/* Tab body */}
            <div className="program-panel__body">
                {tab === 'Overview' && (
                    <div className="program-panel__overview-grid">
                        {[
                            ['⏱', 'Duration', p.duration],
                            ['💳', 'Tuition',  p.tuition],
                            ['🎓', 'Degree',   p.degree],
                            ['📖', 'Field',    p.field],
                        ].map(([ic, label, value]) => (
                            <div key={label} className="program-panel__overview-cell">
                                <div className="program-panel__cell-label">{ic} {label}</div>
                                <div className="program-panel__cell-value">{value}</div>
                            </div>
                        ))}
                    </div>
                )}

                {tab === 'Curriculum' && (
                    <div className="program-panel__curriculum-grid">
                        {p.curriculum.map((c, i) => (
                            <div key={i} className="program-panel__curriculum-item">
                                <span className="program-panel__curriculum-num">{i + 1}</span>
                                {c}
                            </div>
                        ))}
                    </div>
                )}

                {tab === 'Requirements' && (
                    <div className="program-panel__req-list">
                        {p.requirements.map((r, i) => (
                            <div key={i} className="program-panel__req-item">
                                <span className="program-panel__req-check">✓</span>
                                {r}
                            </div>
                        ))}
                    </div>
                )}

                {tab === 'Career Opportunities' && (
                    <div className="program-panel__career-tags">
                        {p.careers.map((c, i) => (
                            <span key={i} className="program-panel__career-tag">{c}</span>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}
