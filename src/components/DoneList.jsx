import { useDispatch, useSelector } from "react-redux";
import { undoTodo } from "../slices/todosSlice";

const DoneList = () => {
  const todos = useSelector((state) => state.todos.donelist);
  const dispatch = useDispatch();
  return (
    <div style={{ width: "400px" }}>
      <h1>Done..🤩</h1>
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
                  undoTodo({
                    id: todo.id,
                    title: todo.title,
                    body: todo.body,
                  })
                );
              }}
            >
              취소하기
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default DoneList;
