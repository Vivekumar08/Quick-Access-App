import React, { useState } from 'react';
import "./Date_day.css"


export default function DateAndTime() {
    let date = new Date().toLocaleDateString();
    let time = new Date().toLocaleTimeString();
    let day = new Date().getDay();

    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    const [ctime, setTime] = useState(time)
    const [cdate, setDate] = useState(date)


    function Update() {
        let time = new Date().toLocaleTimeString();
        setTime(time);

        let date = new Date().toLocaleDateString();
        setDate(date);
    }
    setInterval(Update, 100)
    return (
        <div className="day_box">
            <div className="time">
                <span>Time : {ctime}</span>
            </div>
            <div className="date">
                <span>Date : {cdate} , {days[day]}</span>
            </div>
            {/* <div className="day"> */}
                {/* <span>Day: {days[day]}</span> */}
            {/* </div> */}
        </div>
    )
}
