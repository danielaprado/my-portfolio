import Banner from "./components/geral/Banner";
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
      </body>
    </html>
  );
}
