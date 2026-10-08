export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const lang = resolvedParams?.lang || 'vi';
  const isEn = lang === 'en';

  const title = isEn
    ? "Nguyen Dinh Phu (Sento) | Freelance Frontend Developer & UI Specialist"
    : "Nguyễn Đình Phú (Sento) | Freelance Frontend Developer & UI Specialist";

  const description = isEn
    ? "Portfolio of Nguyen Dinh Phu (Sento) - Freelance Frontend Developer specializing in high-performance web applications, Landing Pages, and SaaS with React, Next.js, and Tailwind CSS."
    : "Portfolio của Nguyễn Đình Phú (Sento) - Lập trình viên Frontend Freelance chuyên xây dựng Landing Page, SaaS Web App và giao diện người dùng tốc độ cao với React, Next.js, Tailwind CSS.";

  const keywords = isEn
    ? [
        "Nguyen Dinh Phu",
        "Sento",
        "Freelance Frontend Developer",
        "React.js Developer",
        "Next.js Developer Freelance",
        "Hire Frontend Developer",
        "Figma to Code React",
        "Conversion Landing Page Developer",
        "UI UX Specialist"
      ]
    : [
        "Nguyễn Đình Phú", 
        "Nguyen Dinh Phu", 
        "Sento",
        "Freelance Frontend Developer", 
        "React.js Developer Việt Nam", 
        "Next.js Developer Freelance", 
        "Thuê lập trình viên Frontend",
        "Figma to Code React",
        "Thiết kế Landing Page chuẩn SEO",
        "Web Developer Sài Gòn"
      ];

  return {
    title: {
      default: title,
      template: `%s | ${isEn ? "Nguyen Dinh Phu" : "Nguyễn Đình Phú"}`,
    },
    description,
    keywords,
    authors: [{ name: "Nguyễn Đình Phú", url: "https://sento800.github.io" }],
    creator: "Nguyễn Đình Phú",
    publisher: "Nguyễn Đình Phú",
    alternates: {
      canonical: `https://sento800.github.io/${lang}`,
      languages: {
        'vi-VN': 'https://sento800.github.io/vi',
        'en-US': 'https://sento800.github.io/en',
      },
    },
    metadataBase: new URL('https://sento800.github.io'),
    openGraph: {
      type: "profile",
      firstName: isEn ? "Phu" : "Phú",
      lastName: isEn ? "Nguyen" : "Nguyễn Đình",
      username: "sento800",
      gender: "male",
      locale: isEn ? "en_US" : "vi_VN",
      url: `https://sento800.github.io/${lang}`,
      title,
      description,
      siteName: isEn ? "Nguyen Dinh Phu Portfolio" : "Nguyễn Đình Phú Portfolio",
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
      title,
      description,
      images: ["/img/about.jpg"],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'vi' }];
}

export default async function LangLayout({ children, params }) {
  const resolvedParams = await params;
  const lang = resolvedParams?.lang || 'vi';

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Nguyễn Đình Phú",
    alternateName: "Sento",
    url: "https://sento800.github.io",
    image: "https://sento800.github.io/img/about.jpg",
    jobTitle: "Freelance Frontend Developer",
    knowsAbout: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "UI/UX", "SEO Optimization"],
    sameAs: [
      "https://github.com/sento800",
      "https://www.linkedin.com/in/ph%C3%BA-nguy%E1%BB%85n-%C4%91%C3%ACnh-807749351/",
      "https://www.facebook.com/phuhhhh5/"
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}
