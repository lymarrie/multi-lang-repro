import {
  Template,
  GetPath,
  TemplateRenderProps,
  GetHeadConfig,
  HeadConfig,
  TemplateProps,
  TemplateConfig,
} from "@yext/pages";
import "../index.css";
import {
  SearchBar,
  UniversalResults,
  onSearchFunc,
} from "@yext/search-ui-react";
import PageLayout from "../components/PageLayout";
import { useSearchActions } from "@yext/search-headless-react";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { FAQCard } from "../components/search/FaqCard";

export const config: TemplateConfig = {
  stream: {
    $id: "Search",
    filter: {
      entityIds: ["search-results"],
    },
    fields: ["id", "uid", "meta", "name", "slug"],
    localization: {
      locales: ["en", "de"],
    },
  },
};

export const getPath: GetPath<TemplateProps> = ({ document }) => {
  return document.slug;
};

export const getHeadConfig: GetHeadConfig<
  TemplateRenderProps
> = (): HeadConfig => {
  return {
    title: `Search Results`,
    charset: "UTF-8",
    viewport: "width=device-width, initial-scale=1",
  };
};

const Search: Template<TemplateRenderProps> = ({ __meta, document }) => {
  return (
    <PageLayout data={{ path: "search" }} templateData={{ __meta, document }}>
      <SearchInner />
    </PageLayout>
  );
};

export const SearchInner: React.FC = () => {
  const { t } = useTranslation();

  const searchActions = useSearchActions();
  // function which will be run when a search is executed
  const handleSearch: onSearchFunc = (searchEventData) => {
    const { query } = searchEventData;
    searchActions.setQuery(query ?? "");
    searchActions.executeUniversalQuery();
    const queryParams = new URLSearchParams(window.location.search);
    if (query) {
      queryParams.set("query", query);
    } else {
      queryParams.delete("query");
    }
    history.pushState(null, "", "?" + queryParams.toString());
  };

  //hook to execute a search if necessary based on the query param in the url
  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const query = searchParams.get("query");
    if (query) {
      searchActions.setQuery(query);
      searchActions.executeUniversalQuery();
    }
  }, []);

  const placeHolderText = t("Search...");

  return (
    <div className="px-4 py-8">
      <div className="mx-auto flex max-w-5xl flex-col">
        <SearchBar placeholder={placeHolderText} onSearch={handleSearch} />
        <UniversalResults
          verticalConfigMap={{
            faqs: { label: "FAQs", CardComponent: FAQCard },
            // products: {
            //   label: "Products",
            //   CardComponent: ProductCard,
            //   SectionComponent: ProductSection,
            // },
          }}
        />
      </div>
    </div>
  );
};

export default Search;
