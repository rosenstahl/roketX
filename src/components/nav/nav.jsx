import React from 'react';
import './NavBar.css'; // Die Styles sollten in einer separaten CSS-Datei sein

const NavBar = () => {
  const navItems = [
    { name: 'Notion', imgSrc: 'https://cdn.prod.website-files.com/6728a3e6f4f4161c235bc519/6728a6be92ee5ddf0080fb90_notion.png' },
    { name: 'Asana', imgSrc: 'https://cdn.prod.website-files.com/6728a3e6f4f4161c235bc519/6728a6bef9d004f8a9cf3b29_asana.png' },
    { name: 'Slack', imgSrc: 'https://cdn.prod.website-files.com/6728a3e6f4f4161c235bc519/6728a6be8c099d4e1ed55770_slack.png' },
    { name: 'Loom', imgSrc: 'https://cdn.prod.website-files.com/6728a3e6f4f4161c235bc519/6728a6be5b31ba243e4da377_loom.png' },
    { name: 'Spotify', imgSrc: 'https://cdn.prod.website-files.com/6728a3e6f4f4161c235bc519/6728a6bea97e140677496dae_spotify.png' }
  ];

  return (
    <div className="nav-wrap">
      <nav>
        <ul className="nav-list">
          {navItems.map((item, index) => (
            <li key={index} className="nav-item">
              <a href="#" className="nav-item__link">
                <img src={item.imgSrc} alt={`${item.name} app icon`} className="image" />
              </a>
              <div className="nav-item__tooltip">
                <div>{item.name}</div>
              </div>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;