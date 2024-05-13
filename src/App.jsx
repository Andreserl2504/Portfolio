import './App.css'
import { Tag } from './components/Tag'
import info from './information/portfolio.json'

function App() {
  const navLinks = (e) => {
    e.preventDefault()
  }

  return (
    <>
      <nav>
        <ul className='nav-ul'>
          <a href='' onClick={(e) => navLinks(e)}>
            <li className='active'>About me</li>
          </a>
          <a href='' onClick={(e) => navLinks(e)}>
            <li>Skills</li>
          </a>
          <a href='' onClick={(e) => navLinks(e)}>
            <li>Projects</li>
          </a>
        </ul>
      </nav>
      <main className='portfolio'>
        <section className='section-profile'>
          <div>
            <div className='span-container'>
              <span>Hi! I am</span>
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
        </section>
        <section className='skills-section'>
          <main className='main-skills'>
            <h2>Skills</h2>
            <section className='tec-container'>
              {info.skills.map((tec) => (
                <Tag key={tec} skill={tec + '.svg'} type={'icon'}>
                  <div className='message-skill'>{tec}</div>
                </Tag>
              ))}
            </section>
          </main>
          <section className='other-skills'>
            <h3>Other Skills</h3>
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
        <section className='project-section'>
          <h2>projects</h2>
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
          <h3>Libreries</h3>
          <div>
            {info.libreries.map((lib) => (
              <div key={lib.name}>
                <div>{lib.name}</div>
                {lib.tecs.map((tec) => (
                  <Tag key={tec} skill={tec + '.svg'} type={'sticker'} />
                ))}
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  )
}

export default App
