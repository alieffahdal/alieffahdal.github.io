import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { useTheme } from "../hooks/useTheme";
import Footer from "./Footer";

const NAV_LINKS = [
  { to: "/travel", label: "Travel" },
  { to: "/discover", label: "Discover" },
  { to: "/blog", label: "Blog" },
  { to: "/about", label: "About" },
];

export default function Layout() {
  const { theme, toggle } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="app">
      <header className="topnav">
        <NavLink to="/" className="topnav-brand" onClick={() => setMenuOpen(false)}>
          <span className="topnav-logo" aria-hidden="true">
            ✻
          </span>
          SERA
        </NavLink>

        <nav className="topnav-links" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) => `topnav-link${isActive ? " active" : ""}`}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="topnav-actions">
          <button
            className="theme-toggle"
            role="switch"
            aria-checked={theme === "light"}
            aria-label="Toggle light/dark theme"
            onClick={toggle}
          >
            <span className="theme-toggle-thumb" />
          </button>
          <button
            className="topnav-menu-btn"
            aria-expanded={menuOpen}
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((v) => !v)}
          >
            Menu
          </button>
        </div>

        {menuOpen && (
          <nav className="mobile-menu" aria-label="Mobile">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className="mobile-menu-link"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
        )}
      </header>

      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
