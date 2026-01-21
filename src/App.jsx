import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Academic from './components/Academic/Academic'  // ← Nova seção
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'      // ← Nova seção
import Footer from './components/Footer/Footer'
import './App.css'

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <Academic />     {/* ← Adicionada aqui */}
      <Skills />
      <Projects />
      <Contact />      {/* ← Adicionada aqui */}
      <Footer />
    </div>
  )
}

export default App