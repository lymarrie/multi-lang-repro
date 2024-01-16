import { ReactNode } from "react";
import { Link, Address, Hours } from "@yext/pages-components";
import { FaPhone, FaEnvelope } from "react-icons/fa";

import { Address as AddressType, Hours as HoursType } from "../types/autogen";
import { useTranslation } from "react-i18next";

interface CoreProps {
  address: AddressType;
  mainPhone?: string;
  tollFreePhone?: string;
  emails?: string[];
  hours?: HoursType;
  additionalHoursText?: string;
  services?: string[];
}

const BusinessSummarySection = (props: { children: ReactNode }) => {
  return (
    <div className="w-full flex justify-center sm:w-1/2 mb-8">
      <div>{props.children}</div>
    </div>
  );
};

const BusinessSummaryHeading = (props: { children: ReactNode }) => {
  return (
    <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-4">
      {props.children}
    </h2>
  );
};

const BusinessSummary = ({
  address,
  mainPhone,
  tollFreePhone,
  emails,
  hours,
  additionalHoursText,
}: CoreProps) => {
  const { t } = useTranslation();

  return (
    <div className="py-8">
      <div className="flex flex-row flex-wrap">
        <BusinessSummarySection>
          <BusinessSummaryHeading>{t("Information")}</BusinessSummaryHeading>
          <Address address={address} />
          {mainPhone && (
            <div className="flex items-center mt-4">
              <FaPhone className="text-blue-500 mr-2" />
              <span className="mr-2 font-bold">{t("Information")}</span>
              <span>{mainPhone}</span>
            </div>
          )}
          {tollFreePhone && (
            <div className="flex items-center mt-4">
              <FaPhone className="text-blue-500 mr-2" />
              <span className="mr-2 font-bold">{t("Toll Free")}</span>
              <span>{tollFreePhone}</span>
            </div>
          )}
          {emails && (
            <div className="flex items-center mt-4">
              <FaEnvelope className="text-blue-500 mr-2" />
              <Link
                className="Link--primary Link--underline font-bold"
                cta={{ link: emails[0], linkType: "Email" }}
              />
            </div>
          )}
        </BusinessSummarySection>
        {(hours || additionalHoursText) && (
          <BusinessSummarySection>
            <BusinessSummaryHeading>{t("Hours")}</BusinessSummaryHeading>
            <Hours
              dayOfWeekNames={{
                monday: t("Monday"),
                tuesday: t("Tuesday"),
                wednesday: t("Wednesday"),
                thursday: t("Thursday"),
                friday: t("Friday"),
                saturday: t("Saturday"),
                sunday: t("Sunday"),
              }}
              hours={hours}
            />
            {additionalHoursText && (
              <div className="mt-4">{additionalHoursText}</div>
            )}
          </BusinessSummarySection>
        )}
      </div>
    </div>
  );
};

export default BusinessSummary;
