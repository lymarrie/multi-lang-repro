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

export const config: TemplateConfig = {
  stream: {
    $id: "Location",
    filter: {
      entityIds: ["1416214768584282693"],
    },
    fields: [
      "id",
      "uid",
      "meta",
      "name",
      "address",
      "c_tagline",
      "mainPhone",
      "description",
      "hours",
      "slug",
      "logo",
      "services",
      "photoGallery",
      "paymentOptions",
      "emails",
      "yextDisplayCoordinate",
      "c_backgroundColor",
      "c_faqs.question",
      "c_faqs.answerV2",
      "c_featuredProducts.name",
      "c_featuredProducts.primaryPhoto",
      "c_featuredProducts.richTextDescriptionV2",
    ],
    localization: {
      locales: ["de"],
    },
  },
};

export const getPath: GetPath<TemplateProps> = ({ document }) => {
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

const Location: Template<TemplateRenderProps<Location>> = ({
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
    c_featuredProducts,
    c_faqs,
    c_tagline,
    meta,
  } = document;

  const data = { locale: document.meta.locale };
  const { t } = useTranslation();

  return (
    <>
      <Schema data={document} />
      <PageLayout data={data} templateData={{ __meta, document }}>
        <Banner name={name} tagline={c_tagline} photoGallery={photoGallery} />
        <About description={description} />
        <BusinessSummary
          address={address}
          mainPhone={mainPhone}
          hours={hours}
        />
        {/* <ImageCarousel title={t("Gallery")} photoGallery={photoGallery} /> */}
        {/* <FeaturedProducts products={c_featuredProducts} title={t("Products")} /> */}
        {/* <FAQs title={t("FAQs")} faqs={c_faqs} /> */}
      </PageLayout>
    </>
  );
};

export default Location;
