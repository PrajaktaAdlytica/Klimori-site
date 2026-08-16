import { ArrowUpRight } from "lucide-react";
import { FaLinkedinIn, FaYoutube } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

function SiteFooter() {
  return (
    <footer>
      <div className="footer-brand">
        <NavLink className="footer-lockup" to="/" aria-label="Klimori home"><img src="/assets/klimori-lockup-reference.webp" alt="Klimori" loading="lazy" decoding="async" /></NavLink>
        <p>Connected building operations intelligence.</p>
      </div>
      <nav className="footer-nav" aria-label="Footer navigation">
        <div><span>Platform</span><NavLink to="/system">System</NavLink><NavLink to="/monitor">Monitor</NavLink><NavLink to="/optimize">Optimize</NavLink><NavLink to="/peak">Peak</NavLink></div>
        <div><span>Company</span><NavLink to="/portfolios">Portfolios</NavLink><NavLink to="/company">About Klimori</NavLink><NavLink to="/news/klimori-announces-600k-funding-from-tiphub">News</NavLink><NavLink to="/pricing">Pricing</NavLink><NavLink to="/sign-in">Sign in</NavLink><NavLink to="/request-demo">Request a demo <ArrowUpRight size={14} /></NavLink></div>
      </nav>
      <nav className="footer-social" aria-label="Klimori social media">
        <a href="https://www.linkedin.com/company/klimori/" target="_blank" rel="noreferrer" aria-label="Klimori on LinkedIn" title="LinkedIn"><FaLinkedinIn aria-hidden="true" /></a>
        <a href="https://www.youtube.com/@klimori" target="_blank" rel="noreferrer" aria-label="Klimori on YouTube" title="YouTube"><FaYoutube aria-hidden="true" /></a>
      </nav>
      <div className="footer-legal"><span>© 2026 Klimori. Piazza Mountain, 85, Florence, TOS 50129, Italy. Phone: +39 094 607 6963.</span><nav aria-label="Legal navigation"><NavLink to="/legal#privacy">Privacy</NavLink><NavLink to="/legal#cookies">Cookies</NavLink><NavLink to="/legal#terms">Terms</NavLink></nav></div>
    </footer>
  );
}

export { SiteFooter };
