import { FaGithub, FaLinkedin, FaEnvelope, FaHeart, FaArrowUp } from "react-icons/fa";
import { Link } from "react-scroll";
import { personalInfo, navLinks } from "../data/portfolioData";

export default function Footer() {
  return (
    <footer className="bg-[#0a0a14] border-t border-purple-900/20 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-extrabold gradient-text mb-3">Gowsalya M</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              Aspiring Full Stack Developer passionate about building responsive, real-world web and mobile applications.
            </p>
            <div className="flex gap-3">
              <a href={personalInfo.linkedin} target="_blank" rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-purple-400 hover:border-purple-600 transition-all">
                <FaLinkedin size={15} />
              </a>
              <a href={personalInfo.github} target="_blank" rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-purple-400 hover:border-purple-600 transition-all">
                <FaGithub size={15} />
              </a>
              <a href={`mailto:${personalInfo.email}`}
                className="w-9 h-9 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-purple-400 hover:border-purple-600 transition-all">
                <FaEnvelope size={15} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="text-slate-400 text-sm hover:text-purple-400 cursor-pointer transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-slate-400 text-sm">
              <p>{personalInfo.location}</p>
              <a href={`mailto:${personalInfo.email}`} className="hover:text-purple-400 transition-colors block break-all">
                {personalInfo.email}
              </a>
              <a href={`tel:${personalInfo.phone}`} className="hover:text-purple-400 transition-colors block">
                {personalInfo.phone}
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-purple-900/20 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm flex items-center gap-1">
            Made with <FaHeart className="text-red-500 text-xs" /> React + Tailwind CSS
          </p>
          <p className="text-slate-500 text-sm">
            © 2026 Designed & Developed by Gowsalya M
          </p>
          <Link
            to="hero"
            smooth={true}
            duration={500}
            className="w-9 h-9 rounded-lg bg-purple-900/40 border border-purple-700/40 flex items-center justify-center text-purple-400 hover:bg-purple-700/40 cursor-pointer transition-all"
          >
            <FaArrowUp size={14} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
