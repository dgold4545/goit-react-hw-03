import css from "./SearchBox.module.css";
import { useId } from "react";

export default function SearchBox({ searchContact, onSetSearchContact }) {
  const ID = useId();

  return (
    <div className={css.box}>
      <label htmlFor={`contactName-${ID}`}>Find contacts by name</label>
      <input
        id={`contactName-${ID}`}
        className={css.inputWidth}
        type="text"
        name="contactName"
        value={searchContact}
        onChange={(event) => {
          onSetSearchContact(event.target.value);
        }}
      />
    </div>
  );
}
