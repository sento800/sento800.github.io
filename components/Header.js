"use client";
import Link from "next/link";
import Button from "./Button";
import Logo from "./Logo";
import NavBar from "./NavBar";
import { useEffect, useState } from "react";

function Header() {
  const [openNavMobile, setOpenNavMobile] = useState(false);
  function handleClick() {
    setOpenNavMobile((open) => !open);
  }
  return (
    <div className="my-6 mx-28 flex justify-between max-xl:px-4 max-xl:py-4 max-xl:m-0 max-xl:relative max-xl:z-50  max-xl:w-full max-xl:bg-white">
      <Logo />
      <NavBar open={openNavMobile} />
      <div className="max-xl:flex max-xl:gap-4 max-xl:flex-row max-xl:items-center">
        <Link className="" href="/">
          <Button style="primary" className="max-xl:hidden">
            Download My CV
            <span className="ml-2">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.5 11.5V12.5C16.5 13.9001 16.5 14.6002 16.2275 15.135C15.9878 15.6054 15.6054 15.9878 15.135 16.2275C14.6002 16.5 13.9001 16.5 12.5 16.5H5.5C4.09987 16.5 3.3998 16.5 2.86502 16.2275C2.39462 15.9878 2.01217 15.6054 1.77248 15.135C1.5 14.6002 1.5 13.9001 1.5 12.5V11.5M13.1667 7.33333L9 11.5M9 11.5L4.83333 7.33333M9 11.5V1.5"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </Button>
        </Link>
        <div className="hidden max-xl:block">
          <Button style="mobile" onClick={handleClick}>
            <svg
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="36" height="36" fill="white" />
              <path
                d="M4.5 27V24H31.5V27H4.5ZM4.5 19.5V16.5H31.5V19.5H4.5ZM4.5 12V9H31.5V12H4.5Z"
                fill="black"
              />
            </svg>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Header;
