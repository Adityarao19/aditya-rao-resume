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
  Zap
} from "lucide-react";
import adityaAvatar from "@/assets/aditya-avatar.jpg";

const Resume = () => {
  const skills = {
    frontend: ["React", "Next.js", "Tailwind", "TypeScript", "HTML", "CSS"],
    backend: ["Flask", "Express", "Python", "REST APIs"],
    mobile: ["Flutter", "React Native"],
    tools: ["Vercel", "Firebase", "PythonAnywhere", "Git"],
    analytics: ["Pandas", "NumPy", "Scikit-learn", "Power BI"]
  };

  const projects = [
    {
      title: "Live Network Monitor Dashboard",
      tech: "Flask + Scapy + JS",
      description: "Real-time packet monitoring tool with CSV logging and alerts.",
      github: "https://github.com/Adityarao19/live-network-monitor",
      icon: Shield
    },
    {
      title: "SpamGuard AI",
      tech: "React + TypeScript + Python ML",
      description: "Stylish spam detection frontend with a simulated AI backend.",
      github: "https://github.com/Adityarao19/ai-spam-detection",
      icon: Brain
    },
    {
      title: "GreenDestination Tourism Dashboard",
      tech: "Power BI",
      description: "Interactive data storytelling using tourism CSV dataset.",
      icon: TrendingUp
    },
    {
      title: "Personal Portfolio Website",
      tech: "React + Tailwind",
      description: "A clean, fast, mobile-friendly showcase of all skills.",
      github: "https://adityaraoportfolio.vercel.app",
      icon: Code2
    }
  ];

  const certifications = [
    "Power BI – Unified Mentor",
    "Python for Data Science – NPTEL",
    "Web Development Bootcamp – Udemy",
    "Internship – Unified Mentor (Data Science)"
  ];

  const expertiseAreas = [
    { icon: Code2, title: "Full Stack App Development" },
    { icon: Smartphone, title: "Mobile App Development" },
    { icon: Shield, title: "Cybersecurity Dashboards" },
    { icon: Database, title: "Real-time APIs" },
    { icon: Brain, title: "AI/ML Integration" },
    { icon: Zap, title: "Freelance Project Delivery" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-hero">
        <div className="absolute inset-0 bg-tech-dark/80"></div>
        <div className="relative max-w-6xl mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <div className="flex items-center gap-4 mb-6">
                <img 
                  src={adityaAvatar} 
                  alt="Aditya Rao" 
                  className="w-24 h-24 rounded-full shadow-glow border-2 border-cyber-cyan"
                />
                <div>
                  <h1 className="text-5xl font-bold text-foreground mb-2">
                    Aditya Rao
                  </h1>
                  <p className="text-xl text-cyber-cyan">Freelance Developer</p>
                </div>
              </div>
              
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Creative and performance-oriented freelance developer with expertise in building 
                custom full stack web apps, dashboards, and secure backend systems. Adept in React, 
                Flask, TypeScript, and Tailwind. Currently learning Flutter and React Native to 
                expand into app development.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <Button className="bg-primary hover:bg-primary/90 shadow-tech">
                  <Mail className="w-4 h-4 mr-2" />
                  Hire Me
                </Button>
                <Button variant="outline" className="border-cyber-cyan text-cyber-cyan hover:bg-cyber-cyan hover:text-tech-dark">
                  <Rocket className="w-4 h-4 mr-2" />
                  Let's Collaborate
                </Button>
                <Button variant="secondary" className="bg-tech-gray hover:bg-tech-gray/80">
                  <Download className="w-4 h-4 mr-2" />
                  Download Resume
                </Button>
              </div>

              <div className="flex items-center gap-6">
                <a 
                  href="mailto:adityarao1885@gmail.com" 
                  className="flex items-center gap-2 text-muted-foreground hover:text-cyber-cyan transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  adityarao1885@gmail.com
                </a>
                <a 
                  href="https://github.com/Adityarao19" 
                  className="flex items-center gap-2 text-muted-foreground hover:text-cyber-cyan transition-colors"
                >
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
                <a 
                  href="https://t.me/AdityaRao" 
                  className="flex items-center gap-2 text-muted-foreground hover:text-cyber-cyan transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  Telegram
                </a>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 animate-slide-in">
              {expertiseAreas.map((area, index) => (
                <Card key={index} className="bg-card/50 border-tech-gray hover:border-cyber-cyan transition-colors">
                  <CardContent className="p-6 text-center">
                    <area.icon className="w-8 h-8 text-cyber-cyan mx-auto mb-3" />
                    <p className="text-sm font-medium">{area.title}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-16 space-y-16">
        
        {/* Contact Info */}
        <Card className="bg-gradient-dark border-tech-gray">
          <CardContent className="p-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-bold text-cyber-cyan mb-4">Contact Information</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-cyber-cyan" />
                    <span>adityarao1885@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <ExternalLink className="w-4 h-4 text-cyber-cyan" />
                    <a href="https://adityaraoportfolio.vercel.app" className="text-primary hover:underline">
                      Portfolio Website
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-4 h-4 text-cyber-cyan" />
                    <span>India</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-cyber-cyan mb-4">Education</h3>
                <div className="space-y-2">
                  <p className="font-semibold">B.Tech CSE (AI & ML)</p>
                  <p className="text-muted-foreground">Noida International University (2023–2027)</p>
                  <p className="text-sm text-tech-light">
                    Specializations: AI, ML, Network Security, Web Development
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tech Stack */}
        <section>
          <h2 className="text-3xl font-bold text-cyber-cyan mb-8 text-center">Tech Stack</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(skills).map(([category, techs]) => (
              <Card key={category} className="bg-card border-tech-gray hover:border-cyber-cyan transition-all hover:shadow-tech">
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-4 capitalize text-primary">
                    {category === 'analytics' ? 'ML/Analytics' : category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {techs.map((tech) => (
                      <Badge 
                        key={tech} 
                        variant="secondary" 
                        className="bg-tech-gray text-foreground hover:bg-cyber-cyan hover:text-tech-dark transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section>
          <h2 className="text-3xl font-bold text-cyber-cyan mb-8 text-center">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <Card key={index} className="bg-card border-tech-gray hover:border-cyber-cyan transition-all hover:shadow-tech group">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <project.icon className="w-8 h-8 text-cyber-cyan" />
                    {project.github && (
                      <a 
                        href={project.github} 
                        className="text-muted-foreground hover:text-cyber-cyan transition-colors"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-cyber-cyan transition-colors">
                    {project.title}
                  </h3>
                  <Badge variant="outline" className="mb-3 border-tech-blue text-tech-blue">
                    {project.tech}
                  </Badge>
                  <p className="text-muted-foreground">{project.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Certifications */}
        <section>
          <h2 className="text-3xl font-bold text-cyber-cyan mb-8 text-center">Certifications</h2>
          <Card className="bg-gradient-dark border-tech-gray">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Award className="w-5 h-5 text-cyber-cyan" />
                    <span>{cert}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Skills Summary */}
        <section>
          <h2 className="text-3xl font-bold text-cyber-cyan mb-8 text-center">Core Skills</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Full Stack App Development",
              "UI/UX Tailwind",
              "Cybersecurity Dashboards", 
              "Freelance Project Delivery",
              "Real-time APIs",
              "Resume/CV Builders (GPT/AI-based)",
              "Mobile App Development"
            ].map((skill) => (
              <Badge 
                key={skill} 
                className="px-4 py-2 bg-primary hover:bg-primary/80 text-primary-foreground"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </section>

        {/* CTA Footer */}
        <div className="text-center bg-gradient-hero rounded-lg p-12">
          <div className="relative">
            <div className="absolute inset-0 bg-tech-dark/80 rounded-lg"></div>
            <div className="relative">
              <h2 className="text-3xl font-bold mb-4">Ready to Build Something Amazing?</h2>
              <p className="text-xl text-muted-foreground mb-8">
                "Always shipping. Always building. Always leveling up."
              </p>
              <div className="flex justify-center gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 shadow-tech animate-glow-pulse">
                  <Mail className="w-5 h-5 mr-2" />
                  Get In Touch
                </Button>
                <Button size="lg" variant="outline" className="border-cyber-cyan text-cyber-cyan hover:bg-cyber-cyan hover:text-tech-dark">
                  <ExternalLink className="w-5 h-5 mr-2" />
                  View Portfolio
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;