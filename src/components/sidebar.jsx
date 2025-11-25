'use client'

import { Link } from 'react-router-dom'; 
import { Github, Linkedin, Mail, Twitter, Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Mobile Hamburger (visible on mobile only) */}
      <div className="md:hidden fixed top-4 left-4 z-50">
        <button
          aria-label="Toggle menu"
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 rounded-md bg-background/80 border border-border backdrop-blur"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 z-40">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />
          <aside className="absolute left-0 top-0 h-full w-64 bg-background border-r border-border flex flex-col p-6">
            <div className="mb-4">
              <p className="text-xs text-muted-foreground font-mono tracking-wider">{'</> Dr. Olaosebikan'}</p>
              <h1 className="text-2xl font-bold text-accent">Favour</h1>
              <p className="text-xs text-muted-foreground mt-2">AI Developer</p>
            </div>

            <nav className="flex-1">
              <h2 className="text-xs font-bold text-accent tracking-widest mb-4">NAVIGATION</h2>
              <ul className="space-y-4">
                <li>
                  <Link to="/about" className="text-sm text-foreground hover:text-accent transition-colors" onClick={() => setIsOpen(false)}>
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/skills" className="text-sm text-foreground hover:text-accent transition-colors" onClick={() => setIsOpen(false)}>
                    Skills
                  </Link>
                </li>
                <li>
                  <Link to="/projects" className="text-sm text-foreground hover:text-accent transition-colors" onClick={() => setIsOpen(false)}>
                    Projects
                  </Link>
                </li>
                <li>
                  <Link to="/blog" className="text-sm text-foreground hover:text-accent transition-colors" onClick={() => setIsOpen(false)}>
                    Blog
                  </Link>
                </li>
              </ul>
            </nav>

            <div className="pt-4 border-t border-border">
              <p className="text-xs text-muted-foreground mb-4 font-mono">CONNECT</p>
              <div className="flex gap-4">
                <a href="#" className="text-accent hover:text-accent/80 transition-colors">
                  <Github size={18} />
                </a>
                <a href="#" className="text-accent hover:text-accent/80 transition-colors">
                  <Linkedin size={18} />
                </a>
                <a href="#" className="text-accent hover:text-accent/80 transition-colors">
                  <Twitter size={18} />
                </a>
                <a href="#" className="text-accent hover:text-accent/80 transition-colors">
                  <Mail size={18} />
                </a>
              </div>
            </div>
          </aside>
        </div>
      )}

      {/* Desktop Sidebar */}
      <aside className="hidden md:flex left-0 top-0 w-64 h-screen bg-background border-r border-border flex-col">
        <div className="p-8 border-b border-border">
          <div className="mb-2">
            <p className="text-xs text-muted-foreground font-mono tracking-wider">{'</> Dr. Olaosebikan'}</p>
            <h1 className="text-2xl font-bold text-accent">Favour</h1>
            <p className="text-xs text-muted-foreground mt-2">AI Developer</p>
          </div>
        </div>

        <nav className="flex-1 px-6 py-8 space-y-8">
          <div>
            <h2 className="text-xs font-bold text-accent tracking-widest mb-4">NAVIGATION</h2>

            {/* Desktop Navigation */}
            <ul className="space-y-4">
              <li>
                <a href="#about" className="text-sm text-foreground hover:text-accent transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#skills" className="text-sm text-foreground hover:text-accent transition-colors">
                  Skills
                </a>
              </li>
              <li>
                <a href="#projects" className="text-sm text-foreground hover:text-accent transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#blog" className="text-sm text-foreground hover:text-accent transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <div className="p-6 border-t border-border">
          <p className="text-xs text-muted-foreground mb-4 font-mono">CONNECT</p>
          <div className="flex gap-4">
            <a href="mailto:favourolaosebikanf@gmail.com" target="_blank" className="p-2 hover:bg-accent/20 rounded-lg transition-colors text-accent">
                <Mail size={20} />
              </a>
              <a href="https://github.com/Highllyfavoured" target="_blank" className="p-2 hover:bg-accent/20 rounded-lg transition-colors text-accent">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/olaosebikan-favour-218577184?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" className="p-2 hover:bg-accent/20 rounded-lg transition-colors text-accent">
                <Linkedin size={20} />
              </a>
              <a href="https://x.com/FavourOLAOSEBI1?t=-a6zJcKHKJLzDL5MY7tfXw&s=09" target="_blank" className="p-2 hover:bg-accent/20 rounded-lg transition-colors text-accent">
                <Twitter size={20} />
              </a>
          </div>
        </div>
      </aside>
    </>
  )
}
