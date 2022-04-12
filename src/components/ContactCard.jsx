import React from "react";

const ContactCard = (props) => {
  const { id, name, email } = props.contact;
  return (
    <div className="item">
      <img
        className="ui avatar image"
        src={"https://i.pravatar.cc/150?u=julian_cantera"}
        alt="avatar"
      />
      <div className="content">
        <div className="header">{name}</div>
        <div>{email}</div>
      </div>
      <i
        className="trash alternate outline icon right"
        style={{ color: "red", margin: "5px" }}
        onClick={() => props.clickHandler(id)}
      ></i>
    </div>
  );
};

export default ContactCard;
