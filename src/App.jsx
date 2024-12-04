import Header from './components/Header/header'
import Footer from './components/Footer/footer'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Inicio from './Pages/Inicio/Inicio'
import Doados from './Pages/Doados/Doados'
import QueroDoar from './Pages/QueroDoar/QueroDoar'

import './global.scss'

export default function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/doados" element={<Doados />} />
            <Route path="/queroDoar" element={<QueroDoar />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  )
}
