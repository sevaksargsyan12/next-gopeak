import Image from "next/image";
import whatWeDoImage from "../../../../public/assets/images/png/what-we-do.png";
import { useTranslation } from "next-i18next";
import BenefitInfo from "../../../shared/BenfitInfo";

const WhatWeDoSection = () => {
  const { t } = useTranslation("home_page", { keyPrefix: "link_building" });

  return (
    <section className="d-flex flex-wrap justify-content-around mt-sm-15 mt-8 pt-sm-32 pt-12 pb-sm-36 pb-26 mb-35 mb-sm-40">
      <div className="col-lg-4 col-md-4 col-sm-7 col-10 pt-7">
        <h2 className="h3">{t("heading")}</h2>
        <p className="text-sm mb-4 fw-400 text-color-midnight-90">
          {t("desc_1")}
        </p>
        <p className="text-sm mb-10 fw-400 text-color-midnight-90">
          {t("desc_2")}
        </p>
        <hr className="mb-10 border border-gray-200" />
        <div className="row">
          <BenefitInfo className="col-6 col-sm-4" text={t("benefit_1")} />
          <BenefitInfo className="col-6 col-sm-4" text={t("benefit_2")}/>
          <BenefitInfo className="col-12 col-sm-4" text={t("benefit_3")} />
        </div>
      </div>
      <div>
        <Image alt="What we do" src={whatWeDoImage} />
      </div>
    </section>
  );
};

export default WhatWeDoSection;
