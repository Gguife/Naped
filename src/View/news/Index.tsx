import NewsHome from "../../components/home/newsHome/Index";
import "./Style.css";

import Anime1 from "../../assets/anime6.png";
import Anime2 from "../../assets/anime7.png";

const News = () => {
  return(
    <div className="news">
      <section className="section news-header">
        <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis neque sed odio.</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <span>00 de Julho de 2021</span>
      </section>
      <main className="section news-main">
        <img src={Anime1} alt="" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Aliquam in mauris vel dolor consectetur scelerisque quis eu eros.
          Morbi varius eu odio nec vehicula. 
          Maecenas blandit nunc vitae enim fermentum, nec ullamcorper magna molestie. 
          Fusce efficitur ipsum ullamcorper tellus pharetra, et vehicula enim feugiat. 
          Sed scelerisque at orci rhoncus dapibus. 
          Donec maximus porttitor mauris. Sed tempus felis sit amet gravida sagittis. 
          Ut eleifend ornare leo et auctor.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Aliquam in mauris vel dolor consectetur scelerisque quis eu eros. 
          Morbi varius eu odio nec vehicula. 
          Maecenas blandit nunc vitae enim fermentum, nec ullamcorper magna molestie. 
          Fusce efficitur ipsum ullamcorper tellus pharetra, et vehicula enim feugiat. 
          Sed scelerisque at orci rhoncus dapibus. Donec maximus porttitor mauris. 
          Sed tempus felis sit amet gravida sagittis. 
          Ut eleifend ornare leo et auctor.
        </p>
        <img src={Anime2} alt="" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Aliquam in mauris vel dolor consectetur scelerisque quis eu eros. 
          Morbi varius eu odio nec vehicula. 
          Maecenas blandit nunc vitae enim fermentum, nec ullamcorper magna molestie. 
          Fusce efficitur ipsum ullamcorper tellus pharetra, et vehicula enim feugiat. 
          Sed scelerisque at orci rhoncus dapibus. Donec maximus porttitor mauris. 
          Sed tempus felis sit amet gravida sagittis. 
          Ut eleifend ornare leo et auctor.
        </p>
      </main>
      <section className="section-news">
        <NewsHome />
      </section>
    </div>
  )
}

export default News;