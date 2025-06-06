import { useQuery } from '@tanstack/react-query'
import { Link } from 'react-router-dom'
import axios from 'axios'

const fetchFilms = async () => {
  const res = await axios.get('https://api.themoviedb.org/3/discover/movie?api_key=2f1257f810d98d9c3d3160e53a8d8c12')
  return res.data.results
}

function Accueil() {
  const { data: films, isLoading, error } = useQuery({
    queryKey: ['filmsPopulaires'],
    queryFn: fetchFilms,
  })
console.log(films)
  if (isLoading) return <p>Chargement...</p>
  if (error) return <p>Erreur : {error.message}</p>

  return (
    <div>
      <h1>Films Populaires</h1>
      <ul>
        {films.map((film) => (
          <li key={film.id} style={{ marginBottom: '20px', listStyle: 'none' }}>
            <img 
              style={{ width: "300px", height: "250px", display: "block", marginBottom: "10px" }} 
              src={`https://image.tmdb.org/t/p/w500${film.poster_path}`} 
              alt={film.title} 
            />
            <Link to={`/film/${film.id}`}>{film.title}  </Link>
            <br />
            {film.overview}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Accueil