import { SortOrder } from "../../util/SortOrder";

export type DocumentOrderByInput = {
  createdAt?: SortOrder;
  expiryDate?: SortOrder;
  fileSize?: SortOrder;
  fileType?: SortOrder;
  id?: SortOrder;
  status?: SortOrder;
  typeField?: SortOrder;
  updatedAt?: SortOrder;
  uploadDate?: SortOrder;
  url?: SortOrder;
  userId?: SortOrder;
  verificationDate?: SortOrder;
  verificationNotes?: SortOrder;
  verified?: SortOrder;
  verifiedBy?: SortOrder;
};
