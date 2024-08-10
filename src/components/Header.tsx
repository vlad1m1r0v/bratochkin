import { useState } from "react";
import logo from "@/assets/logo.png";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="md:flex md:items-center md:gap-12">
            <a className="block" href="#">
              <span className="sr-only">Home</span>
              <img src={logo} className="h-8" alt="Home" />
            </a>
          </div>

          <div className="hidden md:block">
            <nav aria-label="Global">
              <ul className="flex items-center gap-6 text-sm">
                <li>
                  <a
                    className="text-gray-900 transition hover:text-red-500"
                    href="#"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    className="text-gray-900 transition hover:text-red-500"
                    href="#"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    className="text-gray-900 transition hover:text-red-500"
                    href="#"
                  >
                    History
                  </a>
                </li>
                <li>
                  <a
                    className="text-gray-900 transition hover:text-red-500"
                    href="#"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    className="text-gray-900 transition hover:text-red-500"
                    href="#"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    className="text-gray-900 transition hover:text-red-500"
                    href="#"
                  >
                    Blog
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <div className="block md:hidden">
              <button
                className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-red-500"
                onClick={toggleMenu}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div
          className={`md:hidden ${
            isMenuOpen ? "max-h-screen" : "max-h-0"
          } overflow-hidden transition-[max-height] duration-300`}
        >
          <nav>
            <ul className="flex flex-col items-center gap-6 text-sm py-4">
              <li>
                <a
                  className="text-gray-900 transition hover:text-red-500"
                  href="#"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  className="text-gray-900 transition hover:text-red-500"
                  href="#"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  className="text-gray-900 transition hover:text-red-500"
                  href="#"
                >
                  History
                </a>
              </li>
              <li>
                <a
                  className="text-gray-900 transition hover:text-red-500"
                  href="#"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  className="text-gray-900 transition hover:text-red-500"
                  href="#"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  className="text-gray-900 transition hover:text-red-500"
                  href="#"
                >
                  Blog
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};
