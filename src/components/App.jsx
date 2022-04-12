import React, { useState, useEffect } from "react";
import AddContact from "./AddContact";
import "./App.css";
import ContactList from "./ContactList";
import Header from "./Header";

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);

  const AddContactHandler = (name, email) => {
    setContacts([...contacts, { name, email }]);
  };

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className="ui container">
      <Header />
      <AddContact
        onAddButtonSubmit={(name, email) => AddContactHandler(name, email)}
      />
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
