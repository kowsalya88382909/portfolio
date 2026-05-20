import { useState } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaPaperPlane } from "react-icons/fa";
import { personalInfo } from "../data/portfolioData";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:${personalInfo.email}?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    )}`;
    window.location.href = mailtoLink;
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section id="contact" className="py-20 bg-[#0d0d18]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-purple-400 font-semibold text-sm uppercase tracking-widest mb-2">Get In Touch</p>
          <h2 className="text-4xl font-extrabold text-white mb-4">Let's Connect</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full mx-auto mb-4" />
          <p className="text-slate-400 max-w-xl mx-auto text-sm">
            Ready to collaborate on your next project? Let's discuss how I can help bring your ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Left — Info */}
          <div>
            <h3 className="text-white font-bold text-xl mb-2">Get In Touch</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-8">
              I'm always interested in new opportunities, challenging projects, and meaningful collaborations.
              Whether you have a project in mind or just want to connect, I'd love to hear from you.
            </p>

            <div className="space-y-4 mb-8">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-4 p-4 bg-[#1a1a2e] border border-purple-900/30 rounded-2xl hover:border-purple-600/50 transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center flex-shrink-0">
                  <FaEnvelope className="text-white text-sm" />
                </div>
                <div>
                  <p className="text-slate-400 text-xs">Email</p>
                  <p className="text-white text-sm font-medium group-hover:text-purple-400 transition-colors break-all">
                    {personalInfo.email}
                  </p>
                </div>
              </a>

              <a
                href={`tel:${personalInfo.phone}`}
                className="flex items-center gap-4 p-4 bg-[#1a1a2e] border border-purple-900/30 rounded-2xl hover:border-purple-600/50 transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center flex-shrink-0">
                  <FaPhone className="text-white text-sm" />
                </div>
                <div>
                  <p className="text-slate-400 text-xs">Phone</p>
                  <p className="text-white text-sm font-medium group-hover:text-purple-400 transition-colors">
                    {personalInfo.phone}
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 bg-[#1a1a2e] border border-purple-900/30 rounded-2xl">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center flex-shrink-0">
                  <FaMapMarkerAlt className="text-white text-sm" />
                </div>
                <div>
                  <p className="text-slate-400 text-xs">Location</p>
                  <p className="text-white text-sm font-medium">{personalInfo.location}</p>
                </div>
              </div>
            </div>

            {/* Social */}
            <div>
              <p className="text-slate-400 text-sm mb-3">Follow Me</p>
              <div className="flex gap-3">
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-xl bg-[#1a1a2e] border border-purple-900/30 flex items-center justify-center text-slate-400 hover:text-purple-400 hover:border-purple-600 transition-all"
                >
                  <FaLinkedin size={16} />
                </a>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-xl bg-[#1a1a2e] border border-purple-900/30 flex items-center justify-center text-slate-400 hover:text-purple-400 hover:border-purple-600 transition-all"
                >
                  <FaGithub size={16} />
                </a>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="w-10 h-10 rounded-xl bg-[#1a1a2e] border border-purple-900/30 flex items-center justify-center text-slate-400 hover:text-purple-400 hover:border-purple-600 transition-all"
                >
                  <FaEnvelope size={16} />
                </a>
              </div>
            </div>
          </div>

          {/* Right — Form */}
          <div className="bg-[#1a1a2e] border border-purple-900/30 rounded-2xl p-8 card-glow">
            <h3 className="text-white font-bold text-lg mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-slate-400 text-xs font-medium mb-1 block">Name *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full bg-slate-800/60 border border-slate-700/50 rounded-xl px-4 py-3 text-white text-sm placeholder-slate-500 focus:outline-none focus:border-purple-600 transition-colors"
                  />
                </div>
                <div>
                  <label className="text-slate-400 text-xs font-medium mb-1 block">Email *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full bg-slate-800/60 border border-slate-700/50 rounded-xl px-4 py-3 text-white text-sm placeholder-slate-500 focus:outline-none focus:border-purple-600 transition-colors"
                  />
                </div>
              </div>
              <div>
                <label className="text-slate-400 text-xs font-medium mb-1 block">Subject *</label>
                <input
                  type="text"
                  name="subject"
                  required
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="Project collaboration"
                  className="w-full bg-slate-800/60 border border-slate-700/50 rounded-xl px-4 py-3 text-white text-sm placeholder-slate-500 focus:outline-none focus:border-purple-600 transition-colors"
                />
              </div>
              <div>
                <label className="text-slate-400 text-xs font-medium mb-1 block">Message *</label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  className="w-full bg-slate-800/60 border border-slate-700/50 rounded-xl px-4 py-3 text-white text-sm placeholder-slate-500 focus:outline-none focus:border-purple-600 transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-600 to-purple-500 text-white font-semibold hover:from-purple-500 hover:to-purple-400 transition-all shadow-lg shadow-purple-900/30 flex items-center justify-center gap-2"
              >
                {sent ? "✓ Message Sent!" : (
                  <>
                    <FaPaperPlane size={14} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
