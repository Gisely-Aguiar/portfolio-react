import './Contact.css'
import { useState } from 'react'
import { FiMail, FiUser, FiMessageSquare, FiSend, FiMapPin, FiPhone, FiCheck } from 'react-icons/fi'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Envia email via mailto (funciona em todos os navegadores)
    const mailtoLink = `mailto:aguiargisely05@gmail.com?subject=${encodeURIComponent(formData.subject || 'Contato do Portfólio')}&body=${encodeURIComponent(`Nome: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0AMensagem:%0D%0A${formData.message}`)}`
    
    window.location.href = mailtoLink
    setIsSubmitted(true)
    
    // Reseta o formulário após 3 segundos
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' })
      setIsSubmitted(false)
    }, 3000)
  }

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <h2 className="section-title">Vamos <span className="highlight">Conversar</span></h2>
        <p className="section-subtitle">
          Estou disponível para oportunidades de estágio, vagas júnior e projetos freelance
        </p>
        
        <div className="contact-wrapper">
          {/* Informações de contato */}
          <div className="contact-info">
            <div className="info-header">
              <h3>Entre em Contato</h3>
              <p>Respondo em até 24 horas úteis</p>
            </div>
            
            <div className="contact-details">
              <div className="contact-detail-item">
                <div className="detail-icon">
                  <FiMail />
                </div>
                <div className="detail-content">
                  <h4>Email</h4>
                  <a href="mailto:aguiargisely05@gmail.com" className="detail-link">
                    aguiargisely05@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="contact-detail-item">
                <div className="detail-icon">
                  <FiMapPin />
                </div>
                <div className="detail-content">
                  <h4>Localização</h4>
                  <p className="detail-text">Brasil • Remoto</p>
                </div>
              </div>
              
              <div className="contact-detail-item">
                <div className="detail-icon">
                  <FiPhone />
                </div>
                <div className="detail-content">
                  <h4>Disponibilidade</h4>
                  <p className="detail-text">Estágio • Júnior • Freelance</p>
                </div>
              </div>
            </div>
            
            <div className="availability-status">
              <div className="status-indicator"></div>
              <span className="status-text">Disponível para novas oportunidades</span>
            </div>
          </div>
          
          {/* Formulário de contato */}
          <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
              {isSubmitted && (
                <div className="success-message">
                  <FiCheck />
                  <span>Redirecionando para seu cliente de email...</span>
                </div>
              )}
              
              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  <FiUser className="label-icon" />
                  Seu Nome *
                </label>
                <input
                  type="text"
                  id="name"
                  className="form-input"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                  placeholder="Como posso te chamar?"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  <FiMail className="label-icon" />
                  Seu Email *
                </label>
                <input
                  type="email"
                  id="email"
                  className="form-input"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  required
                  placeholder="seu@email.com"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="subject" className="form-label">
                  Assunto
                </label>
                <input
                  type="text"
                  id="subject"
                  className="form-input"
                  value={formData.subject}
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  placeholder="Ex: Oportunidade de Estágio"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  <FiMessageSquare className="label-icon" />
                  Sua Mensagem *
                </label>
                <textarea
                  id="message"
                  className="form-textarea"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  required
                  rows="5"
                  placeholder="Conte-me sobre sua oportunidade ou projeto..."
                />
              </div>
              
              <button type="submit" className="submit-button">
                <FiSend className="button-icon" />
                Enviar Mensagem
              </button>
              
              <p className="form-note">
                * Os campos marcados com asterisco são obrigatórios
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact