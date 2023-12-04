import "./Style.css";

const Hero = () => {

  
  return (
    <section className="hero">
      <div className="hero-title">
        <h1>Mundo Nerd? <br />Naped!</h1>
        <p>O Naped pode ser sua fonte de informações sobre o mundo nerd e outros assuntos relacionados.</p>
      </div>
      <div className="hero-img-content">
        <div className="main-image">
          <span>Lorem</span>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.</p>
        </div>
        <div className="dupla-image">  
          <div className="image2">
            <span>Lorem</span>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.</p>
          </div>
          <div className="image3">
            <span>Lorem</span>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero;