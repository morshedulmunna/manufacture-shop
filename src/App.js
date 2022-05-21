import React from "react";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./shared/index";
import { Home } from "./pages/index";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
