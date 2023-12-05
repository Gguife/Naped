import "./Style.css";
import Anime1 from "../../../assets/anime6.png";
import Anime2 from "../../../assets/anime8.png";
import Filme1 from "../../../assets/filme7.png";
import Filme2 from "../../../assets/filme4.png";
import Game1 from "../../../assets/jogo4.png";
import Game2 from "../../../assets/jogo5.png";

const NewsHome = () =>{
  return(
    <div className="news-container">
      <h1>Notícias mais recentes <hr /></h1>
      <div className="news-cards">
        <div className="news-card">
          <img src={Anime1} alt="" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Nulla eros tellus, malesuada et velit in, blandit molestie dolor.
          </p>
          <button>Veja mais</button>
        </div>

        <div className="news-card">
          <img src={Game1} alt="" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Nulla eros tellus, malesuada et velit in, blandit molestie dolor.
          </p>
          <button>Veja mais</button>
        </div>
        
        <div className="news-card">
          <img src={Filme1} alt="" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Nulla eros tellus, malesuada et velit in, blandit molestie dolor.
          </p>
          <button>Veja mais</button>
        </div>
        
        <div className="news-card">
          <img src={Filme2} alt="" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Nulla eros tellus, malesuada et velit in, blandit molestie dolor.
          </p>
          <button>Veja mais</button>
        </div>
        
        <div className="news-card">
          <img src={Anime2} alt="" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Nulla eros tellus, malesuada et velit in, blandit molestie dolor.
          </p>
          <button>Veja mais</button>
        </div>
        
        <div className="news-card">
          <img src={Game2} alt="" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Nulla eros tellus, malesuada et velit in, blandit molestie dolor.
          </p>
          <button>Veja mais</button>
        </div>
      </div>
    </div>
  )
}

export default NewsHome;