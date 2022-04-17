import React, { useState, useEffect } from "react";
import AddContact from "./AddContact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import api from "../api/contacts";
import ContactList from "./ContactList";
import Header from "./Header";
import ContactDetail from "./ContactDetail";
import EditContact from "./EditContact";

function App() {
  //! If we want to Use the Browswer Local Storage:
  //* const LOCAL_STORAGE_KEY = "contacts";

  const [contacts, setContacts] = useState([{ id: "", name: "", email: "" }]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  // & RETRIEVE Contacts from API
  const retrieveContacts = async () => {
    const response = await api.get("/contacts");
    return response.data;
  };

  // & ADD Contacts to API
  const addContactHandler = async (name, email) => {
    const request = {
      id: Math.floor(Math.random() * 100000),
      name,
      email,
    };
    const response = await api.post("/contacts", request);
    setContacts([...contacts, response.data]);
  };

  // & UPDATE Contacts to API
  const updateContactHandler = async (contact) => {
    const response = await api.put(`/contacts/${contact.id}`, contact);
    const { id } = response.data;
    setContacts(
      contacts.map((contact) => {
        return contact.id === id ? { ...response.data } : contact;
      })
    );
  };

  // & REMOVE Contacts in the API
  const removeContactHandler = async (id) => {
    await api.delete(`/contacts/${id}`);
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });

    setContacts(newContactList);
  };

  // & SEARCH Contacts in the API
  const searchHandler = (searchTerm) => {
    setSearchTerm(searchTerm);
    if (searchTerm !== "") {
      const newContactList = contacts.filter((contact) => {
        return Object.values(contact)
          .join(" ")
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      });
      setSearchResults(newContactList);
    } else {
      setSearchResults(contacts);
    }
  };

  useEffect(() => {
    //! If we want to Use the Browswer Local Storage:
    //* const retrieveContacts = JSON.parse(
    //*   localStorage.getItem(LOCAL_STORAGE_KEY)
    //* );
    //*  if (retrieveContacts) setContacts(retrieveContacts);

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
                contacts={searchTerm.length < 1 ? contacts : searchResults}
                getContactId={removeContactHandler}
                term={searchTerm}
                searchKeyword={searchHandler}
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
            path="/edit/:id"
            element={
              <EditContact
                contacts={contacts}
                onUpdateContactHandler={(contact) =>
                  updateContactHandler(contact)
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
