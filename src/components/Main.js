
import {useState, useEffect} from 'react';

import {api} from '../utils/api.js';
import avatar from '../images/avatar.png';
import Card from './Card';



function Main({onEditAvatar, onEditProfile, onAddPlace, onCardClick}) {

  const [userName, setUserName]= useState('');
  const [userAbout, setUserAbout]= useState('');
  const [userAvatar, setUserAvatar]= useState(avatar);

  const [cards, setCards]= useState([]);



  useEffect(() => {

    api.getUserInfo().then((userData) => {
      setUserName(userData.name);
      setUserAbout(userData.about);
      setUserAvatar(userData.avatar);
      return userData._id; 
    })
    .then((userId) => {
      return api.getInitialCards()
        .then(setCards)
        .catch((err) => {
          console.log(err);
        });
    })
    .catch((err) => {
      console.log(err);
    });

  });
  


  return (
    <main>
          
      <section className="profile">
        <button className="profile__edit-avatar" aria-label="Edit Avatar" onClick={onEditAvatar}>
          <img className="profile__avatar" src={userAvatar} alt="Avatar" />
        </button>
        <div className="profile__info">
          <h1 className="profile__name">{userName}</h1>
          <button type="button" className="profile__edit-info button" aria-label="Edit profile" onClick={onEditProfile}></button>
          <p className="profile__about">{userAbout}</p>
        </div>
        
        <button type="button" className="profile__add-image button" aria-label="Add image" onClick={onAddPlace}></button>
      </section>

      
      <section className="photo-grid">
        <ul className="photo-grid__list list">

          {cards.map(card => (
            <Card card={card} key={card._id} onCardClick={onCardClick} />
          ))}

        </ul>
      </section>

    </main>
  );
}

export default Main;
