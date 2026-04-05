import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import './styles/Admissiondetails.css'

export default function AdmissionDetails({
                                             title    = 'Admission',
                                             subtitle = 'Everything you need to apply',
                                             sections = [],
                                             data     = {},
                                         }) {
    const [openIndex, setOpenIndex] = useState(null)

    const toggle = (i) => setOpenIndex(prev => prev === i ? null : i)

    return (
        <div className="admission">
            <h2 className="admission__title">{title}</h2>
            <p  className="admission__sub">{subtitle}</p>

            {sections.map((sec, i) => {
                const items = Array.isArray(data[sec.key]) ? data[sec.key] : []
                if (!items.length) return null

                const isOpen = openIndex === i

                return (
                    <div key={i} className="accordion">
                        {/* Header */}
                        <div
                            className="accordion__header"
                            onClick={() => toggle(i)}
                            role="button"
                            aria-expanded={isOpen}
                        >
                            <div className="accordion__heading">
                                <span className="accordion__icon-wrap">{sec.icon}</span>
                                {sec.title}
                            </div>
                            <span className={`accordion__chevron${isOpen ? ' open' : ''}`}>
                                <ChevronDown size={18} />
                            </span>
                        </div>

                        {/* Divider only when open */}
                        {isOpen && <div className="accordion__divider" />}

                        {/* Body */}
                        <div className={`accordion__body${isOpen ? ' open' : ''}`}>
                            <div className="accordion__body-inner">
                                {items.map((item, j) => (
                                    <div key={j} className="accordion__check-item">
                                        <span className="accordion__check-bullet">✓</span>
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
