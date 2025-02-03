import { createSlice } from "@reduxjs/toolkit";

const initialState = { todos: [], donelist: [] };

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    doneTodo: (state, action) => {
      const done = state.todos.find((todo) => todo.id === action.payload.id);
      if (done) {
        state.todos = state.todos.filter(
          (todo) => todo.id !== action.payload.id
        );
        state.donelist.push(done);
      }
    },
    undoTodo: (state, action) => {
      const undo = state.donelist.find((todo) => todo.id === action.payload.id);
      if (undo) {
        state.donelist = state.donelist.filter(
          (todo) => todo.id !== action.payload.id
        );
        state.todos.push(undo);
      }
    },
    deleTodo: (state, action) => {
      if (state.donelist.find((todo) => todo.id === action.payload.id)) {
        state.donelist = state.donelist.filter(
          (todo) => todo.id !== action.payload.id
        );
      } else {
        state.todos = state.todos.filter(
          (todo) => todo.id !== action.payload.id
        );
      }
    },
  },
});

export const { addTodo, doneTodo, undoTodo, deleTodo } = todosSlice.actions;
export default todosSlice.reducer;
