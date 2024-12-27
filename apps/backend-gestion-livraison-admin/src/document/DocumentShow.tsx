import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  BooleanField,
} from "react-admin";

export const DocumentShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="expiryDate" source="expiryDate" />
        <TextField label="fileSize" source="fileSize" />
        <TextField label="fileType" source="fileType" />
        <TextField label="ID" source="id" />
        <TextField label="status" source="status" />
        <TextField label="type" source="typeField" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="uploadDate" source="uploadDate" />
        <TextField label="url" source="url" />
        <TextField label="userId" source="userId" />
        <TextField label="verificationDate" source="verificationDate" />
        <TextField label="verificationNotes" source="verificationNotes" />
        <BooleanField label="verified" source="verified" />
        <TextField label="verifiedBy" source="verifiedBy" />
      </SimpleShowLayout>
    </Show>
  );
};
