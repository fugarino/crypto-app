interface ILightInputFieldProps {
  labelText: string;
  type: string;
  id: string;
  currentRef: any;
  placeholder?: string;
  defaultValue?: string;
}

const LightInputField = ({
  labelText,
  type,
  id,
  currentRef,
  placeholder,
  defaultValue,
}: ILightInputFieldProps) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={id} className="text=[#171b2f] font-medium">
        {labelText}
      </label>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        ref={currentRef}
        defaultValue={defaultValue}
        className="border-2 rounded-[7px] py-2 px-3 mb-5 outline-[#6b6e87]"
      />
    </div>
  );
};

export default LightInputField;
