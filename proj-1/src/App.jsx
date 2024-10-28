// src/App.js
import React from "react";
import Header from "./components/Header.jsx";

import Dashboard from "./components/Dashboard.jsx";
import Footer from "./components/Footer.jsx";
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Dashboard />
      <Footer></Footer>
    </div>
  );
}

export default App;
