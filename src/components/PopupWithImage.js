function PopupWithImage() {
  return (
    <div className="popup popup_dark">  
      <div className="popup__item photo-viewer">
        <figure className="photo-viewer__figure">
          <img className="photo-viewer__image" alt="caption" />
          <figcaption className="photo-viewer__caption">Hello, here is a caption</figcaption>
        </figure>
        <button type="button" className="popup__exit photo-viewer__exit button" aria-label="Close Photo Form"></button>
      </div>
    </div>
  );
}

export default PopupWithImage;
