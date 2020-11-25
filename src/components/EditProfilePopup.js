
import PopupWithForm from './PopupWithForm';
import {api} from '../utils/api.js';

function EditProfilePopup({isOpen, onClose}) {

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <PopupWithForm heading="Edit profile" name="profile" submitText="Save" isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit}>
      <FormField name="profile-name" label="Name" minMax={[2, 40]} />
      <FormField name="profile-about" label="About me" minMax={[2, 200]} />
    </PopupWithForm>
  );
  
}

export default EditProfilePopup;
