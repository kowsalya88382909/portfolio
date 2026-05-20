import { useState } from "react";
import { FaBriefcase, FaMapMarkerAlt, FaCalendarAlt, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { experience } from "../data/portfolioData";

export default function Experience() {
  const [expanded, setExpanded] = useState(0);

  return (
    <section id="experience" className="py-20 bg-[#0f0f1a]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-purple-400 font-semibold text-sm uppercase tracking-widest mb-2">My Journey</p>
          <h2 className="text-4xl font-extrabold text-white mb-4">Professional Experience</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full mx-auto" />
        </div>

        <div className="space-y-6">
          {experience.map((exp, i) => (
            <div
              key={i}
              className="bg-[#1a1a2e] border border-purple-900/30 rounded-2xl overflow-hidden card-glow"
            >
              {/* Header Row */}
              <div
                className="p-6 cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-4"
                onClick={() => setExpanded(expanded === i ? -1 : i)}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center flex-shrink-0 shadow-lg">
                    <FaBriefcase className="text-white" />
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <h3 className="text-white font-bold text-lg">{exp.role}</h3>
                      <span className="tag">{exp.type}</span>
                    </div>
                    <p className="text-purple-400 font-semibold">{exp.company}</p>
                    <div className="flex flex-wrap gap-4 mt-2 text-slate-400 text-sm">
                      <span className="flex items-center gap-1">
                        <FaCalendarAlt className="text-purple-500 text-xs" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <FaMapMarkerAlt className="text-purple-500 text-xs" />
                        {exp.location}
                      </span>
                    </div>
                  </div>
                </div>
                <button className="text-slate-400 hover:text-purple-400 transition-colors self-start md:self-center">
                  {expanded === i ? <FaChevronUp /> : <FaChevronDown />}
                </button>
              </div>

              {/* Expanded Content */}
              {expanded === i && (
                <div className="px-6 pb-6 border-t border-purple-900/20 pt-6">
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">{exp.description}</p>

                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Responsibilities */}
                    <div>
                      <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-purple-500" />
                        Key Responsibilities
                      </h4>
                      <ul className="space-y-2">
                        {exp.responsibilities.map((r, j) => (
                          <li key={j} className="flex items-start gap-2 text-slate-400 text-sm">
                            <span className="text-purple-400 mt-1 flex-shrink-0">•</span>
                            {r}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Achievements */}
                    <div>
                      <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-green-500" />
                        Key Achievements
                      </h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((a, j) => (
                          <li key={j} className="flex items-start gap-2 text-slate-400 text-sm">
                            <span className="text-green-400 mt-0.5 flex-shrink-0">✓</span>
                            {a}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div className="mt-6">
                    <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-blue-500" />
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((t) => (
                        <span key={t} className="tag">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Career Highlights */}
        <div className="mt-12 bg-gradient-to-r from-purple-900/30 to-blue-900/20 border border-purple-700/30 rounded-2xl p-8">
          <h3 className="text-white font-bold text-xl mb-6 text-center">Career Highlights</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-center">
            {[
              { value: "5 Months", label: "Internship Experience" },
              { value: "3+", label: "Projects Delivered" },
              { value: "10+", label: "Technologies Used" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl font-extrabold gradient-text">{stat.value}</p>
                <p className="text-slate-400 text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
