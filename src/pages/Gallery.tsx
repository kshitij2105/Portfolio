import React, { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

export default function Gallery() {
  const [darkMode, setDarkMode] = useState(false);
  const [selectedImage, setSelectedImage] = useState<any>(null);

  React.useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const artworks = [
    {
      id: 1,
      title: 'Kubernetes Cluster Architecture',
      year: '2026',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80',
      description: 'Zero-downtime microservices containerized using Docker and orchestrated on AWS with Kubernetes.'
    },
    {
      id: 2,
      title: 'Infrastructure as Code (Terraform)',
      year: '2025',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80',
      description: 'Provisioned VPC, EC2, RDS, S3, and IAM using Terraform and Ansible automation.'
    },
    {
      id: 3,
      title: 'Prometheus & Grafana Monitoring',
      year: '2025',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
      description: 'Real-time alerting and metrics dashboard with ELK centralized log aggregation.'
    },
    {
      id: 4,
      title: 'GitHub Actions & Jenkins CI/CD',
      year: '2026',
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
      description: 'Automated pipelines reducing deployment effort by ~70% and accelerating release cycles.'
    },
    {
      id: 5,
      title: 'Linux Server Environment',
      year: '2025',
      image: 'https://images.unsplash.com/photo-1629654297299-c8506221ca97?auto=format&fit=crop&w=1200&q=80',
      description: 'Bash shell scripting, SSH hardening, and CIS benchmark configurations.'
    },
    {
      id: 6,
      title: 'AWS Cloud Infrastructure',
      year: '2026',
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80',
      description: 'Scalable cloud services utilizing EC2, Lambda, SNS, and CloudWatch alerts.'
    }
  ];

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
              Infrastructure Showcase
            </span>
            <h1 className="font-serif text-4xl md:text-6xl font-bold tracking-tight mb-6">
              DevOps Visuals & Architectures.
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Visual archive of cloud architectures, CI/CD pipeline runs, and monitoring dashboards.
            </p>
          </motion.div>
        </div>

        {/* Gallery Grid */}
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {artworks.map((art, index) => (
              <motion.div
                key={art.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => setSelectedImage(art)}
                className="group relative aspect-[4/5] rounded-3xl overflow-hidden bg-muted cursor-pointer border border-border/80 shadow-sm hover:shadow-2xl transition-all duration-500"
              >
                <img
                  src={art.image}
                  alt={art.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-violet-950/90 via-violet-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8 text-white">
                  <span className="text-xs font-mono text-violet-300 mb-1">{art.year}</span>
                  <h3 className="font-serif text-2xl font-bold mb-2">{art.title}</h3>
                  <p className="text-sm text-violet-200 line-clamp-2">{art.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
              className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-6 md:p-12"
            >
              <div 
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-4xl w-full bg-card rounded-3xl overflow-hidden border border-border/80 shadow-2xl flex flex-col md:flex-row"
              >
                <button
                  onClick={() => setSelectedImage(null)}
                  aria-label="Close modal"
                  className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm border border-border flex items-center justify-center text-foreground hover:bg-violet-600 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="md:w-3/5 bg-black">
                  <img
                    src={selectedImage.image}
                    alt={selectedImage.title}
                    className="w-full h-full object-cover max-h-[70vh] md:max-h-[80vh]"
                  />
                </div>
                <div className="md:w-2/5 p-8 flex flex-col justify-between bg-card">
                  <div>
                    <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-secondary text-violet-600 dark:text-violet-400 font-semibold mb-4 inline-block">
                      {selectedImage.year}
                    </span>
                    <h2 className="font-serif text-3xl font-bold mb-4">{selectedImage.title}</h2>
                    <p className="text-muted-foreground leading-relaxed text-sm mb-6">
                      {selectedImage.description}
                    </p>
                  </div>
                  <div className="pt-6 border-t border-border/60">
                    <p className="text-xs text-muted-foreground">DevOps Showcase • Kshitij Bhalerao</p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
};