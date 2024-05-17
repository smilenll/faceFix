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
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (creamCategory?.category) {
      setLoading(true);
      setProducts(undefined);
      fetch(`http://localhost:3000/api/market/${creamCategory?.category}`)
        .then(async (res) => {
          const json = await res.json();
          setProducts(json.products);
          setLoading(false);
        })
        .catch((e) => {
          setLoading(false);
          alert("Not found products on the market. Try again !");
        });
    }
  }, [creamCategory]);

  return (
    <>
      <FaceCreamForm setResult={setCreamCategory} />
      {isFaceCreamTypeGuard(creamCategory) && (
        <>
          <FaceCreamInfo {...creamCategory} />
          {/* TODO: Refactor  */}
          {loading && (
            <h1 className="mt-12 flex text-center justify-center text-xl font-bold">
              Loading market results...
            </h1>
          )}
          {products && <FaceCreamMarket products={products} />}
        </>
      )}
    </>
  );
};
