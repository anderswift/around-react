
import {useState, useEffect} from 'react';
import {api} from '../utils/api.js';
import avatar from '../images/avatar.png';
import Card from './Card';



function Main({onEditAvatar, onEditProfile, onAddPlace, onCardClick}) {

  const [userName, setUserName]= useState('');
  const [userAbout, setUserAbout]= useState('');
  const [userAvatar, setUserAvatar]= useState(avatar);
  const [userId, setUserId]= useState(0);

  const [cards, setCards]= useState([]);



  useEffect(() => {

    api.getUserInfo()
      .then((userData) => {
        setUserName(userData.name);
        setUserAbout(userData.about);
        setUserAvatar(userData.avatar);
        setUserId(userData._id);
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

  }, []);



  const onLikeClick= (card) => {
    const currentUserLikes= card.likes.some(user => user._id === userId);
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
        console.log(response);
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
            <Card card={card} key={card._id} currentUserId={userId} onCardClick={onCardClick} onDeleteClick={onDeleteClick} onLikeClick={onLikeClick} />
          ))}

        </ul>
      </section>

    </main>
  );
}

export default Main;
