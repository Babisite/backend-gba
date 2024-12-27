import { Document as TDocument } from "../api/document/Document";

export const DOCUMENT_TITLE_FIELD = "fileType";

export const DocumentTitle = (record: TDocument): string => {
  return record.fileType?.toString() || String(record.id);
};
