import React from "react";
import AddContact from "./AddContact";
import "./App.css";
import ContactList from "./ContactList";
import Header from "./Header";

function App() {
  const contacts = [
    {
      id: "1",
      name: "Dipesh",
      email: "malvia@gmail.com",
    },
    {
      id: "2",
      name: "Julian",
      email: "julian@gmail.com",
    },
    {
      id: "3",
      name: "Tais",
      email: "tais@gmail.com",
    },
  ];
  return (
    <div className="ui container">
      <Header />
      <AddContact />
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
