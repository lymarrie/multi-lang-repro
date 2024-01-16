import * as React from "react";
import { CardComponent, CardProps } from "@yext/search-ui-react";
import { Product } from "../../types/autogen";

export const ProductCard: CardComponent<Product> = ({
  result,
}: CardProps<Product>): JSX.Element => {
  const product = result.rawData;

  return (
    <div className="flex flex-col px-4 py-4 border rounded-lg items-center mt-4 gap-4">
      <img
        src={product.primaryPhoto.image.url}
        className="aspect-square w-full object-cover"
      />
      <h3 className="text-lg font-semibold">{product.name}</h3>
    </div>
  );
};
