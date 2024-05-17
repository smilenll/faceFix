import { FaceCreamTypeEnum } from "../enums/CreamEnum";
import { OilinessEnum, ThicknessEnum } from "../enums/SkinEnum";

export interface ISkinCreamParams {
  age: number;
  skinColor: number;
  oiliness: OilinessEnum;
  thickness: ThicknessEnum;
}

export interface IProduct {
  brand: string;
  productName: string;
}

export interface IAIResponseCreamList {
  creamList: Array<string>;
}

export interface IFaceCreamType {
  category: FaceCreamTypeEnum;
  description: string;
}

export interface IAIService { 
  getSkinCreamType(params: ISkinCreamParams): Promise<string>;
  getSkinCreamDescription(params: ISkinCreamParams): Promise<string>;
  getSkinCreamProducts(cream: FaceCreamTypeEnum): Promise<Array<IProduct>>;
}
