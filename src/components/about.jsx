import { motion } from "framer-motion"

export default function About() {
  const container = {
    hidden: { opacity: 0, y: 12 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.15,
        when: "beforeChildren",
      },
    },
  }

  const bullet = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
  }

  const slideInLeft = { hidden: { opacity: 0, x: -40 }, show: { opacity: 1, x: 0, transition: { duration: 0.7 } } }
  const slideInRight = { hidden: { opacity: 0, x: 40 }, show: { opacity: 1, x: 0, transition: { duration: 0.7 } } }

  const quickFacts = [
    "Specialized in Generative AI and Machine Learning",
    "Full-stack developer with modern web technologies",
    "Passionate about open-source contributions",
    "Committed to continuous learning and growth",
  ]

  return (
    <motion.section
      id="about"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      variants={container}
      className="relative w-full flex flex-col justify-center px-4 sm:px-8 md:px-16 lg:px-24 py-32 sm:py-40 md:py-52 border-b border-border isolate"
    >
      {/* === Animated Background Glows (positioned safely with z-0) === */}
      <motion.div
        className="absolute top-1/4 -left-20 w-[25vw] sm:w-[28vw] max-w-[280px] h-[25vw] sm:h-[28vw] max-h-[280px] rounded-full pointer-events-none z-0"
        style={{ background: "rgba(0,229,204,0.15)" }}
        animate={{ scale: [1, 1.03, 1], opacity: [0.6, 0.35, 0.6] }}
        transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-32 -right-20 w-[30vw] sm:w-[32vw] max-w-[320px] h-[30vw] sm:h-[32vw] max-h-[320px] rounded-full pointer-events-none z-0"
        style={{ background: "rgba(107,207,255,0.10)" }}
        animate={{ scale: [1, 1.02, 1], opacity: [0.65, 0.4, 0.65] }}
        transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 0.4 }}
      />

      {/* === Content Wrapper === */}
      <motion.div
        variants={container}
        className="relative z-10 backdrop-blur-md bg-white/5 border border-white/10 shadow-xl rounded-2xl p-8 sm:p-12 md:p-14 lg:p-20"
      >
        <div className="space-y-10 md:space-y-12">
          {/* Header */}
          <motion.div variants={slideInLeft}>
            <h3 className="text-accent font-mono text-sm sm:text-base mb-4 font-bold tracking-widest">ABOUT ME</h3>
            <div className="flex gap-1 items-center mb-6">
              <div className="w-1 h-8 bg-accent rounded"></div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">Who I Am</h2>
            </div>
          </motion.div>

          {/* Grid Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 lg:gap-20">
            {/* Left Text */}
            <motion.div
              variants={slideInLeft}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="space-y-6 text-foreground/80 text-base sm:text-lg leading-relaxed pr-0 md:pr-4"
            >
              <p>
                I'm a Generative AI developer with a passion for creating intelligent solutions that solve real-world
                problems. My expertise spans across machine learning, natural language processing, and full-stack
                development.
              </p>

              <p>
                With proficiency in Python, JavaScript, React.js, FastAPI, and MySQL, I build scalable applications that
                combine cutting-edge AI with intuitive user experiences. I believe in writing clean, maintainable code
                and staying at the forefront of technology trends.
              </p>
            </motion.div>

            {/* Right Quick Facts */}
            <motion.div
              variants={slideInRight}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="bg-card rounded-lg p-8 md:p-10 border border-border shadow-xl backdrop-blur-lg"
            >
              <h4 className="font-bold text-accent mb-6">Quick Facts</h4>
              <motion.ul variants={container} className="space-y-4 text-sm sm:text-base text-foreground/80">
                {quickFacts.map((fact, index) => (
                  <motion.li key={index} variants={bullet} className="flex items-start gap-3">
                    <span className="text-accent mt-1 flex-shrink-0">→</span>
                    <span>{fact}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.section>
  )
}
