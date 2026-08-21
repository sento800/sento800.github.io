import Link from "next/link";

export default function Footer() {
  return (
    <div
      id="contact"
      className="relative h-lvh "
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="fixed bottom-0 h-lvh w-full">
        <Content />
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="bg-foreground text-background pt-32 pb-8 px-12 h-full flex flex-col justify-between">
      <Section1 />
      <Section2 />
    </div>
  );
}

function Section1() {
  return (
    <div>
      <Nav />
    </div>
  );
}

function Section2() {
  return (
    <div className="flex justify-between items-end">
      <h1 className="text-[14vw] leading-[0.8] mt-10 font-bold">Thank You</h1>
      <p className="text-muted/60">©Copyright by Sento</p>
    </div>
  );
}

function Nav() {
  return (
    <div className="flex shrink-0 gap-20 text-muted-foreground flex-wrap">
      <div className="flex flex-col gap-2">
        <h3 className="mb-2 uppercase text-background font-bold">About</h3>
        <Link href="/#introduction" className="hover:text-background transition-colors">Home</Link>
        <Link href="/#project" className="hover:text-background transition-colors">Projects</Link>
        <Link href="/#about" className="hover:text-background transition-colors">About me</Link>
        <Link href="/contact" className="hover:text-background transition-colors">Contact</Link>
      </div>
      <div className="flex flex-col gap-2 ">
        <h3 className="mb-2 uppercase text-background font-bold">Contact</h3>
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
          <p className="text-background font-bold">Email For Work:</p>
          <p>nguyendinhphu800@gmail.com</p>
        </div>
        <div className="text-xl">
          <p className="text-background font-bold">Zalo Message</p>
          <p>0917897358</p>
        </div>
      </div>
    </div>
  );
}
