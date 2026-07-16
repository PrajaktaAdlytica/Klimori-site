import { useState } from "react";
import { Check, Cookie, ExternalLink, FileText, ShieldCheck } from "lucide-react";
import { RouteLabel } from "../components/RouteLabel.jsx";
import { SiteFooter } from "../components/SiteFooter.jsx";
import { SiteHeader } from "../components/SiteHeader.jsx";
import { useNarrativeMotion } from "../hooks/useNarrativeMotion.js";

function LegalBlock({ number, title, children }) {
  return <article className="legal-block route-motion-item"><span>{number}</span><div><h3>{title}</h3>{children}</div></article>;
}

function LegalPage() {
  const [cookieStatus, setCookieStatus] = useState("Only necessary website storage is active in this preview.");
  const rootRef = useNarrativeMotion("Legal information | Klimori");

  return (
    <main ref={rootRef} className="legal-page">
      <SiteHeader />
      <section className="legal-hero route-motion-section route-hero" aria-labelledby="legal-heading">
        <div>
          <div className="route-motion-item"><RouteLabel>Legal and data information</RouteLabel></div>
          <h1 className="route-motion-item" id="legal-heading">Clear terms for a clear operating relationship.</h1>
          <p className="route-motion-item">Privacy, cookies and website terms for visitors, demo requesters and prospective Klimori customers in the European Union.</p>
        </div>
        <dl className="route-motion-item"><div><dt>Last updated</dt><dd>16 July 2026</dd></div><div><dt>Region</dt><dd>Poland / European Union</dd></div><div><dt>Contact</dt><dd><a href="mailto:privacy@klimori.com">privacy@klimori.com</a></dd></div></dl>
      </section>

      <nav className="legal-index route-motion-section" aria-label="Legal page sections"><a className="route-motion-item" href="#privacy"><ShieldCheck size={18} />Privacy</a><a className="route-motion-item" href="#cookies"><Cookie size={18} />Cookies</a><a className="route-motion-item" href="#terms"><FileText size={18} />Website terms</a></nav>

      <section className="legal-section route-motion-section" id="privacy" aria-labelledby="privacy-heading">
        <div className="legal-section__intro route-motion-heading"><RouteLabel>Privacy information</RouteLabel><h2 id="privacy-heading">How website and enquiry data is handled.</h2><p>This implementation is a structured policy draft. Klimori's registered legal entity name, address and any appointed data-protection contact must be confirmed before public launch.</p></div>
        <div className="legal-content">
          <LegalBlock number="01" title="Controller and contact"><p>Klimori, Poland, is responsible for personal data processed through this website. Privacy questions and rights requests can be sent to <a href="mailto:privacy@klimori.com">privacy@klimori.com</a>. Registered entity and address details will be inserted before publication.</p></LegalBlock>
          <LegalBlock number="02" title="Data we collect"><p>We may collect the business contact and enquiry information you provide, including name, work email, organisation, role, portfolio size, product interest and message. Technical logs may include IP address, browser, device, requested pages, timestamps and security events.</p></LegalBlock>
          <LegalBlock number="03" title="Purposes and lawful bases"><p>We use enquiry data to respond, arrange a demonstration and take requested pre-contractual steps. We use necessary technical data to operate and secure the website based on our legitimate interest in providing a reliable service. Non-essential analytics or marketing technologies will be used only after appropriate consent.</p></LegalBlock>
          <LegalBlock number="04" title="Recipients and transfers"><p>Data may be processed by vetted providers supporting hosting, communications, CRM, analytics or professional advice. Processor arrangements should be documented. Where a provider transfers data outside the EEA, Klimori will apply an approved transfer mechanism and appropriate safeguards.</p></LegalBlock>
          <LegalBlock number="05" title="Retention"><p>Demo requests should be retained only while the enquiry is active and for a defined follow-up period. Customer and contract records may be kept for the contract term and applicable legal limitation periods. Security logs should follow a documented, proportionate retention schedule.</p></LegalBlock>
          <LegalBlock number="06" title="Your rights"><p>Depending on the processing, you may request access, correction, erasure, restriction or portability, withdraw consent, or object to legitimate-interest processing and direct marketing. Requests can be sent to the privacy contact. You may also complain to the competent supervisory authority.</p></LegalBlock>
          <LegalBlock number="07" title="Security and automated decisions"><p>Klimori will use proportionate technical and organisational measures including access controls, secure transmission, logging and provider review. The website does not make decisions about visitors based solely on automated processing that produce legal or similarly significant effects.</p></LegalBlock>
        </div>
      </section>

      <section className="legal-section legal-section--cookies route-motion-section" id="cookies" aria-labelledby="cookies-heading">
        <div className="legal-section__intro route-motion-heading"><RouteLabel>Cookie information</RouteLabel><h2 id="cookies-heading">Choice stays visible.</h2><p>The current preview does not intentionally load analytics or advertising cookies. A production cookie register and consent manager should be completed when third-party services are connected.</p></div>
        <div className="legal-content">
          <LegalBlock number="01" title="Strictly necessary"><p>Storage required for security, page delivery, form state or a requested sign-in experience may operate without optional tracking. These functions should be limited to what the service needs.</p></LegalBlock>
          <LegalBlock number="02" title="Preferences"><p>Preference storage can remember choices such as language or interface settings. Where the technology is not strictly necessary, the production consent manager should explain and control it.</p></LegalBlock>
          <LegalBlock number="03" title="Analytics and marketing"><p>Analytics, campaign measurement or advertising technologies should remain off until a visitor provides freely given, specific and informed consent. No non-essential category should be preselected.</p></LegalBlock>
          <LegalBlock number="04" title="Retention and withdrawal"><p>The production cookie register should name providers, purposes and lifetimes. Visitors must be able to revisit settings and withdraw consent as easily as it was given.</p></LegalBlock>
          <div className="cookie-control route-motion-item"><Cookie size={21} aria-hidden="true" /><div><span>Current website state</span><strong>{cookieStatus}</strong></div><button type="button" onClick={() => setCookieStatus("Cookie choices have been reset to necessary storage only.")}>Reset cookie choices</button></div>
        </div>
      </section>

      <section className="legal-section route-motion-section" id="terms" aria-labelledby="terms-heading">
        <div className="legal-section__intro route-motion-heading"><RouteLabel>Website terms</RouteLabel><h2 id="terms-heading">Using the Klimori website.</h2><p>These terms cover the public website and demo enquiry experience. Product subscriptions will require a separate signed commercial agreement.</p></div>
        <div className="legal-content">
          <LegalBlock number="01" title="Website purpose"><p>The website provides general information about Klimori's building energy intelligence products. Illustrative operating examples are not guarantees of savings, performance or outcomes for a specific building.</p></LegalBlock>
          <LegalBlock number="02" title="Permitted use"><p>You may browse the website and submit genuine business enquiries. You must not interfere with the service, attempt unauthorised access, introduce malicious code or use the content unlawfully.</p></LegalBlock>
          <LegalBlock number="03" title="Intellectual property"><p>Klimori branding, copy, graphics, product concepts and website materials are protected by applicable intellectual-property rights. No ownership rights are transferred by access to the website.</p></LegalBlock>
          <LegalBlock number="04" title="Availability and external links"><p>The website may change or become temporarily unavailable. External links are provided for convenience and remain subject to the destination provider's terms and privacy practices.</p></LegalBlock>
          <LegalBlock number="05" title="Liability and governing terms"><p>To the extent permitted by law, the public website is provided for general information and is not professional building, engineering, financial or legal advice. Governing law, venue and registered entity details must be confirmed before publication.</p></LegalBlock>
        </div>
      </section>

      <section className="legal-resources route-motion-section" aria-labelledby="legal-resources-heading">
        <div className="route-motion-heading"><RouteLabel>Official guidance</RouteLabel><h2 id="legal-resources-heading">EU transparency resources.</h2></div>
        <div>
          <a className="route-motion-item" href="https://europa.eu/youreurope/business/dealing-with-customers/data-protection/data-protection-gdpr/index_en.htm" target="_blank" rel="noreferrer"><span>European Commission / GDPR for businesses</span><ExternalLink size={16} /></a>
          <a className="route-motion-item" href="https://www.edpb.europa.eu/topics/key-gdpr-concepts/data-subject-rights_en" target="_blank" rel="noreferrer"><span>European Data Protection Board / Data subject rights</span><ExternalLink size={16} /></a>
        </div>
        <p className="route-motion-item"><Check size={16} /> Final legal text should be reviewed by qualified Polish/EU counsel before publication.</p>
      </section>
      <SiteFooter />
    </main>
  );
}

export { LegalPage };
