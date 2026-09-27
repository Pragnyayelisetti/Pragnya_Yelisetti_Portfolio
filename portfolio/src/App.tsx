import Navbar from './components/Navbar'
import ScrollProgress from './components/ScrollProgress'
import CustomCursor from './components/CustomCursor'
import SpaceBackground from './components/SpaceBackground'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Achievements from './components/Achievements'
import Education from './components/Education'
import Contact from './components/Contact'

function App() {
  return (
    <div className="relative min-h-screen bg-transparent">
      <div className="relative z-0"><SpaceBackground /></div>
      <ScrollProgress />
      <CustomCursor />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Achievements />
        <Education />
        <Contact />
      </main>
    </div>
  )
}

export default App
