import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom'
import "./login.css"

export default function Log() {
    const history = useHistory()
    const [users, setUsers] = useState({ name: "", email: "", password: "", cpassword: "" })

    let value, name
    const handle = (e) => {
        name = e.target.name;
        value = e.target.value;
        console.log(users.name, users.email, users.password, users.cpassword);
        setUsers({ ...users, [name]: value })
    }

    const PostData = async (e) => {
        e.preventDefault()
        const { name, email, password, cpassword } = users;

        const res = await fetch("/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name, email, password, cpassword
            })
        });

        const data = await res.json();
        // console.log(name, email, password, cpassword);
        if (!data || res.status === 400) {
            window.alert("* Please fill the Sign Up *");
            console.log("* Please fill the Sign Up *");
        } else {
            window.alert("Registration Successfull");
            console.log("Registration Successfull");
            history.push('/Login');
            // history.push('/');
        }
    }
    return (
        <div>
            <div className="container__">

                <div className="signup-content">
                    <div className="signup-form">
                        <h2 className="form-title">Sign up</h2>
                        <form method="POST" className="register-form" id="register-form">
                            <div className="form-group">
                                <label htmlFor="name"><i className="zmdi zmdi-account"></i></label>
                                <input type="text" name="name" id="name" value={users.name} onChange={handle} placeholder="Your Name" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email"><i className="zmdi zmdi-email"></i></label>
                                <input type="email" name="email" id="email" value={users.email} onChange={handle} placeholder="Your Email" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password"><i className="zmdi zmdi-lock"></i></label>
                                <input type="password" name="password" id="password" value={users.password} onChange={handle} placeholder="Password" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="cpassword"><i className="zmdi zmdi-lock-outline"></i></label>
                                <input type="password" name="cpassword" id="cpassword" value={users.cpassword} onChange={handle} placeholder="Confirm your password" />
                            </div>
                            {/* <div className="form-group">
                                <input type="checkbox" name="agree-term" id="agree-term" className="agree-term" />
                                <label htmlFor="agree-term" className="label-agree-term"><span><span></span></span>I agree all statements in  <Link to="#" className="term-service">Terms of service</Link></label>
                            </div> */}
                            <div className="form-group form-button">
                                <input type="submit" name="signup" id="signup" className="form-submit" onClick={PostData} value="Register" />
                            </div>
                        </form>
                    </div>
                    <div className="signup-image">
                        <figure><img src="images/signup-image.jpg" alt="" /></figure>
                        <NavLink  to="/Login" className="signup-image-link">I am already member</NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}
