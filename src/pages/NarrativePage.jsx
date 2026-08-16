import { ArrowRight, Building2, CalendarDays, CloudSun, Gauge, Landmark, Layers3, MapPinned, School, ShieldCheck, ShoppingBag, SlidersHorizontal, UsersRound, Wrench, Zap } from "lucide-react";
import { NavLink } from "react-router-dom";
import { RouteLabel } from "../components/RouteLabel.jsx";
import { SiteFooter } from "../components/SiteFooter.jsx";
import { SiteHeader } from "../components/SiteHeader.jsx";
import { useNarrativeMotion } from "../hooks/useNarrativeMotion.js";

const pages = {
  system: {
    slug: "system",
    title: "System | Klimori",
    label: "The Klimori system",
    heading: "One building. One operating picture.",
    lede: "Klimori connects the conditions that shape a building day, so teams can move from scattered signals to a decision they can review and explain.",
    image: "/assets/evidence-reference.webp",
    imageAlt: "Commercial building conditions converging into one Klimori operating decision",
    imageLabel: "Signal relationship / Warsaw site 04",
    metrics: [["5", "operating conditions"], ["1", "shared decision path"], ["24/7", "context retained"]],
    sectionLabel: "How the system thinks",
    sectionHeading: "The relationship is the useful signal.",
    sectionCopy: "Schedules, occupancy, weather, energy and maintenance each describe part of the day. Klimori keeps them legible together.",
    steps: [
      ["01", "Connect the conditions", "Bring operating schedules, observed use, external conditions, tariffs and asset state into a shared frame."],
      ["02", "Read the difference", "Compare what the building was asked to do with what actually unfolded, without treating every variance as a conclusion."],
      ["03", "Keep the decision path", "Attach the rationale, constraints, reviewer and outcome to the intervention so the next day begins with evidence."],
    ],
    matrixLabel: "Five conditions / one language",
    matrixHeading: "Every input keeps its meaning.",
    matrixCopy: "Klimori does not flatten the building into a score. Each signal stays visible inside the recommendation.",
    rows: [
      { icon: CalendarDays, name: "Schedule", detail: "Planned hours, setpoints and operating intent", state: "Instruction" },
      { icon: UsersRound, name: "Occupancy", detail: "Observed or expected use of the space", state: "Demand" },
      { icon: CloudSun, name: "Weather", detail: "Current and forecast external conditions", state: "Context" },
      { icon: Zap, name: "Energy", detail: "Metering, demand and tariff windows", state: "Constraint" },
      { icon: Wrench, name: "Maintenance", detail: "Asset readiness and limits on available action", state: "Boundary" },
    ],
    statementLabel: "Context before action",
    statement: "A recommendation without its conditions becomes another alert. Klimori keeps the reason attached.",
    statementMeta: "OPERATING PRINCIPLE / 01",
    nextLabel: "See the first operating layer",
    nextName: "Klimori Monitor",
    nextCopy: "Start with the operating trace and surface the runtime nobody planned.",
    nextPath: "/monitor",
  },
  portfolios: {
    slug: "portfolios",
    title: "Portfolios | Klimori",
    label: "Portfolio intelligence",
    heading: "See the estate without flattening the sites.",
    lede: "Klimori gives central and local teams one operating language while preserving the schedules, constraints and realities that make each building different.",
    image: "/assets/optimize-reference.webp",
    imageAlt: "Portfolio operating ledger comparing local conditions across commercial buildings",
    imageLabel: "Common baseline / local context",
    metrics: [["24", "sites in the example baseline"], ["4", "portfolio types"], ["1", "shared review language"]],
    sectionLabel: "From property to portfolio",
    sectionHeading: "Compare patterns, not just totals.",
    sectionCopy: "Energy totals show what was consumed. Operating context reveals why two similar sites behaved differently and where the next review belongs.",
    steps: [
      ["01", "Establish a common baseline", "Use the same operating questions across active sites: when did systems run, who was present, and what conditions shaped the response?"],
      ["02", "Retain local context", "Keep opening hours, comfort expectations, asset constraints and local weather attached to every comparison."],
      ["03", "Coordinate the response", "Give central teams visibility while local operators retain the evidence and responsibility needed to act."],
    ],
    matrixLabel: "Portfolio fit",
    matrixHeading: "Built for repeated operating work.",
    matrixCopy: "The system adapts to different building types without changing the core decision language.",
    rows: [
      { icon: Building2, name: "Commercial offices", detail: "Variable attendance, comfort windows and complex plant", state: "Workplace" },
      { icon: ShoppingBag, name: "Retail chains", detail: "Trading hours, regional weather and multi-site coordination", state: "Retail" },
      { icon: School, name: "Schools and campuses", detail: "Timetables, term patterns and occupied-zone priorities", state: "Education" },
      { icon: Landmark, name: "Civic and mixed estates", detail: "Different public uses within one accountable portfolio", state: "Public estate" },
    ],
    statementLabel: "For portfolios, not just properties",
    statement: "A common baseline should make local context clearer, not erase it.",
    statementMeta: "PORTFOLIO PRINCIPLE / 02",
    nextLabel: "Prepare coordinated response",
    nextName: "Klimori Peak",
    nextCopy: "See active risk and prepared response before demand and cost arrive.",
    nextPath: "/peak",
  },
  company: {
    slug: "company",
    title: "Company | Klimori",
    label: "About Klimori",
    heading: "Built for the people who keep buildings working.",
    lede: "Klimori is an Italy-based, EU-focused product company creating a clearer operating layer for commercial buildings and the teams responsible for them.",
    image: "/assets/klimori-hero-reference.webp",
    imageAlt: "Klimori commercial building operating model with connected internal and external conditions",
    imageLabel: "Italy / European Union",
    metrics: [["IT / EU", "product base"], ["B2B", "commercial building focus"], ["1", "operator-led mission"]],
    sectionLabel: "Why Klimori exists",
    sectionHeading: "Buildings already produce data. Teams still need clarity.",
    sectionCopy: "The problem is not the absence of dashboards. It is the distance between separate data, daily operating choices and accountable outcomes.",
    steps: [
      ["01", "Start with the operating question", "Design around the decisions facilities and energy teams make repeatedly, not around another abstract score."],
      ["02", "Make evidence reviewable", "Keep every suggested change connected to the conditions and constraints that made it appropriate."],
      ["03", "Learn across the estate", "Return outcomes to a shared record so buildings and teams become more legible over time."],
    ],
    matrixLabel: "Who we build with",
    matrixHeading: "One product language across the operating team.",
    matrixCopy: "Klimori is designed to support ownership, technical review and local action without collapsing those responsibilities into one role.",
    rows: [
      { icon: UsersRound, name: "Facility managers", detail: "Daily exceptions, comfort and accountable intervention", state: "Operations" },
      { icon: Gauge, name: "Energy teams", detail: "Baselines, demand, tariffs and measurable outcomes", state: "Performance" },
      { icon: MapPinned, name: "Portfolio leaders", detail: "Cross-site visibility and coordinated operating priorities", state: "Portfolio" },
      { icon: ShieldCheck, name: "Owners and asset teams", detail: "Governance, resilience and evidence for investment decisions", state: "Ownership" },
    ],
    statementLabel: "Our product position",
    statement: "Quiet software for consequential operating decisions.",
    statementMeta: "KLIMORI / FLORENCE / EU",
    nextLabel: "Understand the operating layer",
    nextName: "The Klimori system",
    nextCopy: "See how five building conditions become one reviewable picture.",
    nextPath: "/system",
  },
};

function NarrativePage({ pageKey }) {
  const page = pages[pageKey];
  const rootRef = useNarrativeMotion(page.title);

  return (
    <main ref={rootRef} className={`narrative-page narrative-page--${page.slug}`}>
      <SiteHeader />
      <section className="route-hero route-motion-section" aria-labelledby={`${page.slug}-heading`}>
        <div className="route-hero__copy">
          <div className="route-motion-item"><RouteLabel>{page.label}</RouteLabel></div>
          <h1 className="route-motion-item" id={`${page.slug}-heading`}>{page.heading}</h1>
          <p className="route-motion-item">{page.lede}</p>
          <div className="route-hero__actions route-motion-item"><NavLink className="button button--primary" to="/request-demo">Request a demo <ArrowRight size={17} /></NavLink><a className="text-link" href="#story">Follow the story <ArrowRight size={15} /></a></div>
        </div>
        <figure className="route-hero__media">
          <img src={page.image} alt={page.imageAlt} />
          <figcaption><span>{page.imageLabel}</span><strong>KLIMORI OPERATING CONTEXT</strong></figcaption>
        </figure>
      </section>

      <section className="route-metrics route-motion-section" aria-label={`${page.label} key context`}>
        {page.metrics.map(([value, label], index) => <div className="route-motion-item" key={label}><span>0{index + 1}</span><strong>{value}</strong><p>{label}</p><i className="route-motion-rule"></i></div>)}
      </section>

      <section className="route-sequence route-motion-section" id="story" aria-labelledby={`${page.slug}-story-heading`}>
        <div className="route-sequence__intro route-motion-heading"><RouteLabel>{page.sectionLabel}</RouteLabel><h2 id={`${page.slug}-story-heading`}>{page.sectionHeading}</h2><p>{page.sectionCopy}</p></div>
        <div className="route-sequence__steps">
          {page.steps.map(([number, title, copy]) => <article className="route-step route-motion-item" key={number}><span>{number}</span><i className="route-motion-rule"></i><h3>{title}</h3><p>{copy}</p></article>)}
        </div>
      </section>

      <section className="route-matrix route-motion-section" aria-labelledby={`${page.slug}-matrix-heading`}>
        <div className="route-matrix__intro route-motion-heading"><RouteLabel>{page.matrixLabel}</RouteLabel><h2 id={`${page.slug}-matrix-heading`}>{page.matrixHeading}</h2><p>{page.matrixCopy}</p></div>
        <div className="route-matrix__rows">
          {page.rows.map(({ icon: Icon, name, detail, state }, index) => <div className="route-matrix__row route-motion-item" key={name}><span>0{index + 1}</span><Icon size={20} aria-hidden="true" /><strong>{name}</strong><p>{detail}</p><small>{state}</small></div>)}
        </div>
      </section>

      <section className="route-statement route-motion-section" aria-labelledby={`${page.slug}-statement-heading`}>
        <div className="route-motion-heading"><RouteLabel>{page.statementLabel}</RouteLabel><h2 id={`${page.slug}-statement-heading`}>{page.statement}</h2></div>
        <div className="route-statement__trace route-motion-item" aria-hidden="true"><Layers3 size={25} /><span></span><SlidersHorizontal size={25} /></div>
        <p className="route-motion-item">{page.statementMeta}</p>
      </section>

      <section className="route-next route-motion-section">
        <span className="route-motion-heading">{page.nextLabel}</span>
        <NavLink className="route-motion-item" to={page.nextPath}><strong>{page.nextName}</strong><p>{page.nextCopy}</p><ArrowRight size={22} /></NavLink>
      </section>
      <SiteFooter />
    </main>
  );
}

export { NarrativePage };
