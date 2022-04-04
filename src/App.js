import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter,Route,Link, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Footer from './components/Footer';
import NotFound from './pages/NotFound';
import styles from "./components/Navbar.module.css"
import Detail from './pages/Detail';
import CheckOut from './pages/CheckOut';




function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar> </Navbar>
      <div className="main">
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>          
          <Route path='/about' element={<About></About>}></Route>
          <Route path='/products' element={<Products></Products>}></Route>
          <Route path='/products/detail/:id' element={<Detail></Detail>}></Route>
          <Route path='/checkout' element={<CheckOut></CheckOut>}></Route>
          <Route path='*' element={<NotFound></NotFound>}></Route>
       
        </Routes></div>
        <Footer></Footer>     
      </BrowserRouter>
    </div>
  );
}

export default App;
