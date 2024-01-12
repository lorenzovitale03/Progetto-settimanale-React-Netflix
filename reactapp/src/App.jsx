import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Main from './components/Main'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar/>
      <Main/>
      <Footer/>
    </>
  )
}

export default App
