import { InputJsonValue } from "../../types";

export type RatingCreateInput = {
  categories?: InputJsonValue;
  comment?: string | null;
  customerId?: number | null;
  deliveryId?: number | null;
  rating?: number | null;
  response?: string | null;
  status?: string | null;
  userId?: number | null;
};