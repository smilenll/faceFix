"use client";

import { useEffect, useState } from "react";
import { FaceCreamForm } from "./face-cream-form";
import { FaceCreamInfo } from "./face-cream-info";
import { isFaceCreamTypeGuard } from "../shared/type-guards/type-guards";
import { IFaceCreamType } from "../shared/interfaces/ai";
import { FaceCreamMarket } from "./face-cream-market";
import { IMarketProduct } from "../shared/interfaces/store";

export const Container = () => {
  const [creamCategory, setCreamCategory] = useState<Partial<IFaceCreamType>>();
  const [products, setProducts] = useState<Array<IMarketProduct> | undefined>();
  useEffect(() => {
    fetch(`http://localhost:3000/api/market/${creamCategory?.category}`).then(
      async (res) => {
        console.log(res);
        const json = await res.json();

        setProducts(json.products);
        console.log("setProducts", json);
      }
    ).catch(e => alert("Products not found"));

    console.log(creamCategory);
  }, [creamCategory]);

  return (
    <>
      <FaceCreamForm setResult={setCreamCategory} />
      {isFaceCreamTypeGuard(creamCategory) && (
        <>
          {" "}
          <br />
          <hr />
          <FaceCreamInfo {...creamCategory} />
          <br />
          <hr />
          {products && <FaceCreamMarket products={products} />}
        </>
      )}
    </>
  );
};
