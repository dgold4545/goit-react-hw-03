import { useState, useEffect } from "react";
import css from "./App.module.css";
import initialContacts from "../../initialValue.json";

import ContactFrom from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";

const LOCAL_STORAGE_KEY = "phonebook";

export default function App() {
  const [searchContacts, setSearchContacts] = useState(() => {
    const localStorageSavedData =
      window.localStorage.getItem(LOCAL_STORAGE_KEY);

    if (localStorageSavedData !== null) {
      return JSON.parse(localStorageSavedData);
    }

    return initialContacts;
  });

  const [findContact, setFindContact] = useState("");

  const seekContacts = searchContacts.filter((contact) =>
    contact.name.toLowerCase().includes(findContact.toLowerCase())
  );

  const addContact = (newContact) => {
    setSearchContacts((prevContacts) => {
      return [...prevContacts, newContact];
    });
  };

  const handlerDelete = (taskId) => {
    setSearchContacts((prevTasks) => {
      return prevTasks.filter((task) => task.id !== taskId);
    });
  };

  useEffect(() => {
    window.localStorage.setItem(
      LOCAL_STORAGE_KEY,
      JSON.stringify(searchContacts)
    );
  }, [searchContacts]);

  return (
    <div className={css.phonebook}>
      <h1>Phonebook</h1>

      <ContactFrom onAddContact={addContact} />
      <SearchBox
        searchContact={findContact}
        onSetSearchContact={setFindContact}
      />
      <ContactList contacts={seekContacts} onDelete={handlerDelete} />
    </div>
  );
}
