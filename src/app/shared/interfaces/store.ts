import { IProduct } from "./ai";
import { IResponse, IResponseMessage } from "./http";

export interface IAuthResponse {
    access_token: string,
    refresh_token: string,
    token_type: string,
    expires_in: number,
}

export interface IMarketProduct {
  brand: string,
  model: string,
  image: string,
  price: number
}

export interface IStoreService {
  getProduct(brand: string, productName: string, price: number): Promise<IResponse<IMarketProduct>>
}
