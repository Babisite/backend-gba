import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  TextInput,
  NumberInput,
  BooleanInput,
  SelectArrayInput,
} from "react-admin";

export const DeliveryEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="actualDeliveryTime" source="actualDeliveryTime" />
        <DateTimeInput label="actualPickupTime" source="actualPickupTime" />
        <TextInput
          label="cancellationReason"
          multiline
          source="cancellationReason"
        />
        <DateTimeInput label="cancelledAt" source="cancelledAt" />
        <TextInput label="currency" source="currency" />
        <TextInput label="currentLocation" source="currentLocation" />
        <NumberInput step={1} label="customerId" source="customerId" />
        <TextInput label="deliveryAddress" source="deliveryAddress" />
        <TextInput label="deliveryContactName" source="deliveryContactName" />
        <TextInput label="deliveryContactPhone" source="deliveryContactPhone" />
        <TextInput label="deliveryCoords" source="deliveryCoords" />
        <TextInput
          label="deliveryInstructions"
          multiline
          source="deliveryInstructions"
        />
        <div />
        <div />
        <NumberInput label="discount" source="discount" />
        <NumberInput label="distance" source="distance" />
        <NumberInput step={1} label="driverId" source="driverId" />
        <DateTimeInput label="estimatedArrival" source="estimatedArrival" />
        <NumberInput step={1} label="estimatedTime" source="estimatedTime" />
        <TextInput label="feedback" multiline source="feedback" />
        <BooleanInput label="isFragile" source="isFragile" />
        <TextInput label="notes" multiline source="notes" />
        <TextInput label="orderNumber" source="orderNumber" />
        <TextInput label="packageSize" source="packageSize" />
        <TextInput label="packageType" source="packageType" />
        <TextInput label="paymentMethod" source="paymentMethod" />
        <TextInput label="paymentStatus" source="paymentStatus" />
        <TextInput label="pickupAddress" source="pickupAddress" />
        <TextInput label="pickupContactName" source="pickupContactName" />
        <TextInput label="pickupContactPhone" source="pickupContactPhone" />
        <TextInput label="pickupCoords" source="pickupCoords" />
        <TextInput
          label="pickupInstructions"
          multiline
          source="pickupInstructions"
        />
        <div />
        <NumberInput label="price" source="price" />
        <NumberInput step={1} label="priority" source="priority" />
        <NumberInput step={1} label="progress" source="progress" />
        <TextInput label="promoCode" source="promoCode" />
        <TextInput label="proofOfDelivery" source="proofOfDelivery" />
        <BooleanInput
          label="requiresRefrigeration"
          source="requiresRefrigeration"
        />
        <NumberInput step={1} label="routeId" source="routeId" />
        <DateTimeInput label="scheduledDate" source="scheduledDate" />
        <TextInput label="signature" source="signature" />
        <TextInput label="status" source="status" />
        <SelectArrayInput
          label="tags"
          source="tags"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          optionValue="value"
        />
        <TextInput label="trackingNumber" source="trackingNumber" />
        <TextInput label="trackingUrl" source="trackingUrl" />
        <TextInput label="type" source="typeField" />
        <NumberInput label="weight" source="weight" />
      </SimpleForm>
    </Edit>
  );
};
