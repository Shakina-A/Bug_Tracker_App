import React from 'react';
import {Link} from "react-router-dom";
import { useAuth } from "../context/AuthContext";
const Navbar=()=> {
    const {user,logout}=useAuth();

    return (
        <nav style={{padding:10,borderBottom:"1px solid gray"}}>
            <Link to="/">Home</Link>{" "}
            {user ? (
                <>
                <Link to="/projects">Projects</Link> | <Link to="/bugs">Bugs</Link> |{" "}
                <Link to="/report">Reprt Bug</Link> |{" "}
                <button onClick={logout}>Logout</button>
                </>
            ):(
                <>
                <Link to="/login">Login</Link>| <Link to="/register">Register</Link></>
            )}
        </nav>
    );
};

export default Navbar;