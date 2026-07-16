import { useEffect } from "react";
import { ArrowRight, Building2, CloudSun, Gauge, UsersRound, Wrench, Zap } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { NavLink } from "react-router-dom";
import { RouteLabel } from "../components/RouteLabel.jsx";
import { SiteFooter } from "../components/SiteFooter.jsx";
import { SiteHeader } from "../components/SiteHeader.jsx";

gsap.registerPlugin(ScrollTrigger);

const sharedConnections = [
  { icon: Building2, name: "Building systems", detail: "BMS and HVAC operating data" },
  { icon: UsersRound, name: "Occupancy", detail: "Counts, bookings, or agreed proxies" },
  { icon: CloudSun, name: "External conditions", detail: "Local weather and forecast context" },
  { icon: Zap, name: "Energy and tariffs", detail: "Metering, demand, and price windows" },
  { icon: Wrench, name: "Maintenance", detail: "Asset state and operating constraints" },
];

const productPages = {
  monitor: {
    slug: "monitor",
    eyebrow: "Klimori Monitor",
    title: "Find the runtime nobody planned.",
    lede: "Monitor compares what a building was asked to do with what actually unfolded, then keeps the conditions behind every exception in view.",
    image: "/assets/optimize-reference.webp",
    imageAlt: "Operational evidence view comparing schedules, occupancy, weather, tariffs, and maintenance conditions",
    imageLabel: "Operational ledger / Warsaw site 04",
    metrics: [["02h 30m", "early runtime surfaced"], ["5", "conditions compared"], ["24", "sites in one baseline"]],
    chapters: [
      ["01", "Trace the operating day", "See schedules, runtime, occupancy, weather, tariffs, and asset conditions on the same timeline."],
      ["02", "Separate variance from evidence", "An exception starts an investigation. Monitor preserves the context needed to understand whether it matters."],
      ["03", "Compare sites without flattening them", "A common portfolio baseline reveals patterns while retaining each building's operating context."],
    ],
    finding: "AHU-3 began 2 hours and 30 minutes before observed occupancy.",
    findingMeta: "Illustrative finding / Tuesday 08:15",
    outcome: "The team sees the added runtime, the conditions around it, and the next useful question in one reviewable record.",
    useCases: ["Runtime exceptions", "Schedule drift", "Comfort investigation", "Portfolio baselining"],
    next: { name: "Optimize", path: "/optimize", copy: "Turn a reviewed finding into a controlled adjustment." },
  },
  optimize: {
    slug: "optimize",
    eyebrow: "Klimori Optimize",
    title: "Give every intervention a reason.",
    lede: "Optimize brings the conditions, constraints, reviewer, and intended result together before an operating change is applied.",
    image: "/assets/evidence-reference.webp",
    imageAlt: "Commercial building operating conditions converging into one reviewed operational decision",
    imageLabel: "Decision path / Review ready",
    metrics: [["05:30", "observed start"], ["07:30", "proposed start"], ["20–22°C", "comfort constraint"]],
    chapters: [
      ["01", "Frame the decision", "Connect the observed exception to schedules, occupancy expectations, weather, tariff, and asset constraints."],
      ["02", "Review before applying", "The proposed adjustment carries its rationale and expected result into the approval step."],
      ["03", "Keep the operating record", "Applied changes, reviewers, conditions of use, and measured outcomes stay attached for future learning."],
    ],
    finding: "Move the AHU-3 start from 05:30 to 07:30 while preserving the agreed comfort window.",
    findingMeta: "Illustrative adjustment / Review ready",
    outcome: "The intervention becomes a controlled operating decision rather than another isolated setpoint change.",
    useCases: ["Schedule optimization", "Preconditioning review", "Setpoint governance", "Change documentation"],
    next: { name: "Peak", path: "/peak", copy: "Prepare a coordinated response before demand and cost rise." },
  },
  peak: {
    slug: "peak",
    eyebrow: "Klimori Peak",
    title: "Prepare before the peak arrives.",
    lede: "Peak brings forecast demand, tariff conditions, comfort boundaries, and available responses into view early enough to coordinate the portfolio.",
    image: "/assets/monitor-reference.webp",
    imageAlt: "Commercial building with connected operating signals and a prepared demand response decision",
    imageLabel: "Pre-peak review / 15:00",
    metrics: [["16:00–18:00", "tariff window"], ["118 kW", "projected demand"], ["60m", "review lead time"]],
    chapters: [
      ["01", "See the event early", "Forecast demand and upcoming tariff windows appear alongside the site's operating conditions."],
      ["02", "Prepare a proportionate response", "Teams review available actions while keeping comfort, occupancy, and maintenance constraints visible."],
      ["03", "Coordinate the portfolio", "Active site risks and prepared responses share one operating language across local and central teams."],
    ],
    finding: "Review the prepared response at 15:00, one hour before the high-tariff window opens.",
    findingMeta: "Illustrative peak event / Forecast",
    outcome: "The portfolio enters the cost window with an agreed response and a record of what actually happened.",
    useCases: ["Tariff events", "Demand preparation", "Portfolio coordination", "Outcome comparison"],
    next: { name: "Monitor", path: "/monitor", copy: "Return each outcome to the operating trace and keep learning." },
  },
};

function ProductPage({ productKey }) {
  const product = productPages[productKey];

  useEffect(() => {
    document.title = `${product.eyebrow} | Klimori`;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return undefined;

    const context = gsap.context(() => {
      gsap.fromTo(".product-hero__copy > *", { autoAlpha: 0, y: 24 }, { autoAlpha: 1, y: 0, duration: 0.8, stagger: 0.11, ease: "power3.out" });
      gsap.fromTo(".product-hero__media", { autoAlpha: 0, x: 34 }, { autoAlpha: 1, x: 0, duration: 1, ease: "power3.out" });
      gsap.to(".product-hero__media img", { yPercent: 4, ease: "none", scrollTrigger: { trigger: ".product-hero", start: "top top", end: "bottom top", scrub: 0.65 } });
      gsap.utils.toArray(".product-motion-section").forEach((section) => {
        gsap.to(section, {
          "--section-progress": 1,
          duration: 1.05,
          ease: "power3.out",
          scrollTrigger: { trigger: section, start: "top 98%", once: true },
        });
      });
      gsap.fromTo(".product-metrics > div", { autoAlpha: 0, y: 24 }, { autoAlpha: 1, y: 0, duration: 0.72, stagger: 0.12, ease: "power3.out", scrollTrigger: { trigger: ".product-metrics", start: "top 82%", once: true } });
      gsap.fromTo(".product-story__intro", { autoAlpha: 0, y: 30 }, { autoAlpha: 1, y: 0, duration: 0.8, ease: "power3.out", scrollTrigger: { trigger: ".product-story", start: "top 82%", once: true } });
      gsap.fromTo(".product-chapter", { autoAlpha: 0, x: 28 }, { autoAlpha: 1, x: 0, duration: 0.8, stagger: 0.16, ease: "power3.out", scrollTrigger: { trigger: ".product-story", start: "top 72%", once: true } });
      gsap.fromTo(".product-finding > *", { autoAlpha: 0, y: 28 }, { autoAlpha: 1, y: 0, duration: 0.78, stagger: 0.14, ease: "power3.out", scrollTrigger: { trigger: ".product-finding", start: "top 78%", once: true } });
      gsap.fromTo(".product-use-cases > div:first-child", { autoAlpha: 0, y: 28 }, { autoAlpha: 1, y: 0, duration: 0.76, ease: "power3.out", scrollTrigger: { trigger: ".product-use-cases", start: "top 80%", once: true } });
      gsap.fromTo(".product-use-cases > div:last-child span", { autoAlpha: 0, x: 24 }, { autoAlpha: 1, x: 0, duration: 0.68, stagger: 0.1, ease: "power3.out", scrollTrigger: { trigger: ".product-use-cases", start: "top 74%", once: true } });
      gsap.fromTo(".product-connections__intro", { autoAlpha: 0, y: 28 }, { autoAlpha: 1, y: 0, duration: 0.76, ease: "power3.out", scrollTrigger: { trigger: ".product-connections", start: "top 80%", once: true } });
      gsap.fromTo(".product-connection", { autoAlpha: 0, y: 18 }, { autoAlpha: 1, y: 0, duration: 0.65, stagger: 0.1, ease: "power3.out", scrollTrigger: { trigger: ".product-connections", start: "top 76%", once: true } });
      gsap.fromTo(".product-commercial > *", { autoAlpha: 0, y: 26 }, { autoAlpha: 1, y: 0, duration: 0.76, stagger: 0.14, ease: "power3.out", scrollTrigger: { trigger: ".product-commercial", start: "top 80%", once: true } });
      gsap.fromTo(".product-next > *", { autoAlpha: 0, y: 22 }, { autoAlpha: 1, y: 0, duration: 0.72, stagger: 0.12, ease: "power3.out", scrollTrigger: { trigger: ".product-next", start: "top 84%", once: true } });
    });

    ScrollTrigger.refresh();
    return () => context.revert();
  }, [product]);

  return (
    <main className={`product-page product-page--${product.slug}`}>
      <SiteHeader />
      <section className="product-hero" aria-labelledby={`${product.slug}-heading`}>
        <div className="product-hero__copy">
          <RouteLabel>{product.eyebrow}</RouteLabel>
          <h1 id={`${product.slug}-heading`}>{product.title}</h1>
          <p>{product.lede}</p>
          <div className="product-hero__actions"><NavLink className="button button--primary" to="/request-demo">Request a demo <ArrowRight size={17} /></NavLink><a className="text-link" href="#how-it-works">See how it works <ArrowRight size={15} /></a></div>
        </div>
        <figure className="product-hero__media">
          <img src={product.image} alt={product.imageAlt} decoding="async" fetchPriority="high" />
          <figcaption><span>{product.imageLabel}</span><strong>Illustrative operating example</strong></figcaption>
        </figure>
      </section>

      <section className="product-metrics product-motion-section" aria-label={`${product.eyebrow} example metrics`}>
        {product.metrics.map(([value, label], index) => <div key={label}><span>0{index + 1}</span><strong>{value}</strong><p>{label}</p></div>)}
      </section>

      <section className="product-story product-motion-section" id="how-it-works" aria-labelledby={`${product.slug}-story-heading`}>
        <div className="product-story__intro product-reveal"><RouteLabel>How it works</RouteLabel><h2 id={`${product.slug}-story-heading`}>From operating signal to reviewable action.</h2><p>Each step preserves the relationship between what the building did, why it may have happened, and what the team decided next.</p></div>
        <div className="product-chapters">
          {product.chapters.map(([number, title, copy]) => <article className="product-chapter" key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p></article>)}
        </div>
      </section>

      <section className="product-finding product-reveal product-motion-section" aria-labelledby={`${product.slug}-finding-heading`}>
        <div><RouteLabel>{product.findingMeta}</RouteLabel><h2 id={`${product.slug}-finding-heading`}>{product.finding}</h2></div>
        <aside><Gauge size={24} aria-hidden="true" /><span>Operating outcome</span><p>{product.outcome}</p><NavLink className="text-link" to="/request-demo">Review this scenario <ArrowRight size={15} /></NavLink></aside>
      </section>

      <section className="product-use-cases product-reveal product-motion-section" aria-labelledby={`${product.slug}-use-heading`}>
        <div><RouteLabel>Where it fits</RouteLabel><h2 id={`${product.slug}-use-heading`}>Built for repeated operating work.</h2></div>
        <div>{product.useCases.map((item, index) => <span key={item}><i>0{index + 1}</i>{item}</span>)}</div>
      </section>

      <section className="product-connections product-motion-section" aria-labelledby={`${product.slug}-connections-heading`}>
        <div className="product-connections__intro product-reveal"><RouteLabel>Connected context</RouteLabel><h2 id={`${product.slug}-connections-heading`}>Work with the systems already shaping the day.</h2><p>Connection scope is confirmed during the technical review for each site and portfolio.</p></div>
        <div className="product-connections__list">
          {sharedConnections.map(({ icon: Icon, name, detail }, index) => <div className="product-connection" key={name}><span>0{index + 1}</span><Icon size={19} aria-hidden="true" /><strong>{name}</strong><p>{detail}</p></div>)}
        </div>
      </section>

      <section className="product-commercial product-reveal product-motion-section">
        <div><RouteLabel>Site-based annual plan</RouteLabel><h2>Add {product.eyebrow.replace("Klimori ", "")} where it creates operating value.</h2><p>Pricing follows active sites, connected systems, and implementation scope. Start with one product or combine the full Klimori operating layer.</p></div>
        <NavLink className="button button--primary" to="/pricing">Review product pricing <ArrowRight size={17} /></NavLink>
      </section>

      <section className="product-next product-motion-section">
        <span>Continue the operating story</span><NavLink to={product.next.path}><strong>{product.next.name}</strong><p>{product.next.copy}</p><ArrowRight size={22} /></NavLink>
      </section>
      <SiteFooter />
    </main>
  );
}

export { ProductPage };
