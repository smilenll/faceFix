import { IFaceCreamResponse } from "../shared/interfaces/ai";
import { IResponseError } from "../shared/interfaces/http";

export const validateResponse = (response: IResponseError | IFaceCreamResponse ) => {
  if("error" in response) {
    alert(response.error)
    throw Error(response.error)
  };
}