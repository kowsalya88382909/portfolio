import { useState, useEffect, useRef } from "react";
import { skills } from "../data/portfolioData";

function SkillBar({ name, level, animate }) {
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-1">
        <span className="text-slate-300 text-sm font-medium">{name}</span>
        <span className="text-purple-400 text-xs font-semibold">{level}%</span>
      </div>
      <div className="h-2 bg-slate-700/50 rounded-full overflow-hidden">
        <div
          className="skill-bar h-full rounded-full"
          style={{ width: animate ? `${level}%` : "0%" }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const [activeTab, setActiveTab] = useState(0);
  const [animate, setAnimate] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setAnimate(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    setAnimate(false);
    const t = setTimeout(() => setAnimate(true), 100);
    return () => clearTimeout(t);
  }, [activeTab]);

  const allTech = skills.flatMap((s) => s.items.map((i) => i.name));

  return (
    <section id="skills" className="py-20 bg-[#0d0d18]" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-purple-400 font-semibold text-sm uppercase tracking-widest mb-2">What I Know</p>
          <h2 className="text-4xl font-extrabold text-white mb-4">Technical Skills</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full mx-auto mb-4" />
          <p className="text-slate-400 max-w-xl mx-auto text-sm">
            A comprehensive overview of my technical expertise across frontend, backend, databases, and tools.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {skills.map((s, i) => (
            <button
              key={s.category}
              onClick={() => setActiveTab(i)}
              className={`px-5 py-2 rounded-xl text-sm font-semibold transition-all ${
                activeTab === i
                  ? "bg-gradient-to-r from-purple-600 to-purple-500 text-white shadow-lg shadow-purple-900/30"
                  : "bg-[#1a1a2e] border border-purple-900/30 text-slate-400 hover:text-purple-400 hover:border-purple-600/50"
              }`}
            >
              {s.icon} {s.category}
            </button>
          ))}
        </div>

        {/* Skill Bars */}
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-[#1a1a2e] border border-purple-900/30 rounded-2xl p-8 card-glow">
            <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
              <span>{skills[activeTab].icon}</span>
              {skills[activeTab].category}
            </h3>
            {skills[activeTab].items.map((skill) => (
              <SkillBar key={skill.name} name={skill.name} level={skill.level} animate={animate} />
            ))}
          </div>

          {/* All Technologies */}
          <div className="bg-[#1a1a2e] border border-purple-900/30 rounded-2xl p-8 card-glow">
            <h3 className="text-white font-bold text-lg mb-6">All Technologies</h3>
            <div className="flex flex-wrap gap-3">
              {allTech.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-2 rounded-xl bg-slate-800/60 border border-slate-700/50 text-slate-300 text-sm font-medium hover:border-purple-600/50 hover:text-purple-300 transition-all cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Continuous Learning */}
            <div className="mt-8 p-4 rounded-xl bg-purple-900/20 border border-purple-700/30">
              <p className="text-purple-300 font-semibold text-sm mb-1">🚀 Continuous Learning</p>
              <p className="text-slate-400 text-xs leading-relaxed">
                Actively expanding my skill set through internship experience, personal projects, and online certifications.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
          {[
            { label: "Technologies", value: "10+", icon: "⚡" },
            { label: "Projects Built", value: "5+", icon: "🏗️" },
            { label: "Certifications", value: "3", icon: "🏆" },
            { label: "Months Exp.", value: "5", icon: "📅" },
          ].map((stat) => (
            <div key={stat.label} className="bg-[#1a1a2e] border border-purple-900/30 rounded-2xl p-5 text-center card-glow">
              <p className="text-2xl mb-1">{stat.icon}</p>
              <p className="text-2xl font-extrabold gradient-text">{stat.value}</p>
              <p className="text-slate-400 text-xs mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
