import "./Style.css";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () =>{
  const location = useLocation();
  const [activePage, setActivePage] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setActivePage(location.pathname);
  }, [location.pathname]);

  const toggleMenuOpen = () =>{
    setMenuOpen(!menuOpen);
  }
  const closeMenu = () =>{
    setMenuOpen(!menuOpen);
  }


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
        <svg onClick={toggleMenuOpen} className="mobile-icon" width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 10H7" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M21 6H3" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M21 14H3" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M21 18H7" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <div className="container-menu-mobile" style={{left: menuOpen ? "35%" : "100%"}}>
          <span onClick={closeMenu}>X</span>
          <nav className="mobile-nav">
            <ul>
              <li className={activePage === "/" ? "menu-item active" : "menu-item"} onClick={closeMenu}><Link to="/">Home</Link></li>
              <li className={activePage === "/series" ? "menu-item active" : "menu-item"} onClick={closeMenu}><Link to="/series">Séries</Link></li>
              <li className={activePage === "/filmes" ? "menu-item active" : "menu-item"} onClick={closeMenu}><Link to="/filmes">Filmes</Link></li>
              <li className={activePage === "/animes" ? "menu-item active" : "menu-item"} onClick={closeMenu}><Link to="/animes">Animes</Link></li>
              <li className={activePage === "/games" ? "menu-item active" : "menu-item"} onClick={closeMenu}><Link to="/games">Games</Link></li>
            </ul>
          </nav>
          <button>Minha conta</button>
        </div>
      </div>
    </header>
  )
}

export default Header;