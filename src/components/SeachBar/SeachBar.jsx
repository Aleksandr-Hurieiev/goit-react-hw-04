import toast, { Toaster } from "react-hot-toast";
import css from "../SeachBar/SeachBar.module.css"
const SeachBar = ({ onSubmit }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const userValue = form.elements[0].value;
    if (userValue.trim() === "") {
      toast.error("Please enter a valid search word");
    }
    onSubmit(userValue);
    form.reset();
  };

  return (
    <header className={css.header}>
      <form className={css.form} onSubmit={handleSubmit}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit">Search</button>
        <Toaster />
      </form>
    </header>
  );
};

export default SeachBar;
