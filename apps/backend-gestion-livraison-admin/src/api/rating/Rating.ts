import { JsonValue } from "type-fest";

export type Rating = {
  categories: JsonValue;
  comment: string | null;
  createdAt: Date;
  customerId: number | null;
  deliveryId: number | null;
  id: string;
  rating: number | null;
  response: string | null;
  status: string | null;
  updatedAt: Date;
  userId: number | null;
};
