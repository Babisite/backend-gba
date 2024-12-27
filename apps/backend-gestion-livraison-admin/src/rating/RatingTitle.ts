import { Rating as TRating } from "../api/rating/Rating";

export const RATING_TITLE_FIELD = "status";

export const RatingTitle = (record: TRating): string => {
  return record.status?.toString() || String(record.id);
};
