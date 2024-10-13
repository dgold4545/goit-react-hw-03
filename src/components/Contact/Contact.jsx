import { FaPhoneAlt, FaUser } from "react-icons/fa";

import styles from "./Contact.module.css";

export default function Contact({ id, name, number, onHandleDelete }) {
  const correctTellNumber = `tel:+${number.replaceAll("-", "")}`;

  return (
    <div className={styles.borderBox}>
      <ul>
        <li>
          <b>
            <FaUser />
          </b>{" "}
          {name}
        </li>
        <li>
          <b>
            <FaPhoneAlt />
          </b>{" "}
          <a href={correctTellNumber}>{number}</a>
        </li>
      </ul>
      <button type="button" onClick={() => onHandleDelete(id)}>
        Delete
      </button>
    </div>
  );
}
