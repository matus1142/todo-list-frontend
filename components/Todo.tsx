import { useState } from "react";

type TodoProps = {
  id: string;
  isComplete: boolean;
  task: string;
  updateTodo: (arg0: string, arg1: string, arg2: boolean) => void;
  deleteTodo: (arg0: string) => void;
};
const Todo = (props: TodoProps) => {
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [editText, setEditText] = useState<string>("");
  const editHandle = (buttonType: string) => {
    if (buttonType === "save") {
      props.updateTodo(props.id, editText, props.isComplete);
    }
    setIsEdit(!isEdit);
  };

  const onChangeHandle = (event: any) => {
    setEditText(event.target.value);
  };
  if (isEdit) {
    return (
      <div className={"todo-component-box"}>
        <span
          style={{
            marginRight: "10px",
          }}
        >
          Edit
        </span>
        <input type="text" onChange={onChangeHandle} autoFocus />
        <br />
        <div
          style={{
            marginTop: "5px",
            paddingLeft: "25px",
          }}
        >
          <button className="btn" onClick={() => editHandle("save")}>
            save
          </button>
          <button
            className="btn"
            style={{
              marginLeft: "5px",
            }}
            onClick={() => editHandle("cancel")}
          >
            cancel
          </button>
        </div>
      </div>
    );
  } else {
    return (
      <div className={"todo-component-box"}>
        <input
          type="checkbox"
          onChange={(event) => {
            props.updateTodo(props.id, props.task, event.target.checked);
          }}
          id={props.id}
          name={props.id}
          defaultChecked={props.isComplete}
        />
        <label htmlFor={props.id}>
          <span
            style={{
              textDecoration: props.isComplete ? "line-through" : "none",
              marginLeft: "10px",
              marginRight: "10px",
            }}
          >
            {props.task}
          </span>
        </label>
        <br />
        <div
          style={{
            marginTop: "5px",
            paddingLeft: "25px",
          }}
        >
          <button
            className={"btn default"}
            onClick={() => {
              editHandle("edit");
            }}
          >
            edit
          </button>
          <button
            className={"btn danger"}
            style={{
              marginLeft: "5px",
            }}
            onClick={() => {
              props.deleteTodo(props.id);
            }}
          >
            delete
          </button>
        </div>
      </div>
    );
  }
};

export default Todo;
