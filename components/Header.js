"use client";
import Link from "next/link";
import Button from "./Button";
import Logo from "./Logo";
import NavBar from "./NavBar";
import { useState } from "react";

function Header() {
  const [openNavMobile, setOpenNavMobile] = useState(false);
  function handleClick() {
    setOpenNavMobile((open) => !open);
  }
  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl h-16 lg:h-20 flex items-center justify-between">
        <Logo />
        <NavBar open={openNavMobile} />
        <div className="flex items-center gap-4">
          <Link href="/" className="hidden lg:block">
            <Button style="primary">
              Download My CV
              <span className="ml-2 inline-block">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.5 11.5V12.5C16.5 13.9001 16.5 14.6002 16.2275 15.135C15.9878 15.6054 15.6054 15.9878 15.135 16.2275C14.6002 16.5 13.9001 16.5 12.5 16.5H5.5C4.09987 16.5 3.3998 16.5 2.86502 16.2275C2.39462 15.9878 2.01217 15.6054 1.77248 15.135C1.5 14.6002 1.5 13.9001 1.5 12.5V11.5M13.1667 7.33333L9 11.5M9 11.5L4.83333 7.33333M9 11.5V1.5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </Button>
          </Link>
          <button 
            className="lg:hidden p-2 text-foreground"
            onClick={handleClick}
            aria-label="Toggle menu"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {openNavMobile ? (
                <path d="M18 6 6 18M6 6l12 12" />
              ) : (
                <path d="M3 12h18M3 6h18M3 18h18" />
              )}
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
