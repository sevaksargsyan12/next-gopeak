import Layout from "components/shared/Layout";
import Head from "next/head";
import { useTranslation } from "next-i18next";
import PrivacyOrTerms from "components/shared/PrivacyOrTerms";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Container from "components/shared/Container";
import RoutingPath from "components/shared/RoutingPath";

interface IPrivacyPolicyProps {}

const TermsAndConditions = () => {
  const { t: commonT } = useTranslation("common");
  const { t: termsAndConditionsT } = useTranslation("terms-and-conditions");

  return (
    <Layout t={commonT}>
      <Head>
        <title>{termsAndConditionsT('title')}</title>
        <meta title="Terms & Conditions" />
        <link rel="canonical" href="https://gopeak.io/terms-conditions" />
      </Head>
      <Container className="d-flex flex-column flex-md-row pt-35 pt-sm-50 pt-md-45 ps-5 ps-sm-15 ps-md-45 pb-35 pb-sm-49 pb-md-45 pe-15 pe-sm-15 pe-md-89 position-relative">
        <RoutingPath paths={["Home", "Terms & Conditions"]} />
        <PrivacyOrTerms
          title={termsAndConditionsT('title')}
          main_content={termsAndConditionsT('main_content', { returnObjects: true })}
          sidebar={termsAndConditionsT('sidebar', { returnObjects: true })}
          ordered={true}
        />
      </Container>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps<IPrivacyPolicyProps> = async ({
  locale,
}) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? "en", [
        "common",
        "terms-and-conditions",
      ])),
      // Will be passed to the page component as props
    },
  };
};


export default TermsAndConditions;
