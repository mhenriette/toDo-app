import { useState } from "react";
import plus from "../assets/plus.svg";
import Task from "./Task";
import { nanoid } from "nanoid";

const Todo = () => {
  const [text, setText] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleText = (event) => {
    const { value } = event.target;
    setText(value);
  };
  const createNote = () => {
    if (text === "") {
      return alert("Note name must be provided");
    }
    const task = {
      id: nanoid(),
      value: text,
      checked: false,
    };
    setTasks((oldTask) => [...oldTask, task]);
    setText("");
  };
  const handleClick = (id) => {
    const currentTask = tasks.map(task =>
      task.id === id ? { ...task, checked: !task.checked } : task
    );

    setTasks(currentTask);
  };
  const deleteTask = (id) => {
    const updatedTask = tasks.filter(task => task.id !== id || !task.checked);
    setTasks(updatedTask);
  };

  return (
    <div className="my-32 lg:w-1/2 text-center">
      <h1 className="text-gray-300 text-7xl font-bold my-10">todos</h1>
      <div className=" rounded-full px-5 bg-white  shadow-small w-full flex items-center justify-between">
        <input
          placeholder="Add todo..."
          type="text"
          className="flex-grow py-3 outline-none"
          name="taskName"
          value={text}
          onChange={handleText}
        />
        <button onClick={createNote}>
          <img src={plus} alt="plus" className="w-8 h-8" />
        </button>
      </div>
      <form className="m-5">
        {tasks.length > 0 ? (
          tasks.map((task, id) => {
            return (
              <Task
                text={task.value}
                key={id}
                checked={task.checked}
                onClick={() => deleteTask(task.id)}
                onChange={() => handleClick(task.id)}
              />
            );
          })
        ) : (
          <h1 className="text-xl font-medium text-gray-400">
            Proper planning and preparation prevents poor performance. 💡
          </h1>
        )}
      </form>
    </div>
  );
}
export default Todo;