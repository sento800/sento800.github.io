import { Inter, Outfit } from "next/font/google";
import { Geist_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Nguyễn Đình Phú | Frontend Developer",
    template: "%s | Nguyễn Đình Phú",
  },
  description: "Portfolio của Nguyễn Đình Phú (Sento) - Frontend Developer chuyên thiết kế và xây dựng ứng dụng web trực quan, hiệu năng cao với React.js và Next.js.",
  keywords: ["Nguyễn Đình Phú", "Nguyen Dinh Phu", "Frontend Developer", "React", "Next.js", "Portfolio Nguyễn Đình Phú", "Web Developer", "Sento", "Lập trình viên Frontend"],
  authors: [{ name: "Nguyễn Đình Phú" }],
  creator: "Nguyễn Đình Phú",
  metadataBase: new URL('https://sento800.github.io'),
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: "https://sento800.github.io",
    title: "Nguyễn Đình Phú | Frontend Developer",
    description: "Portfolio của Nguyễn Đình Phú (Sento) - Frontend Developer chuyên thiết kế và xây dựng ứng dụng web trực quan, hiệu năng cao.",
    siteName: "Nguyễn Đình Phú Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nguyễn Đình Phú | Frontend Developer",
    description: "Portfolio của Nguyễn Đình Phú (Sento) - Frontend Developer chuyên thiết kế và xây dựng ứng dụng web trực quan, hiệu năng cao.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="mdl-js">
      <body
        className={`${inter.variable} ${outfit.variable} font-sans antialiased bg-background text-foreground relative`}
      >
        {/* Animated Mesh Background Orbs */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
          <div className="mesh-orb bg-blue-300 w-96 h-96 top-0 -left-10 mix-blend-multiply"></div>
          <div className="mesh-orb bg-purple-300 w-96 h-96 top-40 right-10 mix-blend-multiply animation-delay-2000"></div>
          <div className="mesh-orb bg-pink-300 w-96 h-96 -bottom-20 left-40 mix-blend-multiply animation-delay-4000"></div>
        </div>
        {children}
      </body>
    </html>
  );
}
