import { FaceCreamTypeEnum } from "../enums/CreamEnum";
import { IFaceCreamType } from "../interfaces/ai-api";

export function isFaceCreamTypeGuard(
  input?: Partial<IFaceCreamType>
): input is IFaceCreamType {
  const category = Object.values(FaceCreamTypeEnum).find(
    (fct) => fct === input?.category
  );

  return !!(category && input?.description);
}