import { InputJsonValue } from "../../types";

export type RouteCreateInput = {
  actualDuration?: number | null;
  breakTime?: number | null;
  completionRate?: number | null;
  currentLocation?: string | null;
  currentStatus?: string | null;
  date?: Date | null;
  driverId?: number | null;
  endAddress?: string | null;
  endTime?: Date | null;
  estimatedDuration?: number | null;
  isOptimized?: boolean | null;
  notes?: string | null;
  optimizationParams?: InputJsonValue;
  startAddress?: string | null;
  startTime?: Date | null;
  status?: string | null;
  totalDistance?: number | null;
  trafficConditions?: string | null;
  waypoints?: InputJsonValue;
  weather?: string | null;
};
