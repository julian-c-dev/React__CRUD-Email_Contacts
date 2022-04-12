import React, { useState } from "react";
import AddContact from "./AddContact";
import "./App.css";
import ContactList from "./ContactList";
import Header from "./Header";

function App() {
  const [contacts, setContacts] = useState([]);

  const AddContactHandler = (name, email) => {
    setContacts([...contacts, { name, email }]);
  };

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
