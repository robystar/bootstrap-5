import React from "react";

const Options = ({ register, error, label, id, ...inputProps }) => {
  console.log(inputProps);
  console.log(register);

  //se non metto labels uso values come labels
  const values = inputProps.values || [];
  const labels = inputProps.labels || values;
  const inputType = inputProps.type || 'radio';
  return (
    <fieldset>
      <legend
        className={
          inputProps.required ? "col-form-label required" : "col-form-label"
        }
      >
        {label}
      </legend>
      <div>
        {values.map((item, index) => {
          return (
            <div className="form-check form-check-inline">
              <input
                {...inputProps}
                className="form-check-input"
                type={inputType}
                defaultValue={item}
                {...register(id)}
              />
              <label className="form-check-label">{labels[index]}</label>
            </div>
          );
        })}
      </div>
    </fieldset>
  );
};

export default Options;
