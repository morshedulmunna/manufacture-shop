import React from "react";
import RequireAuth from "./helper/RequireAuth";
import { Toaster } from "react-hot-toast";
import { Routes, Route } from "react-router-dom";
import { Footer, Navbar } from "./shared/index";
import {
  Home,
  Login,
  Purchase,
  ProductDetails,
  Signup,
  Dashboard,
  Error404,
} from "./pages/index";
import { MyOrder, MyProfile, MyReview } from "./pages/Dashboard";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/place-order/:id"
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
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        />
        <Route
          path="dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        >
          <Route index element={<MyProfile />} />
          <Route path="review" element={<MyReview />} />
          <Route path="order" element={<MyOrder />} />
        </Route>
        <Route path="/*" element={<Error404 />} />
      </Routes>
      <Footer />
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
}

export default App;
