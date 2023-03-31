import React, { useState, useEffect } from 'react'
import AddItem from "./Todo/AddItem";
import Todo from "./Todo/Todo";
import "./Todo/item.css"

export default function Right() {
    let initTodo;
    if (localStorage.getItem("todos") === null) {
        initTodo = [];
    }
    else {
        initTodo = JSON.parse(localStorage.getItem("todos"));
    }

    const onDelete = (todo) => {
        // console.log("I am ondelete of todo", todo);
        // Deleting this way in react does not work
        // let index = todos.indexOf(todo);
        // todos.splice(index, 1);

        setTodos(todos.filter((e) => {
            return e !== todo;
        }));
        // console.log("deleted", todos)
        localStorage.setItem("todos", JSON.stringify(todos));
    }

    const addTodo = (title, desc,date_,month,year,Time,Date_time) => {
        // console.log("I am adding this todo", title, desc,date_,month,year,Time)
        let sno;
        if (todos.length === 0) {
            sno = 0;
        }
        else {
            sno = todos[todos.length - 1].sno + 1;
        }
        const myTodo = {
            sno: sno,
            title: title,
            desc: desc,
            date_: date_,
            month: month,
            year: year,
            Time: Time,
            Date_time:Date_time
        }
        setTodos([...todos, myTodo]);
        // console.log(myTodo);
    }

    const [todos, setTodos] = useState(initTodo);
    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos])

    return (
        <div>
            <AddItem addTodo={addTodo} />
            <Todo todos={todos} onDelete={onDelete} />
        </div>
    )
}
