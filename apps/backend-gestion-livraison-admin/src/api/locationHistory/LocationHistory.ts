import { JsonValue } from "type-fest";

export type LocationHistory = {
  accuracy: number | null;
  batteryLevel: number | null;
  createdAt: Date;
  deliveryId: number | null;
  heading: number | null;
  id: string;
  location: string | null;
  metadata: JsonValue;
  speed: number | null;
  timestamp: Date | null;
  updatedAt: Date;
  userId: number | null;
};
