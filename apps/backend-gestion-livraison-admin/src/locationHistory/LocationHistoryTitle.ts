import { LocationHistory as TLocationHistory } from "../api/locationHistory/LocationHistory";

export const LOCATIONHISTORY_TITLE_FIELD = "location";

export const LocationHistoryTitle = (record: TLocationHistory): string => {
  return record.location?.toString() || String(record.id);
};
