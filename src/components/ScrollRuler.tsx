"use client";

import { useEffect, useRef, useState, type PointerEvent } from "react";

const sections = [
  { id: "intro", label: "Home" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

const ticksPerSection = 12;
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

      // Keep the last section reachable when it is shorter than the viewport.
      if (maxScroll > 1 && window.scrollY >= maxScroll - 1) {
        setActive(sections[sections.length - 1].id);
        return;
      }

      let mostVisible = 0;
      let current = sections[0].id;
      targets.forEach((target) => {
        const { top, bottom } = target.getBoundingClientRect();
        const visible = Math.min(bottom, viewport.clientHeight) - Math.max(top, 0);
        if (visible > mostVisible) {
          mostVisible = visible;
          current = target.id;
        }
      });
      setActive(current);
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
