import { Route, Routes } from "react-router-dom"
import Home from "./home"
import About from "./about"
import Navbar from "./navbar"
import Services from "./services"
import Contact from "./contact"
import Help from "./help"



function App() {
  

  return (
    <>
    <Navbar/>
    <Routes>
      <Route index element={ <Home />}/>
      <Route path="/about" element={ <About />}/>
      <Route path="/services" element={ <Services />}/>
      <Route path="/contact" element={ <Contact />}/>
      <Route path="/help" element={ <Help />}/>
    </Routes>
      
    </>
  )
}

export default App
