import { useEffect, useRef } from "react";
import { ArrowRight, ArrowUpRight, Building2, CalendarDays, Landmark, Layers3 } from "lucide-react";
import { NavLink } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { RouteLabel } from "../components/RouteLabel.jsx";
import { SiteFooter } from "../components/SiteFooter.jsx";
import { SiteHeader } from "../components/SiteHeader.jsx";

gsap.registerPlugin(ScrollTrigger);

const announcement = {
  title: "Klimori Announces $600K Funding from TipHub | Klimori",
  description: "Klimori announced $600K in funding from TipHub on 5 February 2026 to support its mission to improve energy intelligence for commercial buildings.",
  url: "https://www.klimori.com/news/klimori-announces-600k-funding-from-tiphub",
  image: "https://www.klimori.com/assets/hero-floorplate.png",
};

function setMeta(selector, attributes) {
  let element = document.head.querySelector(selector);
  if (!element) {
    element = document.createElement("meta");
    document.head.appendChild(element);
  }
  Object.entries(attributes).forEach(([name, value]) => element.setAttribute(name, value));
}

function FundingAnnouncementPage() {
  const rootRef = useRef(null);

  useEffect(() => {
    document.title = announcement.title;
    setMeta('meta[name="description"]', { name: "description", content: announcement.description });
    setMeta('meta[property="og:title"]', { property: "og:title", content: announcement.title });
    setMeta('meta[property="og:description"]', { property: "og:description", content: announcement.description });
    setMeta('meta[property="og:type"]', { property: "og:type", content: "article" });
    setMeta('meta[property="og:url"]', { property: "og:url", content: announcement.url });
    setMeta('meta[property="og:image"]', { property: "og:image", content: announcement.image });
    setMeta('meta[name="twitter:card"]', { name: "twitter:card", content: "summary_large_image" });
    setMeta('meta[name="twitter:title"]', { name: "twitter:title", content: announcement.title });
    setMeta('meta[name="twitter:description"]', { name: "twitter:description", content: announcement.description });
    setMeta('meta[name="twitter:image"]', { name: "twitter:image", content: announcement.image });
    setMeta('meta[property="article:published_time"]', { property: "article:published_time", content: "2026-02-05" });

    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = announcement.url;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;

    const context = gsap.context(() => {
      gsap.fromTo(".funding-hero .funding-motion-item", { autoAlpha: 0, y: 26 }, { autoAlpha: 1, y: 0, duration: 0.78, stagger: 0.1, ease: "power3.out" });
      gsap.fromTo(".funding-hero__amount", { autoAlpha: 0, x: 30 }, { autoAlpha: 1, x: 0, duration: 0.95, ease: "power3.out", delay: 0.16 });

      gsap.utils.toArray(".funding-motion-section").forEach((section) => {
        const items = section.querySelectorAll(".funding-motion-item");
        const rules = section.querySelectorAll(".funding-motion-rule");
        if (items.length) {
          gsap.fromTo(items, { autoAlpha: 0, y: 24 }, { autoAlpha: 1, y: 0, duration: 0.74, stagger: 0.1, ease: "power3.out", scrollTrigger: { trigger: section, start: "top 82%", once: true } });
        }
        if (rules.length) {
          gsap.fromTo(rules, { scaleX: 0 }, { scaleX: 1, duration: 0.95, stagger: 0.08, transformOrigin: "left", ease: "power3.out", scrollTrigger: { trigger: section, start: "top 82%", once: true } });
        }
      });
    }, rootRef);

    const frame = window.requestAnimationFrame(() => ScrollTrigger.refresh());
    return () => {
      window.cancelAnimationFrame(frame);
      context.revert();
    };
  }, []);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: "Klimori announces $600K in funding from TipHub",
    datePublished: "2026-02-05",
    dateModified: "2026-02-05",
    description: announcement.description,
    mainEntityOfPage: announcement.url,
    image: [announcement.image],
    author: { "@type": "Organization", name: "Klimori", url: "https://www.klimori.com" },
    publisher: { "@type": "Organization", name: "Klimori", url: "https://www.klimori.com" },
  };

  return (
    <main ref={rootRef} className="funding-page">
      <SiteHeader />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

      <article>
        <header className="funding-hero" aria-labelledby="funding-heading">
          <div className="funding-hero__meta funding-motion-item">
            <span>Company announcement</span>
            <time dateTime="2026-02-05">5 February 2026</time>
          </div>
          <div className="funding-hero__copy">
            <div className="funding-motion-item"><RouteLabel>Funding milestone</RouteLabel></div>
            <h1 className="funding-motion-item" id="funding-heading">Klimori announces $600K in funding from TipHub.</h1>
            <p className="funding-motion-item">The funding supports Klimori's existing mission: helping commercial building teams bring the conditions that shape energy use into one clear operating picture.</p>
            <div className="funding-hero__actions funding-motion-item">
              <a className="button button--primary" href="https://tiphub-prototype-review.vercel.app/companies/klimori" target="_blank" rel="noreferrer">View TipHub <ArrowUpRight size={17} /></a>
              <NavLink className="text-link" to="/system">Explore the Klimori system <ArrowRight size={15} /></NavLink>
            </div>
          </div>
          <aside className="funding-hero__amount" aria-label="Funding summary">
            <span>Announced funding</span>
            <strong>$600K</strong>
            <i></i>
            <dl><div><dt>Investor</dt><dd>TipHub</dd></div><div><dt>Announced</dt><dd>05.02.2026</dd></div></dl>
          </aside>
        </header>

        <section className="funding-story funding-motion-section" aria-labelledby="funding-story-heading">
          <div className="funding-story__index funding-motion-item"><span>01</span><strong>The milestone</strong></div>
          <div className="funding-story__body">
            <div className="funding-motion-item"><RouteLabel>Building with focus</RouteLabel></div>
            <h2 className="funding-motion-item" id="funding-story-heading">More capacity for the work already underway.</h2>
            <p className="funding-motion-item">Klimori announced $600K in funding from <a href="https://tiphub-prototype-review.vercel.app/companies/klimori" target="_blank" rel="noreferrer">TipHub</a> on 5 February 2026.</p>
            <p className="funding-motion-item">Commercial buildings waste energy when HVAC schedules, occupancy, weather, tariffs, and maintenance are managed separately. Klimori exists to connect those conditions, helping owners and operating teams understand what a building did, why it happened, and what deserves review.</p>
            <p className="funding-motion-item">This milestone gives the company more capacity to continue developing that operating layer without changing its product position or mission.</p>
          </div>
        </section>

        <section className="funding-use funding-motion-section" aria-labelledby="funding-use-heading">
          <div className="funding-use__intro funding-motion-item">
            <RouteLabel>What the funding supports</RouteLabel>
            <h2 id="funding-use-heading">The next phase of Klimori company building.</h2>
            <p>The focus remains on building a durable product and company around clearer commercial-building operations.</p>
          </div>
          <div className="funding-use__rows">
            <div className="funding-use__row funding-motion-item"><span>01</span><Layers3 size={20} aria-hidden="true" /><strong>Deepen the product</strong><p>Continue developing Monitor, Optimize, and Peak as connected layers of one operating picture.</p><i className="funding-motion-rule"></i></div>
            <div className="funding-use__row funding-motion-item"><span>02</span><Building2 size={20} aria-hidden="true" /><strong>Strengthen the platform</strong><p>Advance the systems and operating foundations required to build reliable energy intelligence for commercial buildings.</p><i className="funding-motion-rule"></i></div>
            <div className="funding-use__row funding-motion-item"><span>03</span><Landmark size={20} aria-hidden="true" /><strong>Build the company</strong><p>Invest in the disciplined company-building work needed to prepare Klimori for its next stage.</p><i className="funding-motion-rule"></i></div>
          </div>
        </section>

        <section className="funding-links funding-motion-section" aria-labelledby="funding-links-heading">
          <div className="funding-links__heading funding-motion-item"><RouteLabel>Company references</RouteLabel><h2 id="funding-links-heading">Follow the milestone.</h2></div>
          <nav className="funding-links__list" aria-label="Klimori company profiles">
            <a className="funding-motion-item" href="https://tiphub-prototype-review.vercel.app/companies/klimori" target="_blank" rel="noreferrer"><span>Funding profile</span><strong>TipHub</strong><ArrowUpRight size={18} /></a>
            <a className="funding-motion-item" href="https://www.crunchbase.com/organization/klimori" target="_blank" rel="noreferrer"><span>Company profile</span><strong>Crunchbase</strong><ArrowUpRight size={18} /></a>
            <a className="funding-motion-item" href="https://www.linkedin.com/company/klimori/" target="_blank" rel="noreferrer"><span>Company updates</span><strong>LinkedIn</strong><ArrowUpRight size={18} /></a>
          </nav>
        </section>

        <section className="funding-next funding-motion-section">
          <div className="funding-motion-item"><CalendarDays size={22} aria-hidden="true" /><span>Continue with Klimori</span></div>
          <div className="funding-next__copy funding-motion-item"><h2>See how five building conditions become one reviewable picture.</h2><p>Explore the product story or bring a building day into focus with the Klimori team.</p></div>
          <div className="funding-next__actions funding-motion-item"><NavLink className="button button--primary" to="/request-access">Request access <ArrowRight size={17} /></NavLink><NavLink className="text-link" to="/system">Explore the system <ArrowRight size={15} /></NavLink></div>
        </section>
      </article>

      <SiteFooter />
    </main>
  );
}

export { FundingAnnouncementPage };
