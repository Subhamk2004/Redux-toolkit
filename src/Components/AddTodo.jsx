import React from "react";
import { useDispatch } from "react-redux";
import { addTodo } from '../Features/TodoSlice.js'

function AddTodo() {
    let [input, setInput] = React.useState('')
    let dispatch = useDispatch();

    let addTodoHandler = (e) => {
        e.preventDefault()
        dispatch(addTodo(input))
        // we can't do like below to use the dispatch method in redux
        // useDispatch(addTodo(input))
        setInput('')
    }

    // Dispatch is a function provided by the Redux store that is used to trigger state changes. It's the only way to introduce new data into the store. 
    // dispatch uses a reducer to make changes in store

    return (
        <form onSubmit={addTodoHandler} className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
            />
            <button type="submit"
                className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    )
}
export default AddTodo;

// useDispatch is used to send data