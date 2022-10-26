import React from 'react';
import { Link } from 'react-router-dom';
import '../style/Header.css';

export default function Header() {
  return (
    <div id="header">
      <Link to="/create">
        <img
          src="https://img.icons8.com/external-photo3ideastudio-lineal-photo3ideastudio/512/FFFFFF/external-note-meeting-photo3ideastudio-lineal-photo3ideastudio.png"
          alt="note-icon"
          className="header-icons"
        />
        <p>Novo conteúdo</p>
      </Link>
      <Link to="/">
        <img
          src="https://img.icons8.com/dotty/80/FFFFFF/home.png"
          alt="home-icon"
          className="header-icons"
        />
        <p>Conteúdos</p>
      </Link>
      <Link to="/search">
        <img
          src="https://img.icons8.com/pastel-glyph/512/FFFFFF/search--v2.png"
          alt="magnifying-glass-icon"
          className="header-icons"
          id="magnifying-glass"
        />
        <p>Busque um conteúdo por título</p>
      </Link>
    </div>
  );
}