import Layout from "components/shared/Layout";
import Head from "next/head";
import { useTranslation } from "next-i18next";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import RoutingPath from "components/shared/RoutingPath";
import ContactUsForm from "components/pages/ContactUs/CotactUsForm";
import ReadyToTalkBusiness from "components/pages/ContactUs/ReadyToTalkBusiness";

interface ContactUsProps {}

const ContactUs = () => {
  const { t: commonT } = useTranslation("common");
  const { t: ContactUsT } = useTranslation("contact_us_page");

  const title = ContactUsT("title");
  return (
    <Layout t={commonT}>
      <Head>
        <title>{title}</title>
        <meta title={title} />
        <link rel="canonical" href="https://gopeak.io/contact" />
      </Head>
      <RoutingPath paths={["Home", "Contact Us"]} />
      <ContactUsForm />
      <ReadyToTalkBusiness />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps<ContactUsProps> = async ({
  locale,
}) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? "en", [
        "common",
        "contact_us_page",
      ])),
      // Will be passed to the page component as props
    },
  };
};

export default ContactUs;
