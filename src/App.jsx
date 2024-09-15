import { useEffect, useState, } from "react";

import './App.css'
import SearchBar from "./components/SearchBar/SearchBar";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import ImageGallery from "./components/ImageGallery/ImageGallery";

import { fetchImagesGallery } from "./components/images-api";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";


function App() {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1)
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);
  const [isShowModal, setIsShowModal] = useState(false);
  const [showBtn, setShowBtn] = useState(false);
  const [urlsModal, setUrlsModal] = useState('')
  const [altModal, setAltModal] = useState('')




  useEffect(() => {
    if (!query) {
      return
    }

    const fetchImages = async () => {
      setLoading(true);
      setError(null);
      try {
        const { results, total_pages } = await fetchImagesGallery(query, page);
        // console.log(results)
        if (!results.length) {
          return setIsEmpty(true);
        }
        setImages((prevImages) => [...prevImages, ...results])
        setShowBtn(total_pages && total_pages !== page)

      } catch (error) {
        setError(error);
      } finally {
        setLoading(false)
      }
    }
    fetchImages();
  }, [query, page]);


  const handleSearch = (value) => {
    setQuery(value);
    setImages([]);
    setPage(1);
    setShowBtn(false);
    setIsEmpty(false);
    setError(null);
  }

  const onLoadmoreBtn = () => {
    setPage((prevPage) => prevPage + 1)
  }

  const OpenModal = (urls, alt) => {
    setIsShowModal(true)
    setUrlsModal(urls)
    setAltModal(alt)

  }

  const CloseModal = () => {
    setIsShowModal(false)
  }

  return (
    <>
      <SearchBar onSubmit={handleSearch} />
      {images.length > 0 && <ImageGallery images={images}
        openModal={OpenModal} />}
      {showBtn && <LoadMoreBtn onClick={onLoadmoreBtn} disabled={loading}>{loading ? "Loading..." : "Load more"}</LoadMoreBtn>}
      {!loading && !images.length && !isEmpty && (<ErrorMessage>Let`s begin search!</ErrorMessage>)}
      {isEmpty && (<ErrorMessage>Sorry.There are no images...😒</ErrorMessage>)}
      {loading && <Loader />}
      {error && <ErrorMessage>Whoops, something went wrong! Please try reloading this page!</ErrorMessage>}
      <ImageModal
        isOpen={isShowModal}
        onRequestClose={CloseModal}
        urls={urlsModal}
        alt_description={altModal}
      ></ImageModal>

    </>
  )
}

export default App
