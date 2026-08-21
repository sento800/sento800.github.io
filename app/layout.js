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
    default: "Nguyễn Đình Phú | Chuyên gia Lập trình Frontend",
    template: "%s | Nguyễn Đình Phú (Sento)",
  },
  description: "Khám phá Portfolio của Nguyễn Đình Phú (Sento) - Lập trình viên Frontend với đam mê kiến tạo trải nghiệm người dùng đột phá. Chuyên sâu React.js, Next.js, và UI/UX Design.",
  keywords: [
    "Nguyễn Đình Phú", 
    "Nguyen Dinh Phu", 
    "Sento",
    "Frontend Developer", 
    "React.js Developer Việt Nam", 
    "Chuyên gia Next.js", 
    "Web Developer Sài Gòn", 
    "Lập trình viên Frontend",
    "Thiết kế UI/UX",
    "Portfolio Lập trình viên"
  ],
  authors: [{ name: "Nguyễn Đình Phú", url: "https://sento800.github.io" }],
  creator: "Nguyễn Đình Phú",
  publisher: "Nguyễn Đình Phú",
  alternates: {
    canonical: "https://sento800.github.io",
  },
  metadataBase: new URL('https://sento800.github.io'),
  openGraph: {
    type: "profile",
    firstName: "Phú",
    lastName: "Nguyễn Đình",
    username: "sento800",
    gender: "male",
    locale: "vi_VN",
    url: "https://sento800.github.io",
    title: "Nguyễn Đình Phú | Chuyên gia Lập trình Frontend",
    description: "Khám phá Portfolio của Nguyễn Đình Phú (Sento). Cùng tôi kiến tạo những trải nghiệm người dùng đột phá với React.js và Next.js.",
    siteName: "Nguyễn Đình Phú Portfolio",
    images: [
      {
        url: "/img/about.jpg",
        width: 1200,
        height: 630,
        alt: "Nguyễn Đình Phú - Frontend Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nguyễn Đình Phú | Chuyên gia Lập trình Frontend",
    description: "Khám phá Portfolio của Nguyễn Đình Phú (Sento). Cùng tôi kiến tạo những trải nghiệm người dùng đột phá với React.js và Next.js.",
    images: ["/img/about.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
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
