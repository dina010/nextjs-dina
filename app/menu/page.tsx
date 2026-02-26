"use client";

import { useMemo, useState } from "react";
import FoodCard from "@/components/FoodCard";
import MenuButton from "@/components/MenuButton";
import { SearchIcon } from "@/components/icons";

/* ================= TYPES ================= */
type Food = {
  title: string;
  img: string;
  desc: string;
  category: "cake" | "donut";
};

/* ================= DATA ================= */
const FOOD_LIST: Food[] = [
  {
    title: "Brownies Cokelat",
    img: "https://tse2.mm.bing.net/th/id/OIP.lBv8YtsfqVpMCZ9wgMmI7wHaHa?pid=Api&P=0&h=220",
    desc: "Brownies lembut dengan cokelat premium yang lumer di mulut.",
    category: "cake",
  },
  {
    title: "Donat Stroberi",
    img: "https://tse1.mm.bing.net/th/id/OIP.Z4rW95uEIg5MK-q0LLfr5AHaEJ?pid=Api&P=0&h=220",
    desc: "Donat empuk dengan topping stroberi merah muda.",
    category: "donut",
  },
  {
    title: "Cake Pelangi",
    img: "https://via.placeholder.com/300x200.png?text=Cake+Pelangi",
    desc: "Cake warna-warni dengan tekstur lembut dan manis.",
    category: "cake",
  },
];

/* ================= PAGE ================= */
export default function MenuPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<"all" | Food["category"]>("all");

  const filteredFoods = useMemo(() => {
    return FOOD_LIST.filter((food) => {
      const matchSearch =
        food.title.toLowerCase().includes(search.toLowerCase()) ||
        food.desc.toLowerCase().includes(search.toLowerCase());

      const matchCategory =
        category === "all" || food.category === category;

      return matchSearch && matchCategory;
    });
  }, [search, category]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-200 via-pink-400 to-pink-600 text-pink-100">
      <main className="max-w-7xl mx-auto p-10 flex flex-col gap-8">
        <header className="space-y-3">
          <h2 className="text-2xl font-bold text-pink-200">
            KELOMPOK UHUY
          </h2>

          <h1 className="text-4xl font-extrabold">
            Galeri Makanan Manis
          </h1>

          <p className="max-w-2xl">
            Galeri makanan manis dengan tampilan modern dan profesional.
          </p>
        </header>

        {/* SEARCH */}
        <div className="flex gap-3 max-w-xl items-center bg-white rounded-full px-4 py-2 shadow">
          <SearchIcon className="w-5 h-5 text-pink-500" />
          <input
            type="text"
            placeholder="Cari makanan"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 outline-none text-pink-700"
          />
        </div>

        {/* FILTER */}
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value as any)}
          className="max-w-xs px-4 py-2 rounded-full text-pink-700"
        >
          <option value="all">Semua</option>
          <option value="cake">Cake</option>
          <option value="donut">Donat</option>
        </select>

        {/* GALLERY */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredFoods.length ? (
            filteredFoods.map((food) => (
              <FoodCard
                key={food.title}
                title={food.title}
                img={food.img}
                desc={food.desc}
              />
            ))
          ) : (
            <p className="col-span-full text-center">
              Data tidak ditemukan
            </p>
          )}
        </section>
      </main>
    </div>
  );
}
