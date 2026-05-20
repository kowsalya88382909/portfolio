import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaLinkedin, FaGithub } from "react-icons/fa";
import { personalInfo, languages } from "../data/portfolioData";

export default function About() {
  return (
    <section id="about" className="py-20 bg-[#0f0f1a]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-14">
          <p className="text-purple-400 font-semibold text-sm uppercase tracking-widest mb-2">Who I Am</p>
          <h2 className="text-4xl font-extrabold text-white mb-4">About Me</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full mx-auto" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left — Bio */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">
              Bridging <span className="gradient-text">Frontend & Backend</span>
            </h3>
            <p className="text-purple-400 font-medium mb-6">Aspiring Full Stack Developer</p>

            {personalInfo.about.split("\n\n").map((para, i) => (
              <p key={i} className="text-slate-400 leading-relaxed mb-4">
                {para}
              </p>
            ))}

            {/* What I bring */}
            <div className="mt-6 space-y-3">
              {[
                { icon: "🎨", text: "Responsive UI with React.js & Tailwind CSS" },
                { icon: "📱", text: "Mobile apps with React Native" },
                { icon: "⚙️", text: "Backend integration with .NET & Flask" },
                { icon: "🔗", text: "REST API design & integration" },
                { icon: "🗄️", text: "Database management with PostgreSQL & MySQL" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-3">
                  <span className="text-lg">{item.icon}</span>
                  <span className="text-slate-300 text-sm">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Info Cards */}
          <div className="space-y-5">
            {/* Contact Info */}
            <div className="bg-[#1a1a2e] border border-purple-900/30 rounded-2xl p-6 card-glow">
              <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-purple-500" />
                Contact Information
              </h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-slate-400 text-sm">
                  <FaMapMarkerAlt className="text-purple-400 flex-shrink-0" />
                  <span>{personalInfo.location}</span>
                </div>
                <div className="flex items-center gap-3 text-slate-400 text-sm">
                  <FaEnvelope className="text-purple-400 flex-shrink-0" />
                  <a href={`mailto:${personalInfo.email}`} className="hover:text-purple-400 transition-colors break-all">
                    {personalInfo.email}
                  </a>
                </div>
                <div className="flex items-center gap-3 text-slate-400 text-sm">
                  <FaPhone className="text-purple-400 flex-shrink-0" />
                  <a href={`tel:${personalInfo.phone}`} className="hover:text-purple-400 transition-colors">
                    {personalInfo.phone}
                  </a>
                </div>
                <div className="flex items-center gap-3 text-slate-400 text-sm">
                  <FaLinkedin className="text-purple-400 flex-shrink-0" />
                  <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="hover:text-purple-400 transition-colors">
                    linkedin.com/in/kowsalya09
                  </a>
                </div>
                <div className="flex items-center gap-3 text-slate-400 text-sm">
                  <FaGithub className="text-purple-400 flex-shrink-0" />
                  <a href={personalInfo.github} target="_blank" rel="noreferrer" className="hover:text-purple-400 transition-colors">
                    github.com/kowsalya
                  </a>
                </div>
              </div>
            </div>

            {/* Languages */}
            <div className="bg-[#1a1a2e] border border-purple-900/30 rounded-2xl p-6 card-glow">
              <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-purple-500" />
                Languages
              </h4>
              <div className="flex gap-3">
                {languages.map((lang) => (
                  <span key={lang} className="tag">{lang}</span>
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              {personalInfo.highlights.map((h) => (
                <div key={h.label} className="bg-[#1a1a2e] border border-purple-900/30 rounded-2xl p-5 text-center card-glow">
                  <p className="text-2xl font-extrabold gradient-text">{h.value}</p>
                  <p className="text-slate-400 text-xs mt-1">{h.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
