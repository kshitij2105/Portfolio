import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { ArrowUpRight, Sparkles, Code, Terminal, ExternalLink, Cloud, ShieldCheck } from 'lucide-react';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All');

  React.useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const projects = [
    {
      id: 1,
      title: 'AI RAG Chatbot & Knowledge Assistant',
      category: 'AI / RAG',
      image: 'https://placehold.co/1000x400',
      description: 'Engineered retrieval-augmented generation (RAG) AI chatbots integrated with vector databases and LLMs for precise contextual information retrieval and natural dialogues.',
      tags: ['Python', 'LangChain', 'Vector DB', 'OpenAI', 'LLM']
    },
    {
      id: 2,
      title: 'End-to-End CI/CD Pipeline with Kubernetes & AWS',
      category: 'DevOps',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1000&q=80',
      description: 'Automated pipeline from code push to Kubernetes deployment using Docker, ECR, and AWS EC2. Configured HPA, Helm charts, and CloudWatch alarms with SNS notifications.',
      tags: ['GitHub Actions', 'Docker', 'Kubernetes', 'AWS', 'Helm']
    },
    {
      id: 3,
      title: 'Infrastructure-as-Code Provisioning with Terraform & Ansible',
      category: 'Cloud',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1000&q=80',
      description: 'Provisioned AWS infrastructure including VPC, EC2, RDS, S3, and IAM using Terraform. Applied Ansible playbooks for Docker setup, SSH hardening, and CIS benchmark configurations.',
      tags: ['Terraform', 'Ansible', 'AWS', 'Bash']
    },
    {
      id: 4,
      title: 'Centralized Monitoring & Log Aggregation Platform',
      category: 'Systems',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80',
      description: 'Deployed Prometheus and Grafana to monitor containerized services with real-time alerting. Built ELK-based centralized logging pipeline reducing debugging time by ~50%.',
      tags: ['Prometheus', 'Grafana', 'ELK Stack', 'Docker Compose']
    }
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(p => p.category.includes(activeFilter) || (activeFilter === 'DevOps' && p.category === 'DevOps'));

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans transition-colors duration-300">
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* Hero Section */}
      <section className="relative pt-36 pb-20 md:pt-44 md:pb-28 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-500/10 dark:bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-700 dark:text-violet-300 text-xs font-semibold uppercase tracking-wider mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              DevOps Engineer & AI Chatbot RAG Developer | Pune, India
            </div>

            <h1 className="font-serif text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.1]">
              Hi, I'm <span className="text-violet-600 dark:text-violet-400 italic">Kshitij Bhalerao</span>. I build cloud infrastructure & AI RAG chatbots.
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed font-normal">
              DevOps Engineer with expertise in CI/CD automation, cloud infrastructure on AWS, and developing intelligent RAG AI chatbots for contextual knowledge retrieval.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="px-8 py-4 rounded-full bg-violet-600 text-white font-medium hover:bg-violet-700 transition-all duration-300 shadow-lg shadow-violet-600/25 flex items-center gap-2"
              >
                View Projects
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <a
                href="https://www.linkedin.com/in/kshitij-bhalerao-a04993306/"
                target="_blank"
                rel="noreferrer"
                className="px-8 py-4 rounded-full border border-border/80 bg-secondary/30 font-medium hover:bg-secondary transition-all duration-300"
              >
                LinkedIn Profile (+91-9579653106)
              </a>
            </div>
          </motion.div>

          {/* Stats Bar */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 pt-12 border-t border-border/60"
          >
            {[
              { label: 'Deployment Effort', value: '~70% Less' },
              { label: 'Incident Detection', value: '40% Faster' },
              { label: 'System Uptime', value: '99.9%' },
              { label: 'Engineering CGPA', value: '9.03 / 10' },
            ].map((stat, i) => (
              <div key={i}>
                <div className="font-serif text-3xl md:text-4xl font-bold text-violet-600 dark:text-violet-400 mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Selected Works Section */}
      <section id="projects" className="py-24 bg-secondary/20 border-t border-border/50">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <span className="text-violet-600 dark:text-violet-400 font-semibold text-sm uppercase tracking-wider mb-2 block">
                Portfolio
              </span>
              <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight">
                Featured Projects
              </h2>
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-2 bg-background p-1.5 rounded-2xl border border-border shadow-sm">
              {['All', 'AI / RAG', 'DevOps', 'Cloud', 'Systems'].map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-4 py-2 rounded-xl text-xs font-medium transition-all duration-200 ${
                    activeFilter === filter
                      ? 'bg-violet-600 text-white shadow-sm'
                      : 'text-muted-foreground hover:text-foreground hover:bg-secondary/60'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-card rounded-2xl overflow-hidden border border-border/80 hover:border-violet-500/40 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <span className="text-xs uppercase tracking-wider font-semibold text-white bg-violet-600/90 px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>

                <div className="p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-medium text-violet-600 dark:text-violet-400 uppercase tracking-wider">
                        {project.category}
                      </span>
                      <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-violet-600 transition-colors" />
                    </div>
                    <h3 className="font-serif text-xl font-bold mb-3 group-hover:text-violet-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-4 border-t border-border/60">
                    {project.tags.map((tag, tIndex) => (
                      <span
                        key={tIndex}
                        className="text-xs px-2.5 py-1 rounded-md bg-secondary text-muted-foreground font-mono"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-violet-600 dark:text-violet-400 font-semibold text-sm uppercase tracking-wider mb-2 block">
              Capabilities
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight mb-4">
              Technical Expertise
            </h2>
            <p className="text-muted-foreground text-base">
              Cloud architecture, RAG AI Chatbots, containerization, and automation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Cloud,
                title: 'Cloud & Infra',
                description: 'AWS (EC2, Lambda, SNS, CloudWatch), Kubernetes, Docker, Linux.'
              },
              {
                icon: Sparkles,
                title: 'AI Chatbots & RAG',
                description: 'Retrieval-Augmented Generation, vector embeddings, LangChain, LLMs.'
              },
              {
                icon: Code,
                title: 'Languages & DB',
                description: 'Python, JavaScript, Node.js, MongoDB, MySQL.'
              },
              {
                icon: ShieldCheck,
                title: 'Tools & Security',
                description: 'Git, Helm, Prometheus, Grafana, GitHub Actions, Jenkins.'
              },
            ].map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 rounded-2xl bg-secondary/30 border border-border/80 hover:border-violet-500/40 transition-all duration-300 hover:shadow-lg"
              >
                <div className="w-12 h-12 rounded-xl bg-violet-600/10 text-violet-600 dark:text-violet-400 flex items-center justify-center mb-6">
                  <skill.icon className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl font-bold mb-3">{skill.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {skill.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="py-20 bg-violet-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(139,92,246,0.4),transparent_70%)]" />
        <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10 text-center max-w-3xl">
          <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight mb-6">
            Let's connect on LinkedIn.
          </h2>
          <p className="text-violet-200 text-lg mb-10 leading-relaxed">
            Reach out for DevOps engineering, AI chatbot RAG development, or cloud architecture discussions in Pune, India.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://www.linkedin.com/in/kshitij-bhalerao-a04993306/"
              target="_blank"
              rel="noreferrer"
              className="px-8 py-4 rounded-full bg-white text-violet-950 font-medium hover:bg-violet-100 transition-all duration-300 shadow-xl inline-flex items-center gap-2"
            >
              Visit LinkedIn Profile
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};