function FormField(props) {

  return (
    <>
      <input 
        type={props.type === undefined ? 'text' : props.type} 
        name={props.name}
        id={props.name} 
        className={`modal__input modal__input_type_${props.name}${props.error && ' modal__input_type_error'}`} 
        aria-label={props.label} 
        placeholder={props.label} 
        minLength={props.minMax ? props.minMax[0] : undefined}
        maxLength={props.minMax ? props.minMax[1] : undefined} 
        value={props.value} 
        onChange={props.handleChange}
        required />
      <span className={`modal__error${props.error && ' modal__error_active'}`} id={`${props.name}-error`}>{props.error}</span>
    </>
  );
}

export default FormField;
