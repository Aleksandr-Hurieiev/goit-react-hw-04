import { useState, useEffect } from "react";
import ImageModal from "./components/ImageModal/ImageModal.jsx";
import toast, { Toaster } from "react-hot-toast";
import Loader from "./components/Loader/Loader.jsx";
import fetchArticlesWithSeach from "./fetchArticlesWithSeach.js";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage.jsx";
import SeachBar from "./components/SeachBar/SeachBar.jsx";
import ImageGallery from "./components/ImageGallery/ImageGallery.jsx";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn.jsx";
import "./App.css";

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  // Масив HTTPS запроса
  const [articles, setArticles] = useState(null);
  // номер страницы
  const [numberPage, setNumberPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  // Ошибка
  const [error, setError] = useState(false);
  // Лоадер
  const [loading, setLoading] = useState(false);
  // Поисковое слово
  const [userSeach, setUserSeach] = useState(null);
  const [currentImage, setCurrentImage] = useState({
    url: "",
    alt: "",
  });

  useEffect(() => {
    if (userSeach === null) return;
    const getPhotos = async (userSeach) => {
      setLoading(false);
      try {
        const data = await fetchArticlesWithSeach(userSeach, numberPage);
        setError(false);
        setArticles((prevImages) => {
          if (prevImages !== null) {
            setError(false);
            return [...prevImages, ...data.results];
          }
          return data.results;
        });
        setError(false);
        setTotalPage(data.total_pages);
        if (data.total_pages === 0) {
          toast.error("Nothing was found for your request", {
            duration: 4000,
            position: "top-right",
          });
        }
        return;
      } catch (error) {
        setError(true);
        setLoading(false);
        console.log(error);
      } finally {
        setError(false);
        setLoading(false);
      }
    };
    getPhotos(userSeach);
  }, [userSeach, numberPage]);

  const onSubmit = (userDate) => {
    setArticles(null);
    setUserSeach(userDate);
    setNumberPage(1);
  };
  // modal open
  function openModal() {
    setModalIsOpen(true);
  }
  // modal close
  function closeModal() {
    setModalIsOpen(false);
  }
  //
  return (
    <div>
      <Toaster />
      <SeachBar onSubmit={onSubmit} />
      {loading && <Loader />}
      {articles !== null && (
        <ImageGallery
          articles={articles}
          openModal={openModal}
          setCurrentImage={setCurrentImage}
        />
      )}
      <ImageModal
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
        currentImage={currentImage}
      />
      {error && <ErrorMessage />}
      {totalPage > numberPage && (
        <LoadMoreBtn
          handleClick={() => {
            setNumberPage(numberPage + 1);
          }}
        />
      )}
    </div>
  );
}

export default App;
