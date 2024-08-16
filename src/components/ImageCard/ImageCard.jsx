import css from "../ImageCard/ImageCard.module.css";
const ImageCard = ({
  id,
  author,
  description,
  smallPhoto,
  openModal,
  setCurrentImage,
  fullPhoto,
}) => {
  const handleClick = () => {
    setCurrentImage({ url: fullPhoto, alt: description });
    openModal();
  };
  return (
    <div onClick={handleClick} className={css.block}>
      <img className={css.block__img} src={smallPhoto} alt={description} />
      <div className={css.block__descr}>
        <h3 className={css.block__title}>Author</h3>
        <p className={css.block__text}>{author}</p>
      </div>
    </div>
  );
};

export default ImageCard;
