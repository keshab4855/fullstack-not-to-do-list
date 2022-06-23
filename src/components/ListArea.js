import React from "react";
import { Col, Row } from "react-bootstrap";
import TaskList from "./TaskList";

const ListArea = ({ taskList, switchTask }) => {
  console.log(taskList);
  // const entryList = taskList.filter((item) => item.type === "entry");
  // const badList = taskList.filter((item) => item.type === "bad");

  return (
    <div>
      <Row>
        <Col>
          <TaskList
            title="Entry List"
            arrow="right"
            list={taskList}
            switchTask={switchTask}
          ></TaskList>
        </Col>
        <Col>
          {" "}
          <TaskList
            title="Bad Task List"
            arrow="left"
            list={taskList}
          ></TaskList>
          <div className="text-end  fw-bold">You could have saved 40hr</div>
        </Col>
      </Row>
      <div className="fw-bold">Total time allocated is 50 hrs per week</div>
    </div>
  );
};

export default ListArea;
