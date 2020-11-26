
import { useEffect, useState, useContext } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

import PopupWithForm from './PopupWithForm';
import FormField from './FormField';



function EditAvatarPopup({isOpen, onClose, onSubmit}) {

  const currentUser= useContext(CurrentUserContext);
  const [avatar, setAvatar]= useState('');



  function handleAvatarChange(e) {
    setAvatar(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit({avatar: avatar});
  }



  useEffect(() => {
    setAvatar(currentUser.avatar);
  }, [currentUser]); 


  
  return (
    <PopupWithForm heading="Change profile picture" name="avatar" submitText="Save" isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit}>
      <FormField name="profile-avatar" type="url" label="Image link" defaultValue={avatar} handleChange={handleAvatarChange} />
    </PopupWithForm>
  );
  
}

export default EditAvatarPopup;
