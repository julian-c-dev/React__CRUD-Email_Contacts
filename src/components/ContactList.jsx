import React from "react";
import { Link } from "react-router-dom";
import { ListGroup, Button } from "react-bootstrap";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
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

  return (
    <React.Fragment>
      <h2>
        Contact List
        <Link to="/add">
          <Button variant="primary" type="button" className="m-3">
            Add Contact
          </Button>
        </Link>
      </h2>

      <ListGroup>{renderContactList}</ListGroup>
    </React.Fragment>
  );
};

export default ContactList;
