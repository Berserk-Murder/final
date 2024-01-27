import InputMask from "react-input-mask";

function Input({ textLabel, text, textPlaceholder, handleChange, isPhone, inputType, defaultValue }) {
  let maskFone;
  isPhone ? (maskFone = "(99) 9 9999-9999") : (maskFone = "");

  return (
    <div className="mb-3">
      <label htmlFor={textLabel} className="form-label">
        {text}:
      </label>
      <InputMask
        type={inputType}
        placeholder={textPlaceholder}
        className="form-control"
        onChange={handleChange}
        required
        mask={maskFone}
        defaultValue={defaultValue}
      />
    </div>
  );
}

export default Input;
