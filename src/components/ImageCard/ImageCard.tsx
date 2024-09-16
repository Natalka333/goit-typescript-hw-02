import { FC } from 'react';
import css from './ImageCard.module.css';
import { ImageCardProps } from '../../App/App.types';



const ImageCard: FC<ImageCardProps> = ({ color, urls, openModal, alt_description, likes }) => {
    return (
        <li className={css.gallery}>
            <div className={css.card} style={{ backgroundColor: color, borderColor: color }}>
                <img src={urls.small} onClick={() => openModal(urls.regular, alt_description, likes)} alt={alt_description} />
            </div>
            <div className={css.description}>
                <p className={css.likes}>Likes: {likes}</p>
            </div>

        </li>
    );
}

export default ImageCard;








