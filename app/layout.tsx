import "./globals.css";
import MenuButton from "@/components/MenuButton";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className="relative">
        {/* MENU GLOBAL */}
        <MenuButton />

        {/* SEMUA HALAMAN */}
        {children}
      </body>
    </html>
  );
}
