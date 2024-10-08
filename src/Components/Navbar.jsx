import React, { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { user, logOut, signInWithGoogle } = useContext(AuthContext);

  return (
    <div className="navbar bg-base-100 border rounded">
      <div className="flex-1">
        <a className="text-xl md:text-4xl font-bold">
          Digi<span className="text-red-600">Market</span>
        </a>
      </div>
      <div className="flex-none gap-2">
        {user ? (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src={
                    user
                      ? user?.photoURL
                      : "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  }
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Profile</a>
              </li>
              <li>
                <a onClick={logOut}>Logout</a>
              </li>
            </ul>
          </div>
        ) : (
          <Link to={"/login"}>
            <button className="btn btn-secondary">Login</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
