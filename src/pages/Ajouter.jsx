import { useState } from 'react'

export default function Ajouter() {
  const [film, setFilm] = useState({
    titre: '',
    description: '',
    date: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Film ajouté :', film)
    alert('Film ajouté avec succès (stocké localement)')
    setFilm({ titre: '', description: '', date: '' })
  }

  return (
    <div>
      <h1>Ajouter un film</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Titre"
          value={film.titre}
          onChange={(e) => setFilm({ ...film, titre: e.target.value })}
        />
        <textarea
          placeholder="Description"
          value={film.description}
          onChange={(e) => setFilm({ ...film, description: e.target.value })}
        />
        <input
          type="date"
          value={film.date}
          onChange={(e) => setFilm({ ...film, date: e.target.value })}
        />
        <button type="submit">Ajouter</button>
      </form>
    </div>
  )
}
