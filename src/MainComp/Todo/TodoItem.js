import React from 'react';
import "./item.css"

export default function TodoItem({ todo, onDelete }) {
    return (
        <div>
            <div className="todo-item">
                <div className="content">
                    <h4>{todo.title}</h4>
                    <p className="text__">{todo.desc}</p>
                </div>
                <div className="dt">
                    <div className="dateAndTime">
                        <p className="text__">{todo.date_}th {todo.month} {todo.year}, {todo.Time}</p>
                    </div>
                    <div className="date_And_Time">
                        <p className="text__1">Reminder : </p><br/>
                        <p className="text__1">{todo.Date_time}</p>
                    </div>
                </div>
                <div className="butt">
                    <button
                        className="btn btn-sm btn-danger"
                        id="but"
                        onClick={() => {
                            onDelete(todo);
                        }}
                    >
                        Delete
                    </button>
                </div>
            </div>
            <hr />
        </div>
    )
}
