import { IResponse } from "../shared/interfaces/http";
import { IAuthResponse, IMarketProduct, IStoreService } from "../shared/interfaces/store";

export default class AmazonService implements IStoreService {
  constructor(private readonly tokens: IAuthResponse ) {}

  getProduct(brand: string, productName: string, price: number): Promise<IResponse<IMarketProduct>> {
    return Promise.resolve({
      code:200,
      body: {
        brand,
        model: productName,
        image: "image.jpg",
        price
      }
    })
  }
  
}