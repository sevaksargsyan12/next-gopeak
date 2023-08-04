import { useTranslation } from "next-i18next";
import {
  IStrategyCardText,
  IStrategyCardToShow,
  StrategyCardIcons,
} from "./interfaces";

const ExploreOurStrategy = () => {
  const { t } = useTranslation("pricing_page", {
    keyPrefix: "explore_our_strategy",
  });

  const strategyCardsTexts: IStrategyCardText[] = t("strategy_cards", {
    returnObjects: true,
  });

  const strategyCardsToShow: IStrategyCardToShow[] = strategyCardsTexts.map(
    (el, i) => {
      const { content, heading } = el;
      const icon = StrategyCardIcons[i];
      return {
        heading,
        content,
        icon,
      };
    }
  );

  return (
    <section className="col-11 pt-sm-32 pt-20 px-sm-43 px-4 pb-sm-50 pb-20 m-auto rounded-4 mb-sm-18 mb-8">
      <div className="d-flex flex-column align-items-center text-center pb-sm-22  pb-8">
        <h3 className="explore-our-strategy-heading col-11 mb-4">{t("heading")}</h3>
        <p className="col-md-8 col-11 text-sm fw-400 ">{t("sub_heading")}</p>
      </div>
      <div className="row justify-content-around ">
        {strategyCardsToShow.map((el, i) => {
          const Icon = el.icon;
          return (
            <div
              key={i}
              className="d-flex flex-column align-items-sm-start col-sm-4 col-7 d-flex align-items-center"
            >
              <Icon className="mb-8" />
              <h6 className="fw-600">{el.heading}</h6>
              <p className="text-xs text-sm-start text-center mb-15 pe-4">
                {el.content}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ExploreOurStrategy;
