import type { AllLocalsProps } from "../../interface/AllLocals";
import type { LocalInfoProps } from "../../interface/LocalInfo";

export function mapLocalToAllLocalInfoProps(data: any, locals: LocalInfoProps[]): AllLocalsProps {
  return {
    pageNumber: data.pageNumber,
    pageSize: data.pageSize,
    totalElements: data.totalElements,
    totalPages: data.totalPages,
    last: data.last,
    local: locals
  };
}