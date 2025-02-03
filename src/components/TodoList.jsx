import { useDispatch, useSelector } from "react-redux";
import { doneTodo } from "../slices/todosSlice";

const TodoList = () => {
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();
  return (
    <div style={{ width: "400px" }}>
      <h1>working..🥰</h1>
      {todos.map(function (todo) {
        return (
          <div key={todo.id} style={{ border: "1px solid" }}>
            <h2>{todo.title}</h2>
            내용: {todo.body}
            <br />
            <button>삭제하기</button>
            <button
              onClick={() => {
                dispatch(
                  doneTodo({
                    id: todo.id,
                    title: todo.title,
                    body: todo.body,
                  })
                );
              }}
            >
              완료하기
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default TodoList;
