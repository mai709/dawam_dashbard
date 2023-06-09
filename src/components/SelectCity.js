import React from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "./TextError";

function Select(props) {
  const { label, name, options, ...rest } = props;
  return (
    <>
      {/* <div>{console.log(props)}</div> */}
      <label htmlFor={name}>{label}</label>
      <Field as="select" id={name} name={name} {...rest}>
        {options.map((option) => {
          return (
            <option key={option.id} value={option.value}>
              {option.name}
            </option>
          );
        })}
      </Field>
      <ErrorMessage component={TextError} name={name} />
    </>
  );
}

export default Select;
