import Modal from 'react-modal';
import css from './ImageModal.module.css'
import { FC } from 'react';

interface ImageModalProps {
    urls: string,
    alt_description: string,
    isOpen: boolean;

    onRequestClose: () => void,
}

const ImageModal: FC<ImageModalProps> = ({ urls, alt_description, isOpen, onRequestClose }) => {
    const customStyles = {
        content: {
            maxWidth: '80%',
            maxHeight: '80%',
            margin: 'auto',
            padding: 0,
            overflow: 'hidden',
        },
        overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.75)',
        },
    };
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            style={customStyles}
        >
            <div className={css.modalContent}>
                <img src={urls} alt={alt_description} className={css.modalImage} />
            </div>

        </Modal>
    )
}

export default ImageModal


Modal.setAppElement('#root');