import React, { useState } from 'react';
import { Mail, Linkedin, Github, Send, Copy, Check, Sparkles, MessageSquare, Phone, MapPin, Loader2, AlertCircle } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

// ─────────────────────────────────────────────────────────────────────────────
// FORMSPREE CONFIGURATION
// ─────────────────────────────────────────────────────────────────────────────
// 1. Go to https://formspree.io and create a free account.
// 2. Create a new form and set the recipient email to: gayatriganeri20@gmail.com
// 3. Copy your Form ID (e.g. "xyzabcde") and paste it below.
// 4. That's it — submissions will be delivered to your email.
// ─────────────────────────────────────────────────────────────────────────────
const FORMSPREE_FORM_ID = "YOUR_FORM_ID"; // ← Replace with your Formspree form ID

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [copiedField, setCopiedField] = useState(null);
  const [submitStatus, setSubmitStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('');

  const handleCopy = (text, fieldName) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');

    // Validate required fields
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setSubmitStatus('error');
      setErrorMessage('Please fill in all required fields.');
      return;
    }

    // Validate email format
    if (!isValidEmail(formData.email)) {
      setSubmitStatus('error');
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    // Check if Formspree is configured
    if (FORMSPREE_FORM_ID === "YOUR_FORM_ID") {
      setSubmitStatus('error');
      setErrorMessage('Contact form is not yet configured. Please set up Formspree (see Contact.jsx).');
      return;
    }

    setSubmitStatus('submitting');

    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_FORM_ID}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          message: formData.message.trim(),
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setSubmitStatus('idle'), 5000);
      } else {
        const data = await response.json();
        setSubmitStatus('error');
        setErrorMessage(data?.errors?.[0]?.message || 'Something went wrong. Please try again or email directly.');
      }
    } catch (err) {
      setSubmitStatus('error');
      setErrorMessage('Network error. Please check your connection or email directly.');
    }
  };

  return (
    <section id="contact" className="py-20 relative">
      {/* Background ambient lighting */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-start mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-400 mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            Let's build something <span className="text-gradient-accent">extraordinary</span>
          </h2>
          <p className="mt-2 text-slate-400 text-base max-w-2xl">
            Open for software engineering roles, AI research collaborations, and technical developer opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Links */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="glass-card p-7 sm:p-8 rounded-3xl space-y-5 border-indigo-500/20">
              <h3 className="text-xl font-bold text-slate-100 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-indigo-400" />
                <span>Direct Reachout</span>
              </h3>

              {/* Email Card (Primary CTA) */}
              <div className="p-4 rounded-2xl bg-slate-950/80 border border-indigo-500/30 flex items-center justify-between gap-4 group">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="truncate">
                    <div className="text-[10px] font-mono text-slate-400">Primary Email</div>
                    <a href={`mailto:${personalInfo.email}`} className="text-xs font-semibold text-slate-100 hover:text-indigo-300 truncate block">
                      {personalInfo.email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy(personalInfo.email, 'email')}
                  className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:outline-none"
                  title="Copy Email"
                >
                  {copiedField === 'email' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* LinkedIn Card */}
              <div className="p-4 rounded-2xl bg-slate-950/80 border border-white/10 flex items-center justify-between gap-4 group">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div className="truncate">
                    <div className="text-[10px] font-mono text-slate-400">LinkedIn Profile</div>
                    <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-xs font-semibold text-slate-200 hover:text-cyan-300 truncate block">
                      gayatri-ganeri-12777b257
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy(personalInfo.linkedin, 'linkedin')}
                  className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:outline-none"
                  title="Copy LinkedIn URL"
                >
                  {copiedField === 'linkedin' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* GitHub Card */}
              <div className="p-4 rounded-2xl bg-slate-950/80 border border-white/10 flex items-center justify-between gap-4 group">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center text-purple-400 shrink-0">
                    <Github className="w-5 h-5" />
                  </div>
                  <div className="truncate">
                    <div className="text-[10px] font-mono text-slate-400">GitHub Profile</div>
                    <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-xs font-semibold text-slate-200 hover:text-purple-300 truncate block">
                      GayatriAnilGaneri
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy(personalInfo.github, 'github')}
                  className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:outline-none"
                  title="Copy GitHub URL"
                >
                  {copiedField === 'github' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Location Badge */}
              <div className="pt-2 flex items-center gap-2 text-xs font-mono text-slate-400">
                <MapPin className="w-4 h-4 text-indigo-400" />
                <span>{personalInfo.location}</span>
              </div>

            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-card p-7 sm:p-8 rounded-3xl relative">
              
              <h3 className="text-xl font-bold text-slate-100 mb-6 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-cyan-400" />
                <span>Send a Direct Message</span>
              </h3>

              {submitStatus === 'success' ? (
                <div className="p-8 rounded-2xl bg-emerald-950/60 border border-emerald-500/40 text-center space-y-3 animate-in fade-in duration-300">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mx-auto">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-emerald-200">Message Sent Successfully!</h4>
                  <p className="text-xs text-emerald-300 font-mono">
                    Your message has been delivered to Gayatri's inbox. She will respond to your inquiry shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-mono text-slate-400 mb-1.5 block">Your Name</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-white/15 text-slate-200 text-sm focus:outline-none focus:border-indigo-500 transition-colors"
                        placeholder="e.g. Recruiter / Engineering Manager"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-mono text-slate-400 mb-1.5 block">Your Email</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-white/15 text-slate-200 text-sm focus:outline-none focus:border-indigo-500 transition-colors"
                        placeholder="recruiter@company.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-mono text-slate-400 mb-1.5 block">Message</label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full p-4 rounded-xl bg-slate-900 border border-white/15 text-slate-200 text-sm focus:outline-none focus:border-indigo-500 transition-colors"
                      placeholder="Share project ideas, job opportunities, or technical inquiries..."
                    />
                  </div>

                  {/* Error message */}
                  {submitStatus === 'error' && errorMessage && (
                    <div className="flex items-center gap-2 p-3 rounded-xl bg-red-950/60 border border-red-500/30 text-sm text-red-300 animate-in fade-in duration-200">
                      <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={submitStatus === 'submitting'}
                    className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm transition-all shadow-md shadow-indigo-500/20 focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:outline-none disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:bg-indigo-600"
                  >
                    {submitStatus === 'submitting' ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
