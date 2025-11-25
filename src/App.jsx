import Sidebar from './components/sidebar'
import Hero from './components/hero'
import About from './components/about'
import Skills from './components/skills'
import Projects from './components/projects'
import Blog from './components/blog'
import Footer from './components/footer'
// import Certifications from '@/components/certifications'
import './App.css'

export default function App() {
  return (
    <div className="flex h-screen bg-background overflow-hidden">
      <Sidebar />
      <main className="flex flex-col w-full overflow-auto max-sm:w-full">
        <Hero />
        <About />
        <Skills />
        <Projects />
        {/* <Certifications /> */}
        <Blog />
        <Footer />
      </main>
    </div>
  )
}
