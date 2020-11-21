import Header from './Header';
import Main from './Main';
import Footer from './Footer';

function App() {


  return (
    <>
      <div className="container">
      
        <Header />
        
        <Main />
        
        <Footer />
        
        
      </div>
      
      
      
      <div className="popup">
        <form name="profile-form" className="popup__item modal modal_form_profile">
          
          <h3 className="modal__heading">Edit profile</h3>
          
          <input type="text" name="profile-name" id="profile-name" className="modal__input modal__input_type_name" aria-label="Name" placeholder="Name" minLength="2" maxLength="40" required />
          <span className="modal__error" id="profile-name-error"></span>
          
          <input type="text" name= "profile-about" id="profile-about" className="modal__input modal__input_type_about" aria-label="About me" placeholder="About me" minLength="2" maxLength="200" required />
          <span className="modal__error" id="profile-about-error"></span>
          
          <button type="submit" className="button modal__button modal__button_type_save modal__button_disabled" name="profile-submit">Save</button>
          
          <button type="reset" className="popup__exit button" aria-label="Close Profile Form"></button>
        </form>
      </div>

      <div className="popup">
        <form name="avatar-form" className="popup__item modal modal_form_avatar">
          
          <h3 className="modal__heading">Change profile picture</h3>
          
          <input type="url" name="profile-avatar" id="profile-avatar" className="modal__input modal__input_type_avatar" aria-label="Image link" placeholder="Image link" required />
          <span className="modal__error" id="profile-avatar-error"></span>
          
          <button type="submit" className="button modal__button modal__button_type_save modal__button_disabled" name="avatar-submit">Save</button>
          
          <button type="reset" className="popup__exit button" aria-label="Close Profile Picture Form"></button>
        </form>
      </div>
        
      <div className="popup">
        <form name="photo-form" className="popup__item modal modal_form_photo">
          
          <h3 className="modal__heading">New place</h3>
          
          <input type="text" name="photo-name" id="photo-name" className="modal__input modal__input_type_name" aria-label="Title" placeholder="Title" minLength="2" maxLength="30" required />
          <span className="modal__error" id="photo-name-error"></span>
          
          <input type="url" name="photo-link" id="photo-link" className="modal__input modal__input_type_link" aria-label="Image link" placeholder="Image link" required />
          <span className="modal__error" id="photo-link-error"></span>
          
          <button type="submit" className="button modal__button modal__button_type_create modal__button_disabled" name="photo-submit">Create</button>
          
          <button type="reset" className="popup__exit button" aria-label="Close Photo Form"></button>
        </form>
      </div>

      <div className="popup">
        <form name="photo-form" className="popup__item modal modal_form_delete">
          
          <h3 className="modal__heading">Are you sure?</h3>
          
          <input type="hidden" name="delete-id" id="delete-id" className="modal__input modal__input_type_delete" required />
          
          <button type="submit" className="button modal__button modal__button_type_delete" name="delete-submit">Yes</button>
          
          <button type="reset" className="popup__exit button" aria-label="Cancel"></button>
        </form>
      </div>


      <div className="popup popup_dark">  
        <div className="popup__item photo-viewer">
          <figure className="photo-viewer__figure">
            <img className="photo-viewer__image" alt="caption" />
            <figcaption className="photo-viewer__caption">Hello, here is a caption</figcaption>
          </figure>
          <button type="button" className="popup__exit photo-viewer__exit button" aria-label="Close Photo Form"></button>
        </div>
      </div>
      
      <template id="photo-template">
        <li className="photo">
          <img className="photo__image" />
          <div className="photo__meta">
            <h2 className="photo__caption"></h2>
            <button type="button" className="photo__like button" aria-label="Like"><span className="photo__like-count"></span></button>
          </div>
          <button type="reset" className="photo__delete button" aria-label="Delete"></button>
        </li>
      </template>
    </>
  );
}

export default App;
