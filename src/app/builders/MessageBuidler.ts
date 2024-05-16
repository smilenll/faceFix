import {
  FaceCreamTypeEnum,
} from "../shared/enums/CreamEnum";
import { ISkinCreamParams } from "../shared/interfaces/ai-api";

export class MessageBuilder {
  public categoryRequest(
    { age, oiliness, skinColor, thickness }: ISkinCreamParams,
    categoryOnly?: boolean
  ): string {
    const message = `Chose skin category cream from
    ${Object.values(FaceCreamTypeEnum)}
    based on person skin
    Age: ${age}
    Oiliness: ${oiliness}
    Skin color measured from 1 to 10 from light to dark: ${skinColor}
    Skin thickness: ${thickness}.
    ${categoryOnly && " Return only category"}`;

    return message;
  }

  public productsNames(category: FaceCreamTypeEnum) {
    return `For face cream type
    ${category}
    give me an option from 3 most popular manicures`;
  }
}
