import { useRef, useState } from 'react'
import './styles/UniversityDetailPage.css'
import {
    MapPin, BookOpen, DollarSign, CalendarDays,
    GraduationCap, Send,
} from 'lucide-react'

import HeroSection from "../components/ui/Herosection.jsx";
import DeadlineCard from "../components/ui/Deadlinecard.jsx";
import SidebarCard from "../components/ui/Sidebarcard.jsx";
import {ProgramCard, ProgramDetailPanel} from "../components/ui/Programcard.jsx";
import AdmissionDetails from "../components/ui/Admissiondetails.jsx";
import SubNav from "../components/ui/Subnav";
/* ── Constants ── */
const DEGREES = ['All Degrees', 'Bachelor', 'Master', 'PhD']
const FIELDS  = ['All Fields', 'Technology', 'Business', 'Social Sciences', 'Health Sciences', 'Engineering', 'Arts & Design']

const ADMISSION_SECTIONS = [
    { title: 'Admission Requirements', icon: <GraduationCap size={15} />, key: 'eligibility' },
    { title: 'Required Documents',     icon: <BookOpen size={15} />,      key: 'documents'   },
    { title: 'How to Apply',           icon: <Send size={15} />,          key: 'steps'       },
]

/* ─────────────────────────────────────────
   UniversityDetailPage
───────────────────────────────────────── */
export default function UniversityDetailPage({ data, onBack, isWishlisted, onToggleWishlist }) {
    const [search,      setSearch]      = useState('')
    const [degree,      setDegree]      = useState('All Degrees')
    const [field,       setField]       = useState('All Fields')
    const [selectedProg, setSelectedProg] = useState(null)
    const [saved,       setSaved]       = useState(isWishlisted ?? false)

    const admissionRef = useRef(null)

    const programs = data.programs ?? []

    const filtered = programs.filter(p => {
        const matchSearch = p.name.toLowerCase().includes(search.toLowerCase())
        const matchDeg    = degree === 'All Degrees' || p.degree === degree
        const matchField  = field  === 'All Fields'  || p.field  === field
        return matchSearch && matchDeg && matchField
    })

    const handleSelectProg = (p) => {
        setSelectedProg(prev => prev?.id === p.id ? null : p)
    }

    const handleSave = () => {
        setSaved(v => !v)
        onToggleWishlist?.(data.id)
    }

    // Quick info cards
    const infoItems = [
        { icon: <MapPin size={16} />,       label: 'Location',   value: data.location },
        { icon: <BookOpen size={16} />,     label: 'Programs',   value: `${data.programsCount ?? programs.length} programs` },
        { icon: <DollarSign size={16} />,   label: 'Tuition/yr', value: `$${data.priceMin}–$${data.priceMax}` },
        { icon: <CalendarDays size={16} />, label: 'Admission',  value: data.admissionDate },
    ]

    // Sidebar stats
    const sidebarStats = [
        ['Programs',   `${data.programsCount ?? programs.length}`],
        ['Tuition/yr', `$${data.priceMin}–$${data.priceMax}`],
        ['Students',   data.students?.toLocaleString()],
        ['Admission',  data.admissionDate],
    ]

    return (
        <div className="udp-wrap animate-fade-in">

            {/* ── Sticky sub-nav ── */}
            <SubNav
                backLabel="Universities"
                onBack={onBack}
                currentName={data.shortName}
                saved={saved}
                onSave={handleSave}
            />

            {/* ── Hero ── */}
            <HeroSection
                image={data.image}
                name={data.name}
                meta={data.address}
                badges={[`${data.type} University`]}
                taglineLabel="Accredited by"
                taglineText={data.accreditation}
            />

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
                    {/* Programs section */}
                    <div style={{ scrollMarginTop: 110 }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 6 }}>
                            <div>
                                <h2 className="udp-section-title">Programs</h2>
                                <p className="udp-section-sub">{filtered.length} programs found</p>
                            </div>
                        </div>

                        {/* Filters */}
                        <div className="udp-filters">
                            <input
                                type="text"
                                className="udp-filter-input"
                                placeholder="Search programs…"
                                value={search}
                                onChange={e => setSearch(e.target.value)}
                            />
                            <select className="udp-filter-select" value={degree} onChange={e => setDegree(e.target.value)}>
                                {DEGREES.map(d => <option key={d}>{d}</option>)}
                            </select>
                            <select className="udp-filter-select" value={field} onChange={e => setField(e.target.value)}>
                                {FIELDS.map(f => <option key={f}>{f}</option>)}
                            </select>
                        </div>

                        {/* Program cards grid */}
                        {filtered.length === 0 ? (
                            <div style={{ textAlign: 'center', padding: '48px 20px', color: 'var(--color-text-muted)' }}>
                                No programs match your filters
                            </div>
                        ) : (
                            <div className="udp-programs-grid">
                                {filtered.map(p => (
                                    <ProgramCard
                                        key={p.id}
                                        program={p}
                                        selected={selectedProg?.id === p.id}
                                        onSelect={handleSelectProg}
                                    />
                                ))}
                            </div>
                        )}

                        {/* Expanded program detail panel */}
                        {selectedProg && (
                            <ProgramDetailPanel
                                program={selectedProg}
                                onClose={() => setSelectedProg(null)}
                            />
                        )}
                    </div>

                    {/* Admission accordion */}
                    <div ref={admissionRef}>
                        <AdmissionDetails
                            sections={ADMISSION_SECTIONS}
                            data={data}
                        />
                    </div>
                </div>

                {/* ── SIDEBAR ── */}
                <div className="udp-sidebar">
                    <SidebarCard
                        logo={data.logo ?? data.shortName}
                        badge={data.type}
                        name={data.name}
                        meta={`${data.location} · ${data.type}`}
                        stats={sidebarStats}
                        website={data.website}
                        saved={saved}
                        onSave={handleSave}
                    />

                    <DeadlineCard
                        date={data.admissionDate}
                        note={data.accreditation}
                    />
                </div>
            </div>
        </div>
    )
}
// import {useRef, useState} from "react";
//
//
// const DEGREES = ['All Degrees', 'Bachelor', 'Master', 'PhD']
// const FIELDS  = ['All Fields', 'Technology', 'Business', 'Social Sciences', 'Health Sciences', 'Engineering', 'Arts & Design']
// const ADMISSION_SECTIONS = [
//     {
//         title: 'Admission Requirements',
//         icon: <GraduationCap size={15} />,
//         key: 'eligibility',
//     },
//     {
//         title: 'Required Documents',
//         icon: <BookOpen size={15} />,
//         key: 'documents',
//     },
//     {
//         title: 'How to Apply',
//         icon: <Send size={15} />,
//         key: 'steps',
//     },
// ]
//
// const TABS = ['Overview', 'Curriculum', 'Requirements', 'Career Opportunities']
//
// export default function UniversityDetailPage({ data, onBack, isWishlisted, onToggleWishlist }){
//     const [search, setSearch] = useState('')
//     const [degree, setDegree] = useState('All Degrees')
//     const [field, setField] = useState('All Fields')
//     const [selectedProg,setSelectedProg] = useState(null)
//     const [tab, setTab] = useState('Overview')
//     const [openAccordion,  setOpenAccordion]  = useState(null)
//     const [saved, setSaved] = useState(isWishlisted ?? false)
//
//     const programsRef = useRef(null)
//     const admissionRef = useRef(null)
//     // const scrollTo = (ref) => {ref.current?.scrollIntoView({behavior: 'smooth', block: 'start'})}
//
//     // if the program is undefined or null return empty array, else return data.programs
//     const programs = data.programs ?? []
//
//     // taking a list of programs above and only return the one that match the search
//     const filtered = programs.filter(p => {
//         // use .toLowerCase() for case-insensitive
//         // the .include(search) is to check if the p.name contain that search string
//         // example :
//         // p.name = "Computer Science"
//         // search = "comp"
//         // "computer science".includes("comp") → true
//         const matchSearch = p.name.toLowerCase().includes(search.toLowerCase())
//         // the degree === 'All Degrees' always return true so the filter will base on if the selected degree or field match the program degree or field
//         const matchDeg    = degree === 'All Degrees' || p.degree === degree
//         const matchField  = field  === 'All Fields'  || p.field  === field
//         return matchSearch && matchDeg && matchField
//     })
//
//     // the parameter (p) is the program that user just clicked
//     // first, use optional chaining to safe check if the program is exist or not. if it's not it will return null or undefine instead of error.
//     // if user click the same program (prev.id === p.id) then deselect it (selectedProg = null)
//     // else, select the new program p
//
//     // full logic function
//     // const handleSelectProg = (p) => {
//     //     setSelectedProg(prev => {
//     //         if ((prev == null ? undefined : prev.id) === p.id) {
//     //             return null   // deselect
//     //         }
//     //         return p          // select new
//     //     })
//     //
//     //     setTab('Overview')
//     // }
//
//     // simplify function:
//     const handleSelectProg = (p) => {
//         setSelectedProg(prev => prev?.id === p.id ? null : p)
//         setTab('Overview')
//     }
//
//     const handleSave = () => {
//         setSaved(v => !v)
//         onToggleWishlist?.(data.id) // for add to wishlist
//     }
//
//     // Quick info row items
//     const infoItems = [
//         { icon: <MapPin size={16} />,       label: 'Location',  value: data.location },
//         { icon: <BookOpen size={16} />,     label: 'Programs',  value: `${data.programsCount ?? programs.length} programs` },
//         { icon: <DollarSign size={16} />,   label: 'Tuition/yr', value: `$${data.priceMin}–$${data.priceMax}` },
//         { icon: <CalendarDays size={16} />, label: 'Admission', value: data.admissionDate },
//     ]
//
//     return(
//         <div className="udp-wrap animate-fade-in">
//
//             {/* ── Sticky sub-nav ── */}
//             <div className="udp-subnav">
//                 <div className="udp-subnav__breadcrumb">
//                     <button
//                         onClick={onBack}
//                         style={{ background:'none', border:'none', cursor:'pointer', display:'flex', alignItems:'center', gap:5, color:'var(--color-text-muted)', fontFamily:'inherit', fontSize:13 }}
//                     >
//                         <ArrowLeft size={14} /> Universities
//                     </button>
//                     <span>/</span>
//                     <span className="udp-subnav__breadcrumb-name">{data.shortName}</span>
//                 </div>
//
//                 <div className="udp-subnav__actions">
//                     <button
//                         className={`udp-sidebar__outline${saved ? ' saved' : ''}`}
//                         style={{ padding: '6px 14px', fontSize: 13 }}
//                         onClick={handleSave}
//                     >
//                         <Heart size={13} fill={saved ? 'currentColor' : 'none'} />
//                         {saved ? 'Saved' : 'Save'}
//                     </button>
//                 </div>
//             </div>
//
//             {/* ── Hero ── */}
//             <div className="udp-hero">
//                 {data.image
//                     ? <img src={data.image} alt={data.name} className="udp-hero__img" />
//                     : <div className="udp-hero__dots" />
//                 }
//                 <div className="udp-hero__dots" />
//                 <div className="udp-hero__overlay" />
//
//                 <div className="udp-hero__content">
//                     <div>
//                         <div className="udp-hero__badges">
//                             <span className="udp-hero__badge">{data.type} University</span>
//                         </div>
//                         <h1 className="udp-hero__title">{data.name}</h1>
//                         <p className="udp-hero__meta">
//                             {data.address}
//                         </p>
//                     </div>
//
//                     <div className="udp-hero__tagline">
//                         <p className="udp-hero__tagline-label">Accredited by</p>
//                         <p className="udp-hero__tagline-text">{data.accreditation}</p>
//                     </div>
//                 </div>
//             </div>
//
//             {/* ── Quick info row ── */}
//             <div className="udp-inforow">
//                 {infoItems.map(({ icon, label, value }) => (
//                     <div key={label} className="udp-infocard">
//                         <div className="udp-infocard__icon">{icon}</div>
//                         <div>
//                             <div className="udp-infocard__label">{label}</div>
//                             <div className="udp-infocard__value">{value}</div>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//
//             {/* ── Body ── */}
//             <div className="udp-body">
//                 {/* ── LEFT COLUMN ── */}
//                 <div>
//                     {/* Programs */}
//                     <div ref={programsRef} style={{ scrollMarginTop: 110 }}>
//                         <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-end', marginBottom: 6 }}>
//                             <div>
//                                 <h2 className="udp-section-title">Programs</h2>
//                                 <p className="udp-section-sub">{filtered.length} programs found</p>
//                             </div>
//                         </div>
//
//                         {/* Filters */}
//                         <div className="udp-filters">
//                             <input
//                                 type="text"
//                                 className="udp-filter-input"
//                                 placeholder="Search programs…"
//                                 value={search}
//                                 onChange={e => setSearch(e.target.value)}
//                             />
//                             <select className="udp-filter-select" value={degree} onChange={e => setDegree(e.target.value)}>
//                                 {DEGREES.map(d => <option key={d}>{d}</option>)}
//                             </select>
//                             <select className="udp-filter-select" value={field} onChange={e => setField(e.target.value)}>
//                                 {FIELDS.map(f => <option key={f}>{f}</option>)}
//                             </select>
//                         </div>
//
//                         {/* Program cards grid */}
//                         {filtered.length === 0 ? (
//                             <div style={{ textAlign:'center', padding:'48px 20px', color:'var(--color-text-muted)' }}>
//                                 No programs match your filters
//                             </div>
//                         ) : (
//                             <div className="udp-programs-grid">
//                                 {filtered.map(p => (
//                                     <div
//                                         key={p.id}
//                                         className={`udp-program-card${selectedProg?.id === p.id ? ' active' : ''}`}
//                                         onClick={() => handleSelectProg(p)}
//                                     >
//                                         <div className="udp-program-card__top">
//                                             <span className={`deg-badge deg-badge--${p.degree.toLowerCase()}`}>
//                                                 {p.degree}
//                                             </span>
//                                             <span className="udp-program-card__field">{p.field}</span>
//                                         </div>
//                                         <div className="udp-program-card__name">{p.name}</div>
//                                         <p className="udp-program-card__desc">{p.desc}</p>
//                                         <div className="udp-program-card__stats">
//                                             <div>
//                                                 <div className="udp-program-card__stat-label">Duration</div>
//                                                 <div className="udp-program-card__stat-value">{p.duration}</div>
//                                             </div>
//                                             <div>
//                                                 <div className="udp-program-card__stat-label">Tuition</div>
//                                                 <div className="udp-program-card__stat-value">{p.tuition}</div>
//                                             </div>
//                                         </div>
//                                         <button
//                                             className={`udp-program-card__btn${selectedProg?.id === p.id ? ' viewing' : ''}`}
//                                             onClick={e => { e.stopPropagation(); handleSelectProg(p) }}
//                                         >
//                                             {selectedProg?.id === p.id ? '✓ Viewing Details' : 'View Details →'}
//                                         </button>
//                                     </div>
//                                 ))}
//                             </div>
//                         )}
//
//                         {/* Program detail panel */}
//                         {selectedProg && (
//                             <div className="udp-detail-panel">
//                                 <div className="udp-detail-panel__header">
//                                     <div>
//                                         <div style={{ display:'flex', gap:8, alignItems:'center', marginBottom:8 }}>
//                                             <span className={`deg-badge deg-badge--${selectedProg.degree.toLowerCase()}`}>
//                                                 {selectedProg.degree}
//                                             </span>
//                                             <span style={{ fontSize:12, color:'var(--color-text-muted)' }}>{selectedProg.field}</span>
//                                         </div>
//                                         <div className="udp-detail-panel__name">{selectedProg.name}</div>
//                                         <p className="udp-detail-panel__desc">{selectedProg.desc}</p>
//                                     </div>
//                                     <button className="udp-detail-panel__close" onClick={() => setSelectedProg(null)}>×</button>
//                                 </div>
//
//                                 {/* Tabs */}
//                                 <div className="udp-tabs">
//                                     {TABS.map(t => (
//                                         <button
//                                             key={t}
//                                             className={`udp-tab${tab === t ? ' active' : ''}`}
//                                             onClick={() => setTab(t)}
//                                         >
//                                             {t}
//                                         </button>
//                                     ))}
//                                 </div>
//
//                                 <div className="udp-tab-body">
//                                     {tab === 'Overview' && (
//                                         <div className="udp-overview-grid">
//                                             {[
//                                                 ['⏱', 'Duration', selectedProg.duration],
//                                                 ['💳', 'Tuition',  selectedProg.tuition],
//                                                 ['🎓', 'Degree',   selectedProg.degree],
//                                                 ['📖', 'Field',    selectedProg.field],
//                                             ].map(([ic, label, value]) => (
//                                                 <div key={label} className="udp-overview-cell">
//                                                     <div className="udp-overview-cell__label">{ic} {label}</div>
//                                                     <div className="udp-overview-cell__value">{value}</div>
//                                                 </div>
//                                             ))}
//                                         </div>
//                                     )}
//
//                                     {tab === 'Curriculum' && (
//                                         <div className="udp-curriculum-grid">
//                                             {selectedProg.curriculum.map((c, i) => (
//                                                 <div key={i} className="udp-curriculum-item">
//                                                     <span className="udp-curriculum-num">{i + 1}</span>
//                                                     {c}
//                                                 </div>
//                                             ))}
//                                         </div>
//                                     )}
//
//                                     {tab === 'Requirements' && (
//                                         <div className="udp-req-list">
//                                             {selectedProg.requirements.map((r, i) => (
//                                                 <div key={i} className="udp-req-item">
//                                                     <span className="udp-req-check">✓</span>
//                                                     {r}
//                                                 </div>
//                                             ))}
//                                         </div>
//                                     )}
//
//                                     {tab === 'Career Opportunities' && (
//                                         <div className="udp-career-tags">
//                                             {selectedProg.careers.map((c, i) => (
//                                                 <span key={i} className="udp-career-tag">{c}</span>
//                                             ))}
//                                         </div>
//                                     )}
//                                 </div>
//                             </div>
//                         )}
//                     </div>
//
//                     {/* Admission */}
//                     <div ref={admissionRef} className="udp-admission">
//                         <h2 className="udp-section-title">Admission</h2>
//                         <p className="udp-section-sub">Everything you need to apply</p>
//
//                         {ADMISSION_SECTIONS.map((sec, i) => {
//                             const items = Array.isArray(data[sec.key]) ? data[sec.key] : []
//                             if (!items.length) return null
//                             return (
//                                 <div key={i} className="udp-accordion">
//                                     <div className="udp-accordion__header" onClick={() => setOpenAccordion(openAccordion === i ? null : i)}>
//                                         <div className="udp-accordion__title">
//                                             <span className="udp-accordion__icon-wrap">{sec.icon}</span>
//                                             {sec.title}
//                                         </div>
//                                         <span className={`udp-accordion__chevron${openAccordion === i ? ' open' : ''}`}>
//                                             <ChevronDown size={18} />
//                                         </span>
//                                     </div>
//                                     {openAccordion === i && <div className="udp-accordion__divider" />}
//                                     <div className={`udp-accordion__body${openAccordion === i ? ' open' : ''}`}>
//                                         <div className="udp-accordion__body-inner">
//                                             {items.map((item, j) => (
//                                                 <div key={j} className="udp-check-item">
//                                                     <span className="udp-check-bullet">✓</span>
//                                                     {item}
//                                                 </div>
//                                             ))}
//                                         </div>
//                                     </div>
//                                 </div>
//                             )
//                         })}
//                     </div>
//                 </div>
//
//                 {/* ── SIDEBAR ── */}
//                 <div className="udp-sidebar">
//                     <div className="udp-sidebar-card">
//                         <div className="udp-sidebar__top">
//                             <div className="udp-sidebar__logo">{data.logo ?? data.shortName}</div>
//                             <div className="udp-sidebar__badge">
//                                 <GraduationCap size={10} /> {data.type}
//                             </div>
//                             <div className="udp-sidebar__name">{data.name}</div>
//                             <div className="udp-sidebar__meta">{data.location} · {data.type}</div>
//                         </div>
//
//                         <div className="udp-sidebar__stats">
//                             {[
//                                 ['Programs',    `${data.programsCount ?? programs.length}`],
//                                 ['Tuition/yr',  `$${data.priceMin}–$${data.priceMax}`],
//                                 ['Students',    data.students?.toLocaleString()],
//                                 ['Admission',   data.admissionDate],
//                             ].map(([label, value]) => (
//                                 <div key={label} className="udp-sidebar__stat-row">
//                                     <span className="udp-sidebar__stat-label">{label}</span>
//                                     <span className="udp-sidebar__stat-value">{value}</span>
//                                 </div>
//                             ))}
//                         </div>
//
//                         <div className="udp-sidebar__actions">
//                             <a
//                                 href={data.website ? data.website : '#'}
//                                 target="_blank"
//                                 rel="noopener noreferrer"
//                                 className="udp-sidebar__apply"
//                             >
//                                 <Send size={15} /> Apply Now
//                             </a>
//                             <div className="udp-sidebar__secondary">
//                                 <button
//                                     className={`udp-sidebar__outline${saved ? ' saved' : ''}`}
//                                     onClick={handleSave}
//                                 >
//                                     <Heart size={13} fill={saved ? 'currentColor' : 'none'} />
//                                     {saved ? 'Saved' : 'Save'}
//                                 </button>
//                                 <a
//                                     href={data.website ? data.website : '#'}
//                                     // href={data.website ? `https://${data.website.replace(/^https?:\/\//, '')}` : '#'}
//                                     target="_blank"
//                                     rel="noopener noreferrer"
//                                     className="udp-sidebar__outline"
//                                 >
//                                     <Globe size={13} /> Website
//                                 </a>
//                             </div>
//                         </div>
//                     </div>
//
//                     {/* Deadline card */}
//                     <div className="udp-deadline-card">
//                         <div className="udp-deadline-card__label">
//                             <CalendarDays size={13} /> Application Deadline
//                         </div>
//                         <div className="udp-deadline-card__date">{data.admissionDate}</div>
//                         <div className="udp-deadline-card__note">{data.accreditation}</div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }