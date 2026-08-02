"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const links = [
  { href: "/", label: "O metodě" },
  { href: "/kurzy", label: "Kurzy" },
  { href: "/produkty", label: "Produkty" },
  { href: "/aktualni-terminy-kurzu", label: "Aktuálně" },
  { href: "/najit-pruvodce", label: "Najít průvodce" },
  { href: "/kontakt", label: "Kontakt" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div
        className={`transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-sm border-b border-[var(--cream-dark)]"
            : "bg-white/90 backdrop-blur-sm"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
          <Link
            href="/"
            className="font-heading text-lg font-semibold tracking-[0.12em] uppercase text-[var(--gold)]"
          >
            Metoda JIH<span className="align-super text-[0.6em]">®</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-[10px] tracking-[0.25em] uppercase text-[var(--foreground)] hover:text-[var(--gold)] transition-colors duration-200"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            <span className={`block w-5 h-px bg-[var(--foreground)] transition-all duration-200 ${open ? "rotate-45 translate-y-2.5" : ""}`} />
            <span className={`block w-5 h-px bg-[var(--foreground)] transition-all duration-200 ${open ? "opacity-0" : ""}`} />
            <span className={`block w-5 h-px bg-[var(--foreground)] transition-all duration-200 ${open ? "-rotate-45 -translate-y-2.5" : ""}`} />
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden bg-white border-t border-[var(--cream-dark)] px-6 py-6 flex flex-col gap-5">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-[10px] tracking-[0.25em] uppercase text-[var(--foreground)] hover:text-[var(--gold)] transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
