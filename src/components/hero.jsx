import { motion } from "framer-motion"

export default function Hero() {
  const container = {
    hidden: { opacity: 0, y: 12 },
    show: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.12, when: "beforeChildren" },
    },
  }
  const item = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="relative w-full flex flex-col justify-center px-4 sm:px-8 md:px-16 lg:px-24 py-32 sm:py-40 md:py-52 border-b border-border isolate"
    >
      {/* Background Glows */}
      <motion.div
        aria-hidden
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[50vw] max-w-[650px] h-[50vw] max-h-[650px] rounded-full pointer-events-none z-0"
        style={{ background: "rgba(0,229,204,0.25)" }}
        animate={{ scale: [1, 1.03, 1], opacity: [0.85, 0.5, 0.85] }}
        transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="absolute bottom-32 right-[10%] w-[35vw] max-w-[450px] h-[35vw] max-h-[450px] rounded-full pointer-events-none z-0"
        style={{ background: "rgba(107,207,255,0.25)" }}
        animate={{ scale: [1, 1.02, 1], opacity: [0.85, 0.55, 0.85] }}
        transition={{ duration: 5.6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 0.4 }}
      />
      <motion.div
        aria-hidden
        className="absolute bottom-40 left-[10%] w-[25vw] max-w-[350px] h-[25vw] max-h-[350px] rounded-full pointer-events-none z-0"
        style={{ background: "rgba(179,102,255,0.15)" }}
        animate={{ scale: [1, 1.04, 1], opacity: [0.8, 0.45, 0.8] }}
        transition={{ duration: 6.4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 0.8 }}
      />
      {/* Radial Vignette */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none z-1"
        style={{
          background: "radial-gradient(1200px 600px at 50% 30%, rgba(0,0,0,0.06), transparent 30%)",
          mixBlendMode: "overlay",
        }}
      />
      {/* Content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 space-y-12 mb-20 sm:mb-32 flex flex-col items-center lg:items-start text-center lg:text-left"
      >
        <motion.div className="flex flex-col lg:flex-row gap-12 md:gap-16 lg:gap-20 justify-center items-center w-full">
          {/* Floating Image */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY }}
            className="px-6 sm:px-8 mt-6 flex-shrink-0"
          >
            <img
              src="WhatsApp Image 2025-10-07 at 02.48.57_5d47505b.jpg"
              alt="Favoured"
              className="w-full max-w-[180px] sm:max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg aspect-square object-cover rounded-full"
            />
          </motion.div>
          {/* Text Content */}
          <div className="max-w-full sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl px-2 sm:px-4">
            <motion.p variants={item} className="text-accent font-mono text-sm sm:text-base mb-6">
              {"// Welcome to my portfolio"}
            </motion.p>
            <motion.h2
              variants={item}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-foreground"
              initial={{ scale: 0.98 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              Generative AI Developer
            </motion.h2>
            <motion.p
              variants={item}
              className="text-base sm:text-lg md:text-xl text-foreground/80 leading-relaxed mb-4"
            >
              I'm Dr. Olaosebikan Favour, a passionate AI developer specializing in building intelligent systems with
              Python, JavaScript, and modern web technologies. I transform ideas into powerful applications.
            </motion.p>
          </div>
        </motion.div>
        {/* CTA Buttons */}
        <motion.div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center w-full flex-wrap">
          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="px-6 py-2 border bg-accent text-black rounded-lg font-medium text-sm hover:bg-accent/10 hover:text-accent transition-colors"
            href="#projects"
          >
            Explore my work
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 300, delay: 0.04 }}
            className="px-6 py-2 border bg-accent text-black rounded-lg font-medium text-sm hover:bg-accent/10 hover:text-accent transition-colors"
            href="#footer"
          >
            Get in touch
          </motion.a>
          <motion.a
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 300, delay: 0.08 }}
            className="px-6 py-2 border border-accent text-accent rounded-lg font-medium text-sm hover:bg-accent/10 transition-colors"
            href="/DrOlaosebikanFavourCVdev.pdf"
            target="__blank"
          >
            View CV
          </motion.a>
          <motion.a
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 300, delay: 0.12 }}
            className="px-6 py-2 border border-accent text-accent rounded-lg font-medium text-sm hover:bg-accent/10 transition-colors"
            href="/DrOlaosebikanFavourCVdev.pdf"
            download
          >
            Download CV
          </motion.a>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
