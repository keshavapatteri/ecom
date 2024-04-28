
import React from 'react';
import Header from "./components/Header";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductDetails from './components/pages/ProductDetails';



function App() {
  return (
    <Router>
      {/* The header remains consistent across all routes */}
      <Header />
      <Routes>
        {/* Define routes using the Route component */}
        {/* More specific routes should come first */}
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={<Home />} />
        
        <Route path="/:id" element={<ProductDetails />} />

      </Routes>
      {/* The footer remains consistent across all routes */}
      <Footer />
    </Router>
  );
}

export default App;

