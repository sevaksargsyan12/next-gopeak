import { MouseEvent } from "react";
import FormItem from "./FormItem";

export interface IFormItems {
  labelText: string;
  htmlFor: string;
  placeholder: string;
  isTextArea?: boolean;
}

interface FormProps {
  btnText: string;
  formItems: IFormItems[];
  onFormSubmit: (e: MouseEvent<HTMLElement>) => void;
}

const Form = ({ formItems, btnText, onFormSubmit }: FormProps) => {
  return (
    <form className="pt-10 px-20 pb-20 bg-white rounded-20-px shadow-form">
      {formItems.map((item, i) => {
        return (
          <FormItem
            className="mt-10"
            name={item.htmlFor}
            key={item.htmlFor + i}
            labelText={item.labelText}
            isTextArea={item.isTextArea}
            placeholder={item.placeholder}
          />
        );
      })}
      <button
        className="d-flex align-items-center btn btn-primary mt-20 h-44-px"
        onClick={onFormSubmit}
      >
        <span className="text-sm">{btnText}</span>
      </button>
    </form>
  );
};

export default Form;
