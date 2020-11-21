import logo from './images/logo.svg';
import avatar from './images/avatar.png';

function App() {
  return (
    <>
      <div class="container">
      
        
        
        <header class="header">
          <img class="header__logo" src={logo} alt="Around The U.S." />      
        </header>
        


        <main>
          
          <section class="profile">
            <button class="profile__edit-avatar">
              <img class="profile__avatar" src={avatar} alt="Avatar" />
            </button>
            <div class="profile__info">
              <h1 class="profile__name"></h1>
              <button type="button" class="profile__edit-info button" aria-label="Edit profile"></button>
              <p class="profile__about"></p>
            </div>
            
            <button type="button" class="profile__add-image button" aria-label="Add image"></button>
          </section>

          
          
          <section class="photo-grid">
            <ul class="photo-grid__list list">
            </ul>
          </section>

        </main>
        

        
        <footer class="footer">
          <p class="footer__copyright">© 2020 Around the U.S.</p>
        </footer>


      </div>
      
      
      
      <div class="popup">
        <form name="profile-form" class="popup__item modal modal_form_profile">
          
          <h3 class="modal__heading">Edit profile</h3>
          
          <input type="text" name="profile-name" id="profile-name" class="modal__input modal__input_type_name" aria-label="Name" placeholder="Name" minlength="2" maxlength="40" required />
          <span class="modal__error" id="profile-name-error"></span>
          
          <input type="text" name= "profile-about" id="profile-about" class="modal__input modal__input_type_about" aria-label="About me" placeholder="About me" minlength="2" maxlength="200" required />
          <span class="modal__error" id="profile-about-error"></span>
          
          <button type="submit" class="button modal__button modal__button_type_save modal__button_disabled" name="profile-submit">Save</button>
          
          <button type="reset" class="popup__exit button" aria-label="Close Profile Form"></button>
        </form>
      </div>

      <div class="popup">
        <form name="avatar-form" class="popup__item modal modal_form_avatar">
          
          <h3 class="modal__heading">Change profile picture</h3>
          
          <input type="url" name="profile-avatar" id="profile-avatar" class="modal__input modal__input_type_avatar" aria-label="Image link" placeholder="Image link" required />
          <span class="modal__error" id="profile-avatar-error"></span>
          
          <button type="submit" class="button modal__button modal__button_type_save modal__button_disabled" name="avatar-submit">Save</button>
          
          <button type="reset" class="popup__exit button" aria-label="Close Profile Picture Form"></button>
        </form>
      </div>
        
      <div class="popup">
        <form name="photo-form" class="popup__item modal modal_form_photo">
          
          <h3 class="modal__heading">New place</h3>
          
          <input type="text" name="photo-name" id="photo-name" class="modal__input modal__input_type_name" aria-label="Title" placeholder="Title" minlength="2" maxlength="30" required />
          <span class="modal__error" id="photo-name-error"></span>
          
          <input type="url" name="photo-link" id="photo-link" class="modal__input modal__input_type_link" aria-label="Image link" placeholder="Image link" required />
          <span class="modal__error" id="photo-link-error"></span>
          
          <button type="submit" class="button modal__button modal__button_type_create modal__button_disabled" name="photo-submit">Create</button>
          
          <button type="reset" class="popup__exit button" aria-label="Close Photo Form"></button>
        </form>
      </div>

      <div class="popup">
        <form name="photo-form" class="popup__item modal modal_form_delete">
          
          <h3 class="modal__heading">Are you sure?</h3>
          
          <input type="hidden" name="delete-id" id="delete-id" class="modal__input modal__input_type_delete" required />
          
          <button type="submit" class="button modal__button modal__button_type_delete" name="delete-submit">Yes</button>
          
          <button type="reset" class="popup__exit button" aria-label="Cancel"></button>
        </form>
      </div>


      <div class="popup popup_dark">  
        <div class="popup__item photo-viewer">
          <figure class="photo-viewer__figure">
            <img class="photo-viewer__image" alt="caption" />
            <figcaption class="photo-viewer__caption">Hello, here is a caption</figcaption>
          </figure>
          <button type="button" class="popup__exit photo-viewer__exit button" aria-label="Close Photo Form"></button>
        </div>
      </div>
      
      <template id="photo-template">
        <li class="photo">
          <img class="photo__image" />
          <div class="photo__meta">
            <h2 class="photo__caption"></h2>
            <button type="button" class="photo__like button" aria-label="Like"><span class="photo__like-count"></span></button>
          </div>
          <button type="reset" class="photo__delete button" aria-label="Delete"></button>
        </li>
      </template>
    </>
  );
}

export default App;
