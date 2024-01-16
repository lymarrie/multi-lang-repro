import {
  GetHeadConfig,
  GetPath,
  HeadConfig,
  Template,
  TemplateConfig,
  TemplateProps,
  TemplateRenderProps,
} from "@yext/pages";
import "../index.css";
import Favicon from "../assets/images/yext-favicon.ico";
import About from "../components/About";
import Banner from "../components/Banner";
import PageLayout from "../components/PageLayout";
import Schema from "../components/Schema";
import FAQs from "../components/FAQs";
import FeaturedProducts from "../components/FeaturedProducts";
import ImageCarousel from "../components/ImageCarousel";
import Location from "../types/autogen";
import BusinessSummary from "../components/BusinessSummary";
import { useTranslation } from "react-i18next";
import { SearchBar, StandardCard, VerticalResults, onSearchFunc } from "@yext/search-ui-react";
import { Environment, HeadlessConfig, SearchHeadlessProvider, provideHeadless, useSearchActions } from "@yext/search-headless-react";
import { FAQCard } from "../components/search/FaqCard";
import { useEffect } from "react";

export const config: TemplateConfig = {
  stream: {
    $id: "All-Faqs",
    filter: {
      entityIds: ["4963013347422738332"],
    },
    fields: [
      "id",
      "uid",
      "meta",
      "name",
      "slug",
      "c_questions.question",
      "c_questions.answerV2",
    ],
    localization: {
      locales: ["de", "en"],
    },
  },
};

export const getPath: GetPath<TemplateProps> = ({document}) => {
  return document.slug;
};

export const getHeadConfig: GetHeadConfig<TemplateRenderProps> = ({
  document,
  relativePrefixToRoot,
}): HeadConfig => {
  return {
    title: document.name,
    charset: "UTF-8",
    viewport: "width=device-width, initial-scale=1",
    tags: [
      {
        type: "meta",
        attributes: {
          name: "description",
          content: document.description,
        },
      },
      {
        type: "meta", // Meta Tag (og:image)
        attributes: {
          property: "og:image",
          content: document.photoGallery
            ? document.photoGallery[0].image.url
            : null,
        },
      },
      {
        type: "link",
        attributes: {
          rel: "icon",
          type: "image/x-icon",
          href: relativePrefixToRoot + Favicon,
        },
      },
    ],
  };
};


const Location: Template<TemplateRenderProps<any>> = ({
  __meta,
  document,
}) => {
  const {
    name,
    address,
    hours,
    mainPhone,
    description,
    photoGallery,
    c_questions,
    meta,
  } = document;

  const data = { locale: document.meta.locale };
  const { t } = useTranslation();

  const searchConfig: HeadlessConfig = {
    experienceKey: "markee",
    apiKey: "c2f9adf10ab95baacaadd9c2ba2b8a44",
    locale: data.locale,
    verticalKey: "faqs",
    environment: Environment.SANDBOX
  }

  const searcher = provideHeadless(searchConfig);

  /* const searchActions = useSearchActions();

  useEffect(() => {
    searchActions.setVertical("faqs")
  }) */

  return (
    <>
      <Schema data={document} />
      <PageLayout   data={data} templateData={{ __meta, document }}>
        <SearchHeadlessProvider searcher={searcher}>
          <SearchBar />
          <VerticalResults CardComponent={FAQCard} displayAllOnNoResults={false} />
        </SearchHeadlessProvider>
        <FAQs title={t("FAQs")} faqs={c_questions} />
      </PageLayout>
    </>
  );
};

export default Location;
