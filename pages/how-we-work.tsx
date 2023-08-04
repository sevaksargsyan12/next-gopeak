import Layout from "components/shared/Layout";
import Head from "next/head";
import { useTranslation } from "next-i18next";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import RoutingPath from "components/shared/RoutingPath";
import TextWithImageSection from "components/shared/TextWithImageSection/TextWithImageSection";
import HowWeWorkIntroImage from "../public/assets/images/png/how_we_work_intro.png";
import OurStrategy from "components/pages/HowItWorks/OurStrategy";
import WeWorkWith from "components/pages/HowItWorks/WeWorkWith";
import PageBottomGetStarted from "components/shared/PageBottomGetStarted";

interface HowWeWorkProps {}

const HowWeWork = () => {
  const { t: commonT } = useTranslation("common");
  const { t: howWeWorkT } = useTranslation("how_we_work_page");

  const title = howWeWorkT("title");
  const introHeading = howWeWorkT("intro.heading");
  const paragraphs: string[] = howWeWorkT("intro.paragraphs", {
    returnObjects: true,
  });

  return (
    <Layout t={commonT}>
      <Head>
        <title>{title}</title>
        <meta title={title} />
        <link rel="canonical" href="https://gopeak.io/how-we-work" />
      </Head>
      <RoutingPath paths={["Home", "How it Works"]} />
      <TextWithImageSection
        heading={introHeading}
        paragraphs={paragraphs}
        showImageInMobile={true}
        image={HowWeWorkIntroImage}
        imageAlt="Work process image"
      />
      <OurStrategy />
      <WeWorkWith />
      <PageBottomGetStarted
        btnText={commonT("btn.get_started")}
        sectionClassName="mt-65"
        heading={howWeWorkT("bottom_part.heading")}
        subHeading={howWeWorkT("bottom_part.sub_heading") ?? ""}
        hasArrow={false}
      />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps<HowWeWorkProps> = async ({
  locale,
}) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? "en", [
        "common",
        "how_we_work_page",
      ])),
      // Will be passed to the page component as props
    },
  };
};

export default HowWeWork;
