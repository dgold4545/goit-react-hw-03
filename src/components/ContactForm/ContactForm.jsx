import { Formik, Field, Form, ErrorMessage } from "formik";

import { nanoid } from "nanoid";
// model.id = nanoid() //=> "V1StGXR8_Z5jdHi6B-myT"
import css from "./ContactForm.module.css";
import { useId } from "react";

import * as Yup from "yup";

const initialValues = {
  name: "",
  number: "",
};

const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .matches(/^[^\s]/, "Please, enter your name")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .min(3, "Too Short!")
    .matches(
      /^[0-9]{3}-[0-9]{2}-[0-9]{2}$/,
      "The phone number format is 'xxx-xx-xx'"
    )
    .max(50, "Too Long!")
    .required("Required"),
});

export default function ContactForm({ onAddContact }) {
  const ID = useId();

  const handleSubmit = (values, actions) => {
    onAddContact({ ...values, id: nanoid() });
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={css.flex}>
        <div className={css.flexGap}>
          <label htmlFor={`${ID}-name`}>Name</label>
          <Field type="text" name="name" id={`${ID}-name`} placeholder="Name" />
          <ErrorMessage
            name="name"
            component="span"
            className={css.errorMessage}
          />
        </div>
        <div className={css.flexGap}>
          <label htmlFor={`${ID}-number`}>Number</label>
          <Field
            type="text"
            name="number"
            id={`${ID}-number`}
            placeholder="xxx - xx - xx"
          />
          <ErrorMessage
            name="number"
            component="span"
            className={css.errorMessage}
          />
        </div>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
}
