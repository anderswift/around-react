import avatar from '../images/avatar.png';

function Main(props) {
  const handleEditAvatarClick= props.onEditAvatar;
  const handleEditProfileClick= props.onEditProfile; 
  const handleAddPlaceClick= props.onAddPlace; 


  return (

    <main>
          
      <section className="profile">
        <button className="profile__edit-avatar" aria-label="Edit Avatar" onClick={handleEditAvatarClick}>
          <img className="profile__avatar" src={avatar} alt="Avatar" />
        </button>
        <div className="profile__info">
          <h1 className="profile__name"></h1>
          <button type="button" className="profile__edit-info button" aria-label="Edit profile" onClick={handleEditProfileClick}></button>
          <p className="profile__about"></p>
        </div>
        
        <button type="button" className="profile__add-image button" aria-label="Add image" onClick={handleAddPlaceClick}></button>
      </section>

      
      
      <section className="photo-grid">
        <ul className="photo-grid__list list">
        </ul>
      </section>

    </main>
        
  );
}

export default Main;
