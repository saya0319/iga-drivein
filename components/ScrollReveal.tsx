"use client";

import { useEffect } from "react";

const REVEAL_SELECTOR = [
  ".story-section__copy",
  ".story-section__photo",
  ".experience-strip__copy",
  ".experience-strip figure",
  ".floor-map__heading",
  ".floor-map__viewport",
  ".section-heading",
  ".dining-feature",
  ".menu-photo-card",
  ".hospitality-section__copy",
  ".hospitality-section__image",
  ".group-section__image",
  ".group-section__copy",
  ".antique-section__copy",
  ".antique-section__image",
  ".treasure-section__content",
  ".ninja-experience__copy",
  ".ninja-price-card",
  ".ninja-gallery figure",
  ".souvenir-section__image",
  ".souvenir-section__copy",
  ".access-section > *",
  ".cta-band > *"
].join(",");

export function ScrollReveal() {
  useEffect(() => {
    const revealTargets = document.querySelectorAll<HTMLElement>(REVEAL_SELECTOR);

    revealTargets.forEach((element, index) => {
      element.dataset.reveal = "";
      element.style.setProperty("--reveal-delay", `${(index % 4) * 70}ms`);
    });

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
      revealTargets.forEach((element) => element.classList.add("is-visible"));
      document.documentElement.classList.add("reveal-ready");
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      {
        rootMargin: "0px 0px -8%",
        threshold: 0.08
      }
    );

    revealTargets.forEach((element) => observer.observe(element));
    document.documentElement.classList.add("reveal-ready");

    return () => observer.disconnect();
  }, []);

  return null;
}
