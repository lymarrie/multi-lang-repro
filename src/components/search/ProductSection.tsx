import * as React from "react";
import { SectionComponent, SectionProps } from "@yext/search-ui-react";

const ProductSection: SectionComponent = ({
  results,
  CardComponent,
}: SectionProps) => {
  if (!CardComponent) {
    return <div>Missing Card Component</div>;
  }

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {results.map((r, i) => (
          <CardComponent key={i} result={r} />
        ))}
      </div>
    </div>
  );
};

export default ProductSection;
