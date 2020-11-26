
import { useEffect, useState, useContext } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

import PopupWithForm from './PopupWithForm';
import FormField from './FormField';



function EditAvatarPopup({isOpen, onClose, onSubmit}) {

  const currentUser= useContext(CurrentUserContext);
  const [avatar, setAvatar]= useState('');

  const [saving, setSaving]= useState(false);


  function handleAvatarChange(e) {
    setAvatar(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSaving(true);
    onSubmit({avatar: avatar}, () => { setTimeout(() => { setSaving(false); }, 200); });
  }



  useEffect(() => {
    setAvatar(currentUser.avatar);
  }, [currentUser]); 


  
  return (
    <PopupWithForm heading="Change profile picture" name="avatar" submitText={saving ? 'Saving...' : 'Save'} isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit}>
      <FormField name="profile-avatar" type="url" label="Image link" defaultValue={avatar} handleChange={handleAvatarChange} />
    </PopupWithForm>
  );
  
}

export default EditAvatarPopup;
