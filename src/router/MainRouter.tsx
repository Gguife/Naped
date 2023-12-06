import { useRoutes } from "react-router-dom";

//Views
import Home from "../View/home/Index"
import News from "../View/news/Index";

export const MainRouter = () =>{
  const router = useRoutes([
    {path: "/", element: <Home />},
    {path: "/noticia", element: <News />},
  ])

  return router;
}