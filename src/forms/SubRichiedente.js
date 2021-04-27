import React from "react";
import { useFormContext } from "react-hook-form";
import { useFieldArray } from "react-hook-form";
import FieldArray from './Mappali';
import SelectComune from '../components/SelectComune';
import Input from '../components/FrmInput';
import Options from '../components/FrmOptions';


let renderCount = 0;

const SubFisica = () => {

  const methods = useFormContext();
  const { control, errors, register, setValue, getValues, watch, handleSubmit } = methods;
  const giuridicaOpt = watch("giuridica_opt");


  renderCount++;

  return(
  <div className="container">
      <h1 className="documentFirstHeading">dati fisica</h1>
      <div className="row g-3">
        <div className="col-md-2">
          <label htmlFor="fisica_app" className="label">
            Titolo
          </label>
          <select
            className="form-select"
            aria-label="Default select example"
            id="fisica_app"
            {...register("fisica_app")}
            >
            <option value="Arch.">Arch.</option>
            <option value="Ing.">Ing.</option>
            <option value="Dott.">Dott.</option>
            <option value="Dott.ssa">Dott.ssa</option>
            <option value="Geom.">Geom.</option>
            <option value="Sig.">Sig.</option>
            <option value="Sig.ra">Sig.ra</option>
          </select>
        </div>

        <div className="col-md-4">
          <Input id="fisica_cognome" label="Cognome" required register={register}/>
        </div>
        <div className="col-md-4">
          <Input id="fisica_nome" label="Nome" required register={register}/>
        </div>
        <div className="col-md-2">
          <Options id="fisica_sesso" label="Sesso" type='checkbox' required values={['M','F']} register={register}/>
        </div>




      </div>




      <div className="row g-3">

          <input
            id="giuridica_opt"
            type="checkbox"
            {...register("giuridica_opt")}
          />
          <label htmlFor="giuridica_opt">Giuridica</label>
      </div>

      <FieldArray
        {...{ control, register, getValues, setValue, errors }}
      />

  </div>
)};

export default SubFisica;
