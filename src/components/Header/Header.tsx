import { useEffect, useState } from "react";
import logo from "/lucid-logo.svg";
import { motion } from "framer-motion";
import { Announcement } from "./Announcement";

interface Section {
  name: string;
  href: string;
}

const sections: Section[] = [
  { name: "About Us", href: "#about-us" },
  { name: "Stats", href: "#stats" },
  { name: "Clients", href: "#clients" },
  { name: "Partners", href: "#partners" },
  { name: "Services", href: "#services" },
  { name: "Contacts", href: "#contacts" },
];

export const Header = () => {
  const [isHidden, setHidden] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const openHeader = () => {
    setHidden(false);
  };

  const closeHeader = () => {
    setHidden(true);
  };

  useEffect(() => {
    const handleWheel = (event: WheelEvent) => {
      closeMenu();

      const delta = event.deltaY;

      if (delta > 0) {
        closeHeader();
      } else {
        openHeader();
      }
    };

    let touchStartY = 0;

    const handleTouchStart = (event: TouchEvent) => {
      touchStartY = event.touches[0].clientY;
    };

    const handleTouchMove = (event: TouchEvent) => {
      const touchCurrentY = event.touches[0].clientY;
      const delta = touchStartY - touchCurrentY;

      closeMenu();

      if (delta > 0) {
        closeHeader();
      } else {
        openHeader();
      }

      touchStartY = touchCurrentY;
    };

    const handleScrollEnd = () => {
      closeMenu();
    };

    window.addEventListener("wheel", handleWheel);
    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchmove", handleTouchMove);
    window.addEventListener("scrollend", handleScrollEnd);

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("scrollend", handleScrollEnd);
    };
  }, []);

  return (
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      initial="hidden"
      animate={isHidden ? "hidden" : "visible"}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="sticky top-0 bg-red-600 z-20 shadow-lg"
    >
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="md:flex md:items-center md:gap-12">
            <a className="block" href="/">
              <span className="sr-only">Home</span>
              <img src={logo} className="h-8" alt="Home" />
            </a>
          </div>

          <div className="hidden md:block">
            <nav aria-label="Global">
              <ul className="flex items-center gap-6">
                {sections.map((section, index) => (
                  <li key={index}>
                    <a
                      className="text-neutral-50 transition hover:text-red-100"
                      href={section.href}
                      onClick={closeHeader}
                    >
                      {section.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <div className="block md:hidden">
              <button
                className="rounded p-2 text-neutral-50 transition hover:text-red-100"
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
            <ul className="flex flex-col items-center gap-6 py-4">
              {sections.map((section, index) => (
                <li key={index}>
                  <a
                    className="text-neutral-50 transition hover:text-red-100"
                    href={section.href}
                    onClick={closeHeader}
                  >
                    {section.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
      <Announcement />
    </motion.header>
  );
};
