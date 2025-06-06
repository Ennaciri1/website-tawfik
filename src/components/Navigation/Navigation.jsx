// Navigation.js
import React from 'react';
import './Navigation.css';

const Navigation = ({ currentPage, onNavigate }) => {
  const menuItems = [
    { id: 'accueil', label: 'Accueil', icon: '🏠' },
    { id: 'recherche', label: 'Recherche', icon: '🔍' },
    { id: 'ajouter', label: 'Ajouter un film', icon: '➕' }
  ];

  return (
    <nav className="navigation">
      <div className="nav-container">
        <div className="nav-header">
          <button 
            onClick={() => onNavigate('accueil')}
            className="nav-logo"
          >
            🎬 Movie Manager
          </button>
        </div>
        <div className="nav-menu">
          {menuItems.map(item => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`nav-item ${currentPage === item.id ? 'nav-item-active' : ''}`}
            >
              {item.icon} {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;