import React from "react";

const ContactCard = (props) => {
  const { name, email, avatar } = props.contact;
  return (
    <div className="item">
      <img className="ui avatar image" src={avatar} alt="avatar" />
      <div className="content">
        <div className="header">{name}</div>
        <div>{email}</div>
      </div>
      <i
        className="trash alternate outline icon"
        style={{ color: "red", margin: "5px" }}
      ></i>
    </div>
  );
};

export default ContactCard;
