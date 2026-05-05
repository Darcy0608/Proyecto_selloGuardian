//import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header'; 
import Aside from './Components/Aside';
import Footer from './Components/Footer';
import Registro from './pages/Registro';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-main">
        <Header />
        <div className="container">
          <Aside />
          <main className="content-area">
            <Routes>
              <Route path="/" element={<Registro />} />
              <Route path="/registro" element={<Registro />} />
            </Routes>
          </main>
        </div>
        <Footer />
      </div>
    </Router>
  );
}
export default App;