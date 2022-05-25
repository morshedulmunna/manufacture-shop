import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../firebase/firebaseInit";
import useAdmin from "../Hooks/useAdmin";
import Loader from "./Loader";

const RequireUser = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  const [admin, adminLoading] = useAdmin(user);
  const location = useLocation();

  if (loading || adminLoading) {
    return <Loader />;
  }

  if (admin) {
    return <Navigate to="/" state={{ from: location }} replace></Navigate>;
  }
  return children;
};

export default RequireUser;
