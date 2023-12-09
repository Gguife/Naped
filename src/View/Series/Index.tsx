import "./Style.css";

import dois from "../../assets/filme5.png"
import ButtonPages from "../../components/buttonPage/Index";
import SearchInput from "../../components/searchInput/Index";

const SERIES_LIST = [
  {
    id: 1,
    img: "../../assets/filme5.png",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor."
  },
  {
    id: 2,
    img: "../../assets/filme7.png",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor."
  },
  {
    id: 3,
    img: "../../assets/filme1.png",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor."
  }
]

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

      <section className="series-content">
        <div className="serie1-container">
          <div className="serie1-img-background"></div>
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor."</p>
          <div className="serie1-img-background"></div>
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor."</p>
          <div className="serie1-img-background"></div>
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor."</p>
          <div className="serie1-img-background"></div>
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor."</p>
        </div>
        
        <div className="serie2-container">
          <div className="serie2-img-background"></div>
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor."</p>
          <div className="serie2-img-background"></div>
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor."</p>
          <div className="serie2-img-background"></div>
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor."</p>
          <div className="serie2-img-background"></div>
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor."</p>
        </div>

        <div className="serie3-container">
          <div className="serie3-img-background"></div>
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor."</p>
          <div className="serie3-img-background"></div>
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor."</p>
          <div className="serie3-img-background"></div>
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor."</p>
          <div className="serie3-img-background"></div>
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor."</p>
        </div>
      </section>

      <section className="button-page-section">
        <ButtonPages />
      </section>
    </div>
  )
}

export default Series;