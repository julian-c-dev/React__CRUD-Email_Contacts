import React, { useState, useEffect } from "react";
import AddContact from "./AddContact";

import "./App.css";
import ContactList from "./ContactList";
import Header from "./Header";

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([{ id: "", name: "", email: "" }]);

  const addContactHandler = (name, email) => {
    setContacts([
      ...contacts,
      { id: Math.floor(Math.random() * 100000), name, email },
    ]);
  };

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });

    setContacts(newContactList);
  };

  useEffect(() => {
    const retrieveContacts = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_KEY)
    );
    if (retrieveContacts) setContacts(retrieveContacts);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className="container">
      <Header />
      <AddContact
        onAddButtonSubmit={(name, email) => addContactHandler(name, email)}
      />
      <ContactList contacts={contacts} getContactId={removeContactHandler} />
    </div>
  );
}

export default App;
