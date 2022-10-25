import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className="header">
      <Link to="/create">
        <img
          src="https://img.icons8.com/external-photo3ideastudio-gradient-photo3ideastudio/64/000000/external-note-meeting-photo3ideastudio-gradient-photo3ideastudio.png"
          alt="note-icon"
          className="header-icons"
        />
      </Link>
      <Link to="/">
        <img
          src="https://img.icons8.com/nolan/64/home.png"
          alt="home-icon"
          className="header-icons"
        />
      </Link>
      <Link to="/delete">
        <img
          src="https://img.icons8.com/external-icongeek26-outline-gradient-icongeek26/64/000000/external-trash-city-life-icongeek26-outline-gradient-icongeek26.png"
          alt="trash-icon"
          className="header-icons"
        />
      </Link>
    </div>
  );
}