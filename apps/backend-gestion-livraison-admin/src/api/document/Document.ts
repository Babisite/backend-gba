export type Document = {
  createdAt: Date;
  expiryDate: Date | null;
  fileSize: number | null;
  fileType: string | null;
  id: string;
  status: string | null;
  typeField: string | null;
  updatedAt: Date;
  uploadDate: Date | null;
  url: string | null;
  userId: number | null;
  verificationDate: Date | null;
  verificationNotes: string | null;
  verified: boolean | null;
  verifiedBy: number | null;
};
