import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import FormField from './FormField';

function App() {


  return (
    <>
      <div className="container">
        <Header />
        
        <Main />
        
        <Footer />
      </div>
      
      
      <PopupWithForm heading="Edit profile" name="profile" submitText="Save">
        <FormField name="profile-name" label="Name" minMax={[2, 40]} />
        <FormField name="profile-about" label="About me" minMax={[2, 200]} />
      </PopupWithForm>

      <PopupWithForm heading="Change profile picture" name="avatar" submitText="Save">
        <FormField name="profile-avatar" type="url" label="Image link" />
      </PopupWithForm>

      <PopupWithForm heading="New place" name="photo" submitText="Create">
        <FormField name="photo-name" label="Title" minMax={[2, 30]} />
        <FormField name="photo-link" type="url" label="Image link" />
      </PopupWithForm>    

      <PopupWithForm heading="Are you sure?" name="delete" submitText="Yes">
        <input type="hidden" name="delete-id" id="delete-id" className="modal__input modal__input_type_delete" required />
      </PopupWithForm>

      <PopupWithImage />
      
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
