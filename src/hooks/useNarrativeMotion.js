import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function useNarrativeMotion(title) {
  const rootRef = useRef(null);

  useEffect(() => {
    document.title = title;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;

    const context = gsap.context(() => {
      const heroItems = gsap.utils.toArray(".route-hero .route-motion-item");
      const heroMedia = rootRef.current?.querySelector(".route-hero__media");

      if (heroItems.length) {
        gsap.fromTo(
          heroItems,
          { autoAlpha: 0, y: 26 },
          { autoAlpha: 1, y: 0, duration: 0.8, stagger: 0.1, ease: "power3.out" },
        );
      }
      if (heroMedia) {
        gsap.fromTo(
          heroMedia,
          { autoAlpha: 0, x: 32 },
          { autoAlpha: 1, x: 0, duration: 0.95, ease: "power3.out" },
        );
      }

      gsap.utils.toArray(".route-motion-section:not(.route-hero)").forEach((section) => {
        const heading = section.querySelector(".route-motion-heading");
        const items = section.querySelectorAll(".route-motion-item");
        const rules = section.querySelectorAll(".route-motion-rule");
        const image = section.querySelector(".route-motion-media");

        if (heading) {
          gsap.fromTo(
            heading,
            { autoAlpha: 0, y: 30 },
            { autoAlpha: 1, y: 0, duration: 0.8, ease: "power3.out", scrollTrigger: { trigger: section, start: "top 82%", once: true } },
          );
        }
        if (items.length) {
          gsap.fromTo(
            items,
            { autoAlpha: 0, y: 24 },
            { autoAlpha: 1, y: 0, duration: 0.72, stagger: 0.1, ease: "power3.out", scrollTrigger: { trigger: section, start: "top 78%", once: true } },
          );
        }
        if (rules.length) {
          gsap.fromTo(
            rules,
            { scaleX: 0 },
            { scaleX: 1, duration: 1, stagger: 0.08, ease: "power2.out", transformOrigin: "left", scrollTrigger: { trigger: section, start: "top 78%", once: true } },
          );
        }
        if (image) {
          gsap.fromTo(
            image,
            { yPercent: -3 },
            { yPercent: 3, ease: "none", scrollTrigger: { trigger: section, start: "top bottom", end: "bottom top", scrub: 0.65 } },
          );
        }
      });
    }, rootRef);

    const frame = window.requestAnimationFrame(() => ScrollTrigger.refresh());
    return () => {
      window.cancelAnimationFrame(frame);
      context.revert();
    };
  }, [title]);

  return rootRef;
}

export { useNarrativeMotion };
