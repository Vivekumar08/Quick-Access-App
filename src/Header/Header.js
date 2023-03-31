import React, { useContext,useEffect } from 'react';

import { UserContext } from '../App'

import {
    Link,useLocation
} from "react-router-dom";
import "./header.css"
export default function Header() {
    let location = useLocation()
    useEffect(() => {
        console.log(location.pathname);
    }, [location])

    const { state} = useContext(UserContext)
    const RenderMenu = () => {
        if (state) {
            return (<>
                <li className="nav-item">
                    <Link className={`nav-link ${location.pathname==="/" ? "active" : ""}`}  aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className={`nav-link ${location.pathname==="/contact" ? "active" : ""}`}  to="/contact">Contact</Link>
                </li>
                <li className="nav-item">
                    <Link className={`nav-link ${location.pathname==="/feedback" ? "active" : ""}`}  to="/feedback">Feedback</Link>
                </li>
                <li className="nav-item">
                    <Link className={`nav-link ${location.pathname==="/Logout" ? "active" : ""}`}  to="/Logout">Log Out</Link>
                </li>
            </>)
        } else {
            return (
                <>
                    <li className="nav-item">
                        <Link className={`nav-link ${location.pathname==="/" ? "active" : ""}`}  aria-current="page" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className={`nav-link ${location.pathname==="/contact" ? "active" : ""}`}  to="/contact">Contact</Link>
                    </li>
                    <li className="nav-item">
                        <Link className={`nav-link ${location.pathname==="/feedback" ? "active" : ""}`}  to="/feedback">Feedback</Link>
                    </li>
                    <li className="nav-item">
                        <Link className={`nav-link ${location.pathname==="/Login" ? "active" : ""}`}  to="/Login">Sign In</Link>
                    </li>
                </>
            )
        }
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <span className="navbar-brand mb-0 h1" >Q-A-A</span>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <RenderMenu />
                        </ul>

                    </div>
                </div>
            </nav>
        </>
    )
}
