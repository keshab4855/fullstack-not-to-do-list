import React from "react";
import { Col, Row } from "react-bootstrap";
import TaskList from "./TaskList";

const ListArea = () => {
  return (
    <div>
      <Row>
        <Col>
          <TaskList title="Entry List" arrow="right"></TaskList>
        </Col>
        <Col>
          {" "}
          <TaskList title="Bad Task List" arrow="left"></TaskList>
          <div className="text-end  fw-bold">You could have saved 40hr</div>
        </Col>
      </Row>
      <div className="fw-bold">Total time allocated is 50 hrs per week</div>
    </div>
  );
};

export default ListArea;
