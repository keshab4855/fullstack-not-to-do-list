import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  task: "",
  hr: "",
  type: "entry",
};
const AddTaskForm = ({ addTask }) => {
  const [form, setForm] = useState(initialState);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    addTask({ ...form, id: uuidv4() });
  };
  return (
    <Form onSubmit={handleOnSubmit}>
      <Row className="g-2">
        <Col md="6">
          <Form.Control
            type="text"
            class="form-control"
            required
            placeholder="Task Name"
            aria-label="First name"
            name="task"
            onChange={handleOnChange}
          />
        </Col>
        <div class="col-md-3">
          <Form.Control
            type="number"
            class="form-control"
            placeholder="Hours"
            required
            aria-label="Last name"
            name="hr"
            onChange={handleOnChange}
          />
        </div>
        <div class="col-md-3">
          <Button type="submit" class="form-control btn btn-primary">
            Add task
          </Button>
        </div>
      </Row>
    </Form>
  );
};

export default AddTaskForm;
