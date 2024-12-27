import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  NumberInput,
  TextInput,
  BooleanInput,
} from "react-admin";

export const DocumentEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="expiryDate" source="expiryDate" />
        <NumberInput step={1} label="fileSize" source="fileSize" />
        <TextInput label="fileType" source="fileType" />
        <TextInput label="status" source="status" />
        <TextInput label="type" source="typeField" />
        <DateTimeInput label="uploadDate" source="uploadDate" />
        <TextInput label="url" source="url" />
        <NumberInput step={1} label="userId" source="userId" />
        <DateTimeInput label="verificationDate" source="verificationDate" />
        <TextInput
          label="verificationNotes"
          multiline
          source="verificationNotes"
        />
        <BooleanInput label="verified" source="verified" />
        <NumberInput step={1} label="verifiedBy" source="verifiedBy" />
      </SimpleForm>
    </Edit>
  );
};
