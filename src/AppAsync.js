import React, { useState } from 'react';
import Select from "react-select";
import SelectAsyncPaginate from './SelectAsyncPaginate';
import ElencoComuni from './db/comuni';
import AsyncSelect from 'react-select/async';

const App = ()=>{

  return(

    <Select 
    options = {ElencoComuni}
    />

  )

}



const App2 = () => {
   const options = [
       { value: "The Crownlands" },
       { value: "Iron Islands" },
       { value: "The North" },
       { value: "The Reach" },
       { value: "The Riverlands" },
       { value: "The Vale" },
       { value: "The Westerlands" },
       { value: "The Stormlands" }
   ];
  const [region, setRegion] = useState(options[0]);
  const [currentCountry, setCurrentCountry] = useState(null);
  const onchangeSelect = (item) => {
    setCurrentCountry(null);
    setRegion(item);
  };
  return (
    <div className="container">
    <div className="App">
       <Select
          value={region}
          onChange={onchangeSelect}
          options={options}
          getOptionValue={(option) => option.value}
          getOptionLabel={(option) => option.value}
       />
       <hr />

        <SelectAsyncPaginate
         regionName={region.value}
         value={currentCountry}
         onChange={(country) => setCurrentCountry(country)}
       />

    </div>
    </div>
  );
};

export default App;