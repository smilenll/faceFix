export interface IResponse<BODY> {
  code: number;
  body: BODY;
}

export interface IResponseMessage {
  message: string;
}

export interface IResponseError {
  error: string;
  status: string;
}
