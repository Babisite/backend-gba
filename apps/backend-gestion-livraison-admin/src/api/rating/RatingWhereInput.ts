import { JsonFilter } from "../../util/JsonFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type RatingWhereInput = {
  categories?: JsonFilter;
  comment?: StringNullableFilter;
  customerId?: IntNullableFilter;
  deliveryId?: IntNullableFilter;
  id?: StringFilter;
  rating?: IntNullableFilter;
  response?: StringNullableFilter;
  status?: StringNullableFilter;
  userId?: IntNullableFilter;
};
