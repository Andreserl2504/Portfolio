import './App.css'
import { Avatar } from './components/Avatar'
import info from './information/portfolio.json'

function App() {
  return (
    <>
      <main className='portfolio'>
        <section className='section-profile'>
          <div>
            <Avatar/>
          </div>
          <div className='span-container'>
            <span>{info.name}</span>
            <span>{info.tag}</span>
          </div>
        </section>
      </main>
    </>
  )
}

export default App
