"use client";

import React, { useEffect, useState } from "react";

export default function ThemeToggle(): React.ReactElement {
  // Start with `null` so server and initial client render match (avoids hydration mismatch).
  const [theme, setTheme] = useState<"light" | "dark" | null>(null);

  useEffect(() => {
    // On mount, determine the user's theme preference / saved value.
    const saved = window.localStorage.getItem("theme");
    const preferred =
      saved === "light" || saved === "dark"
        ? (saved as "light" | "dark")
        : window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches
        ? "light"
        : "dark";

    setTheme(preferred);
  }, []);

  useEffect(() => {
    if (theme === null) return;
    const root = document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme);
    try {
      window.localStorage.setItem("theme", theme);
    } catch {
      // ignore quota errors
    }
  }, [theme]);

  const toggle = () => setTheme((t) => (t === "light" ? "dark" : "light"));

  return (
    <button
      type="button"
      // Only render aria-pressed when we know the theme to avoid server/client mismatch
      {...(theme !== null ? { "aria-pressed": theme === "dark" } : {})}
      aria-label="Toggle color theme"
      title="Toggle color theme"
      className="theme-toggle"
      onClick={toggle}
    >
      <span className="sr-only">Toggle theme</span>
      {theme === null ? (
        // neutral placeholder icon shown before mount (same on server and initial client)
        <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="7" stroke="currentColor" strokeWidth="1.25" />
        </svg>
      ) : theme === "light" ? (
        <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
          <g stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
            <line x1="12" y1="1" x2="12" y2="3" />
            <line x1="12" y1="21" x2="12" y2="23" />
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
            <line x1="1" y1="12" x2="3" y2="12" />
            <line x1="21" y1="12" x2="23" y2="12" />
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
          </g>
        </svg>
      ) : (
        <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )}
    </button>
  );
}
