import "./Style.css";

import ButtonPages from "../../components/buttonPage/Index";
import SearchInput from "../../components/searchInput/Index";


const Series = () =>{
  return(
    <div className="section series-container">
      <div className="series-main-image">
        <h1>Series</h1>
        <p>O Naped pode ser sua fonte de informações sobre o mundo nerd e outros assuntos relacionados.</p>
      </div>

      <section>
        <SearchInput />
      </section>

      <section className="page-content">
        <div className="card-page-container">
          <div className="serie1-img-background image-card-page"></div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Nulla eros tellus, malesuada et velit in, blandit molestie dolor.
            </p>
          <div className="serie1-img-background image-card-page"></div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Nulla eros tellus, malesuada et velit in, blandit molestie dolor.
            </p>
          <div className="serie1-img-background image-card-page"></div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Nulla eros tellus, malesuada et velit in, blandit molestie dolor.
            </p>
          <div className="serie1-img-background image-card-page"></div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Nulla eros tellus, malesuada et velit in, blandit molestie dolor.
            </p>
        </div>
        
        <div className="card-page-container">
          <div className="serie2-img-background image-card-page"></div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Nulla eros tellus, malesuada et velit in, blandit molestie dolor.
            </p>
          <div className="serie2-img-background image-card-page"></div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Nulla eros tellus, malesuada et velit in, blandit molestie dolor.
            </p>
          <div className="serie2-img-background image-card-page"></div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Nulla eros tellus, malesuada et velit in, blandit molestie dolor.
            </p>
          <div className="serie2-img-background image-card-page"></div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Nulla eros tellus, malesuada et velit in, blandit molestie dolor.
            </p>
        </div>

        <div className="card-page-container">
          <div className="serie3-img-background image-card-page"></div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Nulla eros tellus, malesuada et velit in, blandit molestie dolor.
            </p>
          <div className="serie3-img-background image-card-page"></div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Nulla eros tellus, malesuada et velit in, blandit molestie dolor.
            </p>
          <div className="serie3-img-background image-card-page"></div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Nulla eros tellus, malesuada et velit in, blandit molestie dolor.
            </p>
          <div className="serie3-img-background image-card-page"></div>
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

export default Series;