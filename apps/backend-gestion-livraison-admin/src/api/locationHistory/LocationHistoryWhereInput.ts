import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type LocationHistoryWhereInput = {
  accuracy?: FloatNullableFilter;
  batteryLevel?: FloatNullableFilter;
  deliveryId?: IntNullableFilter;
  heading?: FloatNullableFilter;
  id?: StringFilter;
  location?: StringNullableFilter;
  metadata?: JsonFilter;
  speed?: FloatNullableFilter;
  timestamp?: DateTimeNullableFilter;
  userId?: IntNullableFilter;
};
