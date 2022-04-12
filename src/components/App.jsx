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
      avatar: "https://i.pravatar.cc/150?u=julian_cantera",
    },
    {
      id: "2",
      name: "Julian",
      email: "julian@gmail.com",
      avatar: "https://i.pravatar.cc/150?u=paloma_celis",
    },
    {
      id: "3",
      name: "Tais",
      email: "tais@gmail.com",
      avatar: "https://i.pravatar.cc/150?u=jintxo",
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
