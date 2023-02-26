import React from "react";
import Routes from "./Components/AllRoutes/Routes";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";

function App() {
  return (
    <div style={{ backgroundColor: "#F3F1F1" }}>
      <Header />
      <Routes />
      <Footer />
    </div>
  );
}

export default App;
