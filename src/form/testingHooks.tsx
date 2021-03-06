import React, { useState } from "react";
import { useForm, useField } from "react-final-form-hooks";
import { Message, Label, Segment, Input, Button, Form } from "semantic-ui-react";
import { string, object, number } from 'yup';
import { objectToArray, sleep } from './utilities';
var _ = require('lodash');


// define a yup.js schema
const schema = object().shape({
  firstName: string().required(),
  lastName: string().required(),
  age: number().min(1).max(120)
});

// Final Form executes validate() on every key press
const validate = async (values: any) => {
  let errors: any = {};

  await schema.validate(values, { abortEarly: false }).catch((err) => {
     if(err.inner)
     {
       // create an object from the array of ValidationError so let Final Form can bind each [field].meta.error
       errors = err.inner.reduce((errorObj: any, error: any) => {
         // TODO: ideally this would leverage the placeholder property and replace the camel case with it (). If I make a wrapper component then that value could be passed in.
          errorObj[error.path] = error.message;
          return errorObj;
       }, {});
      }
  });

  return errors;
};

export const TestingHooks = () => {
  const [showErrors, setShowErrors] = useState(false);
  const [allErrors, setAllErrors] = useState<string[]>([]);     // build a summary of errors to be displayed near the submit button

  const { form, handleSubmit, values, pristine, submitting } = useForm({
    onSubmit,
    validate
  });

  const testingHooksSubmit = (
    event?: React.SyntheticEvent<HTMLFormElement>
  ) => {
    event && event.preventDefault();

    // validate the schema
    validate(values).then((errors: any) => {
      const errorCount = Object.keys(errors).length
      const hadErrors = errorCount > 0;

      setAllErrors(objectToArray(errors));

      !pristine && setShowErrors(hadErrors);
      console.log(showErrors);

      //execute submit if no validation errors exist
      !hadErrors && handleSubmit(event);
    });
  };

  // create one of these for each form field
  const firstName = useField("firstName", form);
  const lastName = useField("lastName", form);
  const age = useField("age", form);

  return (
    <Segment>
      <form onSubmit={testingHooksSubmit}>
        <Form.Field>
          <Input {...firstName.input} label="First Name" placeholder="First Name" required />
          {firstName.meta.touched && firstName.meta.error && (
            <Label basic color="red" pointing="left">
              {firstName.meta.error}
            </Label>
          )}
        </Form.Field>
        <Form.Field>
          <Input {...lastName.input} label="Last Name" placeholder="Last Name" />
          {lastName.meta.touched && lastName.meta.error && (
            <Label basic color="red" pointing="left">
              {lastName.meta.error}
            </Label>
          )}
        </Form.Field>
        <Form.Field>
          <Input {...age.input} label="Age" placeholder="Age" />
          {age.meta.touched && age.meta.error && (
            <Label basic color="red" pointing="left">
              {age.meta.error}
            </Label>
          )}
        </Form.Field>
        {showErrors && (
          <div>
            <Message
              error
              header="Please fix these errors and try again"
              list={allErrors}
            />
          </div>
        )}
        <div className="buttons">
          <Button type="submit" disabled={submitting}>
            Submit
          </Button>
          <Button
            type="button"
            onClick={() => {
              setShowErrors(false);
              form.reset();
            }}
            disabled={submitting || pristine}
          >
            Reset
          </Button>
        </div>
        <pre>{JSON.stringify(values, undefined, 2)}</pre>
      </form>
    </Segment>
  );
};


// pretend this persisted to the server
const onSubmit = async (values: any) => {
  await sleep(300);
  window.alert(JSON.stringify(values));
};
