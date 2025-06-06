// App.jsx
import React, { useState } from 'react';

// Import des composants - Ajustez les chemins selon votre structure
import Navigation from './components/Navigation/Navigation';
import Accueil from './components/Accueil/Accueil';
import Recherche from './components/Recherche/Recherche';
import AjouterFilm from './components/AjouterFilm/AjouterFilm';
import DetailsFilm from './components/DetailsFilm/DetailsFilm';

// Import du CSS global
import './App.css';

const App = () => {
  const [currentPage, setCurrentPage] = useState('accueil');
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [addedMovies, setAddedMovies] = useState([]);

  const handleNavigate = (page, data = null) => {
    setCurrentPage(page);
    
    if (page === 'details') {
      setSelectedMovie(data);
    } else if (page !== 'details') {
      // Reset selected movie when navigating away from details
      setSelectedMovie(null);
    }
    
    // Scroll to top when navigating
    window.scrollTo(0, 0);
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'accueil':
        return <Accueil onNavigate={handleNavigate} />;
      
      case 'recherche':
        return <Recherche onNavigate={handleNavigate} />;
      
      case 'ajouter':
        return (
          <AjouterFilm 
            addedMovies={addedMovies} 
            setAddedMovies={setAddedMovies} 
          />
        );
      
      case 'details':
        return (
          <DetailsFilm 
            movie={selectedMovie} 
            onNavigate={handleNavigate} 
          />
        );
      
      default:
        return <Accueil onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="app">
      <Navigation currentPage={currentPage} onNavigate={handleNavigate} />
      <main className="main-content">
        {renderCurrentPage()}
      </main>
      <footer className="app-footer">
        <div className="footer-content">
          <p>&copy; 2024 Movie Manager. Projet pédagogique React JS.</p>
          <p>Données fournies par <a href="https://www.themoviedb.org/" target="_blank" rel="noopener noreferrer">The Movie Database (TMDb)</a></p>
        </div>
      </footer>
    </div>
  );
};

export default App;