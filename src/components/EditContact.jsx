import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";

const EditContact = (props) => {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  let navigate = useNavigate();
  const { contacts } = props;

  const contactEdit = contacts.filter((contact) => contact.id === Number(id));

  const update = (e) => {
    e.preventDefault();
    const contact = { id, name, email };
    props.onUpdateContactHandler(contact);
    navigate("/", { replace: true });
  };

  return (
    <div className="card">
      <h2 className="card-header">Edit Contact</h2>
      <Form onSubmit={update}>
        <Form.Group className="card-body" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder={contactEdit[0].name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        <Form.Group className=" card-body" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="text"
            email="email"
            placeholder={contactEdit[0].email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group className=" card-body" controlId="formBasicButtons">
          <Button variant="primary" type="submit">
            Update
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
};

export default EditContact;
