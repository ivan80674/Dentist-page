import './App.css';
import { Route, Routes } from "react-router-dom";
import Home from "./Home"
import About from "./About"
import Services from "./Services"
import Contacts from "./Contacts"
import Navbar from "./Navbar"
import Footer from "./Footer"

function App() {
  return (
    <div className="App">

      <Navbar />

      <Routes>

      <Route path ="/" element = {<Home />} />
      <Route path ="/About" element = {<About />} />
      <Route path ="/Services" element = {<Services />} />
      <Route path="/Contacts" element = {<Contacts />} />

      </Routes>
      <About />
      <Services />
      <Contacts />
      <Footer />
     
      
      
    

    </div>
        
  );
}

export default App;
