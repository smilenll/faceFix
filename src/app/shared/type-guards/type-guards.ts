import { FaceCreamTypeEnum } from "../enums/CreamEnum";
import { IFaceCreamType } from "../interfaces/ai";

export function isFaceCreamTypeEnumGuard(
  category?: string
): category is FaceCreamTypeEnum {
  return Object.values(FaceCreamTypeEnum).some((fct) => fct === category);
}

export function isFaceCreamTypeGuard(
  input?: Partial<IFaceCreamType>
): input is IFaceCreamType {
  return !!(isFaceCreamTypeEnumGuard(input?.category) && input?.description);
}
