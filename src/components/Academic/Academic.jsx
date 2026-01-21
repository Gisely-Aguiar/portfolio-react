import './Academic.css'
import { FiBook, FiCode, FiBriefcase, FiCalendar } from 'react-icons/fi'

const Academic = () => {
  const timelineItems = [
    {
      id: 1,
      title: "Ensino Médio + Técnico em Redes",
      institution: "ETEC de Embu das Artes",
      period: "Fev/2023 - Dez/2025",
      description: "Formação integrada em Redes de Computadores durante o Ensino Médio",
      skills: ["Cabeamento estruturado", "Sistemas Operacionais", "Infraestrutura", "Microsoft Office"],
      icon: <FiBook />,
      type: "education"
    },
    {
      id: 2,
      title: "Técnico em Desenvolvimento de Sistemas",
      institution: "ETEC de Embu das Artes",
      period: "Jun/2024 - Dez/2025",
      description: "Formação técnica focada em programação e desenvolvimento de software",
      skills: ["Vue.js", "Python", "MySQL", "HTML/CSS", "JavaScript", "C#"],
      icon: <FiCode />,
      type: "education"
    },
    {
      id: 3,
      title: "Estágio Voluntário",
      institution: "ETEC de Embu",
      period: "Set/2025 - Dez/2025",
      description: "Apoio técnico em infraestrutura e desenvolvimento de sistemas internos",
      skills: ["Manutenção de computadores", "Suporte em redes", "Desenvolvimento de sistemas", "Apoio técnico"],
      icon: <FiBriefcase />,
      type: "experience"
    }
  ]

  return (
    <section id="academic" className="section academic-section">
      <div className="container">
        <h2 className="section-title">Formação & <span className="highlight">Experiência</span></h2>
        <p className="section-subtitle">
          Minha trajetória educacional e experiência prática em tecnologia
        </p>

        <div className="compact-timeline">
          {timelineItems.map((item) => (
            <div key={item.id} className={`timeline-item ${item.type}`}>
              <div className="timeline-marker">
                <div className="marker-icon">
                  {item.icon}
                </div>
              </div>
              
              <div className="timeline-content">
                <div className="timeline-header">
                  <div className="title-container">
                    <h3 className="item-title">{item.title}</h3>
                    <span className="item-institution">{item.institution}</span>
                  </div>
                  <div className="timeline-period">
                    <FiCalendar className="period-icon" />
                    <span>{item.period}</span>
                  </div>
                </div>
                
                <p className="item-description">{item.description}</p>
                
                <div className="skills-container">
                  {item.skills.map((skill, idx) => (
                    <span key={idx} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Academic