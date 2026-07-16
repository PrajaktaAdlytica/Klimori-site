import { useCallback, useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import {
  ArrowRight,
  CalendarDays,
  CloudSun,
  Gauge,
  UsersRound,
  Wrench,
  Zap,
} from "lucide-react";

const SESSION_KEY = "klimori-entry-seen-v2";

const entrySignals = [
  { icon: CalendarDays, label: "Schedule", value: "08:00-18:00", status: "Schedule aligned", tone: "teal" },
  { icon: UsersRound, label: "Occupancy", value: "62% utilised", status: "Occupancy matched", tone: "green" },
  { icon: CloudSun, label: "Weather", value: "15 C / partly cloudy", status: "Weather reconciled", tone: "blue" },
  { icon: Zap, label: "Tariff", value: "Event at 16:00", status: "Tariff window mapped", tone: "amber" },
  { icon: Wrench, label: "Maintenance", value: "AHU-3 / review due", status: "Constraint retained", tone: "coral" },
];

function hasSeenEntry() {
  try {
    return window.sessionStorage.getItem(SESSION_KEY) === "true";
  } catch {
    return false;
  }
}

function markEntrySeen() {
  try {
    window.sessionStorage.setItem(SESSION_KEY, "true");
  } catch {
    // The entry still works when storage is unavailable.
  }
}

function shouldShowEntry() {
  if (typeof window === "undefined") return false;
  if (window.innerWidth < 760) return false;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return false;
  const forceReplay = new URLSearchParams(window.location.search).get("intro") === "1";
  return forceReplay || !hasSeenEntry();
}

function EntrySequence() {
  const rootRef = useRef(null);
  const timelineRef = useRef(null);
  const [isVisible, setIsVisible] = useState(shouldShowEntry);

  const finishEntry = useCallback(() => {
    markEntrySeen();
    setIsVisible(false);
  }, []);

  const skipEntry = useCallback(() => {
    if (timelineRef.current) timelineRef.current.pause();
    if (rootRef.current) gsap.set(rootRef.current, { autoAlpha: 0 });
    finishEntry();
  }, [finishEntry]);

  useEffect(() => {
    if (!isVisible || !rootRef.current) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.body.classList.add("klimori-entry-active");

    const handleKeyDown = (event) => {
      if (event.key === "Escape") skipEntry();
    };
    window.addEventListener("keydown", handleKeyDown);

    const context = gsap.context(() => {
      const signalElements = gsap.utils.toArray(".entry-signal");
      const count = rootRef.current.querySelector(".entry-core__count");
      const current = rootRef.current.querySelector(".entry-core__current");
      const progress = rootRef.current.querySelectorAll(".entry-core__progress i");
      const timeline = gsap.timeline({
        defaults: { ease: "power3.out" },
        onComplete: finishEntry,
      });
      timelineRef.current = timeline;

      timeline
        .fromTo(".entry-copy > *", { autoAlpha: 0, y: 18 }, { autoAlpha: 1, y: 0, duration: 0.42, stagger: 0.06 })
        .fromTo(".entry-map__building", { autoAlpha: 0, scale: 0.94 }, { autoAlpha: 0.72, scale: 1, duration: 0.62, ease: "power2.out" }, "<0.08")
        .fromTo(".entry-core", { autoAlpha: 0, scale: 0.84 }, { autoAlpha: 1, scale: 1, duration: 0.46, ease: "back.out(1.45)" }, "<0.16");

      signalElements.forEach((signal, index) => {
        const route = signal.querySelector(".entry-signal__route");
        const track = route.querySelector("i");
        const pulse = route.querySelector("b");
        const vertical = signal.classList.contains("entry-signal--5");
        const right = signal.classList.contains("entry-signal--2") || signal.classList.contains("entry-signal--4");
        const start = vertical ? { autoAlpha: 0, y: -16 } : { autoAlpha: 0, x: right ? 20 : -20 };
        const trackFrom = vertical ? { scaleY: 0 } : { scaleX: 0 };
        const trackTo = vertical ? { scaleY: 1 } : { scaleX: 1 };
        const pulseFrom = vertical
          ? { autoAlpha: 0, y: 0 }
          : { autoAlpha: 0, x: right ? Math.max(route.clientWidth - 7, 0) : 0 };
        const pulseTo = vertical
          ? { autoAlpha: 1, y: Math.max(route.clientHeight - 7, 0) }
          : { autoAlpha: 1, x: right ? 0 : Math.max(route.clientWidth - 7, 0) };

        timeline
          .fromTo(signal, start, { autoAlpha: 1, x: 0, y: 0, duration: 0.28 }, index === 0 ? ">-0.04" : ">-0.08")
          .fromTo(track, trackFrom, { ...trackTo, duration: 0.32, ease: "power2.inOut" }, "<0.03")
          .fromTo(pulse, pulseFrom, { ...pulseTo, duration: 0.34, ease: "power2.inOut" }, "<0.02")
          .to(pulse, { autoAlpha: 0, duration: 0.12 })
          .call(() => {
            signal.classList.add("entry-signal--confirmed");
            count.textContent = `0${index + 1} / 05`;
            current.textContent = entrySignals[index].status;
            gsap.to(progress[index], { backgroundColor: "#f09a72", scaleX: 1, duration: 0.22 });
          });
      });

      timeline
        .to(".entry-core", { scale: 1.045, duration: 0.3, ease: "power2.out" })
        .to(".entry-core", { scale: 1, duration: 0.24, ease: "power2.inOut" })
        .fromTo(".entry-core__complete", { autoAlpha: 0, y: 8 }, { autoAlpha: 1, y: 0, duration: 0.3 }, "<0.02")
        .to(".entry-sequence__content, .entry-sequence__footer, .entry-sequence__rail", { autoAlpha: 0, y: -14, duration: 0.28, stagger: 0.025 }, "+=0.5")
        .to(rootRef.current, { yPercent: -100, duration: 0.58, ease: "power4.inOut" }, "<0.06");
    }, rootRef);

    return () => {
      context.revert();
      timelineRef.current = null;
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
      document.body.classList.remove("klimori-entry-active");
    };
  }, [finishEntry, isVisible, skipEntry]);

  if (!isVisible) return null;

  return (
    <div
      className="entry-sequence"
      ref={rootRef}
      role="dialog"
      aria-modal="true"
      aria-label="Klimori operating model introduction"
    >
      <div className="entry-sequence__rail">
        <img className="entry-rail__brand" src="/assets/klimori-lockup-reference.webp" alt="Klimori" decoding="async" />
        <span className="entry-rail__meta">Live operating model / Warsaw 04</span>
        <button className="entry-skip" type="button" onClick={skipEntry} autoFocus>
          Skip intro <ArrowRight size={15} aria-hidden="true" />
        </button>
      </div>

      <div className="entry-sequence__content">
        <div className="entry-copy">
          <div>
            <span>05 live conditions / one operating picture</span>
            <h2>The building comes into focus.</h2>
          </div>
          <p>Watch Klimori reconcile the conditions outside and within before the operating day begins.</p>
        </div>

        <div className="entry-map" aria-label="Five building conditions travel into one Klimori operating model">
          <img className="entry-map__building" src="/assets/hero-floorplate.webp" alt="" aria-hidden="true" decoding="async" fetchPriority="high" />

          {entrySignals.map(({ icon: Icon, label, value, tone }, index) => (
            <div className={`entry-signal entry-signal--${index + 1} entry-signal--${tone}`} key={label}>
              <span className="entry-signal__index">0{index + 1}</span>
              <Icon size={23} strokeWidth={1.45} aria-hidden="true" />
              <div>
                <strong>{label}</strong>
                <span>{value}</span>
              </div>
              <span className="entry-signal__route" aria-hidden="true"><i></i><b></b></span>
              <span className="entry-signal__confirmed" aria-hidden="true">Connected</span>
            </div>
          ))}

          <div className="entry-core">
            <div className="entry-core__status"><i></i><span>Live building context</span></div>
            <Gauge size={38} strokeWidth={1.3} aria-hidden="true" />
            <span className="entry-core__count">00 / 05</span>
            <strong>Operating model</strong>
            <small className="entry-core__current">Waiting for conditions</small>
            <span className="entry-core__progress" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i></span>
            <em className="entry-core__complete">Context ready</em>
          </div>
        </div>
      </div>

      <div className="entry-sequence__footer">
        <span>Schedule / Occupancy / Weather / Tariff / Maintenance</span>
        <span>Continuously learning. Always in step.</span>
      </div>
    </div>
  );
}

export { EntrySequence };
