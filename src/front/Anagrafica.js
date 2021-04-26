import React, { useEffect } from "react";
import { useForm, FormProvider } from "react-hook-form";
import SubFisica from "../forms/SubRichiedente";
import { useFormContext } from "react-hook-form";
import { useFieldArray } from "react-hook-form";

let renderCount = 0;


const Anagrafica = () => {
  const methods = useFormContext();
  const { control, register, setValue, getValues, watch, handleSubmit } = methods;

  const { fields, append, remove, prepend } = useFieldArray({
    control,
    name: "test",
  });

  renderCount++;

  return (
    <FormProvider {...methods}>
        <SubFisica />
    </FormProvider>
  );
};

export default Anagrafica;
