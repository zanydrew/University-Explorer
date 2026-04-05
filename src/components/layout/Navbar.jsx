import { useState, useEffect } from 'react'
import './styles/Navbar.css'
import Icon from '../ui/Icon'
import { Menu, X } from 'lucide-react'

const NAV_ITEMS = [
    { id: 'home',         label: 'Home' },
    { id: 'universities', label: 'Universities' },
    { id: 'scholarships', label: 'Scholarships' },
    { id: 'match',        label: 'Best Match' },
    { id: 'wishlist',     label: 'Wishlist' },
]

export default function Navbar({ page, setPage, wishlistCount, searchQuery, setSearchQuery }) {
    const [menuOpen,       setMenuOpen]       = useState(false)
    const [searchVisible,  setSearchVisible]  = useState(false)

    // Close drawer on page change
    useEffect(() => {
        setMenuOpen(false)
        setSearchVisible(false)
    }, [page])

    // Prevent body scroll when drawer is open
    useEffect(() => {
        document.body.style.overflow = menuOpen ? 'hidden' : ''
        return () => { document.body.style.overflow = '' }
    }, [menuOpen])

    const handleNav = (id) => {
        setPage(id)
        setMenuOpen(false)
    }

    return (
        <>
            <nav className="navbar">
                {/* Logo */}
                <button className="navbar__logo" onClick={() => handleNav('home')}>
                    <span className="navbar__logo-emoji">🎓</span>
                    Uni<span className="navbar__logo-accent">Search</span>
                </button>

                {/* ── Desktop links ── */}
                <div className="navbar__links">
                    {NAV_ITEMS.map(item => (
                        <button
                            key={item.id}
                            className={`navbar__link${page === item.id ? ' navbar__link--active' : ''}`}
                            onClick={() => handleNav(item.id)}
                        >
                            {item.label}
                            {item.id === 'wishlist' && wishlistCount > 0 && (
                                <span className="navbar__wishlist-badge">{wishlistCount}</span>
                            )}
                        </button>
                    ))}
                </div>

                {/* ── Desktop search ── */}
                <div className="navbar__search">
                    <Icon name="search" size={15} color="var(--color-text-muted)" />
                    <input
                        className="navbar__search-input"
                        value={searchQuery}
                        onChange={e => setSearchQuery(e.target.value)}
                        onKeyDown={e => e.key === 'Enter' && handleNav('universities')}
                        placeholder="Search…"
                    />
                </div>

                {/* ── Mobile right side ── */}
                <div className="navbar__mobile-actions">
                    {/* Mobile search toggle */}
                    <button
                        className="navbar__icon-btn"
                        onClick={() => setSearchVisible(v => !v)}
                        aria-label="Search"
                    >
                        <Icon name="search" size={18} color="var(--color-text-secondary)" />
                    </button>

                    {/* Hamburger */}
                    <button
                        className={`navbar__icon-btn navbar__hamburger${menuOpen ? ' open' : ''}`}
                        onClick={() => setMenuOpen(v => !v)}
                        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                    >
                        {menuOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>
            </nav>

            {/* ── Mobile search bar (slides down below nav) ── */}
            <div className={`navbar__mobile-search${searchVisible ? ' visible' : ''}`}>
                <div className="navbar__mobile-search-inner">
                    <Icon name="search" size={15} color="var(--color-text-muted)" />
                    <input
                        className="navbar__search-input"
                        value={searchQuery}
                        onChange={e => setSearchQuery(e.target.value)}
                        onKeyDown={e => {
                            if (e.key === 'Enter') {
                                handleNav('universities')
                                setSearchVisible(false)
                            }
                        }}
                        placeholder="Search..."
                        autoFocus={searchVisible}
                    />
                    {searchQuery && (
                        <button
                            className="navbar__search-clear"
                            onClick={() => setSearchQuery('')}
                        >
                            <X size={13} />
                        </button>
                    )}
                </div>
            </div>

            {/* ── Mobile drawer overlay ── */}
            {menuOpen && (
                <div className="navbar__overlay" onClick={() => setMenuOpen(false)} />
            )}

            {/* ── Mobile drawer ── */}
            <div className={`navbar__drawer${menuOpen ? ' open' : ''}`}>
                <div className="navbar__drawer-header">
          <span className="navbar__drawer-title">
            🎓 Uni<span className="navbar__logo-accent">Search</span>
          </span>
                    <button
                        className="navbar__icon-btn"
                        onClick={() => setMenuOpen(false)}
                        aria-label="Close menu"
                    >
                        <X size={20} />
                    </button>
                </div>

                <div className="navbar__drawer-links">
                    {NAV_ITEMS.map(item => (
                        <button
                            key={item.id}
                            className={`navbar__drawer-link${page === item.id ? ' active' : ''}`}
                            onClick={() => handleNav(item.id)}
                        >
                            {item.label}
                            {item.id === 'wishlist' && wishlistCount > 0 && (
                                <span className="navbar__wishlist-badge">{wishlistCount}</span>
                            )}
                        </button>
                    ))}
                </div>
            </div>
        </>
    )
}
