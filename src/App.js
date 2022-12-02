import React from "react";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Card from "./Components/card/card";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Header/>
     <About/>
      <Card />
      <Contact/>
      <Footer />
    </div>
  );
}

export default App;
