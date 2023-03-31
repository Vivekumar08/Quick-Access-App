import React, { useState, useEffect } from 'react';
import moment from 'moment';
import buildCalendar from './build';
import dayStyles, { beforeToday } from './Styles';
import Header from './Header';
import './style.css';

export default function Calendar() {
    const [calendar, setCalendar] = useState([]);
    const [value, setValue] = useState(moment());
    useEffect(() => {
        setCalendar(buildCalendar(value));
    }, [value]);

    return (
        <div className="box">
            <div className="container">
                <div className="calendar" id="dycalendar">
                    <Header value={value} setValue={setValue} />
                    <div className="head">
                        <table>
                            <tbody>
                                <tr>
                                    <td>Su</td>
                                    <td>Mo</td>
                                    <td>Tu</td>
                                    <td>We</td>
                                    <td>Th</td>
                                    <td>Fr</td>
                                    <td>Sa</td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="body">
                            {calendar.map((week) => (
                                <div >
                                    {week.map((day) => (
                                        <div className="day" onClick={() => !beforeToday(day) && setValue(day)}>
                                            <div className={dayStyles(day, value)} id="currDay">
                                                {day.format("D").toString()}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
