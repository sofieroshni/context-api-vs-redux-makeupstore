import "bootstrap/dist/css/bootstrap.min.css";
// import Navbar from './Components/Navbar'
import Products from './Pages/Products'
// import Hero from './Components/Hero';
// import Footer from "./Components/Footer";
// import Cart from "./Pages/Cart";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// App.jsx
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Products />} />
                    {/* <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} /> */}
                </Routes>
            </Router>
        </>
    );
}
export default App;