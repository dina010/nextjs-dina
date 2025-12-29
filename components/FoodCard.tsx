// components/FoodCard.tsx

type FoodCardProps = {
  title: string;
  img: string;
  desc: string;
};

export default function FoodCard({ title, img, desc }: FoodCardProps) {
  return (
    <div className="bg-pink-500/30 rounded-2xl shadow-lg hover:shadow-pink-300/50 transition duration-300 transform hover:-translate-y-2 p-6 flex flex-col items-center border border-pink-200">
      <img
        src={img}
        alt={title}
        className="rounded-lg object-cover w-[300px] h-[200px] shadow-pink-200"
      />
      <h2 className="mt-4 text-xl font-bold text-pink-50 drop-shadow-md">
        {title}
      </h2>
      <p className="text-pink-100 text-sm text-center">
        {desc}
      </p>
    </div>
  );
}
