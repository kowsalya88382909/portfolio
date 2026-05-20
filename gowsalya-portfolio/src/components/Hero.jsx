import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaArrowDown } from "react-icons/fa";
import { personalInfo } from "../data/portfolioData";

const roles = [
  "Full Stack Developer",
  "React.js Developer",
  "React Native Developer",
  "Python Developer",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout;
    if (typing) {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
      } else {
        timeout = setTimeout(() => setTyping(false), 1800);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 45);
      } else {
        setRoleIndex((i) => (i + 1) % roles.length);
        setTyping(true);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, typing, roleIndex]);

  return (
    <section id="hero" className="hero-bg min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-700/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-700/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 py-24 flex flex-col-reverse lg:flex-row items-center gap-12">
        {/* Left Content */}
        <div className="flex-1 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-900/30 border border-purple-700/40 text-purple-300 text-sm font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Available for opportunities
          </div>

          <p className="text-slate-400 text-lg mb-2">Hello, I'm</p>
          <h1 className="text-5xl lg:text-6xl font-extrabold mb-4">
            <span className="gradient-text">{personalInfo.name}</span>
          </h1>

          <div className="flex items-center justify-center lg:justify-start gap-2 mb-6 h-10">
            <span className="text-xl lg:text-2xl text-slate-300 font-medium">I'm a </span>
            <span className="text-xl lg:text-2xl font-bold text-purple-400">
              {displayed}
              <span className="animate-pulse">|</span>
            </span>
          </div>

          <p className="text-slate-400 text-base lg:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8">
            {personalInfo.tagline}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-10">
            <Link
              to="projects"
              smooth={true}
              offset={-70}
              duration={500}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-purple-500 text-white font-semibold cursor-pointer hover:from-purple-500 hover:to-purple-400 transition-all shadow-lg shadow-purple-900/40 flex items-center gap-2"
            >
              View Projects
            </Link>
            <Link
              to="contact"
              smooth={true}
              offset={-70}
              duration={500}
              className="px-6 py-3 rounded-xl border border-purple-600/50 text-purple-300 font-semibold cursor-pointer hover:bg-purple-900/30 transition-all flex items-center gap-2"
            >
              Contact Me
            </Link>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4 justify-center lg:justify-start">
            <a href={personalInfo.linkedin} target="_blank" rel="noreferrer"
              className="w-10 h-10 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-purple-400 hover:border-purple-600 transition-all">
              <FaLinkedin size={18} />
            </a>
            <a href={personalInfo.github} target="_blank" rel="noreferrer"
              className="w-10 h-10 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-purple-400 hover:border-purple-600 transition-all">
              <FaGithub size={18} />
            </a>
            <a href={`mailto:${personalInfo.email}`}
              className="w-10 h-10 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-purple-400 hover:border-purple-600 transition-all">
              <FaEnvelope size={18} />
            </a>
            <a href={`tel:${personalInfo.phone}`}
              className="w-10 h-10 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-purple-400 hover:border-purple-600 transition-all">
              <FaPhone size={16} />
            </a>
          </div>
        </div>

        {/* Right — Avatar Card */}
        <div className="flex-shrink-0 flex flex-col items-center gap-6">
          <div className="relative">
            <div className="w-56 h-56 lg:w-64 lg:h-64 rounded-2xl bg-gradient-to-br from-purple-600 via-purple-700 to-blue-600 p-1 shadow-2xl shadow-purple-900/50">
              <div className="w-full h-full rounded-2xl bg-[#1a1a2e] flex items-center justify-center">
                <span className="text-8xl select-none">👩‍💻</span>
              </div>
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-4 -right-4 bg-[#1a1a2e] border border-purple-700/50 rounded-xl px-3 py-2 shadow-lg">
              <p className="text-xs text-slate-400">CGPA</p>
              <p className="text-lg font-bold gradient-text">8.4/10</p>
            </div>
            <div className="absolute -top-4 -left-4 bg-[#1a1a2e] border border-purple-700/50 rounded-xl px-3 py-2 shadow-lg">
              <p className="text-xs text-slate-400">Experience</p>
              <p className="text-lg font-bold gradient-text">5 Months</p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-3 w-full max-w-xs">
            {personalInfo.highlights.map((h) => (
              <div key={h.label} className="bg-[#1a1a2e] border border-purple-900/30 rounded-xl p-3 text-center card-glow">
                <p className="text-xl font-bold gradient-text">{h.value}</p>
                <p className="text-xs text-slate-400 mt-1">{h.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <Link
        to="about"
        smooth={true}
        offset={-70}
        duration={500}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-500 hover:text-purple-400 cursor-pointer transition-colors"
      >
        <span className="text-xs">Scroll down</span>
        <FaArrowDown className="animate-bounce" />
      </Link>
    </section>
  );
}
