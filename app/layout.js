import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata = {
  metadataBase: new URL("https://sento800.github.io"),
};

export default function RootLayout({ children }) {
  return (
    <html lang="vi" className="dark scroll-smooth" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${outfit.variable} font-sans antialiased bg-[#080c14] text-[#f8fafc] relative min-h-screen selection:bg-sky-400 selection:text-slate-950`}
        suppressHydrationWarning
      >
        {/* Background Grid Pattern & Ambient Glows */}
        <div className="fixed inset-0 bg-grid-pattern opacity-60 pointer-events-none -z-20" />

        <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
          <div className="ambient-glow-1 top-[-10%] left-[-10%]" />
          <div className="ambient-glow-2 top-[35%] right-[-10%]" />
          <div className="ambient-glow-3 bottom-[-10%] left-[20%]" />
        </div>

        {children}
      </body>
    </html>
  );
}
