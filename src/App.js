import React from "react";
import Main from "./Components/main/Main"
import Services from "./Components/services/Services";
import Contact from "./Components/contact/Contact";
import Trip from "./Components/trip/Trip";
import Footer from "./Components/footer/Footer";
import NavBar from "./Components/navbar/NavBar";

function App() {
  return (
    <div className="App">
        <NavBar/>
        <Main/>
        <Services/>
        <Trip/>
        <Contact/>
        <Footer/>
      
    </div>
  );
}

export default App;
