import React from "react";
import { Link } from "react-router-dom";
import { ListGroup } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

import "./ContactCard.css";

const ContactCard = (props) => {
  const { id, name, email } = props.contact;
  return (
    <ListGroup.Item
      as="li"
      className="custom d-flex justify-content-start align-items-center"
      style={{ backgroundColor: "rgb(225, 238, 240)" }}
    >
      <img
        className="avatar"
        src={`https://i.pravatar.cc/150?u=${id}`}
        alt="avatar"
      />
      <div className="ms-4 me-auto">
        <Link
          to={`/contact/${id}`}
          state={{
            contacts: props.contact,
          }}
          style={{ color: "black", textDecoration: "none" }}
        >
          <div className="fw-bold">{name}</div>
          <div>{email}</div>
        </Link>
      </div>
      <div>
        <Link
          to={`/edit/${id}`}
          state={{
            contacts: props.contacts,
          }}
        >
          <FontAwesomeIcon
            icon={faEdit}
            style={{ color: "blue", cursor: "pointer", marginRight: "10px" }}
          />
        </Link>
      </div>
      <div>
        <FontAwesomeIcon
          icon={faTrash}
          style={{ color: "red", cursor: "pointer" }}
          onClick={() => props.clickHandler(id)}
        />
      </div>
    </ListGroup.Item>
  );
};

export default ContactCard;
