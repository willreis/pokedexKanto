import React from "react";
import {Link} from 'react-router-dom';

function Menu() {
  return (
    <nav>
      <ul>
        <li><Link exact to="/">Home</Link></li>
        <li><Link exact to="/param/123">Param #01</Link></li>
        <li><Link exact to="/param/legal">Param #02</Link></li>
        <li><Link to="/sobre">Sobre</Link></li>
        <li><Link to="/naoExiste">Não Existe</Link></li>
      </ul>
    </nav>
  );
}

export default Menu;