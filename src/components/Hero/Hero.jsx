import './Hero.css'
import { FiGithub, FiLinkedin, FiMail, FiArrowRight } from 'react-icons/fi'
import minhaFoto from './gi.png' // Importe sua foto

const Hero = () => {
  // SEUS LINKS REAIS
  const socialLinks = {
    github: 'https://github.com/Gisely-Aguiar',
    linkedin: 'https://www.linkedin.com/in/gisely-aguiar-5b45a82b5',
    email: 'mailto:aguiargisely05@gmail.com'
  }

  return (
    <section id="home" className="hero">
      <div className="container hero-container">
        <div className="hero-content">
          {/* Coluna do texto */}
          <div className="hero-text">
            {/* Badge de status */}
            <div className="status-badge">
              
            </div>

            {/* Título principal */}
            <h1 className="hero-title">
              Desenvolvedora de <span className="highlight">Sistemas</span>
            </h1>
            
            <h2 className="hero-subtitle">
              Transformando ideias em <span className="highlight secondary">soluções digitais</span>
            </h2>

            {/* Descrição */}
            <p className="hero-description">
              Estudante de tecnologia focada em desenvolvimento de software, 
              automação e aplicações web. Transformo problemas complexos em 
              soluções eficientes com Python, Vue.js e MySQL.
            </p>

            {/* Botões de ação */}
            <div className="hero-buttons">
              <a href="#projects" className="btn btn-primary">
                Ver Projetos
                <FiArrowRight className="btn-icon" />
              </a>
              <a 
                href={socialLinks.email} 
                className="btn btn-secondary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Entrar em Contato
              </a>
            </div>

            {/* Redes sociais COM LINKS REAIS */}
            <div className="social-links">
              <a 
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                title="GitHub - Gisely Aguiar"
              >
                <FiGithub />
                <span className="social-tooltip">GitHub</span>
              </a>
              
              <a 
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                title="LinkedIn - Gisely Aguiar"
              >
                <FiLinkedin />
                <span className="social-tooltip">LinkedIn</span>
              </a>
              
              <a 
                href={socialLinks.email}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                title="Email - aguiargisely05@gmail.com"
              >
                <FiMail />
                <span className="social-tooltip">Email</span>
              </a>
            </div>
          </div>

          {/* Coluna da foto */}
          <div className="hero-image">
            <div className="photo-container">
              <img 
                src={minhaFoto} 
                alt="Gisely Aguiar - Desenvolvedora de Sistemas" 
                className="profile-photo"
              />
              <div className="photo-frame"></div>
              <div className="tech-badge python">Python</div>
              <div className="tech-badge vue">Vue.js</div>
              <div className="tech-badge mysql">MySQL</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero