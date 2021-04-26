import React from 'react';

const Input = ({register, error, label, id, ...inputProps}) => {
    
    const required = inputProps.required;
    return(
    <>
    <label htmlFor={id} className={required?'label required':'label'}>{label}</label>
    <input 
     className="form-control form-control-sm"
     id={id} 
     {...inputProps}
     {...register(id)}
    />
    </>);
};

export default Input;

