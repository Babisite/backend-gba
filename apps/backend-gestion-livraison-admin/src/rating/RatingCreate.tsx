import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const RatingCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <div />
        <TextInput label="comment" multiline source="comment" />
        <NumberInput step={1} label="customerId" source="customerId" />
        <NumberInput step={1} label="deliveryId" source="deliveryId" />
        <NumberInput step={1} label="rating" source="rating" />
        <TextInput label="response" multiline source="response" />
        <TextInput label="status" source="status" />
        <NumberInput step={1} label="userId" source="userId" />
      </SimpleForm>
    </Create>
  );
};
