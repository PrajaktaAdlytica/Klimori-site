import { useState } from "react";
import { ArrowRight, Building2, CalendarCheck, Check, DatabaseZap, Gauge, UsersRound } from "lucide-react";
import { NavLink } from "react-router-dom";
import { RouteLabel } from "../components/RouteLabel.jsx";
import { SiteFooter } from "../components/SiteFooter.jsx";
import { SiteHeader } from "../components/SiteHeader.jsx";
import { useNarrativeMotion } from "../hooks/useNarrativeMotion.js";

function RequestDemoPage() {
  const [submitted, setSubmitted] = useState(false);
  const rootRef = useNarrativeMotion("Request access | Klimori");

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <main ref={rootRef} className="demo-page">
      <SiteHeader />
      <section className="demo-route-hero route-motion-section route-hero" aria-labelledby="access-route-heading">
        <div className="demo-route-hero__copy">
          <div className="route-motion-item"><RouteLabel>Request Klimori access</RouteLabel></div>
          <h1 className="route-motion-item" id="access-route-heading">Bring one building day into focus.</h1>
          <p className="route-motion-item">Share the portfolio, systems and operating question. We will shape the session around the conditions your team already works with.</p>
        </div>
        <div className="demo-route-hero__trace route-motion-item" aria-label="Klimori review sequence">
          <div><span>01</span><Building2 size={20} /><strong>Portfolio</strong><p>Sites, types and operating priorities</p></div>
          <i aria-hidden="true"></i>
          <div><span>02</span><DatabaseZap size={20} /><strong>Systems</strong><p>Available data and connection scope</p></div>
          <i aria-hidden="true"></i>
          <div><span>03</span><Gauge size={20} /><strong>Decision</strong><p>The first operating question to review</p></div>
        </div>
      </section>

      <section className="demo-prep route-motion-section" aria-labelledby="demo-prep-heading">
        <div className="demo-prep__intro route-motion-heading"><RouteLabel>What to expect</RouteLabel><h2 id="demo-prep-heading">A working session, not a generic product tour.</h2><p>The strongest first conversation starts with one repeatable operating problem and the context already available to your team.</p></div>
        <div className="demo-prep__steps">
          {[
            [CalendarCheck, "30-minute review", "A focused conversation about portfolio goals and the operating workflow behind them."],
            [UsersRound, "The right operators", "Facilities, energy, asset or portfolio stakeholders who understand the day-to-day decision."],
            [DatabaseZap, "No data upload required", "A high-level view of available systems is enough for the first session."],
          ].map(([Icon, title, copy], index) => <article className="route-motion-item" key={title}><span>0{index + 1}</span><Icon size={22} aria-hidden="true" /><h3>{title}</h3><p>{copy}</p><i className="route-motion-rule"></i></article>)}
        </div>
      </section>

      <section className="demo-request route-motion-section" id="request" aria-labelledby="demo-form-heading">
        <div className="demo-request__context route-motion-heading">
          <RouteLabel>Portfolio review</RouteLabel>
          <h2 id="demo-form-heading">Tell us where the operating picture breaks apart.</h2>
          <p>We will use this information only to respond to the request and prepare the session.</p>
          <div><span>REGION</span><strong>USA / Global</strong></div>
          <div><span>RESPONSE</span><strong>Business-day follow-up</strong></div>
          <div><span>FORMAT</span><strong>Remote working session</strong></div>
        </div>
        <form className="demo-request__form" onSubmit={handleSubmit}>
          <div className="demo-form-grid route-motion-item">
            <label htmlFor="demo-name">Name<input id="demo-name" name="name" placeholder="Your name" required /></label>
            <label htmlFor="demo-email">Work email<input id="demo-email" name="email" type="email" placeholder="name@company.com" required /></label>
            <label htmlFor="demo-company">Company<input id="demo-company" name="company" placeholder="Organisation name" required /></label>
            <label htmlFor="demo-role">Role<select id="demo-role" name="role" defaultValue=""><option value="" disabled>Select role</option><option>Facility management</option><option>Energy management</option><option>Property / asset management</option><option>Sustainability</option><option>Executive / ownership</option><option>Other</option></select></label>
            <label htmlFor="demo-portfolio">Portfolio size<select id="demo-portfolio" name="portfolio" defaultValue="1-5"><option value="1-5">1–5 sites</option><option value="6-25">6–25 sites</option><option value="26-100">26–100 sites</option><option value="100+">100+ sites</option></select></label>
            <label htmlFor="demo-product">Product interest<select id="demo-product" name="product" defaultValue="system"><option value="system">Not sure / full system</option><option value="monitor">Monitor</option><option value="optimize">Optimize</option><option value="peak">Peak</option></select></label>
          </div>
          <label className="demo-message route-motion-item" htmlFor="demo-question">Operating question<textarea id="demo-question" name="question" rows="4" placeholder="For example: our HVAC schedules do not follow actual occupancy across 18 offices." required></textarea></label>
          <label className="demo-consent route-motion-item"><input type="checkbox" required /><span>I agree that Klimori may use these details to respond to this request. See the <NavLink to="/legal#privacy">privacy information</NavLink>.</span></label>
          <button className="button button--primary route-motion-item" type="submit">Request the session <ArrowRight size={17} /></button>
          {submitted && <p className="demo-success" role="status"><Check size={17} /> Submission complete. No information was sent.</p>}
        </form>
      </section>

      <section className="demo-next route-motion-section">
        <div className="route-motion-heading"><RouteLabel>Prepare the conversation</RouteLabel><h2>See how Klimori connects the conditions first.</h2></div>
        <NavLink className="text-link route-motion-item" to="/system">Explore the system <ArrowRight size={16} /></NavLink>
      </section>
      <SiteFooter />
    </main>
  );
}

export { RequestDemoPage };
