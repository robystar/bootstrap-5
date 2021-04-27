import React from 'react';

const Input = ({register,  error, label, id, ...inputProps}) => {
    
    return(
    <>
    <label htmlFor={id} className={inputProps.required?'label required':'label'}>{label}</label>
    <input 
     placeholder={label}
     className="form-control form-control-sm"
     id={id} 
     {...inputProps}
     {...register(id)}
    />
    </>);
};

export default Input;