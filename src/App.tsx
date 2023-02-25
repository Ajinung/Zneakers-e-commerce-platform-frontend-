import React from "react";
import Routes from "./Components/AllRoutes/Routes";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";

function App() {
  return (
    <div style={{ backgroundColor: "#F3F1F1" }}>
      <Header />
      <Routes />
    </div>
  );
}

export default App;
