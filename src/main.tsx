import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './index.css'
import App from './App.tsx'
import Header from './components/Header.tsx';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <Header/>
      <Routes>
        {/* <Route path="/" element={<App />} /> */}
      </Routes>
    </Router>
  </StrictMode>,
)
