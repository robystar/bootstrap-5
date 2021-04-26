import React from 'react';
import SelectComune from '../components/SelectComune';


const Ditta = ({register,item,index}) => (
<div key={item.id}>
<h1 className="documentFirstHeading">dati giuridica</h1>
<div className="row g-3 shadow-sm well">
  <div className="col-md-4">
    <label htmlFor="giuridica_denominazione" className="form-label required">
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
    <label htmlFor="giuridica_indirizzo" className="form-label required">
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
  <div className="col-md-4">
    <fieldset>
      <legend className="col-form-label form-label required">Opzione</legend>
      <div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            defaultValue="XXXX"
            {...register(`ditte.${index}.giuridica_test`)}
            />
          <label className="form-check-label" htmlFor="fisica_sesso-m">
            M
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            defaultValue="YYY"
            {...register(`ditte.${index}.giuridica_test`)}
            />
          <label className="form-check-label" htmlFor="fisica_sesso-f">
            F
          </label>
        </div>
      </div>
    </fieldset>
  </div>

</div>

<div className="row g-3 shadow-sm well">

  <div className="col-md-4">
    <label htmlFor="giuridica_comune" className="form-label required">
      Comune
    </label>
    <SelectComune />

  </div>

</div>









</div>
 
);
export default Ditta;




