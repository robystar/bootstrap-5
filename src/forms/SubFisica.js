import React from "react";
import { useFormContext } from "react-hook-form";
import { useFieldArray } from "react-hook-form";
import FieldArray from './Mappali';

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
        <div className="col-md-2">
          <label htmlFor="fisica_cognome" className="label required">
            Cognome
          </label>
          <span>
            <input
              className="form-control"
              type="text"
              id="fisica_cognome"
              {...register("fisica_cognome")}
            />
          </span>
        </div>
        <div className="col-md-4">
          <label htmlFor="fisica_nome" className="label required">
            Nome
          </label>
          <span>
            <input
              className="form-control"
              type="text"
              id="fisica_nome"
              {...register("fisica_nome")}
            />
          </span>
        </div>
        <div className="col-md-4">
          <fieldset>
            <legend className="col-form-label required">Sesso</legend>
            <div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  id="fisica_sesso-m"
                  defaultValue="M"
                  {...register("fisica_sesso")}
                  />
                <label className="form-check-label" htmlFor="fisica_sesso-m">
                  M
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  id="fisica_sesso-f"
                  defaultValue="F"
                  {...register("fisica_sesso")}
                  />
                <label className="form-check-label" htmlFor="fisica_sesso-f">
                  F
                </label>
              </div>
            </div>
          </fieldset>
        </div>
      </div>



      <div>
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
