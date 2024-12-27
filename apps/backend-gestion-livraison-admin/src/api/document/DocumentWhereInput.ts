import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";

export type DocumentWhereInput = {
  expiryDate?: DateTimeNullableFilter;
  fileSize?: IntNullableFilter;
  fileType?: StringNullableFilter;
  id?: StringFilter;
  status?: StringNullableFilter;
  typeField?: StringNullableFilter;
  uploadDate?: DateTimeNullableFilter;
  url?: StringNullableFilter;
  userId?: IntNullableFilter;
  verificationDate?: DateTimeNullableFilter;
  verificationNotes?: StringNullableFilter;
  verified?: BooleanNullableFilter;
  verifiedBy?: IntNullableFilter;
};
