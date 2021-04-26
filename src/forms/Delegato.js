import React from "react";
import { useFormContext } from "react-hook-form";
import SelectComune from "../components/SelectComune";
import Input from '../components/FrmInput';

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
          <label htmlFor="delegato_nome" className="label required">
            Nome
          </label>
          <span>
            <input
              className="form-control form-control-sm"
              type="text"
              id="delegato_nome"
              {...register("delegato_nome")}
            />
          </span>
        </div>
        <div className="col-md-2">
          <fieldset>
            <legend className="col-form-label required">Sesso</legend>
            <div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  id="delegato_sesso-m"
                  defaultValue="M"
                  {...register("delegato_sesso")}
                  />
                <label className="form-check-label" htmlFor="delegato_sesso-m">
                  M
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  id="delegato_sesso-f"
                  defaultValue="F"
                  {...register("delegato_sesso")}
                  />
                <label className="form-check-label" htmlFor="delegato_sesso-f">
                  F
                </label>
              </div>
            </div>
          </fieldset>
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
