import Link from "next/link";

function NavBar({ open }) {
  return (
    <div
      className={`transition-all duration-300 max-lg:absolute max-lg:top-[72px] max-lg:left-0 max-lg:right-0 max-lg:border-b max-lg:border-border max-lg:glass ${
        open
          ? "max-lg:translate-y-0 max-lg:opacity-100 max-lg:visible"
          : "max-lg:-translate-y-4 max-lg:opacity-0 max-lg:invisible"
      } lg:!visible lg:!opacity-100 lg:!translate-y-0`}
    >
      <ul className="text-base lg:text-sm font-medium flex max-lg:flex-col lg:flex-row max-lg:w-full lg:items-center gap-1 lg:gap-6 max-lg:p-4">
        <li>
          <Link href="/#about" className="block px-4 py-3 lg:p-0 text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-white/5 lg:hover:bg-transparent">About me</Link>
        </li>
        <li>
          <Link href="/#skill" className="block px-4 py-3 lg:p-0 text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-white/5 lg:hover:bg-transparent">Skills</Link>
        </li>
        <li>
          <Link href="/#project" className="block px-4 py-3 lg:p-0 text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-white/5 lg:hover:bg-transparent">Projects</Link>
        </li>
        <li>
          <Link href="/#contact" className="block px-4 py-3 lg:p-0 text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-white/5 lg:hover:bg-transparent">Contact me</Link>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
