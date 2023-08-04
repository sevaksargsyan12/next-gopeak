import { useState } from "react";
import { useTranslation } from "next-i18next";
import PricingPlanCard from "../../../shared/PricingPlanCards/PricingPlanCard";
import { BenefitInfoProps } from "../../../shared/BenfitInfo";
import CustomPricingPlanCard from "../../../shared/PricingPlanCards/CustomPricingPlanCard";
import { IconSliderArrow } from "../../../../shared/icons/common-icons";
import useResizer from "hooks/useResizer";
import Carousel from "components/shared/Carousel";

interface IPlanCard {
  name: string;
  price: string;
  monthly_or_yearly: string;
  benefits: string[];
  isCustom?: boolean;
  query: string;
}

const Prices = () => {
  const [showOne, setShowOne] = useState(false);
  const [showTwo, setShowTwo] = useState(false);
  const [showFrom, setShowFrom] = useState(0);
  const { t } = useTranslation("pricing_page", {
    keyPrefix: "plans_and_pricing",
  });

  const handleWindowResize = () => {
    if (window.innerWidth <= 768) {
      setShowOne(true);
      setShowTwo(false);
    } else if (window.innerWidth >= 768 && window.innerWidth <= 1024) {
      setShowOne(false);
      setShowTwo(true);
    } else {
      setShowOne(false);
      setShowTwo(false);
    }
  };

  useResizer(handleWindowResize);

  const planCards: IPlanCard[] = [
    ...(t("plans", { returnObjects: true }) as IPlanCard[]),
    {
      isCustom: true,
      name: "",
      price: "",
      benefits: [],
      monthly_or_yearly: "",
      query: "",
    },
  ];

  const forShowTwo = planCards.slice(showFrom, 2 + showFrom);

  const planCardsToShow = showOne
    ? planCards.slice(showFrom, 1 + showFrom)
    : showTwo
    ? forShowTwo.length > 1
      ? forShowTwo
      : [...forShowTwo, ...planCards.slice(0, 1)]
    : planCards;

  const changeVisibleCards = (changeBy: number) => {
    setShowFrom((prevNum) => {
      const newValue = prevNum + changeBy;
      if (newValue === planCards.length) return 0;
      if (newValue < 0) return planCards.length - 1;
      return newValue;
    });
  };

  const content = planCardsToShow.map((plan, i) => {
    const isRecommended = plan.name === "Enterprise";
    const isLast = i === planCardsToShow.length - 1;
    const benefits: BenefitInfoProps[] = plan.benefits.map((el) => ({
      text: el,
    }));

    return !plan.isCustom ? (
      <PricingPlanCard
        key={i}
        isLast={isLast}
        benefits={benefits}
        planName={plan.name}
        planPrice={plan.price}
        isRecommended={isRecommended}
        monthlyOrYearly={plan.monthly_or_yearly}
        planQuery={plan.query}
      />
    ) : (
      <CustomPricingPlanCard key={i} />
    );
  });

  return (
    <section className="pt-35 pt-sm-50 pt-md-45 pb-30 pb-sm-40 pb-md-45 col-12 m-auto pricing-background">
      <div className="text-center mb-26 mb-sm-42">
        <h3 className="mb-4">{t("heading")}</h3>
        <p className="text-md">{t("sub_heading")}</p>
      </div>
      <Carousel
        content={content}
        wrapperClassName="col-11"
        contentClassName="col-md-12"
        showArrows={showOne || showTwo}
        changeVisibleCards={changeVisibleCards}
      />
    </section>
  );
};

export default Prices;
