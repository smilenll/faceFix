"use client";

import { IMarketProduct } from "../shared/interfaces/store";

export const FaceCreamMarket = ({
  products,
}: {
  products: Array<IMarketProduct>;
}) => {
  return (
    <div className="mt-12">
      <h1 className="flex justify-center text-lg font-bold">
        Results on the market
      </h1>
      <br />
      <div className="flex row-span-3 align-center justify-center space-x-10">
        {products?.map((p, i) => (
          <div
            key={i}
            className="flex flex-col align-center max-w-48 space-y-2"
          >
            <img className="rounded-lg" src={p.image} alt={p.image} />
            <h3 className="font-bold">{p.brand}</h3>
            <p>{p.model}</p>
            <h2 className="font-bold">{p.price} $</h2>
          </div>
        ))}
      </div>
    </div>
  );
};
