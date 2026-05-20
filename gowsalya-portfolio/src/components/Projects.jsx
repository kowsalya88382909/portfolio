import { useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { projects } from "../data/portfolioData";

const categories = ["All", "Full-Stack Development", "Mobile Development", "AI & Python"];

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const [expanded, setExpanded] = useState(null);

  const filtered =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-20 bg-[#0d0d18]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-purple-400 font-semibold text-sm uppercase tracking-widest mb-2">What I've Built</p>
          <h2 className="text-4xl font-extrabold text-white mb-4">Featured Projects</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full mx-auto mb-4" />
          <p className="text-slate-400 max-w-xl mx-auto text-sm">
            A showcase of my work spanning full-stack development, mobile apps, and AI integration.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-xl text-sm font-semibold transition-all ${
                filter === cat
                  ? "bg-gradient-to-r from-purple-600 to-purple-500 text-white shadow-lg shadow-purple-900/30"
                  : "bg-[#1a1a2e] border border-purple-900/30 text-slate-400 hover:text-purple-400 hover:border-purple-600/50"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, i) => (
            <div
              key={i}
              className="bg-[#1a1a2e] border border-purple-900/30 rounded-2xl overflow-hidden card-glow flex flex-col"
            >
              {/* Card Top */}
              <div className="p-6 flex-1">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-700/40 to-blue-700/40 border border-purple-700/30 flex items-center justify-center text-2xl">
                    {project.emoji}
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <span className={`text-xs font-semibold px-2 py-1 rounded-full ${
                      project.status === "Completed"
                        ? "bg-green-900/30 text-green-400 border border-green-700/30"
                        : "bg-yellow-900/30 text-yellow-400 border border-yellow-700/30"
                    }`}>
                      {project.status}
                    </span>
                    <span className="tag text-xs">{project.category}</span>
                  </div>
                </div>

                <h3 className="text-white font-bold text-lg mb-2">{project.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">{project.description}</p>

                {/* Details (expandable) */}
                {expanded === i && (
                  <ul className="space-y-1 mb-4">
                    {project.details.map((d, j) => (
                      <li key={j} className="flex items-start gap-2 text-slate-400 text-xs">
                        <span className="text-purple-400 mt-0.5 flex-shrink-0">•</span>
                        {d}
                      </li>
                    ))}
                  </ul>
                )}

                {/* Meta */}
                <div className="flex gap-4 text-xs text-slate-500 mb-4">
                  <span>👤 {project.role}</span>
                  <span>⏱ {project.duration}</span>
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>
              </div>

              {/* Card Footer */}
              <div className="px-6 pb-5 flex items-center justify-between border-t border-purple-900/20 pt-4">
                <button
                  onClick={() => setExpanded(expanded === i ? null : i)}
                  className="text-purple-400 text-xs font-semibold hover:text-purple-300 transition-colors"
                >
                  {expanded === i ? "Show Less ↑" : "Show More ↓"}
                </button>
                <div className="flex gap-3">
                  <a
                    href={`https://github.com/kowsalya`}
                    target="_blank"
                    rel="noreferrer"
                    className="w-8 h-8 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-purple-400 hover:border-purple-600 transition-all"
                  >
                    <FaGithub size={14} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Impact */}
        <div className="mt-12 bg-gradient-to-r from-purple-900/30 to-blue-900/20 border border-purple-700/30 rounded-2xl p-8">
          <h3 className="text-white font-bold text-xl mb-6 text-center">Project Impact & Learning</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: "3+", label: "Projects Built" },
              { value: "10+", label: "Technologies Used" },
              { value: "100%", label: "Completion Rate" },
              { value: "3", label: "Domains Covered" },
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
