import React from 'react'
import Header from "./components/Header.jsx";
import Section from './components/Section.jsx';
import Footer from './components/Footer.jsx';

import './App.css'

const App = () => {
  return (
    <div className="app-main">
      <Header />
      <Section />
      <Footer />
    </div>
  )
}

export default App;