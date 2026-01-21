import './Skills.css'
import { FiCode, FiDatabase, FiLayout, FiGitBranch, FiBox } from 'react-icons/fi'
import { 
  SiPython, 
  SiVuedotjs, 
  SiJavascript, 
  SiMysql,
  SiGit,
  SiHtml5,
  SiCss3,
  SiReact,
  SiQuasar,
  SiNodedotjs,
  SiTailwindcss
} from 'react-icons/si'

const Skills = () => {
  const skills = [
    { 
      category: 'Linguagens & Frameworks',
      icon: <FiCode />,
      items: [
        { name: 'Python', icon: <SiPython /> },
        { name: 'Vue.js', icon: <SiVuedotjs /> },
        { name: 'JavaScript', icon: <SiJavascript /> },
        { name: 'Quasar', icon: <SiQuasar /> }
      ]
    },
    {
      category: 'Banco de Dados',
      icon: <FiDatabase />,
      items: [
        { name: 'MySQL', icon: <SiMysql /> },
        { name: 'SQL', icon: <FiDatabase /> },
        { name: 'Modelagem', icon: <FiDatabase /> }
      ]
    },
    {
      category: 'Frontend',
      icon: <FiLayout />,
      items: [
        { name: 'HTML5', icon: <SiHtml5 /> },
        { name: 'CSS3', icon: <SiCss3 /> },
        { name: 'Responsive', icon: <FiLayout /> }
      ]
    },
    {
      category: 'Ferramentas',
      icon: <FiGitBranch />,
      items: [
        { name: 'Git/GitHub', icon: <SiGit /> },
        { name: 'VS Code', icon: <FiCode /> },
        { name: 'Docker', icon: <FiBox /> }
      ]
    }
  ]

  const techStack = [
    { name: 'Python', icon: <SiPython /> },
    { name: 'Vue.js', icon: <SiVuedotjs /> },
    { name: 'JavaScript', icon: <SiJavascript /> },
    { name: 'MySQL', icon: <SiMysql /> },
    { name: 'Git', icon: <SiGit /> },
    { name: 'HTML5', icon: <SiHtml5 /> },
    { name: 'CSS3', icon: <SiCss3 /> },
    { name: 'React', icon: <SiReact /> },
    { name: 'Node.js', icon: <SiNodedotjs /> },
    { name: 'Tailwind', icon: <SiTailwindcss /> },
    { name: 'Quasar', icon: <SiQuasar /> }
  ]

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <h2 className="section-title">Habilidades <span className="highlight">Técnicas</span></h2>
        <p className="section-subtitle">
          Tecnologias e ferramentas que utilizo para desenvolver soluções eficientes
        </p>

        {/* Grid de categorias */}
        <div className="skills-grid">
          {skills.map((category, index) => (
            <div key={index} className="skill-card">
              <div className="skill-card-header">
                <div className="skill-category-icon">{category.icon}</div>
                <h3 className="skill-category-title">{category.category}</h3>
              </div>
              
              <div className="skills-list">
                {category.items.map((skill, idx) => (
                  <div key={idx} className="skill-item">
                    <div className="skill-icon">{skill.icon}</div>
                    <span className="skill-name">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Stack Tecnológico */}
        <div className="tech-stack">
          <h3 className="tech-stack-title">Stack Tecnológico</h3>
          <div className="tech-container">
            {techStack.map((tech) => (
              <div key={tech.name} className="tech-item">
                <div className="tech-icon-container">
                  <div className="tech-icon">
                    {tech.icon}
                  </div>
                </div>
                <span className="tech-name">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills