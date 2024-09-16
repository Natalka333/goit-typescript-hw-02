import { useEffect, useState, } from "react";

import '../App.css'
import SearchBar from "../components/SearchBar/SearchBar";
import Loader from "../components/Loader/Loader";
import ErrorMessage from "../components/ErrorMessage/ErrorMessage";
import ImageGallery from "../components/ImageGallery/ImageGallery";

import { fetchImagesGallery } from "../components/images-api";
import LoadMoreBtn from "../components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "../components/ImageModal/ImageModal";
import { Image } from "./App.types";



function App() {
  const [query, setQuery] = useState<string>('');
  const [page, setPage] = useState<number>(1)
  const [images, setImages] = useState<Image[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [isEmpty, setIsEmpty] = useState<boolean>(false);
  const [isShowModal, setIsShowModal] = useState<boolean>(false);
  const [showBtn, setShowBtn] = useState<boolean>(false);
  const [urlsModal, setUrlsModal] = useState<string>('')
  const [altModal, setAltModal] = useState<string>('')




  useEffect(() => {
    if (!query) {
      return
    }

    const fetchImages = async () => {
      setLoading(true);
      setError(null);
      try {
        const { results, total_pages } = await fetchImagesGallery(query, page);
        console.log(results)
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


  const handleSearch = (value: string) => {
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

  const OpenModal = (urls: string, alt: string) => {
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
