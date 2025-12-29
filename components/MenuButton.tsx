"use client";

import { useState } from "react";
import Link from "next/link";

export default function MenuButton() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative self-end">
      {/* Tombol Hamburger */}
      <button
        onClick={() => setOpen(!open)}
        className="bg-pink-600 hover:bg-pink-700 text-white p-3 rounded-full shadow-lg transition duration-300 text-xl"
        aria-label="Menu"
      >
        ☰
      </button>

      {/* Dropdown Menu */}
      {open && (
        <div className="absolute right-0 mt-2 w-48 bg-white text-pink-700 rounded-xl shadow-lg overflow-hidden z-50">
          <Link
            href="/"
            className="block px-4 py-2 hover:bg-pink-100 transition"
            onClick={() => setOpen(false)}
          >
            🏠 Beranda
          </Link>
          <Link
            href="/menu"
            className="block px-4 py-2 hover:bg-pink-100 transition"
            onClick={() => setOpen(false)}
          >
            🍰 Menu
          </Link>
          <Link
            href="/about"
            className="block px-4 py-2 hover:bg-pink-100 transition"
            onClick={() => setOpen(false)}
          >
            ℹ️ Tentang
          </Link>
          <Link
            href="/contact"
            className="block px-4 py-2 hover:bg-pink-100 transition"
            onClick={() => setOpen(false)}
          >
            📞 Kontak
          </Link>
        </div>
      )}
    </div>
  );
}
