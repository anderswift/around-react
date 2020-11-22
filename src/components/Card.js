import {useState, useEffect} from 'react';
import {api} from '../utils/api.js';


function Card({card, currentUserId, onCardClick, onDeleteClick}) {

  const currentUserOwns= card.owner._id === currentUserId;
  const [currentUserLikes, toggleUserLike]= useState(card.likes.map(user => user._id).includes(currentUserId));

  const handleClick= () => {
    onCardClick(card);
  }
  
  const handleDeleteClick= () => {
    onDeleteClick(card);
  }

  const handleLikeClick= (e) => {
    e.preventDefault();
    api.updateLikes(card._id, !currentUserLikes)
      .then((response) => {
        toggleUserLike(!currentUserLikes);
        e.target.blur();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <li className="photo" id={card._id}>
      <img className="photo__image" src={card.link} alt={card.name} onClick={handleClick} />
      <div className="photo__meta">
        <h2 className="photo__caption">{card.name}</h2>
        <button type="button" aria-label="Like"
          className={`photo__like button${currentUserLikes ? ' photo__like_on' : ''}`} 
          onClick={handleLikeClick}
        >
          <span className="photo__like-count">{card.likes.length}</span>
        </button>
      </div>
      {currentUserOwns && <button type="reset" className="photo__delete button" aria-label="Delete" onClick={handleDeleteClick}></button>}
    </li>
  );
}

export default Card;
