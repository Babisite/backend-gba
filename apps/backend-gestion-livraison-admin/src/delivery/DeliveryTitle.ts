import { Delivery as TDelivery } from "../api/delivery/Delivery";

export const DELIVERY_TITLE_FIELD = "deliveryContactName";

export const DeliveryTitle = (record: TDelivery): string => {
  return record.deliveryContactName?.toString() || String(record.id);
};
