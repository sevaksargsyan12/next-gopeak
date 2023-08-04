import Layout from "components/shared/Layout";
import Head from "next/head";
import { useTranslation } from "next-i18next";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import RoutingPath from "components/shared/RoutingPath";
import OrderNowForm from "components/pages/Order/OrderNowForm";

interface OrderNowProps {}

const OrderNow = () => {
  const { t: commonT } = useTranslation("common");
  const { t: orderT } = useTranslation("order");

  const title = orderT("title");

  return (
    <Layout t={commonT}>
      <Head>
        <title>{title}</title>
        <meta title={title} />
        <link rel="canonical" href="https://gopeak.io/order" />
      </Head>
      <RoutingPath paths={["Home", "Order now"]} />
      <OrderNowForm t={orderT} />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps<OrderNowProps> = async ({
  locale,
}) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? "en", ["common", "order"])),
      // Will be passed to the page component as props
    },
  };
};

export default OrderNow;
