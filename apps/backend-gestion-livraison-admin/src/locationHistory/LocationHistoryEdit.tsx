import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const LocationHistoryEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="accuracy" source="accuracy" />
        <NumberInput label="batteryLevel" source="batteryLevel" />
        <NumberInput step={1} label="deliveryId" source="deliveryId" />
        <NumberInput label="heading" source="heading" />
        <TextInput label="location" source="location" />
        <div />
        <NumberInput label="speed" source="speed" />
        <DateTimeInput label="timestamp" source="timestamp" />
        <NumberInput step={1} label="userId" source="userId" />
      </SimpleForm>
    </Edit>
  );
};
