import { FaGraduationCap, FaMapMarkerAlt, FaCalendarAlt, FaStar, FaCertificate } from "react-icons/fa";
import { education, certifications } from "../data/portfolioData";

export default function Education() {
  return (
    <section id="education" className="py-20 bg-[#0f0f1a]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-purple-400 font-semibold text-sm uppercase tracking-widest mb-2">Academic Background</p>
          <h2 className="text-4xl font-extrabold text-white mb-4">Education & Certifications</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full mx-auto" />
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Education */}
          <div>
            <h3 className="text-white font-bold text-xl mb-6 flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center">
                <FaGraduationCap className="text-white text-sm" />
              </div>
              Education
            </h3>

            {education.map((edu, i) => (
              <div key={i} className="bg-[#1a1a2e] border border-purple-900/30 rounded-2xl p-6 card-glow">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-700/40 to-blue-700/40 border border-purple-700/30 flex items-center justify-center text-2xl flex-shrink-0">
                    🎓
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-base leading-snug">{edu.degree}</h4>
                    <p className="text-purple-400 font-semibold text-sm mt-1">{edu.institution}</p>
                    <p className="text-slate-500 text-xs">{edu.affiliation}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 text-slate-400 text-sm mb-4">
                  <span className="flex items-center gap-1">
                    <FaCalendarAlt className="text-purple-500 text-xs" />
                    {edu.period}
                  </span>
                  <span className="flex items-center gap-1">
                    <FaMapMarkerAlt className="text-purple-500 text-xs" />
                    {edu.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <FaStar className="text-yellow-500 text-xs" />
                    CGPA: {edu.cgpa}
                  </span>
                </div>

                <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-blue-900/30 border border-blue-700/30 text-blue-400 text-xs font-semibold mb-5">
                  📚 {edu.status}
                </div>

                {/* Coursework */}
                <div className="mb-4">
                  <h5 className="text-white font-semibold text-sm mb-2 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                    Key Coursework
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {edu.coursework.map((c) => (
                      <span key={c} className="tag">{c}</span>
                    ))}
                  </div>
                </div>

                {/* Achievements */}
                <div>
                  <h5 className="text-white font-semibold text-sm mb-2 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                    Achievements
                  </h5>
                  <ul className="space-y-1">
                    {edu.achievements.map((a, j) => (
                      <li key={j} className="flex items-start gap-2 text-slate-400 text-xs">
                        <span className="text-green-400 mt-0.5 flex-shrink-0">✓</span>
                        {a}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-white font-bold text-xl mb-6 flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center">
                <FaCertificate className="text-white text-sm" />
              </div>
              Certifications
            </h3>

            <div className="space-y-4">
              {certifications.map((cert, i) => (
                <div key={i} className="bg-[#1a1a2e] border border-purple-900/30 rounded-2xl p-5 card-glow">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-700/40 to-blue-700/40 border border-purple-700/30 flex items-center justify-center text-lg flex-shrink-0">
                      🏆
                    </div>
                    <div className="flex-1">
                      <h4 className="text-white font-bold text-sm">{cert.title}</h4>
                      <p className="text-purple-400 text-xs mt-0.5">{cert.issuer}</p>
                      <p className="text-slate-500 text-xs mt-0.5">📅 {cert.year}</p>
                      <div className="flex flex-wrap gap-2 mt-3">
                        {cert.tags.map((tag) => (
                          <span key={tag} className="tag">{tag}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Continuous Learning */}
            <div className="mt-6 bg-gradient-to-r from-purple-900/30 to-blue-900/20 border border-purple-700/30 rounded-2xl p-6">
              <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                🚀 Continuous Learning
              </h4>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <p className="text-2xl font-extrabold gradient-text">3</p>
                  <p className="text-slate-400 text-xs mt-1">Certifications</p>
                </div>
                <div>
                  <p className="text-2xl font-extrabold gradient-text">100%</p>
                  <p className="text-slate-400 text-xs mt-1">Verified</p>
                </div>
              </div>
              <p className="text-slate-400 text-xs mt-4 leading-relaxed">
                Committed to staying current with industry standards and emerging technologies through continuous learning and professional development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
