
import { useState } from 'react';
import PopupWithForm from './PopupWithForm';

function DeletePlacePopup({isOpen, onClose, cardId, onSubmit}) {

  const [saving, setSaving]= useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSaving(true);
    onSubmit(cardId, () => { setTimeout(() => { setSaving(false); }, 200); });
  }

  return (
    <PopupWithForm heading="Are you sure?" name="delete" submitText={saving? 'Saving...' : 'Yes'} isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit} />
  );
  
}

export default DeletePlacePopup;
