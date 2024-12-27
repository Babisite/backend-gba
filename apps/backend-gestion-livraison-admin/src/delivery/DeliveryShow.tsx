import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  BooleanField,
} from "react-admin";

export const DeliveryShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="actualDeliveryTime" source="actualDeliveryTime" />
        <TextField label="actualPickupTime" source="actualPickupTime" />
        <TextField label="cancellationReason" source="cancellationReason" />
        <TextField label="cancelledAt" source="cancelledAt" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="currency" source="currency" />
        <TextField label="currentLocation" source="currentLocation" />
        <TextField label="customerId" source="customerId" />
        <TextField label="deliveryAddress" source="deliveryAddress" />
        <TextField label="deliveryContactName" source="deliveryContactName" />
        <TextField label="deliveryContactPhone" source="deliveryContactPhone" />
        <TextField label="deliveryCoords" source="deliveryCoords" />
        <TextField label="deliveryInstructions" source="deliveryInstructions" />
        <TextField label="deliveryTimeWindow" source="deliveryTimeWindow" />
        <TextField label="dimensions" source="dimensions" />
        <TextField label="discount" source="discount" />
        <TextField label="distance" source="distance" />
        <TextField label="driverId" source="driverId" />
        <TextField label="estimatedArrival" source="estimatedArrival" />
        <TextField label="estimatedTime" source="estimatedTime" />
        <TextField label="feedback" source="feedback" />
        <TextField label="ID" source="id" />
        <BooleanField label="isFragile" source="isFragile" />
        <TextField label="notes" source="notes" />
        <TextField label="orderNumber" source="orderNumber" />
        <TextField label="packageSize" source="packageSize" />
        <TextField label="packageType" source="packageType" />
        <TextField label="paymentMethod" source="paymentMethod" />
        <TextField label="paymentStatus" source="paymentStatus" />
        <TextField label="pickupAddress" source="pickupAddress" />
        <TextField label="pickupContactName" source="pickupContactName" />
        <TextField label="pickupContactPhone" source="pickupContactPhone" />
        <TextField label="pickupCoords" source="pickupCoords" />
        <TextField label="pickupInstructions" source="pickupInstructions" />
        <TextField label="pickupTimeWindow" source="pickupTimeWindow" />
        <TextField label="price" source="price" />
        <TextField label="priority" source="priority" />
        <TextField label="progress" source="progress" />
        <TextField label="promoCode" source="promoCode" />
        <TextField label="proofOfDelivery" source="proofOfDelivery" />
        <BooleanField
          label="requiresRefrigeration"
          source="requiresRefrigeration"
        />
        <TextField label="routeId" source="routeId" />
        <TextField label="scheduledDate" source="scheduledDate" />
        <TextField label="signature" source="signature" />
        <TextField label="status" source="status" />
        <TextField label="tags" source="tags" />
        <TextField label="trackingNumber" source="trackingNumber" />
        <TextField label="trackingUrl" source="trackingUrl" />
        <TextField label="type" source="typeField" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="weight" source="weight" />
      </SimpleShowLayout>
    </Show>
  );
};
