import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/shared/NavBar/NavBar";
const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        {/* <Route path="/" element={<Home />} />
        <Route path="/" element={<Account />} /> */}
      </Routes>
    </div>
  );
};

export default App;
