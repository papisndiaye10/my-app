import './App.css';
import Home from './component/Home'
import About from './component/About'
import Contact from './component/Contact'
import Product from './component/Product'
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Header from './component/Header';
import ProductDetail from './component/ProductDetail';
import Cart from './component/Cart'
import Checkout from './component/Checkout'
import Footer from './component/Footer';




function App() {
  return (
    <>
   <BrowserRouter>
   <Header />  
    <Routes>
      <Route path='/' element={<Home/>}/>
    </Routes>
    <Routes>
      <Route path='/about' element={<About/>}/>
    </Routes>
    <Routes>
      <Route path='/product' element={<Product/>}/>
    </Routes>
    <Routes>
      <Route path='/product/:id' element={<ProductDetail/>}/>
    </Routes>
    <Routes>
      <Route path='/cart' element={<Cart />}/>
    </Routes>
    <Routes>
      <Route path='/checkout' element={<Checkout />}/>
    </Routes>
    <Routes>
      <Route path='/contact' element={<Contact/>}/>
    </Routes>
    <Footer />
   </BrowserRouter>
    </>
  );
}

export default App;
