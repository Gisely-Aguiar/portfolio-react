import { useState, useEffect, useMemo } from 'react'
import './Header.css'
import { FiMenu, FiX, FiCode, FiHome, FiUser, FiStar, FiBriefcase, FiMail } from 'react-icons/fi'
import ThemeToggle from '../ThemeToggle/ThemeToggle'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  // SEÇÕES NA ORDEM CORRETA DO PORTFÓLIO - Agora com useMemo
  const navItems = useMemo(() => [
    { 
      name: 'Início', 
      href: '#home',
      icon: <FiHome /> 
    },
    { 
      name: 'Formação', 
      href: '#academic',
      icon: <FiUser />
    },
    { 
      name: 'Habilidades', 
      href: '#skills',
      icon: <FiStar />
    },
    { 
      name: 'Projetos', 
      href: '#projects',
      icon: <FiBriefcase />
    },
    { 
      name: 'Contato', 
      href: '#contact',
      icon: <FiMail />
    }
  ], []) // Array de dependências vazio = só cria uma vez

  // Detecta qual seção está ativa ao scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      
      // Detecta seção ativa
      const sections = navItems.map(item => item.href.substring(1))
      const current = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      
      if (current) {
        setActiveSection(current)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [navItems]) // Agora navItems é estável

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
        {/* Logo */}
        <div className="logo">
          <FiCode className="logo-icon" />
          <div className="logo-text">
            <span className="logo-name">Gi Dev</span>
            <span className="logo-subtitle">Desenvolvedora de Sistemas</span>
          </div>
        </div>

        {/* Área da Direita (Navegação + Toggle) */}
        <div className="nav-right">
          {/* Navegação Desktop - COM TODAS AS SEÇÕES */}
          <nav className="nav-desktop">
            {navItems.map((item) => (
              <a 
                key={item.name} 
                href={item.href}
                className={`nav-link ${activeSection === item.href.substring(1) ? 'active' : ''}`}
                onClick={() => {
                  setIsMenuOpen(false)
                  setActiveSection(item.href.substring(1))
                }}
              >
                <span className="nav-link-content">
                  <span className="nav-icon">{item.icon}</span>
                  <span className="nav-link-text">{item.name}</span>
                </span>
                <span className="nav-link-underline"></span>
              </a>
            ))}
          </nav>

          {/* Botão Toggle do Tema */}
          <ThemeToggle />
        </div>

        {/* Botão Mobile */}
        <button 
          className="menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
        >
          {isMenuOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* Menu Mobile - COM TODAS AS SEÇÕES */}
        <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
          <div className="mobile-menu-header">
            <div className="mobile-logo">
              <FiCode />
              <span>Gi Dev</span>
            </div>
            <button 
              className="mobile-close"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Fechar menu"
            >
              <FiX />
            </button>
          </div>

          <div className="mobile-menu-content">
            {navItems.map((item) => (
              <a 
                key={item.name} 
                href={item.href}
                className={`mobile-nav-link ${activeSection === item.href.substring(1) ? 'active' : ''}`}
                onClick={() => {
                  setIsMenuOpen(false)
                  setActiveSection(item.href.substring(1))
                }}
              >
                <span className="mobile-nav-icon">{item.icon}</span>
                <span>{item.name}</span>
              </a>
            ))}
          </div>

          {/* Toggle do Tema no Mobile */}
          <div className="mobile-theme-toggle">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header