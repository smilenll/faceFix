"use client";

import { IMarketProduct } from "../shared/interfaces/store";

export const FaceCreamMarket = ({ products }: {products: Array<IMarketProduct>}) => {

  return (
    <>
      <h1>
        Results on the market
      </h1>
      <br/>
      <ul>
        {products?.map((p, i) => (
          <li key={i}>
            {p.brand} | {p.model} | {p.price} $
            <img src={p.image} alt={p.image} />
          </li>
        ))}
      </ul>
    </>
  );
};
