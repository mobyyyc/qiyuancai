"use client";

import React from "react";
import ThemeToggle from "./ThemeToggle";

export default function Navbar(): React.ReactElement {
  return (
    <header className="site-header">
      <a href="#" className="brand-name" aria-label="Qiyuan Cai home">
        Qiyuan Cai
      </a>

      <nav className="site-nav" aria-label="Primary navigation">
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>

      <ThemeToggle />
    </header>
  );
}
