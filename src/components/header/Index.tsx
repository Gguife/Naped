import "./Style.css";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () =>{
  const location = useLocation();
  const [activePage, setActivePage] = useState("");

  useEffect(() => {
    setActivePage(location.pathname);
  }, [location.pathname]);

  return (
    <header>
      <h1>Naped</h1>
      <div className="container-menu">
        <nav>
          <ul>
            <li className={activePage === "/" ? "menu-item active" : "menu-item"}><Link to="/">Home</Link></li>
            <li className={activePage === "/series" ? "menu-item active" : "menu-item"}><Link to="/series">Séries</Link></li>
            <li className={activePage === "/filmes" ? "menu-item active" : "menu-item"}><Link to="/filmes">Filmes</Link></li>
            <li className={activePage === "/animes" ? "menu-item active" : "menu-item"}><Link to="/animes">Animes</Link></li>
            <li className={activePage === "/games" ? "menu-item active" : "menu-item"}><Link to="/games">Games</Link></li>
          </ul>
        </nav>
        <button>Minha conta</button>
      </div>
      <div className="menu-mobile">

      </div>
    </header>
  )
}

export default Header;