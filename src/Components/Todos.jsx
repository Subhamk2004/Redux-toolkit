import React from "react";
import {useSelector, useDispatch} from "react-redux";
import {removeTodo} from '../Features/TodoSlice.js'

export default function Todos () {
    let todos = useSelector(state => state.todos)
    let dispatch = useDispatch()

    return(
        <div>
            <h1>Todos</h1>
            {todos.map((todo) => (
                <li key={todo.id}>
                    {todo.text}
                    <button
                    onClick={() => dispatch(removeTodo(todo.id))}
                    >
                        X
                    </button>
                </li>
            ))}
        </div>
    )
}