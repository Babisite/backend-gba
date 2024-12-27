import { SortOrder } from "../../util/SortOrder";

export type RouteOrderByInput = {
  actualDuration?: SortOrder;
  breakTime?: SortOrder;
  completionRate?: SortOrder;
  createdAt?: SortOrder;
  currentLocation?: SortOrder;
  currentStatus?: SortOrder;
  date?: SortOrder;
  driverId?: SortOrder;
  endAddress?: SortOrder;
  endTime?: SortOrder;
  estimatedDuration?: SortOrder;
  id?: SortOrder;
  isOptimized?: SortOrder;
  notes?: SortOrder;
  optimizationParams?: SortOrder;
  startAddress?: SortOrder;
  startTime?: SortOrder;
  status?: SortOrder;
  totalDistance?: SortOrder;
  trafficConditions?: SortOrder;
  updatedAt?: SortOrder;
  waypoints?: SortOrder;
  weather?: SortOrder;
};
