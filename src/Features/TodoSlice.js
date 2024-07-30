import { createSlice, nanoid } from "@reduxjs/toolkit";

// the (nanoid) generates unique ids
// we will create an initial state for the store, just like we did passed an
// object at the starting of creating context

let initialState = {
    todos: [
        {
            id: 1,
            text: "Hello World",
        }
    ]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            let todo = {
                id: nanoid(),
                text: action.payload
            }
            console.log(action);
            // thebelow is what we are gettiing when we are logging the action:
            //             Object { type: "todo/addTodo", payload: "sjvg" }
            // ​
            // payload: "sjvg"
            // ​
            // type: "todo/addTodo"
            // ​
            // <prototype>: Object { … }
            // console.log(action.payload);
            state.todos.push(todo);
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
        updateTodo: (state, action) => {
            state.todos = state.todos.map((todo) => {
                if(todo.id === action.payload.todoId) {
                    return ({...todo, text: action.payload.updatedText})
                }
                return todo
            })
        }
    }
})

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions
let todoReducer = todoSlice.reducer;
export default todoReducer;

// store only updates vaulues only from those reducers which it has access.

// in the above that (state) is initialState we made on ourselves and will get updated whenever we make changes to the state

// payload is an object which can contain id etc

// (state) gives the current state of the initial state
// (action) gives me the values which will be helpful in performing the
// function or tasks, like ids, name of todo etc,
// action contains data which we pass to the method or function

//reducers are pure functions that handle how the application's state changes in
// response to actions