import React, { useState } from 'react';
import AsyncSelect from 'react-select/async';
import { useForm, Controller } from "react-hook-form";

const SelectX = () => {
  const [inputValue, setValue] = useState('');
  const [selectedValue, setSelectedValue] = useState(null);
 
  const methods = useForm();


  // handle input change event
  const handleInputChange = value => {
    setValue(value);
  };
 
  // handle selection
  const handleChange = value => {
    setSelectedValue(value);
  }
 
  // load options using API call
  const loadOptions = (inputValue) => {
    return fetch(`http://jsonplaceholder.typicode.com/posts?userId=${inputValue}`).then(res => res.json());
  };
 
  return (
      <AsyncSelect
        cacheOptions
        defaultOptions
        value={selectedValue}
        getOptionLabel={e => e.title}
        getOptionValue={e => e.id}
        loadOptions={loadOptions}
        onInputChange={handleInputChange}
        onChange={handleChange}
      />
  );
}
 
export default SelectX;