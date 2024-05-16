import { CreamFaceTypeEnum } from "../enums/CreamEnum";
import { OilinessEnum, ThicknessEnum } from "../enums/SkinEnum";
import { IResponse } from "./http";

export interface ISkinCreamParams {
  age: number;
  skinColor: number;
  oiliness: OilinessEnum;
  thickness: ThicknessEnum;
}

export interface IAIResponseMessage {
  message: CreamFaceTypeEnum;
}

export interface IAIResponseCreamList {
  creamList: Array<string>;
}

export interface IAIApi {
  getSkinProductType(params: ISkinCreamParams): IResponse<IAIResponseMessage>;
  getSkinCreamDescription(
    cream: CreamFaceTypeEnum
  ): IResponse<{ message: string }>;
  getSkinCreamDescription(
    cream: CreamFaceTypeEnum
  ): IResponse<IAIResponseCreamList>;
}
