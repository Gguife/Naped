import "./Style.css";
import { Link } from "react-router-dom";

const ScrollCards = () =>{
  return (
    <div className="scroll">
      <article className="scroll-img-item">
        <div className="scroll-img anime">
          <span>Anime</span>
        </div>
        <div className="scroll-img-texts">
          <h2 className="scroll-img-title">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </h2>
          <p className="scroll-img-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros
            tellus, malesuada et velitin, blandit molestie dolor.
          </p>
          <p className="scroll-img-date">00/00/0000</p>
          <Link className="scroll-btn" to="">Ler notícia</Link>
        </div>
      </article>

      <article className="scroll-img-item">
        <div className="scroll-img movie">
          <span>Filme</span>
        </div>
        <div className="scroll-img-texts">
          <h2 className="scroll-img-title">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </h2>
          <p className="scroll-img-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros
            tellus, malesuada et velitin, blandit molestie dolor.
          </p>
          <p className="scroll-img-date">00/00/0000</p>
          <Link className="scroll-btn" to="">Ler notícia</Link>
        </div>
      </article>

      <article className="scroll-img-item">
        <div className="scroll-img game">
          <span>Jogo</span>
        </div>
        <div className="scroll-img-texts">
          <h2 className="scroll-img-title">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </h2>
          <p className="scroll-img-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros
            tellus, malesuada et velitin, blandit molestie dolor.
          </p>
          <p className="scroll-img-date">00/00/0000</p>
          <Link className="scroll-btn" to="">Ler notícia</Link>
        </div>
      </article>

      <article className="scroll-img-item">
        <div className="scroll-img serie">
          <span>Série</span>
        </div>
        <div className="scroll-img-texts">
          <h2 className="scroll-img-title">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </h2>
          <p className="scroll-img-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros
            tellus, malesuada et velitin, blandit molestie dolor.
          </p>
          <p className="scroll-img-date">00/00/0000</p>
          <Link className="scroll-btn" to="">Ler notícia</Link>
        </div>
      </article>

      <article className="scroll-img-item">
        <div className="scroll-img anime">
          <span>Anime</span>
        </div>
        <div className="scroll-img-texts">
          <h2 className="scroll-img-title">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </h2>
          <p className="scroll-img-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros
            tellus, malesuada et velitin, blandit molestie dolor.
          </p>
          <p className="scroll-img-date">00/00/0000</p>
          <Link className="scroll-btn" to="">Ler notícia</Link>
        </div>
      </article>

      <article className="scroll-img-item">
        <div className="scroll-img game">
          <span>Jogo</span>
        </div>
        <div className="scroll-img-texts">
          <h2 className="scroll-img-title">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </h2>
          <p className="scroll-img-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros
            tellus, malesuada et velitin, blandit molestie dolor.
          </p>
          <p className="scroll-img-date">00/00/0000</p>
          <Link className="scroll-btn" to="">Ler notícia</Link>
        </div>
      </article>

    </div>
  )
}

export default ScrollCards;