import { JsonValue } from "type-fest";

export type Route = {
  actualDuration: number | null;
  breakTime: number | null;
  completionRate: number | null;
  createdAt: Date;
  currentLocation: string | null;
  currentStatus: string | null;
  date: Date | null;
  driverId: number | null;
  endAddress: string | null;
  endTime: Date | null;
  estimatedDuration: number | null;
  id: string;
  isOptimized: boolean | null;
  notes: string | null;
  optimizationParams: JsonValue;
  startAddress: string | null;
  startTime: Date | null;
  status: string | null;
  totalDistance: number | null;
  trafficConditions: string | null;
  updatedAt: Date;
  waypoints: JsonValue;
  weather: string | null;
};
