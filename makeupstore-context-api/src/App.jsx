import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './Components/Navbar'
import Products from './Pages/Products'
import Hero from './Components/Hero';
import Footer from "./Components/Footer";
import Cart from "./Pages/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartContext } from "./Features/ContextProvider";
function App() {

  return (
   <>
   <BrowserRouter>
      <Navbar/>
         <Hero/>

      <Routes>
        <Route path="/" element= {<Products></Products>}></Route>
        <Route path="/cart" element= {<Cart value={CartContext}></Cart>}></Route>

      </Routes>
   <Footer/>
   </BrowserRouter>
   </>
  )
}

export default App
