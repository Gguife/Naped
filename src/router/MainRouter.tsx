import { useRoutes } from "react-router-dom";

//Views
import Home from "../View/home/Index"
import News from "../View/news/Index";
import Series from "../View/Series/Index";
import Movies from "../View/movies/Index";
import Animes from "../View/Animes/Index";
import Games from "../View/Games/Index";
import NotFound from "../View/404/Index";

export const MainRouter = () =>{
  const router = useRoutes([
    {path: "/", element: <Home />},
    {path: "/noticia", element: <News />},
    {path: "/series", element: <Series />},
    {path: "/filmes", element: <Movies />},
    {path: "/animes", element: <Animes />},
    {path: "/games", element: <Games />},
    {path: "*", element: <NotFound />}
  ])

  return router;
}