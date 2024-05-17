"use client";

import { useEffect, useState } from "react";
import { IProduct } from "../shared/interfaces/ai-api";

export const FaceCreamMarket = ({ category }: { category: string }) => {
  const [products, setProducts] = useState<Array<IProduct> | undefined>();
  useEffect(() => {
    fetch(`http://localhost:3000/api/market/${category}`).then(async (res) => {
      const json = await res.json();
      console.log(json);
      setProducts(json.products);
      console.log("setProducts", json);
    });

    console.log(category);

  }, [category]);

  return (
    <>
      <h1>
        Results on the market for product category <strong>{category}</strong>
      </h1>
      <br/>
      <ul>
        {products?.map((p, i) => (
          <li key={i}>
            {p.brand} | {p.productName}
          </li>
        ))}
      </ul>
    </>
  );
};
