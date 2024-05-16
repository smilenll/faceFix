export interface IResponse<BODY> {
  code: number;
  body: BODY;
}

export interface IResponseMessage {
  message: string;
}
