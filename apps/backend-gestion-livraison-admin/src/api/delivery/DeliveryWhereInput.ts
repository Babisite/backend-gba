import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";

export type DeliveryWhereInput = {
  actualDeliveryTime?: DateTimeNullableFilter;
  actualPickupTime?: DateTimeNullableFilter;
  cancellationReason?: StringNullableFilter;
  cancelledAt?: DateTimeNullableFilter;
  currency?: StringNullableFilter;
  currentLocation?: StringNullableFilter;
  customerId?: IntNullableFilter;
  deliveryAddress?: StringNullableFilter;
  deliveryContactName?: StringNullableFilter;
  deliveryContactPhone?: StringNullableFilter;
  deliveryCoords?: StringNullableFilter;
  deliveryInstructions?: StringNullableFilter;
  deliveryTimeWindow?: JsonFilter;
  dimensions?: JsonFilter;
  discount?: FloatNullableFilter;
  distance?: FloatNullableFilter;
  driverId?: IntNullableFilter;
  estimatedArrival?: DateTimeNullableFilter;
  estimatedTime?: IntNullableFilter;
  feedback?: StringNullableFilter;
  id?: StringFilter;
  isFragile?: BooleanNullableFilter;
  notes?: StringNullableFilter;
  orderNumber?: StringNullableFilter;
  packageSize?: StringNullableFilter;
  packageType?: StringNullableFilter;
  paymentMethod?: StringNullableFilter;
  paymentStatus?: StringNullableFilter;
  pickupAddress?: StringNullableFilter;
  pickupContactName?: StringNullableFilter;
  pickupContactPhone?: StringNullableFilter;
  pickupCoords?: StringNullableFilter;
  pickupInstructions?: StringNullableFilter;
  pickupTimeWindow?: JsonFilter;
  price?: FloatNullableFilter;
  priority?: IntNullableFilter;
  progress?: IntNullableFilter;
  promoCode?: StringNullableFilter;
  proofOfDelivery?: StringNullableFilter;
  requiresRefrigeration?: BooleanNullableFilter;
  routeId?: IntNullableFilter;
  scheduledDate?: DateTimeNullableFilter;
  signature?: StringNullableFilter;
  status?: StringNullableFilter;
  trackingNumber?: StringNullableFilter;
  trackingUrl?: StringNullableFilter;
  typeField?: StringNullableFilter;
  weight?: FloatNullableFilter;
};
