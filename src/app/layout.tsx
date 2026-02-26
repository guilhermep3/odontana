import type { Metadata } from "next";
import "./globals.css";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export const metadata: Metadata = {
  title: "Odontana",
  description: "Clínica de odontologia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={``}>
        {children}
      </body>
    </html>
  );
}
