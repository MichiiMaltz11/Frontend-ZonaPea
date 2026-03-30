import type { LocalInfoProps } from "./LocalInfo";

export interface AllLocalsProps {
  pageNumber: number;
  pageSize: number;
  totalElements: number;
  totalPages: number;
  last: boolean;
  local: LocalInfoProps[];
}
