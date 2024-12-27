import { Route as TRoute } from "../api/route/Route";

export const ROUTE_TITLE_FIELD = "currentLocation";

export const RouteTitle = (record: TRoute): string => {
  return record.currentLocation?.toString() || String(record.id);
};
