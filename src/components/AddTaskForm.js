import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

const AddTaskForm = () => {
  return (
    <Form>
      <Row className="g-2">
        <Col md="6">
          <Form.Control
            type="text"
            class="form-control"
            required
            placeholder="Task Name"
            aria-label="First name"
          />
        </Col>
        <div class="col-md-3">
          <Form.Control
            type="number"
            class="form-control"
            placeholder="Hours"
            required
            aria-label="Last name"
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
