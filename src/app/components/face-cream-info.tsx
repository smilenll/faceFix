'use client'

import { IFaceCreamType } from "../shared/interfaces/ai-api";

export const FaceCreamInfo = ({category, description}: IFaceCreamType) => {

  return (
    <>
      <h1>You should look for <strong>{category}</strong> type of cream.</h1>
      <div>Description: {description}</div>
    </>
  );
};
