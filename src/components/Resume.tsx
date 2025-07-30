import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Mail, 
  Github, 
  ExternalLink, 
  MapPin, 
  Download, 
  MessageCircle,
  Code2,
  Database,
  Smartphone,
  Brain,
  Shield,
  TrendingUp,
  Award,
  Rocket,
  Zap,
  Globe,
  BarChart3,
  Bot,
  ShieldCheck
} from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const Resume = () => {
  const skills = {
    frontend: ["React", "Next.js", "Tailwind CSS", "TypeScript", "HTML", "CSS"],
    backend: ["Python", "Flask", "Express.js", "REST APIs"],
    mobile: ["Flutter", "React Native"],
    tools: ["Git", "Firebase", "PythonAnywhere", "Vercel"],
    analytics: ["Power BI", "Pandas", "NumPy", "Scikit-learn"]
  };

  const projects = [
    {
      title: "PhishNet – Real-Time Phishing URL Detector",
      tech: "Python • Flask • Scikit-learn • HTML/CSS",
      description: "Detects and flags phishing websites in real-time using a trained ML model. Users can input URLs and instantly get a safety verdict.",
      github: "https://phishnet-eight.vercel.app",
      icon: ShieldCheck
    },
    {
      title: "PathFinder AI Guide",
      tech: "React • Tailwind CSS • OpenAI API",
      description: "An AI-powered career counselor that helps students discover tech career paths based on their interests and goals.",
      github: "https://pathfinder-ai-guide-05.vercel.app",
      icon: Bot
    },
    {
      title: "SpamGuard AI",
      tech: "React • TypeScript • Python ML",
      description: "Stylish and intuitive frontend for spam detection, backed by a simulated ML engine.",
      github: "https://github.com/Adityarao19",
      icon: Brain
    },
    {
      title: "Personal Portfolio Website",
      tech: "React • Tailwind CSS",
      description: "Responsive developer portfolio featuring all projects, skills, and contact info.",
      github: "https://adityaraoportfolio.vercel.app",
      icon: Globe
    }
  ];

  const certifications = [
    "Power BI – Unified Mentor",
    "Python for Data Science – NPTEL", 
    "Web Development Bootcamp – Udemy",
    "Data Science Internship – Unified Mentor",
    "Generative AI – Databricks",
    "RHCSA – Cywer Learning"
  ];

  const expertiseAreas = [
    { icon: Code2, title: "Full Stack Web Development" },
    { icon: Smartphone, title: "Mobile App Development (Flutter, React Native)" },
    { icon: Database, title: "Real-time API Integrations" },
    { icon: Brain, title: "AI/ML Integration in Web Apps" },
    { icon: Shield, title: "Cybersecurity & Monitoring Tools" },
    { icon: Zap, title: "UI/UX Design" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Theme Toggle - Fixed Position */}
      <div className="fixed top-6 right-6 z-50 print-hidden">
        <ThemeToggle />
      </div>
      
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-hero print-keep-gradient print-keep-colors">
        <div className="absolute inset-0 bg-tech-dark/80 print-hidden"></div>
        <div className="relative max-w-6xl mx-auto px-6 py-12 print-compact">
          <div className="grid lg:grid-cols-3 gap-8 items-start print:grid-cols-1">
            <div className="lg:col-span-2 animate-fade-in">
              <div className="flex items-center gap-4 mb-4 print:mb-2">
                <img 
                  src="/lovable-uploads/343df987-4bce-4453-96a6-45bea4e4a186.png" 
                  alt="Aditya Rao" 
                  className="w-20 h-20 rounded-full shadow-glow border-2 border-cyber-cyan print:w-16 print:h-16 print-keep-colors"
                />
                <div>
                  <h1 className="text-4xl font-bold text-foreground mb-1 print:text-2xl">
                    Aditya Rao
                  </h1>
                  <p className="text-lg text-cyber-cyan print:text-base print-keep-colors">Freelance Developer</p>
                </div>
              </div>
              
              <p className="text-base text-muted-foreground mb-6 leading-relaxed print:text-sm print:mb-3 print-keep-colors">
                Creative and performance-driven freelance developer specializing in full stack web development, 
                data dashboards, and secure backend systems. Passionate about building scalable apps with 
                real-world AI/ML integration. Currently expanding into mobile app development using Flutter and React Native.
              </p>

              <div className="flex flex-wrap gap-3 mb-6 print-hidden">
                <Button 
                  className="bg-primary hover:bg-primary/90 shadow-tech"
                  asChild
                  aria-label="Send email to Aditya Rao"
                >
                  <a href="mailto:adityarao1885@gmail.com">
                    <Mail className="w-4 h-4 mr-2" />
                    Hire Me
                  </a>
                </Button>
                <Button variant="outline" className="border-cyber-cyan text-cyber-cyan hover:bg-cyber-cyan hover:text-tech-dark" aria-label="Contact for collaboration">
                  <Rocket className="w-4 h-4 mr-2" />
                  Let&apos;s Collaborate
                </Button>
                <Button 
                  variant="secondary" 
                  className="bg-tech-gray hover:bg-tech-gray/80"
                  onClick={() => window.print()}
                  aria-label="Download resume as PDF"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download Resume
                </Button>
              </div>

              <div className="flex items-center gap-4 text-sm print:text-xs">
                <a 
                  href="mailto:adityarao1885@gmail.com" 
                  className="flex items-center gap-2 text-muted-foreground hover:text-cyber-cyan transition-colors print:text-black"
                >
                  <Mail className="w-3 h-3" />
                  adityarao1885@gmail.com
                </a>
                <a 
                  href="https://github.com/Adityarao19" 
                  className="flex items-center gap-2 text-muted-foreground hover:text-cyber-cyan transition-colors print:text-black"
                >
                  <Github className="w-3 h-3" />
                  GitHub
                </a>
                <a 
                  href="https://t.me/adityarao19" 
                  className="flex items-center gap-2 text-muted-foreground hover:text-cyber-cyan transition-colors print:text-black"
                >
                  <MessageCircle className="w-3 h-3" />
                  Aditya Rao
                </a>
              </div>
            </div>

            {/* Education & Contact - Compact */}
            <div className="space-y-4 print:space-y-2">
              <div>
                <h3 className="text-lg font-bold text-cyber-cyan mb-2 print:text-base print:text-black">Education</h3>
                <div className="text-sm print:text-xs">
                  <p className="font-semibold">B.Tech CSE (AI & ML)</p>
                  <p className="text-muted-foreground print:text-black">Noida International University (2023–2027)</p>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-cyber-cyan mb-2 print:text-base print:text-black">Location</h3>
                <div className="flex items-center gap-2 text-sm print:text-xs">
                  <MapPin className="w-3 h-3" />
                  <span>India</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content - Compact Layout */}
      <div className="max-w-6xl mx-auto px-6 py-8 space-y-8 print-compact print:space-y-4">
        
        {/* Tech Stack - Compact Grid */}
        <section className="print-section">
          <h2 className="text-2xl font-bold text-cyber-cyan mb-4 text-center print:text-lg print:text-black print:text-left">Tech Stack</h2>
          <div className="grid md:grid-cols-3 gap-4 print:grid-cols-2 print:gap-2">
            {Object.entries(skills).map(([category, techs]) => (
              <div key={category} className="bg-card border border-tech-gray p-4 rounded-lg print:p-2 print-no-shadow print:border print:border-gray-300">
                <h3 className="font-bold text-sm mb-2 capitalize text-primary print:text-black">
                  {category === 'analytics' ? 'ML/Analytics' : category}
                </h3>
                <div className="flex flex-wrap gap-1">
                  {techs.map((tech) => (
                    <span 
                      key={tech} 
                      className="text-xs px-2 py-1 bg-tech-gray text-foreground rounded print:bg-gray-100 print:text-black print:border print:border-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects - Compact Grid */}
        <section className="print-section">
          <h2 className="text-2xl font-bold text-cyber-cyan mb-4 text-center print:text-lg print:text-black print:text-left">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-4 print:gap-2">
            {projects.map((project, index) => (
              <div key={index} className="bg-card border border-tech-gray p-4 rounded-lg print:p-2 print-no-shadow print:border print:border-gray-300">
                <div className="flex items-start justify-between mb-2">
                  <project.icon className="w-6 h-6 text-cyber-cyan print:w-4 print:h-4 print:text-black" />
                  {project.github && (
                    <a 
                      href={project.github} 
                      className="text-muted-foreground hover:text-cyber-cyan transition-colors print:text-black print:text-xs"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                </div>
                <h3 className="text-lg font-bold mb-1 print:text-sm">
                  {project.title}
                </h3>
                <div className="text-xs px-2 py-1 bg-tech-blue/20 text-tech-blue rounded mb-2 inline-block print:bg-gray-100 print:text-black print:border">
                  {project.tech}
                </div>
                <p className="text-muted-foreground text-sm print:text-xs print:text-black">{project.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Skills & Certifications - Two Column */}
        <div className="grid md:grid-cols-2 gap-6 print:gap-4">
          <section className="print-section">
            <h2 className="text-2xl font-bold text-cyber-cyan mb-4 print:text-lg print:text-black">Core Skills</h2>
            <div className="flex flex-wrap gap-2">
              {[
                "Full Stack Web Development",
                "Mobile App Development (Flutter, React Native)",
                "Real-time API Integrations", 
                "UI/UX Design",
                "AI/ML Integration in Web Apps",
                "Cybersecurity & Monitoring Tools"
              ].map((skill) => (
                <span 
                  key={skill} 
                  className="text-xs px-3 py-1 bg-primary text-primary-foreground rounded print:bg-gray-100 print:text-black print:border"
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>

          <section className="print-section">
            <h2 className="text-2xl font-bold text-cyber-cyan mb-4 print:text-lg print:text-black">Certifications</h2>
            <div className="space-y-2">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-center gap-2 text-sm print:text-xs">
                  <Award className="w-4 h-4 text-cyber-cyan print:w-3 print:h-3 print:text-black" />
                  <span className="print:text-black">{cert}</span>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* CTA Footer - Hidden in Print */}
        <div className="text-center bg-gradient-hero rounded-lg p-8 print-hidden">
          <div className="relative">
            <div className="absolute inset-0 bg-tech-dark/80 rounded-lg"></div>
            <div className="relative">
              <h2 className="text-2xl font-bold mb-3">Ready to Build Something Amazing?</h2>
              <p className="text-lg text-muted-foreground mb-6">
                &quot;Always shipping. Always building. Always leveling up.&quot;
              </p>
              <div className="flex justify-center gap-4">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 shadow-tech animate-glow-pulse"
                  asChild
                >
                  <a href="mailto:adityarao1885@gmail.com">
                    <Mail className="w-5 h-5 mr-2" />
                    Get In Touch
                  </a>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-cyber-cyan text-cyber-cyan hover:bg-cyber-cyan hover:text-tech-dark"
                  asChild
                >
                  <a href="https://adityaraoportfolio.vercel.app/" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-5 h-5 mr-2" />
                    View Portfolio
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Print Footer */}
        <div className="hidden print:block text-center text-sm border-t pt-2 mt-4">
          <p>&quot;Always shipping. Always building. Always leveling up.&quot;</p>
        </div>
      </div>
    </div>
  );
};

export default Resume;