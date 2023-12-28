import NewTodo from "@/components/NewTodo";
import Todo from "@/components/Todo";
import axios from "axios";
import { stringify } from "querystring";
import { useEffect, useState } from "react";

type TodoType = {
  id: string;
  isComplete: boolean;
  task: string;
};
const apiUrl = "http://localhost:5000/todo";

const TodoPage = () => {
  const [todos, setTodos] = useState<TodoType[]>([]);

  const fetchData = () => {
    axios
      .get(apiUrl)
      .then((response) => {
        setTodos(response.data);
      })
      .catch((err) => console.log(err));
  };

  const createNewTodo = (newTodo: string) => {
    axios
      .post(
        apiUrl,
        stringify({
          task: newTodo,
        }),
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      )
      .then(function (response) {
        fetchData();
      })
      .catch((err) => console.log(err));
  };

  const updateTodo = (taskId: string, newText: string, isComplete: boolean) => {
    axios
      .put(`${apiUrl}/${taskId}`, {
        new_task: newText,
        isComplete: isComplete,
      })
      .then((response) => {
        console.log(`Updated task with ID ${taskId}`);
        fetchData();
      })
      .catch((err) => console.log(err));
  };

  const deleteTodo = (taskId: string) => {
    axios
      .delete(`${apiUrl}/${taskId}`)
      .then((response) => {
        console.log(`Deleted task with ID ${taskId}`);
        fetchData();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className={"todo-page"}>
      <div style={{ display: "inline-block", textAlign: "left" }}>
        <h1>To-Do List</h1>
        <div style={{ marginBottom: "30px" }}>
          {todos.map((element) => (
            <Todo
              key={element.id}
              id={element.id}
              isComplete={element.isComplete}
              task={element.task}
              updateTodo={updateTodo}
              deleteTodo={deleteTodo}
            />
          ))}
        </div>

        <NewTodo createNewTodo={createNewTodo} />
      </div>
    </div>
  );
};

export default TodoPage;
