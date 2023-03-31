import React, { useState} from 'react';
import Calculator from "./CalculatorComp/Calculator";
import Calendar from "./CalenderComp/Calendar";
import DateAndTime from "./Date-Day/DateAndTime";
import Weather from "./WeatherComp/Weather";
import MusicPlayer from "./Music-Player/MusicPlayer";
import "./Left.css";

export default function Left() {
    const [isEnabled1, setIsEnabled1] = useState(false);
    const toggleSwitch1 = () => setIsEnabled1(!isEnabled1);
    const [isEnabled2, setIsEnabled2] = useState(false);
    const toggleSwitch2 = () => setIsEnabled2(!isEnabled2);
    const [isEnabled3, setIsEnabled3] = useState(false);
    const toggleSwitch3 = () => setIsEnabled3(!isEnabled3);
    const [isEnabled4, setIsEnabled4] = useState(false);
    const toggleSwitch4 = () => setIsEnabled4(!isEnabled4);
    const [isEnabled5, setIsEnabled5] = useState(false);
    const toggleSwitch5 = () => setIsEnabled5(!isEnabled5);
    
    return (
      <div className='main_container2'>
        <div className="container1">
          <div className="center">
            <input  type="checkbox" className="check_" checked={isEnabled1} onChange={toggleSwitch1} />
            <label className="form-check-label" onClick={toggleSwitch1}> Date and Time</label>
          </div>
            {isEnabled1? <DateAndTime />:''}
        </div>
        <div className="container2">
          <div className="center">
            <input type="checkbox" className="check_"  checked={isEnabled2} onChange={toggleSwitch2} />
            <label className="form-check-label" onClick={toggleSwitch2}> Calendar</label>
          </div>
            {isEnabled2? <Calendar/>:''}
          
        </div>
        <div className="container3">
          <div className="center">
            <input type="checkbox" className="check_" checked={isEnabled3} onChange={toggleSwitch3} />
            <label className="form-check-label" onClick={toggleSwitch3}> Calculator</label>
          </div>
            {isEnabled3? <Calculator />:''}
          
        </div>
        <div className="container4">
          <div className="center">
            <input type="checkbox" className="check_" checked={isEnabled4} onChange={toggleSwitch4} />
            <label className="form-check-label" onClick={toggleSwitch4}> Weather</label>
          </div>
            {isEnabled4? <Weather />:''}
        </div>
        <div className="container5">
          <div className="center">
            <input type="checkbox" className="check_" checked={isEnabled5} onChange={toggleSwitch5} />
            <label className="form-check-label" onClick={toggleSwitch5} > Music Player</label>
          </div>
            {isEnabled5? <MusicPlayer />:''}
        </div>
        
      </div>
    );
}
