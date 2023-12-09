import ButtonPages from "../../components/buttonPage/Index";
import SearchInput from "../../components/searchInput/Index";
import "./Style.css";

const Animes = () =>{
  return(
    <div className="section animes-container">
      <div className="animes-main-image">
        <h1>Animes</h1>
        <p>O Naped pode ser sua fonte de informações sobre o mundo nerd e outros assuntos relacionados.</p>
      </div>

      <section>
        <SearchInput />
      </section>

      <section className="page-content">
        <div className="card-page-container">
          <div className="anime1-img-background image-card-page"></div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Nulla eros tellus, malesuada et velit in, blandit molestie dolor.
            </p>
          <div className="anime2-img-background image-card-page"></div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Nulla eros tellus, malesuada et velit in, blandit molestie dolor.
            </p>
          <div className="anime3-img-background image-card-page"></div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Nulla eros tellus, malesuada et velit in, blandit molestie dolor.
            </p>
        </div>

        <div className="card-page-container">
          <div className="anime4-img-background image-card-page"></div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Nulla eros tellus, malesuada et velit in, blandit molestie dolor.
            </p>
          <div className="anime5-img-background image-card-page"></div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Nulla eros tellus, malesuada et velit in, blandit molestie dolor.
            </p>
          <div className="anime6-img-background image-card-page"></div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Nulla eros tellus, malesuada et velit in, blandit molestie dolor.
            </p>
        </div>

        <div className="card-page-container">
          <div className="anime7-img-background image-card-page"></div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Nulla eros tellus, malesuada et velit in, blandit molestie dolor.
            </p>
          <div className="anime8-img-background image-card-page"></div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Nulla eros tellus, malesuada et velit in, blandit molestie dolor.
            </p>
          <div className="anime9-img-background image-card-page"></div>
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

export default Animes;