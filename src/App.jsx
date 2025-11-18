import React from 'react'
import Hero from './components/Hero'
import { Summary, About, Skills, Projects, Proficiency, Contact, Footer } from './components/Sections'
import './index.css'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-sky-500/30">
      <Hero />
      <Summary />
      <About />
      <Skills />
      <Projects />
      <Proficiency />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
