import { SortOrder } from "../../util/SortOrder";

export type LocationHistoryOrderByInput = {
  accuracy?: SortOrder;
  batteryLevel?: SortOrder;
  createdAt?: SortOrder;
  deliveryId?: SortOrder;
  heading?: SortOrder;
  id?: SortOrder;
  location?: SortOrder;
  metadata?: SortOrder;
  speed?: SortOrder;
  timestamp?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
