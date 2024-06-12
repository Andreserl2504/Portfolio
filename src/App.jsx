import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useLayoutEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import { Portfolio } from './Portfolio'

function App() {
  const [lang, setLang] = useState('')
  useLayoutEffect(() => {
    const lang = navigator.languages[0]
    if (lang.includes('en')) {
      setLang('en')
    } else if (lang.includes('es')) {
      setLang('es')
    } else {
      setLang('en')
    }
  }, [])

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Navigate to={`/${lang}`} />} />
          <Route path='/:lang' element={<Portfolio />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
