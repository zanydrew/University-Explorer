import {useState, useRef} from "react";
import ScholarshipDetailSec from "../components/ui/ScholarshipDetailSec.jsx";
import './styles/ScholarshipDetailPage.css'
import {SCHOLARSHIPS} from "../data/scholarships.js";
import {
    ArrowLeft, Info, Eye, Heart,
    GraduationCap, MapPin, BadgeDollarSign,
    CalendarDays, Users2, MessageSquareQuote,
    Share2, FileText, CheckCircle2,
    Layers, Globe, Send, Bookmark, BookOpen
} from "lucide-react";

export default function ScholarshipDetailPage({data, onBack}) {
    const [saved, setSaved] = useState(false);

    const sectionRefs = {
        description: useRef(null),
        benefits: useRef(null),
        majors: useRef(null),
        eligibility: useRef(null),
        documents: useRef(null),
        apply: useRef(null),
    }

    const scrollTo = (key) => {
        sectionRefs[key]?.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    return (
        <div className="detail-page">
            {/* Navbar */}
            <nav className="detail-nav">
                <button className="nav-back" onClick={onBack}><ArrowLeft size={17} /></button>
                <span className="nav-title">Scholarship Details</span>
                <button className="nav-info"><Info size={17} /></button>
            </nav>

            {/* Hero Banner */}
            <div className="hero-banner">
                <img src={data.image} alt={data.title} className="hero-img" />
                <div className="hero-overlay" />
                <button className={`hero-heart ${saved ? "saved" : ""}`}
                        onClick={() => setSaved(v => !v)} aria-label="Favorite">
                    <Heart size={18} fill={saved ? "currentColor" : "none"} />
                </button>
            </div>

            {/* Body */}
            <div className="detail-body">
                {/* LEFT COLUMN */}
                <div>
                    {/* Header */}
                    <div className="sch-header">
                        <div className="sch-logo"> <img src={data.logo} alt={data.org} /></div>
                        <div className="sch-title-block">
                            <div className="sch-org">{data.org}</div>
                            <div className="sch-title">{data.title}</div>
                        </div>
                    </div>

                    {/* Info Grid */}
                    <div className="info-grid">
                        <div className="info-cell">
                            <div className="info-cell-icon"><MapPin size={16} /></div>
                            <div className="info-cell-label">Study in</div>
                            <div className="info-cell-value">{data.country?.split(",")[0]}</div>
                        </div>
                        <div className="info-cell">
                            <div className="info-cell-icon"><BadgeDollarSign size={16} /></div>
                            <div className="info-cell-label">Type</div>
                            <div className="info-cell-value">{data.type}</div>
                        </div>
                        <div className="info-cell">
                            <div className="info-cell-icon"><GraduationCap size={16} /></div>
                            <div className="info-cell-label">Degree</div>
                            <div className="info-cell-value">{data.degree}</div>
                        </div>
                        <div className="info-cell">
                            <div className="info-cell-icon"><CalendarDays size={16} /></div>
                            <div className="info-cell-label">Deadline</div>
                            <div className="info-cell-value" style={{ fontSize: 12 }}>{data.deadline}</div>
                        </div>
                    </div>

                    {/* Sections */}
                    <ScholarshipDetailSec icon={<FileText size={15} />} title="Scholarship Description" defaultOpen sectionRef={sectionRefs.description}>
                        <p className="ds-para">{data.description}</p>
                    </ScholarshipDetailSec>

                    {/* eslint-disable-next-line react-hooks/refs */}
                    <ScholarshipDetailSec icon={<CheckCircle2 size={15} />} title="Scholarship Benefits" sectionRef={sectionRefs.benefits}>
                        <ul className="ds-list">
                            {data.benefits.map((b, i) => (
                                <li key={i}>
                                    <span className="ds-bullet"><CheckCircle2 size={11} /></span>
                                    {b}
                                </li>
                            ))}
                        </ul>
                    </ScholarshipDetailSec>

                    {/* eslint-disable-next-line react-hooks/refs */}
                    <ScholarshipDetailSec icon={<Layers size={15} />} title="Majors / Fields of Study" sectionRef={sectionRefs.majors}>
                        <div className="ds-tags">
                            {data.majors.map((m, i) => <span key={i} className="ds-tag">{m}</span>)}
                        </div>
                    </ScholarshipDetailSec>

                    {/* eslint-disable-next-line react-hooks/refs */}
                    <ScholarshipDetailSec icon={<Globe size={15} />} title="Eligibility Requirements" sectionRef={sectionRefs.eligibility}>
                        <ul className="ds-list">
                            {data.eligibility.map((e, i) => (
                                <li key={i}>
                                    <span className="ds-bullet"><CheckCircle2 size={11} /></span>
                                    {e}
                                </li>
                            ))}
                        </ul>
                    </ScholarshipDetailSec>

                    {/* eslint-disable-next-line react-hooks/refs */}
                    <ScholarshipDetailSec icon={<FileText size={15} />} title="Required Documents" sectionRef={sectionRefs.documents}>
                        <ul className="ds-list">
                            {data.documents.map((d, i) => (
                                <li key={i}>
                                    <span className="ds-bullet"><FileText size={11} /></span>
                                    {d}
                                </li>
                            ))}
                        </ul>
                    </ScholarshipDetailSec>

                    {/* eslint-disable-next-line react-hooks/refs */}
                    <ScholarshipDetailSec icon={<Send size={15} />} title="How to Apply" sectionRef={sectionRefs.apply}>
                        <div className="ds-steps">
                            {data.steps.map((s, i) => (
                                <div key={i} className="ds-step">
                                    <span className="ds-step-num">{i + 1}</span>
                                    <span className="ds-step-text">{s}</span>
                                </div>
                            ))}
                        </div>
                    </ScholarshipDetailSec>
                </div>

                {/* RIGHT COLUMN — Sidebar */}
                <div className="detail-sidebar">
                    <div className="sidebar-card">
                        <div className="sidebar-top">
                            <div className="sidebar-badge"><GraduationCap size={10} />{data.type}</div>
                            <div className="sidebar-name">{data.title}</div>
                            <div className="sidebar-meta">
                                <div className="sidebar-meta-row"><CalendarDays size={13} />Deadline: {data.deadline}</div>
                                <div className="sidebar-meta-row"><MapPin size={13} />{data.country}</div>
                                <div className="sidebar-meta-row"><GraduationCap size={13} />{data.degree} Degree</div>
                                <div className="sidebar-meta-row"><BookOpen size={13} />{data.programs} Programs Available</div>
                            </div>
                        </div>
                        <div className="sidebar-actions">
                            <button className="apply-btn"><Send size={16} />Apply Now</button>
                            <button className={`save-btn ${saved ? "saved" : ""}`} onClick={() => setSaved(v => !v)}>
                                <Bookmark size={15} fill={saved ? "currentColor" : "none"} />
                                {saved ? "Saved to Favorites" : "Save for Later"}
                            </button>
                        </div>
                    </div>

                    {/* Quick Nav */}
                    <div className="nav-pills">
                        {[
                            ["description", "Description"],
                            ["benefits", "Benefits"],
                            ["majors", "Fields of Study"],
                            ["eligibility", "Eligibility"],
                            ["documents", "Documents"],
                            ["apply", "How to Apply"],
                        ].map(([key, label]) => (
                            <div key={key} className="nav-pill" onClick={() => scrollTo(key)}>
                                <span className="nav-pill-dot" />
                                {label}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}