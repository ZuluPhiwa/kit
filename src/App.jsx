import Navbar from "./components/Navbar";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import { ShopContextProvider } from "./context/ShopContext";

function App() {


  return (
    <>
      
      <ShopContextProvider>
    <Router>
        <Navbar/>
              <Routes>
                <Route path="/home" element= {<Home/>}/>
                <Route path="/about" element={ <About/>}/>
                <Route path="/contact" element={ <Contact/>}/>
                <Route path="/cart" element={ <Cart/>}/>
              </Routes>
        </Router>
    </ShopContextProvider>
    </>
  )
}

export default App
