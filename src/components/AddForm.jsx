import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../slices/todosSlice";

const AddForm = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const dispatch = useDispatch();

  return (
    <div>
      <label>
        제목:
        <input
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          type="text"
        />
      </label>
      <label>
        내용:
        <input
          value={body}
          onChange={(e) => {
            setBody(e.target.value);
          }}
          type="text"
        />
      </label>
      <button
        onClick={() => {
          dispatch(
            addTodo({ id: new Date().getTime(), title: title, body: body })
          );
        }}
      >
        추가하기
      </button>
    </div>
  );
};

export default AddForm;
