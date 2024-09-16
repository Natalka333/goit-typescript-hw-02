import { FC } from "react"
import { ImageGalleryProps } from "../../App/App.types"
import ImageCard from "../ImageCard/ImageCard"
import css from './ImageGallery.module.css'



const ImageGallery: FC<ImageGalleryProps> = ({ images, openModal }) => {
    return (
        <ul className={css.gallery}>
            {images.map(({ id, alt_description, color, urls, likes }) => <ImageCard
                openModal={openModal}
                key={id}
                alt_description={alt_description}
                color={color}
                urls={urls}
                likes={likes}

            />)}
        </ul>
    )
}

export default ImageGallery




