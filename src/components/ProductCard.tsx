import { Image, LexicalRichText } from "@yext/pages-components";
import { C_featuredProducts } from "../types/autogen";

export interface ProductCardProps {
  product: C_featuredProducts;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { primaryPhoto, name, richTextDescriptionV2 } = product;
  return (
    <>
      {primaryPhoto && (
        <div className="flex justify-center h-[187px] mb-8">
          <Image layout="fill" image={primaryPhoto} />
        </div>
      )}
      <div className="font-bold text-lg">{name}</div>
      {richTextDescriptionV2 && (
        <LexicalRichText
          serializedAST={JSON.stringify(richTextDescriptionV2.json)}
        />
      )}
    </>
  );
};

export default ProductCard;
