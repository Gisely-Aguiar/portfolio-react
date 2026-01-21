// src/context/ThemeContext.jsx
/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useState, useContext, useEffect } from 'react'

const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
  // Verifica preferência do sistema ou salva no localStorage
  const getInitialTheme = () => {
    if (typeof window !== 'undefined' && window.localStorage) {
      const storedPref = window.localStorage.getItem('theme')
      if (typeof storedPref === 'string') {
        return storedPref
      }
      
      const userMedia = window.matchMedia('(prefers-color-scheme: dark)')
      if (userMedia.matches) {
        return 'dark'
      }
    }
    return 'light' // default
  }

  const [theme, setTheme] = useState(getInitialTheme)

  // Aplica o tema ao HTML
  const rawSetTheme = (rawTheme) => {
    const root = window.document.documentElement
    const isDark = rawTheme === 'dark'

    root.classList.remove(isDark ? 'light' : 'dark')
    root.classList.add(rawTheme)

    localStorage.setItem('theme', rawTheme)
  }

  // Atualiza quando o tema muda
  useEffect(() => {
    rawSetTheme(theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light')
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider')
  }
  return context
}