import { useRoutes } from "react-router-dom";

//Views
import Home from "../View/home/Index"
import News from "../View/news/Index";
import Series from "../View/Series/Index";

export const MainRouter = () =>{
  const router = useRoutes([
    {path: "/", element: <Home />},
    {path: "/noticia", element: <News />},
    {path: "/series", element: <Series />}
  ])

  return router;
}