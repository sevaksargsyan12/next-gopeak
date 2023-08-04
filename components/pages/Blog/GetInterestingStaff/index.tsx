import Image from "next/image";
import { useState } from "react";
import { useTranslation } from "next-i18next";
import useResizer from "hooks/useResizer";

import ImageSubscribeMisc from "../../../../public/assets/images/png/misc_big.png";
import ImageSubscribe from "../../../../public/assets/images/png/subscribe.png";
import ImageSubscribeStaff from "../../../../public/assets/images/png/subscribe_staff.png";
import SubscribeForm from "./SubscribeForm";

const GetInterestingStaff = () => {
  const [showChart, setShowChart] = useState(false);
  const {t} = useTranslation("blog_page", {
    keyPrefix: "get_interesting_staff_section",
  });
  const title = t("title");
  const btnText = t("button");
  const placeholderText = t("placeholder");

  const handleShowChartImage = () => {
    if (window.innerWidth <= 768) {
      setShowChart(false);
    } else {
      setShowChart(true);
    }
  };
  
  useResizer(handleShowChartImage);
  
  return (
    <>
      <section className="get-interesting-staff-section d-flex">
        <div className="block-image subscribe">
          <Image
            className="icon"
            alt="Get Interesting Staff Right to Your Inbox!"
            src={ImageSubscribeMisc}
          />
          <Image
            className="main"
            alt="Get Interesting Staff Right to Your Inbox!"
            src={ImageSubscribe}
          />
        </div>
        <div className="block-content d-flex align-items-center p-8">
          <div className='block-content-container'>
            <h4 className="mb-sm-25 mb-20">{title}</h4>
            <SubscribeForm name="subscribe_email" placeholder={placeholderText} button={btnText}/>
          </div>
        </div>
        <div className="block-image subscribe-staff">
          <Image
            className="main"
            alt="Get Interesting Staff Right to Your Inbox!"
            src={ImageSubscribeStaff}
          />
          <Image
            className="icon"
            alt="Get Interesting Staff Right to Your Inbox!"
            src={ImageSubscribeMisc}
          />
        </div>
      </section>
    </>
  );
};

export default GetInterestingStaff;
