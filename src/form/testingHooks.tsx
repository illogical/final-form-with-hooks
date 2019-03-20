import React, { useState } from "react";
import { render } from "react-dom";
import { useForm, useField } from "react-final-form-hooks";
import { Message, Label, Segment } from "semantic-ui-react";

const validate = (values: any) => {
  const errors: any = {};
  if (!values.firstName) {
    errors.firstName = "First name required";
  }
  if (!values.lastName) {
    errors.lastName = "Last name required";
  }

  // TODO: use yup here?

  return errors;
};

export const TestingHooks = () => {
  const [showErrors, setShowErrors] = useState(false);
  const [allErrors, setAllErrors] = useState("");     // build a summary of errors to be displayed near the submit button

  const { form, handleSubmit, values, pristine, submitting } = useForm({
    onSubmit,
    validate
  });

  const testingHooksSubmit = (
    event?: React.SyntheticEvent<HTMLFormElement>
  ) => {
    const errorCount = Object.keys(validate(values)).length;
    !pristine && setShowErrors(errorCount > 0);
    console.log(showErrors);
    handleSubmit(event);
  };

  const firstName = useField("firstName", form);
  const lastName = useField("lastName", form);

  return (
    <Segment>
      <form onSubmit={testingHooksSubmit}>
        <div>
          <label>First Name</label>
          <input {...firstName.input} placeholder="First Name" />
          {firstName.meta.touched && firstName.meta.error && (
            <Label basic color="red" pointing="left">
              {firstName.meta.error}
            </Label>
          )}
        </div>
        <div>
          <label>Last Name</label>
          <input {...lastName.input} placeholder="Last Name" />
          {lastName.meta.touched && lastName.meta.error && (
            <Label basic color="red" pointing="left">
              {lastName.meta.error}
            </Label>
          )}
        </div>
        <div className="buttons">
          <button type="submit" disabled={submitting}>
            Submit
          </button>
          <button
            type="button"
            onClick={() => form.reset()}
            disabled={submitting || pristine}
          >
            Reset
          </button>
        </div>
        <pre>{JSON.stringify(values, undefined, 2)}</pre>
        {showErrors && (
          <div>
            <Message
              error
              header="Action Forbidden"
              content="A field is required"
            />
          </div>
        )}
      </form>
    </Segment>
  );
};


const sleep = (ms: any) => new Promise(resolve => setTimeout(resolve, ms));

const onSubmit = async (values: any) => {
  await sleep(300);
  window.alert(JSON.stringify(values));
};
