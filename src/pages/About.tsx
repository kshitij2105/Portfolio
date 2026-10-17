import React, { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { motion } from 'framer-motion';
import { CheckCircle2, Linkedin, Award, GraduationCap } from 'lucide-react';

export default function About() {
  const [darkMode, setDarkMode] = useState(false);

  React.useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const experiences = [
    {
      period: 'Apr 2025 – Present',
      role: 'Associate System Engineer – DevOps',
      company: 'Tata Consultancy Services | Pune, India',
      description: 'Architected CI/CD pipelines using GitHub Actions and Jenkins for AWS-hosted microservices, reducing deployment effort by ~70% and enabling daily releases. Containerized 5+ microservices using Docker and Kubernetes, achieving zero-downtime deployments with 99.9% uptime.'
    },
    {
      period: 'Oct 2024 – Mar 2025',
      role: 'DevOps & Automation Intern',
      company: 'Algowiz | Pune, India',
      description: 'Designed and implemented CI/CD pipelines using GitHub Actions, automating deployments and eliminating manual release steps. Authored reusable shell scripts reducing operational overhead by ~30%.'
    },
    {
      period: 'Jan 2023 – Mar 2023',
      role: 'Frontend Development Intern',
      company: 'Cognifront Pvt. Ltd | Nashik, India',
      description: 'Built and deployed a Flask web application integrating a pre-trained ML model with a responsive frontend UI.'
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans transition-colors duration-300">
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      <main className="flex-1 pt-36 pb-24">
        {/* Header */}
        <div className="max-w-7xl mx-auto px-6 md:px-8 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="text-violet-600 dark:text-violet-400 font-semibold text-sm uppercase tracking-wider mb-2 block">
              About Me
            </span>
            <h1 className="font-serif text-4xl md:text-6xl font-bold tracking-tight mb-6">
              DevOps Engineer & AI RAG Chatbot Developer.
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I am Kshitij Bhalerao, based in Pune, India. Experienced in designing CI/CD pipelines, containerizing microservices, building AI RAG chatbots, and managing cloud infrastructure on AWS.
            </p>
          </motion.div>
        </div>

        {/* Bio & Image Grid */}
        <div className="max-w-7xl mx-auto px-6 md:px-8 mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-border/80 shadow-2xl bg-secondary flex items-center justify-center">
                <img
                  src="/IMG_5247.PNG"
                  alt="Kshitij Bhalerao"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-violet-950/80 via-transparent to-transparent flex items-end p-8">
                  <div className="text-white">
                    <p className="font-serif text-xl font-bold">Kshitij Bhalerao</p>
                    <p className="text-sm text-violet-200">DevOps & AI Engineer • TCS</p>
                    <p className="text-xs text-violet-300 mt-1">+91-9579653106 | Pune, India</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <h2 className="font-serif text-2xl md:text-3xl font-bold">
                Professional Background & Education
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Strong foundation in DevOps, automation, RAG AI chatbots, cloud infrastructure, and Agile delivery. Graduated with a Bachelor of Engineering (B.E.) from K. K. Wagh Institute of Engineering Education and Research, SPPU (CGPA: 9.03 / 10).
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                {[
                  'AWS (EC2, Lambda, SNS, CloudWatch)',
                  'AI Chatbots & RAG Systems',
                  'Kubernetes & Docker',
                  'GitHub Actions & Jenkins',
                  'Terraform & Ansible IaC',
                  'Python, LangChain & Vector DB'
                ].map((skill, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-violet-600 dark:text-violet-400 shrink-0" />
                    <span className="text-sm font-medium">{skill}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex flex-wrap gap-4">
                <a
                  href="https://www.linkedin.com/in/kshitij-bhalerao-a04993306/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-violet-600 text-white font-medium hover:bg-violet-700 transition-colors shadow-md"
                >
                  <Linkedin className="w-4 h-4" />
                  View LinkedIn Profile
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Education & Certifications */}
        <div className="max-w-4xl mx-auto px-6 md:px-8 mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-3xl bg-card border border-border/80 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-violet-600/10 text-violet-600 dark:text-violet-400 flex items-center justify-center mb-6">
                <GraduationCap className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-secondary text-violet-600 dark:text-violet-400 font-semibold mb-3 inline-block">
                Sep 2019 – May 2024
              </span>
              <h3 className="font-serif text-xl font-bold mb-1">Bachelor of Engineering (B.E.)</h3>
              <p className="text-violet-600 dark:text-violet-400 font-medium text-sm mb-2">K. K. Wagh Institute of Engineering Education and Research, SPPU</p>
              <p className="text-sm text-muted-foreground mb-4">Nashik, India | CGPA: 9.03 / 10</p>
            </div>

            <div className="p-8 rounded-3xl bg-card border border-border/80 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-violet-600/10 text-violet-600 dark:text-violet-400 flex items-center justify-center mb-6">
                <Award className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-secondary text-violet-600 dark:text-violet-400 font-semibold mb-3 inline-block">
                Certifications
              </span>
              <h3 className="font-serif text-xl font-bold mb-3">IIT Bombay Spoken Tutorial</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-violet-600" />
                  Python 3.0 Training — Spoken Tutorial Project, IIT Bombay
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-violet-600" />
                  PHP and MySQL Training — Spoken Tutorial Project, IIT Bombay
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Experience Timeline */}
        <div className="max-w-4xl mx-auto px-6 md:px-8">
          <div className="text-center mb-16">
            <span className="text-violet-600 dark:text-violet-400 font-semibold text-sm uppercase tracking-wider mb-2 block">
              Career Path
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold tracking-tight">
              Professional Experience
            </h2>
          </div>

          <div className="space-y-8 relative before:absolute before:inset-0 before:left-7 before:w-0.5 before:bg-border/60">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative flex items-start gap-6 bg-card p-8 rounded-2xl border border-border/80 shadow-sm ml-4 sm:ml-8"
              >
                <div className="absolute -left-10 md:-left-12 top-8 w-6 h-6 rounded-full bg-violet-600 border-4 border-background flex items-center justify-center" />
                <div className="flex-1">
                  <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-secondary text-violet-600 dark:text-violet-400 font-semibold mb-2 inline-block">
                    {exp.period}
                  </span>
                  <h3 className="font-serif text-xl font-bold mt-1 mb-1">{exp.role}</h3>
                  <p className="text-violet-600 dark:text-violet-400 font-medium text-sm mb-3">{exp.company}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">{exp.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};