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
    { name: 'Python', icon: <SiPython />, color: '#3776AB' },
    { name: 'Vue.js', icon: <SiVuedotjs />, color: '#4FC08D' },
    { name: 'JavaScript', icon: <SiJavascript />, color: '#F7DF1E' },
    { name: 'MySQL', icon: <SiMysql />, color: '#4479A1' },
    { name: 'Git', icon: <SiGit />, color: '#F05032' },
    { name: 'HTML5', icon: <SiHtml5 />, color: '#E34F26' },
    { name: 'CSS3', icon: <SiCss3 />, color: '#1572B6' },
    { name: 'React', icon: <SiReact />, color: '#61DAFB' },
    { name: 'Node.js', icon: <SiNodedotjs />, color: '#339933' },
    { name: 'Tailwind', icon: <SiTailwindcss />, color: '#06B6D4' },
    { name: 'Quasar', icon: <SiQuasar />, color: '#1976D2' }
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

        {/* Stack Tecnológico - parte final do Skills.jsx */}
<div className="tech-stack">
  <h3 className="tech-stack-title">Stack Tecnológico</h3>
  <div className="tech-container"> {/* Mude para tech-container */}
    {techStack.map((tech) => (
      <div key={tech.name} className="tech-item">
        <div 
          className="tech-icon-container"
          style={{ backgroundColor: `${tech.color}15` }}
        >
          <div 
            className="tech-icon"
            style={{ color: tech.color }}
          >
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