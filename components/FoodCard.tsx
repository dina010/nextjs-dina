import Image from "next/image";
import { CakeIcon } from "@/components/icons";

type FoodCardProps = {
  title: string;
  img: string;
  desc: string;
};

export default function FoodCard({ title, img, desc }: FoodCardProps) {
  return (
    <article className="bg-pink-500/30 rounded-2xl p-6 shadow-lg border border-pink-200 hover:-translate-y-2 transition-transform">
      {/* IMAGE */}
      <div className="relative w-full h-[200px] rounded-lg overflow-hidden">
        <Image
          src={img}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
          priority={false}
        />
      </div>

      {/* TITLE */}
      <div className="flex items-center gap-2 mt-4">
        <CakeIcon className="w-5 h-5 text-yellow-200" />
        <h2 className="text-xl font-semibold">{title}</h2>
      </div>

      {/* DESCRIPTION */}
      <p className="text-sm mt-2 text-pink-100 leading-relaxed">
        {desc}
      </p>
    </article>
  );
}
