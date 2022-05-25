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
  Portfolio,
  Blog,
} from "./pages/index";
import {
  AddProduct,
  AllUsers,
  ManageOrder,
  ManageProduct,
  MyOrder,
  MyProfile,
  MyReview,
} from "./pages/Dashboard";
import RequireAdmin from "./helper/RequireAdmin";
import RequireUser from "./helper/RequireUser";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/blog" element={<Blog />} />
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
          <Route
            path="review"
            element={
              <RequireUser>
                <MyReview />
              </RequireUser>
            }
          />
          <Route
            path="order"
            element={
              <RequireUser>
                <MyOrder />
              </RequireUser>
            }
          />
          <Route
            path="users"
            element={
              <RequireAdmin>
                <AllUsers />
              </RequireAdmin>
            }
          />
          <Route
            path="manage-order"
            element={
              <RequireAdmin>
                <ManageOrder />
              </RequireAdmin>
            }
          />
          <Route
            path="manage-product"
            element={
              <RequireAdmin>
                <ManageProduct />
              </RequireAdmin>
            }
          />
          <Route
            path="add-product"
            element={
              <RequireAdmin>
                <AddProduct />
              </RequireAdmin>
            }
          />
        </Route>
        <Route path="/*" element={<Error404 />} />
      </Routes>
      <Footer />
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
}

export default App;
