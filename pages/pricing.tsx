import { GetStaticProps } from "next";
import Head from "next/head";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Layout from "../components/shared/Layout";
import RoutingPath from "../components/shared/RoutingPath";
import Prices from "../components/pages/PricingPlans/Prices";
import ExploreOurStrategy from "../components/pages/PricingPlans/ExploreOurStrategy";
import FAQ from "../components/shared/FAQ";
import { IDialogFAQ } from "../components/shared/FAQ/interfaces";
import ReadyToIncreaseRevenue from "../components/pages/PricingPlans/ReadyToIncreaseRevenue";

interface PlansAndPricingProps {}

const PlansAndPricing = () => {
  const { t } = useTranslation("pricing_page");
  const { t: FAQt } = useTranslation("pricing_page", { keyPrefix: "FAQ" });
  const { t: commonT } = useTranslation("common");

  const linkBuildingPricingFAQ = FAQt("link_building_pricing_items", {
    returnObjects: true,
  }) as IDialogFAQ[];
  const paymentsFAQ = FAQt("payments_items", {
    returnObjects: true,
  }) as IDialogFAQ[];

  return (
    <Layout t={commonT}>
      <Head>
        <title>{t("title")}</title>
        <meta title="GoPeak" />
        <link rel="canonical" href="https://gopeak.io/pricing" />
      </Head>
      <RoutingPath paths={["Home", "Plans & Pricing"]} />
      <Prices />
      <ExploreOurStrategy />
      {/* // TODO: Chart logic */}
      <FAQ
        t={FAQt}
        allFAQs={[
          {
            faqs: linkBuildingPricingFAQ,
            faqSelector: FAQt("link_building_pricing_category"),
          },
          {
            faqs: paymentsFAQ,
            faqSelector: FAQt("payments_category"),
          },
        ]}
      />
      <ReadyToIncreaseRevenue />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps<PlansAndPricingProps> = async ({
  locale,
}) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? "en", [
        "common",
        "pricing_page",
      ])),
      // Will be passed to the page component as props
    },
  };
};

export default PlansAndPricing;
