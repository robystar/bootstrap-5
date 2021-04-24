import React from "react";
import { useFormContext, useFieldArray } from "react-hook-form";



const SubGiuridica = ({ register }) => {
  const methods = useFormContext();

  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray(
    {
      control: methods.control,
      name: "ditte",
    }
  );

  return (
    <>
    <div className="container">
      {fields.map((item, index) => {
      return(
      <li key={item.id}>
      <h1 className="documentFirstHeading">dati giuridica</h1>
      <div className="row g-3">
        <div className="col-md-4">
          <label htmlFor="giuridica_denominazione" className="label required">
            Denominazione
          </label>
          <span>
            <input
              className="form-control"
              type="text"
              {...register(`ditte.${index}.giuridica_denominazione`)}
            />
          </span>
        </div>
        <div className="col-md-4">
          <label htmlFor="giuridica_indirizzo" className="label required">
            Indirizzo
          </label>
          <span>
            <input
              className="form-control"
              type="text"
              {...register(`ditte.${index}.giuridica_indirizzo`)}
            />
          </span>
        </div>
      </div>
      </li>
      );
    })}
    </div>
    <button
    type="button"
    onClick={() => {
      append({ giuridica_denominazione: "appendBill", giuridica_indirizzo: "appendLuo" });
    }}
  >
    append
  </button>
  </>
  );
};

export default SubGiuridica;
