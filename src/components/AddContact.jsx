import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const AddContact = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  let navigate = useNavigate();

  const add = (e) => {
    e.preventDefault();
    if (name === "" || email === "") {
      alert("All the fields are mandatory");
      return;
    }
    props.onAddButtonSubmit(name, email);
    setName("");
    setEmail("");
    navigate("/", { replace: true });
  };

  return (
    <div className="card">
      <h2 className="card-header">Add Contact</h2>
      <Form onSubmit={add}>
        <Form.Group className="card-body" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        <Form.Group className=" card-body" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="text"
            email="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group className=" card-body" controlId="formBasicButtons">
          <Button variant="primary" type="submit">
            Add Contact
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
};

export default AddContact;
