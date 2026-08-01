"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/what-we-do", label: "What We Do" },
  { href: "/impact", label: "Our Impact" },
  {
    label: "Get Involved",
    children: [
      { href: "/donate", label: "Donate" },
      { href: "/partner", label: "Partner With Us" },
      { href: "/volunteer", label: "Volunteer" },
      { href: "/request-outreach", label: "Request an Outreach" },
    ],
  },
  { href: "/stories", label: "News" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="bg-base-white border-b border-surface-container shadow-sm sticky top-0 z-50">
      <nav className="flex justify-between items-center max-w-container-max mx-auto px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span
            className="material-symbols-outlined text-coral-warm text-3xl"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            volunteer_activism
          </span>
          <span className="font-display-lg text-headline-sm font-bold text-ink-navy">
            iPadAGirl
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) =>
            link.children ? (
              <div key={link.label} className="relative">
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="font-body-md text-on-surface-variant hover:text-primary transition-colors flex items-center gap-1"
                >
                  {link.label}
                  <span className="material-symbols-outlined text-[16px]">
                    expand_more
                  </span>
                </button>
                {dropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-52 bg-base-white rounded-xl shadow-lg border border-surface-container py-2 z-50">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => setDropdownOpen(false)}
                        className="block px-4 py-2.5 text-on-surface-variant hover:text-primary hover:bg-pink-soft/50 transition-colors text-body-md"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href!}
                className={`font-body-md transition-colors ${
                  pathname === link.href
                    ? "text-primary font-bold border-b-2 border-primary"
                    : "text-on-surface-variant hover:text-primary"
                }`}
              >
                {link.label}
              </Link>
            )
          )}
        </div>

        {/* CTA */}
        <div className="flex items-center gap-3">
          <Link
            href="/volunteer"
            className="hidden lg:block font-body-md px-4 py-2 border border-ink-navy text-ink-navy rounded-lg hover:bg-ink-navy hover:text-base-white transition-all"
          >
            Volunteer
          </Link>
          <Link
            href="/donate"
            className="font-body-md px-6 py-2.5 bg-coral-warm text-base-white rounded-lg font-semibold shadow-sm hover:opacity-90 transition-opacity"
          >
            Donate
          </Link>
          {/* Mobile menu toggle */}
          <button
            className="md:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined text-ink-navy">
              {open ? "close" : "menu"}
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-base-white border-t border-surface-container px-6 py-4 space-y-3">
          {navLinks.map((link) =>
            link.children ? (
              <div key={link.label} className="space-y-2">
                <p className="font-label-md text-on-surface-variant uppercase tracking-wider">
                  {link.label}
                </p>
                {link.children.map((child) => (
                  <Link
                    key={child.href}
                    href={child.href}
                    onClick={() => setOpen(false)}
                    className="block pl-4 py-1 text-on-surface-variant hover:text-primary"
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href!}
                onClick={() => setOpen(false)}
                className={`block py-1 ${
                  pathname === link.href
                    ? "text-primary font-bold"
                    : "text-on-surface-variant"
                }`}
              >
                {link.label}
              </Link>
            )
          )}
        </div>
      )}
    </header>
  );
}
