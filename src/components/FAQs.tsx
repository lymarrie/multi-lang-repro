import FAQ, { FAQType } from "./FAQ";

type FAQsProps = {
  title: string;
  faqs: FAQType[];
};

const FAQs = (props: FAQsProps) => {
  const { title, faqs } = props;

  return (
    <div className="bg-gray-100 px-6 py-8 lg:px-16">
      <div className="mx-auto max-w-2xl text-center mb-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-3xl">
          {title}
        </h2>
      </div>
      <div className="divide-y border-t border-b">
        {faqs.map((faq) => (
          <FAQ
            key={faq.question}
            question={faq.question}
            answerV2={faq.answerV2}
          />
        ))}
      </div>
    </div>
  );
};

export default FAQs;
