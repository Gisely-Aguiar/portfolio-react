import './Projects.css'
import { FiExternalLink, FiGithub, FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Navigation, Pagination } from 'swiper/modules'

const Projects = () => {
  // SEUS PROJETOS REAIS - DESCRIÇÕES PROFISSIONAIS
  const projects = [
    {
      id: 1,
      title: "SystemPOS - Sistema PDV Completo",
      description: "Sistema de Ponto de Venda desenvolvido como Trabalho de Conclusão de Curso para automatizar gestão de pequenos comércios com cadastro, vendas e relatórios.",
      category: "Full Stack • TCC",
      tech: ['Vue.js', 'Quasar', 'Electron', 'SQL', 'SCSS'],
      github: "https://github.com/Gisely-Aguiar/SystemPOS",
      demo: null,
      image: "/images/projetos/systemPOS.jpg", // PDV/Commerce
      features: [
        "Automação completa de vendas e pagamentos",
        "Geração de relatórios e dashboards em tempo real",
        "Emissão de PDFs e comprovantes",
        "Interface desktop com Electron",
        "Banco de dados SQL para gestão de dados"
      ]
    },
    {
      id: 2,
      title: "Extração e Conversão de PDFs",
      description: "Sistema Python para automatizar extração de dados de PDFs de classificação da ETEC, convertendo em Excel e fornecendo interface para análise de dados.",
      category: "Python • Automação",
      tech: ['Python', 'Streamlit', 'Pandas', 'PDF Processing'],
      github: "https://github.com/Gisely-Aguiar/Extracao-PDF",
      demo: null,
      image: "/images/projetos/extrairPDF.jpg", // Data/Code
      features: [
        "Automação de extração de dados de PDFs estruturados",
        "Conversão para Excel com formatação inteligente",
        "Interface web interativa com Streamlit",
        "Processamento de grandes volumes de dados",
        "Solução prática para problema real da instituição"
      ]
    },
    {
      id: 3,
      title: "Biblioteca ETEC 241",
      description: "Aplicação desenvolvida durante estágio voluntário para gerenciar fluxo de visitantes da biblioteca, em uso diário na instituição.",
      category: "Full Stack • Experiência Real",
      tech: ['React', 'Node.js', 'Firebase', 'Charts.js'],
      github: "https://github.com/Gisely-Aguiar/App_biblioteca241",
      demo: null,
      image: "/images/projetos/appBiblioteca.jpg", // Library/Education
      features: [
        "Controle de entrada/saída de visitantes em tempo real",
        "Dashboard com métricas e gráficos interativos",
        "Banco de dados Firebase para sincronização instantânea",
        "Interface responsiva otimizada para uso diário",
        "Solução real implementada e validada na ETEC"
      ]
    },
    {
      id: 4,
      title: "Aprova Fatec - Landing Page",
      description: "Landing page profissional desenvolvida para divulgação de cursinho preparatório, com foco em conversão e experiência do usuário.",
      category: "Frontend • Marketing",
      tech: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
      github: "https://github.com/Gisely-Aguiar/aprova-fatec",
      demo: null,
      image: "/images/projetos/aprovaFatec.jpg", // Education/Marketing
      features: [
        "Design moderno e persuasivo para alta conversão",
        "Totalmente responsivo para todos dispositivos",
        "Performance otimizada para SEO",
        "Estrutura semântica e acessível",
        "Foco em experiência do usuário e clareza de informações"
      ]
    },
    {
      id: 5,
      title: "Livraria CRUD com Firebase",
      description: "Aplicação web completa implementando operações CRUD com Firebase, demonstrando domínio de banco de dados não-relacional e JavaScript moderno.",
      category: "Full Stack • Firebase",
      tech: ['JavaScript', 'Firebase', 'HTML5', 'CSS3'],
      github: "https://github.com/Gisely-Aguiar/livraria---firebase",
      demo: null,
      image: "/images/projetos/RSFirebase.jpg", // Books/Library
      features: [
        "Operações CRUD completas (Create, Read, Update, Delete)",
        "Integração em tempo real com Firebase Firestore",
        "Interface intuitiva para gerenciamento de livros",
        "Validação de dados e tratamento de erros",
        "Demonstração prática de conceitos fundamentais"
      ]
    },
    {
      id: 6,
      title: "Naves Invaders - Jogo em C#",
      description: "Jogo desenvolvido em C# como projeto de Programação Orientada a Objetos, apresentado na Feira de Profissões da ETEC.",
      category: "C# • Game Development",
      tech: ['C#', '.NET', 'POO', 'Game Development'],
      github: "https://github.com/Gisely-Aguiar/NavesInvaders",
      demo: null,
      image: "/images/projetos/navesInvaders.jpg", // Games
      features: [
        "Desenvolvimento completo de jogo com mecânicas próprias",
        "Aplicação prática de Programação Orientada a Objetos",
        "Sistema de pontuação e níveis progressivos",
        "Apresentado publicamente na Feira de Profissões",
        "Código limpo e bem documentado"
      ]
    }
  ]

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <h2 className="section-title">Meus <span className="highlight">Projetos</span></h2>
        <p className="section-subtitle">
          Projetos reais desenvolvidos durante minha formação e experiência prática
        </p>

        {/* Carrossel de Projetos */}
        <div className="projects-carousel">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            pagination={{ 
              clickable: true,
              el: '.swiper-pagination'
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
          >
            {projects.map((project) => (
              <SwiperSlide key={project.id}>
                <div className="project-card">
                  {/* Imagem do projeto */}
                  <div 
                    className="project-image"
                    style={{ 
                      backgroundImage: `url(${project.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  >
                    <div className="project-category">{project.category}</div>
                    <div className="project-overlay"></div>
                  </div>
                  
                  <div className="project-content">
                    {/* Tecnologias usadas */}
                    <div className="project-tech">
                      {project.tech.map((tech, index) => (
                        <span key={index} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                    
                    {/* Título e descrição */}
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-description">{project.description}</p>
                    
                    {/* Links do projeto */}
                    <div className="project-links">
                      <a 
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link github-link"
                      >
                        <FiGithub className="link-icon" />
                        Ver Código
                      </a>
                      
                      {/* Se tiver demo, descomente:
                      {project.demo && (
                        <a 
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-link demo-link"
                        >
                          <FiExternalLink className="link-icon" />
                          Ver Demo
                        </a>
                      )}
                      */}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navegação */}
          <div className="carousel-navigation">
            <button className="swiper-button-prev">
              <FiChevronLeft />
            </button>
            <div className="swiper-pagination"></div>
            <button className="swiper-button-next">
              <FiChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects