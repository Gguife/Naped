import Hero from "../../components/hero/Index";
import ScrollCards from "../../components/scrollCards/Index";
import NoScrollCard from "../../components/scrollCards/NoScrollCards/Index";
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