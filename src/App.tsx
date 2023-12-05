import './App.css'
import Footer from './components/footer/Index'
import Header from './components/header/Index'
import { MainRouter } from './router/MainRouter'

function App() {

  return (
    <>
      <Header />
      <MainRouter />
      <Footer />
    </>
  )
}

export default App
