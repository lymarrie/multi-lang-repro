import { CardComponent, CardProps } from "@yext/search-ui-react";
import { C_faqs } from "../../types/autogen";
import FAQ from "../FAQ";

export const FAQCard: CardComponent<C_faqs> = ({
  result,
}: CardProps<C_faqs>): JSX.Element => {
  const faq = result.rawData;

  return (
    <div className="flex flex-col px-4 py-4 border rounded-lg items-center mt-4">
      <FAQ question={faq.question} answerV2={faq.answerV2} />
    </div>
  );
};
