import Image from "next/image";
import { useTranslation } from "next-i18next";
import BackLinkAuditImage from "../../../../public/assets/images/png/backlink_audit.png";
import BetterOutreachImage from "../../../../public/assets/images/png/better_outreach.png";
import GreatResultsImage from "../../../../public/assets/images/png/great_results.png";
import KeywordResearchImage from "../../../../public/assets/images/png/keyword_research..png";
import Link from "next/link";

const StrategyAndWorkflowSection = () => {
  const { t: homePageT } = useTranslation("home_page", {
    keyPrefix: "strategy_and_workflow",
  });
  const { t: commonT } = useTranslation("common", { keyPrefix: "btn" });

  return (
    <section className="strategy-and-workflow-section col-11 col-sm-9 m-auto pb-13 pb-sm-25">
      <div className="text-center">
        <h3 className="mb-4 text-center m-auto">{homePageT("heading")}</h3>
        <p className="text-sm">{homePageT("heading_sub_text")}</p>
      </div>
      <div className="row">
        <div className="strategy-cards-wrapper d-flex flex-column align-items-center justify-content-center">
          <div className="strategy-card mxw-max-content mb-25 me-sm-25 position-relative">
            <Image alt="Back link audit image" src={BackLinkAuditImage} />{" "}
            <div className="px-15 pt-5 pt-sm-15 position-absolute">
              <h6 className="mb-4 fw-600">{homePageT("card_heading_1")}</h6>
              <p className="text-sm">{homePageT("card_text_1")}</p>
            </div>
          </div>
          <div className="strategy-card mxw-max-content mb-25 position-relative">
            <Image alt="Keyword research image" src={KeywordResearchImage} />{" "}
            <div className="px-15 pt-5 pt-sm-15 position-absolute">
              <h6 className="mb-4 fw-600">{homePageT("card_heading_2")}</h6>
              <p className="text-sm">{homePageT("card_text_2")}</p>
            </div>
          </div>
        </div>
        <div className="strategy-cards-wrapper d-flex flex-column align-items-center justify-content-center">
          <div className="strategy-card mxw-max-content mb-30 me-sm-25 position-relative">
            <Image alt="Better outreach image" src={BetterOutreachImage} />{" "}
            <div className="px-15 pt-5 pt-sm-15 position-absolute">
              <h6 className="mb-4 fw-600">{homePageT("card_heading_3")}</h6>
              <p className="text-sm">{homePageT("card_text_3")}</p>
            </div>
          </div>
          <div className="strategy-card mxw-max-content mb-30 position-relative">
            <Image alt="Great results image" src={GreatResultsImage} />{" "}
            <div className="px-15 pt-5 pt-sm-15 position-absolute">
              <h6 className="mb-4 fw-600">{homePageT("card_heading_4")}</h6>
              <p className="text-sm">{homePageT("card_text_4")}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <Link href="/order" className="btn btn-primary btn-lg">
          {commonT("get_started")}
        </Link>
      </div>
    </section>
  );
};

export default StrategyAndWorkflowSection;
