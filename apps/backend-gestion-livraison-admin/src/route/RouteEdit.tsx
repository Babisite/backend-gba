import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
  DateTimeInput,
  BooleanInput,
} from "react-admin";

export const RouteEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="actualDuration" source="actualDuration" />
        <NumberInput step={1} label="breakTime" source="breakTime" />
        <NumberInput label="completionRate" source="completionRate" />
        <TextInput label="currentLocation" source="currentLocation" />
        <TextInput label="currentStatus" source="currentStatus" />
        <DateTimeInput label="date" source="date" />
        <NumberInput step={1} label="driverId" source="driverId" />
        <TextInput label="endAddress" source="endAddress" />
        <DateTimeInput label="endTime" source="endTime" />
        <NumberInput
          step={1}
          label="estimatedDuration"
          source="estimatedDuration"
        />
        <BooleanInput label="isOptimized" source="isOptimized" />
        <TextInput label="notes" multiline source="notes" />
        <div />
        <TextInput label="startAddress" source="startAddress" />
        <DateTimeInput label="startTime" source="startTime" />
        <TextInput label="status" source="status" />
        <NumberInput label="totalDistance" source="totalDistance" />
        <TextInput label="trafficConditions" source="trafficConditions" />
        <div />
        <TextInput label="weather" source="weather" />
      </SimpleForm>
    </Edit>
  );
};
