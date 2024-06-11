import { useParams } from 'react-router-dom'
import { Tag } from './components/Tag'
import { Link } from 'react-router-dom'
import en from './Lang/en.json'
import es from './Lang/es.json'
import { useNavigate } from 'react-router-dom'

export function Portfolio() {
  const { lang } = useParams()
  const navigate = useNavigate()
  const info = lang === 'en' ? en : lang === 'es' ? es : undefined
  const navLinks = (e) => {
    // e.preventDefault()
  }
  return (
    <>
      <nav>
        <ul className='nav-ul'>
          <a href='#About_me' onClick={(e) => navLinks(e)}>
            <li className='active'>About me</li>
          </a>
          <a href='#Skills' onClick={(e) => navLinks(e)}>
            <li>Skills</li>
          </a>
          <a href='#Projects' onClick={(e) => navLinks(e)}>
            <li>Projects</li>
          </a>
        </ul>
      </nav>
      <div className='lang-selector'>
        <span>
          <Link to={lang === 'en' ? '/es' : '/en'}>
            {lang === 'en' ? 'Spanish' : 'Inglés'}
          </Link>
        </span>
        <span>{lang === 'en' ? 'Language' : 'Idioma'}</span>
      </div>
      <main className='portfolio'>
        <section className='section-profile' id='About_me'>
          <div className='section-profile-container'>
            <div>
              <div className='span-container'>
                <span>{lang === 'en' ? 'Hi! I am' : 'Hola! soy'}</span>
                <span className='name'>{info.name}</span>
                <span className='tag'>{info.tag}</span>
              </div>
            </div>
            <div className='img'>
              <img src='/src/assets/toPortfolio-fake.png' alt='' />
            </div>
            <div className='about-me-grid'>
              <div className='about-me-container-p'>
                <p>{info.aboutMe}</p>
              </div>
              <div className='social-container'>
                {info.Contact.map((social) => (
                  <a href={social.link} target='_blank' key={social.name}>
                    <div className='social-img'>
                      <img src={social.logo} alt={social.name} />
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section className='skills-section' id='Skills'>
          <main className='main-skills'>
            <h2>{lang === 'en' ? 'Skills' : 'Habilidades'}</h2>
            <section className='tec-container'>
              {info.skills.map((tec) => (
                <Tag key={tec} skill={tec + '.svg'} type={'icon'}>
                  <div className='message-skill'>{tec}</div>
                </Tag>
              ))}
            </section>
          </main>
          <section className='other-skills'>
            <h3>{lang === 'en' ? 'Other skills' : 'Otras habilidades'}</h3>
            <section className='tag-section'>
              {info['other-skills'].languages.map((lang) => (
                <Tag key={lang[0]} type={'tag'} tag={lang[0] + '-' + lang[1]} />
              ))}
            </section>
            <section className='tag-section'>
              {info['other-skills'].Others.map((skill) => (
                <Tag
                  key={skill}
                  skill={skill + '.png'}
                  type={'tag'}
                  tag={skill}
                />
              ))}
            </section>
          </section>
        </section>
        <section className='project-section' id='Projects'>
          <h2>{lang === 'en' ? 'Projects' : 'Proyectos'}</h2>
          <div className='project-container'>
            {info.projects.map((project) => (
              <div key={project.name} className='project'>
                <div className='project-preview-container'>
                  <img
                    src={project.preview}
                    alt={`${project.name} preview`}
                    className='project-preview'
                  />
                </div>
                <div className='project-info-container'>
                  {project.name}
                  <p className='project-description'>{project.description}</p>
                  <div className='sticker-skills-container'>
                    {project.tecs.map((tec) => (
                      <Tag key={tec} skill={tec + '.svg'} type={'sticker'} />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <h3>{lang === 'en' ? 'Libreries' : 'Librerías'}</h3>
          <div className='libs-container'>
            {info.libreries.map((lib) => (
              <div key={lib.name} className='lib'>
                <div className='package-info'>
                  <span className='package-name'>{lib.name}</span>
                  <span className='tec-package'>{lib.tec}</span>
                </div>
                <div className='packages-container'>
                  <a href={lib.gitHub} target='_blank'>
                    <button className='package-link'>
                      <img src='/src/assets/Icons/github.svg' alt='' />
                    </button>
                  </a>
                  <a href={lib.npm} target='_blank'>
                    <button className='package-link'>
                      <img src='/src/assets/Icons/npm.svg' alt='' />
                    </button>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <footer className='footer'>
        <span>alksjdlkajs</span>
      </footer>
    </>
  )
}
