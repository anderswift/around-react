
import {useState, useEffect, useContext} from 'react';
import {api} from '../utils/api.js';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

import Card from './Card';



function Main({onEditAvatar, onEditProfile, onAddPlace, onCardClick}) {

  const currentUser = useContext(CurrentUserContext);
  const [cards, setCards]= useState([]);


  useEffect(() => {
    if(!currentUser) return;
    api.getInitialCards()
      .then(setCards)
      .catch((err) => {
        console.log(err);
      });
  }, [currentUser]);



  const onLikeClick= (card) => {
    const currentUserLikes= card.likes.some(user => user._id === currentUser._id);
    api.updateLikes(card._id, !currentUserLikes)
      .then((updatedCard) => {
        const newCards = cards.map((c) => c._id === card._id ? updatedCard : c);  
        setCards(newCards);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const onDeleteClick= (cardId) => {
    api.deleteCard(cardId)
      .then((response) => {
        const newCards = cards.filter((card) => card._id !== cardId);  
        setCards(newCards);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  


  return (
    <main>
          
      <section className="profile">
        <button className="profile__edit-avatar" aria-label="Edit Avatar" onClick={onEditAvatar}>
          <img className="profile__avatar" src={currentUser.avatar} alt="Avatar" />
        </button>
        <div className="profile__info">
          <h1 className="profile__name">{currentUser.name}</h1>
          <button type="button" className="profile__edit-info button" aria-label="Edit profile" onClick={onEditProfile}></button>
          <p className="profile__about">{currentUser.about}</p>
        </div>
        
        <button type="button" className="profile__add-image button" aria-label="Add image" onClick={onAddPlace}></button>
      </section>

      
      <section className="photo-grid">
        <ul className="photo-grid__list list">

          {cards.map(card => (
            <Card card={card} key={card._id} currentUserId={currentUser._id} onCardClick={onCardClick} onDeleteClick={onDeleteClick} onLikeClick={onLikeClick} />
          ))}

        </ul>
      </section>

    </main>
  );
}

export default Main;
