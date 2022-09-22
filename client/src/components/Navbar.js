import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
return(
    <>
     <nav>
          <h1>Next Step</h1>
         <ul>
              <li>
                  <Link to="/">Home</Link>
              </li>
              <li>
                  <Link to="/adduser">Add User</Link>
              </li>
              <li>
                  <Link to="/userA">User</Link>
              </li>
            </ul>
        </nav>
    </>
);
}
export default Navbar;