import { useMemo, useState } from "react";
import { TFunction } from "next-i18next";
import Accordion from "../Accordion/Accordion";
import { FAQItemData, IAllFaqCategories } from "./interfaces";

interface FAQProps {
  t: TFunction;
  allFAQs: IAllFaqCategories[];
}

const FAQ = ({ allFAQs, t }: FAQProps) => {
  const [activeItem, setActiveItem] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  const FAQQuestions: FAQItemData[] = useMemo(
    () =>
      allFAQs[activeIndex].faqs.map((values, i) => {
        return {
          title: values.question,
          content: values.answer,
          value: i,
        };
      }),
    [activeIndex, allFAQs]
  );

  const onToggleClick = (state: number) => {
    if (activeItem === state) {
      setActiveItem(Infinity);
      return;
    }

    setActiveItem(state);
  };

  const onCategoryChange = (i: number) => {
    setActiveItem(0);
    setActiveIndex(i);
  };

  return (
    <section className="col-11 m-auto mt-40 mb-35">
      <div className="text-center">
        <h3 className="faq-header mb-4 text-center m-auto">{t("heading")}</h3>
        <div className="d-flex flex-row align-items-center justify-content-center">
          {allFAQs.map((el, i) => {
            return (
              <p
                key={i}
                className={`faq-selector cursor-pointer rounded-1 text-sm me-10 ${
                  activeIndex === i ? "active" : "inactive"
                }`}
                onClick={() => onCategoryChange(i)}
              >
                {el.faqSelector}
              </p>
            );
          })}
        </div>
      </div>
      <div className="mt-10 col-12 col-sm-9 m-auto">
        <Accordion
          items={FAQQuestions}
          onToggleClick={onToggleClick}
          activeItem={activeItem}
        />
      </div>
    </section>
  );
};

export default FAQ;
