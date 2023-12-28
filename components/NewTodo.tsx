import { useState } from "react";

type NewTodoProps = {
  createNewTodo: (arg0: string) => void;
};

const NewTodo = (props: NewTodoProps) => {
  const [userInput, setUserInput] = useState<string>("");

  const handleSubmit = (event: any) => {
    props.createNewTodo(userInput);
    event.preventDefault();
  };
  const handleChange = (event: any) => {
    setUserInput(event.target.value);
  };
  return (
    <form className="NewTodoForm" onSubmit={handleSubmit}>
      <label htmlFor="task" style={{ fontWeight: "bold" }}>
        New todo :{" "}
      </label>
      <input
        value={userInput}
        onChange={handleChange}
        id="task"
        type="text"
        name="task"
        placeholder="New Todo"
      />
      <button
        className="btn success"
        style={{ marginLeft: "10px", paddingLeft: "3px", paddingRight: "3px" }}
      >
        Add Todo
      </button>
    </form>
  );
};

export default NewTodo;
