import Link from "next/link";
import BenefitInfo, { BenefitInfoProps } from "../BenfitInfo";

interface PricingPlanCardProps {
  isLast?: boolean;
  planName: string;
  planPrice: string;
  monthlyOrYearly: string;
  isRecommended?: boolean;
  benefits: BenefitInfoProps[];
  planQuery: string;
}

const PricingPlanCard = ({
  isLast,
  benefits,
  planName,
  planQuery,
  planPrice,
  isRecommended,
  monthlyOrYearly,
}: PricingPlanCardProps) => {
  return (
    <div
      className={`pricing-card pt-14 px-12 pb-27 mx-6 bg-white rounded-20-px d-flex flex-column justify-content-between ${
        isRecommended ? "recommended" : ""
      } ${isLast ? "" : "me-6"}`}
    >
      <div>
        <p className="text-md fw-600 mb-12">{planName}</p>
        <p className="h4 fw-600 mb-1 fw-700">
          <span className="text-md me-1">$</span>
          {planPrice}
        </p>
        <p className="text-sm mb-13">{monthlyOrYearly}</p>
        <div>
          {benefits.map((el, i) => {
            return (
              <BenefitInfo
                key={i}
                className={el.className}
                text={el.text}
                textClassName="text-xs"
              />
            );
          })}
        </div>
      </div>
      <div className="d-flex align-items-center justify-content-center">
        <Link
          href={`/order?plan=${planQuery}`}
          className={`btn btn-lg ${
            isRecommended ? "btn-primary" : "btn-secondary"
          }`}
        >
          Order Now
        </Link>
      </div>
    </div>
  );
};

export default PricingPlanCard;
