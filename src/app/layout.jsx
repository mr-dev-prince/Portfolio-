import "./globals.css";
import { Caveat, Poppins } from "next/font/google";

const caveat = Caveat({ subsets: ["latin"], variable: "--font-caveat" });
const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "Prince Chaurasia - Portfolio",
  description: "Portfolio of Prince Chaurasia",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${caveat.variable} ${poppins.variable} scroll-smooth`}
    >
      <body className="font-poppins bg-[#0b1c3a] text-white min-h-screen overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
