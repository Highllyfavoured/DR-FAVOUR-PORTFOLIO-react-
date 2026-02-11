import { motion } from "framer-motion"
import { useState } from "react"

export default function Projects() {
  const projects = [
    {
      image: "/Screenshot 2025-12-07 013901.png",
      title: "HealthAtlas",
      description:
        "HealthAtlas is a multilingual AI-powered health triage assistant built on N-ATLAS, delivering instant, culturally relevant medical guidance in English, Yoruba, Igbo, Hausa, and Pidgin. Powered by a rule-based clinical safety engine, it provides safe symptom assessment and next steps. HealthAtlas proudly made the Top 10 of the AWARRI 2025 Hackathon.",
      tags: ["Javascript", "CSS", "Typescript, Python", "AI & LLM Integration", "FastApi", "supabase"],
      url: "https://health-atlas-five.vercel.app/",
    },
    {
      image: "/Screenshot 2026-02-11 100836.png",
      title: "Portfolio Website",
      description: "The Modern Portfolio Website is a fully responsive, interactive personal website built using HTML, CSS (Grid + Flexbox), and JavaScript. It showcases a developer’s profile, skills, projects, and contact information using modern UI/UX principles and advanced CSS features. The project focuses on combining clean design with technical depth, demonstrating real-world frontend development skills.",
      tags: ["Javascript", "HTML", "CSS", "Typescript"],
      url: "https://drfavour.vercel.app/",
    },
    {
      image: "/Screenshot 2026-02-11 095959.png",
      title: "Noodules-Educational 3D Parasite Learning App",
      description: "Noodules is a cutting-edge educational platform designed to revolutionize how biomedical students learn parasitology. With immersive 3D visualization, intelligent learning tools, and collaborative features, Noodules makes complex parasite biology intuitive and engaging.",
      tags: ["Javascript", "HTML", "CSS", "Typescript"],
      url: "https://noodules-j4jv.vercel.app/",
    },
    {
      image: "/Screenshot 2025-11-14 005320.png",
      title: "Expense Tracker",
      description:
        "A simple, elegant, and functional Expense Tracker App built with React.js, designed to help users manage and analyze their daily spending efficiently.",
      tags: ["Javascript", "CSS", "HTML"],
      url: "https://react-js-six.vercel.app/",
    },
    {
      image: "Screenshot 2025-11-28 131830.png",
      title: "AI HealthAssistant",
      description: "Portfolio website that gives information about skills, projects, contact, etc.",
      tags: ["AI & LLM Integration", "FastApi", "Javascript", "HTML", "CSS", "Python", "MySQL"],
      url: "https://health-assistance-frontend.vercel.app",
    },
    {
      image: "Screenshot 2025-11-14 023050.png",
      title: "Animal Blog",
      description: "Exploring the animal world.",
      tags: ["Javascript", "HTML", "CSS"],
      url: "http://dr-favour-portfolio-evm2.vercel.app/",
    },
    {
      image: "Screenshot 2025-11-14 013702.png",
      title: "Expense Tracker API",
      description:
        "The Expense Tracker API is a backend service built with FastAPI, designed to help users manage their expenses securely and efficiently.",
      tags: ["Python", "MySQL", "JWT"],
      url: "https://react-js-six.vercel.app/",
    },
  ]

  // 3D tilt effect
  function TiltCard({ children }) {
    const [transform, setTransform] = useState("perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)")

    const handleTilt = (e) => {
      const rect = e.currentTarget.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      const rotateX = ((y - rect.height / 2) / (rect.height / 2)) * -6
      const rotateY = ((x - rect.width / 2) / (rect.width / 2)) * 6
      setTransform(`perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`)
    }

    const resetTilt = () => setTransform("perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)")

    return (
      <motion.div
        onMouseMove={handleTilt}
        onMouseLeave={resetTilt}
        style={{ transform }}
        transition={{ type: "spring", stiffness: 150, damping: 20 }}
        className="transition-transform will-change-transform"
      >
        {children}
      </motion.div>
    )
  }

  const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.15 } } }
  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  }

  return (
    <motion.section
      id="projects"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={container}
      className="relative w-full flex flex-col justify-center px-4 sm:px-8 md:px-16 lg:px-24 py-32 sm:py-40 md:py-52 border-b border-border isolate"
    >
      {/* Background Glows and Radial Vignette remain same as your original code */}
      
      {/* === Header === */}
      <motion.div variants={item} className="mb-16 relative z-10">
        <h3 className="text-accent font-mono text-sm mb-4 font-bold tracking-widest">FEATURED WORK</h3>
        <div className="flex gap-1 items-center">
          <div className="w-1 h-8 bg-accent rounded"></div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">Projects & Portfolio</h2>
        </div>
      </motion.div>

      {/* === Projects Grid === */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 relative z-10">
        {projects.map((project) => (
          <motion.div key={project.title} variants={item}>
            <TiltCard>
              <div className="group bg-card border border-border rounded-lg p-8 relative overflow-hidden hover:shadow-xl transition-all">
                {/* Visual Overlays */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 rounded-lg bg-gradient-to-br from-accent/20 via-transparent to-accent/5 blur-xl transition-opacity"></div>
                <div className="absolute top-0 left-0 w-full h-[2px] bg-accent/40 blur-[2px] group-hover:bg-accent/80 transition-all"></div>

                {/* Project Image */}
                <div className="h-56 mb-8 flex items-center justify-center rounded-lg border border-accent/20 overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <h3 className="text-foreground font-bold text-lg mb-4 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-foreground/70 text-sm mb-6 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-accent/10 text-accent/80 rounded text-[10px] border border-accent/20 uppercase tracking-tighter"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  {/* FIXED BUTTON: Added z-index and stopPropagation */}
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()} 
                    className="relative z-20 px-4 py-2 border border-accent text-accent rounded-lg font-bold text-xs hover:bg-accent hover:text-primary transition-all duration-300"
                  >
                    VIEW PROJECT
                  </a>
                </div>
              </div>
            </TiltCard>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}