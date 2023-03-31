import React from 'react'

export default function Header({value, setValue}) {
    function currMonthName(){
        return value.format("MMMM")
    }

    function currYear(){
        return value.format("YYYY")
    }

    function prevMonth(){
        return value.clone().subtract(1,"month")
    }
    function nextMonth(){
        return value.clone().add(1,"month")
    }
    // function thisMonth() {
    //     return value.isSame(new Date(),"month")
    // }
    return (
        <div>
            <div className="header">
                <div className="previous" onClick={()=> setValue(prevMonth())}>
                    {String.fromCharCode(171)}
                </div>
                <div className="current">
                    {currMonthName()} {currYear()}
                </div>
                <div className="next" onClick={()=>setValue(nextMonth())}>
                    {String.fromCharCode(187)}
                </div>
            </div>
        </div>
    )
}
