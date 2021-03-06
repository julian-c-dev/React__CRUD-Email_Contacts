import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { ListGroup, Button, Form } from "react-bootstrap";
import ContactCard from "./ContactCard";
import "./ContactList.css";
import "./App.css";

const ContactList = (props) => {
  const inputElement = useRef("");
  const deleteContactHandler = (id) => {
    props.getContactId(id);
  };

  const renderContactList = props.contacts.map((contact) => {
    return (
      <ContactCard
        key={contact.id}
        contact={contact}
        clickHandler={deleteContactHandler}
      />
    );
  });

  const getSearchTerm = () => {
    props.searchKeyword(inputElement.current.value);
  };

  return (
    <React.Fragment>
      <h2 className="centered card-size">
        Contact List
        <Link to="/add">
          <Button variant="primary" type="button" className="m-3">
            Add Contact
          </Button>
        </Link>
        <Form>
          <Form.Group className="searchBar card-body" controlId="formBasicName">
            <Form.Control
              ref={inputElement}
              type="text"
              name="search"
              placeholder="Search Contact"
              value={props.term}
              onChange={getSearchTerm}
            />
          </Form.Group>
        </Form>
      </h2>

      <ListGroup>
        {renderContactList.length > 0
          ? renderContactList
          : "No contacts found."}
      </ListGroup>
    </React.Fragment>
  );
};

export default ContactList;
