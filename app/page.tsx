"use client";

import { useState } from "react";
import FoodCard from "@/components/FoodCard";
import MenuButton from "@/components/MenuButton";

type Food = {
  title: string;
  img: string;
  desc: string;
  category: string;
};

const foods: Food[] = [
  {
    title: "Brownies Cokelat",
    img: "https://tse2.mm.bing.net/th/id/OIP.lBv8YtsfqVpMCZ9wgMmI7wHaHa?pid=Api&P=0&h=220",
    desc: "🍫 Brownies lembut dengan cokelat premium yang lumer di mulut.",
    category: "cake",
  },
  {
    title: "Donat Stroberi",
    img: "https://tse1.mm.bing.net/th/id/OIP.Z4rW95uEIg5MK-q0LLfr5AHaEJ?pid=Api&P=0&h=220",
    desc: "🍩 Donat empuk dengan topping stroberi merah muda yang manis dan cantik!",
    category: "donut",
  },
  {
    title: "Cake Pelangi",
    img: "https://via.placeholder.com/300x200.png?text=Cake+Pelangi",
    desc: "🌈 Cake warna-warni dengan rasa yang lembut dan manis.",
    category: "cake",
  },
];

export default function Home() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");

  const filteredFoods = foods.filter((food) => {
    const matchSearch =
      food.title.toLowerCase().includes(search.toLowerCase()) ||
      food.desc.toLowerCase().includes(search.toLowerCase());

    const matchCategory =
      category === "all" || food.category === category;

    return matchSearch && matchCategory;
  });

  return (
    <div className="font-sans min-h-screen flex flex-col bg-gradient-to-br from-pink-200 via-pink-400 to-pink-600 text-pink-100">
      {/* MAIN CONTENT */}
      <main className="flex flex-col gap-8 items-center sm:items-start p-10 w-full">

        {/* TOMBOL MENU */}
        <MenuButton />

        {/* KELOMPOK */}
        <h1 className="text-2xl font-bold text-pink-200">
          KELOMPOK UHUY
        </h1>

        {/* JUDUL */}
        <h1 className="text-4xl font-extrabold tracking-tight drop-shadow-lg text-pink-100">
          🍰 Galeri Makanan Manis ✨
        </h1>

        {/* DESKRIPSI */}
        <p className="text-pink-50 text-center sm:text-left max-w-2xl leading-relaxed drop-shadow-sm">
          Selamat Datang di{" "}
          <span className="font-semibold text-yellow-100">
            Galeri Makanan Maulidina Amanta Sari & Marsya Ayu Cinta Laudia
          </span>
          . Semua makanan manis dengan{" "}
          <span className="text-yellow-200">warna cantik</span> dan rasa yang bikin bahagia 💖.
        </p>

        {/* 🔍 SEARCH & FILTER */}
        <div className="flex flex-col sm:flex-row gap-4 w-full max-w-xl">
          <input
            type="text"
            placeholder="🔍 Cari makanan..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 px-4 py-2 rounded-full text-pink-700 outline-none shadow"
          />

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="px-4 py-2 rounded-full text-pink-700 outline-none shadow"
          >
            <option value="all">Semua</option>
            <option value="cake">Cake</option>
            <option value="donut">Donat</option>
          </select>
        </div>

        {/* GALERI MAKANAN */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-6 w-full">
          {filteredFoods.length > 0 ? (
            filteredFoods.map((food, idx) => (
              <FoodCard
                key={idx}
                title={food.title}
                img={food.img}
                desc={food.desc}
              />
            ))
          ) : (
            <p className="text-center col-span-full text-pink-100">
              😢 Makanan tidak ditemukan
            </p>
          )}
        </div>
      </main>
    </div>
  );
}
