import React from "react";


const Navbar = () => {



return(
    <nav className="navbar">
        <h1>Next Step</h1>
    <div className="links">
        <ul>
            <li>
                <a href="/">Home</a>
            </li>
            <li>
                <a href="/adduser">Add User</a>
            </li>
            <li>
                <a href="/user">User</a>
            </li>
        </ul>
    </div>
    </nav>
);
}
export default Navbar;