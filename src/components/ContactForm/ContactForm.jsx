import { Formik, Form, Field, ErrorMessage } from "formik";

import * as Yup from "yup";

import { nanoid } from "nanoid";

import styles from "./ContactForm.module.css";
import { useId } from "react";

const ContactFromSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short - name!")
    .max(50, "Too Long!")
    .required("Required")
    .matches(/^[^\s]/, "Please, enter your name")
    .test(
      "no-only-spaces",
      "Рядок не може складатися лише з пробілів",
      (value) => value && value.trim().length > 0
    ),
  number: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required")
    .matches(
      /^[0-9]{3}-[0-9]{2}-[0-9]{2}$/,
      "The phone number format is 'xxx-xx-xx'"
    ),
});

const initialContact = {
  name: "",
  number: "",
};
export default function ContactForm({ onAddContact }) {
  const handleSubmit = (values, actions) => {
    onAddContact({
      ...values,
      id: nanoid(),
    });
    actions.resetForm();
  };

  const formId = {
    name: useId(),
    number: useId(),
  };

  return (
    <div>
      <Formik
        initialValues={initialContact}
        onSubmit={handleSubmit}
        validationSchema={ContactFromSchema}
      >
        <Form className={styles.box}>
          <div className={styles.flex}>
            <label htmlFor={formId.name}>Name</label>
            <Field
              type="text"
              name="name"
              id={formId.name}
              className={styles.inputForm}
            ></Field>
            <ErrorMessage
              className={styles.errorMessage}
              name="name"
              component="p"
            />
          </div>
          <div className={styles.flex}>
            <label htmlFor={formId.number}>Number</label>
            <Field
              type="text"
              name="number"
              id={formId.number}
              className={styles.inputForm}
            ></Field>
            <ErrorMessage
              className={styles.errorMessage}
              name="number"
              component="p"
            />
          </div>
          <button type="submit">Add contact</button>
        </Form>
      </Formik>
    </div>
  );
}
