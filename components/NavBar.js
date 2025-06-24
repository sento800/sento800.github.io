import Link from "next/link";

function NavBar() {
  return (
    <div className="py-3">
      <ul className="text-2xl gap-6 font-semibold flex">
        <li className="cursor-pointer">
          <Link href="/#about">About me</Link>
        </li>
        <li className="cursor-pointer">
          <Link href="/#skill">Skills</Link>
        </li>
        <li className="cursor-pointer">
          <Link href="/#project">Projects</Link>
        </li>
        <li className="cursor-pointer">
          <Link href="/#contact">Contact me</Link>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
