
import PopupWithForm from './PopupWithForm';
import {api} from '../utils/api.js';

function DeleteForm({isOpen, onClose, cardId, handleDelete}) {

  function handleSubmit(e) {
    e.preventDefault();

    //handleDelete(cardId)

    api.deleteCard(cardId).then((response) => {
      onClose();
    }).catch((err) => { console.log(err); });
  }

  return (
    <PopupWithForm heading="Are you sure?" name="delete" submitText="Yes" isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit} />
  );
  
}

export default DeleteForm;
