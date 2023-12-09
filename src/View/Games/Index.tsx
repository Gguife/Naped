import ButtonPages from "../../components/buttonPage/Index";
import SearchInput from "../../components/searchInput/Index";
import "./Style.css";

const Games = () =>{
  return(
    <div className="section games-container">
      <div className="games-main-image">
        <h1>Filmes</h1>
        <p>O Naped pode ser sua fonte de informações sobre o mundo nerd e outros assuntos relacionados.</p>
      </div>

      <section>
        <SearchInput />
      </section>

      <section className="page-content">
      <div className="card-page-container">
          <div className="game1-img-background image-card-page"></div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Nulla eros tellus, malesuada et velit in, blandit molestie dolor.
            </p>
          <div className="game1-img-background image-card-page"></div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Nulla eros tellus, malesuada et velit in, blandit molestie dolor.
            </p>
          <div className="game1-img-background image-card-page"></div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Nulla eros tellus, malesuada et velit in, blandit molestie dolor.
            </p>
        </div>

        <div className="card-page-container">
          <div className="game2-img-background image-card-page"></div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Nulla eros tellus, malesuada et velit in, blandit molestie dolor.
            </p>
          <div className="game2-img-background image-card-page"></div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Nulla eros tellus, malesuada et velit in, blandit molestie dolor.
            </p>
          <div className="game2-img-background image-card-page"></div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Nulla eros tellus, malesuada et velit in, blandit molestie dolor.
            </p>
        </div>

        <div className="card-page-container">
          <div className="game3-img-background image-card-page"></div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Nulla eros tellus, malesuada et velit in, blandit molestie dolor.
            </p>
          <div className="game3-img-background image-card-page"></div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Nulla eros tellus, malesuada et velit in, blandit molestie dolor.
            </p>
          <div className="game3-img-background image-card-page"></div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Nulla eros tellus, malesuada et velit in, blandit molestie dolor.
            </p>
        </div>
      </section>

      <section>
        <ButtonPages />
      </section>
    </div>
  )
}

export default Games;