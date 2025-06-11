import { useState } from 'react'
import './App.css'
import PrincipalPage from './Views/PrincipalPage'
import NavBar from './Components/NavBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="layout">
  <header className="layout__header">
    <NavBar />
  </header>

  <main className="layout__main">
    <PrincipalPage/>
  </main>

  <footer className="layout__footer">
    {/* Puedes agregar contenido aquí, como enlaces, contacto, etc. */}
  </footer>
</div>

  )
}

export default App
