import React, { useState, useContext } from 'react'
import "./login.css"
import { NavLink, useHistory } from 'react-router-dom'
// import { GoogleLogin } from 'react-google-login'
import { UserContext } from '../App'
// import sign from "./Signup"
// import image from './images/signin-image.jpg'
export default function Login() {

    const { dispatch } = useContext(UserContext)

    const history = useHistory()
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    // const [name, setName] = useState('')
    // const [googleId, setGoogleId] = useState('')

    // async function resGoogle(){
        
    //     const  res = await fetch("/gLogin", {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json"
    //         },
    //         body: JSON.stringify({
    //             email,googleId
    //         })
    //     });
    
    //     await res.json();
    // }
    // const responseGoogle = async(response) => {
    //     setEmail(response.profileObj.email)
    //     setName(response.profileObj.name)
    //     setGoogleId(response.profileObj.googleId)
    //     const res = await fetch("/gSignup", {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json"
    //         },
    //         body: JSON.stringify({
    //             name, email,googleId
    //         })
    //     });
    
    //     await res.json();
    //     resGoogle()
    // }

    const PostData = async (e) => {
        e.preventDefault()
        const res = await fetch("/signin", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email, password
            })
        });

        const data = await res.json();
        if (!data || res.status === 400) {
            window.alert("* Please fill the Sign In Properly *");
            console.log("* Please fill the Sign In Properly *");
        } else {
            window.alert("Log In Successfull.");
            console.log("Log In Successfull.");
            dispatch({ type: "USER", payload: true })
            history.push('/');
            // history.push('/');
        }
    }
    return (
        <div>
            <div className="container__">
                <div className="signin-content">
                    <div className="signin-image">
                        <figure><img src="./images/signin-image.jpg" alt="" /></figure>
                        {/* <signup><signup/> */}
                        <NavLink to="/Signup" className="signup-image-link" >Create an account</NavLink>
                    </div>

                    <div className="signin-form">
                        <h2 className="form-title">Sign In</h2>
                        <form method="POST" className="register-form" id="login-form">
                            <div className="form-group">
                                <label for="email"><i className="zmdi zmdi-email"></i></label>
                                <input type="email" name="email" id="your_mail" value={email} onChange={(e) => { setEmail(e.target.value) }} autoComplete="off" placeholder="Your Email" />
                            </div>
                            <div className="form-group">
                                <label for="password"><i className="zmdi zmdi-lock "></i></label>
                                <input type="password" name="password" id="your_pass" value={password} onChange={(e) => { setPassword(e.target.value) }} placeholder="Password" />
                            </div>
                            {/* <div className="form-group">
                                <input type="checkbox" name="remember-me" id="remember-me" className="agree-term" />
                                <label for="remember-me" className="label-agree-term"><span><span></span></span>Remember me</label>
                            </div> */}
                            <div className="form-group form-button">
                                <input type="submit" name="signin" id="signin" className="form-submit" onClick={PostData} value="Log in" />
                            </div>
                        </form>
                        {/* <div className="social-login">
                            <span className="social-label">Or login with</span>
                            <ul className="socials"> */}
                                {/* <li>
                                    <GoogleLogin
                                        clientId="170954876554-7ngg9o1tdrdnphsphuqglhri2dkukjg1.apps.googleusercontent.com"
                                        buttonText="Login"
                                        onSuccess={responseGoogle}
                                        onFailure={responseGoogle}
                                        cookiePolicy={'single_host_origin'}
                                    />
                                </li> */}
                                {/* <li><Link to="#" className="link"><i className="display-flex-center zmdi zmdi-facebook"></i></Link></li> */}
                                {/* <li><Link to="#" className="link"><i className="display-flex-center zmdi zmdi-twitter"></i></Link></li> */}
                                {/* <li><Link to="#" className="link"><i className="display-flex-center zmdi zmdi-google"></i></Link></li> */}
                            {/* </ul> */}
                        {/* </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}
