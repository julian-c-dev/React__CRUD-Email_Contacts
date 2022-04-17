import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Button, Card } from "react-bootstrap";
import "./ContactDetail.css";

const ContactDetail = (props) => {
  const params = useLocation();
  const { id, name, email } = params.state.contacts;

  return (
    <Card className="text-center m-4">
      <Card.Header as="h4">Contact Detail</Card.Header>
      <Card.Body>
        <Card.Img
          variant="top"
          className="avatarDetail"
          src={`https://i.pravatar.cc/150?u=${id}`}
        />
        <Card.Title as="h3">{name}</Card.Title>
        <Card.Text>{email}</Card.Text>
        <Link to={`/`}>
          <Button variant="primary">Return </Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default ContactDetail;
