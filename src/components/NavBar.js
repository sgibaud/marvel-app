import React from "react";
import "../css/layout.css";
import MenuIcon from '@material-ui/icons/Menu';

import {Link} from "react-router-dom";




const NavBar = ({ open }) => {
  return (
    <nav className="nav-bar">
      <picture id='logo' className='nav-logo'></picture>
      <div className="nav-space" />
      <div className="nav-items">
        <input id="searchBar" type="text" placeholder="Rechercher"></input>
        <div className="links">
          <Link to="/home">Accueil</Link>
          <Link to="/personnages">Personnages</Link>
          <Link to="/personnages">Créateurs</Link>
        </div>
      </div>
      <div onClick={open} className="nav-icon">
        <MenuIcon fontSize="large"/>
      </div>
    </nav>
  );
};

export default NavBar;