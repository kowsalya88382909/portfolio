import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes, FaDownload } from "react-icons/fa";
import { navLinks } from "../data/portfolioData";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0f0f1a]/95 backdrop-blur-md shadow-lg shadow-purple-900/20 border-b border-purple-900/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <span className="font-bold text-lg gradient-text">Gowsalya M</span>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="nav-link text-sm text-slate-300 hover:text-purple-400 cursor-pointer transition-colors font-medium"
                activeClass="text-purple-400"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA — Download Resume */}
        <a
          href="/Gowsalya_Resume.html"
          target="_blank"
          rel="noreferrer"
          className="hidden md:flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-purple-500 text-white text-sm font-semibold hover:from-purple-500 hover:to-purple-400 transition-all shadow-lg shadow-purple-900/30"
        >
          <FaDownload size={12} />
          Resume
        </a>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-slate-300 hover:text-purple-400 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0f0f1a]/98 backdrop-blur-md border-t border-purple-900/20 px-6 py-4">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="text-slate-300 hover:text-purple-400 cursor-pointer transition-colors font-medium block py-1"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href="/Gowsalya_Resume.html"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-purple-500 text-white text-sm font-semibold mt-2"
              >
                <FaDownload size={12} />
                Download Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
