import "./App.css";

import { Container } from "react-bootstrap";
import AddTaskForm from "./components/AddTaskForm";
import ListArea from "./components/ListArea";

function App() {
  return (
    <div className="wrapper container">
      <Container></Container>
      <div class="title  text-center mt-5 mb-5">
        <h1>My Not To Do List</h1>
      </div>

      <AddTaskForm></AddTaskForm>
      <hr />
      <ListArea></ListArea>
    </div>
  );
}

export default App;
