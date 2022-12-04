import React from "react";
import Main from "./Components/Main"
import Services from "./Components/Services";
import Contact from "./Components/Contact";
import Trip from "./Components/Trip";
import Footer from "./Components/Footer";
function App() {
  return (
    <div className="App">
      <Main />
      <Services/>
      <Trip/>
      <Contact/>
    </div>
  );
}

export default App;
