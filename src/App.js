
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './component/About';
import Footer from './component/Footer';
import Header from './component/Header';
import Home from './component/Home';
import Login from './component/Login';
import Product from './component/Product';
import Signin from './component/Signin';


function App() {
  return (
    <React.Fragment>
      <header>
        <Header/>
      </header>
      <main>
        <Routes>
          <Route exact path ="/" element ={<Home />} />
          <Route path ="/product" element ={<Product/>} />
          <Route path ="/about" element ={<About/>} />
          <Route path ="/login" element ={<Login/>} />
          <Route path ="/signin" element ={<Signin/>} />
        </Routes>
      </main>
      <footer>
      <Footer/>
      </footer>
    </React.Fragment>
  );
}

export default App;
