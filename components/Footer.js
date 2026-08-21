import Link from "next/link";

export default function Footer({ dict, lang }) {
  return (
    <div
      id="contact"
      className="relative h-lvh "
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="fixed bottom-0 h-lvh w-full">
        <Content dict={dict} lang={lang} />
      </div>
    </div>
  );
}

function Content({ dict, lang }) {
  return (
    <div className="bg-foreground text-background pt-32 pb-8 px-12 h-full flex flex-col justify-between">
      <Section1 dict={dict} lang={lang} />
      <Section2 dict={dict} />
    </div>
  );
}

function Section1({ dict, lang }) {
  return (
    <div>
      <Nav dict={dict} lang={lang} />
    </div>
  );
}

function Section2({ dict }) {
  return (
    <div className="flex justify-between items-end">
      <h1 className="text-[14vw] leading-[0.8] mt-10 font-bold">{dict?.footer?.thank_you || "Thank You"}</h1>
      <p className="text-muted/60">{dict?.footer?.copyright || "©Copyright by Sento"}</p>
    </div>
  );
}

function Nav({ dict, lang }) {
  return (
    <div className="flex shrink-0 gap-20 text-muted-foreground flex-wrap">
      <div className="flex flex-col gap-2">
        <h3 className="mb-2 uppercase text-background font-bold">{dict?.footer?.about || "About"}</h3>
        <Link href={`/${lang || 'vi'}#introduction`} className="hover:text-background transition-colors">{dict?.footer?.home || "Home"}</Link>
        <Link href={`/${lang || 'vi'}#project`} className="hover:text-background transition-colors">{dict?.nav?.projects || "Projects"}</Link>
        <Link href={`/${lang || 'vi'}#about`} className="hover:text-background transition-colors">{dict?.nav?.about || "About me"}</Link>
        <Link href={`/${lang || 'vi'}#contact`} className="hover:text-background transition-colors">{dict?.footer?.contact || "Contact"}</Link>
      </div>
      <div className="flex flex-col gap-2 ">
        <h3 className="mb-2 uppercase text-background font-bold">{dict?.footer?.contact || "Contact"}</h3>
        <div className="flex gap-2 flex-col">
          <Link href="https://github.com/sento800" className="hover:text-background transition-colors">@Github</Link>
          <Link href="https://www.linkedin.com/in/ph%C3%BA-nguy%E1%BB%85n-%C4%91%C3%ACnh-807749351/" className="hover:text-background transition-colors">
            @Linkedin
          </Link>
          <Link href="https://www.facebook.com/" className="hover:text-background transition-colors">@Facebook</Link>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="text-xl">
          <p className="text-background font-bold">{dict?.footer?.email_label || "Email For Work:"}</p>
          <p>nguyendinhphu800@gmail.com</p>
        </div>
        <div className="text-xl">
          <p className="text-background font-bold">{dict?.footer?.zalo_label || "Zalo Message"}</p>
          <p>0917897358</p>
        </div>
      </div>
    </div>
  );
}
