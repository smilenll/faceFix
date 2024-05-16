import { IResponse, IResponseMessage } from "./http";

export interface IStoreApi {
  getProduct(productName: string): IResponse<IResponseMessage>;
}
