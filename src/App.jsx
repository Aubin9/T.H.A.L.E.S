import { useState ,useEffect} from 'react'
import './App.css'
import {BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom'
import NavBar from './components/Navbar'
import Pre from './components/Pre'
import ScrollToTop from "./components/ScrollToTop"
import Footer from "./components/Footer"
import Home from "./components/Home/Home"
import Testimonials from "./components/Testimonials/Testimonials"
import Resourse from "./components/Resources/ResourseNew"
import About from "./components/About/About"
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Pre load={load} />
      <Router>
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <NavBar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/A-propos" element={<About />} />
          <Route path="/resourse" element={<Resourse />} />
          <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
    </>
  )
}

export default App
