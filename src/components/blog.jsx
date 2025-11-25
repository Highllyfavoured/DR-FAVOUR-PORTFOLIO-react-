"use client";

import { motion } from "framer-motion";

export default function Blog() {
  const posts = [
    {
      title: 'Starting my Generative AI journey',
      excerpt: 'Standing at the intersection of science and technology, I’m ready to shape the future with AI.💯💯',
      date: 'Sep 4, 2025',
      readTime: '8 min read',
      category: 'Information',
      url: 'https://www.linkedin.com/posts/olaosebikan-favour-218577184_genaifellowship-artificialintelligence-innovation-activity-7368940257808969728-PIX2?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAACuCo3QBRAOqUUP4oJ0Ymx0E_emhvD9K9HY'
    },
    {
      title: 'Web Development with HTML, CSS, and Javascript',
      excerpt: 'Diving deep into HTML, CSS, and sprinkling a bit of JavaScript magic.',
      date: 'September 20, 2025',
      readTime: '3 min read',
      category: 'Development',
      url: 'https://www.linkedin.com/posts/olaosebikan-favour-218577184_webdevelopment-codingjourney-frontenddev-activity-7374790341918375936-mHs2?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAACuCo3QBRAOqUUP4oJ0Ymx0E_emhvD9K9HY',
    },
    {
      title: 'Best Practices in frontend development',
      excerpt: 'JavaScript my love ❣️ CSS my darling 🥰 HTML! the father of them all 😅 (argue with your keyboard 😂)',
      date: 'Oct 10, 2025',
      readTime: '5 min read',
      category: 'Development',
      url: 'https://www.linkedin.com/posts/olaosebikan-favour-218577184_webdevelopment-frontenddeveloper-javascript-activity-7382687358355247104-MmuH?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAACuCo3QBRAOqUUP4oJ0Ymx0E_emhvD9K9HY',
    },
  ];

  // motion variants for staggered posts
  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const postVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const badgeVariants = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
  };

  return (
    <motion.section
      id="blog"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="relative w-full flex flex-col justify-center px-4 sm:px-8 md:px-16 lg:px-24 py-32 sm:py-40 md:py-52 border-b border-border isolate"
    >
      <motion.div variants={containerVariants} className="space-y-12 relative z-10">
        {/* Section Header */}
        <motion.div variants={postVariants}>
          <h3 className="text-accent font-mono text-sm mb-4 font-bold tracking-widest">
            INSIGHTS & KNOWLEDGE
          </h3>
          <div className="flex gap-1 items-center">
            <div className="w-1 h-8 bg-accent rounded"></div>
            <h2 className="text-3xl font-bold text-foreground">Latest Blog Posts</h2>
          </div>
        </motion.div>

        {/* Blog Posts */}
        <motion.div variants={containerVariants} className="space-y-6">
          {posts.map((post, index) => (
            <motion.article
              key={post.title}
              variants={postVariants}
              className="group bg-card border border-border rounded-lg p-6 hover:border-accent transition-all hover:shadow-lg cursor-pointer flex flex-col"
            >
              <div className="flex flex-col md:flex-row md:justify-between mb-4 gap-4">
                <div className="flex-1">
                  <h3 className="text-foreground font-bold text-lg mb-2 group-hover:text-accent transition-colors text-pretty">
                    {post.title}
                  </h3>
                  <p className="text-foreground/60 text-sm leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
                <motion.div
                  variants={badgeVariants}
                  className="flex items-center gap-4 text-xs text-foreground/60 md:flex-col md:items-end"
                >
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                  <span className="px-3 py-1 bg-accent/20 text-accent text-xs font-medium rounded border border-accent/30 mt-2 md:mt-4">
                    {post.category}
                  </span>
                </motion.div>
              </div>

              {/* View Post button */}
              <motion.div variants={badgeVariants} className="mt-4 self-start">
                <a
                  className="px-3 py-1 border border-accent text-accent rounded-lg font-medium text-sm hover:bg-accent/10 transition-colors"
                  href={post.url}
                  target="_blank"
                >
                  View Post
                </a>
              </motion.div>
            </motion.article>
          ))}
        </motion.div>

        {/* View All Articles */}
        <motion.div variants={postVariants} className="text-center mt-6">
          <a
            href="https://www.linkedin.com/in/olaosebikan-favour-218577184?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            className="inline-block px-6 py-2 border bg-accent text-black rounded-lg font-medium text-sm hover:bg-accent/10 transition-colors hover:text-accent"
          >
            View All Articles
          </a>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
