import { C_featuredProducts } from "../types/autogen";
import ProductCard from "./ProductCard";

export interface FeaturedProductProps {
  title: string;
  products: C_featuredProducts[];
  itemsToShow?: number;
}

const FeaturedProducts = ({
  title,
  products,
  itemsToShow = 3,
}: FeaturedProductProps) => {
  if (!products.length) {
    return null;
  }

  const itemsToRender = products.filter((_, idx) => idx < itemsToShow);

  return (
    <div className="px-6 py-8 lg:px-16 ">
      <div className="mx-auto max-w-2xl text-center mb-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-3xl">
          {title}
        </h2>
      </div>
      <ul className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {itemsToRender.map((item, i) => (
          <li className="bg-white" key={i}>
            <ProductCard product={item} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FeaturedProducts;
