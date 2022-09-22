import React from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
    return (
        <>
            <nav className="nav">
                <h1 className="nav-title">Next Step</h1>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/adduser">Add User</Link>
                    </li>
                    <li>
                        <Link to="/user">User</Link>
                    </li>
                    <li>
                        <Link to="/Test">Test</Link>
                    </li>
                </ul>
            </nav>
        </>
    );
}
export default Navbar;