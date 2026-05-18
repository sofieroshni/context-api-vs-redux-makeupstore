import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './Components/Navbar'
import Products from './Pages/Products'
import Hero from './Components/Hero';
import Footer from "./Components/Footer";
import { BrowserRouter, Route, Router } from "react-router";
function App() {

  return (
   <>
   <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element= {<Products></Products>}></Route>
                <Route path="/cart" element= {<Products></Products>}></Route>

      </Routes>
   <Hero/>
   <Products/>
   <Footer/>
   </BrowserRouter>
   </>
  )
}

export default App
