import { useState, useRef } from "react";
import { GoChevronDown } from "react-icons/go";
import { LexicalRichText } from "@yext/pages-components";
import { clsx } from "clsx";
import "classnames";

// Older versions of the FAQ entity type had the answer field which was a string
export interface FAQType {
  question: string;
  answerV2: {
    json: Record<string, unknown>;
  };
}

const FAQ = ({ question, answerV2 }: FAQType) => {
  const [isOpen, setIsOpen] = useState(false);
  const faqRef = useRef<HTMLDivElement>(null);

  const faqToggle = () => {
    if (faqRef.current != null) {
      if (!isOpen) {
        const ansHeight = faqRef.current.scrollHeight;
        faqRef.current.style.height = `${ansHeight}px`;
      } else {
        faqRef.current.style.height = `0`;
      }
    }
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button
        className="justify-between w-full flex py-4 cursor-pointer font-bold text-lg"
        onClick={faqToggle}
      >
        <div>{question}</div>
        <div>
          <GoChevronDown
            className={clsx("transition-transform duration-500 ", {
              "rotate-180": isOpen,
            })}
            size="1.5em"
          />
        </div>
      </button>
      <div
        ref={faqRef}
        className={clsx("overflow-hidden duration-500 h-0 transition-all", {
          invisible: !isOpen,
        })}
      >
        <div className="mb-4">
          <LexicalRichText serializedAST={JSON.stringify(answerV2.json)} />
        </div>
      </div>
    </div>
  );
};

export default FAQ;
