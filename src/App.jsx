import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useLayoutEffect } from 'react'
import { Portfolio } from './Portfolio'
import './Portfolio.css'
import { Navigate } from 'react-router-dom'
import { useState } from 'react'

function App() {
  const [lang, setLang] = useState('')
  useLayoutEffect(() => {
    setLang(navigator.languages[0])
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
