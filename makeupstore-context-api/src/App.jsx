import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './Components/Navbar'
import Products from './Pages/Products'
import Hero from './Components/Hero';
import Footer from "./Components/Footer";
import Cart from "./Pages/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartContext } from "./Features/ContextProvider";
import Checkout from "./Pages/Checkout";
function App() {

  return (
   <>
   <BrowserRouter>
      <Navbar/>
         <Hero/>

      <Routes>
        <Route path="/" element= {<Products></Products>}></Route>
        <Route path="/cart" element= {<Cart value={CartContext}></Cart>}>Kurv</Route>
        <Route path="/checkout" element= {<Checkout value={CartContext} />}>Checkout</Route>

      </Routes>
   <Footer/>
   </BrowserRouter>
</>
  )
}

export default App
