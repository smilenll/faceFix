"use client";

const SEARCH_LINK = "https://www.amazon.com/s?k=";

import Link from "next/link";
import { IMarketProduct } from "../shared/interfaces/store";

export const FaceCreamCard = ({ product }: { product: IMarketProduct }) => {
  const link = `${SEARCH_LINK}${encodeURI(
    product.brand + " " + product.model
  )}`;

  return (
    <div className="flex flex-col max-w-48 min-h-80 space-y-2 relative">
      <img className="rounded-lg" src={product.image} alt={product.image} />
      <h3 className="font-bold">{product.brand}</h3>
      <p>{product.model}</p>
      <div className="flex justify-between absolute bottom-0">
        <h2 className="font-bold  flex items-center">~ {product.price}</h2>
        <Link href={link} target="_blank">
          <img src="amazon.png" alt="Buy now" className="w-20 flex item-center" />
        </Link>
      </div>
    </div>
  );
};
