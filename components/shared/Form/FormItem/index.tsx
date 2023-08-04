interface FormItemProps {
  name: string;
  labelText: string;
  className?: string;
  placeholder: string;
  isTextArea?: boolean;
  hidePointer?: boolean;
}

const FormItem = ({
  name,
  className,
  labelText,
  isTextArea,
  placeholder,
  hidePointer,
}: FormItemProps) => {
  return (
    <div className={`d-flex flex-column ${className}`}>
      <label htmlFor={name} className="text-xxs pb-3">
        {labelText} <span className="text-color-red">{hidePointer ? "" : " *"}</span>
      </label>
      {isTextArea ? (
        <textarea
          required
          name={name}
          placeholder={placeholder}
          className="form-item input-textarea text-xs rounded-6-px p-7 no-resize"
        ></textarea>
      ) : (
        <input
          required
          type="text"
          name={name}
          placeholder={placeholder}
          className="form-item text-xs rounded-6-px p-7"
        />
      )}
    </div>
  );
};

export default FormItem;
