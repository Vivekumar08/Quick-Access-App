import React,{useEffect} from 'react'
import Right from "./Right";
import Left from "./Left";
import "./Main.css";
import { useHistory } from 'react-router-dom';

export default function Main() {
    const history = useHistory();
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
    return (
        <>
        <div className="main_container">
                <div className="rig">
                    <Right />
                </div>
                <div className="lef">
                    <Left />
                </div>
            </div>
        </>
    )
}
