import NoScrollCard from "../../components/home/NoScrollCards/Index";
import Hero from "../../components/home/hero/Index";
import ScrollCards from "../../components/home/scrollCards/Index";
import "./Style.css";

const Home = () => {
  return (
    <div className="home">
        <section className="hero">
          <Hero />
        </section>
        <section className="section-scroll">
          <ScrollCards />
          <NoScrollCard />
        </section>
    </div>
  )
}

export default Home;