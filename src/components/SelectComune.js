import React, { Component } from "react";
import { useForm, Controller } from 'react-hook-form';
import AsyncSelect from "react-select/async";
import comuni from "../db/comuni";
import { useFormContext } from "react-hook-form";

const customStyles = {
  control: (provided, state) => ({
    ...provided,
    background: '#fff',
    minHeight: '30px',
    height: '30px',
    boxShadow: state.isFocused ? null : null,
  }),

  valueContainer: (provided, state) => ({
    ...provided,
    height: '30px',
    padding: '0 6px'
  }),

  input: (provided, state) => ({
    ...provided,
    margin: '0px',
  }),
  indicatorSeparator: state => ({
    display: 'none',
  }),
  indicatorsContainer: (provided, state) => ({
    ...provided,
    height: '30px',
  }),
};


type State = {
  inputValue: string,
};

const filterOptions = (inputValue: string) => {
  let results = [];
  if (inputValue.length<2){
    return []
  }
  let re = RegExp('^' + inputValue, 'i');
  comuni.forEach(function(comune, index) {
      if (re.test(comune[1])) {
        results.push({"id":comune[0], "title":comune[1], "sigla":comune[2], "cap":comune[3]})
      }
  })
  return results
};

const promiseOptions = inputValue =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve(filterOptions(inputValue));
    }, 1000);
  });


const SelectComune = ({...props}) => {
  
  const methods = useFormContext();
  const { control, register, setValue, getValues, watch, handleSubmit } = methods;

  return (
    <Controller 
      {...props}
      control={control}
      render = {({field})=> {
        return(<>
        <label htmlFor={props.id}>{props.label}</label>
         <AsyncSelect         {...field}
                              cacheOptions
                              defaultOptions
                              //value={selectedValue}
                              getOptionLabel={e => e.title}
                              getOptionValue={e => e.id}
                              loadOptions={promiseOptions}
                              isClearable={true}
                              width='500px' 
                              height='20px'
                              styles={customStyles}

                            /></>)}}
    />


)};

export default SelectComune;



