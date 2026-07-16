import { ArrowRight, Building2, ChevronDown, Eye, Gauge, Layers3, PlugZap, Wrench } from "lucide-react";
import { NavLink } from "react-router-dom";
import { RouteLabel } from "../components/RouteLabel.jsx";
import { SiteFooter } from "../components/SiteFooter.jsx";
import { SiteHeader } from "../components/SiteHeader.jsx";
import { useNarrativeMotion } from "../hooks/useNarrativeMotion.js";

const plans = [
  { icon: Eye, name: "Monitor", descriptor: "Operating visibility", copy: "Trace runtime, compare conditions and surface the exceptions that deserve review.", fit: "Reliable operating baseline", path: "/monitor" },
  { icon: Layers3, name: "Optimize", descriptor: "Decision support", copy: "Connect proposed adjustments to conditions, constraints, reviewer and intended result.", fit: "Controlled schedule improvement", path: "/optimize" },
  { icon: Gauge, name: "Peak", descriptor: "Portfolio response", copy: "Prepare for demand and tariff events across active sites before the cost arrives.", fit: "Coordinated portfolio action", path: "/peak" },
];

const comparison = [
  ["Operating trace", "Included", "Included", "Included"],
  ["Condition comparison", "Included", "Included", "Included"],
  ["Reviewed adjustment path", "—", "Included", "Included"],
  ["Peak event preparation", "—", "—", "Included"],
  ["Portfolio baseline", "Optional", "Optional", "Included"],
  ["Implementation review", "Included", "Included", "Included"],
];

const faqs = [
  ["How is Klimori priced?", "Klimori is scoped as an annual site-based plan. The commercial proposal reflects active sites, selected products, connected systems and implementation requirements."],
  ["Can we begin with one building?", "Yes. A focused starting site can establish the data connection, operating baseline and review process before a broader portfolio rollout."],
  ["Can products be combined?", "Yes. Monitor, Optimize and Peak can be introduced separately or combined as one operating layer, depending on the portfolio's priorities."],
  ["What is included in implementation?", "The scope review covers available systems and data, site context, connection requirements, operating stakeholders and the first agreed use cases."],
  ["Are user seats charged separately?", "The proposed commercial model is based on active sites and implementation scope rather than charging each facilities or energy team member for access."],
];

function PricingPage() {
  const rootRef = useNarrativeMotion("Pricing | Klimori");

  return (
    <main ref={rootRef} className="pricing-page">
      <SiteHeader />
      <section className="pricing-route-hero route-motion-section route-hero" aria-labelledby="pricing-route-heading">
        <div className="pricing-route-hero__copy">
          <div className="route-motion-item"><RouteLabel>Commercial model</RouteLabel></div>
          <h1 className="route-motion-item" id="pricing-route-heading">Price the operating layer, not every person using it.</h1>
          <p className="route-motion-item">Klimori is scoped annually by active site, selected products, connected systems and implementation requirements.</p>
          <div className="route-motion-item"><NavLink className="button button--primary" to="/request-demo">Request pricing <ArrowRight size={17} /></NavLink></div>
        </div>
        <div className="pricing-route-hero__basis route-motion-item">
          <Building2 size={24} aria-hidden="true" />
          <span>SITE-BASED ANNUAL PLAN</span>
          <strong>One product or the complete Klimori operating layer.</strong>
          <p>A short technical and portfolio review establishes the proposal.</p>
        </div>
      </section>

      <section className="pricing-route-plans route-motion-section" aria-labelledby="pricing-plans-heading">
        <div className="pricing-route-intro route-motion-heading"><RouteLabel>Choose the starting layer</RouteLabel><h2 id="pricing-plans-heading">Begin where the operating value is clearest.</h2><p>Each product can stand alone. Together they create a continuous path from observed condition to controlled response and recorded outcome.</p></div>
        <div className="pricing-route-plan-list">
          {plans.map(({ icon: Icon, name, descriptor, copy, fit, path }, index) => (
            <article className="pricing-route-plan route-motion-item" key={name}>
              <div><span>0{index + 1}</span><Icon size={22} aria-hidden="true" /></div>
              <div><small>{descriptor}</small><h3>{name}</h3></div>
              <p>{copy}</p>
              <strong>{fit}</strong>
              <NavLink className="text-link" to={path}>Explore {name} <ArrowRight size={15} /></NavLink>
            </article>
          ))}
        </div>
      </section>

      <section className="pricing-comparison route-motion-section" aria-labelledby="pricing-comparison-heading">
        <div className="pricing-comparison__intro route-motion-heading"><RouteLabel>Product scope</RouteLabel><h2 id="pricing-comparison-heading">Compare the operating responsibilities.</h2><p>The final scope is confirmed against the systems, data and review process available at each site.</p></div>
        <div className="pricing-comparison__table" role="table" aria-label="Klimori product scope comparison">
          <div className="pricing-comparison__row pricing-comparison__row--heading route-motion-item" role="row"><span role="columnheader">Capability</span><strong role="columnheader">Monitor</strong><strong role="columnheader">Optimize</strong><strong role="columnheader">Peak</strong></div>
          {comparison.map(([capability, monitor, optimize, peak]) => <div className="pricing-comparison__row route-motion-item" role="row" key={capability}><span role="cell">{capability}</span><small role="cell">{monitor}</small><small role="cell">{optimize}</small><small role="cell">{peak}</small></div>)}
        </div>
      </section>

      <section className="pricing-scope route-motion-section" aria-labelledby="pricing-scope-heading">
        <div className="pricing-scope__heading route-motion-heading"><RouteLabel>What shapes the proposal</RouteLabel><h2 id="pricing-scope-heading">Four inputs. One clear scope.</h2></div>
        <div className="pricing-scope__items">
          {[
            [Building2, "Active sites", "The buildings included in the initial rollout and portfolio baseline."],
            [PlugZap, "Connected systems", "BMS, HVAC, metering, occupancy and other agreed sources."],
            [Layers3, "Selected products", "Monitor, Optimize, Peak or the combined operating layer."],
            [Wrench, "Implementation", "Connection effort, site context and agreed operating workflows."],
          ].map(([Icon, title, copy], index) => <article className="pricing-scope__item route-motion-item" key={title}><span>0{index + 1}</span><Icon size={21} aria-hidden="true" /><h3>{title}</h3><p>{copy}</p><i className="route-motion-rule"></i></article>)}
        </div>
      </section>

      <section className="pricing-faq route-motion-section" id="faq" aria-labelledby="pricing-faq-heading">
        <div className="pricing-faq__heading route-motion-heading"><RouteLabel>Commercial questions</RouteLabel><h2 id="pricing-faq-heading">Before the scope review.</h2></div>
        <div className="pricing-faq__list">
          {faqs.map(([question, answer], index) => <details className="route-motion-item" key={question}><summary><span>0{index + 1}</span>{question}<ChevronDown size={17} aria-hidden="true" /></summary><p>{answer}</p></details>)}
        </div>
      </section>

      <section className="pricing-route-cta route-motion-section">
        <div className="route-motion-heading"><RouteLabel>Build the right starting scope</RouteLabel><h2>Bring the portfolio, systems and operating question.</h2><p>Klimori will return a clear product and implementation proposal.</p></div>
        <NavLink className="button button--primary route-motion-item" to="/request-demo">Request pricing <ArrowRight size={17} /></NavLink>
      </section>
      <SiteFooter />
    </main>
  );
}

export { PricingPage };
