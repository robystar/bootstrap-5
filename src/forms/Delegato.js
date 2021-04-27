import React from "react";
import { useFormContext } from "react-hook-form";
import SelectComune from "../components/SelectComune";
import Input from '../components/FrmInput';
import Options from '../components/FrmOptions';

const Delegato = () => {

    const { register } = useFormContext();
    return (
      <fieldset className="border rounded-2"><legend className="fieldset-legend">Dati del soggetto delegato</legend>
      <div className="row g-3 p-3">
        <div className="col-md-2">
          <label htmlFor="delegato_app" className="label">
            Titolo
          </label>
          <select
            className="form-select form-select-sm"
            aria-label="Default select example"
            id="delegato_app"
            {...register("delegato_app")}
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
          <Input id="delegato_cognome" label="Cognome" required register={register}/>
        </div>
        <div className="col-md-4">
          <Input id="delegato_nome" label="Nome" required register={register}/>
        </div>
        <div className="col-md-2">
          <Options id="delegato_sesso" label="Sesso" required values={['M','F']} register={register}/>
        </div>
      </div>
      <div className="row g-3 p-3">
        <div className="col-md-5">
          <label htmlFor="comune_nato" className="label required">
            Comune nascita
          </label>
          <SelectComune id="comune_nato" {...register("comune_nato")}/>
        </div>
        <div className="col-md-5">
          <label htmlFor="comune_residenza" className="label required">
            Comune residenza 
          </label>
          <SelectComune id="comune_residenza" {...register("comune_residenza")}/>
        </div>
      </div>




      </fieldset>
    
)};

export default Delegato;
