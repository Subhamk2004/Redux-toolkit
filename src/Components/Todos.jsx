import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, updateTodo } from '../Features/TodoSlice.js'

export default function Todos() {
    let [updatedText, setUpdatedText] = useState('');
    let [todoId, setTodoId] = useState('');
    let [isEditable, setIsEditable] = useState(false);

    let todos = useSelector(state => state.todos)
    let dispatch = useDispatch()

    let updateTodoValue = (id) => {
        console.log(id);
        setIsEditable(!isEditable);
    }
    let saveTodoValue = () => {
        dispatch(updateTodo({ todoId, updatedText }))
        setIsEditable(!isEditable);
        setUpdatedText('');
    }
    console.log(todoId);
    return (
        <div className="p-2">
            <h1>Todos</h1>
            {todos.map((todo) => (
                <li key={todo.id}
                    className="p-1 rounded-lg bg-green-700 mt-2 flex flex-row"
                >
                    {isEditable && todo.id === todoId ?
                        <input className="w-4/5 flex justify-start items-center pl-2 bg-green-700"
                            value={updatedText}
                            // readOnly
                            onChange={(e) => setUpdatedText(e.target.value)}
                            type="text"
                        /> :
                        <p className="w-4/5 flex justify-start items-center pl-2">
                            {todo.text}
                        </p>

                    }

                    <div className="w-1/5 gap-2 flex flex-row justify-end pr-2">
                        <button
                            onClick={() => dispatch(removeTodo(todo.id))}
                            className="p-1 rounded-lg bg-red-800 pl-3 pr-3"
                        >
                            Delete
                        </button>
                        {isEditable && todo.id === todoId ? <button
                            onClick={saveTodoValue}
                            className="p-1 rounded-lg bg-green-500 pl-3 pr-3"
                        >
                            Save
                        </button> :
                            <button
                                onClick={() => {
                                    setTodoId(todo.id);
                                    updateTodoValue()

                                }}
                                className="p-1 rounded-lg bg-yellow-600 pl-3 pr-3"
                            >
                                Edit
                            </button>

                        }
                    </div>

                </li>
            ))}
        </div>
    )
}