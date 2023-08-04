import Layout from "components/shared/Layout";
import Head from "next/head";
import { useTranslation } from "next-i18next";
import PrivacyOrTerms from "components/shared/PrivacyOrTerms";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Container from "components/shared/Container";
import RoutingPath from "components/shared/RoutingPath";

interface IPrivacyPolicyProps {}

const PrivacyPolicy = () => {
  const { t: commonT } = useTranslation("common");
  const { t: privacyPolicyT } = useTranslation("privacy-policy");

  return (
    <Layout t={commonT}>
      <Head>
        <title>{privacyPolicyT('title')}</title>
        <meta title="Privacy Policy" />
        <link rel="canonical" href="https://gopeak.io/privacy-policy" />
      </Head>
      <Container className="d-flex flex-column flex-md-row pt-35 pt-sm-50 pt-md-45 ps-5 ps-sm-15 ps-md-45 pb-35 pb-sm-49 pb-md-45 pe-15 pe-sm-15 pe-md-89 position-relative">
        <PrivacyOrTerms
          title={privacyPolicyT('title')}
          main_content={privacyPolicyT('main_content', { returnObjects: true })}
          sidebar={privacyPolicyT('sidebar', { returnObjects: true })}
          ordered={false}
        />
      </Container>
      <RoutingPath paths={["Home", "Privacy Policy"]} />
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
        "privacy-policy",
      ])),
      // Will be passed to the page component as props
    },
  };
};


export default PrivacyPolicy;
