import { SortOrder } from "../../util/SortOrder";

export type RatingOrderByInput = {
  categories?: SortOrder;
  comment?: SortOrder;
  createdAt?: SortOrder;
  customerId?: SortOrder;
  deliveryId?: SortOrder;
  id?: SortOrder;
  rating?: SortOrder;
  response?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
