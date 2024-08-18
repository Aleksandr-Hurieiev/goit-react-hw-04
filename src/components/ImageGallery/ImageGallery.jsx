import ImageCard from "../ImageCard/ImageCard.jsx";
import css from "../ImageGallery/ImageGallery.module.css";
const ImageGallery = ({ images, openModal, setCurrentImage }) => {
  return (
    <ul className={css.list}>
      {images.map((user) => {
        console.log(user);
        return (
          <li key={user.id}>
            <ImageCard
              author={user.user.name}
              description={user.description}
              smallPhoto={user.urls.small}
              fullPhoto={user.urls.full}
              openModal={openModal}
              setCurrentImage={setCurrentImage}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default ImageGallery;
