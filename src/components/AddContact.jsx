import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "./App.css";

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
    <div className="card card-size centered">
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
            type="email"
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
          <Link style={{ marginLeft: "1rem" }} to={`/`}>
            <Button variant="secondary">Return </Button>
          </Link>
        </Form.Group>
      </Form>
    </div>
  );
};

export default AddContact;
