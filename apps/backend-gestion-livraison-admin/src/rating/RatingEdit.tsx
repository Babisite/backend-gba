import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const RatingEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
