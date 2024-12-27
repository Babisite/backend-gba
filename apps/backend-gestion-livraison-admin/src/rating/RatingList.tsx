import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const RatingList = (props: ListProps): React.ReactElement => {
  return (
    <List {...props} title={"Ratings"} perPage={50} pagination={<Pagination />}>
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="categories" source="categories" />
        <TextField label="comment" source="comment" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="customerId" source="customerId" />
        <TextField label="deliveryId" source="deliveryId" />
        <TextField label="ID" source="id" />
        <TextField label="rating" source="rating" />
        <TextField label="response" source="response" />
        <TextField label="status" source="status" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="userId" source="userId" />{" "}
      </Datagrid>
    </List>
  );
};
