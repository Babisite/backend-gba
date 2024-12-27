import { LocationHistoryWhereInput } from "./LocationHistoryWhereInput";
import { LocationHistoryOrderByInput } from "./LocationHistoryOrderByInput";

export type LocationHistoryFindManyArgs = {
  where?: LocationHistoryWhereInput;
  orderBy?: Array<LocationHistoryOrderByInput>;
  skip?: number;
  take?: number;
};
