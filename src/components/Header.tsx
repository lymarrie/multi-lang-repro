import { SearchBar, onSearchFunc } from "@yext/search-ui-react";
import { useTranslation } from "react-i18next";

export interface HeaderProps {
  data?: {
    locale?: string;
    path?: string;
  };
}

const Header = ({ data }: HeaderProps) => {
  // const { t } = useTranslation();
  // const placeHolderText = t("Search...");
  // const handleSearch: onSearchFunc = (searchEventData) => {
  //   const { query } = searchEventData;
  //   // Construct the new URL
  //   const newUrl =
  //     data?.locale === "en"
  //       ? `/search?query=${encodeURIComponent(query || "")}`
  //       : `/${data?.locale}/search?query=${encodeURIComponent(query || "")}`;
  //   window.location.href = newUrl;
  // };

  return (
    <header className="" style={{ background: `var(--backgroundColor)` }}>
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex items-center gap-x-12">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img
              className="h-12 sm:h-24 w-auto rounded-md"
              src="https://static.vecteezy.com/system/resources/thumbnails/002/412/377/small/coffee-cup-logo-coffee-shop-icon-design-free-vector.jpg"
              alt=""
            />
          </a>
        </div>
        {/* {data?.path !== "search" && (
          <SearchBar
            onSearch={handleSearch}
            customCssClasses={{
              searchBarContainer: "mb-0 w-3/4 md:w-1/3",
            }}
            placeholder={placeHolderText}
          />
        )} */}
      </nav>
    </header>
  );
};

export default Header;
