import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav>
      <Link to="/">Accueil</Link> | 
      <Link to="/recherche">Recherche</Link> | 
      <Link to="/ajouter">Ajouter</Link>
    </nav>
  )
}
