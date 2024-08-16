import ImageCard from "../ImageCard/ImageCard.jsx";
import css from "../ImageGallery/ImageGallery.module.css";
const ImageGallery = ({ articles, openModal, setCurrentImage }) => {
  return (
    <ul className={css.list}>
      {articles.map((user) => {
        console.log(user);
        return (
          <ImageCard
            key={user.id}
            id={user.id}
            author={user.user.name}
            description={user.description}
            smallPhoto={user.urls.small}
            fullPhoto={user.urls.full}
            openModal={openModal}
            setCurrentImage={setCurrentImage}
          />
        );
      })}
    </ul>
  );
};

export default ImageGallery;
