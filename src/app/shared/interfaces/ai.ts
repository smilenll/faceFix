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
  price: number;
}

export interface IAIResponseCreamList {
  creamList: Array<string>;
}

export interface IFaceCreamResponse {
  category: FaceCreamTypeEnum;
  description: string;
}

export interface IAIService { 
  getSkinCreamType(params: ISkinCreamParams): Promise<string>;
  getSkinCreamDescription(params: ISkinCreamParams, category: FaceCreamTypeEnum): Promise<string>;
  getSkinCreamProducts(cream: FaceCreamTypeEnum): Promise<Array<IProduct>>;
}
