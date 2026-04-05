import { useState, useRef } from 'react'
import './styles/UniversityDetailPage.css'
import {
    MapPin, BookOpen, DollarSign, CalendarDays,
    Users, Globe, ChevronDown, Heart, Send,
    GraduationCap, ArrowLeft, Bookmark
} from 'lucide-react'

const ADMISSION_SECTIONS = [
    {
        title: 'Scholarship Description',
        icon: <GraduationCap size={15} />,
        key: 'description',
    },
    {
        title: 'Scholarship Benefits',
        icon: <BookOpen size={15} />,
        key: 'benefits',
    },
    {
        title: 'Majors/Field of Study',
        icon: <BookOpen size={15} />,
        key: 'majors',
    },
    {
        title: 'Eligibility Requirements',
        icon: <BookOpen size={15} />,
        key: 'eligibility',
    },
    {
        title: 'Required Documents',
        icon: <BookOpen size={15} />,
        key: 'documents',
    },
    {
        title: 'How to Apply',
        icon: <Send size={15} />,
        key: 'steps',
    },
]

export default function ScholarshipDetailPage({data, onBack , isWishlisted, onToggleWishlist}) {
    const [openAccordion,  setOpenAccordion]  = useState(null)
    const [saved,          setSaved]          = useState(isWishlisted ?? false)

    const admissionRef = useRef(null)

    const handleSave = () => {
        setSaved(v => !v)
        onToggleWishlist?.(data.id)
    }

    // const initials = data.shortName?.slice(0, 2) ?? data.name?.slice(0, 2) ?? '?'

    // Quick info row items
    const infoItems = [
        { icon: <MapPin size={16} />,       label: 'Study In',  value: data.country?.split(',')[0] },
        { icon: <GraduationCap size={16} />,     label: 'Degree', value: data.degree },
        { icon: <DollarSign size={16} />,   label: 'Type',  value: data.type },
        { icon: <CalendarDays size={16} />, label: 'Deadline', value: data.deadline },
    ]


    return (
        <div className="udp-wrap animate-fade-in">

            {/* ── Sticky sub-nav ── */}
            <div className="udp-subnav">
                <div className="udp-subnav__breadcrumb">
                    <button
                        onClick={onBack}
                        style={{ background:'none', border:'none', cursor:'pointer', display:'flex', alignItems:'center', gap:5, color:'var(--color-text-muted)', fontFamily:'inherit', fontSize:13 }}
                    >
                        <ArrowLeft size={14} /> Universities
                    </button>
                    <span>/</span>
                    <span className="udp-subnav__breadcrumb-name">{data.shortName}</span>
                </div>

                {/*<div className="udp-subnav__links">*/}
                {/*    <button className="udp-subnav__link" onClick={() => scrollTo(programsRef)}>Programs</button>*/}
                {/*    <button className="udp-subnav__link" onClick={() => scrollTo(admissionRef)}>Admission</button>*/}
                {/*</div>*/}

                <div className="udp-subnav__actions">
                    <button
                        className={`udp-sidebar__outline${saved ? ' saved' : ''}`}
                        style={{ padding: '6px 14px', fontSize: 13 }}
                        onClick={handleSave}
                    >
                        <Heart size={13} fill={saved ? 'currentColor' : 'none'} />
                        {saved ? 'Saved' : 'Save'}
                    </button>
                </div>
            </div>

            {/* ── Hero ── */}
            <div className="udp-hero">
                {data.image
                    ? <img src={data.image} alt={data.name} className="udp-hero__img" />
                    : <div className="udp-hero__dots" />
                }
                <div className="udp-hero__dots" />
                <div className="udp-hero__overlay" />

                <div className="udp-hero__content">
                    <div>
                        <div className="udp-hero__badges">
                            <span className="udp-hero__badge">{data.type} University</span>
                            {data.ranking && (
                                <span className="udp-hero__badge udp-hero__badge--rank">
                                    #{data.ranking} in Cambodia
                                </span>
                            )}
                        </div>
                        <h1 className="udp-hero__title">{data.name}</h1>
                        <p className="udp-hero__meta">
                            {data.address} · Est. {data.established}
                        </p>
                    </div>

                    <div className="udp-hero__tagline">
                        <p className="udp-hero__tagline-label">Accredited by</p>
                        <p className="udp-hero__tagline-text">{data.accreditation}</p>
                    </div>
                </div>
            </div>

            {/* ── Quick info row ── */}
            <div className="udp-inforow">
                {infoItems.map(({ icon, label, value }) => (
                    <div key={label} className="udp-infocard">
                        <div className="udp-infocard__icon">{icon}</div>
                        <div>
                            <div className="udp-infocard__label">{label}</div>
                            <div className="udp-infocard__value">{value}</div>
                        </div>
                    </div>
                ))}
            </div>

            {/* ── Body ── */}
            <div className="udp-body">
                {/* ── LEFT COLUMN ── */}
                <div>
                    {/* Admission */}
                    <div ref={admissionRef} className="udp-admission">
                        <h2 className="udp-section-title">Admission</h2>
                        <p className="udp-section-sub">Everything you need to apply</p>

                        {ADMISSION_SECTIONS.map((sec, i) => {
                            const items = Array.isArray(data[sec.key]) ? data[sec.key] : []
                            if (!items.length) return null
                            return (
                                <div key={i} className="udp-accordion">
                                    <div className="udp-accordion__header" onClick={() => setOpenAccordion(openAccordion === i ? null : i)}>
                                        <div className="udp-accordion__title">
                                            <span className="udp-accordion__icon-wrap">{sec.icon}</span>
                                            {sec.title}
                                        </div>
                                        <span className={`udp-accordion__chevron${openAccordion === i ? ' open' : ''}`}>
                                            <ChevronDown size={18} />
                                        </span>
                                    </div>
                                    {openAccordion === i && <div className="udp-accordion__divider" />}
                                    <div className={`udp-accordion__body${openAccordion === i ? ' open' : ''}`}>
                                        <div className="udp-accordion__body-inner">
                                            {items.map((item, j) => (
                                                <div key={j} className="udp-check-item">
                                                    <span className="udp-check-bullet">✓</span>
                                                    {item}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>

                {/* ── SIDEBAR ── */}
                <div className="udp-sidebar">
                    <div className="udp-sidebar-card">
                        <div className="udp-sidebar__top">
                            <div className="udp-sidebar__logo">{data.logo ?? data.name}</div>
                            <div className="udp-sidebar__badge">
                                <GraduationCap size={10} /> {data.type}
                            </div>
                            <div className="udp-sidebar__name">{data.name}</div>
                            <div className="udp-sidebar__meta">{data.location} · {data.type}</div>
                        </div>

                        <div className="udp-sidebar__stats">
                            {[
                                ['Programs',    `${data.programsCount ?? data.majors.length}`],
                                ['Tuition/yr',  `$${data.priceMin}–$${data.priceMax}`],
                                ['Students',    data.students?.toLocaleString()],
                                ['Admission',   data.admissionDate],
                            ].map(([label, value]) => (
                                <div key={label} className="udp-sidebar__stat-row">
                                    <span className="udp-sidebar__stat-label">{label}</span>
                                    <span className="udp-sidebar__stat-value">{value}</span>
                                </div>
                            ))}
                        </div>

                        <div className="udp-sidebar__actions">
                            <a
                                href={data.website ? data.website : '#'}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="udp-sidebar__apply"
                            >
                                <Send size={15} /> Apply Now
                            </a>
                            <div className="udp-sidebar__secondary">
                                <button
                                    className={`udp-sidebar__outline${saved ? ' saved' : ''}`}
                                    onClick={handleSave}
                                >
                                    <Heart size={13} fill={saved ? 'currentColor' : 'none'} />
                                    {saved ? 'Saved' : 'Save'}
                                </button>
                                <a
                                    href={data.website ? data.website : '#'}
                                    // href={data.website ? `https://${data.website.replace(/^https?:\/\//, '')}` : '#'}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="udp-sidebar__outline"
                                >
                                    <Globe size={13} /> Website
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Deadline card */}
                    <div className="udp-deadline-card">
                        <div className="udp-deadline-card__label">
                            <CalendarDays size={13} /> Application Deadline
                        </div>
                        <div className="udp-deadline-card__date">{data.deadline}</div>
                        <div className="udp-deadline-card__note">{data.accreditation}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}