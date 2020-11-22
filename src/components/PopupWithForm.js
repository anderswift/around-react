function PopupWithForm(props) {
  return (
    <div className="popup">
      <form name={`${props.name}-form`} className={`popup__item modal modal_form_${props.name}`}>
        
        <h3 className="modal__heading">{props.heading}</h3>
        
        {props.children}
        
        <button type="submit" className="button modal__button modal__button_type_save modal__button_disabled" name={`${props.name}-submit`}>{props.submitText}</button>
        
        <button type="reset" className="popup__exit button" aria-label="Close"></button>
      </form>
    </div>
    

  );
}

export default PopupWithForm;
