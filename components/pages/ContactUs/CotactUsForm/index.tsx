import Form, { IFormItems } from "components/shared/Form";
import { useTranslation } from "next-i18next";
import { MouseEvent } from "react";
import { IconMailWithShadow } from "shared/icons/common-icons";

const ContactUsForm = () => {
  const { t: commonT } = useTranslation("common");
  const { t: contactUsT } = useTranslation("contact_us_page", {
    keyPrefix: "form_section",
  });

  const btnText = contactUsT("form_btn_text");
  const textarea: IFormItems = contactUsT("textarea", { returnObjects: true });
  const formInputs: IFormItems[] = contactUsT("form_items", {
    returnObjects: true,
  });
  const formItems: IFormItems[] = [
    ...formInputs,
    { ...textarea, isTextArea: true },
  ];

  const onFormSubmit = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault;
  };

  return (
    <section className="row d-flex justify-content-between pt-40 pt-sm-55 pt-md-57 pb-40 pb-sm-50 pb-md-40 col-12 m-auto contact-us-background">
      <div className="col-md-6 col-12 ps-md-46 d-flex align-items-center align-items-md-start text-center text-md-start justify-content-md-center">
        <div className="mb-28 mb-md-77">
          <h2 className="mb-4 contact-us-heading px-5">
            {contactUsT("heading")}
          </h2>
          <p className="contact-us-subheading position-relative text-md px-5">
            {contactUsT("sub_heading")}
          </p>
        </div>
      </div>
      <div className="m-auto col-11 col-sm-8 col-md-5 mt-17 me-md-20 me-lg-50 z-index-1">
        <Form
          btnText={btnText}
          formItems={formItems}
          onFormSubmit={onFormSubmit}
        />
      </div>
    </section>
  );
};

export default ContactUsForm;
