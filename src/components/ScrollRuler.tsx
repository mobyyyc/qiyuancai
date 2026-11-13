"use client";

import { useEffect, useRef, useState, type PointerEvent } from "react";

const sections = [
  { id: "intro", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

const ticksPerSection = 9;
const intervals = (sections.length - 1) * ticksPerSection;
const ticks = Array.from({ length: intervals + 1 }, (_, index) => index);

export default function ScrollRuler() {
  const ruler = useRef<HTMLElement>(null);
  const scale = useRef<HTMLSpanElement>(null);
  const [active, setActive] = useState(sections[0].id);

  useEffect(() => {
    const targets = sections.map(({ id }) => document.getElementById(id)!);
    let frame = 0;

    function update() {
      frame = 0;
      if (!ruler.current?.getClientRects().length) return;

      const viewport = document.documentElement;
      const maxScroll = viewport.scrollHeight - viewport.clientHeight;

      if (window.scrollY <= 1) {
        setActive(sections[0].id);
        return;
      }

      if (maxScroll > 1 && window.scrollY >= maxScroll - 1) {
        // Several short sections can share the same final anchor position.
        const linked = targets.find((target) => {
          if (window.location.hash !== `#${target.id}`) return false;
          const margin = parseFloat(getComputedStyle(target).scrollMarginTop);
          return target.getBoundingClientRect().top >= margin - 1;
        });
        setActive(linked?.id ?? sections[sections.length - 1].id);
        return;
      }

      const readingLine = Math.min(viewport.clientHeight * 0.2, 144);
      const current = targets.findLast((target) => target.getBoundingClientRect().top <= readingLine);
      setActive(current?.id ?? sections[0].id);
    }

    function schedule() {
      if (!frame) frame = window.requestAnimationFrame(update);
    }

    const resize = new ResizeObserver(schedule);
    resize.observe(document.body);
    window.addEventListener("resize", schedule);
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("hashchange", schedule);
    schedule();

    return () => {
      window.cancelAnimationFrame(frame);
      resize.disconnect();
      window.removeEventListener("resize", schedule);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("hashchange", schedule);
    };
  }, []);

  function moveTicks(event: PointerEvent<HTMLElement>) {
    if (event.pointerType === "touch" || !scale.current) return;

    const { top, height } = scale.current.getBoundingClientRect();
    const position = ((event.clientY - top) / height) * intervals;
    const nearest = Math.max(0, Math.min(intervals, position));

    scale.current.querySelectorAll<HTMLElement>(".ruler-tick").forEach((tick, index) => {
      const distance = Math.abs(index - nearest);
      const extension = Math.max(0, 1 - distance / 9) ** 2;
      tick.style.setProperty("--extension", String(extension));
    });
  }

  return (
    <nav
      className="ruler"
      aria-label="Page navigation"
      ref={ruler}
      onPointerMove={moveTicks}
    >
      <span className="ruler-scale" aria-hidden="true" ref={scale}>
        {ticks.map((index) => (
          <span
            key={index}
            className={index % ticksPerSection === 0 ? "ruler-tick ruler-tick-major" : "ruler-tick"}
            style={{ top: `${index / intervals * 100}%` }}
          />
        ))}
      </span>
      {sections.map(({ id, label }) => (
        <a key={id} href={`#${id}`} aria-current={active === id ? "location" : undefined}>
          <span className="ruler-label">{label}</span>
        </a>
      ))}
    </nav>
  );
}
