export default function Home() {
  return (
    <div className="font-sans min-h-screen flex flex-col justify-between bg-gradient-to-br from-pink-200 via-pink-400 to-pink-600 text-pink-100">
      
      {/* Main Content */}
      <main className="flex flex-col gap-10 items-center sm:items-start p-10">
        
        {/* Judul */}
        <h1 className="text-4xl font-extrabold tracking-tight drop-shadow-lg text-pink-100">
          🍰 Galeri Makanan Manis ✨
        </h1>

        {/* Deskripsi */}
        <p className="text-pink-50 text-center sm:text-left max-w-2xl leading-relaxed drop-shadow-sm">
          Selamat datang di <span className="font-semibold text-yellow-100">galeri makanan Maulidina</span>.  
          Semua makanan manis dengan <span className="text-yellow-200">warna cantik</span> dan rasa yang bikin bahagia 💖.
        </p>

        {/* Galeri Makanan */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-6">
          
          {/* === Makanan 1 === */}
          <div className="bg-pink-500/30 rounded-2xl shadow-lg hover:shadow-pink-300/50 transition duration-300 transform hover:-translate-y-2 p-6 flex flex-col items-center border border-pink-200">
            <img
              src="https://tse2.mm.bing.net/th/id/OIP.lBv8YtsfqVpMCZ9wgMmI7wHaHa?pid=Api&P=0&h=220"
              alt="Brownies Cokelat"
              className="rounded-lg object-cover w-[300px] h-[200px] shadow-pink-200"
            />
            <h2 className="mt-4 text-xl font-bold text-pink-50 drop-shadow-md">Brownies Cokelat</h2>
            <p className="text-pink-100 text-sm text-center">
              🍫 Brownies lembut dengan cokelat premium yang lumer di mulut.
            </p>
          </div>

          {/* === Makanan 2 === */}
          <div className="bg-pink-500/30 rounded-2xl shadow-lg hover:shadow-pink-300/50 transition duration-300 transform hover:-translate-y-2 p-6 flex flex-col items-center border border-pink-200">
            <img
              src="https://tse1.mm.bing.net/th/id/OIP.Z4rW95uEIg5MK-q0LLfr5AHaEJ?pid=Api&P=0&h=220"
              alt="Donat Stroberi"
              className="rounded-lg object-cover w-[300px] h-[200px] shadow-pink-200"
            />
            <h2 className="mt-4 text-xl font-bold text-pink-50 drop-shadow-md">Donat Stroberi</h2>
            <p className="text-pink-100 text-sm text-center">
              🍩 Donat empuk dengan topping stroberi merah muda yang manis dan cantik!
            </p>
          </div>

        </div>
      </main>

      {/* Footer */}
      <footer className="bg-pink-700/40 text-pink-50 py-4 flex justify-center border-t border-pink-300">
        <p className="text-sm">
          © 2025 <span className="font-semibold text-yellow-200">Galeri Makanan Maulidina</span> 🍰 Semua hak dilindungi.
        </p>
      </footer>
    </div>
  );
}