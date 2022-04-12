import React, { Component } from "react";

class AddContact extends React.Component {
  render() {
    return (
      <div className="ui main">
        <h3>Add Contact</h3>
        <form className="ui form" action="POST">
          <div className="field">
            <label>Name</label>
            <input type="text" name="name" placeholder="Name" />
          </div>
          <div className="field">
            <label>Email</label>
            <input type="email" email="email" placeholder="Email" />
          </div>
          <button className="ui button blue">Add Contact</button>
        </form>
      </div>
    );
  }
}

export default AddContact;
