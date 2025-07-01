import { BrowserRouter, Routes, Route } from 'react-router-dom'; // ✅ FIXED
import './App.css';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ScrollToTop from './components/ScrollToTop';
import ProductDetails from './components/ProductDetails';

function App() {
  return (
    <>
      <BrowserRouter>
      <ScrollToTop />
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='product/:id' element={<ProductDetails />}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
