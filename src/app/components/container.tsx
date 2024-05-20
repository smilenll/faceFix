"use client";

import { useState } from "react";
import { FaceCreamForm } from "./face-cream-form";
import { FaceCreamInfo } from "./face-cream-info";
import { isFaceCreamTypeGuard } from "../shared/guards/type-guards";
import { IFaceCreamResponse } from "../shared/interfaces/ai";
import { FaceCreamMarket } from "./face-cream-market";

export const Container = () => {
  const [creamCategory, setCreamCategory] = useState<IFaceCreamResponse>();

  return (
    <>
      <FaceCreamForm setResult={setCreamCategory} />
      {isFaceCreamTypeGuard(creamCategory) && (
        <>
          <FaceCreamInfo {...creamCategory} />
          <FaceCreamMarket creamCategory={creamCategory} />
        </>
      )}
    </>
  );
};
