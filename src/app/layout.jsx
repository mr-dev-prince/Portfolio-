import "./globals.css";
import { Caveat, Poppins } from "next/font/google";
import BlurBottom from "../components/blur-bottom";

const caveat = Caveat({ subsets: ["latin"], variable: "--font-caveat" });
const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "Prince Chaurasia",
  description: "The Developer's Space",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${caveat.variable} ${poppins.variable} scroll-smooth`}
    >
      <body className="relative font-poppins text-white min-h-screen overflow-x-hidden">
        {children}
        <BlurBottom/>
      </body>
    </html>
  );
}
