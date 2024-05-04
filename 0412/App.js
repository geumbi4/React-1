import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Services from './Services';
import Home from './Home';
import About from './About';
import './App.css';

function App() {

return (
  <div>
      <Header />
      <main>
        <Home />
        <About />
        <Services />
      </main>
      <Footer />
    </div>
);
}

export default App;