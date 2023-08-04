import { useTranslation } from "next-i18next";
import OurMissionAndVisionCard from "./OurMissionAndVisionCard";

const OurMissionAndVision = () => {
  const { t } = useTranslation("about_page", {
    keyPrefix: "our_mission_and_vision",
  });
  
  return (
    <section className="m-auto row col-lg-8 align-items-center justify-content-center flex-md-row flex-column container mb-25 mb-sm-30 mb-md-68">
      <OurMissionAndVisionCard
        title="Our Mission"
        text=" We aim to help all companies and startups grow with professional link-building services. We provide the opportunity to increase online visibility and allow all the companies to become famous in the market. We have great strategies to grow your website visibility from A to Z if you have a great idea."
      />
      <OurMissionAndVisionCard
        isActive
        title="Our Vision"
        text="We have the vision to develop a white hat link-building culture in the market and provide our clients with indicators of how they should choose their link-building strategies. We believe in successful partnerships and strive to create a big community where different companies can cooperate and gain visibility. We make a community where all companies are competitive and well-known."
      />
    </section>
  );
};

export default OurMissionAndVision;
