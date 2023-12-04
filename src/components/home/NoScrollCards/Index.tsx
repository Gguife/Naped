import "./Style.css";

const NoScrollCard = () =>{
  return(
    <div className="noscroll-container">
      <h1>Lorem ipsum dolor <hr /></h1>
      <div className="noscroll-img img1">
        <span>Lorem</span>
        <p className="noscroll-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros
          tellus, malesuada et velitin, blandit molestie dolor.
        </p>
      </div>

      <div className="noscroll-img img2">
        <span>Lorem</span>
        <p className="noscroll-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros
          tellus, malesuada et velitin, blandit molestie dolor.
        </p>
      </div>

      <div className="noscroll-img img3">
        <span>Lorem</span>
        <p className="noscroll-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros
          tellus, malesuada et velitin, blandit molestie dolor.
        </p>
      </div>
    </div>
  );
}

export default NoScrollCard;