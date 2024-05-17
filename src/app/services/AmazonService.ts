import { IResponse } from "../shared/interfaces/http";
import { IAuthResponse, IMarketProduct, IStoreService } from "../shared/interfaces/store";

export default class AmazonService implements IStoreService {
  constructor(private readonly tokens: IAuthResponse ) {}
  
  getProduct(brand: string, productName: string): Promise<IResponse<IMarketProduct>> {
    return Promise.resolve({
      code:200,
      body: {
        brand,
        model: productName,
        image: "image",
        price: Math.floor(Math.random() * 100)
      }
    })
  }
  
}