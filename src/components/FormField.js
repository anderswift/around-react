import { useState } from 'react';

function FormField(props) {

  return (
    <>
      <input 
        type={props.type === undefined ? 'text' : props.type} 
        name={props.name}
        id={props.name} 
        className={`modal__input modal__input_type_${props.name}`} 
        aria-label={props.label} 
        placeholder={props.label} 
        minLength={props.minMax ? props.minMax[0] : undefined}
        maxLength={props.minMax ? props.minMax[1] : undefined} 
        defaultValue={props.defaultValue} 
        onChange={props.handleChange}
        required />
      <span className="modal__error" id={`${props.name}-error`}></span>
    </>
  );
}

export default FormField;
