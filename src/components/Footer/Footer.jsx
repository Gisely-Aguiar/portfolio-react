import './Footer.css'
import { FiGithub, FiLinkedin, FiMail, FiArrowUp, FiMapPin, FiPhone } from 'react-icons/fi'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // SEUS LINKS REAIS
  const socialLinks = {
    github: 'https://github.com/Gisely-Aguiar',
    linkedin: 'https://www.linkedin.com/in/gisely-aguiar-5b45a82b5',
    email: 'mailto:aguiargisely05@gmail.com'
  }

  return (
    <footer id="contact" className="footer">
      <div className="container">
        {/* Parte superior do footer */}
        <div className="footer-top">
          <div className="footer-info">
            <div className="footer-logo">
              <h3 className="footer-title">Gi Dev</h3>
              <p className="footer-subtitle">Desenvolvedora de Sistemas</p>
            </div>
            <p className="footer-description">
              Transformando ideias em soluções de software eficientes e funcionais.
              Especializada em Python, Vue.js e MySQL.
            </p>
          </div>

          <div className="footer-grid">
            {/* Links Rápidos */}
            <div className="footer-column">
              <h4 className="column-title">Navegação</h4>
              <ul className="footer-links">
                <li><a href="#home" className="footer-link">Início</a></li>
                <li><a href="#skills" className="footer-link">Habilidades</a></li>
                <li><a href="#projects" className="footer-link">Projetos</a></li>
                <li><a href="#contact" className="footer-link">Contato</a></li>
              </ul>
            </div>

            

            {/* Contato */}
            <div className="footer-column">
              <h4 className="column-title">Contato</h4>
              <ul className="footer-contact">
                <li className="contact-item">
                  <FiMail className="contact-icon" />
                  <a href={socialLinks.email} className="contact-link">
                    aguiargisely05@gmail.com
                  </a>
                </li>
                <li className="contact-item">
                  <FiMapPin className="contact-icon" />
                  <span className="contact-text">Brasil</span>
                </li>
                <li className="contact-item">
                  <FiPhone className="contact-icon" />
                  <span className="contact-text">Disponível para oportunidades</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divisor */}
        <div className="footer-divider"></div>

        {/* Parte inferior do footer */}
        <div className="footer-bottom">
          <div className="copyright">
            <p>© {new Date().getFullYear()} <strong>Gi Dev</strong>. Todos os direitos reservados.</p>
            <p className="copyright-sub">Desenvolvido com React e muito ☕</p>
          </div>

          <div className="footer-social">
            <h5 className="social-title">Conecte-se</h5>
            <div className="social-icons">
              <a 
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                title="GitHub"
              >
                <FiGithub />
              </a>
              <a 
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                title="LinkedIn"
              >
                <FiLinkedin />
              </a>
              <a 
                href={socialLinks.email}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                title="Email"
              >
                <FiMail />
              </a>
            </div>
          </div>

          <button onClick={scrollToTop} className="back-to-top">
            <FiArrowUp className="arrow-icon" />
            <span>Voltar ao topo</span>
          </button>
        </div>
      </div>
    </footer>
  )
}

export default Footer