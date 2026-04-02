import {useRef, useState} from "react";
import { ChevronDown } from "lucide-react";
import './styles/ScholarshipDetailSec.css'

export default function ScholarshipDetailSec({icon, title, children,
                                             defaultOpen = true, sectionRef}) {

    const [open, setOpen] = useState(defaultOpen);
    const bodyRef = useRef(null);
    return(
        <div className="detail-section" ref={sectionRef}>
            <div className="ds-header" onClick={() => setOpen(v => !v)}>
                <div className="ds-header-left">
                    <div className="ds-icon">{icon}</div>
                    <span className="ds-title">{title}</span>
                </div>
                <span className={`ds-chevron ${open ? "open" : ""}`}><ChevronDown size={18} /></span>
            </div>
            {open && <div className="ds-divider" />}
            <div
                className={`ds-body ${open ? "" : "collapsed"}`}
                ref={bodyRef}
                style={open ? { maxHeight: "800px", opacity: 1 } : {}}
            >
                {children}
            </div>
        </div>
    )
}