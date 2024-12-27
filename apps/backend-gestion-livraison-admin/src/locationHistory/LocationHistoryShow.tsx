import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const LocationHistoryShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="accuracy" source="accuracy" />
        <TextField label="batteryLevel" source="batteryLevel" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="deliveryId" source="deliveryId" />
        <TextField label="heading" source="heading" />
        <TextField label="ID" source="id" />
        <TextField label="location" source="location" />
        <TextField label="metadata" source="metadata" />
        <TextField label="speed" source="speed" />
        <TextField label="timestamp" source="timestamp" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="userId" source="userId" />
      </SimpleShowLayout>
    </Show>
  );
};
