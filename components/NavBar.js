import Link from "next/link";

function NavBar({ open }) {
  console.log(open);

  return (
    <div
      className={`py-3 transition-all max-lg:p-0 max-lg:absolute max-lg:top-16 max-lg:left-0 max-lg:right-0 ${
        open
          ? "max-lg:translate-x-0 max-lg:opacity-100 max-lg:block"
          : "max-lg:translate-x-[100%] max-lg:opacity-0 max-lg:hidden"
      } `}
    >
      <ul className="text-2xl gap-6 font-semibold flex max-lg:flex-col max-lg:bg-white max-lg:w-full max-lg:text-center items-center">
        <li className="cursor-pointer p-4">
          <Link href="/#about">About me</Link>
        </li>
        <li className="cursor-pointer px-4 py-2">
          <Link href="/#skill">Skills</Link>
        </li>
        <li className="cursor-pointer px-4 py-2">
          <Link href="/#project">Projects</Link>
        </li>
        <li className="cursor-pointer px-4 py-2">
          <Link href="/#contact">Contact me</Link>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
