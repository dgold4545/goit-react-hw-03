import Contact from "../Contact/Contact";
import styles from "./ContactList.module.css";

export default function ContactList({ contacts, onHandleDelete }) {
  return (
    <ul className={styles.flexBox}>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          <Contact
            id={id}
            name={name}
            number={number}
            onHandleDelete={onHandleDelete}
          />
        </li>
      ))}
    </ul>
  );
}
