import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import logo from "/logo.svg";

interface Section {
  name: string;
  href: string;
}

const HEADER_HEIGHT = 64;

const sections: Section[] = [
  { name: "About Us", href: "#about-us" },
  { name: "Clients", href: "#clients" },
  { name: "Partners", href: "#partners" },
  { name: "Services", href: "#services" },
  { name: "Contacts", href: "#contacts" },
];

export const Header = () => {
  const [isHidden, setHidden] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();

    if (latest > previous! && latest > HEADER_HEIGHT) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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
                  >
                    {section.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </motion.header>
  );
};
