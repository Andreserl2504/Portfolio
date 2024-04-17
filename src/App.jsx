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
          <div className='about-me-container'>
            <div className='img'>
              <img src='/src/assets/img.jpg' alt='' />
              <span className='figure'></span>
            </div>
            <div>
              <div className='span-container'>
                <span>Hi! I am</span>
                <span className='name'>{info.name}</span>
                <span className='tag'>{info.tag}</span>
              </div>
              <div className='contact-container'>
                <div className='social-container'>
                  <div>
                    {info.Contact.map((social) => (
                      <a href={social.link} target='_blank' key={social.name}>
                        <button className='social-btn'>
                          <img src={social.logo} alt={social.name} />
                          <span>{social.name}</span>
                        </button>
                      </a>
                    ))}
                  </div>
                </div>
                <div className='about-me-container-p'>
                  <p>{info.aboutMe}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='skills-section'>
          <h2>Skills</h2>
          <section className='tec-container'>
            {
              info.skills.map(tec => (<Tag tec={tec} type={'icon'}/>))
            }
          </section>
        </section>
      </main>
    </>
  )
}

export default App
