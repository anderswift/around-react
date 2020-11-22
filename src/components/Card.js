function Card(props) {

  const handleClick= () => {
    props.onCardClick(props.card);
  }  

  return (
    <li className="photo" key={props.card._id} id={props.card._id}>
      <img className="photo__image" src={props.card.link} alt={props.card.name} onClick={handleClick} />
      <div className="photo__meta">
        <h2 className="photo__caption">{props.card.name}</h2>
        <button type="button" className="photo__like button" aria-label="Like"><span className="photo__like-count">{props.card.likes.length}</span></button>
      </div>
      <button type="reset" className="photo__delete button" aria-label="Delete"></button>
    </li>
  );
}

export default Card;
