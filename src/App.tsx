/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  ArrowRight, 
  Github, 
  Linkedin, 
  Mail, 
  MessageSquare, 
  Rocket, 
  Sparkle, 
  Layout, 
  Code2, 
  Monitor, 
  ExternalLink 
} from "lucide-react";

const navLinks = [
  { name: "Works", href: "#projects" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

const projects = [
  {
    title: "NEON SYNTH",
    category: "Generative Audio Interface",
    year: "2024",
    image: "https://picsum.photos/seed/synth/800/600",
  },
  {
    title: "ETHER DASH",
    category: "Web3 Analytics Dashboard",
    year: "2023",
    image: "https://picsum.photos/seed/web3/800/600",
  }
];

const skills = [
  {
    title: "HTML & CSS",
    description: "Estrutura semântica imaculada e estilização com profundo conhecimento de CSS, Flexbox, e Grid Layout.",
    icon: <Code2 className="w-5 h-5 text-neutral-400" />
  },
  {
    title: "SaaS Avançado",
    description: "Domínio nas lógicas de construção de arquiteturas em nuvem e software as a service robusto.",
    icon: <Rocket className="w-5 h-5 text-neutral-400" />
  },
  {
    title: "JavaScript",
    description: "Vanilla JS polido para criações interativas, manipulação do DOM e integrações assíncronas.",
    icon: <Monitor className="w-5 h-5 text-neutral-400" />
  },
  {
    title: "Web Design",
    description: "Noção avançada de UI/UX, micro-interações, acessibilidade e mobile-first design.",
    icon: <Layout className="w-5 h-5 text-neutral-400" />
  }
];

export default function App() {
  return (
    <div className="min-h-screen relative selection:bg-blue-500/30 overflow-x-hidden">
      <div className="gradient-overlay" />
      
      <div className="immersive-grid">
        {/* Navigation */}
        <nav className="h-[80px] px-10 flex items-center justify-between immersive-border-b relative z-10">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-[18px] font-bold tracking-[4px] uppercase"
          >
            Samuel<span className="text-white/20">/24</span>
          </motion.div>
          
          <ul className="flex gap-8">
            {navLinks.map((link, i) => (
              <motion.li 
                key={link.name}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: i * 0.1 }}
              >
                <a 
                  href={link.href} 
                  className="text-[12px] uppercase tracking-[2px] text-white/50 hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              </motion.li>
            ))}
          </ul>
        </nav>

        <main className="relative z-10">
          {/* Hero Section */}
          <section className="flex flex-col md:flex-row items-center min-h-[calc(100vh-160px)] px-10 gap-12">
            <div className="flex-1 py-20">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="inline-flex items-center gap-2 mb-8 bg-white/5 border border-white/10 px-3 py-1 rounded-full text-[10px] uppercase tracking-[1px] text-white/60"
              >
                <div className="status-dot-glow" />
                Available for projects
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="hero-title-immersive"
              >
                SAMUEL<br />BARROS
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-[14px] leading-relaxed text-white/60 max-w-[400px] mb-12"
              >
                Senior Product Designer & Web Developer specializing in immersive interfaces and modular SaaS systems. Crafting digital artifacts for the next generation.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex gap-4"
              >
                <a href="#projects" className="px-8 py-3 border border-white/20 rounded-full text-[12px] uppercase tracking-[1px] hover:bg-white hover:text-black transition-all">
                  Works
                </a>
                <a 
                  href="https://wa.me/message/F4ZGMVBPOM4UB1" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="px-8 py-3 border border-white/20 rounded-full text-[12px] uppercase tracking-[1px] hover:bg-white hover:text-black transition-all flex items-center gap-2"
                >
                  Contact <ArrowRight className="w-3 h-3" />
                </a>
              </motion.div>
            </div>

            {/* Projects Mini-Grid (Embedded in Hero side) */}
            <div id="projects" className="flex-1 w-full max-w-md">
              <div className="grid gap-5">
                {projects.map((project, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="glass-card p-6 flex justify-between items-center group cursor-pointer"
                  >
                    <div>
                      <h3 className="text-[18px] font-medium mb-1 uppercase">{project.title}</h3>
                      <p className="text-[12px] text-white/40">{project.category}</p>
                    </div>
                    <div className="font-mono text-[11px] text-blue-500/80 tracking-widest">{project.year}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* About & Skills (Immersive Layout) */}
          <section id="about" className="py-32 px-10 border-t border-immersive-line">
            <h2 className="text-[12px] uppercase tracking-[4px] text-blue-500/80 mb-12">/ About</h2>
            <div className="grid md:grid-cols-2 gap-20">
              <div className="text-[24px] leading-snug font-light text-white/90">
                Especialista em construir soluções digitais que não são apenas esteticamente perfeitas, mas altamente funcionais e orientadas para conversão.
                <p className="mt-8 text-[14px] text-white/50 leading-relaxed max-w-md">
                  Com forte domínio sobre SaaS avançado e tecnologias web modernas, dedico-me a estruturar códigos escaláveis, limpos e otimizados.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-px bg-immersive-line border border-immersive-line">
                {skills.map((skill, i) => (
                  <div key={i} className="bg-immersive-bg p-8 flex flex-col gap-4">
                    <div className="opacity-40">{skill.icon}</div>
                    <h4 className="text-[14px] font-medium uppercase tracking-[1px]">{skill.title}</h4>
                    <p className="text-[11px] text-white/40 leading-relaxed">{skill.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="py-32 px-10 border-t border-immersive-line mb-32">
            <div className="max-w-xl">
              <h2 className="text-[12px] uppercase tracking-[4px] text-blue-500/80 mb-8">/ Inquiry</h2>
              <h3 className="text-[64px] font-light leading-[1] tracking-[-2px] mb-12">
                READY TO <br />CREATE?
              </h3>
              <div className="flex flex-wrap gap-6">
                <a 
                  href="https://wa.me/message/F4ZGMVBPOM4UB1" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-2 text-[12px] uppercase tracking-[2px] text-white/60 hover:text-white transition-colors group"
                >
                  <MessageSquare className="w-4 h-4" /> WhatsApp <ArrowRight className="w-3 h-3 -rotate-45 opacity-0 group-hover:opacity-100 transition-all" />
                </a>
                <a href="#" className="flex items-center gap-2 text-[12px] uppercase tracking-[2px] text-white/60 hover:text-white transition-colors group">
                  <Mail className="w-4 h-4" /> Email <ArrowRight className="w-3 h-3 -rotate-45 opacity-0 group-hover:opacity-100 transition-all" />
                </a>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="h-[80px] px-10 flex items-center justify-between immersive-border-t relative z-10 text-[11px] text-white/30 tracking-[1px] uppercase">
          <div>&copy; 2024 SELECTED WORKS</div>
          <div className="flex items-center gap-2">
            <div className="status-dot-glow" />
            AVAILABLE FOR NEW PROJECTS
          </div>
          <div className="hidden md:block">Samuel Santos Barros / DEV</div>
        </footer>
      </div>
    </div>
  );
}
