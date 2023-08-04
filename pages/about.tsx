import Layout from "components/shared/Layout";
import RoutingPath from "components/shared/RoutingPath";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import { useTranslation } from "next-i18next";
import WhoWeAre from "components/pages/About/WhoWeAre";
import NumbersSection from "components/pages/About/NumbersSection";
import OurMissionAndVision from "components/pages/About/OurMissionAndVision";
import WhatMakesUsBetter from "components/pages/About/WhatMakesUsBetter";
import CoFounderStory from "components/pages/About/CoFounderStory";
import MeetOurTeam from "components/pages/About/MeetOurTeam";
import PageBottomGetStarted from "components/shared/PageBottomGetStarted";
import TextWithImageSection from "components/shared/TextWithImageSection/TextWithImageSection";
import WhoWeAreImage from "../public/assets/images/png/who_we_are_intro.png";

interface AboutUsProps {}

const AboutUs = () => {
  const { t: commonT } = useTranslation("common");
  const { t: aboutUsT } = useTranslation("about_page");

  const title = aboutUsT("title");
  const whoWeAreHeading = aboutUsT("who_we_are.heading");
  const paragraphs: string[] = aboutUsT("who_we_are.paragraphs", {
    returnObjects: true,
  });

  return (
    <Layout t={commonT}>
      <Head>
        <title>{title}</title>
        <meta title={title} />
        <link rel="canonical" href="https://gopeak.io/about" />
      </Head>
      <RoutingPath paths={["Home", "About Us"]} />
      <TextWithImageSection
        imageAlt="Who we are"
        image={WhoWeAreImage}
        paragraphs={paragraphs}
        heading={whoWeAreHeading}
      />
      <NumbersSection />
      <OurMissionAndVision />
      <WhatMakesUsBetter />
      <CoFounderStory />
      <MeetOurTeam />
      <PageBottomGetStarted
        btnText={commonT("btn.get_started")}
        sectionClassName="mt-65"
        heading={aboutUsT("bottom_part.heading")}
      />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps<AboutUsProps> = async ({
  locale,
}) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? "en", [
        "common",
        "about_page",
      ])),
      // Will be passed to the page component as props
    },
  };
};

export default AboutUs;
