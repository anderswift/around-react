import { useState, useEffect } from 'react';
import {api} from '../utils/api.js';

import { CurrentUserContext } from '../contexts/CurrentUserContext';
import avatar from '../images/avatar.png';

import Header from './Header';
import Main from './Main';
import Footer from './Footer';

import PopupWithForm from './PopupWithForm';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import DeleteForm from './DeleteForm';
import FormField from './FormField';

import PopupWithImage from './PopupWithImage';



function App() {

  const [currentUser, setCurrentUser]= useState({avatar: avatar});

  const [selectedCard, selectCard]= useState({});

  const [isProfilePopupOpen, showProfilePopup]= useState(false);
  const [isAvatarPopupOpen, showAvatarPopup]= useState(false);
  const [isAddPlacePopupOpen, showAddPlacePopup]= useState(false);
  const [isDeletePlacePopupOpen, showDeletePlacePopup]= useState(false);
  const [isImagePopupOpen, showImagePopup]= useState(false);



  const handleEditAvatarClick= () => { showAvatarPopup(true); }
  const handleEditProfileClick= () => { showProfilePopup(true); }
  const handleAddPlaceClick= () => { showAddPlacePopup(true); }

  const closeAllPopups= () => {
    showAvatarPopup(false);
    showProfilePopup(false);
    showAddPlacePopup(false);
    showDeletePlacePopup(false);

    showImagePopup(false);
    selectCard({});
  }

  const handleCardClick= (card) => {
    selectCard(card);
    showImagePopup(true);
  }

  const updateProfile= (userData) => {
    api.setUserInfo(userData)
    .then((user) => {
      setCurrentUser(user);
    })
    .catch((err) => {
      console.log(err);
    });
    closeAllPopups();
  }

  const updateAvatar= (avatarData) => {
    api.setUserAvatar(avatarData)
    .then((user) => {
      setCurrentUser(user);
    })
    .catch((err) => {
      console.log(err);
    });
    closeAllPopups();
  }


  
  useEffect(() => {
    api.getUserInfo()
    .then((user) => {
      setCurrentUser(user);
    })
    .catch((err) => {
      console.log(err);
    });
  }, []);



  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="container">
        <Header />
        
        <Main 
          onEditAvatar={handleEditAvatarClick} 
          onEditProfile={handleEditProfileClick} 
          onAddPlace={handleAddPlaceClick}
          onCardClick={handleCardClick}
        />
        
        <Footer />
      </div>
      
      
      <EditProfilePopup isOpen={isProfilePopupOpen} onClose={closeAllPopups} onSubmit={updateProfile} />

      <EditAvatarPopup isOpen={isAvatarPopupOpen} onClose={closeAllPopups} onSubmit={updateAvatar} />

      <PopupWithForm heading="New place" name="photo" submitText="Create" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
        <FormField name="photo-name" label="Title" minMax={[2, 30]} />
        <FormField name="photo-link" type="url" label="Image link" />
      </PopupWithForm>    

      <DeleteForm isOpen={isDeletePlacePopupOpen} onClose={closeAllPopups} cardId={selectedCard._id} />


      <PopupWithImage isOpen={isImagePopupOpen} onClose={closeAllPopups} card={selectedCard} />
      
    </CurrentUserContext.Provider>
  );
}

export default App;
