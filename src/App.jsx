import { lazy, Suspense, useEffect, useState } from "react";
import { BrowserRouter, Navigate, NavLink, Route, Routes, useLocation } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowRight,
  Building2,
  CalendarDays,
  Check,
  CloudSun,
  Eye,
  Gauge,
  LineChart,
  Layers3,
  Quote,
  UsersRound,
  Wrench,
  Zap,
} from "lucide-react";
import { SiteFooter } from "./components/SiteFooter.jsx";
import { SiteHeader } from "./components/SiteHeader.jsx";
import { EntrySequence } from "./components/EntrySequence.jsx";

const ProductPage = lazy(() => import("./pages/ProductPage.jsx").then((module) => ({ default: module.ProductPage })));
const SignInPage = lazy(() => import("./pages/SignInPage.jsx").then((module) => ({ default: module.SignInPage })));
const NarrativePage = lazy(() => import("./pages/NarrativePage.jsx").then((module) => ({ default: module.NarrativePage })));
const PricingPage = lazy(() => import("./pages/PricingPage.jsx").then((module) => ({ default: module.PricingPage })));
const RequestDemoPage = lazy(() => import("./pages/RequestDemoPage.jsx").then((module) => ({ default: module.RequestDemoPage })));
const LegalPage = lazy(() => import("./pages/LegalPage.jsx").then((module) => ({ default: module.LegalPage })));

gsap.registerPlugin(ScrollTrigger);

const signals = [
  { icon: CalendarDays, label: "Schedule", detail: "Office hours · 08:00–18:00", tone: "teal" },
  { icon: UsersRound, label: "Occupancy", detail: "142 people · 62% utilised", tone: "green" },
  { icon: CloudSun, label: "Weather", detail: "15°C · Partly cloudy", tone: "blue" },
  { icon: Zap, label: "Tariff", detail: "€0.18 / kWh · Rising 16:00", tone: "amber" },
  { icon: Wrench, label: "Maintenance", detail: "AHU-3 · Filter due in 7 days", tone: "forest" },
];

const storySignals = [
  { ...signals[2], copy: "The forecast shifts before anyone reaches the building." },
  { ...signals[1], copy: "The floor fills unevenly, and not on yesterday's timetable." },
  { ...signals[0], copy: "The schedule holds its original instruction." },
  { ...signals[3], copy: "A rising tariff turns an ordinary hour into a costly one." },
  { ...signals[4], copy: "A small maintenance condition changes the response available." },
];

const optimizationConditions = [
  { icon: UsersRound, label: "Occupancy", detail: "Expected floor arrival 08:15", tone: "green" },
  { icon: CloudSun, label: "Weather", detail: "15°C / moderate preconditioning", tone: "blue" },
  { icon: CalendarDays, label: "Schedule", detail: "Baseline runtime 08:00–18:00", tone: "teal" },
  { icon: Zap, label: "Tariff", detail: "No peak condition before 16:00", tone: "amber" },
  { icon: Wrench, label: "Maintenance", detail: "AHU-3 accepts schedule adjustment", tone: "forest" },
];

const testimonials = [
  {
    quote: "We do not need another alert. We need to understand whether the condition warrants a change before people arrive.",
    role: "Head of facilities",
    context: "Multi-site office portfolio",
  },
  {
    quote: "The useful view is the one that keeps occupancy, comfort, cost, and plant constraints in the same conversation.",
    role: "Energy manager",
    context: "Regional retail estate",
  },
  {
    quote: "A common baseline gives local teams room to act without making every building feel identical.",
    role: "Operations director",
    context: "Education and civic estate",
  },
];

const operatingStats = [
  { value: 5, suffix: "", label: "Connected conditions", detail: "Schedule, occupancy, weather, tariff, and maintenance in one operating picture." },
  { value: 2.5, suffix: "h", decimals: 1, label: "Early runtime surfaced", detail: "An illustrative site trace identified before observed occupancy." },
  { value: 24, suffix: "", label: "Sites compared", detail: "One portfolio baseline with each building's local context retained." },
  { value: 60, suffix: "m", label: "Peak review window", detail: "Time to prepare a response before the example tariff event begins." },
];

const pricingPlans = [
  {
    icon: Eye,
    name: "Monitor",
    descriptor: "Operating visibility",
    scope: "Trace runtime, compare conditions, and surface exceptions that deserve review.",
    fit: "For teams establishing a reliable baseline",
    path: "/monitor",
  },
  {
    icon: Layers3,
    name: "Optimize",
    descriptor: "Decision support",
    scope: "Connect each proposed adjustment to its conditions, constraints, and operating rationale.",
    fit: "For teams ready to improve schedules with control",
    path: "/optimize",
  },
  {
    icon: Gauge,
    name: "Peak",
    descriptor: "Portfolio response",
    scope: "Prepare for demand and tariff events across active sites before the cost arrives.",
    fit: "For portfolios coordinating response at scale",
    path: "/peak",
  },
];

function SectionLabel({ children }) {
  return (
    <p className="eyebrow spotlight-kicker">
      <span className="spotlight-kicker__mask"><strong>{children}</strong></span>
      <i aria-hidden="true"></i>
    </p>
  );
}

function ChapterMeta({ className, index, title, context }) {
  return (
    <div className={`${className} chapter-meta`}>
      <span className="chapter-meta__index">{index}</span>
      <span className="chapter-meta__badge">{title}</span>
      <span className="chapter-meta__badge chapter-meta__badge--context">{context}</span>
    </div>
  );
}

function HomePage() {
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    document.title = "Klimori | Energy intelligence for commercial buildings";
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      document.querySelectorAll(".stat-value").forEach((item) => {
        const value = Number(item.dataset.value);
        const decimals = Number(item.dataset.decimals || 0);
        item.textContent = `${value.toFixed(decimals)}${item.dataset.suffix || ""}`;
      });
      return undefined;
    }

    const context = gsap.context(() => {
      gsap.from(".hero-reference-image", { opacity: 0, duration: 0.85, ease: "power2.out", delay: 0.1 });

      gsap.utils.toArray(".reveal").forEach((item) => {
        gsap.from(item, {
          y: 34,
          opacity: 0,
          duration: 0.85,
          ease: "power3.out",
          scrollTrigger: { trigger: item, start: "top 84%" },
        });
      });

      gsap.to(".hero-reference-image", {
        yPercent: -4,
        ease: "none",
        scrollTrigger: { trigger: ".hero", scrub: 0.7, start: "top top", end: "bottom top" },
      });

      gsap.fromTo(".hero-live-readout", { autoAlpha: 0, x: 14 }, { autoAlpha: 1, x: 0, duration: 0.7, delay: 0.45, ease: "power2.out" });
      gsap.fromTo(".hero-model-node", { autoAlpha: 0, scale: 0.65 }, { autoAlpha: 1, scale: 1, duration: 0.55, stagger: 0.12, delay: 0.55, ease: "back.out(1.7)" });

      gsap.utils.toArray(".spotlight-kicker").forEach((label) => {
        const text = label.querySelector("strong");
        const line = label.querySelector("i");
        gsap.timeline({ scrollTrigger: { trigger: label, start: "top 86%", once: true } })
          .fromTo(text, { yPercent: 115 }, { yPercent: 0, duration: 0.7, ease: "power3.out" })
          .fromTo(line, { scaleX: 0 }, { scaleX: 1, duration: 0.65, ease: "power3.out" }, "<0.12");
      });

      gsap.utils.toArray(".chapter-meta").forEach((meta) => {
        const index = meta.querySelector(".chapter-meta__index");
        const badges = meta.querySelectorAll(".chapter-meta__badge");
        gsap.timeline({ scrollTrigger: { trigger: meta, start: "top 89%", once: true } })
          .fromTo(index, { autoAlpha: 0, x: -12 }, { autoAlpha: 1, x: 0, duration: 0.45, ease: "power2.out" })
          .fromTo(badges, { autoAlpha: 0, y: 12, clipPath: "inset(0 100% 0 0)" }, { autoAlpha: 1, y: 0, clipPath: "inset(0 0% 0 0)", duration: 0.65, stagger: 0.14, ease: "power3.out" }, "<0.08");
      });

      gsap.utils.toArray(".chapter-copy").forEach((copy) => {
        const content = Array.from(copy.children).filter((item) => item.matches("h2, p:not(.spotlight-kicker)"));
        gsap.fromTo(content, { autoAlpha: 0, y: 28 }, {
          autoAlpha: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.13,
          ease: "power3.out",
          scrollTrigger: { trigger: copy, start: "top 82%", once: true },
        });
      });

      gsap.fromTo(".proof-strip > *", { autoAlpha: 0, x: -22 }, { autoAlpha: 1, x: 0, duration: 0.7, stagger: 0.13, ease: "power3.out", scrollTrigger: { trigger: ".proof-strip", start: "top 84%", once: true } });
      gsap.fromTo("footer .footer-brand, footer .footer-nav > div, footer .footer-social", { autoAlpha: 0, y: 18 }, { autoAlpha: 1, y: 0, duration: 0.65, stagger: 0.12, ease: "power3.out", scrollTrigger: { trigger: "footer", start: "top 88%", once: true } });

      gsap.utils.toArray(".stat-value").forEach((item) => {
        const target = Number(item.dataset.value);
        const decimals = Number(item.dataset.decimals || 0);
        const suffix = item.dataset.suffix || "";
        const counter = { value: 0 };
        gsap.to(counter, {
          value: target,
          duration: 1.25,
          ease: "power2.out",
          scrollTrigger: { trigger: item, start: "top 84%", once: true },
          onUpdate: () => { item.textContent = `${counter.value.toFixed(decimals)}${suffix}`; },
        });
      });

      gsap.fromTo(".stats-rule", { scaleX: 0 }, { scaleX: 1, duration: 1.1, stagger: 0.12, ease: "power3.out", scrollTrigger: { trigger: ".stats-section", start: "top 74%", once: true } });
      gsap.fromTo(".pricing-plan", { autoAlpha: 0, y: 30 }, { autoAlpha: 1, y: 0, duration: 0.85, stagger: 0.16, ease: "power3.out", scrollTrigger: { trigger: ".pricing-section", start: "top 72%", once: true } });

      const storyTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: ".story-chapter",
          start: "top top",
          end: "bottom bottom",
          scrub: 0.55,
        },
      });

      storyTimeline
        .fromTo(".story-structure", { autoAlpha: 0, scale: 0.95 }, { autoAlpha: 1, scale: 1, duration: 0.8 })
        .fromTo(".story-signal", { autoAlpha: 0, scale: 0.82, y: 14 }, { autoAlpha: 1, scale: 1, y: 0, duration: 1.45, stagger: 0.58 }, ">")
        .to(".story-path", { scaleX: 1, duration: 2.6, stagger: 0.26, ease: "none" }, "<0.1")
        .fromTo(".story-reading", { autoAlpha: 0, y: 16 }, { autoAlpha: 1, y: 0, duration: 0.6 }, ">")
        .to(".story-chapter", { backgroundColor: "#0a322e", duration: 0.8 }, ">")
        .to(".story-signal", { borderColor: "rgba(157, 200, 192, .55)", duration: 0.45, stagger: 0.08 }, "<")
        .to(".story-structure__core", { scale: 1.08, duration: 0.5 }, "<");

      const resolutionTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: ".resolution-chapter",
          start: "top top",
          end: "bottom bottom",
          scrub: 0.55,
        },
      });
      const resolutionOffsets = [
        { x: 76, y: 58 },
        { x: -70, y: 46 },
        { x: 92, y: -8 },
        { x: -58, y: -52 },
        { x: 65, y: -58 },
      ];

      resolutionTimeline
        .fromTo(".resolution-field", { autoAlpha: 0, scale: 0.96 }, { autoAlpha: 1, scale: 1, duration: 0.8 })
        .fromTo(".resolution-input", { autoAlpha: 0, y: 16 }, { autoAlpha: 1, y: 0, duration: 1.35, stagger: 0.4 }, ">")
        .to(".resolution-link", { scaleX: 1, duration: 1.75, stagger: 0.14, ease: "none" }, "<0.1")
        .to(".resolution-input", {
          x: (index) => resolutionOffsets[index].x,
          y: (index) => resolutionOffsets[index].y,
          opacity: 0.46,
          duration: 1.55,
          stagger: 0.06,
        }, ">")
        .to(".resolution-core", { backgroundColor: "#123d37", color: "#f7f7f3", scale: 1.08, duration: 0.7 }, "<0.18")
        .fromTo(".resolution-action", { autoAlpha: 0, y: 26 }, { autoAlpha: 1, y: 0, duration: 0.85 }, "<")
        .fromTo(".resolution-evidence", { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.45 }, "<0.18");

      const monitorTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: ".monitor-chapter",
          start: "top top",
          end: "bottom bottom",
          scrub: 0.55,
        },
      });

      monitorTimeline
        .fromTo(".monitor-chart", { autoAlpha: 0, y: 20 }, { autoAlpha: 1, y: 0, duration: 0.85 })
        .fromTo(".monitor-bar", { scaleX: 0 }, { scaleX: 1, duration: 1.45, stagger: 0.45, ease: "none" }, ">")
        .fromTo(".monitor-observation", { autoAlpha: 0, x: -14 }, { autoAlpha: 1, x: 0, duration: 0.75 }, ">")
        .to(".monitor-exception", { scaleY: 1, duration: 0.9, ease: "none" }, "<0.15")
        .fromTo(".monitor-finding", { autoAlpha: 0, y: 24 }, { autoAlpha: 1, y: 0, duration: 0.85 }, ">")
        .fromTo(".monitor-evidence", { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.45 }, "<0.2");

      const optimizeTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: ".optimize-chapter",
          start: "top top",
          end: "bottom bottom",
          scrub: 0.55,
        },
      });

      optimizeTimeline
        .fromTo(".optimize-board", { autoAlpha: 0, y: 20 }, { autoAlpha: 1, y: 0, duration: 0.8 })
        .fromTo(".optimize-condition", { autoAlpha: 0, x: 18 }, { autoAlpha: 1, x: 0, duration: 1.2, stagger: 0.34 }, ">")
        .to(".optimize-connector", { scaleX: 1, duration: 1.4, stagger: 0.13, ease: "none" }, "<0.1")
        .fromTo(".optimize-adjustment", { autoAlpha: 0, y: 28 }, { autoAlpha: 1, y: 0, duration: 0.85 }, ">")
        .fromTo(".optimize-record", { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.45 }, "<0.2");

      const peakTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: ".peak-chapter",
          start: "top top",
          end: "bottom bottom",
          scrub: 0.55,
        },
      });

      peakTimeline
        .fromTo(".peak-chart", { autoAlpha: 0, y: 20 }, { autoAlpha: 1, y: 0, duration: 0.85 })
        .to(".peak-demand-path", { strokeDashoffset: 0, duration: 1.4, ease: "none" }, ">")
        .to(".peak-tariff-path", { strokeDashoffset: 0, duration: 1.15, ease: "none" }, "<0.2")
        .fromTo(".peak-window", { autoAlpha: 0, scaleX: 0 }, { autoAlpha: 1, scaleX: 1, duration: 0.8 }, ">")
        .fromTo(".peak-callout", { autoAlpha: 0, y: 20 }, { autoAlpha: 1, y: 0, duration: 0.7 }, "<0.18")
        .fromTo(".peak-response", { autoAlpha: 0, y: 26 }, { autoAlpha: 1, y: 0, duration: 0.85 }, ">")
        .fromTo(".peak-record", { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.45 }, "<0.2");

      const portfolioTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: ".portfolio-chapter",
          start: "top top",
          end: "bottom bottom",
          scrub: 0.55,
        },
      });

      portfolioTimeline
        .fromTo(".portfolio-table", { autoAlpha: 0, y: 22 }, { autoAlpha: 1, y: 0, duration: 0.8 })
        .fromTo(".portfolio-site", { autoAlpha: 0, x: 20 }, { autoAlpha: 1, x: 0, duration: 1.3, stagger: 0.36 }, ">")
        .to(".portfolio-window", { scaleX: 1, duration: 1.3, stagger: 0.18, ease: "none" }, "<0.12")
        .fromTo(".portfolio-baseline", { autoAlpha: 0, y: 24 }, { autoAlpha: 1, y: 0, duration: 0.8 }, ">")
        .fromTo(".portfolio-caption", { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.45 }, "<0.2");
    });

    return () => context.revert();
  }, []);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <main>
      <EntrySequence />
      <SiteHeader />

      <section className="hero" id="top">
        <h1 className="sr-only">Every building has a rhythm.</h1>
        <img
          className="hero-reference-image"
          src="/assets/klimori-hero-reference.webp"
          decoding="async"
          fetchPriority="high"
          alt="Klimori energy intelligence view showing a commercial building floorplate, its operating conditions, and the operations response loop"
        />
        <div className="hero-brand-mask" aria-hidden="true"></div>
        <div className="hero-context" aria-hidden="true"><span>LIVE BUILDING MODEL</span><strong>WARSAW / SITE 04</strong></div>
        <div className="hero-model-layer" aria-hidden="true">
          <span className="hero-model-node hero-model-node--weather"></span>
          <span className="hero-model-node hero-model-node--occupancy"></span>
          <span className="hero-model-node hero-model-node--comfort"></span>
          <span className="hero-model-node hero-model-node--energy"></span>
        </div>
        <div className="hero-live-readout" aria-hidden="true">
          <span className="hero-live-readout__state"><i></i> Live operating model</span>
          <span>5 signals reconciled</span>
        </div>
        <NavLink className="hero-demo-hotspot" to="/request-demo" aria-label="Request a Klimori demo"><span className="sr-only">Request a demo</span></NavLink>
      </section>

      <section className="story-chapter" aria-labelledby="story-heading">
        <div className="story-sticky">
          <ChapterMeta className="story-meta" index="01" title="THE OPERATIONAL GAP" context="SCROLL TO TRACE THE DAY" />
          <div className="story-copy chapter-copy">
            <SectionLabel>A building day does not arrive as one instruction.</SectionLabel>
            <h2 className="story-title" id="story-heading">It arrives as conditions.</h2>
          </div>
          <div className="story-stage" aria-label="Five independent building conditions converge into one operating reading">
            <div className="story-structure" aria-hidden="true">
              <span className="story-structure__line story-structure__line--one"></span>
              <span className="story-structure__line story-structure__line--two"></span>
              <span className="story-structure__line story-structure__line--three"></span>
              <span className="story-structure__core"><span>OPERATING<br />DAY</span></span>
            </div>
            {storySignals.map(({ icon: Icon, label, copy, tone }, index) => (
              <div className={`story-signal story-signal--${index + 1} story-signal--${tone}`} key={label}>
                <span className="story-signal__index">0{index + 1}</span>
                <Icon size={20} aria-hidden="true" />
                <div><strong>{label}</strong><p>{copy}</p></div>
                <span className="story-path" aria-hidden="true"></span>
              </div>
            ))}
          </div>
          <p className="story-reading"><Check size={18} /> Each signal is useful alone. The decision appears in the relationship.</p>
        </div>
      </section>

      <section className="resolution-chapter" id="system" aria-labelledby="system-heading">
        <div className="resolution-sticky">
          <ChapterMeta className="resolution-meta" index="02" title="THE OPERATING PICTURE" context="CONTEXT BEFORE ACTION" />
          <div className="resolution-copy chapter-copy">
            <SectionLabel>One operating picture</SectionLabel>
            <h2 id="system-heading">Now read the relationship.</h2>
            <p>When the conditions share the same frame, a building team can see what is changing, what is constrained, and where an intervention will matter.</p>
          </div>
          <div className="resolution-field" aria-label="Klimori reconciles the five conditions into an operating recommendation">
            <div className="resolution-rings" aria-hidden="true"><span></span><span></span><span></span></div>
            <div className="resolution-core"><Gauge size={23} /><span>KLIMORI<br />CONTEXT</span></div>
            {signals.map(({ icon: Icon, label, detail, tone }, index) => (
              <div className={`resolution-input resolution-input--${index + 1} resolution-input--${tone}`} key={label}>
                <Icon size={19} aria-hidden="true" />
                <div><strong>{label}</strong><span>{detail}</span></div>
                <i className="resolution-link" aria-hidden="true"></i>
              </div>
            ))}
          </div>
          <aside className="resolution-action" aria-label="Example Klimori recommendation">
            <div className="resolution-action__top"><span>Suggested operating adjustment</span><span>08:15</span></div>
            <h3>Review AHU-3 start.<br />The expected floor arrival is later than the scheduled runtime.</h3>
            <a className="text-link" href="#optimize">See the decision path <ArrowRight size={16} /></a>
          </aside>
          <p className="resolution-evidence"><Check size={18} /> The recommendation retains its rationale, constraints, and conditions of use.</p>
        </div>
      </section>

      <section className="monitor-chapter" id="monitor" aria-labelledby="monitor-heading">
        <div className="monitor-sticky">
          <ChapterMeta className="monitor-meta" index="03" title="KLIMORI MONITOR" context="FROM READING TO EVIDENCE" />
          <div className="monitor-copy chapter-copy">
            <SectionLabel>An operating trace</SectionLabel>
            <h2 id="monitor-heading">Find the runtime nobody planned.</h2>
            <p>Monitor compares what the building was asked to do with the patterns that actually unfolded. A difference is not a conclusion yet. It is the place to start looking.</p>
          </div>
          <div className="monitor-chart" aria-label="Example building runtime comparison showing HVAC operating before the scheduled and observed occupancy windows">
            <div className="monitor-hours" aria-hidden="true"><span>05:00</span><span>08:00</span><span>11:00</span><span>14:00</span><span>17:00</span><span>20:00</span></div>
            <div className="monitor-lane monitor-lane--schedule"><span>Scheduled HVAC</span><div className="monitor-track"><i className="monitor-bar"></i></div><strong>08:00–18:00</strong></div>
            <div className="monitor-lane monitor-lane--actual"><span>Observed HVAC</span><div className="monitor-track"><i className="monitor-bar"><b></b></i></div><strong>05:30–18:00</strong></div>
            <div className="monitor-lane monitor-lane--occupancy"><span>Observed occupancy</span><div className="monitor-track"><i className="monitor-bar"></i></div><strong>08:15–17:40</strong></div>
            <div className="monitor-observation"><span>EARLY RUNTIME</span><strong>02h 30m</strong><p>before observed occupancy</p></div>
            <i className="monitor-exception" aria-hidden="true"></i>
          </div>
          <aside className="monitor-finding" aria-label="Klimori Monitor finding">
            <div><span>MONITOR FINDING</span><span>WARSAW / SITE 04</span></div>
            <h3>The building has added runtime without an operating decision.</h3>
            <a className="text-link" href="#optimize">Continue to Optimize <ArrowRight size={16} /></a>
          </aside>
          <p className="monitor-evidence"><Check size={18} /> Compare each exception with its schedule, weather, occupancy, and portfolio baseline.</p>
        </div>
      </section>

      <section className="optimize-chapter" id="optimize" aria-labelledby="optimize-heading">
        <div className="optimize-sticky">
          <ChapterMeta className="optimize-meta" index="04" title="KLIMORI OPTIMIZE" context="THE DECISION PATH" />
          <div className="optimize-copy chapter-copy">
            <SectionLabel>A controlled adjustment</SectionLabel>
            <h2 id="optimize-heading">Give every intervention a reason.</h2>
            <p>Optimize keeps the conditions, constraints, and intended result together, so an operational change can be reviewed before it is applied.</p>
          </div>
          <div className="optimize-board" aria-label="Klimori Optimize evaluates occupancy, weather, schedule, tariff, and maintenance before a schedule adjustment">
            <div className="optimize-board__heading"><span>INPUT CONDITIONS</span><span>WARSAW / SITE 04 / TUESDAY</span></div>
            {optimizationConditions.map(({ icon: Icon, label, detail, tone }, index) => (
              <div className={`optimize-condition optimize-condition--${tone}`} key={label}>
                <span>0{index + 1}</span><Icon size={19} aria-hidden="true" /><div><strong>{label}</strong><p>{detail}</p></div><i className="optimize-connector" aria-hidden="true"></i>
              </div>
            ))}
          </div>
          <aside className="optimize-adjustment" aria-label="Example approved Klimori Optimize adjustment">
            <div className="optimize-adjustment__top"><span>PROPOSED ADJUSTMENT</span><span>REVIEW READY</span></div>
            <div className="optimize-time"><span>Observed</span><strong>05:30</strong><i></i><span>Proposed</span><strong>07:30</strong></div>
            <h3>Start AHU-3 at 07:30. Preserve the comfort window while removing unneeded runtime.</h3>
            <a className="text-link" href="#peak">Continue to Peak <ArrowRight size={16} /></a>
          </aside>
          <p className="optimize-record"><Check size={18} /> The rationale, constraints, reviewer, and applied change remain in the operating record.</p>
        </div>
      </section>

      <section className="peak-chapter" id="peak" aria-labelledby="peak-heading">
        <div className="peak-sticky">
          <ChapterMeta className="peak-meta" index="05" title="KLIMORI PEAK" context="PREPARE BEFORE THE COST ARRIVES" />
          <div className="peak-copy chapter-copy">
            <SectionLabel>The next operating day</SectionLabel>
            <h2 id="peak-heading">Prepare before the peak arrives.</h2>
            <p>Peak brings upcoming demand and tariff conditions into view early enough for teams to prepare a proportionate response across their portfolio.</p>
          </div>
          <div className="peak-chart" aria-label="Forecasted site demand and a tariff window from 12:00 to 20:00">
            <div className="peak-axis" aria-hidden="true"><span>12:00</span><span>14:00</span><span>16:00</span><span>18:00</span><span>20:00</span></div>
            <svg className="peak-chart__svg" viewBox="0 0 760 330" preserveAspectRatio="none" aria-hidden="true">
              <g className="peak-grid"><line x1="0" y1="62" x2="760" y2="62" /><line x1="0" y1="150" x2="760" y2="150" /><line x1="0" y1="238" x2="760" y2="238" /><line x1="190" y1="0" x2="190" y2="300" /><line x1="380" y1="0" x2="380" y2="300" /><line x1="570" y1="0" x2="570" y2="300" /></g>
              <path className="peak-demand-path" pathLength="1" d="M0 255 C95 245 145 230 205 205 S320 150 388 164 S484 92 550 75 S663 105 760 68" />
              <path className="peak-tariff-path" pathLength="1" d="M0 278 L330 278 L388 240 L570 240 L625 278 L760 278" />
            </svg>
            <div className="peak-window"><span>HIGH TARIFF WINDOW</span><strong>16:00–18:00</strong></div>
            <div className="peak-callout"><span>PROJECTED SITE DEMAND</span><strong>118 kW</strong><p>Expected at 17:00</p></div>
          </div>
          <aside className="peak-response" aria-label="Example Klimori Peak preparation">
            <div className="peak-response__top"><span>PRE-PEAK REVIEW</span><span>15:00</span></div>
            <h3>Review the next response before the tariff window opens.</h3>
            <ul><li><Check size={15} />Keep comfort range in view</li><li><Check size={15} />Coordinate the sites with an active peak risk</li></ul>
            <a className="text-link" href="#portfolios">View portfolio context <ArrowRight size={16} /></a>
          </aside>
          <p className="peak-record"><Check size={18} /> Forecasts, planned response, and actual outcome remain connected for the next operating day.</p>
        </div>
      </section>

      <section className="portfolio-chapter" id="portfolios" aria-labelledby="portfolio-heading">
        <div className="portfolio-sticky">
          <ChapterMeta className="portfolio-meta" index="06" title="PORTFOLIO INTELLIGENCE" context="COMMON BASELINE / LOCAL CONTEXT" />
          <div className="portfolio-copy chapter-copy">
            <SectionLabel>For portfolios, not just properties</SectionLabel>
            <h2 id="portfolio-heading">One operating intent. Every site has its context.</h2>
            <p>Compare like with like across offices, schools, and retail sites. Build a common baseline, then give each local team the conditions behind its exceptions.</p>
          </div>
          <div className="portfolio-table" aria-label="Example portfolio operating overview">
            <div className="portfolio-table__heading"><span><LineChart size={19} />24 active sites</span><span>NORMALISED OPERATING WINDOW</span><span>CONDITION</span></div>
            {[
              ["Warsaw", "08:00–18:00", "Aligned", "teal", "23%", "63%"],
              ["Gdansk", "07:30–17:30", "Review occupancy", "green", "19%", "61%"],
              ["Wroclaw", "08:00–19:00", "Tariff at 16:00", "amber", "25%", "69%"],
              ["Poznan", "09:00–18:00", "Maintenance due", "coral", "28%", "59%"],
            ].map(([city, hours, status, tone, start, width]) => (
              <div className={`portfolio-site portfolio-site--${tone}`} key={city}>
                <span className="portfolio-site__name">{city}</span><div className="portfolio-track"><i className="portfolio-window" style={{ "--start": start, "--width": width }}></i></div><div className="portfolio-status"><i></i><span>{status}</span><strong>{hours}</strong></div>
              </div>
            ))}
          </div>
          <aside className="portfolio-baseline" aria-label="Common operating baseline">
            <span>COMMON BASELINE</span><strong>08:00–18:00</strong><p>Local variance becomes a condition to understand, not a new system to operate.</p>
          </aside>
          <p className="portfolio-caption"><Check size={18} /> One operating language lets teams compare, act, and learn across the portfolio.</p>
        </div>
      </section>

      <section className="proof-strip" id="company">
        <Gauge size={25} />
        <p>Not another dashboard. A decision layer designed around the conditions that shape every building day.</p>
        <a className="text-link" href="#demo">Meet Klimori <ArrowRight size={16} /></a>
      </section>

      <section className="stats-section" id="evidence" aria-labelledby="stats-heading">
        <div className="stats-intro reveal">
          <SectionLabel>Operating evidence</SectionLabel>
          <h2 id="stats-heading">One day, measured from four useful angles.</h2>
          <p>These figures come from the operating story shown above. They demonstrate how Klimori structures evidence; they are not customer savings claims.</p>
        </div>
        <div className="stats-grid">
          {operatingStats.map(({ value, suffix, decimals, label, detail }, index) => (
            <article className="stat-item" key={label}>
              <i className="stats-rule" aria-hidden="true"></i>
              <span className="stat-index">0{index + 1}</span>
              <strong className="stat-value" data-value={value} data-decimals={decimals || 0} data-suffix={suffix}>0{suffix}</strong>
              <h3>{label}</h3>
              <p>{detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="testimonials-section" id="perspectives" aria-labelledby="testimonials-heading">
        <div className="testimonials-heading reveal">
          <SectionLabel>Operator perspectives</SectionLabel>
          <h2 id="testimonials-heading">Built around the questions teams already ask.</h2>
        </div>
        <div className="testimonials-list">
          {testimonials.map(({ quote, role, context }, index) => (
            <figure className="testimonial reveal" key={role}>
              <div className="testimonial__meta"><span>0{index + 1}</span><Quote size={18} aria-hidden="true" /></div>
              <blockquote>{quote}</blockquote>
              <figcaption><strong>{role}</strong><span>{context}</span></figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="pricing-section" id="pricing" aria-labelledby="pricing-heading">
        <div className="pricing-intro reveal">
          <SectionLabel>Commercial model</SectionLabel>
          <h2 id="pricing-heading">Start with the operating layer you need.</h2>
          <p>Klimori is priced annually by active site and connected systems, not by user seats. Begin with one product or combine all three across a portfolio.</p>
          <div className="pricing-basis"><Building2 size={18} aria-hidden="true" /><span><strong>Site-based annual plan</strong>Final pricing follows a short systems and portfolio review.</span></div>
        </div>
        <div className="pricing-plans" aria-label="Klimori product plans">
          {pricingPlans.map(({ icon: Icon, name, descriptor, scope, fit, path }, index) => (
            <article className="pricing-plan" key={name}>
              <div className="pricing-plan__index"><span>0{index + 1}</span><Icon size={21} aria-hidden="true" /></div>
              <div><span className="pricing-plan__descriptor">{descriptor}</span><h3>{name}</h3></div>
              <p>{scope}</p>
              <span className="pricing-plan__fit">{fit}</span>
              <a className="text-link" href={path}>Explore {name} <ArrowRight size={15} /></a>
            </article>
          ))}
        </div>
      </section>

      <section className="demo-section" id="demo" aria-labelledby="demo-heading">
        <div className="demo-intro reveal">
          <SectionLabel>Bring a portfolio into focus</SectionLabel>
          <h2 id="demo-heading">Start with the conditions you already have.</h2>
          <p>Tell us a little about your portfolio and we will show you how Klimori could fit your operating model.</p>
        </div>
        <form className="demo-form reveal" onSubmit={handleSubmit}>
          <label htmlFor="name">Name<input id="name" required name="name" placeholder="Your name" /></label>
          <label htmlFor="email">Work email<input id="email" required type="email" name="email" placeholder="name@company.com" /></label>
          <label htmlFor="portfolio">Portfolio size<select id="portfolio" name="portfolio"><option>1–5 sites</option><option>6–25 sites</option><option>26–100 sites</option><option>100+ sites</option></select></label>
          <button className="button button--primary" type="submit">Request a demo <ArrowRight size={18} /></button>
          {submitted && <p className="form-success" role="status"><Check size={17} /> Preview complete. No information was sent.</p>}
        </form>
      </section>

      <SiteFooter />
    </main>
  );
}

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const timers = new Set();
    let searchAttempts = 0;
    let settleAttempts = 0;

    function schedule(delay) {
      const timer = window.setTimeout(() => {
        timers.delete(timer);
        moveToRoutePosition();
      }, delay);
      timers.add(timer);
    }

    function moveToRoutePosition() {
      if (!hash) {
        window.scrollTo({ top: 0, left: 0, behavior: "auto" });
        return;
      }

      const target = document.getElementById(hash.slice(1));
      if (target) {
        target.scrollIntoView({ block: "start", behavior: "auto" });
        settleAttempts += 1;
        if (settleAttempts < 4) schedule(settleAttempts * 90);
        return;
      }

      searchAttempts += 1;
      if (searchAttempts < 60) schedule(50);
    }

    moveToRoutePosition();

    return () => timers.forEach((timer) => window.clearTimeout(timer));
  }, [pathname, hash]);

  return null;
}

function RouteLoader() {
  return <div className="route-loader" role="status"><span></span>Loading Klimori</div>;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Suspense fallback={<RouteLoader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/monitor" element={<ProductPage productKey="monitor" />} />
          <Route path="/optimize" element={<ProductPage productKey="optimize" />} />
          <Route path="/peak" element={<ProductPage productKey="peak" />} />
          <Route path="/system" element={<NarrativePage pageKey="system" />} />
          <Route path="/portfolios" element={<NarrativePage pageKey="portfolios" />} />
          <Route path="/company" element={<NarrativePage pageKey="company" />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/request-demo" element={<RequestDemoPage />} />
          <Route path="/legal" element={<LegalPage />} />
          <Route path="/sign-in" element={<SignInPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export { App };
