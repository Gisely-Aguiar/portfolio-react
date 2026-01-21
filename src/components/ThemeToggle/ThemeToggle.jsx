import './ThemeToggle.css'
import { useTheme } from '../../context/ThemeContext'
import { FiSun, FiMoon } from 'react-icons/fi'

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className="theme-toggle-container">
      <button 
        className="theme-toggle"
        onClick={toggleTheme}
        aria-label={`Mudar para modo ${theme === 'light' ? 'escuro' : 'claro'}`}
        title={`Modo ${theme === 'light' ? 'escuro' : 'claro'}`}
      >
        <div className="toggle-track">
          <div className={`toggle-thumb ${theme === 'dark' ? 'dark' : 'light'}`}>
            {theme === 'light' ? (
              <FiSun className="toggle-icon" />
            ) : (
              <FiMoon className="toggle-icon" />
            )}
          </div>
        </div>
      </button>
      <span className="toggle-label">
        {theme === 'light' ? 'Modo Escuro' : 'Modo Claro'}
      </span>
    </div>
  )
}

export default ThemeToggle