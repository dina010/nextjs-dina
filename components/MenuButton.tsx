"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export default function MenuButton() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  // Tutup menu saat klik di luar
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      ref={menuRef}
      className="fixed top-6 right-6 z-50"
    >
      {/* Tombol Hamburger */}
      <button
        onClick={() => setOpen((prev) => !prev)}
        aria-label="Open menu"
        className="bg-pink-600 hover:bg-pink-700 text-white p-3 rounded-full shadow-lg transition"
      >
        {/* Icon garis 3 (SVG) */}
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {/* Dropdown Menu + Animation */}
      <div
        className={`
          absolute right-0 mt-3 w-48 bg-white text-pink-700
          rounded-xl shadow-xl overflow-hidden
          transform transition-all duration-300 ease-out
          ${open
            ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
            : "opacity-0 -translate-y-2 scale-95 pointer-events-none"}
        `}
      >
        <NavItem href="/" label="Beranda" close={() => setOpen(false)} />
        <NavItem href="/menu" label="Menu" close={() => setOpen(false)} />
        <NavItem href="/about" label="Tentang" close={() => setOpen(false)} />
        <NavItem href="/contact" label="Kontak" close={() => setOpen(false)} />
      </div>
    </div>
  );
}

function NavItem({
  href,
  label,
  close,
}: {
  href: string;
  label: string;
  close: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={close}
      className="block px-4 py-3 hover:bg-pink-100 transition"
    >
      {label}
    </Link>
  );
}
