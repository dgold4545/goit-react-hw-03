import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";

import contactsListData from "../../contactsListData.json";
import styles from "./App.module.css";
import { useEffect, useState } from "react";

const CONTACT_LIST_LS_KEY = "contact_list_key";

export default function App() {
  const [contactList, setContactList] = useState(
    () =>
      JSON.parse(window.localStorage.getItem(CONTACT_LIST_LS_KEY)) ??
      contactsListData
  );

  useEffect(() => {
    window.localStorage.setItem(
      CONTACT_LIST_LS_KEY,
      JSON.stringify(contactList)
    );
  }, [contactList]);

  const [filterData, setFilterData] = useState("");

  const filteredContactsList = contactList.filter(
    (contact) =>
      contact.name.toLowerCase().includes(filterData.toLowerCase().trim()) ||
      contact.number.includes(filterData.trim())
  );

  const handelAddContact = (newContact) => {
    setContactList((prevContact) => [...prevContact, newContact]);
  };

  const handleDeleteContact = (contactId) => {
    setContactList((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== contactId)
    );
  };

  return (
    <div>
      <h1 className={styles.title}>Phonebook</h1>
      <ContactForm onAddContact={handelAddContact} />
      <SearchBox filterData={filterData} onHandleFilter={setFilterData} />
      <ContactList
        contacts={filteredContactsList}
        onHandleDelete={handleDeleteContact}
      />
    </div>
  );
}
