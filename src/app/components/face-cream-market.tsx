"use client";

import { useEffect, useState } from "react";
import { IFaceCreamResponse } from "../shared/interfaces/ai";
import { IMarketProduct } from "../shared/interfaces/store";
import { FaceCreamCard } from "./face-cream-card";

export const FaceCreamMarket = ({
  creamCategory,
}: {
  creamCategory?: IFaceCreamResponse;
}) => {
  const [products, setProducts] = useState<Array<IMarketProduct> | undefined>();
  const [loading, setLoading] = useState(false);

  const handleProducts = async (response: Response) => {
    const json = await response.json();
    if (json.error) {
      alert("Products not found on the market. Please try again!");
    } else {
      setProducts(json.products);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (creamCategory?.category) {
      setLoading(true);
      setProducts(undefined);
      fetch(
        `${process.env.NEXT_PUBLIC_API_URL}market/${creamCategory?.category}`
      ).then(async (res: Response) => {
        handleProducts(res);
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
