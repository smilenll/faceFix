import { MessageBuilder } from "@/app/builders/MessageBuidler";
import { FaceCreamTypeEnum } from "@/app/shared/enums/CreamEnum";
import {
  IAIService,
  IProduct,
  ISkinCreamParams,
} from "@/app/shared/interfaces/ai";
import OpenAI from "openai";

export class OpenAIService implements IAIService {
  private static instance: OpenAIService | undefined;

  private constructor(
    private readonly connection: OpenAI,
    private readonly messageBuilder: MessageBuilder
  ) {}

  public static getInstance() {
    if (this.instance) {
      return this.instance;
    } else {
      return (this.instance = new OpenAIService(
        new OpenAI({
          apiKey: process.env.OPENAI_API_KEY,
        }),
        new MessageBuilder()
      ));
    }
  }

  async getSkinCreamType(params: ISkinCreamParams): Promise<string> {
    const message = this.messageBuilder.categoryRequest(params);

    const chatGPTResponse = await this.sendGptQuery(message);

    return this.getGptMessage(chatGPTResponse)?.toLowerCase();
  }

  async getSkinCreamDescription(
    params: ISkinCreamParams,
    category: FaceCreamTypeEnum
  ): Promise<string> {
    const message = this.messageBuilder.descriptionRequest(params, category);
    const chatGPTResponse = await this.sendGptQuery(message);

    return this.getGptMessage(chatGPTResponse);
  }

  async getSkinCreamProducts(
    category: FaceCreamTypeEnum
  ): Promise<Array<IProduct>> {
    const message = this.messageBuilder.productsNames(category);

    const chatGPTResponse = await this.sendGptQuery(message);

    return this.getGptArray(chatGPTResponse);
  }

  private async sendGptQuery(message: string) {
    return await this.connection.chat.completions.create({
      messages: [{ role: "user", content: message }],
      model: "gpt-3.5-turbo",
    });
  }

  private getGptMessage(
    response: OpenAI.Chat.Completions.ChatCompletion
  ): string {
    //TODO validate response handle multiple choices
    if (!response.choices[0].message.content) throw Error("Bad request");

    return response.choices[0].message.content;
  }

  private getGptArray(
    response: OpenAI.Chat.Completions.ChatCompletion
  ): Array<IProduct> {
    //TODO validate response and handle multiple choices
    if (!response.choices[0].message.content) throw Error("Bad request");

    return JSON.parse(response.choices[0].message.content);
  }
}
