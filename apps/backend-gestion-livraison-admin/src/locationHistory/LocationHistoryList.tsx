import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const LocationHistoryList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"LocationHistories"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
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
        <TextField label="userId" source="userId" />{" "}
      </Datagrid>
    </List>
  );
};
