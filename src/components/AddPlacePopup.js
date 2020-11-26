
import { useState } from 'react';

import PopupWithForm from './PopupWithForm';
import FormField from './FormField';



function AddPlacePopup({isOpen, onClose, onSubmit}) {

  const [name, setName]= useState('');
  const [link, setLink]= useState('');

  const [saving, setSaving]= useState(false);



  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleLinkChange(e) {
    setLink(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSaving(true);
    onSubmit({name: name, link: link}, () => { setTimeout(() => { setSaving(false); }, 200);  e.target.reset(); });
  }



  return (
    <PopupWithForm heading="New place" name="photo" submitText={saving? 'Saving...' : 'Create'} isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit}>
      <FormField name="photo-name" label="Title" minMax={[2, 30]} handleChange={handleNameChange} />
      <FormField name="photo-link" type="url" label="Image link" handleChange={handleLinkChange} />
    </PopupWithForm>
  );

}

export default AddPlacePopup;
