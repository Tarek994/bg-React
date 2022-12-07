import React from "react";
import Main from "./Components/main/Main"
import Services from "./Components/services/Services";
import Contact from "./Components/contact/Contact";
import Trip from "./Components/trip/Trip";
import Footer from "./Components/footer/Footer";
import Navbar from "./Components/navbar/Navbar";

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Main/>
        <Services/>
        <Trip/>
        <Contact/>
        <Footer/>
      
    </div>
  );
}

export default App;
