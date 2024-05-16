import { MessageBuilder } from "@/app/builders/MessageBuidler";
import { FaceCreamTypeEnum } from "@/app/shared/enums/CreamEnum";
import {
  IAIResponseCreamList,
  IAIService,
  ISkinCreamParams,
} from "@/app/shared/interfaces/ai-api";
import { IResponse } from "@/app/shared/interfaces/http";
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
          apiKey: process.env["OPENAI_API_KEY"],
        }),
        new MessageBuilder()
      ));
    }
  }

  async getSkinCreamType(params: ISkinCreamParams): Promise<string> {
    const message = this.messageBuilder.categoryRequest(params, true);

    const chatGPTResponse = await this.sendGptQuery(message);

    return this.getGptMessage(chatGPTResponse)?.toLowerCase();
  }

  async getSkinCreamDescription(params: ISkinCreamParams): Promise<any> {
    const message = this.messageBuilder.categoryRequest(params, false);
    const chatGPTResponse = await this.sendGptQuery(message);

    return this.getGptMessage(chatGPTResponse);
  }

  getSkinCreamProducts(
    cream: FaceCreamTypeEnum
  ): Promise<IResponse<IAIResponseCreamList>> {
    throw new Error("Method not implemented.");
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
    //TODO validate response
    if (!response.choices[0].message.content) throw Error("Bad request");
    
    return response.choices[0].message.content;
  }
}
