import Footer from "./components/Footer";
import Banner from "./components/general/Banner";
import "./globals.css";
import { bakbak_one } from "./utils/fonts";

export const metadata = {
  title: "Daniela Prado",
  description: "Welcome to Daniela Prado's portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${bakbak_one.className} font-serif bg-background w-screen overflow-x-hidden`}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
