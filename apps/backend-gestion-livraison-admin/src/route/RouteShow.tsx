import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  BooleanField,
} from "react-admin";

export const RouteShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="actualDuration" source="actualDuration" />
        <TextField label="breakTime" source="breakTime" />
        <TextField label="completionRate" source="completionRate" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="currentLocation" source="currentLocation" />
        <TextField label="currentStatus" source="currentStatus" />
        <TextField label="date" source="date" />
        <TextField label="driverId" source="driverId" />
        <TextField label="endAddress" source="endAddress" />
        <TextField label="endTime" source="endTime" />
        <TextField label="estimatedDuration" source="estimatedDuration" />
        <TextField label="ID" source="id" />
        <BooleanField label="isOptimized" source="isOptimized" />
        <TextField label="notes" source="notes" />
        <TextField label="optimizationParams" source="optimizationParams" />
        <TextField label="startAddress" source="startAddress" />
        <TextField label="startTime" source="startTime" />
        <TextField label="status" source="status" />
        <TextField label="totalDistance" source="totalDistance" />
        <TextField label="trafficConditions" source="trafficConditions" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="waypoints" source="waypoints" />
        <TextField label="weather" source="weather" />
      </SimpleShowLayout>
    </Show>
  );
};
