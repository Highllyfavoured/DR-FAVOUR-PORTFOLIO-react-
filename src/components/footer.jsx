"use client";
import { Github, Linkedin, Mail, Twitter, ExternalLink, Send } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Footer() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('Submitting...');

    try {
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus(`✅ ${data.message}`);
        setName('');
        setEmail('');
        setMessage('');
        setTimeout(() => setStatus(''), 5000);
      } else {
        setStatus(`❌ ${data.message || 'Failed to submit.'}`);
        setTimeout(() => setStatus(''), 8000);
      }
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('❌ An unexpected error occurred. Please try again.');
      setTimeout(() => setStatus(''), 8000);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Framer motion variants for staggered animation
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };
  const item = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } };

  return (
    <motion.footer
      id='footer'
      className="relative w-full flex flex-col justify-center px-4 sm:px-8 md:px-16 lg:px-24 py-32 sm:py-40 md:py-52 border-b border-border isolate"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={container}
    >
      {/* Background Glows */}
      <motion.div
        aria-hidden
        className="absolute top-0 left-1/3 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: "rgba(0,229,204,0.2)" }}
        animate={{ scale: [1, 1.03, 1], opacity: [0.95, 0.6, 0.95] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="absolute bottom-10 right-10 w-[350px] h-[350px] rounded-full pointer-events-none"
        style={{ background: "rgba(107,207,255,0.15)" }}
        animate={{ scale: [1, 1.02, 1], opacity: [0.95, 0.65, 0.95] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
      />

      {/* Content Wrapper */}
      <motion.div className="relative z-10 max-w-5xl mx-auto space-y-12" variants={container}>
        {/* Contact Info + Socials */}
        <motion.div variants={item} className="grid md:grid-cols-2 gap-12">
          <div className="space-y-4">
            <h3 className="font-bold text-foreground text-lg">Let's Work Together</h3>
            <p className="text-foreground/70 text-sm leading-relaxed">
              I'm always interested in hearing about new projects and opportunities. Whether you have a question or just want to say hi, feel free to get in touch!
            </p>
            <div className="flex gap-4 pt-4">
              {[{icon: Mail, href: "mailto:favourolaosebikanf@gmail.com"}, {icon: Github, href: "https://github.com/Highllyfavoured"}, {icon: Linkedin, href: "https://www.linkedin.com/in/olaosebikan-favour-218577184"}, {icon: Twitter, href: "https://x.com/FavourOLAOSEBI1"}].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 hover:bg-accent/20 rounded-lg transition-colors text-accent"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <motion.div variants={item} className="space-y-4">
            <h3 className="font-bold text-foreground text-lg">Quick Links</h3>
            <nav className="flex flex-col gap-3">
              {["about","skills","projects","blog"].map((link) => (
                <a key={link} href={`#${link}`} className="text-foreground/70 hover:text-accent text-sm transition-colors flex items-center gap-2">
                  <ExternalLink size={14} />
                  {link.charAt(0).toUpperCase() + link.slice(1)}
                </a>
              ))}
            </nav>
          </motion.div>
        </motion.div>

        {/* Contact Form */}
        <motion.div variants={item}>
          <h3 className="font-bold text-foreground text-lg mb-6">Contact Form</h3>
          <form onSubmit={handleSubmit} className="bg-card border border-accent rounded-2xl p-8 space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2 text-foreground">Name</label>
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} required disabled={isSubmitting} minLength={2} maxLength={100} className="w-full px-4 py-2 bg-background border border-border rounded-2xl focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-colors text-foreground" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-foreground">Email</label>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required disabled={isSubmitting} className="w-full px-4 py-2 bg-background border border-border rounded-2xl focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-colors text-foreground" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-foreground">Message</label>
              <textarea value={message} onChange={(e) => setMessage(e.target.value)} rows={5} required disabled={isSubmitting} minLength={10} maxLength={1000} className="w-full px-4 py-2 bg-background border border-border rounded-2xl focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-colors resize-none text-foreground" />
            </div>

            <button type="submit" disabled={isSubmitting} className="px-6 py-3 bg-accent text-accent-foreground rounded-2xl text-sm font-medium hover:bg-accent/90 transition-colors flex items-center justify-center gap-2 mx-auto">
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-accent-foreground"></div>
                  Sending...
                </>
              ) : (
                <>
                  <Send size={20} /> Send Message
                </>
              )}
            </button>
          </form>

          {status && (
            <motion.div variants={item} className={`mt-4 p-3 rounded-lg text-sm ${status.includes('✅') ? 'bg-green-100 text-green-800 border border-green-200' : 'bg-red-100 text-red-800 border border-red-200'}`}>
              {status}
            </motion.div>
          )}
        </motion.div>

        {/* Footer Bottom */}
        <motion.div variants={item} className="pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-foreground/50 text-xs">
            © 2025 Dr. Olaosebikan Favour. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-foreground/50">
            <a href="#" className="hover:text-accent transition-colors">Privacy</a>
            <a href="#" className="hover:text-accent transition-colors">Terms</a>
            <a href="#footer" className="hover:text-accent transition-colors">Contact</a>
          </div>
        </motion.div>
      </motion.div>
    </motion.footer>
  );
}
