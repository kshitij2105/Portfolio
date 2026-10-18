import React, { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { motion } from 'framer-motion';
import { Linkedin, Mail, MapPin, Send, Sparkles } from 'lucide-react';
import { toast } from 'react-toastify';

export default function Contact() {
  const [darkMode, setDarkMode] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  React.useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast.error('Please fill in all fields before sending.');
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch(
  `${import.meta.env.VITE_API_URL || 'https://portfolio-two-ruddy-976dav05qc.vercel.app'}/api/contact`,
  {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
  }
);
      const result = await response.json();

      if (!response.ok) {
        throw new Error(typeof result.error === 'string' ? result.error : 'The message could not be sent. Please try again.');
      }

      toast.success('Message sent successfully! Kshitij will get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      toast.error(error instanceof Error ? error.message : 'The message could not be sent. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans transition-colors duration-300">
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      <main className="flex-1 pt-36 pb-24">
        <div className="max-w-7xl mx-auto px-6 md:px-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="text-violet-600 dark:text-violet-400 font-semibold text-sm uppercase tracking-wider mb-2 block">
              Get in Touch
            </span>
            <h1 className="font-serif text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Let’s connect and automate together.
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Have a DevOps engineering role, cloud infrastructure challenge, or collaboration inquiry? Reach out below or connect on LinkedIn.
            </p>
          </motion.div>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Contact Details */}
            <div className="lg:col-span-5 space-y-8">
              <div className="p-8 rounded-3xl bg-secondary/30 border border-border/85 space-y-6">
                <h3 className="font-serif text-2xl font-bold">Contact Info</h3>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-violet-600/10 text-violet-600 dark:text-violet-400 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground mb-1">Email</p>
                    <a href="mailto:kshitijbhalerao215@gmail.com" className="font-serif text-lg font-bold hover:text-violet-600 transition-colors">
                      kshitijbhalerao215@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-violet-600/10 text-violet-600 dark:text-violet-400 flex items-center justify-center shrink-0">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground mb-1">LinkedIn Profile</p>
                    <a href="https://www.linkedin.com/in/kshitij-bhalerao-a04993306/" target="_blank" rel="noreferrer" className="font-serif text-lg font-bold hover:text-violet-600 transition-colors">
                      Kshitij Bhalerao
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-violet-600/10 text-violet-600 dark:text-violet-400 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground mb-1">Location</p>
                    <p className="font-serif text-lg font-bold">
                      Pune, India
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-8 rounded-3xl bg-violet-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(139,92,246,0.4),transparent_70%)]" />
                <div className="relative z-10">
                  <Sparkles className="w-8 h-8 text-violet-300 mb-4" />
                  <h4 className="font-serif text-xl font-bold mb-2">Professional Availability</h4>
                  <p className="text-violet-200 text-sm leading-relaxed mb-4">
                    Associate System Engineer – DevOps at Tata Consultancy Services. Open to discussing cloud infrastructure & CI/CD.
                  </p>
                  <a
                    href="https://www.linkedin.com/in/kshitij-bhalerao-a04993306/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block px-4 py-2 rounded-full bg-white text-violet-950 text-xs font-semibold uppercase tracking-wider hover:bg-violet-100 transition-colors"
                  >
                    Connect on LinkedIn
                  </a>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-7">
              <form onSubmit={handleSubmit} className="p-8 md:p-12 rounded-3xl bg-card border border-border/80 shadow-xl space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name</label>
                  <input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Doe"
                    className="w-full px-5 py-4 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-violet-500/50 transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Email Address</label>
                  <input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@example.com"
                    className="w-full px-5 py-4 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-violet-500/50 transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    id="message"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Discuss DevOps role, AWS infrastructure, or collaboration..."
                    className="w-full px-5 py-4 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-violet-500/50 transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl bg-violet-600 text-white font-medium hover:bg-violet-700 transition-all duration-300 shadow-lg shadow-violet-600/30 flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    'Sending Message...'
                  ) : (
                    <>
                      Send Message
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};