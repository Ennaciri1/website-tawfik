import { useQuery } from '@tanstack/react-query'
import { Link } from 'react-router-dom'

const fetchFilms = async () => {
  const res = await fetch('https://api.tvmaze.com/shows')
  return res.json()
}

export default function Accueil() {
  const { data: films, isLoading, error } = useQuery(['filmsPopulaires'], fetchFilms)

  if (isLoading) return <p>Chargement...</p>
  if (error) return <p>Erreur : {error.message}</p>

  return (
    <div>
      <h1>Films Populaires</h1>
      <ul>
        {films.slice(0, 20).map(film => (
          <li key={film.id}>
            <Link to={`/film/${film.id}`}>{film.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
