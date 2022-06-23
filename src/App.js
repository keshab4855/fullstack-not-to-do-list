import "./App.css";
import { useState } from "react";
import { Container } from "react-bootstrap";
import AddTaskForm from "./components/AddTaskForm";
import ListArea from "./components/ListArea";

function App() {
  const [taskList, setTaskList] = useState([]);
  const addTask = (task) => {
    setTaskList([...taskList, task]);
  };

  const switchTask = (i, type) => {
    console.log(i, type);

    const switchedArg = taskList.map((item, index) => {
      if (index === i) {
        const dt = (item.type = type);
        return dt;
      }
      return item;
    });
    setTaskList(switchedArg);
  };
  return (
    <div className="wrapper container">
      <div class="title  text-center mt-5 mb-5">
        <h1>My Not To Do List</h1>
      </div>

      <AddTaskForm addTask={addTask}></AddTaskForm>
      <hr />
      <ListArea taskList={taskList} switchTask={switchTask}></ListArea>
    </div>
  );
}

export default App;
