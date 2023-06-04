import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/header/Header';
import Home from './page/home/Home';
import Shop from './page/shop/Shop'
import Footer from './components/footer/Footer';
import Blog from './page/blog/Blog';
import BlogSingle from './page/blog/BlogSingle';
import ShopSingle from './page/shop/ShopSingle';
import Cart from './page/cart/Cart';
import CheckOut from './page/checkout/CheckOut';
import Contact from './page/contact/Contact';
import About from './page/about/About';
import Dashbord from './page/dashbord/Dashbord';
import Log_Reg from './page/logine & reg/Log_Reg';

function App() {
  return (
    <>
    <BrowserRouter>
     <Header />
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/shop" element={<Shop />} />
      <Route exact path="/shopSingle" element={<ShopSingle />} />
      <Route exact path="/blog" element={<Blog />} />
      <Route exact path="/blogsingle" element={<BlogSingle />} />
      <Route exact path="/cart" element={<Cart />} />
      <Route exact path="/checkout" element={<CheckOut />} />
      <Route exact path="/contact" element={<Contact />} />
      <Route exact path="/about" element={<About />} />
      <Route exact path="/dashbord" element={<Dashbord />} />
      <Route exact path="/logreg" element={<Log_Reg />} />
    </Routes>
    <Footer />
    </BrowserRouter>
      
    </>
  );
}

export default App;
