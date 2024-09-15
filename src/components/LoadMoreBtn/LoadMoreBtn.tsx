import { FC } from 'react';
import css from './LoadMoreBtn.module.css';

interface LoadMoreBtnProps {
    children?: React.ReactNode,
    onClick: () => void,
    disabled: boolean,
}


const LoadMoreBtn: FC<LoadMoreBtnProps> = ({ children, onClick, disabled }) => {
    return (
        <button type="button" onClick={onClick} disabled={disabled} className={css.loadMoreBtn}>
            {children}
        </button>
    );
}

export default LoadMoreBtn;
