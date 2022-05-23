import React from "react";
import RequireAuth from "./helper/RequireAuth";
import { Toaster } from "react-hot-toast";
import { Routes, Route } from "react-router-dom";
import { Footer, Navbar } from "./shared/index";
import { Home, Login, Purchase, ProductDetails, Signup } from "./pages/index";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/details/:id"
          element={
            <RequireAuth>
              <ProductDetails />
            </RequireAuth>
          }
        />
        <Route
          path="/details/:id/purchase"
          element={
            <RequireAuth>
              <Purchase />
            </RequireAuth>
          }
        />
      </Routes>
      <Footer />
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
}

export default App;
