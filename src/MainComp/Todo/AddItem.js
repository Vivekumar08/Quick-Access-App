import React, { useState } from 'react';
import "./item.css";
// import DateTimePicker from "react-datetime-picker"
// import {DateTimePickerComponent} from "@syncfusion/ej2-react-calendars"

export default function AddItem({ addTodo }) {
    let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [date_, setDate] = useState("");
    const [month, setMonth] = useState("");
    const [year, setYear] = useState("");
    const [Time, setTime] = useState("");
    const [Date_time, setDate_Time] = useState("");
    const [reminder, setReminder] = useState(false)


    const submit = (e) => {
        e.preventDefault();
        if (!title || !desc) {
            alert("Title or Description cannot be blank");
        }
        else {
            // addTodo(Time,date_,title, desc);
            // setDate_Time(Date_time.toString().split('T'))
            addTodo(title, desc, date_, month, year, Time, Date_time);
            // console.log({date_})
            setTitle("");
            setDesc("");
            setDate_Time("");
            setReminder(false)
        }
    }
    const DateTimePicker = (e)=>{
       let dt = e.target.value;
       
       setDate_Time(dt)
    }
    function Update() {
        let time = new Date().toLocaleTimeString();
        setTime(time);

        let date = new Date().getDate();
        setDate(date);
        let mon = new Date().getMonth();
        setMonth(months[mon]);
        let yea = new Date().getFullYear();
        setYear(yea);
    }
    setInterval(Update, 100)
    return (
        <div>
            <div className="container my-3">
                <h3>Add a To-do</h3>
                <form >
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">To-do Title</label>
                        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="form-control" id="title" aria-describedby="emailHelp" autoComplete="off" />

                    </div>
                    <div className="mb-3">
                        <label htmlFor="desc" className="form-label">To-do Description</label>
                        <input type="text" value={desc} onChange={(e) => setDesc(e.target.value)} className="form-control" id="desc" autoComplete="off" />
                    </div>
                    <div className="mb-3">
                        {reminder?

                            <><label htmlFor="date_time" className="form-label">Remind Date & Time </label>
                        <input type="datetime-local" value={Date_time} onChange={DateTimePicker} className="form-control" id="date_time" />
                        </>:""}
                    </div>
                    {/* (e) => setDate_Time(e.target.value) */}
                    <label className="containerr">Set Reminder
                        <input
                            className="remind_"
                            type='checkbox'
                            checked={reminder}
                            value={reminder}
                            onChange={(e) => setReminder(!reminder)}
                        />
                        <span class="checkmarkk"></span>
                    </label>
                    <button type="submit" className="btn btn-sm btn-success" onClick={submit}>Add Todo</button>
                </form>
            </div>
        </div>
    )
}
