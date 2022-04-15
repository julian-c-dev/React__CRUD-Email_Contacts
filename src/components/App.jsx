import React, { useState, useEffect } from "react";
import AddContact from "./AddContact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import api from "../api/contacts";
import ContactList from "./ContactList";
import Header from "./Header";
import ContactDetail from "./ContactDetail";

function App() {
  // const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([{ id: "", name: "", email: "" }]);

  const retrieveContacts = async () => {
    const response = await api.get("/contacts");
    return response.data;
  };

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
    // const retrieveContacts = JSON.parse(
    //   localStorage.getItem(LOCAL_STORAGE_KEY)
    // );
    // if (retrieveContacts) setContacts(retrieveContacts);
    const getAllContacts = async () => {
      const allContacts = await retrieveContacts();
      if (allContacts) setContacts(allContacts);
    };
    getAllContacts();
  }, []);

  useEffect(() => {
    //localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className="container">
      <Router>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <ContactList
                contacts={contacts}
                getContactId={removeContactHandler}
              />
            }
          />
          <Route
            path="/add"
            element={
              <AddContact
                onAddButtonSubmit={(name, email) =>
                  addContactHandler(name, email)
                }
              />
            }
          />

          <Route
            path="/contact/:id"
            element={<ContactDetail contacts={contacts} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
