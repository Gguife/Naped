import { useRoutes } from "react-router-dom";

//Views
import Home from "../View/home/Index"

export const MainRouter = () =>{
  const router = useRoutes([
    {path: "/", element: <Home />},
  ])

  return router;
}