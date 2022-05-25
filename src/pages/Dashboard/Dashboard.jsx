import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../../firebase/firebaseInit";
import { GlobalCSS } from "../../helper";
import useAdmin from "../../Hooks/useAdmin";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  return (
    <div className={`drawer drawer-mobile ${GlobalCSS.container} mt-12`}>
      <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content mt-6">
        <Outlet></Outlet>
      </div>
      <div className="drawer-side">
        <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
          {/* <!-- Sidebar content here --> */}
          <li>
            <Link to="/dashboard">My Profile</Link>
          </li>
          {!admin && (
            <>
              <li>
                <Link to="/dashboard/order">My Order</Link>
              </li>
              <li>
                <Link to="/dashboard/review">Add Reviews</Link>
              </li>
            </>
          )}

          {admin && (
            <>
              <li>
                <Link to="/dashboard/users">Manage Users</Link>
              </li>
              <li>
                <Link to="/dashboard/manage-order">Manage Order</Link>
              </li>
              <li>
                <Link to="/dashboard/addProduct">Add Product</Link>
              </li>
              <li>
                <Link to="/dashboard/addProduct">Manage Product</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
