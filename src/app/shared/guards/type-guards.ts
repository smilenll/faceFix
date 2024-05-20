import { FaceCreamTypeEnum } from "../enums/CreamEnum";
import { IFaceCreamResponse } from "../interfaces/ai";

export function isFaceCreamTypeEnumGuard(
  category?: string
): category is FaceCreamTypeEnum {
  return Object.values(FaceCreamTypeEnum).some((fct) => fct === category);
}

export function isFaceCreamTypeGuard(
  input?: Partial<IFaceCreamResponse>
): input is IFaceCreamResponse {
  return !!(isFaceCreamTypeEnumGuard(input?.category) && input?.description);
}
