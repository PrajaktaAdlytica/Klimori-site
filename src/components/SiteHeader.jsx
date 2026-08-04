import { useEffect, useRef, useState } from "react";
import { ChevronDown, Eye, Gauge, Layers3, Menu, X } from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";

const products = [
  { to: "/monitor", name: "Monitor", description: "Trace operating exceptions", icon: Eye },
  { to: "/optimize", name: "Optimize", description: "Review controlled adjustments", icon: Layers3 },
  { to: "/peak", name: "Peak", description: "Prepare portfolio response", icon: Gauge },
];

function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const productsRef = useRef(null);
  const { pathname } = useLocation();
  const productRouteActive = products.some((product) => product.to === pathname);

  function closeMenu() {
    setMenuOpen(false);
    if (productsRef.current) productsRef.current.open = false;
  }

  useEffect(() => {
    setMenuOpen(false);
    if (productsRef.current) productsRef.current.open = false;
  }, [pathname]);

  return (
    <header className="site-header">
      <NavLink className="nav-brand" to="/" aria-label="Klimori home" onClick={closeMenu}>
        <img src="/assets/klimori-lockup-reference.webp" alt="Klimori" decoding="async" />
      </NavLink>
      <nav className={menuOpen ? "main-nav main-nav--open" : "main-nav"} aria-label="Main navigation">
        <NavLink to="/system" onClick={closeMenu}>System</NavLink>
        <details ref={productsRef} className={productRouteActive ? "nav-products nav-products--active" : "nav-products"}>
          <summary>Products <ChevronDown size={14} aria-hidden="true" /></summary>
          <div className="nav-products__menu">
            {products.map(({ to, name, description, icon: Icon }) => (
              <NavLink to={to} key={name} onClick={closeMenu}>
                <Icon size={18} aria-hidden="true" />
                <span><strong>{name}</strong><small>{description}</small></span>
              </NavLink>
            ))}
          </div>
        </details>
        <NavLink to="/portfolios" onClick={closeMenu}>Portfolios</NavLink>
        <NavLink to="/company" onClick={closeMenu}>Company</NavLink>
        <NavLink to="/news/klimori-announces-600k-funding-from-tiphub" onClick={closeMenu}>News</NavLink>
        <NavLink to="/pricing" onClick={closeMenu}>Pricing</NavLink>
        <NavLink className="nav-sign-in" to="/sign-in" onClick={closeMenu}>Sign in</NavLink>
        <NavLink className="nav-demo" to="/request-demo" onClick={closeMenu}>Request a demo <span aria-hidden="true">→</span></NavLink>
      </nav>
      <button className="menu-button" onClick={() => setMenuOpen((open) => !open)} aria-label="Toggle navigation" aria-expanded={menuOpen}>
        {menuOpen ? <X size={20} /> : <Menu size={20} />}
      </button>
    </header>
  );
}

export { SiteHeader };
