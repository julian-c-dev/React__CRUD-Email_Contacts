import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useParams, useNavigate, Link } from "react-router-dom";
import "./App.css";

const EditContact = (props) => {
  const { id } = useParams();
  const { contacts } = props;
  const contactEdit = contacts.filter((contact) => contact.id === Number(id));
  const [name, setName] = useState(contactEdit[0].name);
  const [email, setEmail] = useState(contactEdit[0].email);
  let navigate = useNavigate();

  const update = (e) => {
    e.preventDefault();
    if (name === "" || email === "") {
      alert("All the fields are mandatory");
      return;
    }
    const contact = { id, name, email };
    props.onUpdateContactHandler(contact);
    navigate("/", { replace: true });
  };

  return (
    <div className="card card-size centered">
      <h2 className="card-header">Edit Contact</h2>
      <Form onSubmit={update}>
        <Form.Group className="card-body" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder={contactEdit[0].name}
            defaultValue={contactEdit[0].name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        <Form.Group className=" card-body" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="text"
            email="email"
            placeholder={contactEdit[0].email}
            defaultValue={contactEdit[0].email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group className=" card-body" controlId="formBasicButtons">
          <Button variant="primary" type="submit">
            Update
          </Button>
          <Link style={{ marginLeft: "1rem" }} to={`/`}>
            <Button variant="secondary">Return </Button>
          </Link>
        </Form.Group>
      </Form>
    </div>
  );
};

export default EditContact;
