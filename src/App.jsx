import { useState } from 'react'
import './App.css'
import { Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Accueil from './pages/Accueil'
import Recherche from './pages/Recherche'
import Ajouter from './pages/Ajouter'
import  DetailsFilm  from './pages/DetailsFilm'
import { Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
    <Routes>
      <Navbar />
      <Routes>
      <Route path="/" element={<Accueil />} />
      <Route path="/recherche" element={<Recherche />} />
      
      <Route path="/ajouter" element={<Ajouter />} />
      
      <Route path="/film/:id" element={<DetailsFilm />} />
    </Routes>
    </Routes>
        </div>
    </>
  )
}

export default App
