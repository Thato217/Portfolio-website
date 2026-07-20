import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Mail,
  ExternalLink,
  Download,
  MapPin,
  Calendar,
  Code2,
  Database,
  Globe,
  Palette,
  Server,
  Smartphone,
} from "lucide-react"
import { GitHubIcon, LinkedInIcon } from "@/components/ui/icons"
import { ModeToggle } from "@/components/mode-toggle"

const projects = [
  {
    title: "Campus life project",
    description: "A clear website page the shows university product and services served to the learners.",
    tags: ["HTML", "CSS", "PHP", "JavaScript"],
    image: "/screenshot.jpeg",
    link: "https://github.com/Thato217/Campus-life",
    github: "https://github.com/Thato217/Campus-life",
  },
  {
    title: "DME Website",
    description: "Collaborative task of a website designed for customer looking to advertise their business.",
    tags: ["HTML", "CSS", "JavaScript", "PHP"],
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
    link: "https://github.com/Thato217/DME-website-with-backend-doc",
    github: "https://github.com/Thato217/DME-website-with-backend-doc",
  },
  {
    title: "Gender cop Website",
    description: "A scalable web application based on gender equity and gatherings .",
    tags: ["HTML", "CSS", "PHP", "JavaScript"],
    image: "/Gendercop.png",
    link: "https://github.com/Thato217/Gender-cop-website",
    github: "https://github.com/Thato217/Gender-cop-website",
  },
]

const skills = [
  { name: "React", icon: Code2 },
  { name: "TypeScript", icon: Code2 },
  { name: "Node.js", icon: Server },
  { name: "MySQL", icon: Database },
  { name: "HTML", icon: Palette },
  { name: "CSS", icon: Palette },
  { name: "JavaScript", icon: Code2 },
  { name: "PHP", icon: Palette },
]

const experience = [
  
  {
    title: "Software Developer",
    company: "Hosea Engineering Digital Solutions For Africa",
    period: "2025 - 2026",
    description: "Built scalable web applications for customers who are advertising their products or services.",
  },
  
]

export function App() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <a href="#" className="text-xl font-bold">TM</a>
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">About</a>
            <a href="#projects" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Projects</a>
            <a href="#experience" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Experience</a>
            <a href="#contact" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Contact</a>
          </div>
          <div className="flex items-center gap-2">
            <ModeToggle />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto flex min-h-screen flex-col items-center justify-center px-4 pt-16">
        <div className="flex flex-col items-center text-center">
          <Avatar className="h-32 w-32 mb-6">
            <AvatarImage src="/avatar.jpg" />
            <AvatarFallback>TM</AvatarFallback>
          </Avatar>
          <Badge variant="secondary" className="mb-4">Available for new projects</Badge>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-4">
            THATO MASHILOANE
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mb-8">
            Software Developer crafting beautiful, performant web experiences with modern technologies
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" asChild>
              <a href="#contact">Get in Touch</a>
            </Button>
            <Button variant="outline" size="lg" asChild>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              <Download className="mr-2 h-4 w-4" />
              Resume
              </a>
            </Button>
          </div>
          <div className="flex gap-4 mt-8">
            <Button variant="ghost" size="icon" asChild>
              <a href="https://Thato217.com" target="_blank" rel="noopener noreferrer">
                <GitHubIcon className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="https://linkedin.com/in/thato-elvis-349536352" target="_blank" rel="noopener noreferrer">
                <LinkedInIcon className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="mailto:thatodays788@gmail.com">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
          <div className="max-w-3xl mx-auto">
            <Card>
              <CardContent className="pt-6">
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  I'm a passionate software developer with 1+ years of experience building web applications
                  that users love. I specialize in React, Node.js, and MySQL, HTML, CSS, JavaScript with a keen eye for design
                  and user experience.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  When I'm not coding, you can find me contributing to open-source projects, writing technical
                  articles, or exploring new technologies. I believe in writing clean, maintainable code
                  and creating software that makes a real impact.
                </p>
                <Separator className="mb-8" />
                <h3 className="text-lg font-semibold mb-4">Skills & Technologies</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {skills.map((skill) => (
                    <div key={skill.name} className="flex items-center gap-2 text-sm skill-hover">
                      <skill.icon className="h-4 w-4 text-primary" />
                      {skill.name}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Projects</h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            A selection of my recent work showcasing full-stack development, API design, and modern UI/UX
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden group project-card-hover">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    {project.title}
                    <div className="flex
                    
                    
                    
                    
                    
                    
                    
                    
                     gap-2">
                      <Button variant="ghost" size="icon" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <GitHubIcon className="h-4 w-4" />
                        </a>
                      </Button>
                      <Button variant="ghost" size="icon" asChild>
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">{tag}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Experience</h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            My professional journey building impactful software
          </p>
          <div className="max-w-3xl mx-auto space-y-6">
            {experience.map((exp, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <div>
                      <CardTitle>{exp.title}</CardTitle>
                      <CardDescription className="flex items-center gap-2 mt-1">
                        <span className="font-medium text-foreground">{exp.company}</span>
                      </CardDescription>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {exp.period}
                      </span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{exp.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Get in Touch</h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          <div className="max-w-xl mx-auto">
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 rounded-lg bg-muted">
                    <Mail className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-sm font-medium">Email</p>
                      <a href="mailto:thatodays788@gmail.com" className="text-muted-foreground hover:text-foreground transition-colors">
                        thatodays788@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 rounded-lg bg-muted">
                    <MapPin className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-sm font-medium">Location</p>
                      <p className="text-muted-foreground">South Africa,Polokwane</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 rounded-lg bg-muted">
                    <LinkedInIcon className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-sm font-medium">LinkedIn</p>
                      <a href="https://linkedin.com/in/thato-elvis-349536352" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                        linkedin.com/in/thato-elvis-349536352
                      </a>
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <Button className="w-full" size="lg" asChild>
                    <a href="mailto:thatodays788@gmail.com">
                      <Mail className="mr-2 h-4 w-4" />
                      Send me an email
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-muted-foreground">
            Built with React, Vite, and shadcn/ui @ Thato 2026
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
