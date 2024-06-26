import {
  FaceCreamTypeEnum,
} from "../shared/enums/CreamEnum";
import { ISkinCreamParams } from "../shared/interfaces/ai";

export class MessageBuilder {
  private getBasicFormText ({ age, oiliness, skinColor, thickness }: ISkinCreamParams,) {
    return (`
    Age: ${age}
    Oiliness: ${oiliness}
    Skin color: measured from 1 to 9, where 1 is light and 9 is dark: ${skinColor}
    Skin thickness: ${thickness}.`)
  }

  public categoryRequest(
    params: ISkinCreamParams,
  ): string {
    const message = `Choose a skin cream category from
    ${Object.values(FaceCreamTypeEnum)}
    based on person skin
    ${this.getBasicFormText(params)}
    Return only category`;

    return message;
  }

  public descriptionRequest(
    params: ISkinCreamParams,
    category: FaceCreamTypeEnum
  ): string {
    const message = `For
    person with skin parameters 
    ${this.getBasicFormText(params)}
    Why category ${category} is the best choice?`;

    return message;
  }

  public productsNames(category: FaceCreamTypeEnum) {
    return `For face cream type
    ${category}
    give me options from the 3 most popular product by
    brand,
    productName
    price,
    as JSON array`;
  }
}
