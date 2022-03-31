import { createSlice } from "@reduxjs/toolkit";



const initialState= []
const addTodoReducer = createSlice ({
    name: "todos",
    initialState,
    reducers:{
        // Adding todos
        addTodos: (state,action) => {
            state.push(action.payload);
            return state;
        },
        // remove todo
        removeTodos: (state,action) =>{
            return state.filter((description) => description.id !== action.payload);
        },
        // update
        updateTodos: (state,action) =>{
            return state.map(todo => {
                if (todo.id === action.payload.id)
                {
                    return {
                        ...todo,
                        description: action.payload.description,
                    };

                }
                return todo;
            } );
           

        },
    } ,
});
 export  const {addTodos , removeTodos, updateTodos} = addTodoReducer.actions;
 export const reducer = addTodoReducer.reducer;