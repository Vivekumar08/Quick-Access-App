import React from 'react'
import TodoItem from "./TodoItem";
import "./item.css"
// import moment from 'moment'
export default function Todo(props) {
    
    return (
        <div>
            <div className="container" >
                <h3 className="my-3">To-do's List</h3>
                {props.todos.length === 0 ? <h5>"No To-do's to display"</h5> :
                    props.todos.map((todo) => {
                        // console.log(todo.sno);
                        return (
                            <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} />
                        )
                    })
                }
            </div>
        </div>
    )
}
