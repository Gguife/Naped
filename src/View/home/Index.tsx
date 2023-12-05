import NoScrollCard from "../../components/home/NoScrollCards/Index";
import Hero from "../../components/home/hero/Index";
import NewsHome from "../../components/home/newsHome/Index";
import ScrollCards from "../../components/home/scrollCards/Index";
import "./Style.css";

const Home = () => {
  return (
    <div className="home">
        <section className="hero section">
          <Hero />
        </section>
        <section className="section-scroll section">
          <ScrollCards />
          <NoScrollCard />
        </section>
        <section className="section-news">
          <NewsHome />
        </section>
    </div>
  )
}

export default Home;