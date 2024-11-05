import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
/* Pages */
import Home from './pages/Home';
import Home2 from './pages/Home2';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home2" element={<Home2 />} />
        {/*<Route path="/about" element={<About />} />*/}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
