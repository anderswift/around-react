function Card({card, currentUserId, onCardClick}) {

  const currentUserOwns= card.owner._id === currentUserId;
  const currentUserLikes= card.likes.map(user => user._id).includes(currentUserId);

  const handleClick= () => {
    onCardClick(card);
  }  

  return (
    <li className="photo" id={card._id}>
      <img className="photo__image" src={card.link} alt={card.name} onClick={handleClick} />
      <div className="photo__meta">
        <h2 className="photo__caption">{card.name}</h2>
        <button type="button" className={`photo__like button${currentUserLikes ? ' photo__like_on' : ''}`} aria-label="Like"><span className="photo__like-count">{card.likes.length}</span></button>
      </div>
      {currentUserOwns && <button type="reset" className="photo__delete button" aria-label="Delete"></button>}
    </li>
  );
}

export default Card;
