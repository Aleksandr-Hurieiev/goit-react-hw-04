import css from "../LoadMoreBtn/LoadMoreBtn.module.css";
const LoadMoreBtn = ({ handleClick }) => {
  return (
    <button className={css.btn} type="button" onClick={handleClick}>
      Load more photo
    </button>
  );
};

export default LoadMoreBtn;
