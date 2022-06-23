import React from "react";
import { Button, Form, Table } from "react-bootstrap";

const TaskList = ({ title, arrow }) => {
  return (
    <div className="mt-3">
      <h2 className="entry-list text-center py-3 ">{title}</h2>
      <Table striped>
        <thead>
          <tr>
            <th>
              <Form.Check type="checkbox"></Form.Check>
            </th>
            <th>Task</th>
            <th>Hours</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              {" "}
              <Form.Check type="checkbox"></Form.Check>
            </td>
            <td>Watching TV</td>
            <td>% hr</td>
            <td>
              {arrow === "right" ? (
                <Button variant="success">
                  <i class="fa-solid fa-arrow-right"></i>
                </Button>
              ) : (
                <Button variant="danger">
                  <i class="fa-solid fa-arrow-left"></i>
                </Button>
              )}
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default TaskList;
