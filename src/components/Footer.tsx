import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowUpRight, Github, Linkedin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary/40 border-t border-border/60 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-violet-600 flex items-center justify-center text-white">
                <Sparkles className="w-4 h-4" />
              </div>
              <span className="font-serif font-bold text-lg tracking-tight">Kshitij Bhalerao</span>
            </Link>
            <p className="text-muted-foreground max-w-sm text-sm leading-relaxed mb-6">
              DevOps Engineer & AI Chatbot Developer building high-performance cloud pipelines, RAG systems, and modern digital experiences.
            </p>
            <div className="flex items-center gap-3">
              {[
                { icon: Linkedin, href: 'https://www.linkedin.com/in/kshitij-bhalerao-a04993306/', label: 'LinkedIn' },
                { icon: Github, href: 'https://github.com', label: 'GitHub' },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full border border-border/60 bg-background flex items-center justify-center text-muted-foreground hover:text-violet-600 hover:border-violet-500/40 transition-all duration-200"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-foreground mb-4">Navigation</h4>
            <ul className="space-y-3 text-sm">
              {['Work', 'About', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    to={item === 'Work' ? '/' : `/${item.toLowerCase()}`}
                    className="text-muted-foreground hover:text-violet-600 transition-colors flex items-center gap-1 group"
                  >
                    <span>{item}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-foreground mb-4">Inquiries</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Available for DevOps and AI chatbot RAG engineering opportunities.
            </p>
            <a 
              href="https://www.linkedin.com/in/kshitij-bhalerao-a04993306/" 
              target="_blank" 
              rel="noreferrer"
              className="text-sm font-medium text-violet-600 dark:text-violet-400 hover:underline inline-flex items-center gap-1"
            >
              Connect on LinkedIn
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
        </div>

        <div className="pt-8 border-t border-border/40 flex flex-col sm:flex-row items-center justify-between text-xs text-muted-foreground gap-4">
          <p>© 2026 Kshitij Bhalerao. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-foreground cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-foreground cursor-pointer transition-colors">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};