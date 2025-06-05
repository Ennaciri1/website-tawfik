import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'

const fetchFilmDetails = async (id) => {
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`)
  return res.json()
}

export default function DetailsFilm() {
  const { id } = useParams()
  const { data: film, isLoading, error } = useQuery(['detailsFilm', id], () => fetchFilmDetails(id))

  if (isLoading) return <p>Chargement...</p>
  if (error) return <p>Erreur de chargement</p>
  if (!film) return <p>Film introuvable</p>

  return (
    <div>
      <h1>{film.name}</h1>
      {film.image && <img src={film.image.medium} alt={film.name} />}
      <div dangerouslySetInnerHTML={{ __html: film.summary }} />
      <p><strong>Langue :</strong> {film.language}</p>
      <p><strong>Date :</strong> {film.premiered}</p>
    </div>
  )
}
