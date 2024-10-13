import { useId } from "react";
import styles from "./SearchBox.module.css";

export default function SearchBox({ filterData, onHandleFilter }) {
  const filterId = useId();

  return (
    <div className={styles.box}>
      <label htmlFor={filterId} className={styles.label}>
        Find contacts by name
      </label>

      <input
        type="text"
        id={filterId}
        className={styles.inputWidth}
        placeholder="Name"
        value={filterData}
        onChange={(event) => onHandleFilter(event.target.value)}
      />
    </div>
  );
}
