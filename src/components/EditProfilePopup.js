
import { useEffect, useState, useContext } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

import PopupWithForm from './PopupWithForm';
import FormField from './FormField';



function EditProfilePopup({isOpen, onClose, onSubmit}) {

  const currentUser= useContext(CurrentUserContext);
  const [name, setName]= useState('');
  const [about, setAbout]= useState('');



  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleAboutChange(e) {
    setAbout(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit({name: name, about: about});
  }



  useEffect(() => {
    setName(currentUser.name);
    setAbout(currentUser.about);
  }, [currentUser]); 



  
  return (
    <PopupWithForm heading="Edit profile" name="profile" submitText="Save" isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit}>
      <FormField name="profile-name" label="Name" minMax={[2, 40]} defaultValue={name} handleChange={handleNameChange} />
      <FormField name="profile-about" label="About me" minMax={[2, 200]} defaultValue={about} handleChange={handleAboutChange}  />
    </PopupWithForm>
  );
  
}

export default EditProfilePopup;
