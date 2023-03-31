import React, { useState,useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import "./feedback.css";

export default function Feedback() {
    const history = useHistory()
    // const rating1 = ["5/5","4/5","3/5","2/5","1/5"] 
    const [user, setUser] = useState({ rating: "", rate: "", suggestions: "" })
    const [state, setstate] = useState(false)
    
    const callFeedBackPage=async()=>{
        try{
            const res=await fetch('/about',{
                method:"GET",
                headers:{
                    Accept : "application/json",
                    "Content-Type" : "application/json"
                },
                Credential: "include"
            });
            await res.json();
            if(!res.status===200){
                const error=new Error(res.error);
                throw error;
            }
        }catch(err){
            history.push('/Login')
        }
    };

    useEffect(()=>{
        callFeedBackPage();
    });

    let value, name
    const handle = (e) => {
        name = e.target.name;
        value = e.target.value;
        console.log(user.suggestions, user.rating, user.rate);
        setUser({ ...user, [name]: value })
    }

    const PostData = async (e) => {
        e.preventDefault();
        const { rating, rate, suggestions } = user;

        const res = await fetch("/feed", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                rate, rating, suggestions
            })
        });

        const data = await res.json();
        setUser({suggestions:null,rate:null,rating:null})
        // console.log(rating, rate, suggestions);
        // setstate(true)
        if (((data.rate && data.rating) && data.suggestions)||res.status===400) {
            return window.alert("* Please fill the Feedback form before click on SUBMIT *");
            // console.log("* Please fill the Feedback form *");
            // history.push('/');
        }else{
            // window.alert("* Please fill the Feedback form before click on SUBMIT *");
            // console.log("* Please fill the Feedback form *");
            window.alert("Thanks for giving the feedback.");
            console.log("Thanks for giving the feedback.");
            setUser({suggestions:""})
            setstate(true)
            return history.push('/');
        }
        
        // !data.suggestions || !data.rate || !data.rating  
    }
    return (
        <div>
            <form className="form_con" method="POST">
                <div className="cont_">
                    <label htmlFor="rate">How would you describe our product ?</label><br />
                    <div className="cont">
                        <div className="star-widget">
                            <input type="radio" name="rating" id="rate-5" value="5/5"  onChange={handle} />
                            <label htmlFor="rate-5" className="fas fa-star"></label>
                            <input type="radio" name="rating" id="rate-4" value="4/5"  onChange={handle} />
                            <label htmlFor="rate-4" className="fas fa-star"></label>
                            <input type="radio" name="rating" id="rate-3" value="3/5"  onChange={handle} />
                            <label htmlFor="rate-3" className="fas fa-star"></label>
                            <input type="radio" name="rating" id="rate-2" value="2/5"  onChange={handle} />
                            <label htmlFor="rate-2" className="fas fa-star"></label>
                            <input type="radio" name="rating" id="rate-1" value="1/5"  onChange={handle} />
                            <label htmlFor="rate-1" className="fas fa-star"></label>
                        </div>
                        <header></header>
                        <label htmlFor="rating">How would you describe your experience with our Service ?</label><br />
                        <div className="check">
                            <label className="container_">Great
                                <input type="radio" name="rate" value="Great"  onChange={handle} />
                                <span className="checkmark"></span>
                            </label>
                            <label className="container_">Good
                                <input type="radio" name="rate" value="Good"  onChange={handle} />
                                <span className="checkmark"></span>
                            </label>
                            <label className="container_">Okay
                                <input type="radio" name="rate" value="Okay"  onChange={handle} />
                                <span className="checkmark"></span>
                            </label>
                            <label className="container_">Poor
                                <input type="radio" name="rate" value="Poor"  onChange={handle} />
                                <span className="checkmark"></span>
                            </label>
                        </div >
                        <label htmlFor="text" className="text_">Is there anything else you'd like to share about our product and cutomer experience</label><br />
                        <div className="text">
                            <textarea name="suggestions" id="" cols="50" rows="4" placeholder="Describe your experience..." value={user.suggestions} onChange={handle} ></textarea>
                        </div>
                        <button type="submit" className="submit1" onClick={PostData}>Submit</button>
                    </div>
                        <div>
                            {state? "Thanks For Giving The FeedBack":""}
                        </div>
                </div>
            </form>
        </div>
    )
}
