"use client";

import { useState } from "react";
import { FaceCreamForm } from "./face-cream-form";
import { FaceCreamInfo } from "./face-cream-info";
import { isFaceCreamTypeGuard } from "../shared/type-guards/type-guards";
import { IFaceCreamType } from "../shared/interfaces/ai-api";

export const Container = () => {
  const [creamCategory, setCreamCategory] = useState<Partial<IFaceCreamType>>();

  return (
    <>
      <FaceCreamForm setResult={setCreamCategory} />
      {isFaceCreamTypeGuard(creamCategory) && (
        <FaceCreamInfo {...creamCategory} />
      )}
    </>
  );
};