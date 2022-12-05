import React from "react";
import Main from "./Components/Main"
import Services from "./Components/Services";
import Contact from "./Components/Contact";
import Trip from "./Components/Trip";
import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Main />
      <Services/>
      <Trip/>
      <Contact/>
    </div>
  );
}

export default App;
