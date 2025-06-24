import Link from "next/link";

export default function Footer() {
  return (
    <div
      id="contact"
      className="relative h-[800px] "
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="fixed bottom-0 h-[800px] w-full">
        <Content />
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="bg-black py-8 px-12 h-full w-full flex flex-col justify-between">
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
    <div className="flex justify-between items-end text-white">
      <h1 className="text-[14vw] leading-[0.8] mt-10">Thanks You</h1>
      <p>©Copyright by Sento</p>
    </div>
  );
}

function Nav() {
  return (
    <div className="flex shrink-0 gap-20 text-stone-400">
      <div className="flex flex-col gap-2">
        <h3 className="mb-2 uppercase text-white">About</h3>
        <Link href="/#introduction">Home</Link>
        <Link href="/#project">Projects</Link>
        <Link href="/#about">About me</Link>
        <Link href="/contact">Contact</Link>
      </div>
      <div className="flex flex-col gap-2 ">
        <h3 className="mb-2 uppercase text-white">Contact</h3>
        <div className="flex gap-2 flex-col">
          <Link href="/">@Github</Link>
          <Link href="/">@Linkedin</Link>
          <Link href="/">@Facebook</Link>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="text-xl">
          <p className="text-white">Email For Work:</p>
          <p>nguyendinhphu800@gmail.com</p>
        </div>
        <div className="text-x">
          <p className="text-white">Zalo Message</p>
          <p>0917897358</p>
        </div>
      </div>
    </div>
  );
}
