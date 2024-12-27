import { InputJsonValue } from "../../types";

export type LocationHistoryCreateInput = {
  accuracy?: number | null;
  batteryLevel?: number | null;
  deliveryId?: number | null;
  heading?: number | null;
  location?: string | null;
  metadata?: InputJsonValue;
  speed?: number | null;
  timestamp?: Date | null;
  userId?: number | null;
};
