"use client";

import { useEffect, useState } from "react";
import { IFaceCreamResponse } from "../shared/interfaces/ai";
import { IMarketProduct } from "../shared/interfaces/store";
import { FaceCreamCard } from "./face-cream-card";

export const FaceCreamMarket = ({
  creamCategory
}: {
  creamCategory?: IFaceCreamResponse
}) => {
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
          console.error(e);
          alert("Not found products on the market. Try again !");
        });
    }
  }, [creamCategory]);

  return (
    <>
      {loading && (
        <h1 className="mt-12 flex text-center justify-center text-xl font-bold">
          Loading market results...
        </h1>
      )}
      {products && (
        <div className="mt-12">
          <h1 className="flex justify-center text-lg font-bold">
            Results on the market
          </h1>
          <br />
          <div className="flex row-span-3 align-center justify-center space-x-10">
            {products?.map((p, i) => (
              <FaceCreamCard product={p} key={i} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};
