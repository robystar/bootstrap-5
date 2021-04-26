import React from "react";
import { useFormContext, useFieldArray } from "react-hook-form";
import Ditta from './Ditta';

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
         <Ditta register={register} item={item} index={index}/>
      );
    })}
    </div>
    <p></p>
    <button
    type="button"
    onClick={() => {
      append({ giuridica_denominazione: "appendBill", giuridica_indirizzo: "appendLuo" });
    }}
  >
    Aggiungi giuridica
  </button>
  </>
  );
};

export default SubGiuridica;
