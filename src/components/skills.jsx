
import { motion } from "framer-motion"
import { useState } from "react"

export default function Skills() {
  const skillCategories = [
    { title: "AI & Machine Learning", skills: ["Generative AI", "Python"], icon: "🤖" },
    { title: "Frontend Development", skills: ["React.js", "JavaScript", "Tailwind CSS", "CSS"], icon: "🎨" },
    { title: "Backend Development", skills: ["FastAPI", "Python", "MySQL"], icon: "⚙️" },
  ]

  // 3D hover tilt effect
  function TiltCard({ children }) {
    const [transform, setTransform] = useState("perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)")

    const handleTilt = (e) => {
      const card = e.currentTarget
      const rect = card.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      const centerX = rect.width / 2
      const centerY = rect.height / 2

      const rotateX = ((y - centerY) / centerY) * -6
      const rotateY = ((x - centerX) / centerX) * 6

      setTransform(`perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`)
    }

    const resetTilt = () => {
      setTransform("perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)")
    }

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

  // Motion variants
  const container = {
    hidden: { opacity: 0, y: 12 },
    show: { opacity: 1, y: 0, transition: { staggerChildren: 0.15, when: "beforeChildren" } },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  }

  const bullet = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  }

  return (
    <motion.section
      id="skills"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={container}
      className="relative w-full flex flex-col justify-center px-4 sm:px-8 md:px-16 lg:px-24 py-32 sm:py-40 md:py-52 border-b border-border isolate"
    >
      {/* Section Header */}
      <motion.div variants={item} className="mb-16">
        <h3 className="text-accent font-mono text-sm mb-4 font-bold tracking-widest">SKILLS & EXPERTISE</h3>
        <div className="flex gap-1 items-center mb-6">
          <div className="w-1 h-8 bg-accent rounded"></div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">Technical Skills</h2>
        </div>
      </motion.div>

      {/* Skills Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 lg:gap-16 mb-20">
        {skillCategories.map((category, index) => (
          <motion.div
            key={category.title}
            variants={item}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            viewport={{ once: true }}
          >
            <TiltCard>
              <div className="bg-card border border-border rounded-lg p-8 group relative">
                {/* Glow overlay */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 rounded-lg bg-gradient-to-br from-accent/20 via-transparent to-accent/5 blur-xl pointer-events-none"></div>
                {/* Neon top line */}
                <div className="absolute top-0 left-0 w-full h-[2px] bg-accent/40 blur-[2px] group-hover:bg-accent/80 transition-all"></div>

                <div className="text-4xl mb-6 relative z-10 group-hover:scale-125 transition-transform">
                  {category.icon}
                </div>
                <h4 className="text-accent font-bold mb-6 relative z-10">{category.title}</h4>

                <div className="flex flex-wrap gap-3 relative z-10">
                  {category.skills.map((skill, i) => (
                    <motion.span
                      key={skill}
                      variants={bullet}
                      className="px-3 py-1 bg-accent/20 text-accent rounded-full text-xs font-medium border border-accent/30 backdrop-blur-sm"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </TiltCard>
          </motion.div>
        ))}
      </div>

      {/* Bottom Highlight / Description */}
      <motion.div
        variants={item}
        className="bg-gradient-to-r from-accent/10 to-transparent rounded-lg p-8 md:p-10 border border-accent/20 backdrop-blur-md"
      >
        <motion.p variants={bullet} className="text-foreground/80 text-sm leading-relaxed">
          <span className="text-accent font-mono">{"// "}</span>
          I'm continuously expanding my skill set and keeping up with new advancements in AI, web technologies, and
          software engineering.
        </motion.p>
      </motion.div>
    </motion.section>
  )
}
