import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

export default function ContactList({ contacts, onDelete }) {
  return (
    <ul className={css.flexBox}>
      {contacts.map((contact) => {
        return (
          <li key={contact.id} className={css.contactBox}>
            <Contact contactData={contact} onDelete={onDelete} />
          </li>
        );
      })}
    </ul>
  );
}
