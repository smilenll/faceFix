import { IResponse } from "../shared/interfaces/http";
import {
  IAuthResponse,
  IMarketProduct,
  IStoreService,
} from "../shared/interfaces/store";

export default class AmazonService implements IStoreService {
  constructor(private readonly tokens: IAuthResponse) {}

  // Mock method
  getProduct(
    brand: string,
    productName: string,
    price: number
  ): Promise<IResponse<IMarketProduct>> {
    const link = `${process.env.AMAZON_SEARCH_LINK}${encodeURI(brand + " " + productName)}`;

    return Promise.resolve({
      code: 200,
      body: {
        brand,
        model: productName,
        image: "image.jpg",
        price,
        link,
      },
    });
  }
}
