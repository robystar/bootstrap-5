import React, { useEffect } from "react";
import { useForm, FormProvider, useFieldArray } from "react-hook-form";
import "./App.css";
import Anagrafica from "./pages/Anagrafica";
import SubGiuridica from "./forms/SubGiuridica";

const startValues = {
  giuridica_opt: true,
  fisica_app: "Arch.",
  fisica_cognome: "Starnini",
  fisica_nome: "Roberto",
  fisica_sesso: "M",
  giuridica_denominazione: "Gis & Web S.a.s",
  giuridica_indirizzo: "via gramsci, 27",
  mappali: [
    {
        "foglio": "pippo",
        "mappale": "5",
        "subalterno": "6"
    },
    {
        "foglio": "pluto",
        "mappale": "112",
        "subalterno": "1245"
    },
    {
        "foglio": "pluto",
        "mappale": "4566",
        "subalterno": "2333"
    }
]
};

let renderCount = 0;

const App = () => {
  const methods = useForm({ defaultValues: startValues });
  const handleSubmit = methods.handleSubmit;

  useEffect(() => {
    window.addEventListener("beforeunload", alertUser);
    return () => {
      window.removeEventListener("beforeunload", alertUser);
    };
  }, []);

  const alertUser = (e) => {
    e.preventDefault();
    e.returnValue = "";
  };


  renderCount++;
  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit((data) => console.log(data))}>

        <Anagrafica />

        <SubGiuridica {...methods}/>


        <input type="submit" className="btn btn-primary" />
      </form>
    </FormProvider>
  );
};

export default App;
