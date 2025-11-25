import { motion } from "framer-motion"
import { useState } from "react"

export default function Projects() {
  const projects = [
    {
      image: "/Screenshot 2025-11-14 005320.png",
      title: "Expense Tracker",
      description:
        "A simple, elegant, and functional Expense Tracker App built with React.js, designed to help users manage and analyze their daily spending efficiently.",
      tags: ["Javascript", "CSS", "HTML"],
      url: "https://react-js-six.vercel.app/",
    },
    {
      image: "/Screenshot 2025-11-14 011146.png",
      title: "Portfolio Website",
      description: "Portfolio website that gives information about skills, projects, contact, etc.",
      tags: ["Javascript", "HTML", "CSS", "Typescript"],
      url: "https://dr-favour-portfolio.vercel.app/",
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
        className="transition-transform"
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
      {/* === Background Glows === */}
      <motion.div
        aria-hidden
        className="absolute top-10 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "rgba(0,229,204,0.25)" }}
        animate={{ scale: [1, 1.03, 1], opacity: [0.65, 0.35, 0.65] }}
        transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="absolute bottom-20 right-10 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: "rgba(107,207,255,0.15)" }}
        animate={{ scale: [1, 1.02, 1], opacity: [0.55, 0.25, 0.55] }}
        transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 0.4 }}
      />
      <motion.div
        aria-hidden
        className="absolute top-1/3 left-10 w-[350px] h-[350px] rounded-full pointer-events-none"
        style={{ background: "rgba(179,102,255,0.15)" }}
        animate={{ scale: [1, 1.04, 1], opacity: [0.5, 0.2, 0.5] }}
        transition={{ duration: 6.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 0.8 }}
      />

      {/* === Radial Vignette Overlay === */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(1200px 600px at 50% 30%, rgba(0,0,0,0.06), transparent 30%)",
          mixBlendMode: "overlay",
        }}
      />

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
        {projects.map((project, index) => (
          <motion.div key={project.title} variants={item} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <TiltCard>
              <div className="group bg-card border border-border rounded-lg p-8 relative overflow-hidden hover:shadow-xl transition-all cursor-pointer">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 rounded-lg bg-gradient-to-br from-accent/20 via-transparent to-accent/5 blur-xl transition-opacity"></div>
                <div className="absolute top-0 left-0 w-full h-[2px] bg-accent/40 blur-[2px] group-hover:bg-accent/80 transition-all"></div>

                <div className="h-56 mb-8 flex items-center justify-center rounded-lg border border-accent/20 overflow-hidden group-hover:scale-105 transition-transform">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <h3 className="text-foreground font-bold text-lg mb-4 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-foreground/70 text-sm mb-6 leading-relaxed">{project.description}</p>

                <motion.div className="flex flex-wrap gap-3">
                  {project.tags.map((tag, i) => (
                    <motion.span
                      key={tag}
                      variants={{
                        hidden: { opacity: 0, y: 10 },
                        show: { opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.1 } },
                      }}
                      className="px-2 py-1 bg-accent/10 text-accent/80 rounded text-xs border border-accent/20"
                    >
                      {tag}
                    </motion.span>
                  ))}
                  <motion.a
                    variants={item}
                    href={project.url}
                    target="_blank"
                    className="px-2 py-1 border border-accent text-accent rounded-lg font-medium text-sm hover:bg-accent/10 transition-colors"
                    rel="noreferrer"
                  >
                    View Project
                  </motion.a>
                </motion.div>
              </div>
            </TiltCard>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}
