import './styles/Herosection.css'
export default function HeroSection({
                                        image,
                                        name,
                                        meta,
                                        badges = [],
                                        rankBadge,
                                        taglineLabel,
                                        taglineText,
                                    }) {
    return (
        <div className="hero">
            {/* Background layers */}
            {image
                ? <img src={image} alt={name} className="hero__img" />
                : <div className="hero__dots" />
            }
            <div className="hero__dots" />
            <div className="hero__overlay" />

            {/* Content */}
            <div className="hero__content">
                <div>
                    <div className="hero__badges">
                        {badges.map((b, i) => (
                            <span key={i} className="hero__badge">{b}</span>
                        ))}
                        {rankBadge && (
                            <span className="hero__badge hero__badge--rank">{rankBadge}</span>
                        )}
                    </div>
                    <h1 className="hero__title">{name}</h1>
                    {meta && <p className="hero__meta">{meta}</p>}
                </div>

                {(taglineLabel || taglineText) && (
                    <div className="hero__tagline">
                        {taglineLabel && <p className="hero__tagline-label">{taglineLabel}</p>}
                        {taglineText  && <p className="hero__tagline-text">{taglineText}</p>}
                    </div>
                )}
            </div>
        </div>
    )
}
