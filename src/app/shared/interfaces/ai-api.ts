import { FaceCreamTypeEnum } from "../enums/CreamEnum";
import { OilinessEnum, ThicknessEnum } from "../enums/SkinEnum";
import { IResponse } from "./http";

export interface ISkinCreamParams {
  age: number;
  skinColor: number;
  oiliness: OilinessEnum;
  thickness: ThicknessEnum;
}

export interface IAIResponseCreamList {
  creamList: Array<string>;
}

export interface IFaceCreamType {
  category: FaceCreamTypeEnum;
  description: string;
}

export interface IAIService {
  getSkinCreamType(params: ISkinCreamParams): Promise<any>;
  getSkinCreamDescription(
    params: ISkinCreamParams
  ): Promise<any>;
  getSkinCreamProducts(
    cream: FaceCreamTypeEnum
  ): Promise<IResponse<IAIResponseCreamList>>;
}
