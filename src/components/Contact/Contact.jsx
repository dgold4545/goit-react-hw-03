import css from "./Contact.module.css";
import { FaPhoneAlt, FaUser } from "react-icons/fa";

export default function Contact({
  contactData: { name, number, id },
  onDelete,
}) {
  const phoneHolder = "tel:+" + number.replace("-", "").replace("-", "");

  return (
    <div className={css.borderBox}>
      <ul>
        <li className={css.space}>
          <strong>
            <FaPhoneAlt />
          </strong>
          {name}
        </li>
        <li>
          <strong>
            <FaUser />
          </strong>
          <a href={phoneHolder}>{number}</a>
        </li>
      </ul>
      <button
        type="button"
        onClick={() => {
          onDelete(id);
        }}
      >
        Delete
      </button>
    </div>
  );
}
